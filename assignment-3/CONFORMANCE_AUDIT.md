# Assignment 3 — Automated AI-Assisted Conformance Audit

**Project:** Department of Computer Science Website, University of Delhi  
**Audit version:** 1.0 — Approved initial conformance audit 
**Baseline:** Approved SRS v1.0 and approved test plan v1.0  
**Audit status:** Approved for corrective implementation; formal verification outstanding; not submission-ready.

## 1. Document information and audit status
| Document property | Description |
|---|---|
| Document title | Assignment 3 — Automated AI-Assisted Conformance Audit |
| Version | 1.0 |
| Requirements baseline | Approved Assignment 3 SRS v1.0 |
| Verification baseline | Approved Assignment 3 Software Test and Validation Plan v1.0 |
| Audit type | AI-assisted source-level conformance assessment |
| Requirements coverage | 125 requirements and acceptance criteria |
| Test plan coverage | 158 approved test cases |
| Audit status | Approved for corrective implementation |
| Formal testing status | Pending |
| Submission readiness | Not yet established |

## 2. Audit objectives and scope
Independent source-level assessment of all six candidate files, all 114 requirements and 11 acceptance criteria. User reports nine steps complete and preliminary browser checks; no individual browser results supplied. No source or approved documentation changed.

## 3. References and inspected files
- `index.html` — `index(20261127-102212).html`; 892 lines; SHA-256 `d3b5f7470ff39eeb87f1c987c75cef6cd1dbdd9b302f639b642e692ae12fd454`.
- `alumni.html` — `alumni(20261127-102209).html`; 250 lines; SHA-256 `bdfd4ce99f6c73f9be46826427b291c6fef68e7a8ac9cf5d9110d0345c560250`.
- `timetable.html` — `timetable(8).html`; 150 lines; SHA-256 `f0b4000ad124b2dc84828d9e976d19d52fa6527bebbc18f9471d16b67d8a5ec1`.
- `script.js` — `script(20261127-102231).js`; 1526 lines; SHA-256 `98bc4993869f4c75cf3e036dd42ce09462226d59fd3c93818ddc527fe93b1b1a`.
- `jquery-script.js` — `jquery-script(10).js`; 50 lines; SHA-256 `2ca857b08e85d378f6293a5145193909b8c8524d393f7b519c9909c16cacd364`.
- `style.css` — `style(20261127-102230).css`; 1924 lines; SHA-256 `3d9609f6e61651b6e85b5f81bc8164476518fef44da357be6af202cba8915c9a`.
- Approved SRS and test plan uploads, README(10).md, directory screenshot, earlier baseline source and conversation.
- Google HTML/CSS Style Guide and W3C services are referenced by the SRS; external services not invoked.

## 4. Methodology and limitations
Read complete source and requirement/test documents; parse HTML with BeautifulSoup html.parser, compare baseline text, inspect JS/CSS, run Node syntax and extracted faculty function assertions, calculate sRGB contrast and cross-check IDs. This parser is not an HTML validator. No browser, assistive technology, W3C, actual Git repository or complete asset directory was available for this audit. Source-level compliance does not change test execution status.

## 5. Classification definitions
- Compliant: obligation established by static evidence where static evidence is sufficient.
- Partially Compliant: implementation or workflow evidence exists but required runtime evidence or correction remains.
- Non-Compliant: mandatory outcome not yet delivered (including deliberately deferred workflow tasks); not necessarily a source defect.
- Not Verifiable: evidence insufficient to determine the obligation.

## 6. Executive summary
| Category | Compliant | Partially Compliant | Non-Compliant | Not Verifiable | Total |
|---|---:|---:|---:|---:|---:|
| FR | 10 | 33 | 0 | 0 | 43 |
| IR | 5 | 2 | 0 | 1 | 8 |
| NFR | 4 | 9 | 0 | 2 | 15 |
| VR | 1 | 13 | 0 | 0 | 14 |
| SC | 7 | 3 | 0 | 0 | 10 |
| AI | 3 | 4 | 5 | 2 | 14 |
| DR | 0 | 1 | 2 | 7 | 10 |
| AC | 0 | 10 | 0 | 1 | 11 |
| **Total** | 30 | 75 | 7 | 13 | **125** |

All 158 approved cases remain Not Tested. The principal new-code risk is secondary exceptions during faculty recovery. Navigation inconsistency is inherited. Pending workflow items are not counted as executed failures.

## 7. Functional requirements conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| FR-IMG-01 | The system shall maintain exactly five distinct departmental event image assets under `images/events/`, including the three existing assets. | Directory screenshot and five distinct paths; actual binaries not supplied. | Partially Compliant | TC-IMG-001 | Decode all assets and verify permissions. |
| FR-IMG-02 | The system shall store five corresponding objects in the JavaScript `eventImages` array, each with a valid relative `src`, nonempty meaningful `alt` and accurate nonempty `caption`. | script.js 5–31: five nonempty metadata objects; paths match screenshot. | Partially Compliant | TC-IMG-002 | Compare descriptions with actual images. |
| FR-IMG-03 | The system shall select an index using `Math.floor(Math.random() * collection.length)` from a nonempty eligible collection. Every eligible entry shall be selectable. | script.js 235–249: floor(random × remaining length), nonempty loop. | Compliant | TC-IMG-005, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013 | Controlled index tests still pending. |
| FR-IMG-04 | The system shall perform one initial random selection on each normal homepage load or refresh, after the required DOM elements are available. | script.js 191–196, 235–285; script follows markup. | Partially Compliant | TC-IMG-004 | Observe normal load and refresh. |
| FR-IMG-05 | The system shall update image source, alternative text and caption from the same selected object; any fallback shall likewise use one consistent metadata set. | script.js 250–261: loaded candidate and caption share object. | Partially Compliant | TC-IMG-004, TC-IMG-006, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013, TC-IMG-020 | Verify rendered synchronization. |
| FR-IMG-06 | The initial HTML image, alt and caption shall match the verified metadata for its referenced asset, including when JavaScript is disabled. | index.html 731–736 matches first object exactly. | Partially Compliant | TC-IMG-003 | Disable JS and decode fallback. |
| FR-IMG-07 | The system shall select independently on each load; consecutive repetition shall be permitted and no previous-selection storage shall be introduced. | script.js 235–285: fresh copy, no previous-selection state. | Partially Compliant | TC-IMG-004, TC-IMG-005, TC-IMG-014 | Controlled repetition and refresh. |
| FR-IMG-08 | The system shall handle empty collections, unavailable assets and missing target elements according to VR-IMG-01–04 without uncaught exceptions or infinite retries. | script.js 56–285: guards and bounded candidate removal; F-03. | Partially Compliant | TC-IMG-015, TC-IMG-016, TC-IMG-017, TC-IMG-021 | Fault tests and recovery correction. |
| FR-FAC-01 | The system shall preserve existing faculty names, designations and illustrative joining dates unless a separately approved data correction is documented. | index.html 454–583: five names, designations and dates match baseline. | Compliant | TC-FAC-001 | Retain data. |
| FR-FAC-02 | Each joining date shall be represented in `YYYY-MM-DD` format in its machine-readable HTML attributes; visible dates and attributes shall agree. | Five visible dates parsed and matched both attributes. | Compliant | TC-FAC-001 | Retain data. |
| FR-FAC-03 | The system shall use the device-local current calendar date and calculate completed calendar years by subtracting one from the year difference if the anniversary has not occurred. | script.js 341–393: local getters and completed-year logic; 15 extracted-function assertions passed. | Partially Compliant | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-038 | Verify actual local browser date. |
| FR-FAC-04 | The system shall correctly handle before/on/after anniversary, same-day joining (zero years), and valid leap dates using the convention in section 6. | script.js 357–393: anniversary and leap convention; assertions passed. | Partially Compliant | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020 | Run all controlled date cases. |
| FR-FAC-05 | The system shall reject missing, malformed, impossible and future dates according to VR-FAC-01–03; no negative or NaN experience shall be displayed. | script.js 305–393: strict Gregorian and future rejection; assertions passed. | Partially Compliant | TC-FAC-016, TC-FAC-017, TC-FAC-021, TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032, TC-FAC-033, TC-FAC-034 | Execute DOM invalid-date cases. |
| FR-FAC-06 | The system shall display the calculated experience alongside each corresponding faculty profile, using `1 year (Sample)` or `N years (Sample)` as appropriate. | script.js 390–400: singular/plural and profile text. | Partially Compliant | TC-FAC-002, TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020 | Verify all displayed values. |
| FR-FAC-07 | The system shall calculate on homepage initialization and check the local date once per minute while the page is open; it shall recalculate when the date changes, including after a suspended tab resumes at the next available check. | script.js 440–548: immediate check and 60000 ms interval. | Partially Compliant | TC-FAC-002, TC-FAC-035, TC-FAC-037 | Test rollover and suspended tab. |
| FR-FAC-08 | The system shall not rewrite unchanged experience text during periodic checks and shall not create a faculty timer on pages without faculty targets. | script.js 397–548: text/date comparison, guarded timer. | Partially Compliant | TC-FAC-036, TC-FAC-039 | MutationObserver and unrelated-page timer fixture. |
| FR-FAC-09 | The system shall retain the visible disclaimer that joining dates and calculated experience are illustrative and not verified employment records. | index.html 463–467: sample disclaimer retained. | Compliant | TC-FAC-003 | No change. |
| FR-FAC-10 | If JavaScript is unavailable, the faculty section shall provide a meaningful static indication that experience requires JavaScript, rather than leaving an unexplained indefinite loading state. | index.html 486–576: Experience requires JavaScript. | Compliant | TC-FAC-004 | Verify JS-disabled rendering. |
| FR-LST-01 | The system shall reuse the existing Student Activity Planner form, labelled text input, Add Item submit button, feedback region and unordered list. | index.html 773–813: existing form, label, button, feedback and list. | Compliant | TC-LST-001 | No change. |
| FR-LST-02 | The system shall process button activation and Enter-key submission through one native form `submit` listener registered using `addEventListener()`. | script.js 650–805: native submit listener, no separate click insertion. | Partially Compliant | TC-LST-002, TC-LST-003, TC-LST-004 | Test button and Enter. |
| FR-LST-03 | The handler shall prevent default form submission before processing input; neither valid nor invalid submission shall reload or navigate the page. | script.js 651–652: preventDefault before processing. | Partially Compliant | TC-LST-003, TC-LST-004 | Observe navigation and reload. |
| FR-LST-04 | The system shall trim leading/trailing whitespace and reject empty or whitespace-only input. | script.js 663–680: trim after raw-length check and blank rejection. | Partially Compliant | TC-LST-006, TC-LST-007, TC-LST-008, TC-LST-009 | Test whitespace variants. |
| FR-LST-05 | The system shall retain `maxlength="100"` and reject programmatically supplied raw input longer than 100 UTF-16 code units before insertion. | index.html 793 maxlength=100; script.js 663–670 raw length. | Partially Compliant | TC-LST-010, TC-LST-011, TC-LST-012, TC-LST-018, TC-LST-019, TC-LST-020 | Test programmatic 101 units and exact 100. |
| FR-LST-06 | For each valid submission the system shall create exactly one `li` using `document.createElement("li")` and assign trimmed user text using `textContent`. | script.js 683–684: createElement(li) and textContent. | Compliant | TC-LST-002, TC-LST-009, TC-LST-013, TC-LST-018, TC-LST-019, TC-LST-020, TC-LST-021 | Verify actual literal insertion. |
| FR-LST-07 | The system shall append the new item using native `append()` or `appendChild()`, retaining all existing items in insertion order. | script.js 687: appendChild; no normal removal of prior items. | Partially Compliant | TC-LST-002, TC-LST-005 | Test order and counts. |
| FR-LST-08 | The system shall show meaningful textual success or error feedback using the existing live region and external CSS classes. | script.js 573–597: textual feedback and CSS classes. | Partially Compliant | TC-LST-006, TC-LST-014 | Verify live announcements. |
| FR-LST-09 | After successful insertion the system shall clear the input and restore focus to it; on invalid input it shall retain the value, focus the input and leave the list unchanged. | script.js 595–704: invalid focus and success clear/focus. | Partially Compliant | TC-LST-003, TC-LST-006, TC-LST-011 | Test actual focus and retention. |
| FR-LST-10 | The system shall register only one active activity submit handler, even if initialization is invoked again, and shall remove the obsolete jQuery activity handler. | script.js 762–805: dataset guard; jquery-script.js gallery only. | Partially Compliant | TC-LST-015, TC-REG-008, TC-VAL-010 | Invoke initializer twice. |
| FR-LST-11 | The system shall permit repeated activity names as separate items when separately submitted. | script.js 663–687: no duplicate filter. | Partially Compliant | TC-LST-005 | Submit repeated names. |
| FR-LST-12 | The system shall maintain activity state only in the current document DOM; a fresh reload shall restore the initial HTML list; no backend, cookies, localStorage or sessionStorage shall store activity data. | script.js 683–687: DOM-only insertion; no storage calls found. | Partially Compliant | TC-LST-016 | Reload and inspect storage. |
| FR-LST-13 | The system shall associate validation feedback with the input and update `aria-invalid` appropriately; successful input shall clear the invalid state. | index.html 793/803; script.js 595/690: association and invalid state. | Partially Compliant | TC-LST-014 | Verify accessibility tree and announcements. |
| FR-LST-14 | The system shall guard required DOM dependencies and fail safely according to VR-LST-03 and VR-INIT-01. | script.js 601–815: dependency checks and shutdown; F-04. | Partially Compliant | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026 | Fault injection and rollback checks. |
| FR-REG-01 | The system shall preserve homepage content, academic programmes, research, faculty, news/events/notices, contact and disclaimers. | index.html: original sections and content retained; faculty/event fallback refinements scoped. | Compliant | TC-REG-001 | Compare rendered content. |
| FR-REG-02 | The system shall preserve navigation links, CSS hover/focus dropdowns, click/tap interaction and outside-click behavior. | style.css 150–189, 1904–1924; script.js 1480–1526: CSS and click state conflict (F-01). | Partially Compliant | TC-BR-004, TC-REG-002, TC-REG-003, TC-REG-004 | Approve coordinated navigation correction. |
| FR-REG-03 | The system shall preserve the device-local digital clock, immediate display and one-second updates. | script.js 1410–1478: baseline clock block unchanged, immediate and 1000 ms. | Partially Compliant | TC-REG-005 | Observe updates. |
| FR-REG-04 | The system shall preserve both gallery images, side-by-side layout, jQuery Fade In/Fade Out controls, 800 ms opacity transitions and animation queue prevention. | style.css 3–18; jquery-script.js 34–43: two images, stop and fadeTo(800). | Partially Compliant | TC-REG-006, TC-REG-007 | Verify layout and animation. |
| FR-REG-05 | The migration shall remove only the obsolete jQuery activity planner implementation; the gallery block and CDN dependency shall remain. | jquery-script.js 1–50: only gallery remains; CDN retained. | Compliant | TC-REG-008 | Verify CDN failure separately. |
| FR-REG-06 | The system shall preserve all Assignment 2 alumni fields, validation rules, field errors, focus management, reset, live 300-character feedback counter and accessible feedback. | alumni.html unchanged; script.js alumni onward identical to baseline. | Partially Compliant | TC-REG-010, TC-REG-011, TC-REG-012, TC-REG-013, TC-REG-014, TC-REG-015, TC-REG-016, TC-REG-017, TC-REG-018, TC-REG-019 | Run Assignment 2 regression. |
| FR-REG-07 | The system shall preserve alumni demonstration notice, CSP `form-action 'none'`, prevented submission, initially disabled Register button and absence of registration transmission or persistent storage. | alumni.html 7,48–57,215; unchanged prevented submit and demo success. | Partially Compliant | TC-REG-020, TC-REG-021 | Inspect network/storage. |
| FR-REG-08 | The system shall preserve timetable content, semantic headers, caption, merged cells and intentional wrapper scrolling. | timetable.html unchanged; CSS overflow-x auto and min-width 950px. | Partially Compliant | TC-REG-022 | Test keyboard/touch scrolling. |
| FR-REG-09 | Shared scripts shall safely skip homepage-only initialization on the alumni page and shall not interfere with alumni initialization. | script.js homepage guards and alumni initializer; F-03. | Partially Compliant | TC-FAC-039, TC-REG-023 | Exercise shared scripts and faults. |
| FR-REG-10 | The developer shall avoid unrelated source changes; `alumni.html` and `timetable.html` shall remain unchanged unless an approved regression correction is documented. | Alumni and timetable text identical to baseline; alumni onward JS identical. | Compliant | TC-REG-024 | Verify Git scope and approvals. |
| FR-REG-11 | The system shall preserve existing responsive behavior, including the two-column gallery at 375 px and responsive alumni layout. | style.css 3–18 and responsive form rules retained. | Partially Compliant | TC-UI-004, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | Test 375px and all viewport combinations. |

## 8. Interface requirements conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| IR-01 | The homepage shall retain Event Highlights, faculty cards and Student Activity Planner within existing semantic sections, with readable captions, experience and feedback. | index.html semantic event, faculty and planner sections retained. | Partially Compliant | TC-IMG-007, TC-UI-001, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | Verify readability. |
| IR-02 | The event display shall use `#random-event-image` (image) and `#event-caption` (caption); the faculty calculator shall use `.faculty-experience` and `data-joining-date`. | index.html 486–576,731–736 and matching script selectors. | Compliant | TC-FAC-001 | No change. |
| IR-03 | The activity planner shall use `#activity-form`, `#activity-input`, `#add-item-btn`, `#activity-message` and `#activity-list`; the label shall reference the input ID. | index.html 785–813: all five IDs and associated label. | Compliant | TC-LST-001 | No change. |
| IR-04 | All three pages shall continue to load `style.css`; homepage and alumni shall load `script.js`; homepage shall load jQuery before `jquery-script.js`. | HTML parser confirms expected stylesheet and script order on all pages. | Compliant | TC-REG-025 | Verify network loading. |
| IR-05 | Event assets shall be browser-supported image files with exact case-sensitive relative paths and extensions, distinct visual content, accurate captions and meaningful alternative text; usage permission shall be documented where applicable. | Five case-matching supported extensions and metadata; screenshot only. | Partially Compliant | TC-IMG-001, TC-IMG-002 | Decode, compare visual content, permissions. |
| IR-06 | The homepage shall retain the existing jQuery 3.7.1 CDN URL `https://code.jquery.com/jquery-3.7.1.min.js` for gallery animations; new features shall not depend on jQuery. | index.html CDN 3.7.1; native features use DOM APIs. | Compliant | TC-REG-008, TC-REG-009 | Test CDN outage. |
| IR-07 | The system shall support current stable Chrome, Edge and Firefox; browser versions used shall be recorded during verification. Touch behavior shall be checked on a mobile browser or documented emulation. | No recorded browser versions or touch execution evidence. | Not Verifiable | TC-BR-001, TC-BR-002, TC-BR-003, TC-BR-004 | Execute TC-BR cases. |
| IR-08 | No new server endpoint, API, database or storage interface shall be introduced. | No new endpoint or storage interface found in source. | Compliant | TC-LST-016 | Confirm network/storage during runtime. |

## 9. Non-functional requirements conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| NFR-01 | Users shall be able to add an activity using the existing labelled input and one submit action; feedback shall appear without navigation. | Planner labelled form and synchronous handler. | Partially Compliant | TC-LST-003 | Test submission and feedback. |
| NFR-02 | Interactive controls shall be keyboard reachable with visible focus; activity submission shall work by Enter and button activation. | Activity focus CSS present; inherited navigation mismatch F-01; timetable F-06. | Partially Compliant | TC-LST-004, TC-UI-001, TC-REG-003 | Keyboard and focus inspection. |
| NFR-03 | All event images shall have accurate meaningful alt text; error/success states shall use text, not color alone; activity feedback shall be announced through a polite live region. | Meaningful metadata and textual live feedback present. | Partially Compliant | TC-IMG-007, TC-LST-014, TC-UI-001 | Verify image accuracy and announcements. |
| NFR-04 | At 320, 375, 768, 1024 and 1440 CSS px viewport widths, all three pages shall remain usable without unintended page-level horizontal scrolling, overlapping controls or clipped essential text; timetable wrapper scrolling is permitted. | Responsive rules and wrapping present; dropdown positioning risk F-02. | Partially Compliant | TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | 15 page/width checks. |
| NFR-05 | The department gallery shall retain two side-by-side images at 375 px; the activity planner shall fit its container at 320 and 375 px, including a 100-character unbroken entry. | style.css 3–18,1751–1762,1834–1857: two columns and overflow-wrap. | Partially Compliant | TC-UI-003, TC-UI-004 | Test 100-unit entries at 320/375. |
| NFR-06 | New features shall initialize without uncaught exceptions in normal operation and specified missing-element/error scenarios; a failure in one feature shall not disable unrelated features. | Feature guards present; faculty recovery can throw F-03. | Partially Compliant | TC-IMG-018, TC-IMG-019, TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029, TC-REG-009, TC-REG-023 | Correct and fault-test. |
| NFR-07 | Event selection shall require no polling or repeated random selection during normal display; fallback attempts shall be bounded by the number of eligible assets. | Event loop removes candidates; no polling; five configured entries. | Compliant | TC-IMG-004, TC-IMG-021 | Verify failure attempts. |
| NFR-08 | Faculty date checking shall use at most one dedicated 60-second timer, no per-second faculty polling, and no DOM writes when output is unchanged. | One 60000 ms registration and unchanged text guard. | Partially Compliant | TC-FAC-035, TC-FAC-036, TC-FAC-039 | Instrument timer and mutations. |
| NFR-09 | Activity insertion shall complete synchronously within the submit handler without network requests or artificial delays; one valid submission shall add one item. | Activity handler synchronous, no network or delay. | Partially Compliant | TC-LST-017 | Count actual insertions. |
| NFR-10 | New code shall use named, feature-specific initialization functions and scoped selectors; unrelated existing blocks shall remain intact. | Named feature initializers and scoped targets; inherited blocks retained. | Compliant | TC-VAL-009 | No change. |
| NFR-11 | User-provided activity text and dynamic captions shall be inserted as text, never interpreted as HTML; no `eval`, dynamic script injection or user-derived HTML insertion shall be used. | textContent for activity and captions; no eval or HTML insertion found. | Compliant | TC-IMG-006, TC-LST-013, TC-LST-021, TC-VAL-010 | Run literal markup test. |
| NFR-12 | New feedback presentation shall use external CSS classes, with behavior in external JavaScript and structure in HTML. | External CSS feedback classes and external JS. | Compliant | TC-VAL-008 | No change. |
| NFR-13 | Normal and specified error scenarios shall be verified in the supported browsers; no unexplained console errors attributable to the application shall remain. | No formal browser console records. | Not Verifiable | TC-BR-001, TC-BR-002, TC-BR-003, TC-VAL-012 | Execute browser and console checks. |
| NFR-14 | The final candidate shall pass the approved Assignment 3 tests and regression checks for all inherited features; failures shall be corrected and retested before acceptance. | All 158 approved cases remain Not Tested. | Not Verifiable | TC-DOC-009 | Complete formal execution and retests. |
| NFR-15 | Text and controls introduced or changed by Assignment 3 shall meet contrast ratios of 4.5:1 for normal text and 3:1 for large text and essential control boundaries/focus indicators. | Static palette calculations meet sampled thresholds; rendered states untested. | Partially Compliant | TC-UI-002 | Measure computed colors and focus. |

## 10. Validation and error handling conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| VR-IMG-01 | Empty collection or no valid metadata entries | script.js 147–175,225–232: verifies initial image and displays unavailable message. | Partially Compliant | TC-IMG-015, TC-IMG-016 | Test both initial asset states. |
| VR-IMG-02 | Missing, corrupt or unloadable selected image | script.js 235–273: distinct attempts and final feedback; F-05. | Partially Compliant | TC-IMG-020, TC-IMG-021 | Test missing/corrupt/all failures; clarify hard limit. |
| VR-IMG-03 | Missing image or caption target | script.js 41–89,178–189: guards and diagnostic; F-07. | Partially Compliant | TC-IMG-018, TC-IMG-019, TC-REG-023 | Test missing/wrong type targets and other pages. |
| VR-IMG-04 | Missing/invalid metadata | script.js 91–109,206–223: filters nonempty metadata and relative paths. | Compliant | TC-IMG-017 | Run malformed metadata fixture. |
| VR-FAC-01 | Missing or malformed date | script.js 305–312,380–384: missing/malformed rejection. | Partially Compliant | TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-033 | Run all invalid fixtures. |
| VR-FAC-02 | Impossible Gregorian date | script.js 314–338: year/month/day and Gregorian rules; extracted assertions passed. | Partially Compliant | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-016, TC-FAC-017, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032 | Run remaining controlled cases. |
| VR-FAC-03 | Future date | script.js 386–388: future date key comparison and exact message. | Partially Compliant | TC-FAC-021 | Verify local date boundary. |
| VR-FAC-04 | One invalid faculty entry | script.js 424–438: per-member loop; ordinary invalid values return text; F-03 for exceptional DOM writes. | Partially Compliant | TC-FAC-034 | Mixed valid/invalid and fault fixtures. |
| VR-LST-01 | Empty or whitespace-only activity | script.js 672–680: exact blank message and focus helper. | Partially Compliant | TC-LST-006, TC-LST-007, TC-LST-008 | Test empty and whitespace. |
| VR-LST-02 | Raw input exceeds 100 UTF-16 code units | script.js 663–670: exact overlength message before trim. | Partially Compliant | TC-LST-011, TC-LST-012 | Test bypassed maxlength. |
| VR-LST-03 | Missing or wrong-type form, input, button, list or feedback element | script.js 601–647,770–796: dependency checks and form recovery; F-04. | Partially Compliant | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-REG-023 | Test each missing/wrong-type target. |
| VR-LST-04 | Valid input | script.js 683–704: insertion, clear, success and focus. | Partially Compliant | TC-LST-003, TC-LST-009, TC-LST-018, TC-LST-019, TC-LST-020 | Verify valid submission. |
| VR-INIT-01 | Unexpected feature initialization failure | Independent guards and diagnostics; faculty recovery exception F-03 and planner shutdown F-04. | Partially Compliant | TC-LST-027, TC-LST-028, TC-LST-029 | Correct and inject feature failures. |
| VR-INIT-02 | jQuery CDN unavailable | jquery-script.js 12–28: CDN guard and disabled controls. | Partially Compliant | TC-REG-009 | Block CDN and exercise native features. |

## 11. Coding standards conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| SC-01 | HTML shall use HTML5 doctype, semantic elements, language, UTF-8 and viewport metadata; existing semantic lists and table structures shall be retained. | All three pages have doctype, lang, charset, viewport and semantic structure. | Compliant | TC-VAL-006 | W3C validation remains separate. |
| SC-02 | HTML element and attribute names and CSS selectors/properties shall use lowercase conventions; case-sensitive identifiers and asset paths shall remain consistent. | Lowercase HTML and CSS naming conventions; exact event paths. | Compliant | TC-VAL-007 | No change. |
| SC-03 | Modified code shall use two-space indentation, double quotation marks for HTML attributes and no trailing whitespace. | No trailing whitespace; odd continuation indentation exists; F-08. | Partially Compliant | TC-VAL-007 | Review changed lines against two-space convention. |
| SC-04 | CSS and JavaScript shall remain external; no unnecessary inline styles, inline JavaScript event attributes or `!important` declarations shall be introduced. | External CSS/JS; no author inline handlers or !important found. | Compliant | TC-VAL-008 | No change. |
| SC-05 | New identifiers shall be meaningful and comments shall explain non-obvious logic and feature responsibilities without stale descriptions. | Meaningful feature names and explanatory comments. | Compliant | TC-VAL-009 | No change. |
| SC-06 | New controls shall use accessible labels and images shall use meaningful alternative text. | Associated labels and descriptive alt present; image accuracy not independently verified. | Partially Compliant | TC-IMG-007, TC-LST-001, TC-UI-001 | Inspect accessibility tree and images. |
| SC-07 | New native event handling shall use `addEventListener()` and safe DOM methods; the inherited jQuery gallery is an explicit exception. | Native addEventListener and safe textContent; gallery exception retained. | Compliant | TC-LST-002, TC-VAL-010 | No change. |
| SC-08 | Responsive layouts shall use Flexbox or Grid as appropriate and retain existing media queries; avoid broad unrelated CSS refactoring. | Flexbox/Grid and media queries retained; scoped changes. | Compliant | TC-VAL-011 | Verify responsive rendering. |
| SC-09 | The existing alumni feedback character counter shall be preserved; no unrelated new character counter shall be introduced. | Alumni counter block unchanged; no new activity counter. | Compliant | TC-REG-018, TC-VAL-011 | Run regression. |
| SC-10 | The developer shall inspect modified HTML/CSS against applicable Google HTML/CSS Style Guide conventions and record any justified legacy exceptions rather than silently rewriting unrelated code. | Source review performed; inherited duplicate selectors and formatting deviations need disposition. | Partially Compliant | TC-VAL-011 | Record guide review and legacy exceptions. |

## 12. AI-assisted workflow conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| AI-01 | The developer shall retain the completed baseline review and gap analysis as the input to requirements engineering, including evidence limitations. | Baseline review in conversation; retained repository artifact not inspected. | Partially Compliant | TC-DOC-001 | Verify retained baseline record. |
| AI-02 | The developer shall review and approve this SRS before modifying source code; subsequent requirement changes shall be documented and traced. | Approved SRS matches earlier approved upload; conversation establishes approval before changes. | Compliant | TC-DOC-002 | Retain approval evidence. |
| AI-03 | The developer shall derive a separate test and validation plan from approved requirements, with unique test IDs, expected outcomes and traceability; initial execution status shall be Not Tested. | Approved plan: 158 unique cases, all 125 IDs mapped, all Not Tested. | Compliant | TC-DOC-003 | Preserve plan. |
| AI-04 | The developer shall follow the instructor's nine implementation steps below, reusing compliant baseline components rather than duplicating them. | User confirms nine steps; source supports features and refinements. | Partially Compliant | TC-DOC-004 | Verify step records and commits. |
| AI-05 | The developer shall use AI-assisted iterative debugging and refinement, recording actual findings, decisions, corrections and subsequent verification. | Iterative review and changes evident in conversation/source; complete records not verified. | Partially Compliant | TC-DOC-005 | Retain debugging evidence. |
| AI-06 | The developer shall perform an AI-assisted conformance review of the implemented candidate against the SRS and test plan, identifying unmet requirements and evidence limitations. | This audit evaluates all 125 items and 158 case mappings. | Compliant | TC-DOC-006 | Review and approve audit. |
| AI-07 | The developer shall correct confirmed defects, document dispositions of other findings and re-review affected requirements. | Corrective actions from current audit not yet implemented. | Non-Compliant | TC-DOC-007 | Correct, disposition and re-review. |
| AI-08 | The developer shall produce a code comprehension walkthrough explaining final HTML, CSS and JavaScript, including native list handling, faculty dates, image selection and inherited jQuery dependencies. | Final Assignment 3 walkthrough not supplied or completed in current stage. | Non-Compliant | TC-DOC-008 | Produce after correction. |
| AI-09 | The developer shall manually execute functional, accessibility, responsive, compatibility and regression tests using the approved plan and record actual results. | Formal execution pending per user and plan. | Non-Compliant | TC-BR-001, TC-BR-002, TC-BR-003, TC-DOC-009 | Execute and record actual results. |
| AI-10 | The developer shall validate all final HTML pages and the shared CSS using W3C services, retain actual evidence, correct errors and document any warnings and their dispositions. | Final W3C validation pending. | Non-Compliant | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-DOC-012 | Validate all HTML and CSS. |
| AI-11 | The developer shall perform JavaScript syntax checks on both scripts and inspect browser console output on all pages and relevant interactions; expected fault-injection diagnostics shall be distinguished from unexpected errors. | Both scripts passed Node syntax; browser console inspection pending. | Partially Compliant | TC-VAL-005, TC-VAL-012 | Inspect all pages and faults. |
| AI-12 | The developer shall prepare a final testing report with executed results, defects, retests, evidence and requirement coverage. | Final testing report not yet produced. | Non-Compliant | TC-DOC-010 | Prepare after execution. |
| AI-13 | The developer shall retain a complete public AI conversation transcript covering requirements, test planning, implementation, debugging, conformance and walkthrough; verify the public link without exposing credentials or real personal information. | Public transcript link and privacy verification not supplied. | Not Verifiable | TC-DOC-013 | Verify public transcript. |
| AI-14 | The developer shall make incremental Git commits with meaningful messages, preserve prior assignment tags and documentation, and verify the final candidate before creating `assignment-3-final`. | Git history, tags and candidate revision not supplied. | Not Verifiable | TC-DOC-014, TC-DOC-015, TC-DOC-019 | Inspect actual repository. |

## 13. Documentation and submission conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| DR-01 | The developer shall provide one ZIP containing complete runnable HTML, CSS, JavaScript and all required local assets, with relative directory structure preserved. | No final ZIP supplied. | Not Verifiable | TC-DOC-017, TC-DOC-018 | Create and inspect final package. |
| DR-02 | The developer shall submit a verified public share link to the complete AI-assisted development conversation. | No verified public share URL supplied. | Not Verifiable | TC-DOC-013 | Verify link. |
| DR-03 | The developer shall provide a testing report containing test IDs, requirement references, expected and actual results, pass/fail status, defects, retests and evidence limitations; unexecuted tests shall not be marked passed. | Final testing report pending. | Non-Compliant | TC-DOC-010 | Produce actual results report. |
| DR-04 | The developer shall retain `assignment-3/SRS.md`, `ASSIGNMENT_TEST_PLAN.md`, `CONFORMANCE_AUDIT.md`, `CODE_WALKTHROUGH.md` and `TESTING_REPORT.md` under the Assignment 3 directory (the latter four filenames are relative to that directory). | SRS and plan supplied; audit generated now; walkthrough/report pending. | Partially Compliant | TC-DOC-011 | Verify repository placement and remaining docs. |
| DR-05 | The developer shall retain actual validation and manual testing evidence under `assignment-3/screenshots/`, with report references to real evidence filenames and the verified candidate. | No final validation or manual evidence register supplied. | Not Verifiable | TC-DOC-012 | Collect real evidence. |
| DR-06 | The developer shall preserve all Assignment 1 and Assignment 2 documentation and tags; historical results shall not be presented as new Assignment 3 results. | README preserves historical sections; repository docs/tags not independently verified. | Not Verifiable | TC-DOC-014 | Inspect Git and prior docs. |
| DR-07 | The developer shall update the root README at finalization to describe actual Assignment 3 behavior, the native migration, historical jQuery implementation and verified results without erasing prior records. | README still describes three events and jQuery list; finalization deferred (F-09). | Non-Compliant | TC-DOC-016 | Update only at finalization. |
| DR-08 | The developer shall verify the final ZIP by extraction and execution, checking all pages, five event assets, relative links and required documentation; the public transcript and repository candidate shall also be verified. | No extracted ZIP, public link or final revision evidence. | Not Verifiable | TC-DOC-018 | Verify all three. |
| DR-09 | The developer shall record the actual final Git revision and verify the final tag points to the accepted candidate; after any subsequent change, affected verification and ZIP generation shall be repeated before submission. No fabricated revision or timestamp shall be recorded. | No actual final revision/tag supplied. | Not Verifiable | TC-DOC-019 | Record and reverify final candidate. |
| DR-10 | The final package shall exclude credentials, real alumni personal information, unnecessary development caches and repository internals; required academic documentation and evidence shall remain included. | Final package not available for privacy/inventory inspection. | Not Verifiable | TC-DOC-017 | Inspect ZIP contents. |

## 14. Acceptance criteria conformance matrix
| ID | Approved requirement | Source evidence / location | Classification | Approved test cases | Action / verification |
|---|---|---|---|---|---|
| AC-01 | Exactly five distinct event assets and five matching array entries exist and load; every entry can be selected through controlled index checks; HTML fallback metadata agrees with its asset. | Five metadata entries and matching screenshot/fallback; no asset loading evidence. | Partially Compliant | TC-IMG-001, TC-IMG-002, TC-IMG-003, TC-IMG-005, TC-IMG-006, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013 | Execute TC-IMG controlled and asset checks. |
| AC-02 | Normal loads select an eligible image; consecutive repeats are accepted; empty array, malformed metadata, missing target and all-image-failure scenarios produce specified behavior without uncaught exceptions or unbounded retries. | Random/fallback source present; F-05/F-07 and runtime checks outstanding. | Partially Compliant | TC-IMG-004, TC-IMG-014, TC-IMG-015, TC-IMG-016, TC-IMG-017, TC-IMG-018, TC-IMG-019, TC-IMG-020, TC-IMG-021 | Execute fault and repetition tests. |
| AC-03 | Existing five faculty profiles and disclaimers remain; expected values match before/on/after anniversary, same-day, leap-day and invalid/future examples; invalid entries do not affect valid ones. | Profiles match baseline and 15 pure-function assertions pass. | Partially Compliant | TC-FAC-001, TC-FAC-002, TC-FAC-003, TC-FAC-004, TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-016, TC-FAC-017, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-021, TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032, TC-FAC-033, TC-FAC-034, TC-FAC-038 | Execute all DOM/date fixtures. |
| AC-04 | With a controlled local date change, experience updates by the next available 60-second check; unchanged text is not rewritten and no faculty timer runs on the alumni page. | Timer and date guard present; no runtime timer evidence. | Partially Compliant | TC-FAC-035, TC-FAC-036, TC-FAC-037, TC-FAC-039 | Execute rollover/mutation checks. |
| AC-05 | Button and Enter each add exactly one trimmed literal-text item in order; repeated names are accepted; prior items remain; valid input clears and focus returns; no reload or persistence occurs. Source inspection confirms native event and DOM methods. | Native list source consistent; no actual submission evidence. | Partially Compliant | TC-LST-001, TC-LST-002, TC-LST-003, TC-LST-004, TC-LST-005, TC-LST-009, TC-LST-013, TC-LST-016, TC-LST-017, TC-LST-021 | Execute button/Enter/order/reload cases. |
| AC-06 | Empty, whitespace-only and raw overlength input add no item and show specified feedback; 100-unit input is accepted if nonblank; missing dependencies fail safely; repeated initialization does not duplicate processing. | Validation and guards present; recovery findings outstanding. | Partially Compliant | TC-LST-006, TC-LST-007, TC-LST-008, TC-LST-010, TC-LST-011, TC-LST-012, TC-LST-014, TC-LST-015, TC-LST-018, TC-LST-019, TC-LST-020, TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029 | Execute boundary and fault cases. |
| AC-07 | Navigation, content, clock, jQuery gallery, alumni validation/counter/privacy and timetable pass regression checks; gallery CDN failure does not interrupt native features. | Inherited source preserved; navigation F-01/F-02. | Partially Compliant | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011, TC-REG-012, TC-REG-013, TC-REG-014, TC-REG-015, TC-REG-016, TC-REG-017, TC-REG-018, TC-REG-019, TC-REG-020, TC-REG-021, TC-REG-022, TC-REG-023, TC-REG-024, TC-REG-025 | Correct with approval and run regressions. |
| AC-08 | At 320, 375, 768, 1024 and 1440 px, all pages meet layout requirements; keyboard, labels, focus, live feedback, contrast and text wrapping meet specified checks. | Responsive and accessibility rules present; actual rendering pending. | Partially Compliant | TC-IMG-007, TC-UI-001, TC-UI-002, TC-UI-003, TC-UI-004, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009, TC-BR-004 | Run all UI checks. |
| AC-09 | Supported browser checks and source inspection confirm guarded initialization, maintainable code, separation of concerns and coding conventions; no unexplained application console errors remain. | Syntax and static checks available; fault/browser/guide checks pending. | Partially Compliant | TC-BR-001, TC-BR-002, TC-BR-003, TC-VAL-006, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-011, TC-VAL-012, TC-DOC-009 | Correct and verify. |
| AC-10 | All required workflow stages are documented; final HTML/CSS validation has zero errors with warnings documented; JavaScript syntax checks succeed; executed tests and retests are recorded. | SRS, plan and audit available; formal validation and reports pending. | Partially Compliant | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-VAL-005, TC-VAL-012, TC-DOC-001, TC-DOC-002, TC-DOC-003, TC-DOC-004, TC-DOC-005, TC-DOC-006, TC-DOC-007, TC-DOC-008, TC-DOC-009, TC-DOC-010, TC-DOC-011, TC-DOC-012, TC-DOC-015 | Complete workflow. |
| AC-11 | Final ZIP extracts and runs; public transcript is accessible; previous documentation and tags are preserved; README and final Git revision/tag match the accepted candidate. | Final package, transcript and Git evidence absent. | Not Verifiable | TC-DOC-013, TC-DOC-014, TC-DOC-016, TC-DOC-017, TC-DOC-018, TC-DOC-019 | Verify final deliverables. |

## 15. Responsive design and accessibility
| Width | Expected faculty columns | Gallery | Planner | Event height | Timetable |
|---|---:|---|---|---|---|
| 320 | 1 | Two columns | Stacked | 220px | Internal scrolling if needed |
| 375 | 1 | Two columns | Stacked | 220px | Internal scrolling if needed |
| 768 | 2 | Two columns | Row | 350px | Internal scrolling if needed |
| 1024 | 2 | Two columns | Row | 350px | Internal scrolling if needed |
| 1440 | 2 | Two columns | Row | 350px | Internal scrolling if needed |
These are CSS predictions, not measured rendering. Inspect all 15 page/width combinations, including open dropdowns, 100-character ASCII and 50 surrogate-pair emoji entries, literal markup, validation states, focus and timetable scrolling. Event contain preserves proportions; caption and list overflow-wrap anywhere are present. Single-line input naturally scrolls internally. Labels, live regions, aria-describedby and invalid state are present; announcements and focus need runtime checks. Navigation ARIA mismatch F-01 and potential overflow F-02 remain.

### Static contrast calculations
| Pair | Foreground | Background | Ratio | Threshold | Result |
|---|---|---|---:|---:|---|
| input border | #64748b | #f7f9fc | 4.51:1 | 3:1 | Meets sampled threshold |
| placeholder | #64748b | #ffffff | 4.76:1 | 4.5:1 | Meets sampled threshold |
| input text | #24364b | #ffffff | 12.32:1 | 4.5:1 | Meets sampled threshold |
| error | #b42318 | #f7f9fc | 6.23:1 | 4.5:1 | Meets sampled threshold |
| success | #167347 | #f7f9fc | 5.57:1 | 4.5:1 | Meets sampled threshold |
| focus | #234f7b | #f7f9fc | 8.04:1 | 3:1 | Meets sampled threshold |
| caption | #14345a | #f7f9fc | 11.93:1 | 4.5:1 | Meets sampled threshold |
| event note | #667085 | #ffffff | 4.97:1 | 4.5:1 | Meets sampled threshold |
| faculty | #234f7b | #f7f9fc | 8.04:1 | 4.5:1 | Meets sampled threshold |
| button | #ffffff | #14345a | 12.59:1 | 4.5:1 | Meets sampled threshold |
| disabled | #475569 | #e2e8f0 | 6.15:1 | 4.5:1 | Meets sampled threshold |
Computed using WCAG relative luminance (linearized sRGB, weights 0.2126/0.7152/0.0722; lighter+0.05 divided by darker+0.05). Actual computed backgrounds, focus adjacency and states remain to be verified.

## 16. Regression and integration
Alumni and timetable HTML are text-identical to original baseline; script from Practical 11 onward is text-identical, including clock and navigation. Gallery script retains stop(true,true), fadeTo(800,1/0), CDN guard and disabled controls; obsolete list handler absent. Alumni CSP, disabled initial register, local validation and counter retained. Timetable headers/caption/merged cells retained. Native features independent of jQuery in source. Test all pages and CDN failure; no runtime regression pass claimed.

## 17. Test plan and traceability review
Parsed 158 unique cases and 125 matrix rows. All requirement references valid; all reverse mappings exactly match the matrix; no unmapped requirements. All 158 execution statuses Not Tested. Approved plan differs from earlier proposed copy only in approval wording, TC-IMG-013 title and literal-input quoting.
| Method | Count |
|---|---:|
| Browser | 65 |
| Static | 12 |
| Controlled | 42 |
| Fault | 16 |
| External | 4 |
| Document | 19 |

Coverage includes normal, negative, boundary, controlled date/random, fault, responsive, compatibility, regression, external and deliverable checks. TC-IMG-012 and 013 both select final index but different boundary values; intentional. Browser aggregate cases overlap functional tests by design. Fault fixtures must run before initialization; IIFE faculty functions can be exercised by temporary fixture injection, not direct console calls. TC-LST-029 is initialization failure, not explicit submission rollback; supplement with a controlled append/focus failure. Supplement TC-LST-020/021 with 50 emoji and 51 emoji raw lengths, and TC-IMG-021 with attempt count instrumentation. Do not edit approved plan or inflate 158 count. FR-IMG-08 direct mapping omits missing-target cases 018/019, but VR-IMG-03 maps them; use combined coverage. No contradictory expected results identified in inspected cases.

### Complete case inventory (reviewed, not executed)
| Test ID | Objective | Method | Requirement references | Execution |
|---|---|---|---|---|
| TC-IMG-001 | Five distinct assets | Browser | AC-01, FR-IMG-01, IR-05 | Not Tested |
| TC-IMG-002 | Paths and metadata | Browser | AC-01, FR-IMG-02, IR-05 | Not Tested |
| TC-IMG-003 | Initial fallback | Browser | AC-01, FR-IMG-06 | Not Tested |
| TC-IMG-004 | Observational refresh | Browser | AC-02, FR-IMG-04, FR-IMG-05, FR-IMG-07, NFR-07 | Not Tested |
| TC-IMG-005 | Random formula | Static | AC-01, FR-IMG-03, FR-IMG-07 | Not Tested |
| TC-IMG-006 | Caption safety | Browser | AC-01, FR-IMG-05, NFR-11 | Not Tested |
| TC-IMG-007 | Image accessibility | Browser | AC-08, IR-01, NFR-03, SC-06 | Not Tested |
| TC-IMG-008 | Controlled index 0 | Controlled | AC-01, FR-IMG-03, FR-IMG-05 | Not Tested |
| TC-IMG-009 | Controlled index 1 | Controlled | AC-01, FR-IMG-03, FR-IMG-05 | Not Tested |
| TC-IMG-010 | Controlled index 2 | Controlled | AC-01, FR-IMG-03, FR-IMG-05 | Not Tested |
| TC-IMG-011 | Controlled index 3 | Controlled | AC-01, FR-IMG-03, FR-IMG-05 | Not Tested |
| TC-IMG-012 | Controlled index 4 | Controlled | AC-01, FR-IMG-03, FR-IMG-05 | Not Tested |
| TC-IMG-013 | Upper random-index boundary | Controlled | AC-01, FR-IMG-03, FR-IMG-05 | Not Tested |
| TC-IMG-014 | Permitted repeat | Controlled | AC-02, FR-IMG-07 | Not Tested |
| TC-IMG-015 | Empty collection with usable fallback | Fault | AC-02, FR-IMG-08, VR-IMG-01 | Not Tested |
| TC-IMG-016 | Empty collection without fallback | Fault | AC-02, FR-IMG-08, VR-IMG-01 | Not Tested |
| TC-IMG-017 | Invalid metadata | Fault | AC-02, FR-IMG-08, VR-IMG-04 | Not Tested |
| TC-IMG-018 | Missing image target | Fault | AC-02, NFR-06, VR-IMG-03 | Not Tested |
| TC-IMG-019 | Missing caption target | Fault | AC-02, NFR-06, VR-IMG-03 | Not Tested |
| TC-IMG-020 | Missing or corrupt selected asset | Fault | AC-02, FR-IMG-05, VR-IMG-02 | Not Tested |
| TC-IMG-021 | All assets fail | Fault | AC-02, FR-IMG-08, NFR-07, VR-IMG-02 | Not Tested |
| TC-FAC-001 | Preserve profiles and dates | Browser | AC-03, FR-FAC-01, FR-FAC-02, IR-02 | Not Tested |
| TC-FAC-002 | Initial display | Browser | AC-03, FR-FAC-06, FR-FAC-07 | Not Tested |
| TC-FAC-003 | Illustrative disclaimer | Browser | AC-03, FR-FAC-09 | Not Tested |
| TC-FAC-004 | No JavaScript | Browser | AC-03, FR-FAC-10 | Not Tested |
| TC-FAC-005 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-006 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-007 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-008 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-009 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-010 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-011 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-012 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-013 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-014 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-015 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-016 | Fixed-date calculation | Controlled | AC-03, FR-FAC-05, VR-FAC-02 | Not Tested |
| TC-FAC-017 | Fixed-date calculation | Controlled | AC-03, FR-FAC-05, VR-FAC-02 | Not Tested |
| TC-FAC-018 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-019 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-020 | Fixed-date calculation | Controlled | AC-03, FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02 | Not Tested |
| TC-FAC-021 | Fixed-date calculation | Controlled | AC-03, FR-FAC-05, VR-FAC-03 | Not Tested |
| TC-FAC-022 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-01 | Not Tested |
| TC-FAC-023 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-01 | Not Tested |
| TC-FAC-024 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-01 | Not Tested |
| TC-FAC-025 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-01 | Not Tested |
| TC-FAC-026 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-01 | Not Tested |
| TC-FAC-027 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-01 | Not Tested |
| TC-FAC-028 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-02 | Not Tested |
| TC-FAC-029 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-02 | Not Tested |
| TC-FAC-030 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-02 | Not Tested |
| TC-FAC-031 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-02 | Not Tested |
| TC-FAC-032 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-02 | Not Tested |
| TC-FAC-033 | Reject invalid date | Controlled | AC-03, FR-FAC-05, VR-FAC-01 | Not Tested |
| TC-FAC-034 | Independent profiles | Controlled | AC-03, FR-FAC-05, VR-FAC-04 | Not Tested |
| TC-FAC-035 | Minute checks and date rollover | Controlled | AC-04, FR-FAC-07, NFR-08 | Not Tested |
| TC-FAC-036 | Unchanged DOM | Controlled | AC-04, FR-FAC-08, NFR-08 | Not Tested |
| TC-FAC-037 | Suspended tab | Controlled | AC-04, FR-FAC-07 | Not Tested |
| TC-FAC-038 | Local versus UTC date | Controlled | AC-03, FR-FAC-03 | Not Tested |
| TC-FAC-039 | No unrelated timer | Controlled | AC-04, FR-FAC-08, FR-REG-09, NFR-08 | Not Tested |
| TC-LST-001 | Existing interface | Browser | AC-05, FR-LST-01, IR-03, SC-06 | Not Tested |
| TC-LST-002 | Native implementation | Static | AC-05, FR-LST-02, FR-LST-06, FR-LST-07, SC-07 | Not Tested |
| TC-LST-003 | Button submission | Browser | AC-05, FR-LST-02, FR-LST-03, FR-LST-09, NFR-01, VR-LST-04 | Not Tested |
| TC-LST-004 | Enter submission | Browser | AC-05, FR-LST-02, FR-LST-03, NFR-02 | Not Tested |
| TC-LST-005 | Order and duplicates | Browser | AC-05, FR-LST-07, FR-LST-11 | Not Tested |
| TC-LST-006 | Empty input | Browser | AC-06, FR-LST-04, FR-LST-08, FR-LST-09, VR-LST-01 | Not Tested |
| TC-LST-007 | Spaces only | Browser | AC-06, FR-LST-04, VR-LST-01 | Not Tested |
| TC-LST-008 | Other whitespace | Browser | AC-06, FR-LST-04, VR-LST-01 | Not Tested |
| TC-LST-009 | Trim input | Browser | AC-05, FR-LST-04, FR-LST-06, VR-LST-04 | Not Tested |
| TC-LST-010 | Native length constraint | Browser | AC-06, FR-LST-05 | Not Tested |
| TC-LST-011 | Bypassed length | Browser | AC-06, FR-LST-05, FR-LST-09, VR-LST-02 | Not Tested |
| TC-LST-012 | Emoji length boundary | Browser | AC-06, FR-LST-05, VR-LST-02 | Not Tested |
| TC-LST-013 | Literal markup | Browser | AC-05, FR-LST-06, NFR-11 | Not Tested |
| TC-LST-014 | Accessible feedback | Browser | AC-06, FR-LST-08, FR-LST-13, NFR-03 | Not Tested |
| TC-LST-015 | Repeated initialization | Browser | AC-06, FR-LST-10 | Not Tested |
| TC-LST-016 | Temporary state | Browser | AC-05, FR-LST-12, IR-08 | Not Tested |
| TC-LST-017 | Synchronous insertion | Browser | AC-05, NFR-09 | Not Tested |
| TC-LST-018 | Valid length boundary | Browser | AC-06, FR-LST-05, FR-LST-06, VR-LST-04 | Not Tested |
| TC-LST-019 | Valid length boundary | Browser | AC-06, FR-LST-05, FR-LST-06, VR-LST-04 | Not Tested |
| TC-LST-020 | Valid length boundary | Browser | AC-06, FR-LST-05, FR-LST-06, VR-LST-04 | Not Tested |
| TC-LST-021 | Unicode text | Browser | AC-05, FR-LST-06, NFR-11 | Not Tested |
| TC-LST-022 | Missing or wrong-type dependency | Fault | AC-06, FR-LST-14, NFR-06, VR-LST-03 | Not Tested |
| TC-LST-023 | Missing or wrong-type dependency | Fault | AC-06, FR-LST-14, NFR-06, VR-LST-03 | Not Tested |
| TC-LST-024 | Missing or wrong-type dependency | Fault | AC-06, FR-LST-14, NFR-06, VR-LST-03 | Not Tested |
| TC-LST-025 | Missing or wrong-type dependency | Fault | AC-06, FR-LST-14, NFR-06, VR-LST-03 | Not Tested |
| TC-LST-026 | Missing or wrong-type dependency | Fault | AC-06, FR-LST-14, NFR-06, VR-LST-03 | Not Tested |
| TC-LST-027 | Isolate event display initialization failure | Fault | AC-06, NFR-06, VR-INIT-01 | Not Tested |
| TC-LST-028 | Isolate faculty calculator initialization failure | Fault | AC-06, NFR-06, VR-INIT-01 | Not Tested |
| TC-LST-029 | Isolate activity planner initialization failure | Fault | AC-06, NFR-06, VR-INIT-01 | Not Tested |
| TC-UI-001 | Keyboard and labels | Browser | AC-08, IR-01, NFR-02, NFR-03, SC-06 | Not Tested |
| TC-UI-002 | Contrast | Browser | AC-08, NFR-15 | Not Tested |
| TC-UI-003 | Long text wrapping | Browser | AC-08, NFR-05 | Not Tested |
| TC-UI-004 | Gallery mobile layout | Browser | AC-08, FR-REG-11, NFR-05 | Not Tested |
| TC-UI-005 | Responsive viewport | Browser | AC-08, FR-REG-11, IR-01, NFR-04 | Not Tested |
| TC-UI-006 | Responsive viewport | Browser | AC-08, FR-REG-11, IR-01, NFR-04 | Not Tested |
| TC-UI-007 | Responsive viewport | Browser | AC-08, FR-REG-11, IR-01, NFR-04 | Not Tested |
| TC-UI-008 | Responsive viewport | Browser | AC-08, FR-REG-11, IR-01, NFR-04 | Not Tested |
| TC-UI-009 | Responsive viewport | Browser | AC-08, FR-REG-11, IR-01, NFR-04 | Not Tested |
| TC-BR-001 | Chrome compatibility | Browser | AC-09, AI-09, IR-07, NFR-13 | Not Tested |
| TC-BR-002 | Edge compatibility | Browser | AC-09, AI-09, IR-07, NFR-13 | Not Tested |
| TC-BR-003 | Firefox compatibility | Browser | AC-09, AI-09, IR-07, NFR-13 | Not Tested |
| TC-BR-004 | Touch interaction | Browser | AC-08, FR-REG-02, IR-07 | Not Tested |
| TC-REG-001 | Homepage content | Browser | AC-07, FR-REG-01 | Not Tested |
| TC-REG-002 | Navigation links | Browser | AC-07, FR-REG-02 | Not Tested |
| TC-REG-003 | Dropdown hover and keyboard | Browser | AC-07, FR-REG-02, NFR-02 | Not Tested |
| TC-REG-004 | Click and outside click | Browser | AC-07, FR-REG-02 | Not Tested |
| TC-REG-005 | Digital clock | Browser | AC-07, FR-REG-03 | Not Tested |
| TC-REG-006 | Gallery assets and animation | Browser | AC-07, FR-REG-04 | Not Tested |
| TC-REG-007 | Animation queue | Browser | AC-07, FR-REG-04 | Not Tested |
| TC-REG-008 | jQuery migration | Static | AC-07, FR-LST-10, FR-REG-05, IR-06 | Not Tested |
| TC-REG-009 | CDN outage | Fault | AC-07, IR-06, NFR-06, VR-INIT-02 | Not Tested |
| TC-REG-010 | Alumni fields | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-011 | Alumni valid submission | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-012 | Alumni required fields and focus | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-013 | Alumni name and professional fields | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-014 | Alumni email and phone | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-015 | Alumni birth date | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-016 | Alumni batch and course | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-017 | Alumni optional about | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-018 | Alumni feedback counter | Browser | AC-07, FR-REG-06, SC-09 | Not Tested |
| TC-REG-019 | Alumni reset | Browser | AC-07, FR-REG-06 | Not Tested |
| TC-REG-020 | Alumni privacy notice and CSP | Browser | AC-07, FR-REG-07 | Not Tested |
| TC-REG-021 | Register initialization guard | Browser | AC-07, FR-REG-07 | Not Tested |
| TC-REG-022 | Timetable structure | Browser | AC-07, FR-REG-08 | Not Tested |
| TC-REG-023 | Shared script guards | Browser | AC-07, FR-REG-09, NFR-06, VR-IMG-03, VR-LST-03 | Not Tested |
| TC-REG-024 | Unrelated file changes | Static | AC-07, FR-REG-10 | Not Tested |
| TC-REG-025 | Script and CSS dependencies | Static | AC-07, IR-04 | Not Tested |
| TC-VAL-001 | HTML index validation | External | AC-10, AI-10 | Not Tested |
| TC-VAL-002 | HTML alumni validation | External | AC-10, AI-10 | Not Tested |
| TC-VAL-003 | HTML timetable validation | External | AC-10, AI-10 | Not Tested |
| TC-VAL-004 | CSS validation | External | AC-10, AI-10 | Not Tested |
| TC-VAL-005 | JavaScript syntax | Static | AC-10, AI-11 | Not Tested |
| TC-VAL-006 | HTML semantics | Static | AC-09, SC-01 | Not Tested |
| TC-VAL-007 | Formatting | Static | AC-09, SC-02, SC-03 | Not Tested |
| TC-VAL-008 | Separation of concerns | Static | AC-09, NFR-12, SC-04 | Not Tested |
| TC-VAL-009 | Maintainability | Static | AC-09, NFR-10, SC-05 | Not Tested |
| TC-VAL-010 | Safe DOM and handler audit | Static | AC-09, FR-LST-10, NFR-11, SC-07 | Not Tested |
| TC-VAL-011 | CSS and guide review | Static | AC-09, SC-08, SC-09, SC-10 | Not Tested |
| TC-VAL-012 | Console inspection | Browser | AC-09, AC-10, AI-11, NFR-13 | Not Tested |
| TC-DOC-001 | Baseline review | Document | AC-10, AI-01 | Not Tested |
| TC-DOC-002 | Approved SRS | Document | AC-10, AI-02 | Not Tested |
| TC-DOC-003 | Test plan | Document | AC-10, AI-03 | Not Tested |
| TC-DOC-004 | Nine steps | Document | AC-10, AI-04 | Not Tested |
| TC-DOC-005 | Debugging | Document | AC-10, AI-05 | Not Tested |
| TC-DOC-006 | Conformance audit | Document | AC-10, AI-06 | Not Tested |
| TC-DOC-007 | Corrective development | Document | AC-10, AI-07 | Not Tested |
| TC-DOC-008 | Walkthrough | Document | AC-10, AI-08 | Not Tested |
| TC-DOC-009 | Manual execution completeness | Document | AC-09, AC-10, AI-09, NFR-14 | Not Tested |
| TC-DOC-010 | Testing report | Document | AC-10, AI-12, DR-03 | Not Tested |
| TC-DOC-011 | Documentation files | Document | AC-10, DR-04 | Not Tested |
| TC-DOC-012 | Evidence register | Document | AC-10, AI-10, DR-05 | Not Tested |
| TC-DOC-013 | Public transcript | Document | AC-11, AI-13, DR-02 | Not Tested |
| TC-DOC-014 | Historical preservation | Document | AC-11, AI-14, DR-06 | Not Tested |
| TC-DOC-015 | Incremental Git history | Document | AC-10, AI-14 | Not Tested |
| TC-DOC-016 | README accuracy | Document | AC-11, DR-07 | Not Tested |
| TC-DOC-017 | ZIP inventory and privacy | Document | AC-11, DR-01, DR-10 | Not Tested |
| TC-DOC-018 | Extract and run ZIP | Document | AC-11, DR-01, DR-08 | Not Tested |
| TC-DOC-019 | Candidate and final tag | Document | AC-11, AI-14, DR-09 | Not Tested |

## 18. Automated checks
| Check | Actual method/result | Limitation |
|---|---|---|
| JS syntax | node --check on both uploaded scripts; exit 0 | Syntax only |
| HTML IDs and associations | BeautifulSoup: no duplicate IDs or unresolved for/aria-describedby/aria-labelledby/aria-controls references in any page | Not W3C or runtime |
| Dependencies | All three style.css; index CDN then script.js then jquery-script.js; alumni script.js; timetable no JS | No HTTP loading |
| Event metadata | Five distinct paths; exact first-object fallback match; screenshot filenames match | No actual asset decoding |
| Faculty attributes | Five visible dates parsed with strptime; both machine attributes match; names/designations/dates match baseline | No DOM runtime |
| Faculty pure functions | Extracted unchanged function definitions from actual candidate; Node executed 15 assertions, exit 0 | Not full initializer, timer or browser |
| Formatting | Zero trailing-whitespace lines across six files; odd leading indentation counts JS 4, CSS 4, HTML 0 | Continuation alignment not automatically a defect |
| Baseline comparison | Alumni and timetable HTML and JS from Practical 11 onward text-identical | No Git revision verification |
| SRS and plan | 125 unique requirements, 158 unique cases, 125 matrix rows; no invalid references or mapping differences | Structural mapping not proof of execution |
| Contrast | Calculated 11 source-color pairs above | Not rendered accessibility test |
| Browser/W3C/Git/ZIP | Not executed | Missing execution evidence |

Faculty assertions: before/on/after 2005 anniversary; same-day; 2024 leap-day before/after nonleap anniversary and leap anniversary; impossible 2025 leap date; future date; year 0001; 1900 invalid leap; 2000 valid leap; year 0000; future year 9999; undefined. All 15 passed in extracted-function harness.

## 19. Consolidated findings and severity summary

### F-01 — Inherited navigation state mismatch (Medium)
- Requirements: FR-REG-02 NFR-02 AC-07; tests: TC-REG-003, TC-REG-004, TC-BR-004, TC-UI-001.
- Location: style.css 180–183, 1904–1924; script.js 1480–1526.
- Observed: CSS hover/focus opens menus independently of aria-expanded; second click/outside click may leave CSS-visible menu.
- Expected: Visible state and accessible state agree; closing works.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Coordinate visibility and ARIA with hover/focus/click/touch; retain CSS fallback and links.
- Origin/approval: Inherited; approval required.
- Retest: TC-REG-003, TC-REG-004, TC-BR-004, TC-UI-001; record actual evidence and restore fixtures.

### F-02 — Potential mobile dropdown overflow (Medium)
- Requirements: NFR-04 FR-REG-02 AC-08; tests: TC-UI-005–009, TC-REG-003–004.
- Location: style.css 150–175.
- Observed: Absolute left alignment, 210px minimum and nowrap can exceed viewport near right edge; not reproduced.
- Expected: Menu remains within viewport.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Measure open menus; if confirmed, implement viewport-aware positioning/wrapping.
- Origin/approval: Inherited; approval required.
- Retest: TC-UI-005–009, TC-REG-003–004; record actual evidence and restore fixtures.

### F-03 — Faculty recovery can propagate a secondary exception (High)
- Requirements: VR-INIT-01 NFR-06 VR-FAC-04; tests: TC-LST-028, TC-FAC-034, TC-REG-023.
- Location: script.js 424–465, 548–560.
- Observed: Recovery calls updateExperienceText again without a nested guard. A throwing textContent setter can escape profile catch, date-check catch and outer initializer catch, preventing later script blocks.
- Expected: One failed feature/profile does not prevent other initialization.
- Impact: May prevent subsequent feature initialization.
- Corrective action: Protect each recovery write and outer cleanup independently; retain concise diagnostics and continue other profiles.
- Origin/approval: New; in-scope correction after audit approval.
- Retest: TC-LST-028, TC-FAC-034, TC-REG-023; record actual evidence and restore fixtures.

### F-04 — Planner recovery can stop before unavailable feedback (Medium)
- Requirements: FR-LST-14 VR-LST-03 VR-INIT-01; tests: TC-LST-022–029.
- Location: script.js 601–647, 706–815.
- Observed: Shutdown performs listener removal/registration, disabling and feedback sequentially; a thrown operation skips subsequent recovery. Outer catch contains error but may leave stale success or enabled control.
- Expected: Best-effort independent shutdown and truthful feedback.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Guard independent recovery operations; prioritize preventing navigation and clearing stale success.
- Origin/approval: New; in-scope after approval.
- Retest: TC-LST-022–029; record actual evidence and restore fixtures.

### F-05 — Fallback cap depends on configured collection size (Low)
- Requirements: VR-IMG-02 FR-IMG-08; tests: TC-IMG-020–021.
- Location: script.js 235–273.
- Observed: slice() and splice bound attempts by eligible count; five in current source, but six injected entries permit six attempts.
- Expected: No more than five distinct attempts under approved contract.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Keep five-entry invariant explicit or cap attempts without excluding any eligible entry from first selection; confirm interpretation.
- Origin/approval: New; preventive, not a normal five-entry failure.
- Retest: TC-IMG-020–021; record actual evidence and restore fixtures.

### F-06 — Timetable keyboard scroll access unverified (Medium)
- Requirements: NFR-02 FR-REG-08; tests: TC-UI-001, TC-REG-022.
- Location: timetable.html 52; style.css timetable-wrapper.
- Observed: Wrapper has overflow-x auto but no tabindex or accessible region name; browser behavior varies.
- Expected: Keyboard users can reach and scroll table.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Test supported browsers; if inaccessible, approve focusable named wrapper and visible focus.
- Origin/approval: Inherited; approval required if confirmed.
- Retest: TC-UI-001, TC-REG-022; record actual evidence and restore fixtures.

### F-07 — Event failure feedback can target unsuitable element (Medium)
- Requirements: VR-IMG-03 VR-INIT-01; tests: TC-IMG-018–019, TC-LST-027.
- Location: script.js 56–89,178–189,250–285.
- Observed: showUnavailable accepts any HTMLElement as caption even when wrong type or outside section; after replacement, catch still refers to detached original image.
- Expected: Feedback in suitable event container and no misleading image/caption state.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Validate feedback target and track current displayed image for recovery; protect recovery itself.
- Origin/approval: New; in-scope after approval.
- Retest: TC-IMG-018–019, TC-LST-027; record actual evidence and restore fixtures.

### F-08 — Formatting and inherited selector duplication (Low)
- Requirements: SC-03 SC-10; tests: TC-VAL-007, TC-VAL-011.
- Location: style.css 180–183,1904–1924; script.js continuation lines.
- Observed: No trailing whitespace; odd indentation occurs on continuation lines; duplicate navigation visibility selectors.
- Expected: Consistent two-space convention and documented legacy exceptions.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Review changed continuation lines; consolidate navigation selectors only with approved correction.
- Origin/approval: Mixed; inherited navigation requires approval.
- Retest: TC-VAL-007, TC-VAL-011; record actual evidence and restore fixtures.

### F-09 — README still reflects prior assignments (Informational)
- Requirements: DR-07; tests: TC-DOC-016.
- Location: README lines 16–50,159–171.
- Observed: Assignment 3 absent from overview; jQuery list and three event entries described as current.
- Expected: Final README accurately distinguishes current and historical behavior.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Update at finalization, preserve historical records.
- Origin/approval: Expected staged documentation work.
- Retest: TC-DOC-016; record actual evidence and restore fixtures.

### F-10 — Evidence and fixture coverage limitations (Informational)
- Requirements: IR-05 NFR-14 AC-01 AC-10 AC-11; tests: TC-IMG-001–002, TC-LST-020–021, TC-LST-029, TC-DOC-009–019.
- Location: Directory screenshot, approved plan, no final candidate package.
- Observed: Complete image binaries, browser logs, validator outputs, Git and ZIP evidence are not available. The approved test plan includes emoji length boundary testing through TC-LST-012, but supplementary controlled checks using 50 and 51 surrogate-pair emojis would strengthen boundary verification. An explicit submission rollback fault scenario would also strengthen coverage.
- Expected: Complete actual evidence and robust fault verification.
- Impact: May compromise the associated requirement or leave its acceptance evidence incomplete.
- Corrective action: Record supplementary subchecks without changing approved case count; obtain assets and final evidence.
- Origin/approval: Verification gap; no source change implied.
- Retest: TC-IMG-001–002, TC-LST-020–021, TC-LST-029, TC-DOC-009–019; record actual evidence and restore fixtures.

Severity counts: Medium: 5, High: 1, Low: 2, Informational: 2; Critical: 0. Findings include risks and evidence gaps, not ten reproduced runtime defects.

## 20. Corrective action plan
1. Approve audit; correct F-03 first, then F-04 and F-07. Review F-05 contract and F-08 formatting.
2. Obtain explicit approval for inherited navigation correction F-01; reproduce F-02 and F-06 before changing layout or timetable.
3. Re-run syntax, source comparison and affected controlled fault checks; document dispositions.
4. Complete walkthrough, formal 158-case execution, W3C validation and testing report.
5. Update README at finalization; verify public transcript, historical docs/tags, ZIP extraction and exact final Git revision.

## 21. Outstanding manual and external verification
All approved cases remain Not Tested. Execute browser cases on current stable Chrome, Edge and Firefox, record versions, touch environment and candidate revision; verify actual assets, permissions, accessibility tree/live announcements, contrast, responsive states, random and date fixtures, activity validation/rollback, CDN outage and regressions. Run W3C HTML for all three pages and CSS; record actual errors/warnings and dispositions. Verify package privacy and final revision after any documentation change.

## 22. Final audit conclusion

The core Assignment 3 implementation is substantially present, with static source checks and 15 isolated faculty calculation assertions supporting implementation consistency.

The audit covers all 125 approved SRS requirements and acceptance criteria and all 158 approved test cases. The initial conformance assessment records 30 Compliant, 75 Partially Compliant, 7 Non-Compliant and 13 Not Verifiable items.

Ten findings have been documented, including implementation recovery risks, inherited accessibility concerns, preventive improvements and outstanding evidence requirements.

The initial conformance audit is approved as the baseline for corrective implementation. Confirmed in-scope defects shall be corrected, inherited changes shall receive explicit approval where necessary, and remaining findings shall receive documented dispositions.

All 158 formal test cases remain Not Tested. Browser verification, external validation, final documentation and submission checks remain outstanding.

This approval authorizes corrective implementation and does not establish final submission readiness. Subsequent corrections and verification results shall be documented separately in a post-audit verification section while preserving the original findings and conformance classifications.
