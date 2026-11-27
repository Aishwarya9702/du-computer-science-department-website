# Software Requirements Specification (SRS)

## Assignment 3: Enhancing and Validating a Department Homepage Using JavaScript and AI-Assisted Development

**Project:** Department of Computer Science Website, University of Delhi  
**Version:** 1.0 — Approved requirements baseline  
**Date:** 27 November 2026  
**Status:** Approved; implementation and testing not started  
**Intended repository path:** `assignment-3/SRS.md`

## 1. Introduction

### 1.1 Purpose

This SRS defines the incremental enhancement of the existing departmental website for Assignment 3. It establishes the functional, interface, quality, validation, development-process and submission requirements against which the subsequent implementation and test plan shall be assessed. It does not authorize source changes or certify implementation or testing.

### 1.2 Scope

The project shall extend the existing random event display to five images, retain and refine the faculty experience calculator, and migrate the existing Student Activity Planner to native JavaScript. Existing Assignment 1 and Assignment 2 functionality, academic disclaimers, privacy safeguards and historical documentation shall be preserved. The website remains an independent academic demonstration, not an official University of Delhi service.

### 1.3 Intended audience

Student developer, course instructor, academic evaluator, AI-assisted development reviewer and manual tester.

### 1.4 Definitions and abbreviations

| Term | Meaning |
|---|---|
| SRS | Software Requirements Specification |
| DOM | Document Object Model |
| HTML / CSS / JS | HyperText Markup Language / Cascading Style Sheets / JavaScript |
| LLM | Large Language Model |
| CDN | Content Delivery Network |
| CSP | Content Security Policy |
| ARIA | Accessible Rich Internet Applications |
| W3C | World Wide Web Consortium |
| Baseline | Existing Assignment 1/2 source and historical records before Assignment 3 changes |
| Completed year | A full calendar year elapsed since the joining date, using the anniversary convention in section 6 |
| Device-local date | Calendar date in the browser's local time zone |
| Candidate | Exact source and documentation revision proposed for submission |

### 1.5 References

| Ref | Document or evidence | Role |
|---|---|---|
| R1 | Official Assignment 3 specification supplied in the development conversation | Authoritative instructor requirements and nine-step workflow |
| R2 | Uploaded `index.html`, `style.css`, `script.js`, `jquery-script.js`, `alumni.html`, `timetable.html`, `README.md` | Existing implementation baseline |
| R3 | Supplied `images/events/` directory screenshot | Filename evidence, not image-content or loading evidence |
| R4 | Completed baseline implementation review and requirement gap analysis | Preliminary findings F-01–F-15 and GAP identifiers |
| R5 | Google HTML/CSS Style Guide: https://google.github.io/styleguide/htmlcssguide.html | Applicable instructor-selected coding conventions |
| R6 | W3C HTML checker: https://validator.w3.org/nu/ and CSS validator: https://jigsaw.w3.org/css-validator/ | Future validation services |
| R7 | Existing Assignment 1/2 SRS, test plans, audits, walkthroughs and testing records | Inherited requirements; preserve original records; full documents not independently inspected in this stage |

R1 takes precedence over inferred baseline recommendations. The current user-approved scope will take precedence over optional recommendations once this SRS is approved. No external validator or browser has been run for this SRS.

### 1.6 Conventions

Each normative requirement has a unique identifier. FR = functional; IR = interface; NFR = non-functional; VR = validation/error handling; SC = coding standard; AI = development workflow; DR = deliverable; AC = acceptance criterion. `Shall` denotes a binding requirement upon approval. Origin I = instructor requirement (including its direct operationalization); R = inherited regression requirement; D = selected implementation decision/additional project constraint, not an instructor quotation. Priority P1 = essential acceptance or preservation; P2 = required quality refinement. Both priorities are binding; P2 is not optional. Optional excluded enhancements are not acceptance gates. Tables state planned requirements, not test results.

## 2. Overall description

### 2.1 Product perspective and architecture

The website is a static multi-page frontend. All three pages load `style.css`; `index.html` and `alumni.html` load `script.js`; only the homepage loads jQuery 3.7.1 and `jquery-script.js`. The timetable is static HTML. No backend or database is required. The existing repository shall remain the development repository.

### 2.2 Product functions and baseline

| Component | Existing baseline | Planned treatment |
|---|---|---|
| Event highlights | Three array entries; native random selection on load; inconsistent initial event1 caption/alt | Extend to five; synchronize metadata; handle failures |
| Faculty directory | Five profiles; ISO-style data attributes; completed-year logic and invalid-date handling; one-time calculation | Preserve data and logic; add periodic date-change checks |
| Activity planner | Existing form, 100-character input, live feedback and jQuery list insertion | Replace only list handler with native JavaScript |
| Gallery | jQuery opacity animations | Preserve |
| Navigation and clock | Existing CSS/JS menus and one-second clock | Preserve |
| Alumni | Assignment 2 local validation, live feedback counter, CSP and disabled-until-initialized submit | Preserve |
| Timetable | Illustrative weekly table and scroll wrapper | Preserve |

Existing image filenames: `event1.jpg`, `event2.jpeg`, `event3.jpeg` under `images/events/`. Two new assets are required; their names, extensions and descriptions are not yet established. Actual image contents and browser loading remain unverified.

### 2.3 Users and operating environment

Visitors include students, faculty, alumni and academic reviewers with ordinary browser skills. The website shall operate through a static HTTP(S) server (including local development server), with JavaScript enabled for interactive features. Keyboard and touch users are supported. The local device date is the time authority; internet access is needed for the existing jQuery CDN. No account or installation is required for visitors.

### 2.4 Constraints, assumptions and dependencies

- Existing IDs and shared-file architecture shall be retained unless a justified, reviewed correction requires change.
- Two additional distinct, appropriately licensed or permitted event images must be supplied before final implementation acceptance.
- Faculty dates are illustrative, not verified employment records; device clock accuracy is assumed.
- Preserve historical assignment documentation and tags `assignment-1-final` and `assignment-2-final`; their repository state is not independently verified here.
- Root README update is deferred until finalization; Assignment 3 documentation and evidence belong under `assignment-3/` and `assignment-3/screenshots/`.
- The official minimum is 4–5 images; exactly five is the selected project target. Independent random repetition is permitted.

### 2.5 Exclusions

No activity deletion, editing, sorting, duplicate rejection, authentication, backend, database, persistent storage, guaranteed non-repetition, new unrelated character counter, or wholesale redesign. No new personal-data collection. Unrelated baseline issues may be recorded and investigated but shall not trigger unapproved scope expansion.

## 3. Functional requirements

### 3.1 Random event image display

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| FR-IMG-01 | The system shall maintain exactly five distinct departmental event image assets under `images/events/`, including the three existing assets. | I/D | P1 |
| FR-IMG-02 | The system shall store five corresponding objects in the JavaScript `eventImages` array, each with a valid relative `src`, nonempty meaningful `alt` and accurate nonempty `caption`. | I/D | P1 |
| FR-IMG-03 | The system shall select an index using `Math.floor(Math.random() * collection.length)` from a nonempty eligible collection. Every eligible entry shall be selectable. | I | P1 |
| FR-IMG-04 | The system shall perform one initial random selection on each normal homepage load or refresh, after the required DOM elements are available. | I | P1 |
| FR-IMG-05 | The system shall update image source, alternative text and caption from the same selected object; any fallback shall likewise use one consistent metadata set. | I/D | P1 |
| FR-IMG-06 | The initial HTML image, alt and caption shall match the verified metadata for its referenced asset, including when JavaScript is disabled. | D | P1 |
| FR-IMG-07 | The system shall select independently on each load; consecutive repetition shall be permitted and no previous-selection storage shall be introduced. | D | P1 |
| FR-IMG-08 | The system shall handle empty collections, unavailable assets and missing target elements according to VR-IMG-01–04 without uncaught exceptions or infinite retries. | D | P1 |

### 3.2 Faculty experience calculator

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| FR-FAC-01 | The system shall preserve existing faculty names, designations and illustrative joining dates unless a separately approved data correction is documented. | R | P1 |
| FR-FAC-02 | Each joining date shall be represented in `YYYY-MM-DD` format in its machine-readable HTML attributes; visible dates and attributes shall agree. | I/D | P1 |
| FR-FAC-03 | The system shall use the device-local current calendar date and calculate completed calendar years by subtracting one from the year difference if the anniversary has not occurred. | I | P1 |
| FR-FAC-04 | The system shall correctly handle before/on/after anniversary, same-day joining (zero years), and valid leap dates using the convention in section 6. | I/D | P1 |
| FR-FAC-05 | The system shall reject missing, malformed, impossible and future dates according to VR-FAC-01–03; no negative or NaN experience shall be displayed. | I | P1 |
| FR-FAC-06 | The system shall display the calculated experience alongside each corresponding faculty profile, using `1 year (Sample)` or `N years (Sample)` as appropriate. | I/D | P1 |
| FR-FAC-07 | The system shall calculate on homepage initialization and check the local date once per minute while the page is open; it shall recalculate when the date changes, including after a suspended tab resumes at the next available check. | I/D | P1 |
| FR-FAC-08 | The system shall not rewrite unchanged experience text during periodic checks and shall not create a faculty timer on pages without faculty targets. | D | P2 |
| FR-FAC-09 | The system shall retain the visible disclaimer that joining dates and calculated experience are illustrative and not verified employment records. | R | P1 |
| FR-FAC-10 | If JavaScript is unavailable, the faculty section shall provide a meaningful static indication that experience requires JavaScript, rather than leaving an unexplained indefinite loading state. | D | P2 |

### 3.3 Dynamic list management

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| FR-LST-01 | The system shall reuse the existing Student Activity Planner form, labelled text input, Add Item submit button, feedback region and unordered list. | I/R | P1 |
| FR-LST-02 | The system shall process button activation and Enter-key submission through one native form `submit` listener registered using `addEventListener()`. | I/D | P1 |
| FR-LST-03 | The handler shall prevent default form submission before processing input; neither valid nor invalid submission shall reload or navigate the page. | I | P1 |
| FR-LST-04 | The system shall trim leading/trailing whitespace and reject empty or whitespace-only input. | I | P1 |
| FR-LST-05 | The system shall retain `maxlength="100"` and reject programmatically supplied raw input longer than 100 UTF-16 code units before insertion. | R/D | P1 |
| FR-LST-06 | For each valid submission the system shall create exactly one `li` using `document.createElement("li")` and assign trimmed user text using `textContent`. | I | P1 |
| FR-LST-07 | The system shall append the new item using native `append()` or `appendChild()`, retaining all existing items in insertion order. | I | P1 |
| FR-LST-08 | The system shall show meaningful textual success or error feedback using the existing live region and external CSS classes. | R/D | P1 |
| FR-LST-09 | After successful insertion the system shall clear the input and restore focus to it; on invalid input it shall retain the value, focus the input and leave the list unchanged. | I/R/D | P1 |
| FR-LST-10 | The system shall register only one active activity submit handler, even if initialization is invoked again, and shall remove the obsolete jQuery activity handler. | D | P1 |
| FR-LST-11 | The system shall permit repeated activity names as separate items when separately submitted. | D | P1 |
| FR-LST-12 | The system shall maintain activity state only in the current document DOM; a fresh reload shall restore the initial HTML list; no backend, cookies, localStorage or sessionStorage shall store activity data. | R/D | P1 |
| FR-LST-13 | The system shall associate validation feedback with the input and update `aria-invalid` appropriately; successful input shall clear the invalid state. | D | P2 |
| FR-LST-14 | The system shall guard required DOM dependencies and fail safely according to VR-LST-03 and VR-INIT-01. | D | P1 |

### 3.4 Existing functionality preservation

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| FR-REG-01 | The system shall preserve homepage content, academic programmes, research, faculty, news/events/notices, contact and disclaimers. | R | P1 |
| FR-REG-02 | The system shall preserve navigation links, CSS hover/focus dropdowns, click/tap interaction and outside-click behavior. | R | P1 |
| FR-REG-03 | The system shall preserve the device-local digital clock, immediate display and one-second updates. | R | P1 |
| FR-REG-04 | The system shall preserve both gallery images, side-by-side layout, jQuery Fade In/Fade Out controls, 800 ms opacity transitions and animation queue prevention. | R | P1 |
| FR-REG-05 | The migration shall remove only the obsolete jQuery activity planner implementation; the gallery block and CDN dependency shall remain. | R/D | P1 |
| FR-REG-06 | The system shall preserve all Assignment 2 alumni fields, validation rules, field errors, focus management, reset, live 300-character feedback counter and accessible feedback. | R | P1 |
| FR-REG-07 | The system shall preserve alumni demonstration notice, CSP `form-action 'none'`, prevented submission, initially disabled Register button and absence of registration transmission or persistent storage. | R | P1 |
| FR-REG-08 | The system shall preserve timetable content, semantic headers, caption, merged cells and intentional wrapper scrolling. | R | P1 |
| FR-REG-09 | Shared scripts shall safely skip homepage-only initialization on the alumni page and shall not interfere with alumni initialization. | R/D | P1 |
| FR-REG-10 | The developer shall avoid unrelated source changes; `alumni.html` and `timetable.html` shall remain unchanged unless an approved regression correction is documented. | D | P1 |
| FR-REG-11 | The system shall preserve existing responsive behavior, including the two-column gallery at 375 px and responsive alumni layout. | R | P1 |

## 4. External interface requirements

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| IR-01 | The homepage shall retain Event Highlights, faculty cards and Student Activity Planner within existing semantic sections, with readable captions, experience and feedback. | I/R | P1 |
| IR-02 | The event display shall use `#random-event-image` (image) and `#event-caption` (caption); the faculty calculator shall use `.faculty-experience` and `data-joining-date`. | R/D | P1 |
| IR-03 | The activity planner shall use `#activity-form`, `#activity-input`, `#add-item-btn`, `#activity-message` and `#activity-list`; the label shall reference the input ID. | R | P1 |
| IR-04 | All three pages shall continue to load `style.css`; homepage and alumni shall load `script.js`; homepage shall load jQuery before `jquery-script.js`. | R | P1 |
| IR-05 | Event assets shall be browser-supported image files with exact case-sensitive relative paths and extensions, distinct visual content, accurate captions and meaningful alternative text; usage permission shall be documented where applicable. | I/D | P1 |
| IR-06 | The homepage shall retain the existing jQuery 3.7.1 CDN URL `https://code.jquery.com/jquery-3.7.1.min.js` for gallery animations; new features shall not depend on jQuery. | R/D | P1 |
| IR-07 | The system shall support current stable Chrome, Edge and Firefox; browser versions used shall be recorded during verification. Touch behavior shall be checked on a mobile browser or documented emulation. | D | P1 |
| IR-08 | No new server endpoint, API, database or storage interface shall be introduced. | D | P1 |

## 5. Non-functional requirements

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| NFR-01 | Users shall be able to add an activity using the existing labelled input and one submit action; feedback shall appear without navigation. | I/D | P1 |
| NFR-02 | Interactive controls shall be keyboard reachable with visible focus; activity submission shall work by Enter and button activation. | R/D | P1 |
| NFR-03 | All event images shall have accurate meaningful alt text; error/success states shall use text, not color alone; activity feedback shall be announced through a polite live region. | I/D | P1 |
| NFR-04 | At 320, 375, 768, 1024 and 1440 CSS px viewport widths, all three pages shall remain usable without unintended page-level horizontal scrolling, overlapping controls or clipped essential text; timetable wrapper scrolling is permitted. | I/R/D | P1 |
| NFR-05 | The department gallery shall retain two side-by-side images at 375 px; the activity planner shall fit its container at 320 and 375 px, including a 100-character unbroken entry. | R/D | P1 |
| NFR-06 | New features shall initialize without uncaught exceptions in normal operation and specified missing-element/error scenarios; a failure in one feature shall not disable unrelated features. | D | P1 |
| NFR-07 | Event selection shall require no polling or repeated random selection during normal display; fallback attempts shall be bounded by the number of eligible assets. | D | P2 |
| NFR-08 | Faculty date checking shall use at most one dedicated 60-second timer, no per-second faculty polling, and no DOM writes when output is unchanged. | D | P2 |
| NFR-09 | Activity insertion shall complete synchronously within the submit handler without network requests or artificial delays; one valid submission shall add one item. | D | P1 |
| NFR-10 | New code shall use named, feature-specific initialization functions and scoped selectors; unrelated existing blocks shall remain intact. | D | P2 |
| NFR-11 | User-provided activity text and dynamic captions shall be inserted as text, never interpreted as HTML; no `eval`, dynamic script injection or user-derived HTML insertion shall be used. | I/D | P1 |
| NFR-12 | New feedback presentation shall use external CSS classes, with behavior in external JavaScript and structure in HTML. | I/D | P2 |
| NFR-13 | Normal and specified error scenarios shall be verified in the supported browsers; no unexplained console errors attributable to the application shall remain. | I/D | P1 |
| NFR-14 | The final candidate shall pass the approved Assignment 3 tests and regression checks for all inherited features; failures shall be corrected and retested before acceptance. | R/D | P1 |
| NFR-15 | Text and controls introduced or changed by Assignment 3 shall meet contrast ratios of 4.5:1 for normal text and 3:1 for large text and essential control boundaries/focus indicators. | D | P2 |

## 6. Input validation and error handling

### 6.1 Validation requirements

| ID | Condition | Required behavior and feedback | Origin | Priority |
|---|---|---|---|---|
| VR-IMG-01 | Empty collection or no valid metadata entries | The system shall skip random indexing, retain a verified usable initial image if available, and display `Event images are currently unavailable.` in the event section; otherwise hide the broken image. | D | P1 |
| VR-IMG-02 | Missing, corrupt or unloadable selected image | The system shall attempt another eligible asset, excluding failed entries for that load, with no more than five distinct asset attempts; synchronize metadata for each replacement. If all fail, hide the broken image and show `Event images are currently unavailable.` | D | P1 |
| VR-IMG-03 | Missing image or caption target | The system shall skip the feature without throwing; if on the homepage, log a concise diagnostic and show unavailable feedback in an existing suitable container if present. On other pages, absence is normal and shall be silent. | D | P1 |
| VR-IMG-04 | Missing/invalid metadata | The system shall exclude entries without a usable relative path, alt or caption from selection; never assign undefined metadata. | D | P1 |
| VR-FAC-01 | Missing or malformed date | The system shall reject absent, blank or non-`YYYY-MM-DD` values and display `Invalid joining date`. | I/D | P1 |
| VR-FAC-02 | Impossible Gregorian date | The system shall validate year 0001–9999, month, day and leap-year rules; reject normalized impossible dates (e.g. 2025-02-29) and display `Invalid joining date`. | I/D | P1 |
| VR-FAC-03 | Future date | The system shall compare calendar dates in local time and display `Joining date is in the future.` without calculating experience. | I/D | P1 |
| VR-FAC-04 | One invalid faculty entry | The system shall continue processing other valid profiles independently. | D | P1 |
| VR-LST-01 | Empty or whitespace-only activity | The system shall display `Please enter an activity.`; add no item; retain input and focus it. | I/R | P1 |
| VR-LST-02 | Raw input exceeds 100 UTF-16 code units | The system shall display `Activity must not exceed 100 characters.`; add no item; retain input and focus it. | D | P1 |
| VR-LST-03 | Missing or wrong-type form, input, button, list or feedback element | The system shall not register a partial handler; disable submission where possible, prevent default navigation if a form exists, and display `Activity planner is unavailable.` if a feedback target exists. On non-homepage pages, absence shall be a silent no-op. | D | P1 |
| VR-LST-04 | Valid input | The system shall append exactly one trimmed text item, clear input, restore focus and display `Activity added successfully!`. | R | P1 |
| VR-INIT-01 | Unexpected feature initialization failure | The system shall isolate the failure, log a feature-specific diagnostic without personal data, provide a concise unavailable message where a suitable target exists, and preserve other feature initialization. No fabricated success shall be displayed. | D | P1 |
| VR-INIT-02 | jQuery CDN unavailable | The system shall skip gallery animation initialization safely, retain visible static gallery images and preserve native features; the unavailable animation controls shall not cause uncaught errors. | D | P1 |

Validation precedence for activities: reject raw overlength first, then trim and reject blank input. HTML maxlength limits ordinary typing; JavaScript independently validates bypassed constraints. The length unit matches HTML/JavaScript string length, not grapheme count. HTML-like input is valid literal text, not executable markup.

### 6.2 Selected leap-day convention (DEC-FAC-01)

A joining date of 29 February shall reach its anniversary on 1 March in a non-leap year, and on 29 February in a leap year. This preserves the baseline month/day comparison convention. It is a project decision, not an instructor-prescribed rule. Use Gregorian leap rules (divisible by four, except centuries not divisible by 400). Construct or compare local calendar components without UTC date shifts; account for JavaScript's special handling of years 0–99 if constructing Date objects.

| Joining date | Local current date | Expected result |
|---|---|---|
| 2005-07-15 | 2026-07-14 | 20 years (Sample) |
| 2005-07-15 | 2026-07-15 | 21 years (Sample) |
| 2005-07-15 | 2026-07-16 | 21 years (Sample) |
| 2026-11-27 | 2026-11-27 | 0 years (Sample) |
| 2024-02-29 | 2025-02-28 | 0 years (Sample) |
| 2024-02-29 | 2025-03-01 | 1 year (Sample) |
| 2024-02-29 | 2028-02-29 | 4 years (Sample) |
| 2025-02-29 | 2026-11-27 | Invalid joining date |
| 2026-11-28 | 2026-11-27 | Joining date is in the future. |

These are specification examples, not executed test cases.

## 7. Coding standards

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| SC-01 | HTML shall use HTML5 doctype, semantic elements, language, UTF-8 and viewport metadata; existing semantic lists and table structures shall be retained. | I/R | P1 |
| SC-02 | HTML element and attribute names and CSS selectors/properties shall use lowercase conventions; case-sensitive identifiers and asset paths shall remain consistent. | I | P1 |
| SC-03 | Modified code shall use two-space indentation, double quotation marks for HTML attributes and no trailing whitespace. | I | P1 |
| SC-04 | CSS and JavaScript shall remain external; no unnecessary inline styles, inline JavaScript event attributes or `!important` declarations shall be introduced. | I | P1 |
| SC-05 | New identifiers shall be meaningful and comments shall explain non-obvious logic and feature responsibilities without stale descriptions. | I | P2 |
| SC-06 | New controls shall use accessible labels and images shall use meaningful alternative text. | I | P1 |
| SC-07 | New native event handling shall use `addEventListener()` and safe DOM methods; the inherited jQuery gallery is an explicit exception. | I/R | P1 |
| SC-08 | Responsive layouts shall use Flexbox or Grid as appropriate and retain existing media queries; avoid broad unrelated CSS refactoring. | I/R | P1 |
| SC-09 | The existing alumni feedback character counter shall be preserved; no unrelated new character counter shall be introduced. | R/D | P1 |
| SC-10 | The developer shall inspect modified HTML/CSS against applicable Google HTML/CSS Style Guide conventions and record any justified legacy exceptions rather than silently rewriting unrelated code. | I/D | P1 |

## 8. AI-assisted development workflow requirements

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| AI-01 | The developer shall retain the completed baseline review and gap analysis as the input to requirements engineering, including evidence limitations. | I | P1 |
| AI-02 | The developer shall review and approve this SRS before modifying source code; subsequent requirement changes shall be documented and traced. | I/D | P1 |
| AI-03 | The developer shall derive a separate test and validation plan from approved requirements, with unique test IDs, expected outcomes and traceability; initial execution status shall be Not Tested. | I | P1 |
| AI-04 | The developer shall follow the instructor's nine implementation steps below, reusing compliant baseline components rather than duplicating them. | I | P1 |
| AI-05 | The developer shall use AI-assisted iterative debugging and refinement, recording actual findings, decisions, corrections and subsequent verification. | I | P1 |
| AI-06 | The developer shall perform an AI-assisted conformance review of the implemented candidate against the SRS and test plan, identifying unmet requirements and evidence limitations. | I | P1 |
| AI-07 | The developer shall correct confirmed defects, document dispositions of other findings and re-review affected requirements. | I | P1 |
| AI-08 | The developer shall produce a code comprehension walkthrough explaining final HTML, CSS and JavaScript, including native list handling, faculty dates, image selection and inherited jQuery dependencies. | I | P1 |
| AI-09 | The developer shall manually execute functional, accessibility, responsive, compatibility and regression tests using the approved plan and record actual results. | I | P1 |
| AI-10 | The developer shall validate all final HTML pages and the shared CSS using W3C services, retain actual evidence, correct errors and document any warnings and their dispositions. | I | P1 |
| AI-11 | The developer shall perform JavaScript syntax checks on both scripts and inspect browser console output on all pages and relevant interactions; expected fault-injection diagnostics shall be distinguished from unexpected errors. | I/D | P1 |
| AI-12 | The developer shall prepare a final testing report with executed results, defects, retests, evidence and requirement coverage. | I | P1 |
| AI-13 | The developer shall retain a complete public AI conversation transcript covering requirements, test planning, implementation, debugging, conformance and walkthrough; verify the public link without exposing credentials or real personal information. | I | P1 |
| AI-14 | The developer shall make incremental Git commits with meaningful messages, preserve prior assignment tags and documentation, and verify the final candidate before creating `assignment-3-final`. | D/R | P1 |

### 8.1 Instructor's nine implementation steps

| Step | Required activity | Application to existing project |
|---|---|---|
| 1 | Review existing homepage | Use completed baseline review; verify source and asset evidence. |
| 2 | Create event image array | Extend existing array to five verified assets. |
| 3 | Implement random image display using Math.random() | Retain formula; synchronize metadata and handle failure paths. |
| 4 | Add faculty joining dates | Verify and preserve existing illustrative ISO-format dates. |
| 5 | Calculate and display experience | Retain completed-year logic; refine date validation and periodic recalculation. |
| 6 | Add text input and Add Item button | Reuse existing labelled form and submit button. |
| 7 | Dynamically create list items | Migrate to native DOM creation and insertion; remove obsolete jQuery handler in the same change. |
| 8 | Validate empty/invalid entries | Preserve trimming and feedback; enforce raw length and safe failure behavior. |
| 9 | Refine layout and functionality | Apply scoped styling, accessibility and responsive refinements; preserve prior features. |

Formal requirements and test planning precede source changes. Steps 1–9 shall be documented even when a step is satisfied by reuse. Conformance, corrective development, walkthrough, manual testing and submission follow implementation; no step is marked passed by this SRS.

## 9. Submission deliverable requirements

| ID | Normative requirement | Origin | Priority |
|---|---|---|---|
| DR-01 | The developer shall provide one ZIP containing complete runnable HTML, CSS, JavaScript and all required local assets, with relative directory structure preserved. | I | P1 |
| DR-02 | The developer shall submit a verified public share link to the complete AI-assisted development conversation. | I | P1 |
| DR-03 | The developer shall provide a testing report containing test IDs, requirement references, expected and actual results, pass/fail status, defects, retests and evidence limitations; unexecuted tests shall not be marked passed. | I | P1 |
| DR-04 | The developer shall retain `assignment-3/SRS.md`, `ASSIGNMENT_TEST_PLAN.md`, `CONFORMANCE_AUDIT.md`, `CODE_WALKTHROUGH.md` and `TESTING_REPORT.md` under the Assignment 3 directory (the latter four filenames are relative to that directory). | D | P1 |
| DR-05 | The developer shall retain actual validation and manual testing evidence under `assignment-3/screenshots/`, with report references to real evidence filenames and the verified candidate. | I/D | P1 |
| DR-06 | The developer shall preserve all Assignment 1 and Assignment 2 documentation and tags; historical results shall not be presented as new Assignment 3 results. | R/D | P1 |
| DR-07 | The developer shall update the root README at finalization to describe actual Assignment 3 behavior, the native migration, historical jQuery implementation and verified results without erasing prior records. | D | P1 |
| DR-08 | The developer shall verify the final ZIP by extraction and execution, checking all pages, five event assets, relative links and required documentation; the public transcript and repository candidate shall also be verified. | D | P1 |
| DR-09 | The developer shall record the actual final Git revision and verify the final tag points to the accepted candidate; after any subsequent change, affected verification and ZIP generation shall be repeated before submission. No fabricated revision or timestamp shall be recorded. | D | P1 |
| DR-10 | The final package shall exclude credentials, real alumni personal information, unnecessary development caches and repository internals; required academic documentation and evidence shall remain included. | D | P1 |

## 10. Acceptance criteria and requirements traceability

### 10.1 Acceptance criteria

All criteria below are pending verification. Acceptance requires the approved requirements to be met and evidence recorded against the final candidate; a historical pass rate is not sufficient.

| ID | Measurable acceptance criterion | Requirement references | Origin | Priority |
|---|---|---|---|---|
| AC-01 | Exactly five distinct event assets and five matching array entries exist and load; every entry can be selected through controlled index checks; HTML fallback metadata agrees with its asset. | FR-IMG-01–06, IR-02, IR-05 | I/D | P1 |
| AC-02 | Normal loads select an eligible image; consecutive repeats are accepted; empty array, malformed metadata, missing target and all-image-failure scenarios produce specified behavior without uncaught exceptions or unbounded retries. | FR-IMG-07–08, VR-IMG-01–04, NFR-07 | D | P1 |
| AC-03 | Existing five faculty profiles and disclaimers remain; expected values match before/on/after anniversary, same-day, leap-day and invalid/future examples; invalid entries do not affect valid ones. | FR-FAC-01–06, FR-FAC-09–10, VR-FAC-01–04 | I/R/D | P1 |
| AC-04 | With a controlled local date change, experience updates by the next available 60-second check; unchanged text is not rewritten and no faculty timer runs on the alumni page. | FR-FAC-07–08, NFR-08 | D | P1 |
| AC-05 | Button and Enter each add exactly one trimmed literal-text item in order; repeated names are accepted; prior items remain; valid input clears and focus returns; no reload or persistence occurs. Source inspection confirms native event and DOM methods. | FR-LST-01–04, FR-LST-06–12, VR-LST-04, NFR-01, NFR-09, NFR-11 | I/R/D | P1 |
| AC-06 | Empty, whitespace-only and raw overlength input add no item and show specified feedback; 100-unit input is accepted if nonblank; missing dependencies fail safely; repeated initialization does not duplicate processing. | FR-LST-05, FR-LST-10, FR-LST-13–14, VR-LST-01–03, VR-INIT-01 | I/D | P1 |
| AC-07 | Navigation, content, clock, jQuery gallery, alumni validation/counter/privacy and timetable pass regression checks; gallery CDN failure does not interrupt native features. | FR-REG-01–11, IR-04, IR-06, IR-08, VR-INIT-02 | R/D | P1 |
| AC-08 | At 320, 375, 768, 1024 and 1440 px, all pages meet layout requirements; keyboard, labels, focus, live feedback, contrast and text wrapping meet specified checks. | IR-01–03, NFR-02–05, NFR-15 | I/R/D | P1 |
| AC-09 | Supported browser checks and source inspection confirm guarded initialization, maintainable code, separation of concerns and coding conventions; no unexplained application console errors remain. | IR-07, NFR-06, NFR-10, NFR-12–14, SC-01–10 | I/D | P1 |
| AC-10 | All required workflow stages are documented; final HTML/CSS validation has zero errors with warnings documented; JavaScript syntax checks succeed; executed tests and retests are recorded. | AI-01–14, DR-03–05 | I/D | P1 |
| AC-11 | Final ZIP extracts and runs; public transcript is accessible; previous documentation and tags are preserved; README and final Git revision/tag match the accepted candidate. | DR-01–02, DR-06–10 | I/R/D | P1 |

### 10.2 Official assignment to SRS traceability

The following rows paraphrase the instructor specification, not verbatim quotations. Selected extensions and inherited requirements are identified separately in the origin columns above.

| Official requirement area | SRS requirements | Acceptance |
|---|---|---|
| Event collection of 4–5 images, array, random selection and refresh display | FR-IMG-01–05, IR-05 | AC-01–02 |
| Faculty names/designations/joining dates, current date and experience display | FR-FAC-01–06, FR-FAC-09 | AC-03–04 |
| Text input, Add Item, native event listener, DOM creation and insertion | FR-LST-01–03, FR-LST-06–07 | AC-05 |
| Empty/invalid input validation and input clearing | FR-LST-04–05, FR-LST-08–09, VR-LST-01–04 | AC-05–06 |
| Responsive design, coding guidelines and accessibility | NFR-01–05, NFR-11–12, SC-01–10 | AC-08–09 |
| Requirements engineering, test planning and nine-step implementation | AI-01–04 | AC-10 |
| Iterative debugging, conformance, corrective development and code comprehension | AI-05–08 | AC-10 |
| Manual testing, W3C validation, browser and JS checks | AI-09–12, NFR-13–14 | AC-09–10 |
| Complete source ZIP, public AI transcript and testing report | AI-13, DR-01–03 | AC-10–11 |
| Inherited website and previous assignment preservation (project constraint) | FR-REG-01–11, IR-04, IR-06, SC-09, DR-06 | AC-07–11 |
| Selected robustness and repository decisions (project constraint) | FR-IMG-06–08, FR-FAC-07–08, FR-FAC-10, FR-LST-10–14, VR-INIT-01–02, AI-14, DR-07–10 | AC-02–11 |

### 10.3 Baseline finding traceability

| Finding | Baseline observation | SRS response | Treatment |
|---|---|---|---|
| F-01 | Three images rather than five | FR-IMG-01–02, IR-05 | Correct |
| F-02 | Initial event metadata inconsistent | FR-IMG-05–06 | Correct after asset inspection |
| F-03 | Native list implementation absent | FR-LST-02, FR-LST-06–07, FR-REG-05 | Migrate |
| F-04 | Completed-year logic already present | FR-FAC-03–06, VR-FAC-01–04 | Preserve and verify |
| F-05 | Recalculation only at initialization | FR-FAC-07–08, NFR-08 | Extend |
| F-06 | Shared JS needs guarded initialization | FR-REG-09, NFR-06, VR-INIT-01 | Protect |
| F-07 | Duplicate handler risk | FR-LST-10, FR-REG-05 | Prevent |
| F-08 | Potential long-text overflow | NFR-04–05 | Verify and refine |
| F-09 | Potential dropdown ARIA/visibility inconsistency | FR-REG-02, NFR-02, AI-06–07 | Investigate; document and obtain approval for unrelated correction if necessary |
| F-10 | Possible event image cropping | IR-01, NFR-04, AI-09 | Visually verify; refine if essential content is clipped |
| F-11 | Unverified image files/descriptions | IR-05, VR-IMG-01–04, AC-01 | Inspect and verify |
| F-12 | jQuery CDN dependency risk | IR-06, VR-INIT-02 | Guard failure while retaining dependency |
| F-13 | Indefinite Calculating... without JS | FR-FAC-10 | Provide static indication |
| F-14 | Clock time semantics limitation | FR-REG-03, FR-REG-10 | Preserve; optional unrelated correction only with approval |
| F-15 | Runtime and validation evidence unavailable | AI-09–12, DR-03–05 | Execute and record later |

### 10.4 Preliminary gap group traceability

| Baseline gap identifiers | Relevant SRS requirements |
|---|---|
| GAP-IMG-01–05 | FR-IMG-01–05, IR-01–02 |
| GAP-IMG-06–10 | FR-IMG-05–08, IR-05, VR-IMG-01–04 |
| GAP-FAC-01–05 | FR-FAC-01–06, FR-FAC-10 |
| GAP-FAC-06–10 | VR-FAC-01–04, FR-FAC-07–09, FR-FAC-06 |
| GAP-LST-01–06 | FR-LST-01–03, FR-LST-06–07, IR-03 |
| GAP-LST-07–11 | FR-LST-04, FR-LST-06, FR-LST-08–09, NFR-11 |
| GAP-LST-12–15 | FR-LST-05, FR-LST-10, FR-LST-13–14, VR-LST-03 |
| GAP-REG-01–06 | FR-REG-02–08 |
| GAP-REG-07–10 | DR-06, AI-14, FR-REG-05, FR-REG-09, NFR-06 |
| GAP-QLT-01–06 | SC-01–08, NFR-04–05, NFR-12 |
| GAP-QLT-07–09 | FR-REG-02, FR-REG-04, NFR-02–03; reduced-motion handling remains optional |
| GAP-QLT-10–14 | AI-09–11, IR-07, NFR-13, DR-05 |
| GAP-DOC-01–10 | AI-01–14, DR-01–10 |

### 10.5 Approval decisions and open evidence

The approved implementation decisions are: exactly five images; independent random repetition; bounded asset fallback; 1 March non-leap anniversary; 60-second local date checks; native form submit handling; raw 100 UTF-16-unit limit; duplicate names permitted; temporary list state; specified browser/viewport matrix; and guarded failure isolation. These decisions implement the requested scope and are not represented as verbatim instructor mandates.

Outstanding evidence: two additional image assets, actual content and load verification of all five images, final browser versions, actual validation outputs, full historical documentation comparison, and final Git/ZIP verification. These are future verification dependencies, not claims of defects or successful tests.

**Approval status:** Approved for Assignment 3 development.
The SRS establishes the requirements baseline for subsequent
test planning and incremental implementation. No Assignment 3
source code or assets have been modified, and no implementation
tests or external validators have been executed at this stage.
