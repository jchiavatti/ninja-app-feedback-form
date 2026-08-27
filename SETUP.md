# Setup runbook

Three things to stand up, in this order. Budget about 20 minutes.

1. **Google side** — a Sheet, a Drive folder, and an Apps Script that writes to both.
2. **Config** — paste the script's URL into `js/config.js`.
3. **GitHub side** — push the repo and turn on Pages.

Everything on the Google side happens **while signed in to the Google account that owns
the Drive you want to use**. That is the whole trick to the "it's a different Drive"
problem: the Apps Script runs *as* that account, so it can write to that account's Drive
and Sheets without any API keys, service accounts, or sharing across accounts. Nothing
secret ever ships to the browser.

---

## 1. Google side

### 1a. Create the Sheet and the Drive folder

Signed in as the account that owns the target Drive:

1. Create a new Google Sheet — name it something like `Ninja app feedback`.
   From its URL, copy the id (the long string between `/d/` and `/edit`):
   `https://docs.google.com/spreadsheets/d/`**`1AbC…xyz`**`/edit`
2. Create a Drive folder for the screenshots — e.g. `Ninja app feedback — screenshots`.
   From its URL, copy the id:
   `https://drive.google.com/drive/folders/`**`1DeF…uvw`**

Put the folder next to the Sheet so the two live together.

### 1b. Create the Apps Script

1. In the Sheet, choose **Extensions ▸ Apps Script**. This creates a script owned by
   this same account — which is exactly what you want.
2. Delete the placeholder `myFunction` code.
3. Open [`apps-script/Code.gs`](apps-script/Code.gs) from this repo, copy the whole file,
   and paste it into the editor.
4. At the top of the file, fill in:
   - `SHEET_ID` — the id from step 1a
   - `DRIVE_FOLDER_ID` — the folder id from step 1a
   - `NOTIFY` — optionally, addresses to email on each submission,
     e.g. `["you@ninjaselling.com"]`. Leave `[]` for none.
5. Save (⌘S).

### 1c. Authorise and smoke-test

1. In the function dropdown, pick **`setUp`** and click **Run**.
2. Google will ask for permission — **Review permissions ▸ pick the account ▸
   Advanced ▸ Go to (project name) ▸ Allow**. The "unverified app" warning is expected:
   you are the developer and the user, and the script only touches the Sheet and folder
   you named.
3. The execution log should print `Sheet ready:` and `Drive folder ready:`. If it errors,
   the id is wrong or the account can't see that file.
4. Pick **`selfTest`** and **Run**. A test row should land in the Sheet with a screenshot
   folder link. Check it, then delete the row and the test folder.

### 1d. Deploy it as a web app

1. **Deploy ▸ New deployment**.
2. Gear icon ▸ **Web app**.
3. Set:
   - **Description**: `feedback form`
   - **Execute as**: **Me** *(so it writes to your Drive and Sheet)*
   - **Who has access**: **Anyone** *(the form is public and unauthenticated —
     this must be "Anyone", not "Anyone with a Google account")*
4. **Deploy**, approve if prompted, and copy the **Web app URL**. It ends in `/exec`.
5. Paste that URL into a browser tab. You should get back
   `{"ok":true,"service":"ninja-app-feedback","checks":{"sheet":"ok","drive":"ok"}}`.

> **If "Anyone" is not offered**, the account is a Google Workspace account whose admin
> has restricted web-app sharing. Either ask the admin to allow it, or create the script
> under a standard Google account that has edit access to the target Drive folder.

> **Whenever you edit `Code.gs` later**, the live URL does not change on its own. Use
> **Deploy ▸ Manage deployments ▸ (pencil) ▸ Version: New version ▸ Deploy**. Creating a
> brand-new deployment instead gives you a *different* URL, which you'd then have to
> paste into `config.js` again.

---

## 2. Config

Open [`js/config.js`](js/config.js) and set `ENDPOINT` to the `/exec` URL:

```js
ENDPOINT: "https://script.google.com/macros/s/AKfycb…/exec",
```

Leaving it as `""` keeps the form in dry-run mode — it validates and logs the payload to
the browser console without sending anything. Useful for previewing.

---

## 3. GitHub side

From this folder:

```bash
git init -b main && git add -A && git commit -m "Ninja app feedback form"
```

Create an empty repo on GitHub (no README, no .gitignore), then:

```bash
git remote add origin https://github.com/<you>/<repo>.git && git push -u origin main
```

Then in the repo on GitHub: **Settings ▸ Pages ▸ Source: Deploy from a branch ▸
Branch: `main` / `(root)` ▸ Save**.

A minute later the form is live at `https://<you>.github.io/<repo>/`.

> The repo can be **public** — nothing sensitive is in it. The Apps Script URL in
> `config.js` is not a secret in the meaningful sense: it only accepts well-formed
> submissions and only ever appends rows. If you'd rather not have it indexed, the page
> already sends `<meta name="robots" content="noindex">`.

---

## Verify end to end

1. Open the live URL.
2. Pick a note type, fill it in, paste a screenshot (⌘V anywhere on the page).
3. Submit.
4. Confirm a row appeared in the Sheet, and that the **Screenshots** cell links to a
   Drive folder containing the image.

---

## Screenshot visibility

By default (`MAKE_LINKS_PUBLIC: false`) screenshots inherit the parent folder's
permissions — they're private to whoever you share that Drive folder with. Anyone with
access to the folder can open the links straight from the Sheet.

Set `MAKE_LINKS_PUBLIC: true` only if people without Drive access need to open them; it
makes each submission folder viewable by anyone with the link. Screenshots can contain
member data, so that's a deliberate choice, not a default.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Form shows "We couldn't send that just now" | Endpoint wrong, or deployment not updated | Open the `/exec` URL directly — it should return the `ok:true` health JSON |
| Health URL asks you to sign in | Deployment access isn't "Anyone" | Manage deployments ▸ edit ▸ Who has access: Anyone |
| Rows appear but no screenshots | `DRIVE_FOLDER_ID` wrong, or folder trashed | Run `setUp` again and read the log |
| Code changes have no effect | Deployment still points at the old version | Manage deployments ▸ edit ▸ Version: New version |
| CORS error in the browser console | Almost always an old deployment or a non-`/exec` URL | Re-copy the Web app URL; it must end in `/exec` |
| Nothing lands and no error | Submission was caught by a spam guard | Check the script's **Executions** log for `rejected:` |
