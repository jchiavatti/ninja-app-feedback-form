/* @ds-bundle: {"format":4,"namespace":"NinjaSellingDesignSystem_431c3a","components":[{"name":"ICONS","sourcePath":"assets/icons/lucide-icons.js"},{"name":"ICON_NAMES","sourcePath":"assets/icons/lucide-icons.js"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"}],"sourceHashes":{"assets/icons/lucide-icons.js":"ab27345581d1","components/data/Avatar.jsx":"18177406d7ab","components/data/Badge.jsx":"1960470efbe4","components/data/Card.jsx":"b64f01667802","components/data/ProgressBar.jsx":"ed78cd16fda0","components/data/Tag.jsx":"34be489a9b3a","components/feedback/Dialog.jsx":"25fe6159955c","components/feedback/Tooltip.jsx":"e99abcbbebd0","components/forms/Button.jsx":"385203ee68f5","components/forms/Checkbox.jsx":"31fcc18dc1b8","components/forms/IconButton.jsx":"2368c7e5e2b4","components/forms/Input.jsx":"9258397e5ad6","components/forms/Radio.jsx":"72d564af27c2","components/forms/Select.jsx":"159d55b67d48","components/forms/Switch.jsx":"b0a5c039ec50","components/forms/Textarea.jsx":"7ebce9e6c21f","components/foundation/Icon.jsx":"85e5445731ef","ui_kits/desktop-app/AiInbox.jsx":"0372a2c59287","ui_kits/desktop-app/AppShell.jsx":"1a1cacd6efca","ui_kits/desktop-app/Community.jsx":"082adf3882bc","ui_kits/desktop-app/Dashboard.jsx":"71814bc4e6e3","ui_kits/desktop-app/MorningMastery.jsx":"8f6d784e0b1d","ui_kits/desktop-app/Scorecard.jsx":"4f6955828f70","ui_kits/mobile-app/MobileApp.jsx":"a4e8e32a0ac8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NinjaSellingDesignSystem_431c3a = window.NinjaSellingDesignSystem_431c3a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/lucide-icons.js
try { (() => {
// Lucide outline icons (ISC License, lucide-static v1.24.0) — curated subset for Ninja Selling.
// Each value is the inner SVG markup for a 24x24 stroke-width=2 icon.
const ICONS = {
  "home": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <path d=\"M16 3.128a4 4 0 0 1 0 7.744\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /> <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "calendar": "<path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\" />",
  "circle-check-big": "<path d=\"M21.801 10A10 10 0 1 1 17 3.335\" /> <path d=\"m9 11 3 3L22 4\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "plus": "<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />",
  "search": "<path d=\"m21 21-4.34-4.34\" /> <circle cx=\"11\" cy=\"11\" r=\"8\" />",
  "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" /> <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />",
  "settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "sparkles": "<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\" /> <path d=\"M20 2v4\" /> <path d=\"M22 4h-4\" /> <circle cx=\"4\" cy=\"20\" r=\"2\" />",
  "message-circle": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\" />",
  "phone": "<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\" />",
  "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\" /> <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />",
  "heart": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" />",
  "book-open": "<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />",
  "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\" /> <path d=\"M22 10v6\" /> <path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\" />",
  "store": "<path d=\"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5\" /> <path d=\"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244\" /> <path d=\"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05\" />",
  "layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\" /> <rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\" /> <rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\" /> <rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\" />",
  "clipboard-list": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /> <path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\" /> <path d=\"M12 11h4\" /> <path d=\"M12 16h4\" /> <path d=\"M8 11h.01\" /> <path d=\"M8 16h.01\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2v2\" /> <path d=\"M12 20v2\" /> <path d=\"m4.93 4.93 1.41 1.41\" /> <path d=\"m17.66 17.66 1.41 1.41\" /> <path d=\"M2 12h2\" /> <path d=\"M20 12h2\" /> <path d=\"m6.34 17.66-1.41 1.41\" /> <path d=\"m19.07 4.93-1.41 1.41\" />",
  "coffee": "<path d=\"M10 2v2\" /> <path d=\"M14 2v2\" /> <path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\" /> <path d=\"M6 2v2\" />",
  "pen-line": "<path d=\"M13 21h8\" /> <path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" />",
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />",
  "ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\" /> <circle cx=\"19\" cy=\"12\" r=\"1\" /> <circle cx=\"5\" cy=\"12\" r=\"1\" />",
  "filter": "<path d=\"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z\" />",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 6v6l4 2\" />",
  "gift": "<path d=\"M12 7v14\" /> <path d=\"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\" /> <path d=\"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5\" /> <rect x=\"3\" y=\"7\" width=\"18\" height=\"4\" rx=\"1\" />",
  "hand-heart": "<path d=\"M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\" /> <path d=\"m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95\" /> <path d=\"m2 15 6 6\" /> <path d=\"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91\" />",
  "handshake": "<path d=\"m11 17 2 2a1 1 0 1 0 3-3\" /> <path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\" /> <path d=\"m21 3 1 11h-2\" /> <path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\" /> <path d=\"M3 4h8\" />",
  "leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\" /> <path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\" />",
  "target": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" />",
  "inbox": "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\" /> <path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\" />",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /> <path d=\"m21.854 2.147-10.94 10.939\" />",
  "thumbs-up": "<path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\" /> <path d=\"M7 10v12\" />",
  "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\" /> <line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\" />",
  "play": "<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\" />",
  "pause": "<rect x=\"14\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" /> <rect x=\"5\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" />",
  "menu": "<path d=\"M4 5h16\" /> <path d=\"M4 12h16\" /> <path d=\"M4 19h16\" />",
  "chevrons-right": "<path d=\"m6 17 5-5-5-5\" /> <path d=\"m13 17 5-5-5-5\" />",
  "list-checks": "<path d=\"M13 5h8\" /> <path d=\"M13 12h8\" /> <path d=\"M13 19h8\" /> <path d=\"m3 17 2 2 4-4\" /> <path d=\"m3 7 2 2 4-4\" />",
  "sticky-note": "<path d=\"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z\" /> <path d=\"M15 3v5a1 1 0 0 0 1 1h5\" />",
  "trending-up": "<path d=\"M16 7h6v6\" /> <path d=\"m22 7-8.5 8.5-5-5L2 17\" />",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /> <path d=\"M21 3v5h-5\" /> <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /> <path d=\"M8 16H3v5\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "building-2": "<path d=\"M10 12h4\" /> <path d=\"M10 8h4\" /> <path d=\"M14 21v-3a2 2 0 0 0-4 0v3\" /> <path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\" /> <path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\" />",
  "file-text": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" /> <path d=\"M14 2v5a1 1 0 0 0 1 1h5\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />",
  "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /> <circle cx=\"12\" cy=\"8\" r=\"6\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" />",
  "calendar-check": "<path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" /> <path d=\"m9 16 2 2 4-4\" />",
  "phone-call": "<path d=\"M13 2a9 9 0 0 1 9 9\" /> <path d=\"M13 6a5 5 0 0 1 5 5\" /> <path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\" />",
  "message-square": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\" />",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />",
  "bookmark": "<path d=\"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z\" />"
};
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { ICONS, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/lucide-icons.js", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const AVATAR_BG = ["var(--copper)", "var(--ocean)", "var(--olive)", "var(--mauve)"];
function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Avatar — circular person mark. Uses a photo when given, else warm-tinted initials.
 */
function Avatar({
  name = "",
  src,
  size = 40,
  style = {}
}) {
  const idx = name ? name.charCodeAt(0) % AVATAR_BG.length : 0;
  const fontSize = Math.round(size * 0.38);
  return /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      background: src ? "var(--khaki-soft)" : AVATAR_BG[idx],
      color: "var(--cream)",
      font: `600 ${fontSize}px/1 var(--font-ui)`,
      letterSpacing: "0.01em",
      userSelect: "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name));
}

/** AvatarGroup — overlapping stack of avatars with an optional overflow count. */
function AvatarGroup({
  people = [],
  max = 4,
  size = 36
}) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -size * 0.3,
      border: "2px solid var(--surface-card)",
      borderRadius: "50%",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    src: p.src,
    size: size
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -size * 0.3,
      width: size,
      height: size,
      borderRadius: "50%",
      border: "2px solid var(--surface-card)",
      background: "var(--khaki)",
      color: "var(--cool-black-80)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: `600 ${Math.round(size * 0.32)}px/1 var(--font-ui)`
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the core surface. 20px radius (brand rule), soft warm shadow, white on cream.
 * Variants: default (white), sunken (khaki well), inverse (cool-black), outline (no shadow).
 */
function Card({
  children,
  variant = "default",
  padding = "var(--pad-card)",
  interactive = false,
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-card)",
      border: "1px solid var(--border-hairline)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      boxShadow: "none",
      border: "1px solid var(--border-hairline)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)",
      boxShadow: "var(--shadow-raised)",
      border: "1px solid var(--border-inverse)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "none",
      border: "1px solid var(--border-soft)"
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      transition: interactive ? "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)" : "none",
      cursor: interactive ? "pointer" : "default",
      ...v,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-raised)";
      e.currentTarget.style.transform = "translateY(-2px)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = v.boxShadow;
      e.currentTarget.style.transform = "translateY(0)";
    } : undefined
  }, rest), children);
}

/** CardHeader — eyebrow + title + optional trailing slot. */
function CardHeader({
  eyebrow,
  title,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--text-muted)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--h3)",
      color: "var(--text-strong)"
    }
  }, title)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — a calm, non-gamified completion indicator.
 * For showing where you are in a routine (e.g. "3 of 5 steps") — never a score,
 * streak, or achievement gauge. No celebration states, no dopamine color.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  valueText,
  tone = "copper",
  height = 8,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const tones = {
    copper: "var(--copper)",
    ocean: "var(--ocean)",
    olive: "var(--olive)"
  };
  const fill = tones[tone] || tones.copper;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, (label || valueText) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, label), valueText && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, valueText)), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    style: {
      height,
      borderRadius: "var(--radius-pill)",
      background: "var(--khaki)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: fill,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — hover/focus hint on cool-black. Appears after a short delay, no bounce.
 */
function Tooltip({
  label,
  children,
  side = "top",
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const timer = React.useRef(null);
  const enter = () => {
    timer.current = setTimeout(() => setShow(true), 350);
  };
  const leave = () => {
    clearTimeout(timer.current);
    setShow(false);
  };
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: enter,
    onMouseLeave: leave,
    onFocus: enter,
    onBlur: leave
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos[side],
      whiteSpace: "nowrap",
      background: "var(--cool-black)",
      color: "var(--cream)",
      font: "500 13px/1.3 var(--font-ui)",
      padding: "7px 11px",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--shadow-raised)",
      zIndex: 1100,
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Radio — round single-select control with a Copper selected dot.
 * Use RadioGroup to manage a set.
 */
function Radio({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  id,
  name,
  value,
  style = {}
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      alignItems: description ? "flex-start" : "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: () => !disabled && onChange && onChange(value),
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 22,
      height: 22,
      marginTop: description ? 2 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: `1.5px solid ${checked ? "var(--copper)" : "var(--border-strong)"}`,
      background: "var(--surface-card)",
      transition: "border-color var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "var(--copper)",
      transform: checked ? "scale(1)" : "scale(0)",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, description)));
}

/**
 * RadioGroup — manages a set of Radio options.
 */
function RadioGroup({
  options = [],
  value,
  onChange,
  name,
  style = {}
}) {
  const groupName = name || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      ...style
    }
  }, options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    const desc = typeof o === "string" ? undefined : o.description;
    return /*#__PURE__*/React.createElement(Radio, {
      key: val,
      name: groupName,
      value: val,
      label: lab,
      description: desc,
      checked: value === val,
      onChange: onChange
    });
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch — on/off toggle. On uses Copper; calm slide, no bounce.
 */
function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      alignItems: description ? "flex-start" : "center",
      gap: 14,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: () => !disabled && onChange && onChange(!checked),
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 46,
      height: 28,
      marginTop: description ? 2 : 0,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--copper)" : "var(--khaki-deep)",
      padding: 3,
      display: "inline-flex",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "#FFFFFF",
      boxShadow: "0 1px 3px rgba(54,58,54,0.28)",
      transform: checked ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line text field. Matches Input's rest/focus treatment.
 */
function Textarea({
  label,
  hint,
  id,
  rows = 4,
  invalid = false,
  disabled = false,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = invalid ? "var(--mauve)" : focused ? "var(--ocean)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      resize: "vertical",
      padding: "12px 14px",
      background: focused ? "var(--surface-card)" : "var(--surface-sunken)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focused ? "0 0 0 3px rgba(87,111,124,0.16)" : "none",
      font: "var(--ui-body)",
      color: "var(--text-strong)",
      outline: "none",
      transition: "border-color var(--dur-fast), background var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: invalid ? "var(--mauve)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — Lucide outline glyph.
 * Renders a self-hosted Lucide SVG by name. Inherits color via currentColor.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color,
  className = "",
  style = {},
  "aria-label": ariaLabel,
  ...rest
}) {
  const inner = __ds_scope.ICONS[name];
  const labelled = Boolean(ariaLabel);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: labelled ? "img" : undefined,
    "aria-label": ariaLabel,
    "aria-hidden": labelled ? undefined : true,
    style: {
      display: "block",
      flex: "0 0 auto",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner || ""
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
/**
 * Badge — small status pill. Quiet, tinted tones only (no bright alerts).
 * tones: neutral, copper, ocean, olive (on-track), mauve (needs attention).
 */
function Badge({
  children,
  tone = "neutral",
  icon,
  style = {}
}) {
  const tones = {
    neutral: {
      background: "var(--khaki-soft)",
      color: "var(--cool-black-80)"
    },
    copper: {
      background: "var(--copper-tint)",
      color: "var(--copper-press)"
    },
    ocean: {
      background: "var(--ocean-tint)",
      color: "var(--ocean)"
    },
    olive: {
      background: "var(--olive-tint)",
      color: "var(--olive)"
    },
    mauve: {
      background: "var(--mauve-tint)",
      color: "var(--mauve)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-pill)",
      font: "600 12px/1 var(--font-ui)",
      letterSpacing: "0.02em",
      ...t,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13,
    strokeWidth: 2.25
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
/**
 * Tag — a removable/selectable label chip. Larger than Badge; for filters and categories.
 */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  icon,
  style = {}
}) {
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 32,
      padding: onRemove ? "0 8px 0 12px" : "0 14px",
      borderRadius: "var(--radius-pill)",
      font: "500 14px/1 var(--font-ui)",
      cursor: clickable ? "pointer" : "default",
      background: selected ? "var(--copper)" : "var(--surface-card)",
      color: selected ? "var(--text-on-dark)" : "var(--text-body)",
      border: `1px solid ${selected ? "var(--copper)" : "var(--border-strong)"}`,
      transition: "background var(--dur-fast), border-color var(--dur-fast)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      border: "none",
      borderRadius: "50%",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — centered modal with a warm scrim. 28px radius panel, overlay shadow.
 * Human-in-the-loop confirmations live here (AI proposes, user confirms).
 */
function Dialog({
  open = true,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(54,58,54,0.42)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-overlay)",
      padding: "var(--pad-card-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--text-muted)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--h2)",
      color: "var(--text-strong)"
    }
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      display: "inline-flex",
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      background: "transparent",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary interactive control.
 * Variants: primary (Copper), secondary (outline), ghost, quiet.
 * Tones stay calm; no gradients, no glow.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: "0 14px",
      font: "600 13px/1 var(--font-ui)",
      gap: 7,
      icon: 16
    },
    md: {
      height: 44,
      padding: "0 20px",
      font: "600 15px/1 var(--font-ui)",
      gap: 9,
      icon: 18
    },
    lg: {
      height: 52,
      padding: "0 28px",
      font: "600 16px/1 var(--font-ui)",
      gap: 10,
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? "100%" : "auto",
    font: s.font,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: "var(--copper)",
      color: "var(--text-on-dark)",
      "--hover-bg": "var(--copper-hover)",
      "--press-bg": "var(--copper-press)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)",
      "--hover-bg": "var(--khaki-soft)",
      "--press-bg": "var(--khaki)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      "--hover-bg": "var(--cream-deep)",
      "--press-bg": "var(--khaki-soft)"
    },
    quiet: {
      background: "var(--copper-tint)",
      color: "var(--copper-press)",
      "--hover-bg": "#E4DACB",
      "--press-bg": "var(--khaki)"
    }
  };
  const v = variants[variant] || variants.primary;
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.background = "var(--hover-bg)";
  };
  const onLeave = e => {
    e.currentTarget.style.background = v.background;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.background = "var(--press-bg)";
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.background = "var(--hover-bg)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      ...base,
      ...v,
      ...style
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — square control with a Copper checked state. Label optional.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || React.useId();
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      alignItems: description ? "flex-start" : "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: checked,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 22,
      height: 22,
      marginTop: description ? 2 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 7,
      border: `1.5px solid ${checked ? "var(--copper)" : "var(--border-strong)"}`,
      background: checked ? "var(--copper)" : "var(--surface-card)",
      color: "var(--text-on-dark)",
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square control carrying a single Lucide glyph.
 * Use for toolbar actions, close, more, nav. Meets 44–48px touch target at md/lg.
 */
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 48
  };
  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 22
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      borderColor: "transparent",
      hover: "var(--cream-deep)"
    },
    solid: {
      background: "var(--copper)",
      color: "var(--text-on-dark)",
      borderColor: "transparent",
      hover: "var(--copper-hover)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)",
      hover: "var(--khaki-soft)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: v.background,
      color: v.color,
      border: `1px solid ${v.borderColor}`,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-standard)",
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = v.hover;
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSizes[size] || 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field with optional leading icon and label.
 * Rest state uses a sunken surface; focus lifts to card white with an Ocean ring.
 */
function Input({
  label,
  hint,
  iconLeft,
  id,
  invalid = false,
  disabled = false,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = invalid ? "var(--mauve)" : focused ? "var(--ocean)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      padding: "0 14px",
      background: focused ? "var(--surface-card)" : "var(--surface-sunken)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focused ? "0 0 0 3px rgba(87,111,124,0.16)" : "none",
      transition: "border-color var(--dur-fast), background var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.55 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--ui-body)",
      color: "var(--text-strong)",
      ...style
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: invalid ? "var(--mauve)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown. Uses a sunken rest surface and Ocean focus ring.
 */
function Select({
  label,
  hint,
  id,
  options = [],
  placeholder,
  disabled = false,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 48,
      background: focused ? "var(--surface-card)" : "var(--surface-sunken)",
      border: `1.5px solid ${focused ? "var(--ocean)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focused ? "0 0 0 3px rgba(87,111,124,0.16)" : "none",
      transition: "border-color var(--dur-fast), background var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      height: "100%",
      padding: "0 40px 0 14px",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--ui-body)",
      color: "var(--text-strong)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/AiInbox.jsx
try { (() => {
// AI Inbox — AI proposes, human confirms. Nothing executes automatically.
const NS_I = window.NinjaSellingDesignSystem_431c3a;
function AiInbox() {
  const {
    Card,
    Button,
    Icon,
    Avatar,
    Badge,
    Textarea
  } = NS_I;
  const items = [{
    id: 1,
    name: "Dana Reyes",
    kind: "Anniversary note",
    why: "One year since closing on Elm St.",
    draft: "Dana — a year already! It was a joy helping you find the place on Elm. Hope it still feels like home. Thinking of you.",
    channel: "Personal note"
  }, {
    id: 2,
    name: "Sam & Alex Cole",
    kind: "Check-in",
    why: "You noted Alex was interviewing for a role in Denver.",
    draft: "Hi both — how did the Denver conversations go? No agenda, just thinking of you and rooting for you.",
    channel: "Text"
  }, {
    id: 3,
    name: "Priya Nair",
    kind: "Birthday",
    why: "Birthday is Thursday.",
    draft: "Happy early birthday, Priya! Wishing you a wonderful year ahead. Let's grab coffee when things settle.",
    channel: "Personal note"
  }, {
    id: 4,
    name: "The Okafor family",
    kind: "Add to Flow",
    why: "Referred two friends last quarter.",
    draft: "Suggest adding the Okafors to your hot list — they've been sending referrals and deserve a thank-you touch.",
    channel: "Flow action"
  }];
  const [selected, setSelected] = React.useState(items[0].id);
  const [confirmed, setConfirmed] = React.useState({});
  const item = items.find(i => i.id === selected);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px var(--page-gutter) 40px",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 18px",
      background: "var(--ocean-tint)",
      borderRadius: "var(--radius-md)",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18,
    color: "var(--ocean)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--ocean)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "AI proposes, you confirm."), " Nothing here sends or changes on its own \u2014 every action waits for you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "380px 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(it => {
    const active = it.id === selected;
    const isDone = confirmed[it.id];
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => setSelected(it.id),
      style: {
        display: "flex",
        gap: 14,
        textAlign: "left",
        padding: 16,
        cursor: "pointer",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        border: active ? "1.5px solid var(--copper)" : "1px solid var(--border-hairline)",
        boxShadow: active ? "var(--shadow-card)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: it.name,
      size: 44
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--ui-label)",
        color: "var(--text-strong)"
      }
    }, it.name), isDone ? /*#__PURE__*/React.createElement(Badge, {
      tone: "olive",
      icon: "check"
    }, "Confirmed") : /*#__PURE__*/React.createElement(Badge, {
      tone: "ocean",
      icon: "sparkles"
    }, "Suggested")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--ui-meta)",
        color: "var(--copper)",
        margin: "3px 0"
      }
    }, it.kind), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--ui-body-sm)",
        color: "var(--text-muted)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, it.why)));
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: item.name,
    size: 52
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--h3)",
      color: "var(--text-strong)"
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, item.kind, " \xB7 via ", item.channel))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: 14,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16,
    color: "var(--copper)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--text-body)"
    }
  }, "Why the AI suggested this: ", item.why)), /*#__PURE__*/React.createElement(Textarea, {
    label: "Draft \u2014 edit anything before you confirm",
    rows: 5,
    defaultValue: item.draft,
    key: item.id
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconLeft: "check",
    onClick: () => setConfirmed(c => ({
      ...c,
      [item.id]: true
    }))
  }, item.channel === "Flow action" ? "Confirm & add" : "Confirm & send"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "pen-line"
  }, "Edit later"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Not now"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--ui-meta)",
      color: "var(--text-subtle)"
    }
  }, confirmed[item.id] ? "You confirmed this — it's queued for you to send." : "Waiting on your confirmation")))));
}
window.NinjaAiInbox = AiInbox;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/AiInbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/AppShell.jsx
try { (() => {
// Desktop app shell: left sidebar + top bar. Composes DS primitives.
const NS = window.NinjaSellingDesignSystem_431c3a;
const {
  Icon,
  Avatar,
  IconButton,
  Input
} = NS;
const NAV = [{
  key: "dashboard",
  label: "Dashboard",
  icon: "layout-dashboard"
}, {
  key: "scorecard",
  label: "Ninja Scorecard",
  icon: "clipboard-list"
}, {
  key: "morning",
  label: "Morning Mastery",
  icon: "sun"
}, {
  key: "inbox",
  label: "AI Inbox",
  icon: "inbox"
}, {
  key: "community",
  label: "Community",
  icon: "users"
}];
const NAV_SECONDARY = [{
  key: "coaching",
  label: "Coaching",
  icon: "message-circle"
}, {
  key: "marketplace",
  label: "Marketplace",
  icon: "store"
}, {
  key: "learning",
  label: "Learning",
  icon: "book-open"
}];
function NavItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      height: 46,
      padding: "0 14px",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-sm)",
      textAlign: "left",
      font: active ? "600 15px/1 var(--font-ui)" : "500 15px/1 var(--font-ui)",
      color: active ? "var(--cool-black)" : "var(--cool-black-80)",
      background: active ? "var(--copper-tint)" : hover ? "var(--cream-deep)" : "transparent",
      transition: "background var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 20,
    color: active ? "var(--copper)" : "var(--cool-black-60)"
  }), item.label);
}
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-w)",
      flex: "0 0 var(--sidebar-w)",
      height: "100%",
      background: "var(--surface-card)",
      borderRight: "1px solid var(--border-hairline)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 8px 8px",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.png",
    alt: "Ninja Selling",
    style: {
      height: 26,
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.key,
    item: n,
    active: active === n.key,
    onClick: () => onNavigate(n.key)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-hairline)",
      margin: "18px 8px"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, NAV_SECONDARY.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.key,
    item: n,
    active: active === n.key,
    onClick: () => onNavigate(n.key)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 8px"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Marla Quinn",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Marla Quinn"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, "Boulder, CO"))));
}
function TopBar({
  title,
  subtitle,
  onAiClick
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "22px var(--page-gutter)",
      borderBottom: "1px solid var(--border-hairline)",
      background: "var(--surface-page)",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--text-muted)"
    }
  }, subtitle), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--h2)",
      color: "var(--text-strong)",
      marginTop: 2
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: "search",
    placeholder: "Search people, notes, flows",
    wrapStyle: {
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    variant: "outline",
    label: "Notifications"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onAiClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 48,
      padding: "0 18px",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-inverse)",
      cursor: "pointer",
      background: "var(--cool-black)",
      color: "var(--cream)",
      font: "600 15px/1 var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18
  }), " Ask AI")));
}
window.AppShell = {
  Sidebar,
  TopBar,
  NAV,
  NAV_SECONDARY
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Community.jsx
try { (() => {
// Community — global feed, groups, asymmetric follow. No engagement counts.
const NS_C = window.NinjaSellingDesignSystem_431c3a;
function Community() {
  const {
    Card,
    Button,
    Icon,
    Avatar,
    Badge,
    Tag
  } = NS_C;
  const feed = [{
    name: "Renee Alvarado",
    role: "Scottsdale, AZ",
    group: "Southwest Ninjas",
    time: "2h",
    body: "Sent handwritten notes to every client who moved this year. Three called just to talk. No ask, no pitch — the relationship is the point."
  }, {
    name: "Marcus Bell",
    role: "Portland, OR",
    group: "PNW Circle",
    time: "5h",
    body: "A question I keep coming back to in Flow reviews: who haven't I thought about in a while, and why? That question alone reshaped my week."
  }, {
    name: "Yuki Tanaka",
    role: "Austin, TX",
    group: "Ninja Mentors",
    time: "Yesterday",
    body: "Reminder for anyone starting out: the goal isn't more contacts. It's deeper ones. Ten people you truly know beats a thousand names in a spreadsheet."
  }];
  const people = [{
    name: "Dahlia Cross",
    role: "Denver, CO"
  }, {
    name: "Omar Haddad",
    role: "Miami, FL"
  }, {
    name: "Nina Petrov",
    role: "Seattle, WA"
  }];
  const [following, setFollowing] = React.useState({});
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px var(--page-gutter) 56px",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "Global feed"), /*#__PURE__*/React.createElement(Tag, {
    icon: "users"
  }, "My groups"), /*#__PURE__*/React.createElement(Tag, null, "Mentors")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, feed.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 46
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, p.group)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, p.role, " \xB7 ", p.time))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-body)",
      lineHeight: 1.65
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btnQuiet(NS_C)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 17
  }), " Reply thoughtfully"), /*#__PURE__*/React.createElement("button", {
    style: btnQuiet(NS_C)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 17
  }), " Save")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-title)",
      color: "var(--text-strong)",
      marginBottom: 4
    }
  }, "People to follow"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--text-muted)",
      marginBottom: 16
    }
  }, "Follow is one-way \u2014 learn from anyone, no pressure to follow back."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, people.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, p.role)), /*#__PURE__*/React.createElement(Button, {
    variant: following[p.name] ? "ghost" : "secondary",
    size: "sm",
    onClick: () => setFollowing(f => ({
      ...f,
      [p.name]: !f[p.name]
    }))
  }, following[p.name] ? "Following" : "Follow"))))), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-title)",
      color: "var(--text-strong)",
      marginBottom: 14
    }
  }, "Your groups"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, ["Southwest Ninjas", "PNW Circle", "Boulder Referral Group"].map(g => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-sm)",
      background: "var(--copper-tint)",
      color: "var(--copper)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-strong)"
    }
  }, g))))))));
}
function btnQuiet() {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    font: "var(--ui-label)",
    color: "var(--text-muted)",
    padding: 0
  };
}
window.NinjaCommunity = Community;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Community.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Dashboard.jsx
try { (() => {
// Dashboard screen.
const NS_D = window.NinjaSellingDesignSystem_431c3a;
function Dashboard({
  onNavigate
}) {
  const {
    Card,
    CardHeader,
    Badge,
    Button,
    ProgressBar,
    Avatar,
    Icon,
    IconButton
  } = NS_D;
  const touches = [{
    name: "Dana Reyes",
    why: "Closed 1 year ago today",
    tone: "copper",
    action: "Send anniversary note"
  }, {
    name: "Sam & Alex Cole",
    why: "Mentioned a job move in your last note",
    tone: "ocean",
    action: "Check in"
  }, {
    name: "Priya Nair",
    why: "Birthday this Thursday",
    tone: "olive",
    action: "Add to Flow"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px var(--page-gutter) 56px",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-lead)",
      color: "var(--text-muted)"
    }
  }, "Good morning, Marla."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--display-2)",
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-display)",
      marginTop: 2
    }
  }, "Three people to reach today.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "sun",
    onClick: () => onNavigate("morning")
  }, "Start Morning Mastery")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.55fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Today \xB7 your Flow",
    title: "People to reach",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "chevron-right",
      onClick: () => onNavigate("inbox")
    }, "See all")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, touches.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 0",
      borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-title)",
      color: "var(--text-strong)"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--text-muted)"
    }
  }, t.why)), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm"
  }, t.action))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "This week",
    title: "Ninja Scorecard",
    action: /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      size: "sm",
      label: "Open scorecard",
      onClick: () => onNavigate("scorecard")
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "copper",
    value: 4,
    max: 5,
    label: "Real estate reviews",
    valueText: "4 of 5 days"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "ocean",
    value: 2,
    max: 2,
    label: "Live interviews",
    valueText: "2 of 2"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "olive",
    value: 9,
    max: 10,
    label: "Personal notes",
    valueText: "9 written"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 14,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      font: "var(--ui-body-sm)",
      color: "var(--text-body)"
    }
  }, "Consistent behaviors, not targets. Where you are this week \u2014 nothing to beat.")), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18,
    color: "var(--khaki)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--khaki)"
    }
  }, "AI noticed")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--h3)",
      color: "var(--cream)",
      lineHeight: 1.3
    }
  }, "Reaching out to your past clients this month could touch about 400 people in their networks."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm",
    iconRight: "chevron-right",
    onClick: () => onNavigate("inbox")
  }, "Review AI suggestions"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, [{
    label: "Hot list",
    icon: "target",
    n: "8 people",
    note: "Reach out this week"
  }, {
    label: "Warm list",
    icon: "hand-heart",
    n: "142 people",
    note: "Reviewed 6 days ago"
  }, {
    label: "Long-term Flow",
    icon: "leaf",
    n: "1,240 people",
    note: "On a steady cadence"
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.label,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--copper-tint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--copper)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-label)",
      color: "var(--text-muted)"
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-title)",
      color: "var(--text-strong)"
    }
  }, c.n))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--text-muted)",
      marginTop: 12
    }
  }, c.note)))));
}
window.NinjaDashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/MorningMastery.jsx
try { (() => {
// Morning Mastery — guided daily routine with full-screen focus mode.
const NS_M = window.NinjaSellingDesignSystem_431c3a;
function MorningMastery() {
  const {
    Card,
    Button,
    Icon,
    ProgressBar,
    Textarea
  } = NS_M;
  const steps = [{
    key: "gratitude",
    icon: "hand-heart",
    title: "Gratitudes",
    time: "2 min",
    prompt: "Name two things you're grateful for this morning."
  }, {
    key: "affirm",
    icon: "sun",
    title: "Affirmations",
    time: "2 min",
    prompt: "Read your affirmations aloud, slowly."
  }, {
    key: "visualize",
    icon: "eye",
    title: "Visualization",
    time: "3 min",
    prompt: "Picture your day going well — the calls, the notes, the calm."
  }, {
    key: "reviews",
    icon: "clipboard-list",
    title: "Real estate reviews",
    time: "5 min",
    prompt: "Review two clients and note anything worth a touch."
  }, {
    key: "flow",
    icon: "leaf",
    title: "Flow review",
    time: "3 min",
    prompt: "Scan your hot list. Who comes to mind today?"
  }];
  const [current, setCurrent] = React.useState(2);
  const [full, setFull] = React.useState(false);
  const done = current;
  const step = steps[current];
  const StepRow = ({
    s,
    i
  }) => {
    const state = i < current ? "done" : i === current ? "current" : "todo";
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => setCurrent(i),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        textAlign: "left",
        padding: "14px 16px",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radius-md)",
        marginBottom: 6,
        background: state === "current" ? "var(--copper-tint)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        flex: "0 0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: state === "done" ? "var(--copper)" : state === "current" ? "var(--surface-card)" : "var(--surface-sunken)",
        border: state === "current" ? "1.5px solid var(--copper)" : "1px solid var(--border-hairline)",
        color: state === "done" ? "var(--cream)" : "var(--copper)"
      }
    }, state === "done" ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 17,
      strokeWidth: 2.5
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 17
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--ui-label)",
        color: "var(--text-strong)"
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--ui-meta)",
        color: "var(--text-muted)"
      }
    }, s.time)));
  };
  if (full) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--cool-black)",
        color: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setFull(false),
      "aria-label": "Exit full screen",
      style: {
        position: "absolute",
        top: 24,
        right: 24,
        width: 48,
        height: 48,
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border-inverse)",
        background: "transparent",
        color: "var(--cream)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--ui-micro)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow)",
        color: "var(--khaki)"
      }
    }, "Step ", current + 1, " of ", steps.length, " \xB7 ", step.time), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--display-1)",
        color: "var(--cream)",
        margin: "18px 0 14px",
        textAlign: "center"
      }
    }, step.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--ui-lead)",
        color: "var(--khaki)",
        maxWidth: 560,
        textAlign: "center"
      }
    }, step.prompt), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      style: {
        color: "var(--cream)",
        borderColor: "var(--border-inverse)"
      },
      iconLeft: "chevron-left",
      onClick: () => setCurrent(Math.max(0, current - 1))
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      iconRight: "chevron-right",
      onClick: () => setCurrent(Math.min(steps.length - 1, current + 1))
    }, "Next step")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px var(--page-gutter) 56px",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--copper)"
    }
  }, "A calm start"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--display-2)",
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-display)"
    }
  }, "Morning Mastery")), /*#__PURE__*/React.createElement(Button, {
    iconLeft: "play",
    onClick: () => setFull(true)
  }, "Enter focus mode")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "320px 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "copper",
    value: done,
    max: steps.length,
    label: "This morning",
    valueText: `${done} of ${steps.length} steps`
  })), steps.map((s, i) => /*#__PURE__*/React.createElement(StepRow, {
    key: s.key,
    s: s,
    i: i
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--text-muted)"
    }
  }, "Step ", current + 1, " \xB7 ", step.time), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--h1)",
      color: "var(--text-strong)",
      margin: "6px 0 8px"
    }
  }, step.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--ui-lead)",
      color: "var(--text-body)",
      maxWidth: 560
    }
  }, step.prompt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Jot a thought (optional)",
    rows: 4,
    placeholder: "No pressure \u2014 a line or two is plenty."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "chevron-left",
    onClick: () => setCurrent(Math.max(0, current - 1))
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    iconRight: "chevron-right",
    onClick: () => setCurrent(Math.min(steps.length - 1, current + 1))
  }, "Mark done \xB7 next")))));
}
window.NinjaMorningMastery = MorningMastery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/MorningMastery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Scorecard.jsx
try { (() => {
// Ninja Scorecard — weekly behavior tracker. Non-gamified: behaviors, not scores.
const NS_S = window.NinjaSellingDesignSystem_431c3a;
function Scorecard() {
  const {
    Card,
    CardHeader,
    Button,
    Icon,
    Badge
  } = NS_S;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // behaviors with completion per day (boolean)
  const rows = [{
    label: "Gratitudes (morning + evening)",
    cadence: "Daily",
    done: [1, 1, 1, 1, 1, 0, 0]
  }, {
    label: "Real estate reviews",
    cadence: "Daily",
    done: [1, 1, 1, 1, 0, 0, 0]
  }, {
    label: "Two live interviews",
    cadence: "Weekdays",
    done: [1, 1, 1, 0, 0, 0, 0]
  }, {
    label: "Personal notes written",
    cadence: "Aim 10 / wk",
    done: [1, 1, 1, 1, 1, 0, 0]
  }, {
    label: "Customer service calls",
    cadence: "Weekly",
    done: [0, 1, 0, 0, 0, 0, 0]
  }, {
    label: "Flow review",
    cadence: "Weekly",
    done: [1, 0, 0, 0, 0, 0, 0]
  }];
  const Cell = ({
    on,
    isToday
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      borderRadius: "var(--radius-sm)",
      background: on ? "var(--copper-tint)" : "var(--surface-sunken)",
      border: isToday ? "1.5px solid var(--copper)" : "1px solid transparent"
    }
  }, on ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--copper)",
    strokeWidth: 2.5
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--khaki-deep)"
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px var(--page-gutter) 56px",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "chevron-left"
  }, "Last week"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-title)",
      color: "var(--text-strong)"
    }
  }, "Mar 10 \u2013 16"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: "chevron-right"
  }, "Next week")), /*#__PURE__*/React.createElement(Badge, {
    tone: "olive",
    icon: "check"
  }, "A steady week")), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "This week",
    title: "Your behaviors",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--ui-body-sm)",
        color: "var(--text-muted)"
      }
    }, "Consistency over totals")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr repeat(7, 52px)",
      gap: 8,
      alignItems: "center",
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null), days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: "center",
      font: "var(--ui-meta)",
      color: i === 3 ? "var(--copper)" : "var(--text-muted)",
      fontWeight: 600
    }
  }, d))), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr repeat(7, 52px)",
      gap: 8,
      alignItems: "center",
      padding: "8px 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-strong)"
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, r.cadence)), r.done.map((v, i) => /*#__PURE__*/React.createElement(Cell, {
    key: i,
    on: !!v,
    isToday: i === 3
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Reflection",
    title: "What went well"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-body)"
    }
  }, "You kept your gratitudes every weekday and wrote nine personal notes. The rhythm is holding \u2014 that's the whole game.")), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18,
    color: "var(--khaki)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--khaki)"
    }
  }, "A gentle nudge")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--ui-body)",
      color: "var(--cream)"
    }
  }, "Customer service calls were light this week. Even two calls could brighten someone's month \u2014 no pressure, just a thought."))));
}
window.NinjaScorecard = Scorecard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Scorecard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileApp.jsx
try { (() => {
// Mobile app (view-only): bottom tab nav, AI FAB-to-sheet, large touch targets.
const NS_MB = window.NinjaSellingDesignSystem_431c3a;
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      font: "600 15px/1 var(--font-ui)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(NS_MB.Icon, {
    name: "chevrons-right",
    size: 16
  }), /*#__PURE__*/React.createElement(NS_MB.Icon, {
    name: "eye",
    size: 16
  })));
}
function MobileHeader({
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--copper)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--h1)",
      color: "var(--text-strong)",
      marginTop: 2
    }
  }, title));
}
function TodayScreen() {
  const {
    Card,
    Avatar,
    Icon,
    ProgressBar
  } = NS_MB;
  const touches = [{
    name: "Dana Reyes",
    why: "Closing anniversary today"
  }, {
    name: "Sam & Alex Cole",
    why: "Following up on the Denver move"
  }, {
    name: "Priya Nair",
    why: "Birthday Thursday"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MobileHeader, {
    eyebrow: "Good morning, Marla",
    title: "Three to reach today."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "copper",
    value: 3,
    max: 5,
    label: "Morning Mastery",
    valueText: "3 of 5 steps"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Today \xB7 your Flow"), touches.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    padding: "16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-title)",
      color: "var(--text-strong)"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--text-muted)"
    }
  }, t.why)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22,
    color: "var(--text-subtle)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      background: "var(--ocean-tint)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 16,
    color: "var(--ocean)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--ocean)"
    }
  }, "View-only on mobile \u2014 take actions on desktop."))));
}
function ScorecardScreen() {
  const {
    Card,
    Icon
  } = NS_MB;
  const rows = [{
    label: "Gratitudes",
    done: 5,
    of: 5
  }, {
    label: "Real estate reviews",
    done: 4,
    of: 5
  }, {
    label: "Live interviews",
    done: 3,
    of: 5
  }, {
    label: "Personal notes",
    done: 9,
    of: 10
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MobileHeader, {
    eyebrow: "Mar 10 \u2013 16",
    title: "This week's rhythm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, rows.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.label,
    padding: "16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-strong)"
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--text-muted)"
    }
  }, r.done, " of ", r.of)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 12
    }
  }, Array.from({
    length: r.of
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 8,
      borderRadius: 999,
      background: i < r.done ? "var(--copper)" : "var(--khaki)"
    }
  }))))), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "16px"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--text-body)"
    }
  }, "Consistency, not totals. A steady week is a good week."))));
}
function CommunityScreen() {
  const {
    Card,
    Avatar,
    Badge,
    Icon
  } = NS_MB;
  const feed = [{
    name: "Renee Alvarado",
    group: "Southwest Ninjas",
    body: "Sent handwritten notes to every client who moved this year. Three called just to talk."
  }, {
    name: "Marcus Bell",
    group: "PNW Circle",
    body: "Who haven't I thought about in a while, and why? That question reshaped my week."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MobileHeader, {
    eyebrow: "Relationships, shared",
    title: "Community"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, feed.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 42
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, p.group))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-body)",
      lineHeight: 1.6
    }
  }, p.body)))));
}
function AiSheet({
  open,
  onClose
}) {
  const {
    Icon,
    Card,
    Avatar,
    Button
  } = NS_MB;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      pointerEvents: open ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(54,58,54,0.42)",
      opacity: open ? 1 : 0,
      transition: "opacity var(--dur-base)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "var(--surface-raised)",
      borderTopLeftRadius: "var(--radius-xl)",
      borderTopRightRadius: "var(--radius-xl)",
      padding: "10px 20px 28px",
      boxShadow: "var(--shadow-overlay)",
      transform: open ? "translateY(0)" : "translateY(110%)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 999,
      background: "var(--khaki-deep)",
      margin: "0 auto 16px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 20,
    color: "var(--copper)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-title)",
      color: "var(--text-strong)"
    }
  }, "Your AI assistant")), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "16px",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Reyes",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-label)",
      color: "var(--text-strong)"
    }
  }, "Dana Reyes \xB7 anniversary"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, "The AI drafted a note. Confirm & send from desktop.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      background: "var(--ocean-tint)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 16,
    color: "var(--ocean)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--ui-meta)",
      color: "var(--ocean)"
    }
  }, "Review here; you confirm & send on desktop. Nothing sends on its own."))));
}
function MobileApp() {
  const {
    Icon
  } = NS_MB;
  const [tab, setTab] = React.useState("today");
  const [ai, setAi] = React.useState(false);
  const tabs = [{
    key: "today",
    label: "Today",
    icon: "sun"
  }, {
    key: "scorecard",
    label: "Scorecard",
    icon: "clipboard-list"
  }, {
    key: "community",
    label: "Community",
    icon: "users"
  }, {
    key: "learning",
    label: "Learning",
    icon: "book-open"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 844,
      background: "var(--surface-page)",
      borderRadius: 44,
      overflow: "hidden",
      boxShadow: "var(--shadow-overlay)",
      border: "10px solid var(--cool-black)"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 44,
      bottom: 92,
      left: 0,
      right: 0,
      overflowY: "auto"
    }
  }, tab === "today" && /*#__PURE__*/React.createElement(TodayScreen, null), tab === "scorecard" && /*#__PURE__*/React.createElement(ScorecardScreen, null), tab === "community" && /*#__PURE__*/React.createElement(CommunityScreen, null), tab === "learning" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MobileHeader, {
    eyebrow: "Ninja Installation",
    title: "Learning"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--ui-body)",
      color: "var(--text-muted)"
    }
  }, "Courses and sessions appear here.")))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setAi(true),
    "aria-label": "Ask AI",
    style: {
      position: "absolute",
      right: 20,
      bottom: 108,
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "var(--cool-black)",
      color: "var(--cream)",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-raised)",
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 92,
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      paddingBottom: 18
    }
  }, tabs.map(t => {
    const active = tab === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => setTab(t.key),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        color: active ? "var(--copper)" : "var(--cool-black-60)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 11px/1 var(--font-ui)"
      }
    }, t.label));
  })), /*#__PURE__*/React.createElement(AiSheet, {
    open: ai,
    onClose: () => setAi(false)
  }));
}
window.NinjaMobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

})();
