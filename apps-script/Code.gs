/* ============================================================
   Ninja Selling app feedback — backend
   A Google Apps Script web app. Deploy it from the Google account
   that owns the Drive you want the screenshots in; the script runs
   as that account, so no keys or service accounts are involved.

   Receives  : JSON POST from the static form on GitHub Pages
   Writes    : one row per submission to a Google Sheet
   Stores    : screenshots in a per-submission Drive subfolder,
               with the folder link in the sheet row

   Setup instructions: see ../SETUP.md
   ============================================================ */

/* ----------------------- Configuration ----------------------- */

var CONFIG = {
  /* Sheet the rows go into. Copy the long id out of the sheet URL:
     https://docs.google.com/spreadsheets/d/<THIS PART>/edit */
  SHEET_ID: "1cEvOG88MTk0eN9jxE22KwremoGbfAUwSEgzu31FQ45o",
  SHEET_NAME: "Submissions",

  /* Drive folder the screenshots go into. Copy the id out of the folder URL:
     https://drive.google.com/drive/folders/<THIS PART> */
  DRIVE_FOLDER_ID: "1cXVsLRkgd9NF8nHH-GAFtrcGKDqYd9GM",

  /* false  — screenshots inherit the Drive folder's permissions (private
              to whoever you share the folder with). Recommended.
     true   — each submission folder is set to "anyone with the link can
              view", so the sheet links open for anyone. Screenshots can
              contain member data, so only turn this on deliberately. */
  MAKE_LINKS_PUBLIC: false,

  /* Spam guards */
  MIN_FILL_MS: 3000,          /* a human cannot fill the form faster */
  MAX_IMAGES: 6,
  MAX_IMAGE_BYTES: 4 * 1024 * 1024,
  MAX_DESCRIPTION: 5000,
  RATE_LIMIT_PER_HOUR: 12     /* per submitter email */
};

var HEADERS = [
  "Received",            /* server timestamp */
  "Type",
  "On behalf of",
  "Submitter name",
  "Submitter email",
  "Affected name",
  "Affected email",
  "Screen",
  "Platform",
  "Description",
  "Timing",
  "Screenshots",         /* clickable folder link */
  "# Screenshots",
  "Screenshot files",    /* direct file links, one per line */
  "Acknowledged",
  "User agent",
  "Submitted at (client)",
  "Status",              /* left blank for triage */
  "Notes"                /* left blank for triage */
];

var TYPE_LABEL = {
  broken: "Something isn't working",
  idea: "I have an idea",
  win: "Something worked well"
};

/* ----------------------- Entry points ----------------------- */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: "Empty request." });
    }

    var body = JSON.parse(e.postData.contents);
    var problem = reject(body);
    if (problem) {
      log_("rejected: " + problem);
      return json({ ok: false, error: problem });
    }

    var stored = storeImages_(body);
    var row = appendRow_(body, stored);

    return json({ ok: true, row: row, screenshots: stored.count });

  } catch (err) {
    log_("error: " + (err && err.stack ? err.stack : err));
    return json({ ok: false, error: "Something went wrong on our side. Please try again in a moment." });
  }
}

/* A plain GET is a health check — open the /exec URL in a browser to use it. */
function doGet() {
  var status = { ok: true, service: "ninja-app-feedback", checks: {} };
  try {
    sheet_();
    status.checks.sheet = "ok";
  } catch (err) {
    status.ok = false;
    status.checks.sheet = String(err);
  }
  try {
    DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID).getName();
    status.checks.drive = "ok";
  } catch (err) {
    status.ok = false;
    status.checks.drive = String(err);
  }
  return json(status);
}

/* ----------------------- Validation ----------------------- */

/* Returns a message when the submission should be rejected, otherwise "".
   Every message here is shown to the person, so keep them plain and calm. */
function reject(b) {
  var ODD = "That didn't come through as expected. Please reload the page and try again.";

  /* Honeypot — a real person never sees this field. */
  if (b.company) return ODD;

  /* Filled impossibly fast. */
  if (Number(b.elapsed_ms) < CONFIG.MIN_FILL_MS) return ODD;

  if (["broken", "idea", "win"].indexOf(b.report_type) === -1) {
    return "Choose one so we know where to send this.";
  }

  var description = String(b.description || "").trim();
  if (description.length < 8) return "We need a bit more here to help.";
  if (description.length > CONFIG.MAX_DESCRIPTION) return "That description is too long.";

  if (!String(b.submitter_name || "").trim()) return "We need a bit more here to help.";
  if (!/.+@.+\..+/.test(String(b.submitter_email || ""))) return "We need a bit more here to help.";
  if (b.on_behalf_of && !String(b.affected_name || "").trim()) {
    return "We need a bit more here to help.";
  }
  if (b.acknowledged_non_urgent !== true) {
    return "Please check this box so we can send your note along.";
  }

  var images = b.images || [];
  if (!Array.isArray(images)) return ODD;
  if (images.length > CONFIG.MAX_IMAGES) {
    return "That's more than " + CONFIG.MAX_IMAGES + " screenshots — please remove a few.";
  }
  for (var i = 0; i < images.length; i++) {
    if (typeof images[i] !== "string" || images[i].indexOf("data:image/") !== 0) {
      return ODD;
    }
    /* base64 inflates by ~4/3 */
    if (images[i].length * 0.75 > CONFIG.MAX_IMAGE_BYTES) {
      return "One of those screenshots is too large to send.";
    }
  }

  if (overRateLimit_(b.submitter_email)) {
    return "That's a lot of notes in one hour — please give it a few minutes.";
  }

  return "";
}

function overRateLimit_(email) {
  if (!CONFIG.RATE_LIMIT_PER_HOUR) return false;
  try {
    var cache = CacheService.getScriptCache();
    var key = "rl_" + Utilities.base64EncodeWebSafe(String(email).toLowerCase()).slice(0, 80);
    var count = Number(cache.get(key) || 0) + 1;
    cache.put(key, String(count), 3600);
    return count > CONFIG.RATE_LIMIT_PER_HOUR;
  } catch (err) {
    return false;   /* never block a real submission because the cache failed */
  }
}

/* ----------------------- Drive ----------------------- */

function storeImages_(b) {
  var images = b.images || [];
  if (!images.length) return { count: 0, folderUrl: "", fileUrls: [] };

  var parent = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
  var stamp = Utilities.formatDate(new Date(), timezone_(), "yyyy-MM-dd HH-mm-ss");
  var who = safeName_(b.submitter_name) || "Unknown";
  var folder = parent.createFolder(stamp + " — " + who + " — " + (b.report_type || "note"));

  var fileUrls = [];
  for (var i = 0; i < images.length; i++) {
    var parts = images[i].match(/^data:([^;]+);base64,(.*)$/);
    if (!parts) continue;
    var blob = Utilities.newBlob(
      Utilities.base64Decode(parts[2]),
      parts[1],
      "screenshot-" + (i + 1) + extensionFor_(parts[1])
    );
    fileUrls.push(folder.createFile(blob).getUrl());
  }

  if (CONFIG.MAKE_LINKS_PUBLIC) {
    try {
      folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (err) {
      log_("could not make folder public: " + err);
    }
  }

  return { count: fileUrls.length, folderUrl: folder.getUrl(), fileUrls: fileUrls };
}

function extensionFor_(mime) {
  if (mime === "image/png") return ".png";
  if (mime === "image/webp") return ".webp";
  if (mime === "image/gif") return ".gif";
  return ".jpg";
}

function safeName_(s) {
  return String(s || "").replace(/[^\w .'-]/g, "").trim().slice(0, 60);
}

/* ----------------------- Sheet ----------------------- */

function sheet_() {
  var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  var sh = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sh) sh = ss.insertSheet(CONFIG.SHEET_NAME);

  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sh.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#EDE6DC");      /* copper tint */
    sh.setFrozenRows(1);
    sh.setColumnWidth(HEADERS.indexOf("Description") + 1, 420);
    sh.setColumnWidth(HEADERS.indexOf("Notes") + 1, 260);
  }
  return sh;
}

function timezone_() {
  try { return SpreadsheetApp.openById(CONFIG.SHEET_ID).getSpreadsheetTimeZone(); }
  catch (err) { return Session.getScriptTimeZone(); }
}

function appendRow_(b, stored) {
  /* A lock keeps two simultaneous submissions from claiming the same row. */
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sh = sheet_();
    sh.appendRow([
      new Date(),
      TYPE_LABEL[b.report_type] || b.report_type,
      b.on_behalf_of ? "Yes" : "No",
      b.submitter_name || "",
      b.submitter_email || "",
      b.affected_name || "",
      b.affected_email || "",
      b.screen || "",
      b.platform || "",
      b.description || "",
      b.timing || "",
      stored.folderUrl,
      stored.count,
      stored.fileUrls.join("\n"),
      b.acknowledged_non_urgent ? "Yes" : "No",
      b.user_agent || "",
      b.submitted_at || "",
      "",   /* Status */
      ""    /* Notes  */
    ]);

    var row = sh.getLastRow();
    sh.getRange(row, 1, 1, HEADERS.length).setVerticalAlignment("top");
    sh.getRange(row, HEADERS.indexOf("Description") + 1).setWrap(true);
    return row;
  } finally {
    lock.releaseLock();
  }
}

/* ----------------------- Utilities ----------------------- */

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function log_(msg) {
  console.log(msg);
}

/* ----------------------- One-off setup helper -----------------------
   Run this once from the Apps Script editor (Run ▸ setUp) after filling
   in SHEET_ID and DRIVE_FOLDER_ID. It creates the header row and proves
   the script can reach both the sheet and the Drive folder.
   -------------------------------------------------------------------- */
function setUp() {
  var sh = sheet_();
  var folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
  console.log("Sheet ready: " + sh.getParent().getName() + " › " + sh.getName());
  console.log("Drive folder ready: " + folder.getName() + " (" + folder.getUrl() + ")");
  console.log("Now deploy: Deploy ▸ New deployment ▸ Web app, " +
              "Execute as: Me, Who has access: Anyone.");
}

/* Sends a fake submission through the whole path so you can confirm a row
   lands in the sheet. Run it from the editor, then delete the test row. */
function selfTest() {
  var pixel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAA" +
              "C0lEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
  var res = doPost({ postData: { contents: JSON.stringify({
    report_type: "broken",
    on_behalf_of: false,
    submitter_name: "Self test",
    submitter_email: "selftest@example.com",
    affected_name: "Self test",
    affected_email: "selftest@example.com",
    screen: "Home",
    platform: "Desktop web",
    description: "This is a self test row — delete it.",
    timing: "Just now",
    acknowledged_non_urgent: true,
    user_agent: "Apps Script selfTest",
    submitted_at: new Date().toISOString(),
    images: [pixel],
    company: "",
    elapsed_ms: 60000
  }) } });
  console.log(res.getContent());
}
