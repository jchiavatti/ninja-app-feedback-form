/* ============================================================
   Ninja Selling app feedback — deployment config
   This is the ONE file you edit after deploying the Apps Script.
   It is public (it ships to the browser), so never put a secret here.
   ============================================================ */

window.NC_CONFIG = {
  /* Paste the /exec URL from the Apps Script deployment.
     Looks like: https://script.google.com/macros/s/AKfy.../exec
     Leave as "" to run the form in dry-run mode (payload logged to the
     console, nothing sent) — handy for previewing locally. */
  ENDPOINT: "https://script.google.com/macros/s/AKfycbzsnxr6_nbFhNh6MH0z8oEutYQOODDaKwobkJl2Y6b9GWEVQyNrRL1aeG9hE4zKRXhT_g/exec",

  /* Bot guard: submissions faster than this are rejected client- and
     server-side. A real person cannot fill this form in 3 seconds. */
  MIN_FILL_MS: 3000,

  /* Attachment limits — kept in sync with the Apps Script. */
  MAX_IMAGES: 6,
  MAX_IMAGES_PER_ADD: 4,
  MAX_IMAGE_WIDTH: 1600,
  JPEG_QUALITY: 0.8
};
