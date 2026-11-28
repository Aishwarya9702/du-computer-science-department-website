# Assignment 3 — Software Testing Report

**Project:** Department of Computer Science Website, University of Delhi  
**Report state:** Final candidate execution report — release reverification pending  
**Baseline:** Approved SRS v1.0 and approved test plan v1.0 (27 November 2026)  
**Repository path:** `assignment-3/TESTING_REPORT.md`

## 1. Scope and execution summary

This report records the student's confirmed execution of the approved 158-case plan. It does not alter the approved plan, SRS, audit or walkthrough. Historical Assignment 1 and Assignment 2 results are excluded. No new execution is claimed during report preparation. Individual execution timestamps and complete environment versions are not recorded; the working tree was user-confirmed clean at Group 8B and again during preliminary Group 8D; HEAD matched origin/main during preliminary Group 8D. The verified Step 22A candidate revision is `fb92f466efa693eb581ef778571826d82ab00bce`; final release identity remains pending after this documentation update.

| Batch | Scope | Total | Passed | Failed | Not Tested |
|---|---|---:|---:|---:|---:|
| 1 | Event images | 21 | 21 | 0 | 0 |
| 2 | Faculty experience | 39 | 39 | 0 | 0 |
| 3 | Activity Planner | 29 | 29 | 0 | 0 |
| 4 | UI/UX | 9 | 9 | 0 | 0 |
| 5 | Cross-browser | 4 | 4 | 0 | 0 |
| 6 | Regression | 25 | 25 | 0 | 0 |
| 7 | Source validation | 12 | 12 | 0 | 0 |
| 8 | Documentation and deliverables | 19 | 19 | 0 | 0 |
| **Total** | | **158** | **158** | **0** | **0** |

Execution coverage: **100%** (158/158). Recorded pass rate among executed cases: **100%** (158/158). Blocked: 0. Zero reported failures does not establish defect-free software.

## 2. Method and evidence policy

The approved methods, preconditions, inputs, actions and expected results are reproduced below verbatim from the plan. Passed means the student explicitly confirmed the case passed, including applicable subcases; it does not mean an independent assistant run or raw log exists. Where only aggregate confirmation exists, the actual result is identified as such rather than inventing individual measurements. Five W3C screenshots were reviewed. All other formal evidence is primarily user-confirmed manual execution, with earlier source inspections and controlled checks reused where applicable. Preliminary checks are not extra formal passes. Tests used synthetic inputs, clean HTTP candidate and disposable fault fixtures as specified by the plan; exact OS, browser versions, Node version, formal exit codes and detailed per-run timestamps were not collected. No physical mobile or screen-reader execution is claimed.

| Approved method | Total | Passed | Failed | Not Tested |
|---|---:|---:|---:|---:|
| Browser | 65 | 65 | 0 | 0 |
| Static | 12 | 12 | 0 | 0 |
| Controlled | 42 | 42 | 0 | 0 |
| Fault | 16 | 16 | 0 | 0 |
| External | 4 | 4 | 0 | 0 |
| Document | 19 | 19 | 0 | 0 |

## 3. Detailed execution records


Run baseline/static checks first, then normal functional checks, controlled boundaries, fault injection, UI/browser/regression, external validation and documentation/submission. Repeat relevant cases in each supported browser, including specified fault scenarios; browser matrix cases aggregate existing checks rather than inventing independent pass counts. Use a fresh page per independent input case unless sequence is specified. Preserve evidence under assignment-3/screenshots/ and record actual filenames only.

### Random event images (21 cases)

#### TC-IMG-001 — Five distinct assets

- **SRS:** FR-IMG-01, IR-05, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect images/events and open each of the five files; compare visual content and permission records where applicable.
- **Expected result:** Exactly five distinct supported images including event1.jpg, event2.jpeg, event3.jpeg; all decode; permissions documented where applicable.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-002 — Paths and metadata

- **SRS:** FR-IMG-02, IR-05, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare every eventImages object with directory case, extension and actual image content; request each relative URL over HTTP.
- **Expected result:** Five objects; each path resolves and alt and caption accurately describe its image.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-003 — Initial fallback

- **SRS:** FR-IMG-06, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Disable JS and reload homepage; inspect initial src, alt and caption against actual asset.
- **Expected result:** Usable initial image with matching metadata; no misleading caption.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-004 — Observational refresh

- **SRS:** FR-IMG-04, FR-IMG-05, FR-IMG-07, NFR-07, AC-02
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load homepage and refresh ten times; record selected metadata each time; leave page idle and observe.
- **Expected result:** One eligible selection per normal load; metadata synchronized; no polling; repeats allowed, no minimum number of distinct observations.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-005 — Random formula

- **SRS:** FR-IMG-03, FR-IMG-07, AC-01
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect selection source and check no previous-selection storage or forced exclusion on normal loads.
- **Expected result:** Math.floor(Math.random() * collection.length) used for nonempty eligible collection; independent selection.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-006 — Caption safety

- **SRS:** FR-IMG-05, NFR-11, AC-01
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect caption assignment and inject literal markup-like caption in fixture.
- **Expected result:** Caption rendered as text, not markup.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-007 — Image accessibility

- **SRS:** IR-01, NFR-03, SC-06, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect image accessibility tree and visible caption for each controlled selection.
- **Expected result:** Meaningful accurate alt; readable caption.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-008 — Controlled index 0

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 0 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-009 — Controlled index 1

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.2 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 1 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-010 — Controlled index 2

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.4 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 2 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-011 — Controlled index 3

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.6 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 3 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-012 — Controlled index 4

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.8 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 4 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-013 — Upper random-index boundary

- **SRS:** FR-IMG-03, FR-IMG-05, AC-01
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Stub random to 0.9999999999999999 immediately before initial selection; load fixture with all five valid entries; inspect selected object and restore stub.
- **Expected result:** Index 4 selected; src, alt and caption match; no out-of-range access.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-014 — Permitted repeat

- **SRS:** FR-IMG-07, AC-02
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use same random stub on two fresh fixture loads.
- **Expected result:** Same image may appear twice; no stored exclusion.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-015 — Empty collection with usable fallback

- **SRS:** FR-IMG-08, VR-IMG-01, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set array empty in fixture; keep valid initial image; initialize.
- **Expected result:** No indexing; usable initial image retained; Event images are currently unavailable.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-016 — Empty collection without fallback

- **SRS:** VR-IMG-01, FR-IMG-08, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Empty array and make initial asset unavailable.
- **Expected result:** Broken image hidden; Event images are currently unavailable.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-017 — Invalid metadata

- **SRS:** VR-IMG-04, FR-IMG-08, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Individually omit src, alt, caption; use blank values and unusable path; force selection over remaining entries; repeat with all entries invalid.
- **Expected result:** Invalid entries excluded; no undefined metadata; all-invalid case follows empty collection behavior.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-018 — Missing image target

- **SRS:** VR-IMG-03, NFR-06, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Remove #random-event-image before initialization.
- **Expected result:** Feature skipped; concise diagnostic; unavailable feedback where suitable; other features work.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-019 — Missing caption target

- **SRS:** VR-IMG-03, NFR-06, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Remove #event-caption before initialization.
- **Expected result:** Same safe behavior as missing image target.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-020 — Missing or corrupt selected asset

- **SRS:** VR-IMG-02, FR-IMG-05, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Force index of missing file; repeat with corrupt file and blocked HTTP request; leave other assets valid.
- **Expected result:** Another eligible image loads with synchronized metadata; failed entry not retried for that load.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-IMG-021 — All assets fail

- **SRS:** VR-IMG-02, NFR-07, FR-IMG-08, AC-02
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Block all five asset URLs in fixture; count distinct attempts and observe after final error.
- **Expected result:** At most five distinct attempts; no infinite retries; broken image hidden; Event images are currently unavailable.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

### Faculty experience (39 cases)

#### TC-FAC-001 — Preserve profiles and dates

- **SRS:** FR-FAC-01, FR-FAC-02, IR-02, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare five profiles against baseline HTML; inspect data-joining-date and visible date for each.
- **Expected result:** Names, designations and sample dates preserved unless approved correction; YYYY-MM-DD matches visible date.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-002 — Initial display

- **SRS:** FR-FAC-06, FR-FAC-07, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load homepage with actual local date; independently calculate each profile's completed years.
- **Expected result:** Correct experience alongside all five profiles immediately after initialization.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-003 — Illustrative disclaimer

- **SRS:** FR-FAC-09, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Read faculty section and compare baseline disclaimer.
- **Expected result:** Clearly states dates and experience are illustrative, not verified records.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-004 — No JavaScript

- **SRS:** FR-FAC-10, AC-03
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Disable JS and reload.
- **Expected result:** Meaningful static indication that experience requires JS; no indefinite unexplained loading.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-005 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2005-07-15; local 2026-07-14
- **Actions:** Set fixture joining date to 2005-07-15 and local reference date to 2026-07-14; initialize and inspect profile.
- **Expected result:** 20 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-006 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2005-07-15; local 2026-07-15
- **Actions:** Set fixture joining date to 2005-07-15 and local reference date to 2026-07-15; initialize and inspect profile.
- **Expected result:** 21 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-007 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2005-07-15; local 2026-07-16
- **Actions:** Set fixture joining date to 2005-07-15 and local reference date to 2026-07-16; initialize and inspect profile.
- **Expected result:** 21 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-008 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-11-27; local 2026-11-27
- **Actions:** Set fixture joining date to 2026-11-27 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 0 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-009 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-01-01; local 2026-11-27
- **Actions:** Set fixture joining date to 2026-01-01 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 0 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-010 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2025-11-27; local 2026-11-27
- **Actions:** Set fixture joining date to 2025-11-27 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-011 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2025-02-28
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2025-02-28; initialize and inspect profile.
- **Expected result:** 0 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-012 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2025-03-01
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2025-03-01; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-013 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2028-02-28
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2028-02-28; initialize and inspect profile.
- **Expected result:** 3 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-014 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2024-02-29; local 2028-02-29
- **Actions:** Set fixture joining date to 2024-02-29 and local reference date to 2028-02-29; initialize and inspect profile.
- **Expected result:** 4 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-015 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2000-02-29; local 2001-03-01
- **Actions:** Set fixture joining date to 2000-02-29 and local reference date to 2001-03-01; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-016 — Fixed-date calculation

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 1900-02-29; local 2026-11-27
- **Actions:** Set fixture joining date to 1900-02-29 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-017 — Fixed-date calculation

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2100-02-29; local 2101-03-01
- **Actions:** Set fixture joining date to 2100-02-29 and local reference date to 2101-03-01; initialize and inspect profile.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-018 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0001-01-01; local 2026-11-27
- **Actions:** Set fixture joining date to 0001-01-01 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 2025 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-019 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0099-12-31; local 2026-11-27
- **Actions:** Set fixture joining date to 0099-12-31 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** 1926 years (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-020 — Fixed-date calculation

- **SRS:** FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0004-02-29; local 0005-03-01
- **Actions:** Set fixture joining date to 0004-02-29 and local reference date to 0005-03-01; initialize and inspect profile.
- **Expected result:** 1 year (Sample); no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-021 — Fixed-date calculation

- **SRS:** FR-FAC-05, VR-FAC-03, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-11-28; local 2026-11-27
- **Actions:** Set fixture joining date to 2026-11-28 and local reference date to 2026-11-27; initialize and inspect profile.
- **Expected result:** Joining date is in the future.; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-022 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** attribute absent
- **Actions:** Use attribute absent in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-023 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** empty string
- **Actions:** Use empty string in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-024 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** spaces only
- **Actions:** Use spaces only in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-025 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026/01/01
- **Actions:** Use 2026/01/01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-026 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-1-01
- **Actions:** Use 2026-1-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-027 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** abcd-ef-gh
- **Actions:** Use abcd-ef-gh in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-028 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 0000-01-01
- **Actions:** Use 0000-01-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-029 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2025-02-29
- **Actions:** Use 2025-02-29 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-030 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-04-31
- **Actions:** Use 2026-04-31 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-031 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-13-01
- **Actions:** Use 2026-13-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-032 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-02, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 2026-01-00
- **Actions:** Use 2026-01-00 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-033 — Reject invalid date

- **SRS:** FR-FAC-05, VR-FAC-01, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** 10000-01-01
- **Actions:** Use 10000-01-01 in fixture; set local date 2026-11-27; initialize.
- **Expected result:** Invalid joining date; no NaN or negative result.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-034 — Independent profiles

- **SRS:** VR-FAC-04, FR-FAC-05, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set one profile invalid and another future; leave remaining dates valid; initialize.
- **Expected result:** Each invalid profile shows its own message; valid profiles still correct.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-035 — Minute checks and date rollover

- **SRS:** FR-FAC-07, NFR-08, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Instrument timer registration; use local date 2026-07-14 23:59:30 and joining date 2005-07-15; advance fixture time 60 seconds.
- **Expected result:** At most one dedicated 60000 ms timer; value changes from 20 to 21 years (Sample) at next check.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-036 — Unchanged DOM

- **SRS:** FR-FAC-08, NFR-08, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Observe experience nodes with MutationObserver; advance two checks within same date.
- **Expected result:** No writes to unchanged experience text; no per-second faculty polling.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-037 — Suspended tab

- **SRS:** FR-FAC-07, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Background or suspend fixture tab across simulated local midnight; resume and allow next available timer callback.
- **Expected result:** Experience updates at next available check; no claim of exact background timing.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-038 — Local versus UTC date

- **SRS:** FR-FAC-03, AC-03
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use fixture timezone with local date 2026-07-15 while UTC date is 2026-07-14; joining 2005-07-15.
- **Expected result:** 21 years (Sample), based on local date.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-FAC-039 — No unrelated timer

- **SRS:** FR-FAC-08, FR-REG-09, NFR-08, AC-04
- **Method:** Controlled
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Instrument timer registrations on alumni and inspect timetable script dependencies.
- **Expected result:** No faculty timer on either unrelated page; alumni initializes normally.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

### Dynamic list management (29 cases)

#### TC-LST-001 — Existing interface

- **SRS:** FR-LST-01, IR-03, SC-06, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect form, label, input, button, feedback and ul; compare baseline IDs.
- **Expected result:** Existing planner reused; label references input; Add Item submit button and required IDs present.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-002 — Native implementation

- **SRS:** FR-LST-02, FR-LST-06, FR-LST-07, SC-07, AC-05
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect submit listener, createElement, textContent and append calls.
- **Expected result:** One native submit listener; li created and appended by native DOM methods.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-003 — Button submission

- **SRS:** FR-LST-02, FR-LST-03, FR-LST-09, VR-LST-04, NFR-01, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Enter Coding Club; click Add Item; observe URL, list count, feedback and focus.
- **Expected result:** Exactly one new item; no navigation; input clears and receives focus; Activity added successfully!
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-004 — Enter submission

- **SRS:** FR-LST-02, FR-LST-03, NFR-02, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Type Seminar and press Enter; inspect list and URL.
- **Expected result:** Exactly one item added; no reload; same behavior as button.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-005 — Order and duplicates

- **SRS:** FR-LST-07, FR-LST-11, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Record initial items; submit A, B, A separately.
- **Expected result:** Initial items preserved; A, B, A appended in order.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-006 — Empty input

- **SRS:** FR-LST-04, FR-LST-08, FR-LST-09, VR-LST-01, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit empty input via button and Enter.
- **Expected result:** No insertion or navigation; Please enter an activity.; input focused and retained.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-007 — Spaces only

- **SRS:** FR-LST-04, VR-LST-01, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Enter three spaces and submit.
- **Expected result:** No item; Please enter an activity.; value retained and focused.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-008 — Other whitespace

- **SRS:** FR-LST-04, VR-LST-01, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set input to tab and nonbreaking space via DevTools; submit.
- **Expected result:** No item; specified blank feedback; value retained.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-009 — Trim input

- **SRS:** FR-LST-04, FR-LST-06, VR-LST-04, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit two spaces followed by Workshop and two spaces.
- **Expected result:** One item Workshop; input clears.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-010 — Native length constraint

- **SRS:** FR-LST-05, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect maxlength and attempt to type or paste 101 ASCII characters.
- **Expected result:** maxlength is 100; ordinary entry limited to 100 units.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-011 — Bypassed length

- **SRS:** FR-LST-05, VR-LST-02, FR-LST-09, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set input.value to 101 ASCII characters using DevTools; submit; repeat with 101 spaces.
- **Expected result:** No insertion; Activity must not exceed 100 characters.; raw-length precedence; value retained and focused.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-012 — Emoji length boundary

- **SRS:** FR-LST-05, VR-LST-02, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set value to 50 emoji each two UTF-16 units; submit; repeat with 51.
- **Expected result:** 100 units accepted; 102 rejected with length message.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-013 — Literal markup

- **SRS:** FR-LST-06, NFR-11, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit '<b>Workshop</b>' and '<img src=x onerror=window.__activityProbe=1>' with probe initially undefined.
- **Expected result:** Text displayed literally; no injected elements, request or probe execution.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-014 — Accessible feedback

- **SRS:** FR-LST-08, FR-LST-13, NFR-03, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit blank then valid text; inspect aria-invalid, accessible description and live region.
- **Expected result:** Invalid state and associated error exposed; valid input clears invalid state; polite textual feedback.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-015 — Repeated initialization

- **SRS:** FR-LST-10, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Invoke actual planner initializer twice in isolated fixture; submit one valid value.
- **Expected result:** Exactly one insertion and one active processing handler.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-016 — Temporary state

- **SRS:** FR-LST-12, IR-08, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Add item; inspect Network, cookies, localStorage and sessionStorage; reload.
- **Expected result:** No activity data transmitted or stored; original HTML list restored.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-017 — Synchronous insertion

- **SRS:** NFR-09, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Breakpoint at submit handler; inspect list before return and Network.
- **Expected result:** Insertion completes within handler; no artificial delay or network request.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-018 — Valid length boundary

- **SRS:** FR-LST-05, FR-LST-06, VR-LST-04, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit exactly 1 ASCII a characters; count items and text length.
- **Expected result:** One item of 1 characters; success message, cleared input and focus.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-019 — Valid length boundary

- **SRS:** FR-LST-05, FR-LST-06, VR-LST-04, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit exactly 99 ASCII a characters; count items and text length.
- **Expected result:** One item of 99 characters; success message, cleared input and focus.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-020 — Valid length boundary

- **SRS:** FR-LST-05, FR-LST-06, VR-LST-04, AC-06
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit exactly 100 ASCII a characters; count items and text length.
- **Expected result:** One item of 100 characters; success message, cleared input and focus.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-021 — Unicode text

- **SRS:** FR-LST-06, NFR-11, AC-05
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit Café 🎓 and inspect textContent.
- **Expected result:** Exact literal Unicode text preserved.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-022 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-form, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-023 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-input, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-024 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #add-item-btn, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-025 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-message, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-026 — Missing or wrong-type dependency

- **SRS:** FR-LST-14, VR-LST-03, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** In separate fixture runs remove #activity-list, then replace with incompatible element; initialize and attempt submission if possible.
- **Expected result:** No partial insertion handler; submission disabled where possible; existing form cannot navigate; Activity planner is unavailable. where feedback exists; other features work.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-027 — Isolate event display initialization failure

- **SRS:** VR-INIT-01, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inject a controlled throw inside event display initialization before completion; load fixture and exercise other features.
- **Expected result:** Feature-specific diagnostic without personal data; unavailable message where suitable; no false success; unrelated features initialize.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-028 — Isolate faculty calculator initialization failure

- **SRS:** VR-INIT-01, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inject a controlled throw inside faculty calculator initialization before completion; load fixture and exercise other features.
- **Expected result:** Feature-specific diagnostic without personal data; unavailable message where suitable; no false success; unrelated features initialize.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-LST-029 — Isolate activity planner initialization failure

- **SRS:** VR-INIT-01, NFR-06, AC-06
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inject a controlled throw inside activity planner initialization before completion; load fixture and exercise other features.
- **Expected result:** Feature-specific diagnostic without personal data; unavailable message where suitable; no false success; unrelated features initialize.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

### UI, accessibility and responsive (9 cases)

#### TC-UI-001 — Keyboard and labels

- **SRS:** IR-01, NFR-02, NFR-03, SC-06, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Tab through all pages; activate menus and planner by keyboard; inspect accessible names and live feedback with accessibility tree or screen reader.
- **Expected result:** Controls reachable with visible focus; meaningful labels; feedback announced politely and not color-only.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-002 — Contrast

- **SRS:** NFR-15, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Measure computed foreground/background colors for changed text, controls and focus indicators in normal/error/success states.
- **Expected result:** Normal text >=4.5:1; large text and essential boundaries/focus >=3:1.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-003 — Long text wrapping

- **SRS:** NFR-05, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** At 320 and 375 px add 100 unbroken ASCII characters.
- **Expected result:** Planner fits; no clipped essential text or page overflow.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-004 — Gallery mobile layout

- **SRS:** FR-REG-11, NFR-05, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** At 375 px inspect both gallery images before and after fade controls.
- **Expected result:** Two side-by-side images when visible; layout retained.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-005 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 320 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-006 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 375 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-007 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 768 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-008 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 1024 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-UI-009 — Responsive viewport

- **SRS:** NFR-04, FR-REG-11, IR-01, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Set viewport to 1440 CSS px at 100% zoom; inspect all three pages, event image, faculty, planner, menus, alumni fields and timetable; compare document scrollWidth/clientWidth; scroll table wrapper if needed.
- **Expected result:** No unintended page-level horizontal scrolling, overlapping controls or clipped essential text; usable layout; timetable wrapper may scroll.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

### Browser compatibility (4 cases)

#### TC-BR-001 — Chrome compatibility

- **SRS:** IR-07, NFR-13, AI-09, AC-09
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use current stable Chrome; record actual version; execute IMG normal and fault cases, FAC deterministic and timer cases, LST normal and fault cases, UI viewport matrix and REG interactions; record per-case browser outcomes in compatibility register.
- **Expected result:** All applicable checks meet their original expected outcomes; no unexplained application console errors.
- **Actual result:** Chrome compatibility aggregate reported Passed; version and detailed per-case browser register not recorded.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-BR-002 — Edge compatibility

- **SRS:** IR-07, NFR-13, AI-09, AC-09
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use current stable Edge; record actual version; execute IMG normal and fault cases, FAC deterministic and timer cases, LST normal and fault cases, UI viewport matrix and REG interactions; record per-case browser outcomes in compatibility register.
- **Expected result:** All applicable checks meet their original expected outcomes; no unexplained application console errors.
- **Actual result:** Edge compatibility aggregate reported Passed; version and detailed per-case browser register not recorded.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-BR-003 — Firefox compatibility

- **SRS:** IR-07, NFR-13, AI-09, AC-09
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use current stable Firefox; record actual version; execute IMG normal and fault cases, FAC deterministic and timer cases, LST normal and fault cases, UI viewport matrix and REG interactions; record per-case browser outcomes in compatibility register.
- **Expected result:** All applicable checks meet their original expected outcomes; no unexplained application console errors.
- **Actual result:** Firefox compatibility aggregate reported Passed; version and detailed per-case browser register not recorded.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-BR-004 — Touch interaction

- **SRS:** IR-07, FR-REG-02, AC-08
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Use mobile browser or documented touch emulation; tap dropdown, outside area, navigation link, planner button and alumni controls.
- **Expected result:** Touch interactions work; no unintended navigation or unusable controls.
- **Actual result:** Touch interaction reported Passed using Chrome mobile emulation, not a physical device.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

### Inherited regression (25 cases)

#### TC-REG-001 — Homepage content

- **SRS:** FR-REG-01, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare final homepage with assignment-2-final and supplied baseline; inspect programmes, research, faculty, news/events/notices, contact and disclaimers.
- **Expected result:** All inherited content retained except approved changes.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-002 — Navigation links

- **SRS:** FR-REG-02, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Follow each internal and external navigation link on all pages; inspect targets against baseline.
- **Expected result:** Links and destinations preserved; local pages load.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-003 — Dropdown hover and keyboard

- **SRS:** FR-REG-02, NFR-02, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Hover each menu; Tab into and out of menu; inspect focus and aria-expanded behavior.
- **Expected result:** Inherited hover/focus interaction works; investigate any baseline ARIA inconsistency and document disposition.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-004 — Click and outside click

- **SRS:** FR-REG-02, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Click each toggle twice, switch menus, click outside; repeat by touch.
- **Expected result:** Menus open/close as baseline; outside click closes; no duplicate behavior.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-005 — Digital clock

- **SRS:** FR-REG-03, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load homepage; compare displayed local time/date and observe three consecutive second updates.
- **Expected result:** Immediate local display and one-second updates; no faculty timer confusion.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-006 — Gallery assets and animation

- **SRS:** FR-REG-04, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect both images; click Fade Out then Fade In; inspect duration and final opacity.
- **Expected result:** Both assets load; 800 ms opacity transitions; controls work.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-007 — Animation queue

- **SRS:** FR-REG-04, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Rapidly alternate fade controls; inspect jQuery queue and final state.
- **Expected result:** No queue buildup; final state follows last action.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-008 — jQuery migration

- **SRS:** FR-REG-05, FR-LST-10, IR-06, AC-07
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Diff jquery-script.js against baseline; inspect CDN URL and gallery block.
- **Expected result:** Only obsolete planner handler removed apart from approved guards; gallery retained; no duplicate handler.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-009 — CDN outage

- **SRS:** VR-INIT-02, IR-06, NFR-06, AC-07
- **Method:** Fault
- **Preconditions:** Disposable candidate fixture; actual initializer accessible; restoration procedure prepared.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Block jquery CDN request; reload homepage; exercise image, faculty, planner and fade controls.
- **Expected result:** Static gallery visible; native features work; no uncaught errors from unavailable controls.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-010 — Alumni fields

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare labels, types, options and required flags against baseline alumni.html.
- **Expected result:** All inherited fields and constraints retained.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-011 — Alumni valid submission

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Fill all required fields with synthetic valid values; choose existing approved course; submit.
- **Expected result:** Demonstration success; no real registration; field errors cleared.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-012 — Alumni required fields and focus

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Submit empty form; inspect each required error and first invalid focus; correct one field.
- **Expected result:** Field-specific errors, associations and summary; first invalid focused; corrected error clears appropriately.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-013 — Alumni name and professional fields

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** With otherwise valid data test full name length 2/3, designation/organization/location length 1/2 and whitespace-only.
- **Expected result:** Reject below baseline minima or blank; accept valid boundaries.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-014 — Alumni email and phone

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Test blank, malformed email, valid student@example.invalid; phone 9, 10, 11 digits and letters.
- **Expected result:** Only valid email syntax and exactly ten ASCII digits accepted; no real data used.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-015 — Alumni birth date

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Test 1899-12-31, 1900-01-01, today, tomorrow and impossible date via fixture if native control sanitizes it.
- **Expected result:** Only valid dates from 1900-01-01 through today accepted.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-016 — Alumni batch and course

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Read baseline minimumGraduationYear and approvedCourses; test below minimum, minimum, current year, future year, blank and unapproved option via fixture.
- **Expected result:** Only approved course and four-digit year in baseline range accepted.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-017 — Alumni optional about

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Test blank, 9 and 10 trimmed characters.
- **Expected result:** Blank or >=10 accepted; 9 rejected.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-018 — Alumni feedback counter

- **SRS:** FR-REG-06, SC-09, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Type 0, 9, 10, 299, 300 characters; inject 301 via DevTools; test whitespace-only.
- **Expected result:** Counter reflects raw length and remaining count; trimmed minimum 10, raw maximum 300; invalid values rejected.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-019 — Alumni reset

- **SRS:** FR-REG-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Populate form, trigger errors, click reset.
- **Expected result:** Values, errors, summary and counter reset as baseline.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-020 — Alumni privacy notice and CSP

- **SRS:** FR-REG-07, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect demonstration notice and CSP form-action none; submit valid synthetic form with Network/storage inspection.
- **Expected result:** Prevented submission; no registration transmission or persistent data; demonstration-only message.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-021 — Register initialization guard

- **SRS:** FR-REG-07, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect initial disabled attribute; disable JS and reload; reenable JS and reload.
- **Expected result:** Register disabled before successful initialization and without JS; enabled after successful initialization.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-022 — Timetable structure

- **SRS:** FR-REG-08, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare timetable with baseline; inspect caption, headers, merged cells and schedule; test narrow wrapper scrolling.
- **Expected result:** Content and semantic structure preserved; intentional wrapper scroll works.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-023 — Shared script guards

- **SRS:** FR-REG-09, VR-IMG-03, VR-LST-03, NFR-06, AC-07
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Load alumni and timetable; inspect console and exercise alumni form.
- **Expected result:** Homepage-only targets silently skipped; no initialization interference.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-024 — Unrelated file changes

- **SRS:** FR-REG-10, AC-07
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Diff alumni.html and timetable.html against assignment-2-final; inspect shared source diff.
- **Expected result:** Unchanged unless documented approved correction; no unrelated modifications.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-REG-025 — Script and CSS dependencies

- **SRS:** IR-04, AC-07
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect all three HTML heads/scripts and network load order.
- **Expected result:** All load style.css; homepage and alumni load script.js; homepage loads jQuery before jquery-script.js.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

### Source and external validation (12 cases)

#### TC-VAL-001 — HTML index validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final index.html to W3C Nu checker; record output and candidate.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** Nu HTML Checker vnu 26.11.28: zero errors and zero warnings.
- **Execution status:** Passed
- **Evidence reference:** Reviewed validator screenshot(s): screenshots/w3c-index-html.png; repository placement user-confirmed verified through TC-DOC-012 (Group 8C).

#### TC-VAL-002 — HTML alumni validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final alumni.html to W3C Nu checker; record output.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** Nu HTML Checker vnu 26.11.28: zero errors and zero warnings.
- **Execution status:** Passed
- **Evidence reference:** Reviewed validator screenshot(s): screenshots/w3c-alumni-html.png; repository placement user-confirmed verified through TC-DOC-012 (Group 8C).

#### TC-VAL-003 — HTML timetable validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final timetable.html to W3C Nu checker; record output.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** Nu HTML Checker vnu 26.11.28: zero errors and zero warnings.
- **Execution status:** Passed
- **Evidence reference:** Reviewed validator screenshot(s): screenshots/w3c-timetable-html.png; repository placement user-confirmed verified through TC-DOC-012 (Group 8C).

#### TC-VAL-004 — CSS validation

- **SRS:** AI-10, AC-10
- **Method:** External
- **Preconditions:** Final file available; validator or syntax tool accessible.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Upload final style.css to W3C CSS validator; record profile and output.
- **Expected result:** Zero errors; warnings documented and dispositioned.
- **Actual result:** CSS Level 3 + SVG: zero errors; three accepted warnings at lines 1166, 1172, 1177.
- **Execution status:** Passed
- **Evidence reference:** Reviewed validator screenshot(s): screenshots/w3c-css.png, screenshots/w3c-css-warnings.png; repository placement user-confirmed verified through TC-DOC-012 (Group 8C).

#### TC-VAL-005 — JavaScript syntax

- **SRS:** AI-11, AC-10
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Run node --check script.js and node --check jquery-script.js using installed Node; record version and exit codes.
- **Expected result:** Both exit successfully without syntax errors.
- **Actual result:** Both scripts reported Passed; formal Node version and exit codes not recorded.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-VAL-006 — HTML semantics

- **SRS:** SC-01, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect doctype, lang, UTF-8, viewport, semantic sections, lists and table markup on all pages.
- **Expected result:** Required semantics and metadata retained.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-VAL-007 — Formatting

- **SRS:** SC-02, SC-03, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect modified lines and run git diff --check; review HTML/CSS lowercase, two-space indentation, double-quoted HTML attributes.
- **Expected result:** Conventions met; no trailing whitespace; case-sensitive paths preserved.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-VAL-008 — Separation of concerns

- **SRS:** SC-04, NFR-12, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect HTML, CSS and JS diff for inline styles/events, !important and feedback styling.
- **Expected result:** External CSS/JS; feedback uses CSS classes; no unnecessary inline code or !important.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-VAL-009 — Maintainability

- **SRS:** SC-05, NFR-10, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect named feature initializers, scoped selectors, names and comments.
- **Expected result:** Meaningful names, appropriate current comments and isolated feature responsibilities.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-VAL-010 — Safe DOM and handler audit

- **SRS:** SC-07, NFR-11, FR-LST-10, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Search both scripts for activity handlers, innerHTML, eval and dynamic script injection; trace actual user text and caption paths.
- **Expected result:** One native submit processing handler; safe text insertion; inherited jQuery gallery exception only.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-VAL-011 — CSS and guide review

- **SRS:** SC-08, SC-09, SC-10, AC-09
- **Method:** Static
- **Preconditions:** Final source and baseline available; no browser execution required for inspection.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review Flexbox/Grid, media queries, counter and modified code against instructor-selected Google guide; record legacy exceptions.
- **Expected result:** Responsive rules retained; alumni counter preserved; no unrelated counter or broad refactor; exceptions documented.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-VAL-012 — Console inspection

- **SRS:** AI-11, NFR-13, AC-09, AC-10
- **Method:** Browser
- **Preconditions:** Clean candidate served over HTTP; DevTools available
- **Test data:** Default candidate; synthetic data only
- **Actions:** Open console on all pages; exercise normal features and review fault-case logs separately; record actual diagnostics and network failures.
- **Expected result:** No unexplained application errors; expected injected diagnostics distinguished from unexpected errors.
- **Actual result:** Normal console checks on all three pages and controlled diagnostic review reported Passed; raw logs not collected.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

### Workflow and submission (19 cases)

#### TC-DOC-001 — Baseline review

- **SRS:** AI-01, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect baseline review and gap analysis against supplied files and evidence limitations.
- **Expected result:** Review retained; no unsupported claims.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-002 — Approved SRS

- **SRS:** AI-02, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Compare repository SRS to approved upload and inspect approval/change history.
- **Expected result:** Approved baseline unchanged or formally traced changes; approval precedes source changes.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-003 — Test plan

- **SRS:** AI-03, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect plan, IDs, RTM and initial status history.
- **Expected result:** All approved requirements covered; unique IDs; initial Not Tested.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-004 — Nine steps

- **SRS:** AI-04, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review transcript and commits against instructor steps 1–9, including reuse decisions.
- **Expected result:** All nine documented in order with actual evidence of reuse or implementation.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-005 — Debugging

- **SRS:** AI-05, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect transcript and defect history for iterative refinement.
- **Expected result:** Actual findings, decisions and verification recorded; no fabricated defects.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-006 — Conformance audit

- **SRS:** AI-06, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect audit against candidate, SRS and test plan.
- **Expected result:** Requirements, unmet items and evidence limits identified.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-007 — Corrective development

- **SRS:** AI-07, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Trace each confirmed defect to correction and retest; inspect other finding dispositions.
- **Expected result:** Confirmed defects corrected and retested; other findings dispositioned.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-008 — Walkthrough

- **SRS:** AI-08, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Read final HTML/CSS/JS explanation and compare with candidate.
- **Expected result:** Explains arrays, random selection, dates, DOM, listeners, validation and inherited jQuery.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-009 — Manual execution completeness

- **SRS:** AI-09, NFR-14, AC-09, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review functional, accessibility, responsive, browser and regression records; inspect defects and retests.
- **Expected result:** Required checks executed against candidate; failures corrected and retested before acceptance.
- **Actual result:** User confirmed the approved expected outcome was met (aggregate manual confirmation; individual raw observations not collected).
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-010 — Testing report

- **SRS:** AI-12, DR-03, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Check test IDs, SRS references, expected/actual, statuses, defects, retests and limitations.
- **Expected result:** Complete truthful report; unexecuted checks not passed.
- **Actual result:** User-confirmed manual verification: Report completeness, original definitions and mappings, actual outcomes, traceability, historical findings, retests and limitations manually verified; unexecuted cases remained Not Tested.
- **Execution status:** Passed
- **Evidence reference:** Group 8C user confirmation; earlier evidence reused where applicable.

#### TC-DOC-011 — Documentation files

- **SRS:** DR-04, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect assignment-3 directory for SRS.md, ASSIGNMENT_TEST_PLAN.md, CONFORMANCE_AUDIT.md, CODE_WALKTHROUGH.md, TESTING_REPORT.md.
- **Expected result:** All present and consistent.
- **Actual result:** User-confirmed manual verification: All five required Assignment 3 documents (SRS.md, ASSIGNMENT_TEST_PLAN.md, CONFORMANCE_AUDIT.md, CODE_WALKTHROUGH.md and TESTING_REPORT.md) confirmed present, readable and consistent.
- **Execution status:** Passed
- **Evidence reference:** Group 8C user confirmation; earlier evidence reused where applicable.

#### TC-DOC-012 — Evidence register

- **SRS:** DR-05, AI-10, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Open actual referenced evidence in assignment-3/screenshots; compare with candidate and recorded results.
- **Expected result:** Real readable evidence; correct references and limitations; no invented filenames.
- **Actual result:** User-confirmed manual verification: All five referenced W3C evidence files confirmed present and readable at the intended repository paths; filenames, candidate correspondence, validation results, three warnings and limitations verified.
- **Execution status:** Passed
- **Evidence reference:** Group 8C user confirmation; earlier evidence reused where applicable.

#### TC-DOC-013 — Public transcript

- **SRS:** AI-13, DR-02, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Open share link in signed-out/private browser; inspect requirements, planning, implementation, debugging, audit and walkthrough.
- **Expected result:** Accessible complete transcript without credentials or real personal information.
- **Actual result:** Both Original Development Conversation and Clean Prompt Development Conversation were user-confirmed accessible in a signed-out/private browser, with required workflow content and privacy checks passed. Actual URLs were not supplied.
- **Execution status:** Passed
- **Evidence reference:** Group 8D preliminary user-confirmed manual verification; no independent archive, URL or Git inspection.

#### TC-DOC-014 — Historical preservation

- **SRS:** DR-06, AI-14, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect git tags assignment-1-final and assignment-2-final; compare historical documentation against baseline.
- **Expected result:** Tags and previous documentation preserved; historical results not counted as new.
- **Actual result:** Historical tags, ancestry and prior documentation preservation confirmed by user.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-015 — Incremental Git history

- **SRS:** AI-14, AC-10
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect git log on main and compare stage commits; check working tree.
- **Expected result:** Meaningful incremental commits; baseline preserved; final tag deferred until verification.
- **Actual result:** Incremental history and deferred final tag confirmed; working tree reported clean before document generation.
- **Execution status:** Passed
- **Evidence reference:** User-confirmed execution in original development conversation; applicable earlier evidence reused.

#### TC-DOC-016 — README accuracy

- **SRS:** DR-07, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Review root README against final implementation, testing report and prior history.
- **Expected result:** Updated only at finalization; native migration and historical jQuery behavior accurately described.
- **Actual result:** User-confirmed manual verification: Root README accuracy verified against the implementation, testing report and prior history, including native Activity Planner migration and retained jQuery gallery behavior; F-09 verified.
- **Execution status:** Passed
- **Evidence reference:** Group 8C user confirmation; earlier evidence reused where applicable.

#### TC-DOC-017 — ZIP inventory and privacy

- **SRS:** DR-01, DR-10, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Inspect archive contents and documentation/evidence for secrets, real alumni data, caches and .git.
- **Expected result:** One ZIP with complete required files/assets and relative structure; prohibited material excluded.
- **Actual result:** User confirmed candidate ZIP inventory, required files/assets, relative structure and privacy exclusions passed, including exclusion of Git internals, credentials, temporary fixtures, unnecessary caches and real alumni data. Archive not independently inspected.
- **Execution status:** Passed
- **Evidence reference:** Group 8D preliminary user-confirmed manual verification; no independent archive, URL or Git inspection.

#### TC-DOC-018 — Extract and run ZIP

- **SRS:** DR-08, DR-01, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Extract to clean directory; serve over HTTP; open all pages, exercise three features, verify five assets, links and documentation.
- **Expected result:** Runnable extracted candidate; all required content present.
- **Actual result:** User confirmed clean-directory extraction and Live Server execution passed for all three pages, required JavaScript features, inherited alumni and gallery behavior, five event assets, documentation links and evidence.
- **Execution status:** Passed
- **Evidence reference:** Group 8D preliminary user-confirmed manual verification; no independent archive, URL or Git inspection.

#### TC-DOC-019 — Candidate and final tag

- **SRS:** DR-09, AI-14, AC-11
- **Method:** Document
- **Preconditions:** Relevant candidate documentation and repository/archive available.
- **Test data:** Default candidate; synthetic data only
- **Actions:** Record actual git rev-parse HEAD and status; compare ZIP with accepted files; after final verification inspect assignment-3-final target; repeat affected checks and rebuild ZIP after changes.
- **Expected result:** Actual revision recorded; final tag points to accepted candidate; ZIP and records match; no invented hash or time.
- **Actual result:** Step 22A: user-confirmed candidate revision `fb92f466efa693eb581ef778571826d82ab00bce`; HEAD matched origin/main, working tree clean, assignment-1-final and assignment-2-final preserved, and local assignment-3-final peeled commit target matched HEAD. The Assignment 3 tag was not published remotely. Rebuilt candidate ZIP inventory, privacy exclusions, clean extraction, website smoke tests, documentation links, public conversation accessibility and archive consistency were confirmed. Archive SHA-256, timestamps and public URLs were not supplied. No independent repository, archive or URL inspection is claimed. Final release reverification remains pending after documentation updates.
- **Execution status:** Passed
- **Evidence reference:** Group 8D preliminary and Step 22A user-confirmed manual verification; candidate-level result only.


## 4. Requirements traceability matrix

125 mapped identifiers (114 normative requirements and 11 acceptance criteria); 158 unique cases; structural coverage 100%. Execution coverage is distinct. All mapped cases passed at the verified candidate level; release acceptance remains separate.

| SRS ID | Approved test cases | Recorded execution |
|---|---|---|
| FR-IMG-01 | TC-IMG-001 | 1/1 Passed |
| FR-IMG-02 | TC-IMG-002 | 1/1 Passed |
| FR-IMG-03 | TC-IMG-005, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013 | 7/7 Passed |
| FR-IMG-04 | TC-IMG-004 | 1/1 Passed |
| FR-IMG-05 | TC-IMG-004, TC-IMG-006, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013, TC-IMG-020 | 9/9 Passed |
| FR-IMG-06 | TC-IMG-003 | 1/1 Passed |
| FR-IMG-07 | TC-IMG-004, TC-IMG-005, TC-IMG-014 | 3/3 Passed |
| FR-IMG-08 | TC-IMG-015, TC-IMG-016, TC-IMG-017, TC-IMG-021 | 4/4 Passed |
| FR-FAC-01 | TC-FAC-001 | 1/1 Passed |
| FR-FAC-02 | TC-FAC-001 | 1/1 Passed |
| FR-FAC-03 | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-038 | 15/15 Passed |
| FR-FAC-04 | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020 | 14/14 Passed |
| FR-FAC-05 | TC-FAC-016, TC-FAC-017, TC-FAC-021, TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032, TC-FAC-033, TC-FAC-034 | 16/16 Passed |
| FR-FAC-06 | TC-FAC-002, TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-018, TC-FAC-019, TC-FAC-020 | 15/15 Passed |
| FR-FAC-07 | TC-FAC-002, TC-FAC-035, TC-FAC-037 | 3/3 Passed |
| FR-FAC-08 | TC-FAC-036, TC-FAC-039 | 2/2 Passed |
| FR-FAC-09 | TC-FAC-003 | 1/1 Passed |
| FR-FAC-10 | TC-FAC-004 | 1/1 Passed |
| FR-LST-01 | TC-LST-001 | 1/1 Passed |
| FR-LST-02 | TC-LST-002, TC-LST-003, TC-LST-004 | 3/3 Passed |
| FR-LST-03 | TC-LST-003, TC-LST-004 | 2/2 Passed |
| FR-LST-04 | TC-LST-006, TC-LST-007, TC-LST-008, TC-LST-009 | 4/4 Passed |
| FR-LST-05 | TC-LST-010, TC-LST-011, TC-LST-012, TC-LST-018, TC-LST-019, TC-LST-020 | 6/6 Passed |
| FR-LST-06 | TC-LST-002, TC-LST-009, TC-LST-013, TC-LST-018, TC-LST-019, TC-LST-020, TC-LST-021 | 7/7 Passed |
| FR-LST-07 | TC-LST-002, TC-LST-005 | 2/2 Passed |
| FR-LST-08 | TC-LST-006, TC-LST-014 | 2/2 Passed |
| FR-LST-09 | TC-LST-003, TC-LST-006, TC-LST-011 | 3/3 Passed |
| FR-LST-10 | TC-LST-015, TC-REG-008, TC-VAL-010 | 3/3 Passed |
| FR-LST-11 | TC-LST-005 | 1/1 Passed |
| FR-LST-12 | TC-LST-016 | 1/1 Passed |
| FR-LST-13 | TC-LST-014 | 1/1 Passed |
| FR-LST-14 | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026 | 5/5 Passed |
| FR-REG-01 | TC-REG-001 | 1/1 Passed |
| FR-REG-02 | TC-BR-004, TC-REG-002, TC-REG-003, TC-REG-004 | 4/4 Passed |
| FR-REG-03 | TC-REG-005 | 1/1 Passed |
| FR-REG-04 | TC-REG-006, TC-REG-007 | 2/2 Passed |
| FR-REG-05 | TC-REG-008 | 1/1 Passed |
| FR-REG-06 | TC-REG-010, TC-REG-011, TC-REG-012, TC-REG-013, TC-REG-014, TC-REG-015, TC-REG-016, TC-REG-017, TC-REG-018, TC-REG-019 | 10/10 Passed |
| FR-REG-07 | TC-REG-020, TC-REG-021 | 2/2 Passed |
| FR-REG-08 | TC-REG-022 | 1/1 Passed |
| FR-REG-09 | TC-FAC-039, TC-REG-023 | 2/2 Passed |
| FR-REG-10 | TC-REG-024 | 1/1 Passed |
| FR-REG-11 | TC-UI-004, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | 6/6 Passed |
| IR-01 | TC-IMG-007, TC-UI-001, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | 7/7 Passed |
| IR-02 | TC-FAC-001 | 1/1 Passed |
| IR-03 | TC-LST-001 | 1/1 Passed |
| IR-04 | TC-REG-025 | 1/1 Passed |
| IR-05 | TC-IMG-001, TC-IMG-002 | 2/2 Passed |
| IR-06 | TC-REG-008, TC-REG-009 | 2/2 Passed |
| IR-07 | TC-BR-001, TC-BR-002, TC-BR-003, TC-BR-004 | 4/4 Passed |
| IR-08 | TC-LST-016 | 1/1 Passed |
| NFR-01 | TC-LST-003 | 1/1 Passed |
| NFR-02 | TC-LST-004, TC-UI-001, TC-REG-003 | 3/3 Passed |
| NFR-03 | TC-IMG-007, TC-LST-014, TC-UI-001 | 3/3 Passed |
| NFR-04 | TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009 | 5/5 Passed |
| NFR-05 | TC-UI-003, TC-UI-004 | 2/2 Passed |
| NFR-06 | TC-IMG-018, TC-IMG-019, TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029, TC-REG-009, TC-REG-023 | 12/12 Passed |
| NFR-07 | TC-IMG-004, TC-IMG-021 | 2/2 Passed |
| NFR-08 | TC-FAC-035, TC-FAC-036, TC-FAC-039 | 3/3 Passed |
| NFR-09 | TC-LST-017 | 1/1 Passed |
| NFR-10 | TC-VAL-009 | 1/1 Passed |
| NFR-11 | TC-IMG-006, TC-LST-013, TC-LST-021, TC-VAL-010 | 4/4 Passed |
| NFR-12 | TC-VAL-008 | 1/1 Passed |
| NFR-13 | TC-BR-001, TC-BR-002, TC-BR-003, TC-VAL-012 | 4/4 Passed |
| NFR-14 | TC-DOC-009 | 1/1 Passed |
| NFR-15 | TC-UI-002 | 1/1 Passed |
| VR-IMG-01 | TC-IMG-015, TC-IMG-016 | 2/2 Passed |
| VR-IMG-02 | TC-IMG-020, TC-IMG-021 | 2/2 Passed |
| VR-IMG-03 | TC-IMG-018, TC-IMG-019, TC-REG-023 | 3/3 Passed |
| VR-IMG-04 | TC-IMG-017 | 1/1 Passed |
| VR-FAC-01 | TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-033 | 7/7 Passed |
| VR-FAC-02 | TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-016, TC-FAC-017, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032 | 21/21 Passed |
| VR-FAC-03 | TC-FAC-021 | 1/1 Passed |
| VR-FAC-04 | TC-FAC-034 | 1/1 Passed |
| VR-LST-01 | TC-LST-006, TC-LST-007, TC-LST-008 | 3/3 Passed |
| VR-LST-02 | TC-LST-011, TC-LST-012 | 2/2 Passed |
| VR-LST-03 | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-REG-023 | 6/6 Passed |
| VR-LST-04 | TC-LST-003, TC-LST-009, TC-LST-018, TC-LST-019, TC-LST-020 | 5/5 Passed |
| VR-INIT-01 | TC-LST-027, TC-LST-028, TC-LST-029 | 3/3 Passed |
| VR-INIT-02 | TC-REG-009 | 1/1 Passed |
| SC-01 | TC-VAL-006 | 1/1 Passed |
| SC-02 | TC-VAL-007 | 1/1 Passed |
| SC-03 | TC-VAL-007 | 1/1 Passed |
| SC-04 | TC-VAL-008 | 1/1 Passed |
| SC-05 | TC-VAL-009 | 1/1 Passed |
| SC-06 | TC-IMG-007, TC-LST-001, TC-UI-001 | 3/3 Passed |
| SC-07 | TC-LST-002, TC-VAL-010 | 2/2 Passed |
| SC-08 | TC-VAL-011 | 1/1 Passed |
| SC-09 | TC-REG-018, TC-VAL-011 | 2/2 Passed |
| SC-10 | TC-VAL-011 | 1/1 Passed |
| AI-01 | TC-DOC-001 | 1/1 Passed |
| AI-02 | TC-DOC-002 | 1/1 Passed |
| AI-03 | TC-DOC-003 | 1/1 Passed |
| AI-04 | TC-DOC-004 | 1/1 Passed |
| AI-05 | TC-DOC-005 | 1/1 Passed |
| AI-06 | TC-DOC-006 | 1/1 Passed |
| AI-07 | TC-DOC-007 | 1/1 Passed |
| AI-08 | TC-DOC-008 | 1/1 Passed |
| AI-09 | TC-BR-001, TC-BR-002, TC-BR-003, TC-DOC-009 | 4/4 Passed |
| AI-10 | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-DOC-012 | 5/5 Passed |
| AI-11 | TC-VAL-005, TC-VAL-012 | 2/2 Passed |
| AI-12 | TC-DOC-010 | 1/1 Passed |
| AI-13 | TC-DOC-013 | 1/1 Passed |
| AI-14 | TC-DOC-014, TC-DOC-015, TC-DOC-019 | 3/3 Passed |
| DR-01 | TC-DOC-017, TC-DOC-018 | 2/2 Passed |
| DR-02 | TC-DOC-013 | 1/1 Passed |
| DR-03 | TC-DOC-010 | 1/1 Passed |
| DR-04 | TC-DOC-011 | 1/1 Passed |
| DR-05 | TC-DOC-012 | 1/1 Passed |
| DR-06 | TC-DOC-014 | 1/1 Passed |
| DR-07 | TC-DOC-016 | 1/1 Passed |
| DR-08 | TC-DOC-018 | 1/1 Passed |
| DR-09 | TC-DOC-019 | 1/1 Passed |
| DR-10 | TC-DOC-017 | 1/1 Passed |
| AC-01 | TC-IMG-001, TC-IMG-002, TC-IMG-003, TC-IMG-005, TC-IMG-006, TC-IMG-008, TC-IMG-009, TC-IMG-010, TC-IMG-011, TC-IMG-012, TC-IMG-013 | 11/11 Passed |
| AC-02 | TC-IMG-004, TC-IMG-014, TC-IMG-015, TC-IMG-016, TC-IMG-017, TC-IMG-018, TC-IMG-019, TC-IMG-020, TC-IMG-021 | 9/9 Passed |
| AC-03 | TC-FAC-001, TC-FAC-002, TC-FAC-003, TC-FAC-004, TC-FAC-005, TC-FAC-006, TC-FAC-007, TC-FAC-008, TC-FAC-009, TC-FAC-010, TC-FAC-011, TC-FAC-012, TC-FAC-013, TC-FAC-014, TC-FAC-015, TC-FAC-016, TC-FAC-017, TC-FAC-018, TC-FAC-019, TC-FAC-020, TC-FAC-021, TC-FAC-022, TC-FAC-023, TC-FAC-024, TC-FAC-025, TC-FAC-026, TC-FAC-027, TC-FAC-028, TC-FAC-029, TC-FAC-030, TC-FAC-031, TC-FAC-032, TC-FAC-033, TC-FAC-034, TC-FAC-038 | 35/35 Passed |
| AC-04 | TC-FAC-035, TC-FAC-036, TC-FAC-037, TC-FAC-039 | 4/4 Passed |
| AC-05 | TC-LST-001, TC-LST-002, TC-LST-003, TC-LST-004, TC-LST-005, TC-LST-009, TC-LST-013, TC-LST-016, TC-LST-017, TC-LST-021 | 10/10 Passed |
| AC-06 | TC-LST-006, TC-LST-007, TC-LST-008, TC-LST-010, TC-LST-011, TC-LST-012, TC-LST-014, TC-LST-015, TC-LST-018, TC-LST-019, TC-LST-020, TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029 | 19/19 Passed |
| AC-07 | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011, TC-REG-012, TC-REG-013, TC-REG-014, TC-REG-015, TC-REG-016, TC-REG-017, TC-REG-018, TC-REG-019, TC-REG-020, TC-REG-021, TC-REG-022, TC-REG-023, TC-REG-024, TC-REG-025 | 25/25 Passed |
| AC-08 | TC-IMG-007, TC-UI-001, TC-UI-002, TC-UI-003, TC-UI-004, TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009, TC-BR-004 | 11/11 Passed |
| AC-09 | TC-BR-001, TC-BR-002, TC-BR-003, TC-VAL-006, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-011, TC-VAL-012, TC-DOC-009 | 11/11 Passed |
| AC-10 | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-VAL-005, TC-VAL-012, TC-DOC-001, TC-DOC-002, TC-DOC-003, TC-DOC-004, TC-DOC-005, TC-DOC-006, TC-DOC-007, TC-DOC-008, TC-DOC-009, TC-DOC-010, TC-DOC-011, TC-DOC-012, TC-DOC-015 | 19/19 Passed |
| AC-11 | TC-DOC-013, TC-DOC-014, TC-DOC-016, TC-DOC-017, TC-DOC-018, TC-DOC-019 | 6/6 Passed |

### Acceptance criteria

| Criterion | Recorded mapped-case outcome |
|---|---|
| AC-01 | 11/11 Passed |
| AC-02 | 9/9 Passed |
| AC-03 | 35/35 Passed |
| AC-04 | 4/4 Passed |
| AC-05 | 10/10 Passed |
| AC-06 | 19/19 Passed |
| AC-07 | 25/25 Passed |
| AC-08 | 11/11 Passed |
| AC-09 | 11/11 Passed |
| AC-10 | 19/19 Passed |
| AC-11 | 6/6 Passed |

## 5. Historical audit findings and corrective verification

Original audit classifications: 30 Compliant, 75 Partially Compliant, 7 Non-Compliant, 13 Not Verifiable. Original severity distribution: 0 critical, 1 high, 5 medium, 2 low, 2 informational. These are historical audit values, not execution counts. No new formal failures or defects were reported in Batches 1–7 or Groups 8A–8C. The original audit and its post-audit update remain unchanged; their prospective statuses describe the earlier stage.

#### A. Corrective action and traceability

| Finding | Original severity | Root cause or concern | Corrective action or disposition | Affected files | Related SRS IDs | Approved test case IDs |
|---|---|---|---|---|---|---|
| F-01 | Medium | Independent CSS hover/focus and JS state could disagree. | Disclosure state uses aria-expanded as the enhanced CSS visibility source; pointer hover, native click/Enter/Space/tap, Escape, focusout and outside click; CSS-only fallback retained. | script.js; style.css | FR-REG-02, NFR-02, AC-07 | TC-REG-003, TC-REG-004, TC-BR-004, TC-UI-001 |
| F-02 | Medium | Left-aligned absolute menus with minimum width and nowrap could exceed viewport. | Following user-confirmed browser reproduction, conditionally align right using measured menu boundary; reposition on resize. | script.js; style.css | NFR-04, FR-REG-02, AC-08 | TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009, TC-REG-003, TC-REG-004 |
| F-03 | High | Secondary exceptions in faculty recovery could escape and interrupt later features. | Protect per-profile writes, section feedback, warnings, date recovery, timer cleanup and owned initialization marker; deactivate timer callback on failure. | script.js | VR-INIT-01, NFR-06, VR-FAC-04 | TC-LST-028, TC-FAC-034, TC-REG-023 |
| F-04 | Medium | Sequential shutdown could stop on a secondary exception; stale success or active insertion could remain. | Set availability false first; independently recover form, install blocker, remove handler where safe, disable controls, update feedback; weak state guards duplicate initialization; independently attempt rollback, raw input restoration, invalid-state cleanup and focus. | script.js | FR-LST-14, VR-LST-03, VR-INIT-01 | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029 |
| F-05 | Low | Attempt count previously depended on collection size; preventive risk with more than five entries. | Use maxAttempts = 5 and counter with full eligible copy, random index and splice; stop on success or exhaustion. | script.js | VR-IMG-02, FR-IMG-08 | TC-IMG-020, TC-IMG-021 |
| F-06 | Medium | Scroll wrapper lacked explicit focusability and accessible identification; compatibility concern. | Add tabindex="0", role="region", aria-label="Weekly course timetable" and 2px focus-visible outline; preserve semantic table and internal scrolling. | timetable.html; style.css | NFR-02, FR-REG-08 | TC-UI-001, TC-REG-022 |
| F-07 | Medium | Unsuitable caption target and detached original image could compromise recovery. | Validate section/figure/image/caption relationships; use event-specific status feedback; track current image after replacement; protect recovery independently. | script.js | VR-IMG-03, VR-INIT-01 | TC-IMG-018, TC-IMG-019, TC-LST-027 |
| F-08 | Low | Continuation indentation and inherited selector duplication required review. | Retain acceptable continuation alignment, decorative comments and complementary navbar rules; conflicting visibility rules removed during F-01/F-02. | No additional changes; script.js and style.css inspected | SC-03, SC-10 | TC-VAL-007, TC-VAL-011 |
| F-09 | Informational | README describes prior assignments rather than current features. | Defer root README finalization to Step 20; preserve historical records. | README.md (future update only) | DR-07 | TC-DOC-016 |
| F-10 | Informational | Missing complete asset, browser, validation, Git and package evidence; supplementary fixture coverage needed. | Collect formal evidence; supplement existing cases with 50/51 surrogate-pair emoji checks, rollback fault and attempt-count instrumentation; do not add formal IDs. | Testing report, evidence directory, final ZIP and Git records (future) | IR-05, NFR-14, AC-01, AC-10, AC-11 | TC-IMG-001, TC-IMG-002, TC-LST-020, TC-LST-021, TC-LST-029, TC-DOC-009, TC-DOC-010, TC-DOC-011, TC-DOC-012, TC-DOC-013, TC-DOC-014, TC-DOC-015, TC-DOC-016, TC-DOC-017, TC-DOC-018, TC-DOC-019 |


| Finding | Current verification disposition |
|---|---|
| F-01 | User-confirmed navigation state, hover, click, keyboard and emulated touch checks Passed. |
| F-02 | Actual browser reproduction reported before correction; JS-enabled viewport checks Passed (20/20 menu/width combinations). CSS-only overflow limitation retained; live repositioning of an already-open menu not separately established. |
| F-03 | Formal faculty checks and supplementary Parts 1 and 2 Passed; recovery limitations below. |
| F-04 | Formal planner fault checks and supplementary rollback/reload verification Passed. |
| F-05 | Bounded attempts verified, including supplementary extra-entry fixture. |
| F-06 | Preventive accessible timetable wrapper correction; original Chromium failure not reproduced; keyboard and responsive checks Passed. |
| F-07 | Event feedback recovery supplementary check Passed. |
| F-08 | Inspection resolved; decorative comments and complementary CSS accepted. |
| F-09 | README finalization verified through TC-DOC-016 (Group 8C user-confirmed). |
| F-10 | Candidate verification completed, including TC-DOC-019; final release closure conditional on successful rebuilt archive and final tag reverification. |

Historical post-audit progress: eight of ten findings addressed (seven implementations and one inspection disposition; 80%). Following Group 8C, nine of ten findings were addressed, including F-09; F-10 remained open. Step 22A completes F-10 candidate verification; unconditional release closure remains pending. These are finding dispositions, not formal test pass rates. Correction revisions not recorded here; refer to historical audit and development history. No new defect IDs invented.

## 6. Supplementary verification (not additional formal cases)

| Finding | User-confirmed scope and outcome |
|---|---|
| F-01 | Hover/keyboard/click/touch visibility and ARIA synchronization Passed. |
| F-02 | JS-enabled mobile, tablet and desktop dropdown bounds Passed; CSS-only exception remains. |
| F-03 Part 1A | Persistent first-profile dataset getter failure: remaining four profiles correct, section feedback and diagnostic expected; aggregate Passed. |
| F-03 Part 1B | Captured 60000 ms callback; temporary Date constructor exception, unavailable values, next callback recovers same date without extra registration; aggregate Passed. Section feedback after recovery not recorded. |
| F-03 Part 2A | Duplicate exact initializer fixture; one timer and owned marker; aggregate Passed. |
| F-03 Part 2B | setInterval throws before native registration; one attempt, unavailable values, marker removed, status feedback and downstream features; aggregate Passed. |
| F-04 | Injected failure after input clear and before success feedback; rollback of original list and raw input, focus, disabled button, one blocker and no processing handler; repeated synthetic submit prevented; normal insertion after restoration/reload. Passed. |
| F-05 | Eight eligible entries fixture: maximum five distinct attempts and separate successful selection of index 7. Passed. |
| F-06 | Keyboard focus, internal scrolling where needed, no page overflow at five widths. Passed; preventive enhancement. |
| F-07 | Injected caption setter exception and guarded event feedback recovery; other features retained. Passed. |

Scenario details describe the confirmed test scope, not independently captured logs. F-03 captured callbacks do not establish real-time scheduling; failure after successful timer registration and clearInterval failure were not established. F-04 recovery is restoration/reload, not automatic same-session recovery. Browser/DOM API failures may prevent complete cleanup, rollback or feedback; image requests that never emit load/error may stall. Historical preliminary Node/Chromium checks in the audit remain distinct from formal execution.

## 7. Validation and evidence register

| Target | Tool/profile | Errors | Warnings | Evidence (relative to assignment-3/) | Status |
|---|---|---:|---:|---|---|
| index.html | Nu HTML Checker vnu 26.11.28 | 0 | 0 | `screenshots/w3c-index-html.png` | Passed |
| alumni.html | Nu HTML Checker vnu 26.11.28 | 0 | 0 | `screenshots/w3c-alumni-html.png` | Passed |
| timetable.html | Nu HTML Checker vnu 26.11.28 | 0 | 0 | `screenshots/w3c-timetable-html.png` | Passed |
| style.css | W3C CSS Level 3 + SVG | 0 | 3 | `screenshots/w3c-css.png`, `screenshots/w3c-css-warnings.png` | Passed |

Five screenshot contents reviewed; filenames and intended repository paths designated by the user. Repository placement, readability and correspondence to the tested candidate were user-confirmed through TC-DOC-012 in Group 8C; no independent local repository inspection is claimed. No other screenshots are claimed.

| CSS line | Selector | Warning | Disposition |
|---:|---|---|---|
| 1166 | `.alumni-form button[type="submit"]` | Same color for background-color and border-color | Accepted, non-blocking |
| 1172 | `.alumni-form button[type="submit"]:not(:disabled):hover` | Same color for background-color and border-color | Accepted, non-blocking |
| 1177 | `.alumni-form button[type="submit"]:not(:disabled):active` | Same color for background-color and border-color | Accepted, non-blocking |

These solid-button styling choices are not syntax errors and do not independently establish contrast compliance. No source correction required solely to suppress warnings.

| Syntax/console target | Recorded outcome | Evidence limitation |
|---|---|---|
| script.js | Passed | Formal Node version and exit code not recorded |
| jquery-script.js | Passed | Formal Node version and exit code not recorded |
| All three pages | Passed | User-confirmed normal console and fault diagnostic review; raw logs not collected |

The audit records preliminary Node v22.16.0 exit code 0 for both earlier uploads; those values are not substituted for missing formal execution metadata.

Expected controlled diagnostics reviewed separately: `Event highlights: initialization failed.`, `Faculty experience: profile calculation failed.`, `Faculty experience: date check failed.`, `Faculty experience: initialization failed.`, `Activity planner: initialization failed.`, `Activity planner: submission processing failed.`, `Gallery fade: jQuery is unavailable.` and intentional image/CDN network blocking. These are expected in corresponding injected scenarios, not normal-operation errors. No unexplained normal errors reported.

## 8. Compatibility, responsive and restoration records

| Browser | Version / OS | Case | Outcome |
|---|---|---|---|
| Chrome | Not recorded | TC-BR-001 | User-confirmed Passed |
| Edge | Not recorded | TC-BR-002 | User-confirmed Passed |
| Firefox | Not recorded | TC-BR-003 | User-confirmed Passed |
| Chrome touch emulation | Not recorded | TC-BR-004 | User-confirmed Passed |

Detailed per-browser subcase register not collected. No physical mobile device or screen-reader testing claimed.

| Page | Width (CSS px) | Outcome |
|---|---:|---|
| index.html | 320 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| index.html | 375 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| index.html | 768 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| index.html | 1024 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| index.html | 1440 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| alumni.html | 320 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| alumni.html | 375 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| alumni.html | 768 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| alumni.html | 1024 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| alumni.html | 1440 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| timetable.html | 320 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| timetable.html | 375 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| timetable.html | 768 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| timetable.html | 1024 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |
| timetable.html | 1440 | User-confirmed Passed; no unintended page overflow or clipped essential content reported |

Timetable internal scrolling permitted; gallery remains two columns at 375px. Contrast and keyboard checks reported Passed within approved scope, not comprehensive WCAG certification. Exact per-run browser and geometry measurements not recorded in formal results.

| Batch/group | Restoration record |
|---|---|
| 1 | 6/6 confirmed |
| 2 | 28 numbered checks confirmed plus Group 2A JavaScript restoration |
| 3 | 41/41 confirmed |
| 4 | 18/18 confirmed |
| 5 | 8/8 confirmed |
| 6 | 39/39 confirmed (includes supplementary F-03) |
| 7C | 6/6 confirmed |
| 8A–8B | No approved documentation or production source modified; working tree reported clean |
| 8C | No approved baseline documents or production source modified; no additional observations reported |

Restoration counts are checklist confirmations, not additional test cases. Historical evidence and approved exceptions remain intact.

## 9. Group 8C, preliminary Group 8D and Step 22A verification

Group 8C: 4/4 Passed, user-confirmed manual verification; earlier evidence reused where applicable. No production source or approved baseline documents modified; no additional observations reported. All five required documents and five W3C evidence files were confirmed present and verified. Batch 8 progress at Group 8C completion: 15/19 (historical).

| Completed case | Status |
|---|---|
| TC-DOC-010 | Passed |
| TC-DOC-011 | Passed |
| TC-DOC-012 | Passed |
| TC-DOC-016 | Passed |

### Preliminary Group 8D results

Historical preliminary Group 8D: 3/4 formal cases Passed; Batch 8: 18/19. All results are user-confirmed manual verification. No production source or approved baseline documents modified; no additional observations reported.

| Test ID | Verification | Status |
|---|---|---|
| TC-DOC-013 | Public conversation accessibility and privacy | Passed |
| TC-DOC-017 | Candidate ZIP inventory and privacy | Passed |
| TC-DOC-018 | Clean extraction and Live Server execution | Passed |
| TC-DOC-019 | Preliminary Git verification Passed; final tag and archive consistency pending | Not Tested |

Both public conversation links were confirmed accessible and privacy-checked; actual URLs were not supplied. Candidate ZIP inventory, privacy, extraction, website execution and documentation accessibility were confirmed. Preliminary Git checks confirmed a clean working tree, HEAD matching origin/main, previous assignment tag preservation and candidate consistency. At that preliminary stage, the candidate commit hash was not supplied and the final tag had not been created. These confirmations apply to the preliminary candidate, not the subsequent release; no independent inspection of the links, ZIP or Git repository is claimed.

### Step 22A — Completed candidate verification

Step 22A: user-confirmed candidate revision `fb92f466efa693eb581ef778571826d82ab00bce`; HEAD matched origin/main, working tree clean, assignment-1-final and assignment-2-final preserved, and local assignment-3-final peeled commit target matched HEAD. The Assignment 3 tag was not published remotely. Rebuilt candidate ZIP inventory, privacy exclusions, clean extraction, website smoke tests, documentation links, public conversation accessibility and archive consistency were confirmed. Archive SHA-256, timestamps and public URLs were not supplied. No independent repository, archive or URL inspection is claimed.

| Test ID | Candidate-level status | Release status |
|---|---|---|
| TC-DOC-019 | Passed | Final release reverification pending |

Batch 8: 19/19; Group 8D: 4/4.

### Mandatory final release checks

Final release acceptance is pending. This documentation update creates a new revision. Commit and push only the two Markdown files; verify clean working tree, HEAD matching origin/main, previous tags and unchanged production source and approved baseline documents. Rebuild the final ZIP using git archive from the actual new committed revision; repeat affected inventory, privacy, clean extraction, documentation/link, website smoke and archive consistency checks, and reverify public conversation accessibility and privacy. Exclude credentials, real alumni data, caches, temporary fixtures and .git. Confirm the existing Assignment 3 tag is still unpublished; with explicit approval realign the local tag to the new accepted revision, verify its peeled commit matches HEAD and origin/main, then publish only that final tag and verify its remote target. Do not silently move a published tag. Record the actual final revision, archive SHA-256, tag target and final acceptance externally in the submission record or conversation to avoid another self-referential documentation commit. No subsequent revision, archive hash or timestamp is asserted. F-10 candidate verification is complete; unconditional release closure is conditional on successful final archive and tag reverification.

## 10. Conclusion

All 158 of 158 approved cases are recorded Passed at the verified candidate level, zero Failed, zero Not Tested; execution coverage 100%, recorded pass rate 100%. Batch 8 is 19/19 and Group 8D is 4/4. F-09 remains verified; F-10 candidate verification is complete, with final release closure conditional on successful final archive and tag reverification. No final submission readiness or comprehensive security/accessibility guarantee is claimed.
