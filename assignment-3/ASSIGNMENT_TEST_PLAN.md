# Assignment 3 — Software Test and Validation Plan

**Project:** Department of Computer Science Website, University of Delhi  
**Version:** 1.0 — Approved test plan  
**Requirements baseline:** Approved SRS v1.0, 27 November 2026  
**Repository path:** `assignment-3/ASSIGNMENT_TEST_PLAN.md`  
**Execution state:** Not started

## 1. Introduction

### Purpose and scope
Verify the three Assignment 3 features, their error paths, inherited website behavior, accessibility, responsive layouts, coding standards, AI workflow and submission candidate. The plan is prospective: no browser, validator or Git verification is claimed. Excluded: activity deletion/editing/sorting, duplicate rejection, authentication, backend, persistence, guaranteed non-repetition and unrelated redesign. Historical results are reference evidence only.

### References
- Approved uploaded SRS, including sections 6.2, 8.1 and 10; normative IDs and priorities are retained.
- Official instructor Assignment 3 specification supplied in conversation.
- Baseline review and gap analysis (SRS findings F-01–F-15 and GAP groups).
- Supplied baseline index.html, alumni.html, timetable.html, style.css, script.js, jquery-script.js, README.md and event-directory screenshot.
- Google HTML/CSS Style Guide: https://google.github.io/styleguide/htmlcssguide.html
- W3C HTML checker: https://validator.w3.org/nu/ ; CSS validator: https://jigsaw.w3.org/css-validator/

The baseline contains three named event files, five illustrative faculty profiles and a jQuery planner. Actual image contents, final source and runtime behavior require future verification. Alumni regression data below follows the supplied baseline script; use actual baseline approved course options and minimum year, not guessed values.

### Environment, assumptions and tools
Use a clean static HTTP server (e.g. `python -m http.server 8000` from candidate root), current stable Chrome, Edge and Firefox, DevTools (Network, Console, Elements, Accessibility, responsive mode, breakpoints/local overrides), optional screen reader, contrast calculator, Node.js for syntax checks, Git and ZIP utility. Record actual OS, browser versions, viewport, timezone, Node version, candidate revision and execution date at execution. Internet is required for CDN and W3C services except intentional outage tests. Five permitted image assets and prior Git tags/documentation must be available. Use synthetic data only.

### Methodology and entry/exit criteria
Entry: approved SRS and reviewed plan, candidate available, dependencies and baseline accessible, test environment recorded; documentation checks may be performed earlier when their artifacts exist. Exit: all applicable binding requirements (P1 and P2) verified, all required tests passed, confirmed defects corrected/retested, zero HTML/CSS validation errors, warnings dispositioned, JS syntax successful, no unexplained application console errors, evidence and final candidate verified. Blocked or unexecuted required checks prevent final acceptance. Do not treat coverage as execution.

| Status | Definition |
|---|---|
| Pass | All actions and expected outcomes verified with actual evidence. |
| Fail | At least one expected outcome not met. |
| Not Tested | No execution recorded. |
| Blocked | Execution cannot complete due to a documented dependency or environment issue. |

## 2. Test case structure and execution rules

Each case below has a unique ID, SRS references, objective, method, preconditions, data, actions, expected result, actual result, status and evidence. For multi-part cases record each subcase; mark Pass only when all pass. Requirement priorities and origins remain those in the SRS; test methods and synthetic inputs are planning decisions, not new product requirements.

### Controlled fixtures and restoration
Use a disposable copy or DevTools local overrides of the candidate, never commit fault changes. For random tests stub Math.random before the actual initializer runs (breakpoint or temporary fixture injection); restore original function after selection. For dates use an isolated fixture invoking actual calculation logic with a supplied local date, or temporarily intercept Date in the fixture before initialization; preserve constructor arguments and local calendar semantics, including years 0001–0099. Do not change device clock or production joining dates. For timer tests capture the actual registered callback and advance the fixture clock, then invoke it at simulated 60-second intervals; separately observe real timer registration and at least one real interval. For suspension use actual tab background/resume where possible and document simulation limitations. Use MutationObserver on experience nodes for unchanged text. For missing elements remove or replace before initialization; for image/CDN failures use request blocking or temporary corrupt files. Inject errors inside actual feature initialization, not an unrelated console throw. Record setup and restore all overrides, stubs, listeners, timers, network blocks, JS settings and fixture files; reload clean candidate and verify Git diff/status. Never count fixture modifications as production fixes. If a fixture cannot exercise the actual candidate logic, mark Blocked rather than pass.

## 3. Execution batches and detailed test cases

Run baseline/static checks first, then normal functional checks, controlled boundaries, fault injection, UI/browser/regression, external validation and documentation/submission. Repeat relevant cases in each supported browser, including specified fault scenarios; browser matrix cases aggregate existing checks rather than inventing independent pass counts. Use a fresh page per independent input case unless sequence is specified. Preserve evidence under assignment-3/screenshots/ and record actual filenames only.

### Random event images (21 cases)

#### TC-IMG-001 — Five distinct assets

- **SRS:** FR-IMG-01, IR-05, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect images/events and open each of the five files; compare visual content and permission records where applicable.
- **Expected result:** Exactly five distinct supported images including event1.jpg, event2.jpeg, event3.jpeg; all decode; permissions documented where applicable.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-002 — Paths and metadata

- **SRS:** FR-IMG-02, IR-05, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare every eventImages object with directory case, extension and actual image content; request each relative URL over HTTP.
- **Expected result:** Five objects; each path resolves and alt and caption accurately describe its image.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-003 — Initial fallback

- **SRS:** FR-IMG-06, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Disable JS and reload homepage; inspect initial src, alt and caption against actual asset.
- **Expected result:** Usable initial image with matching metadata; no misleading caption.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-004 — Observational refresh

- **SRS:** FR-IMG-04, FR-IMG-05, FR-IMG-07, NFR-07, AC-02
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load homepage and refresh ten times; record selected metadata each time; leave page idle and observe.
- **Expected result:** One eligible selection per normal load; metadata synchronized; no polling; repeats allowed, no minimum number of distinct observations.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-005 — Random formula

- **SRS:** FR-IMG-03, FR-IMG-07, AC-01
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect selection source and check no previous-selection storage or forced exclusion on normal loads.
- **Expected result:** Math.floor(Math.random() * collection.length) used for nonempty eligible collection; independent selection.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-006 — Caption safety

- **SRS:** FR-IMG-05, NFR-11, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect caption assignment and inject literal markup-like caption in fixture.
- **Expected result:** Caption rendered as text, not markup.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-007 — Image accessibility

- **SRS:** IR-01, NFR-03, SC-06, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect image accessibility tree and visible caption for each controlled selection.
- **Expected result:** Meaningful accurate alt; readable caption.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-008 — Controlled index 0

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 0 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-009 — Controlled index 1

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.2 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 1 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-010 — Controlled index 2

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.4 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 2 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-011 — Controlled index 3

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.6 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 3 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-012 — Controlled index 4

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.8 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 4 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-013 — Upper random-index boundary

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.9999999999999999 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 4 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-014 — Permitted repeat

- **SRS:** FR-IMG-07, AC-02
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use same random stub on two fresh fixture loads.
- **Expected result:** Same image may appear twice; no stored exclusion.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-015 — Empty collection with usable fallback

- **SRS:** FR-IMG-08, VR-IMG-01, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set array empty in fixture; keep valid initial image; initialize.
- **Expected result:** No indexing; usable initial image retained; Event images are currently unavailable.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-016 — Empty collection without fallback

- **SRS:** VR-IMG-01, FR-IMG-08, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Empty array and make initial asset unavailable.
- **Expected result:** Broken image hidden; Event images are currently unavailable.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-017 — Invalid metadata

- **SRS:** VR-IMG-04, FR-IMG-08, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Individually omit src, alt, caption; use blank values and unusable path; force selection over remaining entries; repeat with all entries invalid.
- **Expected result:** Invalid entries excluded; no undefined metadata; all-invalid case follows empty collection behavior.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-018 — Missing image target

- **SRS:** VR-IMG-03, NFR-06, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Remove #random-event-image before initialization.
- **Expected result:** Feature skipped; concise diagnostic; unavailable feedback where suitable; other features work.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-019 — Missing caption target

- **SRS:** VR-IMG-03, NFR-06, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Remove #event-caption before initialization.
- **Expected result:** Same safe behavior as missing image target.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-020 — Missing or corrupt selected asset

- **SRS:** VR-IMG-02, FR-IMG-05, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Force index of missing file; repeat with corrupt file and blocked HTTP request; leave other assets valid.
- **Expected result:** Another eligible image loads with synchronized metadata; failed entry not retried for that load.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-IMG-021 — All assets fail

- **SRS:** VR-IMG-02, NFR-07, FR-IMG-08, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Block all five asset URLs in fixture; count distinct attempts and observe after final error.
- **Expected result:** At most five distinct attempts; no infinite retries; broken image hidden; Event images are currently unavailable.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

### Faculty experience (39 cases)

#### TC-FAC-001 — Preserve profiles and dates

- **SRS:** FR-FAC-01, FR-FAC-02, IR-02, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare five profiles against baseline HTML; inspect data-joining-date and visible date for each.
- **Expected result:** Names, designations and sample dates preserved unless approved correction; YYYY-MM-DD matches visible date.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-002 — Initial display

- **SRS:** FR-FAC-06, FR-FAC-07, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load homepage with actual local date; independently calculate each profile's completed years.
- **Expected result:** Correct experience alongside all five profiles immediately after initialization.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-003 — Illustrative disclaimer

- **SRS:** FR-FAC-09, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Read faculty section and compare baseline disclaimer.
- **Expected result:** Clearly states dates and experience are illustrative, not verified records.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-004 — No JavaScript

- **SRS:** FR-FAC-10, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Disable JS and reload.
- **Expected result:** Meaningful static indication that experience requires JS; no indefinite unexplained loading.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-005 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2005-07-15; local 2026-07-14
- **Actions:** Set fixture joining date to 2005-07-15 and local reference date to 2026-07-14; initialize and inspect profile.
- **Expected result:** 20 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-006 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2005-07-15; local 2026-07-15
- **Actions:** Set fixture joining date to 2005-07-15 and local reference date to 2026-07-15; initialize and inspect profile.
- **Expected result:** 21 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-007 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2005-07-15; local 2026-07-16
- **Actions:** Set fixture joining date to 2005-07-15 and local reference date to 2026-07-16; initialize and inspect profile.
- **Expected result:** 21 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-008 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-11-27; local 2026-11-27
- **Actions:** Set fixture joining date to 2026-11-27 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 0 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-009 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-01-01; local 2026-11-27
- **Actions:** Set fixture joining date to 2026-01-01 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 0 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-010 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2025-11-27; local 2026-11-27
- **Actions:** Set fixture joining date to 2025-11-27 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-011 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2025-02-28
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2025-02-28; initialize and inspect profile.
- **Expected result:** 0 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-012 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2025-03-01
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2025-03-01; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-013 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2028-02-28
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2028-02-28; initialize and inspect profile.
- **Expected result:** 3 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-014 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2028-02-29
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2028-02-29; initialize and inspect profile.
- **Expected result:** 4 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-015 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2000-02-29; local 2001-03-01
- **Actions:** Set fixture joining date to 2000-02-29 and local reference date to 2001-03-01; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-016 — Fixed-date calculation

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 1900-02-29; local 2026-11-27
- **Actions:** Set fixture joining date to 1900-02-29 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-017 — Fixed-date calculation

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2100-02-29; local 2101-03-01
- **Actions:** Set fixture joining date to 2100-02-29 and local reference date to 2101-03-01; initialize and inspect profile.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-018 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0001-01-01; local 2026-11-27
- **Actions:** Set fixture joining date to 0001-01-01 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 2025 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-019 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0099-12-31; local 2026-11-27
- **Actions:** Set fixture joining date to 0099-12-31 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 1926 years (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-020 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0004-02-29; local 0005-03-01
- **Actions:** Set fixture joining date to 0004-02-29 and local reference date to 0005-03-01; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-021 — Fixed-date calculation

- **SRS:** FR-FAC-05, VR-FAC-03, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-11-28; local 2026-11-27
- **Actions:** Set fixture joining date to 2026-11-28 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** Joining date is in the future.; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-022 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** attribute absent
- **Actions:** Use attribute absent in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-023 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** empty string
- **Actions:** Use empty string in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-024 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** spaces only
- **Actions:** Use spaces only in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-025 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026/01/01
- **Actions:** Use 2026/01/01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-026 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-1-01
- **Actions:** Use 2026-1-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-027 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** abcd-ef-gh
- **Actions:** Use abcd-ef-gh in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-028 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0000-01-01
- **Actions:** Use 0000-01-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-029 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2025-02-29
- **Actions:** Use 2025-02-29 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-030 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-04-31
- **Actions:** Use 2026-04-31 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-031 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-13-01
- **Actions:** Use 2026-13-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-032 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-01-00
- **Actions:** Use 2026-01-00 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-033 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 10000-01-01
- **Actions:** Use 10000-01-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-034 — Independent profiles

- **SRS:** VR-FAC-04, FR-FAC-05, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set one profile invalid and another future; leave remaining dates valid; initialize.
- **Expected result:** Each invalid profile shows its own message; valid profiles still correct.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-035 — Minute checks and date rollover

- **SRS:** FR-FAC-07, NFR-08, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Instrument timer registration; use local date 2026-07-14 23:59:30 and joining date 2005-07-15; advance fixture time 60 seconds.
- **Expected result:** At most one dedicated 60000 ms timer; value changes from 20 to 21 years (Sample) at next check.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-036 — Unchanged DOM

- **SRS:** FR-FAC-08, NFR-08, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Observe experience nodes with MutationObserver; advance two checks within same date.
- **Expected result:** No writes to unchanged experience text; no per-second faculty polling.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-037 — Suspended tab

- **SRS:** FR-FAC-07, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Background or suspend fixture tab across simulated local midnight; resume and allow next available timer callback.
- **Expected result:** Experience updates at next available check; no claim of exact background timing.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-038 — Local versus UTC date

- **SRS:** FR-FAC-03, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use fixture timezone with local date 2026-07-15 while UTC date is 2026-07-14; joining 2005-07-15.
- **Expected result:** 21 years (Sample), based on local date.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-FAC-039 — No unrelated timer

- **SRS:** FR-FAC-08, FR-REG-09, NFR-08, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Instrument timer registrations on alumni and inspect timetable script dependencies.
- **Expected result:** No faculty timer on either unrelated page; alumni initializes normally.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

### Dynamic list management (29 cases)

#### TC-LST-001 — Existing interface

- **SRS:** FR-LST-01, IR-03, SC-06, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect form, label, input, button, feedback and ul; compare baseline IDs.
- **Expected result:** Existing planner reused; label references input; Add Item submit button and required IDs present.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-002 — Native implementation

- **SRS:** FR-LST-02, FR-LST-06, FR-LST-07, SC-07, AC-05
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect submit listener, createElement, textContent and append calls.
- **Expected result:** One native submit listener; li created and appended by native DOM methods.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-003 — Button submission

- **SRS:** FR-LST-02, FR-LST-03, FR-LST-09, VR-LST-04, NFR-01, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Enter Coding Club; click Add Item; observe URL, list count, feedback and focus.
- **Expected result:** Exactly one new item; no navigation; input clears and receives focus; Activity added successfully!
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-004 — Enter submission

- **SRS:** FR-LST-02, FR-LST-03, NFR-02, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Type Seminar and press Enter; inspect list and URL.
- **Expected result:** Exactly one item added; no reload; same behavior as button.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-005 — Order and duplicates

- **SRS:** FR-LST-07, FR-LST-11, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Record initial items; submit A, B, A separately.
- **Expected result:** Initial items preserved; A, B, A appended in order.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-006 — Empty input

- **SRS:** FR-LST-04, FR-LST-08, FR-LST-09, VR-LST-01, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit empty input via button and Enter.
- **Expected result:** No insertion or navigation; Please enter an activity.; input focused and retained.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-007 — Spaces only

- **SRS:** FR-LST-04, VR-LST-01, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Enter three spaces and submit.
- **Expected result:** No item; Please enter an activity.; value retained and focused.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-008 — Other whitespace

- **SRS:** FR-LST-04, VR-LST-01, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set input to tab and nonbreaking space via DevTools; submit.
- **Expected result:** No item; specified blank feedback; value retained.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-009 — Trim input

- **SRS:** FR-LST-04, FR-LST-06, VR-LST-04, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit two spaces followed by Workshop and two spaces.
- **Expected result:** One item Workshop; input clears.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-010 — Native length constraint

- **SRS:** FR-LST-05, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect maxlength and attempt to type or paste 101 ASCII characters.
- **Expected result:** maxlength is 100; ordinary entry limited to 100 units.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-011 — Bypassed length

- **SRS:** FR-LST-05, VR-LST-02, FR-LST-09, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set input.value to 101 ASCII characters using DevTools; submit; repeat with 101 spaces.
- **Expected result:** No insertion; Activity must not exceed 100 characters.; raw-length precedence; value retained and focused.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-012 — Emoji length boundary

- **SRS:** FR-LST-05, VR-LST-02, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set value to 50 emoji each two UTF-16 units; submit; repeat with 51.
- **Expected result:** 100 units accepted; 102 rejected with length message.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-013 — Literal markup

- **SRS:** FR-LST-06, NFR-11, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit '<b>Workshop</b>' and '<img src=x onerror=window.__activityProbe=1>' with probe initially undefined.
- **Expected result:** Text displayed literally; no injected elements, request or probe execution.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-014 — Accessible feedback

- **SRS:** FR-LST-08, FR-LST-13, NFR-03, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit blank then valid text; inspect aria-invalid, accessible description and live region.
- **Expected result:** Invalid state and associated error exposed; valid input clears invalid state; polite textual feedback.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-015 — Repeated initialization

- **SRS:** FR-LST-10, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Invoke actual planner initializer twice in isolated fixture; submit one valid value.
- **Expected result:** Exactly one insertion and one active processing handler.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-016 — Temporary state

- **SRS:** FR-LST-12, IR-08, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Add item; inspect Network, cookies, localStorage and sessionStorage; reload.
- **Expected result:** No activity data transmitted or stored; original HTML list restored.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-017 — Synchronous insertion

- **SRS:** NFR-09, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Breakpoint at submit handler; inspect list before return and Network.
- **Expected result:** Insertion completes within handler; no artificial delay or network request.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-018 — Valid length boundary

- **SRS:** FR-LST-05, FR-LST-06, VR-LST-04, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit exactly 1 ASCII a characters; count items and text length.
- **Expected result:** One item of 1 characters; success message, cleared input and focus.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-019 — Valid length boundary

- **SRS:** FR-LST-05, FR-LST-06, VR-LST-04, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit exactly 99 ASCII a characters; count items and text length.
- **Expected result:** One item of 99 characters; success message, cleared input and focus.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-020 — Valid length boundary

- **SRS:** FR-LST-05, FR-LST-06, VR-LST-04, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit exactly 100 ASCII a characters; count items and text length.
- **Expected result:** One item of 100 characters; success message, cleared input and focus.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-021 — Unicode text

- **SRS:** FR-LST-06, NFR-11, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit Café 🎓 and inspect textContent.
- **Expected result:** Exact literal Unicode text preserved.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-022 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-form, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-023 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-input, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-024 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #add-item-btn, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-025 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-message, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-026 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-list, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-027 — Isolate event display initialization failure

- **SRS:** VR-INIT-01, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inject a controlled throw inside event display initialization before completion; load fixture and exercise other features.
- **Expected result:** Feature-specific diagnostic without personal data; unavailable message where suitable; no false success; unrelated features initialize.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-028 — Isolate faculty calculator initialization failure

- **SRS:** VR-INIT-01, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inject a controlled throw inside faculty calculator initialization before completion; load fixture and exercise other features.
- **Expected result:** Feature-specific diagnostic without personal data; unavailable message where suitable; no false success; unrelated features initialize.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-LST-029 — Isolate activity planner initialization failure

- **SRS:** VR-INIT-01, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inject a controlled throw inside activity planner initialization before completion; load fixture and exercise other features.
- **Expected result:** Feature-specific diagnostic without personal data; unavailable message where suitable; no false success; unrelated features initialize.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

### UI, accessibility and responsive (9 cases)

#### TC-UI-001 — Keyboard and labels

- **SRS:** IR-01, NFR-02, NFR-03, SC-06, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Tab through all pages; activate menus and planner by keyboard; inspect accessible names and live feedback with accessibility tree or screen reader.
- **Expected result:** Controls reachable with visible focus; meaningful labels; feedback announced politely and not color-only.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-002 — Contrast

- **SRS:** NFR-15, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Measure computed foreground/background colors for changed text, controls and focus indicators in normal/error/success states.
- **Expected result:** Normal text >=4.5:1; large text and essential boundaries/focus >=3:1.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-003 — Long text wrapping

- **SRS:** NFR-05, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** At 320 and 375 px add 100 unbroken ASCII characters.
- **Expected result:** Planner fits; no clipped essential text or page overflow.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-004 — Gallery mobile layout

- **SRS:** FR-REG-11, NFR-05, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** At 375 px inspect both gallery images before and after fade controls.
- **Expected result:** Two side-by-side images when visible; layout retained.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-005 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 320 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-006 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 375 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-007 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 768 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-008 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 1024 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-UI-009 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 1440 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

### Browser compatibility (4 cases)

#### TC-BR-001 — Chrome compatibility

- **SRS:** IR-07, NFR-13, AI-09, AC-09
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use current stable Chrome; record actual version; execute IMG normal and fault cases, FAC deterministic and timer cases, LST normal and fault cases, UI viewport matrix and REG interactions; record per-case browser outcomes in compatibility register.
- **Expected result:** All applicable checks meet their original expected outcomes; no unexplained application console errors.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-BR-002 — Edge compatibility

- **SRS:** IR-07, NFR-13, AI-09, AC-09
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use current stable Edge; record actual version; execute IMG normal and fault cases, FAC deterministic and timer cases, LST normal and fault cases, UI viewport matrix and REG interactions; record per-case browser outcomes in compatibility register.
- **Expected result:** All applicable checks meet their original expected outcomes; no unexplained application console errors.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-BR-003 — Firefox compatibility

- **SRS:** IR-07, NFR-13, AI-09, AC-09
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use current stable Firefox; record actual version; execute IMG normal and fault cases, FAC deterministic and timer cases, LST normal and fault cases, UI viewport matrix and REG interactions; record per-case browser outcomes in compatibility register.
- **Expected result:** All applicable checks meet their original expected outcomes; no unexplained application console errors.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-BR-004 — Touch interaction

- **SRS:** IR-07, FR-REG-02, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use mobile browser or documented touch emulation; tap dropdown, outside area, navigation link, planner button and alumni controls.
- **Expected result:** Touch interactions work; no unintended navigation or unusable controls.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

### Inherited regression (25 cases)

#### TC-REG-001 — Homepage content

- **SRS:** FR-REG-01, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare final homepage with assignment-2-final and supplied baseline; inspect programmes, research, faculty, news/events/notices, contact and disclaimers.
- **Expected result:** All inherited content retained except approved changes.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-002 — Navigation links

- **SRS:** FR-REG-02, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Follow each internal and external navigation link on all pages; inspect targets against baseline.
- **Expected result:** Links and destinations preserved; local pages load.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-003 — Dropdown hover and keyboard

- **SRS:** FR-REG-02, NFR-02, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Hover each menu; Tab into and out of menu; inspect focus and aria-expanded behavior.
- **Expected result:** Inherited hover/focus interaction works; investigate any baseline ARIA inconsistency and document disposition.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-004 — Click and outside click

- **SRS:** FR-REG-02, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Click each toggle twice, switch menus, click outside; repeat by touch.
- **Expected result:** Menus open/close as baseline; outside click closes; no duplicate behavior.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-005 — Digital clock

- **SRS:** FR-REG-03, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load homepage; compare displayed local time/date and observe three consecutive second updates.
- **Expected result:** Immediate local display and one-second updates; no faculty timer confusion.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-006 — Gallery assets and animation

- **SRS:** FR-REG-04, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect both images; click Fade Out then Fade In; inspect duration and final opacity.
- **Expected result:** Both assets load; 800 ms opacity transitions; controls work.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-007 — Animation queue

- **SRS:** FR-REG-04, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Rapidly alternate fade controls; inspect jQuery queue and final state.
- **Expected result:** No queue buildup; final state follows last action.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-008 — jQuery migration

- **SRS:** FR-REG-05, FR-LST-10, IR-06, AC-07
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Diff jquery-script.js against baseline; inspect CDN URL and gallery block.
- **Expected result:** Only obsolete planner handler removed apart from approved guards; gallery retained; no duplicate handler.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-009 — CDN outage

- **SRS:** VR-INIT-02, IR-06, NFR-06, AC-07
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Block jquery CDN request; reload homepage; exercise image, faculty, planner and fade controls.
- **Expected result:** Static gallery visible; native features work; no uncaught errors from unavailable controls.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-010 — Alumni fields

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare labels, types, options and required flags against baseline alumni.html.
- **Expected result:** All inherited fields and constraints retained.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-011 — Alumni valid submission

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Fill all required fields with synthetic valid values; choose existing approved course; submit.
- **Expected result:** Demonstration success; no real registration; field errors cleared.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-012 — Alumni required fields and focus

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit empty form; inspect each required error and first invalid focus; correct one field.
- **Expected result:** Field-specific errors, associations and summary; first invalid focused; corrected error clears appropriately.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-013 — Alumni name and professional fields

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** With otherwise valid data test full name length 2/3, designation/organization/location length 1/2 and whitespace-only.
- **Expected result:** Reject below baseline minima or blank; accept valid boundaries.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-014 — Alumni email and phone

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Test blank, malformed email, valid student@example.invalid; phone 9, 10, 11 digits and letters.
- **Expected result:** Only valid email syntax and exactly ten ASCII digits accepted; no real data used.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-015 — Alumni birth date

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Test 1899-12-31, 1900-01-01, today, tomorrow and impossible date via fixture if native control sanitizes it.
- **Expected result:** Only valid dates from 1900-01-01 through today accepted.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-016 — Alumni batch and course

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Read baseline minimumGraduationYear and approvedCourses; test below minimum, minimum, current year, future year, blank and unapproved option via fixture.
- **Expected result:** Only approved course and four-digit year in baseline range accepted.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-017 — Alumni optional about

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Test blank, 9 and 10 trimmed characters.
- **Expected result:** Blank or >=10 accepted; 9 rejected.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-018 — Alumni feedback counter

- **SRS:** FR-REG-06, SC-09, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Type 0, 9, 10, 299, 300 characters; inject 301 via DevTools; test whitespace-only.
- **Expected result:** Counter reflects raw length and remaining count; trimmed minimum 10, raw maximum 300; invalid values rejected.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-019 — Alumni reset

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Populate form, trigger errors, click reset.
- **Expected result:** Values, errors, summary and counter reset as baseline.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-020 — Alumni privacy notice and CSP

- **SRS:** FR-REG-07, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect demonstration notice and CSP form-action none; submit valid synthetic form with Network/storage inspection.
- **Expected result:** Prevented submission; no registration transmission or persistent data; demonstration-only message.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-021 — Register initialization guard

- **SRS:** FR-REG-07, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect initial disabled attribute; disable JS and reload; reenable JS and reload.
- **Expected result:** Register disabled before successful initialization and without JS; enabled after successful initialization.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-022 — Timetable structure

- **SRS:** FR-REG-08, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare timetable with baseline; inspect caption, headers, merged cells and schedule; test narrow wrapper scrolling.
- **Expected result:** Content and semantic structure preserved; intentional wrapper scroll works.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-023 — Shared script guards

- **SRS:** FR-REG-09, VR-IMG-03, VR-LST-03, NFR-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load alumni and timetable; inspect console and exercise alumni form.
- **Expected result:** Homepage-only targets silently skipped; no initialization interference.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-024 — Unrelated file changes

- **SRS:** FR-REG-10, AC-07
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Diff alumni.html and timetable.html against assignment-2-final; inspect shared source diff.
- **Expected result:** Unchanged unless documented approved correction; no unrelated modifications.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-REG-025 — Script and CSS dependencies

- **SRS:** IR-04, AC-07
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect all three HTML heads/scripts and network load order.
- **Expected result:** All load style.css; homepage and alumni load script.js; homepage loads jQuery before jquery-script.js.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

### Source and external validation (12 cases)

#### TC-VAL-001 — HTML index validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final index.html to W3C Nu checker; record output and candidate.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-002 — HTML alumni validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final alumni.html to W3C Nu checker; record output.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-003 — HTML timetable validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final timetable.html to W3C Nu checker; record output.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-004 — CSS validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final style.css to W3C CSS validator; record profile and output.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-005 — JavaScript syntax

- **SRS:** AI-11, AC-10
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Run node --check script.js and node --check jquery-script.js using installed Node; record version and exit codes.
- **Expected result:** Both exit successfully without syntax errors.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-006 — HTML semantics

- **SRS:** SC-01, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect doctype, lang, UTF-8, viewport, semantic sections, lists and table markup on all pages.
- **Expected result:** Required semantics and metadata retained.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-007 — Formatting

- **SRS:** SC-02, SC-03, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect modified lines and run git diff --check; review HTML/CSS lowercase, two-space indentation, double-quoted HTML attributes.
- **Expected result:** Conventions met; no trailing whitespace; case-sensitive paths preserved.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-008 — Separation of concerns

- **SRS:** SC-04, NFR-12, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect HTML, CSS and JS diff for inline styles/events, !important and feedback styling.
- **Expected result:** External CSS/JS; feedback uses CSS classes; no unnecessary inline code or !important.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-009 — Maintainability

- **SRS:** SC-05, NFR-10, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect named feature initializers, scoped selectors, names and comments.
- **Expected result:** Meaningful names, appropriate current comments and isolated feature responsibilities.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-010 — Safe DOM and handler audit

- **SRS:** SC-07, NFR-11, FR-LST-10, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Search both scripts for activity handlers, innerHTML, eval and dynamic script injection; trace actual user text and caption paths.
- **Expected result:** One native submit processing handler; safe text insertion; inherited jQuery gallery exception only.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-011 — CSS and guide review

- **SRS:** SC-08, SC-09, SC-10, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review Flexbox/Grid, media queries, counter and modified code against instructor-selected Google guide; record legacy exceptions.
- **Expected result:** Responsive rules retained; alumni counter preserved; no unrelated counter or broad refactor; exceptions documented.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-VAL-012 — Console inspection

- **SRS:** AI-11, NFR-13, AC-09, AC-10
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Open console on all pages; exercise normal features and review fault-case logs separately; record actual diagnostics and network failures.
- **Expected result:** No unexplained application errors; expected injected diagnostics distinguished from unexpected errors.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

### Workflow and submission (19 cases)

#### TC-DOC-001 — Baseline review

- **SRS:** AI-01, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect baseline review and gap analysis against supplied files and evidence limitations.
- **Expected result:** Review retained; no unsupported claims.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-002 — Approved SRS

- **SRS:** AI-02, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare repository SRS to approved upload and inspect approval/change history.
- **Expected result:** Approved baseline unchanged or formally traced changes; approval precedes source changes.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-003 — Test plan

- **SRS:** AI-03, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect plan, IDs, RTM and initial status history.
- **Expected result:** All approved requirements covered; unique IDs; initial Not Tested.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-004 — Nine steps

- **SRS:** AI-04, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review transcript and commits against instructor steps 1–9, including reuse decisions.
- **Expected result:** All nine documented in order with actual evidence of reuse or implementation.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-005 — Debugging

- **SRS:** AI-05, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect transcript and defect history for iterative refinement.
- **Expected result:** Actual findings, decisions and verification recorded; no fabricated defects.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-006 — Conformance audit

- **SRS:** AI-06, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect audit against candidate, SRS and test plan.
- **Expected result:** Requirements, unmet items and evidence limits identified.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-007 — Corrective development

- **SRS:** AI-07, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Trace each confirmed defect to correction and retest; inspect other finding dispositions.
- **Expected result:** Confirmed defects corrected and retested; other findings dispositioned.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-008 — Walkthrough

- **SRS:** AI-08, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Read final HTML/CSS/JS explanation and compare with candidate.
- **Expected result:** Explains arrays, random selection, dates, DOM, listeners, validation and inherited jQuery.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-009 — Manual execution completeness

- **SRS:** AI-09, NFR-14, AC-09, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review functional, accessibility, responsive, browser and regression records; inspect defects and retests.
- **Expected result:** Required checks executed against candidate; failures corrected and retested before acceptance.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-010 — Testing report

- **SRS:** AI-12, DR-03, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Check test IDs, SRS references, expected/actual, statuses, defects, retests and limitations.
- **Expected result:** Complete truthful report; unexecuted checks not passed.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-011 — Documentation files

- **SRS:** DR-04, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect assignment-3 directory for SRS.md, ASSIGNMENT_TEST_PLAN.md, CONFORMANCE_AUDIT.md, CODE_WALKTHROUGH.md, TESTING_REPORT.md.
- **Expected result:** All present and consistent.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-012 — Evidence register

- **SRS:** DR-05, AI-10, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Open actual referenced evidence in assignment-3/screenshots; compare with candidate and recorded results.
- **Expected result:** Real readable evidence; correct references and limitations; no invented filenames.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-013 — Public transcript

- **SRS:** AI-13, DR-02, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Open share link in signed-out/private browser; inspect requirements, planning, implementation, debugging, audit and walkthrough.
- **Expected result:** Accessible complete transcript without credentials or real personal information.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-014 — Historical preservation

- **SRS:** DR-06, AI-14, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect git tags assignment-1-final and assignment-2-final; compare historical documentation against baseline.
- **Expected result:** Tags and previous documentation preserved; historical results not counted as new.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-015 — Incremental Git history

- **SRS:** AI-14, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect git log on main and compare stage commits; check working tree.
- **Expected result:** Meaningful incremental commits; baseline preserved; final tag deferred until verification.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-016 — README accuracy

- **SRS:** DR-07, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review root README against final implementation, testing report and prior history.
- **Expected result:** Updated only at finalization; native migration and historical jQuery behavior accurately described.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-017 — ZIP inventory and privacy

- **SRS:** DR-01, DR-10, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect archive contents and documentation/evidence for secrets, real alumni data, caches and .git.
- **Expected result:** One ZIP with complete required files/assets and relative structure; prohibited material excluded.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-018 — Extract and run ZIP

- **SRS:** DR-08, DR-01, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Extract to clean directory; serve over HTTP; open all pages, exercise three features, verify five assets, links and documentation.
- **Expected result:** Runnable extracted candidate; all required content present.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

#### TC-DOC-019 — Candidate and final tag

- **SRS:** DR-09, AI-14, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Record actual git rev-parse HEAD and status; compare ZIP with accepted files; after final verification inspect assignment-3-final target; repeat affected checks and rebuild ZIP after changes.
- **Expected result:** Actual revision recorded; final tag points to accepted candidate; ZIP and records match; no invented hash or time.
- **Actual result:** Pending
- **Execution status:** Not Tested
- **Evidence reference:** Pending

## 4. Requirements traceability matrix

Every normative ID and acceptance criterion in the approved SRS is mapped below. Multiple cases may jointly establish a requirement; a single mapped pass does not establish the entire requirement.

| SRS ID | Test cases | Initial status |
|---|---|---|
| FR-IMG-01 | TC-IMG-001 | Not Tested |
| FR-IMG-02 | TC-IMG-002 | Not Tested |
| FR-IMG-03 | TC-IMG-005, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013 | Not Tested |
| FR-IMG-04 | TC-IMG-004 | Not Tested |
| FR-IMG-05 | TC-IMG-004, TC-IMG-006, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013, TC-IMG-020 | Not Tested |
| FR-IMG-06 | TC-IMG-003 | Not Tested |
| FR-IMG-07 | TC-IMG-004, TC-IMG-005, TC-IMG-014 | Not Tested |
| FR-IMG-08 | TC-IMG-015, TC-IMG-016, TC-IMG-017, TC-IMG-021 | Not Tested |
| FR-FAC-01 | TC-FAC-001 | Not Tested |
| FR-FAC-02 | TC-FAC-001 | Not Tested |
| FR-FAC-03 | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-038 | Not Tested |
| FR-FAC-04 | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020 | Not Tested |
| FR-FAC-05 | TC-FAC-016, TC-FAC-017, TC-FAC-021, TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032, TC-FAC-033, TC-FAC-034 | Not Tested |
| FR-FAC-06 | TC-FAC-002, TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020 | Not Tested |
| FR-FAC-07 | TC-FAC-002, TC-FAC-035, TC-FAC-037 | Not Tested |
| FR-FAC-08 | TC-FAC-036, TC-FAC-039 | Not Tested |
| FR-FAC-09 | TC-FAC-003 | Not Tested |
| FR-FAC-10 | TC-FAC-004 | Not Tested |
| FR-LST-01 | TC-LST-001 | Not Tested |
| FR-LST-02 | TC-LST-002, TC-LST-003, TC-LST-004 | Not Tested |
| FR-LST-03 | TC-LST-003, TC-LST-004 | Not Tested |
| FR-LST-04 | TC-LST-006, TC-LST-007, TC-LST-008, TC-LST-009 | Not Tested |
| FR-LST-05 | TC-LST-010, TC-LST-011, TC-LST-012, TC-LST-018, TC-LST-019, TC-LST-020 | Not Tested |
| FR-LST-06 | TC-LST-002, TC-LST-009, TC-LST-013, TC-LST-018, TC-LST-019, TC-LST-020, TC-LST-021 | Not Tested |
| FR-LST-07 | TC-LST-002, TC-LST-005 | Not Tested |
| FR-LST-08 | TC-LST-006, TC-LST-014 | Not Tested |
| FR-LST-09 | TC-LST-003, TC-LST-006, TC-LST-011 | Not Tested |
| FR-LST-10 | TC-LST-015, TC-REG-008, TC-VAL-010 | Not Tested |
| FR-LST-11 | TC-LST-005 | Not Tested |
| FR-LST-12 | TC-LST-016 | Not Tested |
| FR-LST-13 | TC-LST-014 | Not Tested |
| FR-LST-14 | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026 | Not Tested |
| FR-REG-01 | TC-REG-001 | Not Tested |
| FR-REG-02 | TC-BR-004, TC-REG-002, TC-REG-003, TC-REG-004 | Not Tested |
| FR-REG-03 | TC-REG-005 | Not Tested |
| FR-REG-04 | TC-REG-006, TC-REG-007 | Not Tested |
| FR-REG-05 | TC-REG-008 | Not Tested |
| FR-REG-06 | TC-REG-010, TC-REG-011, TC-REG-012, TC-REG-013, TC-REG-014, TC-REG-015, TC-REG-016, TC-REG-017, TC-REG-018, TC-REG-019 | Not Tested |
| FR-REG-07 | TC-REG-020, TC-REG-021 | Not Tested |
| FR-REG-08 | TC-REG-022 | Not Tested |
| FR-REG-09 | TC-FAC-039, TC-REG-023 | Not Tested |
| FR-REG-10 | TC-REG-024 | Not Tested |
| FR-REG-11 | TC-UI-004, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | Not Tested |
| IR-01 | TC-IMG-007, TC-UI-001, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | Not Tested |
| IR-02 | TC-FAC-001 | Not Tested |
| IR-03 | TC-LST-001 | Not Tested |
| IR-04 | TC-REG-025 | Not Tested |
| IR-05 | TC-IMG-001, TC-IMG-002 | Not Tested |
| IR-06 | TC-REG-008, TC-REG-009 | Not Tested |
| IR-07 | TC-BR-001, TC-BR-002, TC-BR-003, TC-BR-004 | Not Tested |
| IR-08 | TC-LST-016 | Not Tested |
| NFR-01 | TC-LST-003 | Not Tested |
| NFR-02 | TC-LST-004, TC-UI-001, TC-REG-003 | Not Tested |
| NFR-03 | TC-IMG-007, TC-LST-014, TC-UI-001 | Not Tested |
| NFR-04 | TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | Not Tested |
| NFR-05 | TC-UI-003, TC-UI-004 | Not Tested |
| NFR-06 | TC-IMG-018, TC-IMG-019, TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029, TC-REG-009, TC-REG-023 | Not Tested |
| NFR-07 | TC-IMG-004, TC-IMG-021 | Not Tested |
| NFR-08 | TC-FAC-035, TC-FAC-036, TC-FAC-039 | Not Tested |
| NFR-09 | TC-LST-017 | Not Tested |
| NFR-10 | TC-VAL-009 | Not Tested |
| NFR-11 | TC-IMG-006, TC-LST-013, TC-LST-021, TC-VAL-010 | Not Tested |
| NFR-12 | TC-VAL-008 | Not Tested |
| NFR-13 | TC-BR-001, TC-BR-002, TC-BR-003, TC-VAL-012 | Not Tested |
| NFR-14 | TC-DOC-009 | Not Tested |
| NFR-15 | TC-UI-002 | Not Tested |
| VR-IMG-01 | TC-IMG-015, TC-IMG-016 | Not Tested |
| VR-IMG-02 | TC-IMG-020, TC-IMG-021 | Not Tested |
| VR-IMG-03 | TC-IMG-018, TC-IMG-019, TC-REG-023 | Not Tested |
| VR-IMG-04 | TC-IMG-017 | Not Tested |
| VR-FAC-01 | TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-033 | Not Tested |
| VR-FAC-02 | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-016, TC-FAC-017, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032 | Not Tested |
| VR-FAC-03 | TC-FAC-021 | Not Tested |
| VR-FAC-04 | TC-FAC-034 | Not Tested |
| VR-LST-01 | TC-LST-006, TC-LST-007, TC-LST-008 | Not Tested |
| VR-LST-02 | TC-LST-011, TC-LST-012 | Not Tested |
| VR-LST-03 | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-REG-023 | Not Tested |
| VR-LST-04 | TC-LST-003, TC-LST-009, TC-LST-018, TC-LST-019, TC-LST-020 | Not Tested |
| VR-INIT-01 | TC-LST-027, TC-LST-028, TC-LST-029 | Not Tested |
| VR-INIT-02 | TC-REG-009 | Not Tested |
| SC-01 | TC-VAL-006 | Not Tested |
| SC-02 | TC-VAL-007 | Not Tested |
| SC-03 | TC-VAL-007 | Not Tested |
| SC-04 | TC-VAL-008 | Not Tested |
| SC-05 | TC-VAL-009 | Not Tested |
| SC-06 | TC-IMG-007, TC-LST-001, TC-UI-001 | Not Tested |
| SC-07 | TC-LST-002, TC-VAL-010 | Not Tested |
| SC-08 | TC-VAL-011 | Not Tested |
| SC-09 | TC-REG-018, TC-VAL-011 | Not Tested |
| SC-10 | TC-VAL-011 | Not Tested |
| AI-01 | TC-DOC-001 | Not Tested |
| AI-02 | TC-DOC-002 | Not Tested |
| AI-03 | TC-DOC-003 | Not Tested |
| AI-04 | TC-DOC-004 | Not Tested |
| AI-05 | TC-DOC-005 | Not Tested |
| AI-06 | TC-DOC-006 | Not Tested |
| AI-07 | TC-DOC-007 | Not Tested |
| AI-08 | TC-DOC-008 | Not Tested |
| AI-09 | TC-BR-001, TC-BR-002, TC-BR-003, TC-DOC-009 | Not Tested |
| AI-10 | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-DOC-012 | Not Tested |
| AI-11 | TC-VAL-005, TC-VAL-012 | Not Tested |
| AI-12 | TC-DOC-010 | Not Tested |
| AI-13 | TC-DOC-013 | Not Tested |
| AI-14 | TC-DOC-014, TC-DOC-015, TC-DOC-019 | Not Tested |
| DR-01 | TC-DOC-017, TC-DOC-018 | Not Tested |
| DR-02 | TC-DOC-013 | Not Tested |
| DR-03 | TC-DOC-010 | Not Tested |
| DR-04 | TC-DOC-011 | Not Tested |
| DR-05 | TC-DOC-012 | Not Tested |
| DR-06 | TC-DOC-014 | Not Tested |
| DR-07 | TC-DOC-016 | Not Tested |
| DR-08 | TC-DOC-018 | Not Tested |
| DR-09 | TC-DOC-019 | Not Tested |
| DR-10 | TC-DOC-017 | Not Tested |
| AC-01 | TC-IMG-001, TC-IMG-002, TC-IMG-003, TC-IMG-005, TC-IMG-006, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013 | Not Tested |
| AC-02 | TC-IMG-004, TC-IMG-014, TC-IMG-015, TC-IMG-016, TC-IMG-017, TC-IMG-018, TC-IMG-019, TC-IMG-020, TC-IMG-021 | Not Tested |
| AC-03 | TC-FAC-001, TC-FAC-002, TC-FAC-003, TC-FAC-004, TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-016, TC-FAC-017, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-021, TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032, TC-FAC-033, TC-FAC-034, TC-FAC-038 | Not Tested |
| AC-04 | TC-FAC-035, TC-FAC-036, TC-FAC-037, TC-FAC-039 | Not Tested |
| AC-05 | TC-LST-001, TC-LST-002, TC-LST-003, TC-LST-004, TC-LST-005, TC-LST-009, TC-LST-013, TC-LST-016, TC-LST-017, TC-LST-021 | Not Tested |
| AC-06 | TC-LST-006, TC-LST-007, TC-LST-008, TC-LST-010, TC-LST-011, TC-LST-012, TC-LST-014, TC-LST-015, TC-LST-018, TC-LST-019, TC-LST-020, TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029 | Not Tested |
| AC-07 | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011, TC-REG-012, TC-REG-013, TC-REG-014, TC-REG-015, TC-REG-016, TC-REG-017, TC-REG-018, TC-REG-019, TC-REG-020, TC-REG-021, TC-REG-022, TC-REG-023, TC-REG-024, TC-REG-025 | Not Tested |
| AC-08 | TC-IMG-007, TC-UI-001, TC-UI-002, TC-UI-003, TC-UI-004, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009, TC-BR-004 | Not Tested |
| AC-09 | TC-BR-001, TC-BR-002, TC-BR-003, TC-VAL-006, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-011, TC-VAL-012, TC-DOC-009 | Not Tested |
| AC-10 | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-VAL-005, TC-VAL-012, TC-DOC-001, TC-DOC-002, TC-DOC-003, TC-DOC-004, TC-DOC-005, TC-DOC-006, TC-DOC-007, TC-DOC-008, TC-DOC-009, TC-DOC-010, TC-DOC-011, TC-DOC-012, TC-DOC-015 | Not Tested |
| AC-11 | TC-DOC-013, TC-DOC-014, TC-DOC-016, TC-DOC-017, TC-DOC-018, TC-DOC-019 | Not Tested |

### Coverage integrity
- Normative requirements excluding AC: 114; acceptance criteria: 11; total mapped IDs: 125.
- Unique test cases: 158; unmapped IDs: 0; unknown references: 0.
- All cases have at least one approved SRS reference.
- Structural coverage: 100%; execution coverage: 0%.

## 5. Testing records and summary

### Category summary

| Category | Total | Pass | Fail | Not Tested | Blocked |
|---|---:|---:|---:|---:|---:|
| Random event images | 21 | 0 | 0 | 21 | 0 |
| Faculty experience | 39 | 0 | 0 | 39 | 0 |
| Dynamic list management | 29 | 0 | 0 | 29 | 0 |
| UI, accessibility and responsive | 9 | 0 | 0 | 9 | 0 |
| Browser compatibility | 4 | 0 | 0 | 4 | 0 |
| Inherited regression | 25 | 0 | 0 | 25 | 0 |
| Source and external validation | 12 | 0 | 0 | 12 | 0 |
| Workflow and submission | 19 | 0 | 0 | 19 | 0 |
| **Total** | **158** | **0** | **0** | **158** | **0** |

### Execution batch summary

| Method | Cases | Passed | Failed | Not Tested | Blocked |
|---|---:|---:|---:|---:|---:|
| Browser | 65 | 0 | 0 | 65 | 0 |
| Static | 12 | 0 | 0 | 12 | 0 |
| Controlled | 42 | 0 | 0 | 42 | 0 |
| Fault | 16 | 0 | 0 | 16 | 0 |
| External | 4 | 0 | 0 | 4 | 0 |
| Document | 19 | 0 | 0 | 19 | 0 |
| Total | 158 | 0 | 0 | 158 | 0 |

Browser-labelled cases may include inspection or controlled substeps; method counts classify each case once. Execute static first, browser normal next, controlled and fault next, external and document last. Record repeated browser runs as subrecords, not additional unique cases.

### Defect log (blank template)
| Defect ID | Test ID | Candidate | Reproduction | Expected | Actual | Severity | Evidence | Disposition |
|---|---|---|---|---|---|---|---|---|
| Pending | Pending | Pending | Pending | Pending | Pending | Pending | Pending | Pending |

### Retest record
| Defect ID | Test ID | Correction revision | Retest environment | Actual result | Status | Evidence |
|---|---|---|---|---|---|---|
| Pending | Pending | Pending | Pending | Pending | Not Tested | Pending |

### Validation evidence register
| Target | Tool | Candidate | Errors | Warnings/disposition | Evidence | Status |
|---|---|---|---|---|---|---|
| index.html | W3C HTML | Pending | Pending | Pending | Pending | Not Tested |
| alumni.html | W3C HTML | Pending | Pending | Pending | Pending | Not Tested |
| timetable.html | W3C HTML | Pending | Pending | Pending | Pending | Not Tested |
| style.css | W3C CSS | Pending | Pending | Pending | Pending | Not Tested |
| script.js | Node syntax | Pending | Pending | Pending | Pending | Not Tested |
| jquery-script.js | Node syntax | Pending | Pending | Pending | Pending | Not Tested |
| All pages | Browser console | Pending | Pending | Pending | Pending | Not Tested |

### Browser compatibility record

| Browser | Actual version / OS | Test ID or subcase | Actual outcome | Status | Evidence |
|---|---|---|---|---|---|
| Chrome | Pending | Pending | Pending | Not Tested | Pending |
| Edge | Pending | Pending | Pending | Not Tested | Pending |
| Firefox | Pending | Pending | Pending | Not Tested | Pending |
| Mobile browser/emulation | Pending | Pending | Pending | Not Tested | Pending |

Duplicate rows for each executed case and browser. Record timezone, viewport and fault setup where relevant.

### Responsive verification record

| Page | CSS width | Browser | Overflow/layout observation | Status | Evidence |
|---|---:|---|---|---|---|
| index.html | 320 | Pending | Pending | Not Tested | Pending |
| index.html | 375 | Pending | Pending | Not Tested | Pending |
| index.html | 768 | Pending | Pending | Not Tested | Pending |
| index.html | 1024 | Pending | Pending | Not Tested | Pending |
| index.html | 1440 | Pending | Pending | Not Tested | Pending |
| alumni.html | 320 | Pending | Pending | Not Tested | Pending |
| alumni.html | 375 | Pending | Pending | Not Tested | Pending |
| alumni.html | 768 | Pending | Pending | Not Tested | Pending |
| alumni.html | 1024 | Pending | Pending | Not Tested | Pending |
| alumni.html | 1440 | Pending | Pending | Not Tested | Pending |
| timetable.html | 320 | Pending | Pending | Not Tested | Pending |
| timetable.html | 375 | Pending | Pending | Not Tested | Pending |
| timetable.html | 768 | Pending | Pending | Not Tested | Pending |
| timetable.html | 1024 | Pending | Pending | Not Tested | Pending |
| timetable.html | 1440 | Pending | Pending | Not Tested | Pending |

### Acceptance summary

| Criterion | Mapped tests | Verification |
|---|---:|---|
| AC-01 | 11 | Not Tested |
| AC-02 | 9 | Not Tested |
| AC-03 | 35 | Not Tested |
| AC-04 | 4 | Not Tested |
| AC-05 | 10 | Not Tested |
| AC-06 | 19 | Not Tested |
| AC-07 | 25 | Not Tested |
| AC-08 | 11 | Not Tested |
| AC-09 | 11 | Not Tested |
| AC-10 | 19 | Not Tested |
| AC-11 | 6 | Not Tested |

### Final testing summary template

- Candidate revision, execution dates, tester, environment: Pending.
- Planned cases: 158; executed: 0; passed: 0; failed: 0; blocked: 0; not tested: 158.
- Recorded pass rate: not applicable (zero executed); execution coverage: 0%.
- Acceptance criteria verified: 0 of 11.
- Defects, retests, validator outputs, warnings, evidence limitations: Pending actual execution.
- ZIP, transcript, README and final tag verification: Pending.
- Final conclusion: Not ready for acceptance; testing has not begun.

After documentation updates, reverify the final candidate and regenerate/retest the ZIP as required by DR-09. Do not create the final tag before acceptance verification. No historical pass is carried forward.

**Approval status:** Approved for Assignment 3 incremental
implementation. All 158 test cases remain Not Tested.
The approved SRS and existing website source remain unchanged.
Actual execution results and supporting evidence will be
recorded during the testing phase.