/* ============================================================
   Ninja Selling app feedback — form behaviour
   Vanilla JS, no build step. See README.md for the data flow.
   ============================================================ */
(function () {
  "use strict";

  var CFG = window.NC_CONFIG || {};
  var STORE_KEY = "ninja_connect_submitter";
  var EMAIL_RE = /.+@.+\..+/;

  var SCREENS = ["Home", "Mastery & Flow", "My Business", "Ninja 9", "FORD & Record",
    "Business Tracker", "My People", "Scorecard", "My Ninja Path", "Classes", "NinjaYou",
    "Resources", "Referrals (Find a Ninja)", "Community", "Marketplace", "Ninja AI", "Other"];
  var PLATFORMS = ["Desktop web", "Mobile web", "iPhone app", "Android app"];
  var TIMINGS = ["Just now", "Earlier today", "Yesterday", "This week", "Longer ago / ongoing"];

  var DETAIL_LABEL = {
    broken: "What happened?",
    idea: "What would you like to see?",
    win: "What worked well?"
  };
  var SHOT_HINT = {
    broken: "Optional, but it usually saves a round of questions.",
    other: "You may or may not have something visual to share, it's not expected or required."
  };

  /* ---------- element handles ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var el = {
    form: $("feedback-form"),
    honeypot: $("company"),
    typeGrid: $("type-grid"),
    errType: $("err-type"),
    lower: $("lower"),
    confirmation: $("confirmation"),

    onBehalf: $("on-behalf"),
    identitySummary: $("identity-summary"),
    identitySummaryText: $("identity-summary-text"),
    editIdentity: $("edit-identity"),
    identityFields: $("identity-fields"),
    affectedBlock: $("affected-block"),
    submitterName: $("submitter-name"),
    submitterEmail: $("submitter-email"),
    affectedName: $("affected-name"),
    affectedEmail: $("affected-email"),

    contextTop: $("context-top"),
    contextTiming: $("context-timing"),
    screen: $("screen"),
    platform: $("platform"),
    timing: $("timing"),
    description: $("description"),
    descriptionLabel: $("description-label"),
    descriptionHint: $("description-hint"),

    shotHint: $("shot-hint"),
    dropzone: $("dropzone"),
    fileInput: $("file-input"),
    thumbs: $("thumbs"),
    attachStatus: $("attach-status"),
    pasteKey: $("paste-key"),

    acknowledged: $("acknowledged"),
    errAck: $("err-ack"),
    errBanner: $("err-banner"),
    errSubmit: $("err-submit"),
    submitBtn: $("submit-btn"),
    submitAnotherBtn: $("submit-another-btn")
  };

  /* field wrappers, for the invalid outline */
  var fieldOf = {
    submitterName: $("f-submitter-name"),
    submitterEmail: $("f-submitter-email"),
    affectedName: $("f-affected-name"),
    description: $("f-description")
  };

  /* ---------- state ---------- */
  var state = {
    type: "",
    onBehalf: false,
    editingIdentity: false,
    images: [],           /* {id, name, url, file} — url is an object URL */
    errors: {},
    submitting: false,
    loadedAt: Date.now()
  };

  /* ---------- helpers ---------- */
  function show(node, on) { if (node) node.hidden = !on; }

  function fillSelect(select, values, placeholder) {
    var html = placeholder ? '<option value="">' + placeholder + "</option>" : "";
    values.forEach(function (v) {
      html += '<option value="' + v.replace(/"/g, "&quot;") + '">' + v + "</option>";
    });
    select.innerHTML = html;
  }

  function detectPlatform() {
    var ua = navigator.userAgent;
    if (/iPhone|iPad/.test(ua)) return "iPhone app";
    if (/Android/.test(ua)) return "Android app";
    if (/Mobi/.test(ua)) return "Mobile web";
    return "Desktop web";
  }

  function isMac() {
    var p = (navigator.userAgentData && navigator.userAgentData.platform) ||
            navigator.platform || navigator.userAgent || "";
    return /Mac/i.test(p);
  }

  function readSaved() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }

  function persistSubmitter() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        name: el.submitterName.value,
        email: el.submitterEmail.value
      }));
    } catch (e) { /* private mode — nothing to do */ }
  }

  function hasSavedIdentity() {
    return !!(el.submitterName.value.trim() && EMAIL_RE.test(el.submitterEmail.value));
  }

  function clearError(key) {
    if (!state.errors[key]) return;
    delete state.errors[key];
    renderErrors();
  }

  /* ---------- rendering ---------- */
  function renderType() {
    Array.prototype.forEach.call(el.typeGrid.children, function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.type === state.type));
    });

    var wasHidden = el.lower.hidden;
    show(el.lower, !!state.type);
    if (!state.type) return;

    /* Fade the revealed block in — only on the transition, not on every render. */
    if (wasHidden) {
      el.lower.classList.remove("nc-reveal");
      void el.lower.offsetWidth;          /* restart the animation */
      el.lower.classList.add("nc-reveal");
    }

    var showContext = state.type !== "idea";
    show(el.contextTop, showContext);
    show(el.contextTiming, showContext);

    el.descriptionLabel.textContent = DETAIL_LABEL[state.type];
    show(el.descriptionHint, state.type === "broken");
    el.shotHint.textContent = state.type === "broken" ? SHOT_HINT.broken : SHOT_HINT.other;
  }

  function renderIdentity() {
    var summarise = hasSavedIdentity() && !state.editingIdentity;
    show(el.identitySummary, summarise);
    show(el.identityFields, !summarise);
    if (summarise) {
      el.identitySummaryText.textContent =
        el.submitterName.value + " · " + el.submitterEmail.value;
    }
    show(el.affectedBlock, state.onBehalf);
  }

  function renderErrors() {
    Object.keys(fieldOf).forEach(function (key) {
      fieldOf[key].classList.toggle("is-invalid", !!state.errors[key]);
    });
    show(el.errType, !!state.errors.type);
    show(el.errAck, !!state.errors.acknowledged);

    var fieldErrors = Object.keys(state.errors).filter(function (k) {
      return k !== "acknowledged" && k !== "type";
    });
    show(el.errBanner, fieldErrors.length > 0);
  }

  function renderThumbs() {
    el.thumbs.innerHTML = "";
    show(el.thumbs, state.images.length > 0);

    state.images.forEach(function (im) {
      var wrap = document.createElement("div");
      wrap.className = "thumb";

      var img = document.createElement("img");
      img.src = im.url;
      img.alt = "Attached screenshot: " + im.name;

      var remove = document.createElement("button");
      remove.type = "button";
      remove.className = "thumb-remove";
      remove.innerHTML = "&times;";
      remove.setAttribute("aria-label", "Remove " + im.name);
      remove.addEventListener("click", function () { removeImage(im.id); });

      var name = document.createElement("div");
      name.className = "thumb-name";
      name.textContent = im.name;
      name.title = im.name;

      wrap.appendChild(img);
      wrap.appendChild(remove);
      wrap.appendChild(name);
      el.thumbs.appendChild(wrap);
    });
  }

  function announce(msg) { el.attachStatus.textContent = msg; }

  /* ---------- attachments ---------- */
  function addFiles(list) {
    var files = Array.prototype.slice.call(list || []).filter(function (f) {
      return f && f.type && f.type.indexOf("image/") === 0;
    });
    if (!files.length) return;

    var room = CFG.MAX_IMAGES - state.images.length;
    if (room <= 0) {
      announce("You can attach up to " + CFG.MAX_IMAGES + " screenshots.");
      return;
    }

    var added = files.slice(0, Math.min(CFG.MAX_IMAGES_PER_ADD, room)).map(function (f, i) {
      return {
        id: String(Date.now()) + "-" + i,
        name: f.name || "Pasted screenshot",
        url: URL.createObjectURL(f),
        file: f
      };
    });

    state.images = state.images.concat(added);
    renderThumbs();
    announce(added.length + (added.length === 1 ? " screenshot added." : " screenshots added.") +
             " " + state.images.length + " of " + CFG.MAX_IMAGES + " attached.");
  }

  function removeImage(id) {
    state.images = state.images.filter(function (im) {
      if (im.id === id) { URL.revokeObjectURL(im.url); return false; }
      return true;
    });
    renderThumbs();
    announce("Screenshot removed. " + state.images.length + " attached.");
  }

  function releaseImages() {
    state.images.forEach(function (im) { URL.revokeObjectURL(im.url); });
    state.images = [];
    renderThumbs();
  }

  /* Draw to canvas, cap the long edge at MAX_IMAGE_WIDTH, re-encode as JPEG. */
  function downscale(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        try {
          var scale = Math.min(1, CFG.MAX_IMAGE_WIDTH / img.width);
          var canvas = document.createElement("canvas");
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          var ctx = canvas.getContext("2d");
          ctx.fillStyle = "#FFFFFF";           /* flatten transparency for JPEG */
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", CFG.JPEG_QUALITY));
        } catch (e) { reject(e); }
        finally { URL.revokeObjectURL(url); }
      };
      img.onerror = function (e) { URL.revokeObjectURL(url); reject(e); };
      img.src = url;
    });
  }

  /* ---------- validation ---------- */
  function validate() {
    var errors = {};
    if (!state.type) errors.type = true;

    var description = el.description.value.trim();
    if (description.length < 8) errors.description = true;

    if (!el.submitterName.value.trim()) errors.submitterName = true;
    if (!EMAIL_RE.test(el.submitterEmail.value)) errors.submitterEmail = true;
    if (state.onBehalf && !el.affectedName.value.trim()) errors.affectedName = true;
    if (!el.acknowledged.checked) errors.acknowledged = true;

    state.errors = errors;
    renderErrors();

    /* If the identity fields are the problem, expand them so they can be fixed. */
    if ((errors.submitterName || errors.submitterEmail) && !state.editingIdentity) {
      state.editingIdentity = true;
      renderIdentity();
    }

    var firstBad = document.querySelector(".field.is-invalid input, .field.is-invalid textarea");
    if (firstBad) firstBad.focus({ preventScroll: false });

    return Object.keys(errors).length === 0;
  }

  /* ---------- submit ---------- */
  function buildPayload(images) {
    var isIdea = state.type === "idea";
    return {
      report_type: state.type,
      on_behalf_of: state.onBehalf,
      submitter_name: el.submitterName.value.trim(),
      submitter_email: el.submitterEmail.value.trim(),
      affected_name: state.onBehalf ? el.affectedName.value.trim() : el.submitterName.value.trim(),
      affected_email: state.onBehalf ? el.affectedEmail.value.trim() : el.submitterEmail.value.trim(),
      screen: isIdea ? "" : el.screen.value,
      platform: isIdea ? "" : el.platform.value,
      description: el.description.value.trim(),
      timing: isIdea ? "" : el.timing.value,
      acknowledged_non_urgent: true,
      user_agent: navigator.userAgent,
      submitted_at: new Date().toISOString(),
      images: images,
      /* spam guards — enforced server-side */
      company: el.honeypot.value,
      elapsed_ms: Date.now() - state.loadedAt
    };
  }

  function send(payload) {
    if (!CFG.ENDPOINT) {
      /* Dry run: no endpoint configured yet. */
      console.log("[dry run] Ninja Connect submission", payload);
      return Promise.resolve({ ok: true, dryRun: true });
    }
    return fetch(CFG.ENDPOINT, {
      method: "POST",
      /* text/plain keeps this a CORS "simple request", so the browser sends no
         preflight — Apps Script web apps do not answer OPTIONS. The body is
         still JSON and is parsed as JSON on the other side. */
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow"
    }).then(function (res) {
      return res.text().then(function (text) {
        var data;
        try { data = JSON.parse(text); }
        catch (e) { throw new Error("Unexpected response from the server."); }
        if (!res.ok || !data.ok) {
          var e = new Error(data.error || "The submission was not accepted.");
          e.fromServer = !!data.error;   /* safe to show verbatim */
          throw e;
        }
        return data;
      });
    });
  }

  function setSubmitting(on) {
    state.submitting = on;
    el.submitBtn.disabled = on;
    el.submitAnotherBtn.disabled = on;
    el.submitBtn.textContent = on ? "Sending…" : "Submit Feedback";
  }

  function resetAfterSubmit(clearType) {
    el.description.value = "";
    el.screen.value = "";
    el.timing.value = TIMINGS[0];
    el.affectedName.value = "";
    el.affectedEmail.value = "";
    el.acknowledged.checked = false;
    el.honeypot.value = "";
    releaseImages();
    state.errors = {};
    state.editingIdentity = false;
    state.loadedAt = Date.now();
    if (clearType) state.type = "";
    renderErrors();
    renderType();
    renderIdentity();
  }

  function doSubmit(keepGoing) {
    if (state.submitting) return;

    show(el.errSubmit, false);
    if (!validate()) return;

    setSubmitting(true);

    var jobs = state.images.map(function (im) {
      return downscale(im.file).catch(function () { return null; });
    });

    Promise.all(jobs)
      .then(function (results) {
        var images = results.filter(Boolean);
        return send(buildPayload(images));
      })
      .then(function () {
        persistSubmitter();
        resetAfterSubmit(keepGoing);
        show(el.confirmation, true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(function (err) {
        show(el.confirmation, false);
        el.errSubmit.textContent = err && err.fromServer
          ? err.message
          : "We couldn't send that just now. Please try again in a moment — or email us " +
            "at techsupport@ninjaselling.com and we'll pick it up from there.";
        show(el.errSubmit, true);
        console.error("Ninja Connect submit failed:", err);
      })
      .finally(function () { setSubmitting(false); });
  }

  /* ---------- wiring ---------- */
  function init() {
    fillSelect(el.screen, SCREENS, "Choose a screen");
    fillSelect(el.platform, PLATFORMS, null);
    fillSelect(el.timing, TIMINGS, null);
    el.platform.value = detectPlatform();
    el.timing.value = TIMINGS[0];
    el.pasteKey.textContent = isMac() ? "⌘V" : "Ctrl + V";

    var saved = readSaved();
    el.submitterName.value = saved.name || "";
    el.submitterEmail.value = saved.email || "";
    el.affectedName.value = "";
    el.affectedEmail.value = "";

    renderType();
    renderIdentity();
    renderErrors();

    /* Type picker */
    el.typeGrid.addEventListener("click", function (e) {
      var btn = e.target.closest(".type-option");
      if (!btn) return;
      state.type = btn.dataset.type;
      show(el.confirmation, false);
      clearError("type");
      renderType();
    });

    /* Identity */
    el.onBehalf.addEventListener("change", function () {
      state.onBehalf = el.onBehalf.checked;
      state.editingIdentity = false;
      renderIdentity();
    });
    el.editIdentity.addEventListener("click", function () {
      state.editingIdentity = true;
      renderIdentity();
      el.submitterName.focus();
    });
    [el.submitterName, el.submitterEmail].forEach(function (input) {
      input.addEventListener("blur", persistSubmitter);
    });

    /* Clear each field's error as soon as it changes */
    var watched = {
      submitterName: el.submitterName,
      submitterEmail: el.submitterEmail,
      affectedName: el.affectedName,
      description: el.description
    };
    Object.keys(watched).forEach(function (key) {
      watched[key].addEventListener("input", function () { clearError(key); });
    });
    el.acknowledged.addEventListener("change", function () { clearError("acknowledged"); });

    /* Attachments — paste anywhere on the page */
    document.addEventListener("paste", function (e) {
      var files = e.clipboardData && e.clipboardData.files;
      if (files && files.length) { e.preventDefault(); addFiles(files); }
    });

    el.dropzone.addEventListener("click", function () { el.fileInput.click(); });
    el.fileInput.addEventListener("change", function (e) {
      addFiles(e.target.files);
      e.target.value = "";
    });
    el.dropzone.addEventListener("dragover", function (e) {
      e.preventDefault();
      el.dropzone.classList.add("is-dragging");
    });
    el.dropzone.addEventListener("dragleave", function () {
      el.dropzone.classList.remove("is-dragging");
    });
    el.dropzone.addEventListener("drop", function (e) {
      e.preventDefault();
      el.dropzone.classList.remove("is-dragging");
      addFiles(e.dataTransfer && e.dataTransfer.files);
    });
    /* Stop the browser opening an image dropped outside the zone */
    ["dragover", "drop"].forEach(function (type) {
      window.addEventListener(type, function (e) {
        if (!el.dropzone.contains(e.target)) e.preventDefault();
      });
    });

    /* Submit */
    el.form.addEventListener("submit", function (e) {
      e.preventDefault();
      doSubmit(false);
    });
    el.submitAnotherBtn.addEventListener("click", function () { doSubmit(true); });

    /* Never restore the affected person's details from a bfcache page restore */
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) { el.affectedName.value = ""; el.affectedEmail.value = ""; }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
