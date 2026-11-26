# Software Testing and Validation Report

## Assignment 2: Designing and Validating an Alumni Registration Form Using AI-Assisted Development

**Department of Computer Science — University of Delhi**  
**M.Sc. Computer Science | Web Development and Prompt Engineering**

## 1. Document control and executive summary

| Attribute | Value |
|---|---|
| Version | 1.1 — final deliverable verification update |
| Date | 26 November 2026 |
| Intended location | `assignment-2/TESTING_REPORT.md` |
| Requirements baseline | Finalized SRS v1.0 |
| Test baseline | Finalized test plan v1.0; original statuses unchanged |
| Candidate | Earlier recorded HEAD `99926ab`; subsequent submission candidate verified by user, exact newer hash not supplied; exact association of every run/upload with a commit not established |
| Assignment 1 baseline | `assignment-1-final`, `cf70e4aeb29beb4d259ed4f92733dcce213c7992` (previously recorded; short hash visible in supplied log) |
| Status | 168 Pass, 0 Fail, 0 Pending — 100% recorded pass rate |

The report consolidates the user's explicit manual confirmations for Batches 1–8, validator screenshots, prior source/document reviews, user-confirmed walkthrough corrections and supplied Git log. Pass means a reported or reviewed pass, not necessarily independently witnessed execution. No final release certification is claimed. The user subsequently confirmed manual verification and passing results for TC-DOC-006 through TC-DOC-009 for the submission candidate. All 168 cases are now recorded as Pass. The updated documentation requires ZIP and Git revision reverification before submission. The approved plan is not edited.

## 2. Scope, methodology and environment

Scope follows SRS and plan: semantic alumni form, validation, counter, accessible errors, reset, local-only demonstration, responsive behavior, compatibility, Assignment 1 regression, standards and AI workflow deliverables. Backend, actual registration, authentication, database and production security certification are excluded. Methods: equivalence partitioning, boundary and negative cases, DevTools inspection, source/document review, regression comparison and W3C validation. Preliminary responsive and post-audit checks are not counted as separate formal cases.

| Environment | Recorded information |
|---|---|
| Execution date | 26 November 2026 (reported session date) |
| OS | Windows 11 (reported) |
| Local site | `http://127.0.0.1:5500/alumni.html` (reported) |
| Browsers | Chrome, Edge, Firefox — reported Pass; versions unrecorded |
| Viewports | 1440, 1280, 1024, 768, 425, 375, 320 px — reported Pass at planned 100% zoom |
| Accessibility | Chrome DevTools Accessibility inspector; no screen-reader execution claimed |
| Tools | Browser DevTools, Git, W3C validators; Node syntax check on supplied JS |
| Actual per-run local date/year, browser profile, viewport height, revision | Not individually recorded |

Baseline B (fictional): Sample Alumni; alumni@example.com; 0123456789; 1999-06-15; 2022; M.Sc. Computer Science (`msc`); Research Assistant; Example Research Lab; Delhi, India; About Yourself empty; feedback “Sample feedback for the department.” A(n) denotes n ASCII `a` characters; D and Y denote local browser date and year. These are planned fixtures, not a log of actual DOM values.

## 3. Evidence inventory and provenance

| Evidence ID | Source | Scope and limitation |
|---|---|---|
| E01–E08 | User confirmations for Batches 1–8 | Aggregate/individual Pass confirmations; no independent browser observation or per-subrun logs |
| E09 | HTML screenshot | Filename and zero errors/warnings visible; exact commit not shown |
| E10 | CSS result and warnings screenshots | Zero errors, three warnings, CSS Level 3 + SVG; exact commit not shown |
| E11 | Supplied source and prior coding review | Static inspection, not browser execution |
| E12 | SRS, test plan, audit, walkthrough and development conversation | Document review; latest corrected walkthrough not re-uploaded |
| E13 | User-pasted Git log | 13 incremental commits, local and remote-tracking refs; no independent live remote query |
| E14 | User confirmation of walkthrough reference corrections | Correction reported, not independently inspected |
| E15 | User confirmation of final manual deliverable verification | Report/evidence checked, ZIP created and tested after extraction, public conversation links verified, candidate Git revision verified; no new archive, links, hash, timestamp or independent inspection supplied |

### 3.1 Source snapshot fingerprints

These SHA-256 values identify the supplied bytes, not a proven Git checkout or validator upload. Original files are read-only for this report.

| Supplied file | SHA-256 |
|---|---|
| `SRS(20261126-142732).md` | `01b49a9f3bb5763192397b0bcc6dbc01eed2a5af43ef330878babfb5789e975f` |
| `ASSIGNMENT_TEST_PLAN(20261126-142731).md` | `d88493e515179113ce31db30c228beefb37013b99f32782f0d65e03e2b4d1ed4` |
| `CONFORMANCE_AUDIT(9).md` | `1bfc8735c1ff17150a21d0c9847563897e30b8a2390f22f5acffc95a2e1824ee` |
| `CODE_WALKTHROUGH(6).md` | `fec60a809bcfd4f3aa1b52c15079145075866b5b4e644444aca395d9345fb036` |
| `alumni(20261126-142752).html` | `a10c22dc0f01e38bba775b1c15ad3fa8abc70e080fb1823e3567cb110738bd84` |
| `script(20261126-142753).js` | `72455bd123d54064b93cf630e7c21930cc39ad8ab8faba5812befa33878597d0` |
| `style(20261126-142752).css` | `a83fa826271b915e58e5b0fe9e4d8ece63b81b20e1afabd962840784764da8bf` |
| `index(20261126-142753).html` | `b34e9d7cee6c5c5ac080731dcf3ca1d8029e1f6ee3590cc7d73f1686aec248fc` |
| `image(20261126-150141).png` | `ad37f479d95fa8bdb599e9a6999ea28a8d091f7e1611b2906ddc6fad55ca29e2` |
| `image(20261126-150211).png` | `f93d5990c3432207f10d0cd38b6f1cdcfbd6c3791d5a72bb77339a3e5f608a43` |
| `image(20261126-150225).png` | `34c149166d3c8220e10b4a5740134a1b191d9aa563f89346c198eab46980e80e` |

### 3.2 Evidence limitations

The original plan requests per-subrun records, attempted and actual DOM values, precise environment, revision and evidence filenames. The user elected simplified Pass/Fail/Pending reporting. Those missing details cannot be reconstructed; the report retains the exact planned actions and expected results, but labels actual results as user-reported aggregate confirmations where applicable. Native control sanitization, dynamic year-boundary simulation, fail-safe interruption and multi-value cases have no independent per-subrun logs. No screenshot is claimed for an individual manual case. The report is not a substitute for missing evidence; TC-DOC-006 is now user-confirmed Pass following report and evidence review; the historical evidence limitations remain. No original plan statuses or historical audit counts are overwritten.

## 4. Execution summary

| Category | Total | Pass | Fail | Pending |
|---|---:|---:|---:|---:|
| FUN | 5 | 5 | 0 | 0 |
| VAL | 97 | 97 | 0 | 0 |
| CNT | 14 | 14 | 0 | 0 |
| ERR | 5 | 5 | 0 | 0 |
| UI | 1 | 1 | 0 | 0 |
| RES | 7 | 7 | 0 | 0 |
| ACC | 4 | 4 | 0 | 0 |
| COMP | 3 | 3 | 0 | 0 |
| PERF | 1 | 1 | 0 | 0 |
| PRIV | 6 | 6 | 0 | 0 |
| REG | 12 | 12 | 0 | 0 |
| STD | 4 | 4 | 0 | 0 |
| DOC | 9 | 9 | 0 | 0 |
| **Total** | **168** | **168** | **0** | **0** |

Recorded pass rate: 168/168 = 100%; pending: 0%. Zero reported failures does not establish absence of defects.

| Batch | Scope | Pass | Pending |
|---|---|---:|---:|
| 1 | FUN, PRIV | 11 | 0 |
| 2 | VAL | 97 | 0 |
| 3 | CNT | 14 | 0 |
| 4 | ERR, UI | 6 | 0 |
| 5 | RES | 7 | 0 |
| 6 | ACC, PERF | 5 | 0 |
| 7 | COMP | 3 | 0 |
| 8 | REG | 12 | 0 |
| 9 | STD, DOC | 13 | 0 |

## 5. Individual execution records and requirements traceability

Each row reproduces the original test ID, SRS mapping, objective, preconditions, actions and expected result. Actual-result entries deliberately distinguish reported outcomes from observed validator evidence and static review. The original plan remains the authoritative forward/reverse RTM; these records retain its forward links without changing requirements. No new tests are invented.

### 5.1 FUN — 5 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-FUN-001 | FR-01, FR-02, FR-03, FR-04, FR-05, FR-06, NFR-23, NFR-24, NFR-25, NFR-02, AC-01, AC-02 | Semantic structure | Fresh page; JavaScript enabled; fictional data only. | Inspect source and accessibility tree for header, nav, main, section, footer, form, four fieldsets and legends; inspect all 11 label associations and unique IDs. | All elements and meaningful labels/groups present. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-FUN-002 | FR-07, FR-08, FR-09, FR-10, FR-11, FR-12, FR-13, FR-14, FR-15, FR-16, FR-17, FR-18, FR-19, FR-21, FR-22, FR-24, FR-55, FR-60, NFR-03, AC-03, AC-04, AC-06 | Controls and required status | Fresh page; JavaScript enabled; fictional data only. | Inspect all 11 controls against SRS section 5; edit each; inspect required attributes, input types, five course options and both buttons. | Nine required registration fields and required feedback; optional About Yourself; correct types and options; buttons present. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-FUN-003 | FR-29, FR-65, NFR-63, AC-19, AC-41 | Initial state and initialization | Fresh page; JavaScript enabled; fictional data only. | Use clean profile; inspect initial HTML with scripts paused, then allow initialization; inspect form. | Initially Register disabled; enabled only after handlers initialize; empty controls, placeholder, 0 entered/300 remaining, no errors or success, no invalid styling; date/year bounds initialized. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-FUN-004 | FR-34, FR-45, FR-55, FR-56, FR-57, FR-58, VR-19, NFR-39, NFR-40, AC-29 | Successful validation | Fresh page; JavaScript enabled; fictional data only. | Fill baseline B; click Register; observe URL, network and values. | Success states demonstration and no submission/storage; values retained; no reload or data transmission. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-FUN-005 | FR-20, AC-05 | Professional alternatives | Fresh page; JavaScript enabled; fictional data only. | Repeat B with Student / Not applicable, Retired / Independent, Self-employed / Self-employed, Unemployed / Not applicable. | Each pair accepted. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |

### 5.2 VAL — 97 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-VAL-001 | FR-09, VR-03, FR-35, VR-01, AC-07 | Full Name empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Full Name empty; Register. | Rejected; Full Name required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-002 | FR-09, VR-03, FR-36, VR-02, AC-07 | Full Name whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with three spaces; Register. | Rejected as empty; Full Name error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-003 | FR-10, VR-04, FR-35, VR-01, AC-07 | Email Address empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Email Address empty; Register. | Rejected; Email Address required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-004 | FR-10, VR-04, FR-36, VR-02, AC-07 | Email Address whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with three spaces; Register. | Rejected as empty; Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-005 | FR-11, VR-05, FR-35, VR-01, AC-07 | Contact Number empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Contact Number empty; Register. | Rejected; Contact Number required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-006 | FR-11, VR-05, FR-36, VR-02, AC-07 | Contact Number whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with three spaces; Register. | Rejected as empty; Contact Number error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-007 | FR-12, VR-06, FR-35, VR-01, AC-07 | Date of Birth empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Date of Birth empty; Register. | Rejected; Date of Birth required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-008 | FR-13, VR-10, FR-35, VR-01, AC-07 | Graduation year empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Graduation year empty; Register. | Rejected; Graduation year required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-009 | FR-14, FR-16, VR-12, FR-35, VR-01, AC-07 | Course / Department empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Course / Department empty; Register. | Rejected; Course / Department required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-010 | FR-17, VR-13, FR-35, VR-01, AC-07 | Current Designation empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Current Designation empty; Register. | Rejected; Current Designation required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-011 | FR-17, VR-13, FR-36, VR-02, AC-07 | Current Designation whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with three spaces; Register. | Rejected as empty; Current Designation error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-012 | FR-18, VR-14, FR-35, VR-01, AC-07 | Organization empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Organization empty; Register. | Rejected; Organization required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-013 | FR-18, VR-14, FR-36, VR-02, AC-07 | Organization whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with three spaces; Register. | Rejected as empty; Organization error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-014 | FR-19, FR-43, VR-15, FR-35, VR-01, AC-07 | Current Location empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Current Location empty; Register. | Rejected; Current Location required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-015 | FR-19, FR-43, VR-15, FR-36, VR-02, AC-07 | Current Location whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with three spaces; Register. | Rejected as empty; Current Location error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-016 | FR-24, FR-33, VR-17, FR-35, VR-01, AC-07 | Alumni Feedback empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Alumni Feedback empty; Register. | Rejected; Alumni Feedback required error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-017 | FR-24, FR-33, VR-17, FR-36, VR-02, AC-07 | Alumni Feedback whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with three spaces; Register. | Rejected as empty; Alumni Feedback error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-018 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Al` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Al`; Register. | Rejected; meaningful Full Name error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-019 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Ana` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Ana`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-020 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Anya` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Anya`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-021 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `  Al  ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `  Al  `; Register. | Rejected; meaningful Full Name error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-022 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `  Ana  ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `  Ana  `; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-023 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Éva O’Neil-Sen` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Éva O’Neil-Sen`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-024 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `alumni@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `alumni@example.com`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-025 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a+b@sub.example.org` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a+b@sub.example.org`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-026 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `  alumni@example.com  ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `  alumni@example.com  `; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-027 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `alumniexample.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `alumniexample.com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-028 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `@example.com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-029 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `alumni@` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `alumni@`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-030 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@@example.com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-031 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@example` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@example`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-032 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@.com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-033 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@example..com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@example..com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-034 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a b@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a b@example.com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-035 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@-example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@-example.com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-036 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@example.com,b@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@example.com,b@example.com`; Register. | Rejected; meaningful Email Address error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-037 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `012345678` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `012345678`; Register. | Rejected; meaningful Contact Number error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-038 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `0123456789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `0123456789`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-039 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234567890` | Fresh page; JavaScript enabled; fictional data only. | Fill B; attempt to enter an 11-digit contact number through normal input. If HTML prevents the excessive length, use DevTools to assign the 11-digit value and attempt registration. | Normal input must not permit an invalid excessive-length value where a native restriction exists. JavaScript must reject an actual 11-digit value when the native restriction is bypassed. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-040 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234a6789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `01234a6789`; Register. | Rejected; meaningful Contact Number error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-041 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234-6789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `01234-6789`; Register. | Rejected; meaningful Contact Number error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-042 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234 6789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `01234 6789`; Register. | Rejected; meaningful Contact Number error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-043 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `+911234567890` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `+911234567890`; Register. | Rejected; meaningful Contact Number error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-044 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `０１２３４５６７８９` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `０１２３４５６７８９`; Register. | Rejected; meaningful Contact Number error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-045 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — ` 0123456789 ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with ` 0123456789 `; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-046 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1999-06-15` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1999-06-15`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-047 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1900-01-01` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1900-01-01`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-048 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1899-12-31` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1899-12-31`; Register. | Rejected; meaningful Date of Birth error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-049 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `2000-02-29` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `2000-02-29`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-050 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1900-02-29` (attempt) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1900-02-29` (attempt); Register. | Rejected; meaningful Date of Birth error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-051 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `2023-02-29` (attempt) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `2023-02-29` (attempt); Register. | Rejected; meaningful Date of Birth error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-052 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `2024-04-31` (attempt) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `2024-04-31` (attempt); Register. | Rejected; meaningful Date of Birth error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-053 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — D (today) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with D (today); Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-054 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — D+1 (tomorrow) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with D+1 (tomorrow); Register. | Rejected; meaningful Date of Birth error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-055 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `1979` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `1979`; Register. | Rejected; meaningful Graduation year error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-056 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `1980` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `1980`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-057 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `1981` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `1981`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-058 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — Y (current year) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with Y (current year); Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-059 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — Y+1 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with Y+1; Register. | Rejected; meaningful Graduation year error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-060 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `2020.5` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `2020.5`; Register. | Rejected; meaningful Graduation year error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-061 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `2020.0` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `2020.0`; Register. | Rejected; meaningful Graduation year error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-062 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `2e3` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `2e3`; Register. | Rejected; meaningful Graduation year error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-063 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `999` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `999`; Register. | Rejected; meaningful Graduation year error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-064 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `02000` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `02000`; Register. | Rejected; meaningful Graduation year error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-065 | FR-40, FR-41, FR-44, VR-08, VR-11, AC-17 | Dynamic date and year | Fresh page; JavaScript enabled; fictional data only. | Inspect bounds on load; in isolated test environment change local date across year boundary without reload; attempt newly valid date/year; restore clock. | Submission uses current local date/year, not stale or hardcoded bounds; record any native-control limitation. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-066 | FR-14, FR-15, FR-16, VR-12, AC-04 | All valid courses | Fresh page; JavaScript enabled; fictional data only. | Repeat B for each of five SRS course options. | Each available non-placeholder option accepted. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-067 | FR-16, VR-12, AC-04 | Unrecognized course | B; DevTools; local disposable page. | In DevTools temporarily insert/select an option with a value outside the approved list; Register; reload. | Unrecognized value rejected. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-068 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — `X` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with `X`; Register. | Rejected; meaningful Current Designation error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-069 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — `XY` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with `XY`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-070 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — `XYZ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with `XYZ`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-071 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — ` X ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with ` X `; Register. | Rejected; meaningful Current Designation error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-072 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — ` XY ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with ` XY `; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-073 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — `X` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with `X`; Register. | Rejected; meaningful Organization error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-074 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — `XY` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with `XY`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-075 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — `XYZ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with `XYZ`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-076 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — ` X ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with ` X `; Register. | Rejected; meaningful Organization error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-077 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — ` XY ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with ` XY `; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-078 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — `X` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `X`; Register. | Rejected; meaningful Current Location error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-079 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — `XY` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `XY`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-080 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — `XYZ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `XYZ`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-081 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — ` X ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with ` X `; Register. | Rejected; meaningful Current Location error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-082 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — ` XY ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with ` XY `; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-083 | FR-19, FR-43, VR-15, AC-16 | Current Location — `Delhi` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `Delhi`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-084 | FR-19, FR-43, VR-15, AC-16 | Current Location — `Delhi, India` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `Delhi, India`; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-085 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — empty | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with empty; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-086 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — three spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with three spaces; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-087 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — A(9) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with A(9); Register. | Rejected; meaningful About Yourself error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-088 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — A(10) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with A(10); Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-089 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — A(11) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with A(11); Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-090 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — two spaces + A(9) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with two spaces + A(9) + two spaces; Register. | Rejected; meaningful About Yourself error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-091 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — two spaces + A(10) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with two spaces + A(10) + two spaces; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-092 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — A(9) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with A(9); Register. | Rejected; meaningful Alumni Feedback error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-093 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — A(10) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with A(10); Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-094 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — A(11) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with A(11); Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-095 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — two spaces + A(9) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with two spaces + A(9) + two spaces; Register. | Rejected; meaningful Alumni Feedback error; no success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-096 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — two spaces + A(10) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with two spaces + A(10) + two spaces; Register. | Accepted; demonstration success. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |
| TC-VAL-097 | FR-44, NFR-51, VR-20, AC-17 | HTML/JS parity | Fresh page; JavaScript enabled; fictional data only. | Inspect HTML and JS against SRS 5 and 6.3: required, types, minimums, pattern, date/year bounds, option membership, trimming and raw feedback max; compare native validity with final custom decisions. | No contradictory policy; JS handles rules native attributes cannot express; record native sanitization separately. | User confirmed Pass in Batch 2; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E02 | Pass |

### 5.3 CNT — 14 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-CNT-001 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 0 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(0) using normal typing/paste; inspect counts; Register. | 0 entered, 300 remaining; rejected for required/minimum length. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-002 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 1 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(1) using normal typing/paste; inspect counts; Register. | 1 entered, 299 remaining; rejected for required/minimum length. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-003 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 9 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(9) using normal typing/paste; inspect counts; Register. | 9 entered, 291 remaining; rejected for required/minimum length. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-004 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 10 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(10) using normal typing/paste; inspect counts; Register. | 10 entered, 290 remaining; accepted. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-005 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 11 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(11) using normal typing/paste; inspect counts; Register. | 11 entered, 289 remaining; accepted. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-006 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 150 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(150) using normal typing/paste; inspect counts; Register. | 150 entered, 150 remaining; accepted. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-007 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 299 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(299) using normal typing/paste; inspect counts; Register. | 299 entered, 1 remaining; accepted. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-008 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 300 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(300) using normal typing/paste; inspect counts; Register. | 300 entered, 0 remaining; accepted. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-009 | FR-28, NFR-38, AC-20 | Typing and deletion | Fresh page; JavaScript enabled; fictional data only. | Start empty feedback; type abc; delete one; paste de; select all and delete. | Counts 3/297, 2/298, 4/296, 0/300 immediately; no reload. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-010 | FR-25, FR-30, SC-05, AC-22 | Native 301 attempt | Fresh page; JavaScript enabled; fictional data only. | Paste A(301) into empty feedback; separately type one extra character after A(300). | Actual value never exceeds 300; counter reflects actual value; at 300 shows zero remaining. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-011 | FR-32, FR-42, VR-18, SC-05, AC-22, AC-24 | Programmatic 301 boundary | B; DevTools; disposable local page. | Using DevTools set textarea value to A(301) without removing maxlength; dispatch input event; inspect count; Register; reload. | 301 entered, 0 remaining (never negative); JS rejects excessive raw length; no success. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-012 | FR-26, FR-27, FR-28, VR-20, AC-24 | Whitespace and Unicode | Fresh page; JavaScript enabled; fictional data only. | Enter `a b`, then `a` + newline + `b`, then `é😀`, then `e` + combining acute accent; inspect each separately. | Counts respectively 3/297, 3/297, 3/297, 2/298; UTF-16 units, not visual glyphs. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-013 | FR-25, FR-32, FR-42, VR-18, AC-22, AC-24 | Raw length vs trimmed length | B; DevTools. | Set feedback to A(300) plus one trailing space through DevTools; dispatch input; Register. | 301/0; rejected despite trimmed length 300. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |
| TC-CNT-014 | FR-31, FR-62, AC-31 | Counter reset | Fresh page; JavaScript enabled; fictional data only. | Enter A(150); Reset. | 0 entered, 300 remaining. | User confirmed Pass in Batch 3; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E03 | Pass |

### 5.4 ERR — 5 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-ERR-001 | FR-46, FR-47, FR-48, FR-49, FR-50, FR-53, FR-54, NFR-07, NFR-13, NFR-29, NFR-30, NFR-37, AC-25, AC-26, AC-28 | Multiple errors and focus | Fresh page; JavaScript enabled; fictional data only. | Fill B; clear name and location; enter invalid email; Register; inspect DOM and focus. | All three field-specific errors near controls; associated error text and aria-invalid; distinct styling; general error; focus first invalid in document order; no success. | User confirmed Pass in Batch 4; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E04 | Pass |
| TC-ERR-002 | FR-51, FR-52, FR-54, NFR-06, AC-27, AC-28 | Correction and retention | Fresh page; JavaScript enabled; fictional data only. | Fill B with invalid name and email; Register; compare values; correct name only; then email; Register. | Values retained; corrected errors clear/update; remaining error persists until corrected; success only after all pass. | User confirmed Pass in Batch 4; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E04 | Pass |
| TC-ERR-003 | FR-59, AC-30 | Clear stale success | Fresh page; JavaScript enabled; fictional data only. | For each of 11 controls independently, validate B successfully then edit that control. | Success message clears on each edit. | User confirmed Pass in Batch 4; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E04 | Pass |
| TC-ERR-004 | FR-60, FR-61, FR-62, FR-63, FR-64, FR-65, FR-66, NFR-40, AC-31 | Complete reset | Fresh page; JavaScript enabled; fictional data only. | Fill B, invalidate name, Register, Reset; repeat after successful validation. | All values empty, placeholder selected, messages cleared, invalid styling/ARIA reset, 0/300 counter, no reload or transmission. | User confirmed Pass in Batch 4; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E04 | Pass |
| TC-ERR-005 | FR-48, FR-52, NFR-13, AC-25 | No premature errors | Fresh page; JavaScript enabled; fictional data only. | Load fresh page; edit a valid field without submitting; inspect untouched fields. | No application-generated invalid states on untouched fields. | User confirmed Pass in Batch 4; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E04 | Pass |

### 5.5 UI — 1 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-UI-001 | NFR-01, NFR-02, NFR-03, NFR-04, NFR-05, NFR-09, NFR-10, NFR-11, NFR-12, NFR-13, NFR-14, NFR-15, AC-32 | Visual consistency | Fresh page; JavaScript enabled; fictional data only. | Compare alumni page to tagged baseline; inspect typography, spacing, alignment, margins, padding, borders, backgrounds, fieldset legends, heading, instructions and buttons; hover/focus/activate buttons. | Readable consistent departmental design; persistent instructions; required markers; distinguishable buttons and visible interaction feedback. | User confirmed Pass in Batch 4; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E04 | Pass |

### 5.6 RES — 7 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-RES-001 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 1440px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 1440px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. | User confirmed Pass in Batch 5; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E05 | Pass |
| TC-RES-002 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 1280px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 1280px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. | User confirmed Pass in Batch 5; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E05 | Pass |
| TC-RES-003 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 1024px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 1024px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. | User confirmed Pass in Batch 5; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E05 | Pass |
| TC-RES-004 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 768px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 768px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. | User confirmed Pass in Batch 5; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E05 | Pass |
| TC-RES-005 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 425px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 425px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. | User confirmed Pass in Batch 5; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E05 | Pass |
| TC-RES-006 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 375px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 375px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. | User confirmed Pass in Batch 5; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E05 | Pass |
| TC-RES-007 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 320px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 320px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. | User confirmed Pass in Batch 5; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E05 | Pass |

### 5.7 ACC — 4 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-ACC-001 | NFR-26, NFR-27, NFR-36, NFR-37, AC-34 | Keyboard workflow | Fresh page; JavaScript enabled; fictional data only. | Use Tab and Shift+Tab through page and controls; use keyboard to select course, Register and Reset; trigger invalid submission. | All controls operable; visible focus; logical order, no trap; first invalid receives focus. | User confirmed Pass in Batch 6; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E06 | Pass |
| TC-ACC-002 | FR-05, FR-07, NFR-03, NFR-24, NFR-25, NFR-34, AC-34, AC-36 | Accessible names and required markers | Fresh page; JavaScript enabled; fictional data only. | Inspect accessibility tree and click labels; inspect required and optional states and invalid text with colour disregarded. | Labels identify controls; groups named; required status and errors not colour-only. | User confirmed Pass in Batch 6; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E06 | Pass |
| TC-ACC-003 | NFR-28, NFR-29, NFR-30, NFR-31, NFR-32, FR-49, AC-35 | Accessible dynamic messages | Fresh page; JavaScript enabled; fictional data only. | Inspect textarea description, error associations and live regions; type feedback, submit invalid then valid form; use available screen reader or accessibility inspection. | Counter/instructions associated; polite counter live region; status exposed; errors associated and aria-invalid updated. Record actual assistive technology used. | User confirmed Pass in Batch 6; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E06 | Pass |
| TC-ACC-004 | NFR-33, NFR-35, AC-36 | Autocomplete and contrast | Fresh page; JavaScript enabled; fictional data only. | Inspect applicable autocomplete tokens; measure foreground/background contrast for normal form text and error messages using DevTools contrast inspector. | Appropriate tokens; each measured ratio ≥4.5:1. | User confirmed Pass in Batch 6; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E06 | Pass |

### 5.8 COMP — 3 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-COMP-001 | NFR-42, NFR-43, NFR-44, NFR-45, AC-38 | Google Chrome core workflow | Fresh page; JavaScript enabled; fictional data only. | Use current stable Google Chrome; record actual version; load all pages; run B, invalid email, feedback typing/paste, reset, keyboard navigation and console inspection. | Core workflow works; no uncaught JS errors; record browser-specific differences. | User confirmed Pass in Batch 7; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E07 | Pass |
| TC-COMP-002 | NFR-42, NFR-43, NFR-44, NFR-45, AC-38 | Microsoft Edge core workflow | Fresh page; JavaScript enabled; fictional data only. | Use current stable Microsoft Edge; record actual version; load all pages; run B, invalid email, feedback typing/paste, reset, keyboard navigation and console inspection. | Core workflow works; no uncaught JS errors; record browser-specific differences. | User confirmed Pass in Batch 7; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E07 | Pass |
| TC-COMP-003 | NFR-42, NFR-43, NFR-44, NFR-45, AC-38 | Mozilla Firefox core workflow | Fresh page; JavaScript enabled; fictional data only. | Use current stable Mozilla Firefox; record actual version; load all pages; run B, invalid email, feedback typing/paste, reset, keyboard navigation and console inspection. | Core workflow works; no uncaught JS errors; record browser-specific differences. | User confirmed Pass in Batch 7; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E07 | Pass |

### 5.9 PERF — 1 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-PERF-001 | NFR-38, NFR-39, NFR-40, NFR-41, AC-37 | Immediate local interaction | Fresh page; JavaScript enabled; fictional data only. | Record input event and DOM update in DevTools; type/delete/paste; Register and Reset with network log open; inspect dependencies. | Counter updates within same input handling cycle; no reload or validation request; no unnecessary new dependencies. | User confirmed Pass in Batch 6; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E06 | Pass |

### 5.10 PRIV — 6 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-PRIV-001 | FR-45, FR-57, FR-66, NFR-55, NFR-56, NFR-57, NFR-58, NFR-59, NFR-60, NFR-62, SC-02, SC-03, SC-04, AC-40 | No data transmission/storage | Fresh page; JavaScript enabled; fictional data only. | Use clean profile; record initial storage and network; enter B, submit invalid and valid, reset; inspect requests, URLs, cookies, local/session storage, console and source for database/auth/geolocation. | No registration values transmitted, persisted or logged; no auth/geolocation request; demonstration notice visible; only fictional data used. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-PRIV-002 | NFR-61, AC-40 | Safe DOM handling | Fresh page; JavaScript enabled; fictional data only. | Enter harmless literal markup `<b>Sample</b>` in text fields/feedback; inspect any reflected messages and DOM; inspect rendering methods. | User content not interpreted as HTML; no injected elements. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-PRIV-003 | NFR-63, FR-45, SC-04, AC-41 | JavaScript disabled | Local test page; DevTools; fictional data; preserve network log. | In disposable browser session arrange JavaScript disabled; reload; inspect Register disabled state; fill available controls; try click, Enter in each single-line field and keyboard activation; monitor URL/network; restore environment. | Register remains disabled; no native submission, navigation carrying data, success or transmission. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-PRIV-004 | NFR-63, FR-45, SC-04, AC-41 | script.js blocked before load | Local test page; DevTools; fictional data; preserve network log. | In disposable browser session arrange script.js blocked before load; reload; inspect Register disabled state; fill available controls; try click, Enter in each single-line field and keyboard activation; monitor URL/network; restore environment. | Register remains disabled; no native submission, navigation carrying data, success or transmission. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-PRIV-005 | NFR-63, FR-45, SC-04, AC-41 | initialization interrupted before handlers are ready | Local test page; DevTools; fictional data; preserve network log. | In disposable browser session arrange initialization interrupted before handlers are ready; reload; inspect Register disabled state; fill available controls; try click, Enter in each single-line field and keyboard activation; monitor URL/network; restore environment. | Register remains disabled; no native submission, navigation carrying data, success or transmission. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |
| TC-PRIV-006 | NFR-63, FR-45, AC-41 | Initialization order | Fresh page; JavaScript enabled; fictional data only. | Inspect source and use breakpoint before handler registration and immediately before enabling Register; resume. | Register disabled until validation and submission prevention ready; no unsafe native path. | User confirmed Pass in Batch 1; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E01 | Pass |

### 5.11 REG — 12 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-REG-001 | FR-68, SC-09, AI-35, AC-45 | Homepage | Verified tagged baseline and candidate available; compare same browser/viewport. | Compare content and layout to tagged baseline. | Unchanged homepage. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-002 | FR-68, SC-09, AI-35, AC-45 | Gallery | Verified tagged baseline and candidate available; compare same browser/viewport. | Inspect both images, captions and responsive layout. | Matches baseline. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-003 | FR-70, SC-09, AI-35, AC-45 | Faculty directory | Verified tagged baseline and candidate available; compare same browser/viewport. | Compare entries; calculate experience from sample joining dates and current date. | Directory unchanged; experience matches baseline formula. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-004 | FR-69, SC-09, AI-35, AC-45 | Random event image | Verified tagged baseline and candidate available; compare same browser/viewport. | Reload repeatedly; compare allowed images/captions and inspect selection logic. | Valid image/caption pairs; random selection preserved; no requirement for different image every reload. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-005 | FR-71, SC-09, AI-35, AC-45 | Digital clock | Verified tagged baseline and candidate available; compare same browser/viewport. | Observe consecutive updates and compare local time. | Clock updates as baseline. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-006 | FR-08, FR-67, FR-72, SC-09, AI-35, AC-45 | Navigation | Verified tagged baseline and candidate available; compare same browser/viewport. | Use hover, keyboard focus, click/tap and outside click; follow Home, Alumni and Timetable links; inspect current page marker. | Existing dropdown and navigation behavior preserved. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-007 | FR-68, SC-09, AI-35, AC-45 | News Events Notices | Verified tagged baseline and candidate available; compare same browser/viewport. | Compare all three sections and layout. | Content and layout preserved. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-008 | FR-74, SC-09, AI-35, AC-45 | Timetable | Verified tagged baseline and candidate available; compare same browser/viewport. | Open timetable and compare entries and styling. | Matches baseline. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-009 | FR-73, SC-09, AI-35, AC-45 | jQuery activity list | Verified tagged baseline and candidate available; compare same browser/viewport. | Locate baseline feature; add sample item using existing control. | Item added as baseline. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-010 | FR-73, SC-09, AI-35, AC-45 | Gallery fade | Verified tagged baseline and candidate available; compare same browser/viewport. | Use existing fade controls. | Fade in/out behaves as baseline. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-011 | FR-68, FR-74, NFR-22, SC-09, AI-35, AC-45 | Responsive existing pages | Verified tagged baseline and candidate available; compare same browser/viewport. | Repeat baseline comparison at all seven SRS widths. | Existing responsive behavior preserved. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |
| TC-REG-012 | FR-75, NFR-53, DR-10, SC-06, SC-07, SC-08, SC-09, AC-46 | Baseline and repository preservation | Repository access and original archive; execute before implementation and repeat before submission. | Identify final Assignment 1 commit; inspect local tag and remote GitHub tag (including dereferenced commit if annotated); compare original ZIP hash and Assignment 1 docs against preserved copies; inspect git diff and remote identity. | Remote tag points to verified final commit; original ZIP and docs unchanged; same repo; unrelated files unchanged or separately documented. | User confirmed Pass in Batch 8; expected outcome reported met. Individual observations/sub-runs not recorded. Evidence: E08 | Pass |

### 5.12 STD — 4 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-STD-001 | NFR-64, NFR-66, AI-32, AI-34, DR-08, SC-11, AC-42, AC-44 | W3C HTML | Fresh page; JavaScript enabled; fictional data only. | Upload candidate alumni.html to https://validator.w3.org/; record date, input revision, errors/warnings and screenshot. | Zero errors; warnings resolved or justified. | Screenshot shows alumni.html, Nu HTML Checker vnu 26.11.26, zero errors and warnings. Evidence: E09 | Pass |
| TC-STD-002 | NFR-65, NFR-66, AI-33, AI-34, DR-08, SC-11, AC-43, AC-44 | W3C CSS | Fresh page; JavaScript enabled; fictional data only. | Upload style.css to https://jigsaw.w3.org/css-validator/; record selected profile, date, revision, errors/warnings and screenshot. | Zero errors under recorded profile; warnings resolved or justified. | Screenshot shows style.css, CSS Level 3 + SVG, zero errors and three same-color warnings; justified in section 6. Evidence: E10 | Pass |
| TC-STD-003 | NFR-46, NFR-47, NFR-52, NFR-67, SC-01, SC-10, AC-39, AC-44 | HTML/CSS coding review | Fresh page; JavaScript enabled; fictional data only. | Inspect doctype, UTF-8, lang, viewport, lowercase tags/attributes, double quotes, two-space indentation, unique IDs, semantic labels, external CSS/JS, no inline styles/events, CSS naming, spacing, comments, unnecessary IDs/important, fluid layout and Flexbox/Grid where appropriate. | Conforms to SRS section 9 and applicable Google HTML/CSS guide; deviations documented. | Prior coding review accepted; supplied HTML has 34 unique IDs, 11 controls, 10 required; external resources and semantic structure. CSS warnings justified. Evidence: E11, E09–E10 | Pass |
| TC-STD-004 | NFR-48, NFR-49, NFR-50, NFR-51, NFR-52, NFR-53, NFR-68, SC-10, AC-39, AC-44 | JavaScript quality and scope | Fresh page; JavaScript enabled; fictional data only. | Inspect addEventListener, const/let, names, comments, safe DOM, guard clauses, duplication, globals, dependencies, validation before success, submission prevention and alumni-only diff; load pages lacking form. | Readable scoped logic; no unnecessary duplication or unrelated changes; absent elements handled safely. | Prior coding review accepted; Node syntax check repeated successfully on supplied JS; guard and local validation review supported by prior browser confirmations. Evidence: E11, E01, E07–E08 | Pass |

### 5.13 DOC — 9 cases

| Test ID | SRS IDs | Objective | Preconditions | Planned actions | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|---|---|---|
| TC-DOC-001 | AI-01, AI-02, AI-03, AI-04, DR-04, AC-47 | SRS verification | Fresh page; JavaScript enabled; fictional data only. | Review approved SRS and transcript against assignment and gap analysis. | Formal separate SRS covers required categories and distinguishes M/E/P/C. | Prior document review accepted finalized SRS and classifications. Evidence: E12 | Pass |
| TC-DOC-002 | AI-05, AI-06, AI-07, AI-08, AI-09, AI-10, DR-05, AC-47 | Test plan verification | Fresh page; JavaScript enabled; fictional data only. | Review this plan against SRS; check unique IDs, all fields, expected/actual/status columns, initial Not Tested, RTM and coverage categories. | Complete traceable plan; no fabricated execution. | 168 unique test rows and original Not Tested statuses confirmed in supplied plan; prior traceability review accepted. Evidence: E12 | Pass |
| TC-DOC-003 | AI-11, AI-12, AI-13, AI-14, AI-15, NFR-54, DR-09, AC-48 | Incremental workflow | Fresh page; JavaScript enabled; fictional data only. | Review transcript and Git commits for staged prompts, reuse, review before incorporation and iterative debugging. | Stages and refinements traceable; incremental commits identifiable. | 13 post-baseline commits in supplied log and staged development conversation support incremental workflow. Evidence: E12–E13 | Pass |
| TC-DOC-004 | AI-16, AI-17, AI-18, AI-19, AI-20, AI-21, AI-22, DR-06, AC-48 | Conformance audit | Fresh page; JavaScript enabled; fictional data only. | Inspect CONFORMANCE_AUDIT.md and transcript; verify updated source, SRS and plan supplied; review coverage, gaps, counter, validation, accessibility, responsive and standards findings; inspect defect status. | Audit distinguishes static findings from browser evidence and documents missing/partial requirements and resolutions. | Original audit and appended section 20 present; prior review accepted. Evidence: E12 | Pass |
| TC-DOC-005 | AI-23, AI-24, AI-25, AI-26, AI-27, AI-28, DR-07, AC-49 | Code walkthrough | Fresh page; JavaScript enabled; fictional data only. | Inspect CODE_WALKTHROUGH.md and transcript for HTML controls, CSS selectors/responsiveness, JS events, validation, counter, success/reset and no actual submission. | All topics explained accurately. | Walkthrough topics reviewed; user confirms correction of two CSS line references. Supplied copy still has old references; corrected copy not independently inspected. Evidence: E12, E14 | Pass |
| TC-DOC-006 | AI-29, AI-30, AI-31, AI-32, AI-33, AI-34, AI-35, AI-36, DR-03, DR-08, SC-11, AC-50 | Manual evidence and report | Fresh page; JavaScript enabled; fictional data only. | Inspect TESTING_REPORT.md, screenshots, browser/viewport records, actual results, defects and retests; match evidence to candidate commit and cases. | Executed results supported by evidence; W3C results and regression recorded; no AI-only claims as manual passes. | User confirmed manual review of the testing report and supporting evidence; case passed for the verified candidate. Historical evidence limitations remain. Evidence: E01–E15 | Pass |
| TC-DOC-007 | DR-01, AC-51 | Final ZIP | Fresh page; JavaScript enabled; fictional data only. | Extract final archive into clean folder; compare manifest to candidate; open website and check assets and core workflow. | Complete updated source/assets; works after extraction; no confidential data. | User confirmed final ZIP creation and successful testing after extraction; case passed for the verified candidate. Archive and manifest not independently inspected. Evidence: E15 | Pass |
| TC-DOC-008 | DR-02, AC-51 | Public transcript | Fresh page; JavaScript enabled; fictional data only. | Open share link in signed-out/private browser; review completeness and privacy. | Accessible complete AI workflow; no secrets or real alumni data. | User confirmed manual verification of public AI conversation links and passing the case. Links and individual verification observations not independently supplied. Evidence: E15 | Pass |
| TC-DOC-009 | DR-11, AC-46 | Final revision | Fresh page; JavaScript enabled; fictional data only. | Record final candidate commit and remote availability; if optional assignment-2-final tag used verify target. | Final revision reproducible; optional tag not required. | User confirmed manual verification of the candidate Git revision and passing the case. New candidate hash and live remote query not independently supplied. Evidence: E13, E15 | Pass |

### 5.14 Requirements traceability — execution status

The following reverse execution matrix is derived from the unchanged SRS mappings in the 168 individual records above. Pass indicates recorded test outcomes, not independent certification of each requirement. The original test plan RTM remains unchanged.

| Requirement | Linked test cases | Recorded status |
|---|---|---|
| AC-01 | TC-FUN-001 | All linked cases Pass |
| AC-02 | TC-FUN-001 | All linked cases Pass |
| AC-03 | TC-FUN-002 | All linked cases Pass |
| AC-04 | TC-FUN-002, TC-VAL-066, TC-VAL-067 | All linked cases Pass |
| AC-05 | TC-FUN-005 | All linked cases Pass |
| AC-06 | TC-FUN-002, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | All linked cases Pass |
| AC-07 | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-VAL-005, TC-VAL-006, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-011, TC-VAL-012, TC-VAL-013, TC-VAL-014, TC-VAL-015, TC-VAL-016, TC-VAL-017 | All linked cases Pass |
| AC-08 | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023 | All linked cases Pass |
| AC-09 | TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | All linked cases Pass |
| AC-10 | TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | All linked cases Pass |
| AC-11 | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | All linked cases Pass |
| AC-12 | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | All linked cases Pass |
| AC-13 | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | All linked cases Pass |
| AC-14 | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | All linked cases Pass |
| AC-15 | TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077 | All linked cases Pass |
| AC-16 | TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | All linked cases Pass |
| AC-17 | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023, TC-VAL-065, TC-VAL-097 | All linked cases Pass |
| AC-18 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| AC-19 | TC-FUN-003, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| AC-20 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-009 | All linked cases Pass |
| AC-21 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| AC-22 | TC-CNT-010, TC-CNT-011, TC-CNT-013 | All linked cases Pass |
| AC-23 | TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| AC-24 | TC-CNT-011, TC-CNT-012, TC-CNT-013 | All linked cases Pass |
| AC-25 | TC-ERR-001, TC-ERR-005 | All linked cases Pass |
| AC-26 | TC-ERR-001 | All linked cases Pass |
| AC-27 | TC-ERR-002 | All linked cases Pass |
| AC-28 | TC-ERR-001, TC-ERR-002 | All linked cases Pass |
| AC-29 | TC-FUN-004 | All linked cases Pass |
| AC-30 | TC-ERR-003 | All linked cases Pass |
| AC-31 | TC-CNT-014, TC-ERR-004 | All linked cases Pass |
| AC-32 | TC-UI-001 | All linked cases Pass |
| AC-33 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | All linked cases Pass |
| AC-34 | TC-ACC-001, TC-ACC-002 | All linked cases Pass |
| AC-35 | TC-ACC-003 | All linked cases Pass |
| AC-36 | TC-ACC-002, TC-ACC-004 | All linked cases Pass |
| AC-37 | TC-PERF-001 | All linked cases Pass |
| AC-38 | TC-COMP-001, TC-COMP-002, TC-COMP-003 | All linked cases Pass |
| AC-39 | TC-STD-003, TC-STD-004 | All linked cases Pass |
| AC-40 | TC-PRIV-001, TC-PRIV-002 | All linked cases Pass |
| AC-41 | TC-FUN-003, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005, TC-PRIV-006 | All linked cases Pass |
| AC-42 | TC-STD-001 | All linked cases Pass |
| AC-43 | TC-STD-002 | All linked cases Pass |
| AC-44 | TC-STD-001, TC-STD-002, TC-STD-003, TC-STD-004 | All linked cases Pass |
| AC-45 | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011 | All linked cases Pass |
| AC-46 | TC-REG-012, TC-DOC-009 | All linked cases Pass |
| AC-47 | TC-DOC-001, TC-DOC-002 | All linked cases Pass |
| AC-48 | TC-DOC-003, TC-DOC-004 | All linked cases Pass |
| AC-49 | TC-DOC-005 | All linked cases Pass |
| AC-50 | TC-DOC-006 | All linked cases Pass |
| AC-51 | TC-DOC-007, TC-DOC-008 | All linked cases Pass |
| AI-01 | TC-DOC-001 | All linked cases Pass |
| AI-02 | TC-DOC-001 | All linked cases Pass |
| AI-03 | TC-DOC-001 | All linked cases Pass |
| AI-04 | TC-DOC-001 | All linked cases Pass |
| AI-05 | TC-DOC-002 | All linked cases Pass |
| AI-06 | TC-DOC-002 | All linked cases Pass |
| AI-07 | TC-DOC-002 | All linked cases Pass |
| AI-08 | TC-DOC-002 | All linked cases Pass |
| AI-09 | TC-DOC-002 | All linked cases Pass |
| AI-10 | TC-DOC-002 | All linked cases Pass |
| AI-11 | TC-DOC-003 | All linked cases Pass |
| AI-12 | TC-DOC-003 | All linked cases Pass |
| AI-13 | TC-DOC-003 | All linked cases Pass |
| AI-14 | TC-DOC-003 | All linked cases Pass |
| AI-15 | TC-DOC-003 | All linked cases Pass |
| AI-16 | TC-DOC-004 | All linked cases Pass |
| AI-17 | TC-DOC-004 | All linked cases Pass |
| AI-18 | TC-DOC-004 | All linked cases Pass |
| AI-19 | TC-DOC-004 | All linked cases Pass |
| AI-20 | TC-DOC-004 | All linked cases Pass |
| AI-21 | TC-DOC-004 | All linked cases Pass |
| AI-22 | TC-DOC-004 | All linked cases Pass |
| AI-23 | TC-DOC-005 | All linked cases Pass |
| AI-24 | TC-DOC-005 | All linked cases Pass |
| AI-25 | TC-DOC-005 | All linked cases Pass |
| AI-26 | TC-DOC-005 | All linked cases Pass |
| AI-27 | TC-DOC-005 | All linked cases Pass |
| AI-28 | TC-DOC-005 | All linked cases Pass |
| AI-29 | TC-DOC-006 | All linked cases Pass |
| AI-30 | TC-DOC-006 | All linked cases Pass |
| AI-31 | TC-DOC-006 | All linked cases Pass |
| AI-32 | TC-STD-001, TC-DOC-006 | All linked cases Pass |
| AI-33 | TC-STD-002, TC-DOC-006 | All linked cases Pass |
| AI-34 | TC-STD-001, TC-STD-002, TC-DOC-006 | All linked cases Pass |
| AI-35 | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011, TC-DOC-006 | All linked cases Pass |
| AI-36 | TC-DOC-006 | All linked cases Pass |
| DR-01 | TC-DOC-007 | All linked cases Pass |
| DR-02 | TC-DOC-008 | All linked cases Pass |
| DR-03 | TC-DOC-006 | All linked cases Pass |
| DR-04 | TC-DOC-001 | All linked cases Pass |
| DR-05 | TC-DOC-002 | All linked cases Pass |
| DR-06 | TC-DOC-004 | All linked cases Pass |
| DR-07 | TC-DOC-005 | All linked cases Pass |
| DR-08 | TC-STD-001, TC-STD-002, TC-DOC-006 | All linked cases Pass |
| DR-09 | TC-DOC-003 | All linked cases Pass |
| DR-10 | TC-REG-012 | All linked cases Pass |
| DR-11 | TC-DOC-009 | All linked cases Pass |
| FR-01 | TC-FUN-001 | All linked cases Pass |
| FR-02 | TC-FUN-001 | All linked cases Pass |
| FR-03 | TC-FUN-001 | All linked cases Pass |
| FR-04 | TC-FUN-001 | All linked cases Pass |
| FR-05 | TC-FUN-001, TC-ACC-002 | All linked cases Pass |
| FR-06 | TC-FUN-001 | All linked cases Pass |
| FR-07 | TC-FUN-002, TC-ACC-002 | All linked cases Pass |
| FR-08 | TC-FUN-002, TC-REG-006 | All linked cases Pass |
| FR-09 | TC-FUN-002, TC-VAL-001, TC-VAL-002, TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023 | All linked cases Pass |
| FR-10 | TC-FUN-002, TC-VAL-003, TC-VAL-004, TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | All linked cases Pass |
| FR-11 | TC-FUN-002, TC-VAL-005, TC-VAL-006, TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | All linked cases Pass |
| FR-12 | TC-FUN-002, TC-VAL-007, TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | All linked cases Pass |
| FR-13 | TC-FUN-002, TC-VAL-008, TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | All linked cases Pass |
| FR-14 | TC-FUN-002, TC-VAL-009, TC-VAL-066 | All linked cases Pass |
| FR-15 | TC-FUN-002, TC-VAL-066 | All linked cases Pass |
| FR-16 | TC-FUN-002, TC-VAL-009, TC-VAL-066, TC-VAL-067 | All linked cases Pass |
| FR-17 | TC-FUN-002, TC-VAL-010, TC-VAL-011, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072 | All linked cases Pass |
| FR-18 | TC-FUN-002, TC-VAL-012, TC-VAL-013, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077 | All linked cases Pass |
| FR-19 | TC-FUN-002, TC-VAL-014, TC-VAL-015, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | All linked cases Pass |
| FR-20 | TC-FUN-005 | All linked cases Pass |
| FR-21 | TC-FUN-002, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | All linked cases Pass |
| FR-22 | TC-FUN-002, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | All linked cases Pass |
| FR-23 | TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | All linked cases Pass |
| FR-24 | TC-FUN-002, TC-VAL-016, TC-VAL-017 | All linked cases Pass |
| FR-25 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-010, TC-CNT-013 | All linked cases Pass |
| FR-26 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-012 | All linked cases Pass |
| FR-27 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-012 | All linked cases Pass |
| FR-28 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-009, TC-CNT-012 | All linked cases Pass |
| FR-29 | TC-FUN-003, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| FR-30 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-010 | All linked cases Pass |
| FR-31 | TC-CNT-014 | All linked cases Pass |
| FR-32 | TC-CNT-011, TC-CNT-013 | All linked cases Pass |
| FR-33 | TC-VAL-016, TC-VAL-017, TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| FR-34 | TC-FUN-004 | All linked cases Pass |
| FR-35 | TC-VAL-001, TC-VAL-003, TC-VAL-005, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-012, TC-VAL-014, TC-VAL-016 | All linked cases Pass |
| FR-36 | TC-VAL-002, TC-VAL-004, TC-VAL-006, TC-VAL-011, TC-VAL-013, TC-VAL-015, TC-VAL-017 | All linked cases Pass |
| FR-37 | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082 | All linked cases Pass |
| FR-38 | TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | All linked cases Pass |
| FR-39 | TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | All linked cases Pass |
| FR-40 | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054, TC-VAL-065 | All linked cases Pass |
| FR-41 | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064, TC-VAL-065 | All linked cases Pass |
| FR-42 | TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-011, TC-CNT-013 | All linked cases Pass |
| FR-43 | TC-VAL-014, TC-VAL-015, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | All linked cases Pass |
| FR-44 | TC-VAL-065, TC-VAL-097 | All linked cases Pass |
| FR-45 | TC-FUN-004, TC-PRIV-001, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005, TC-PRIV-006 | All linked cases Pass |
| FR-46 | TC-ERR-001 | All linked cases Pass |
| FR-47 | TC-ERR-001 | All linked cases Pass |
| FR-48 | TC-ERR-001, TC-ERR-005 | All linked cases Pass |
| FR-49 | TC-ERR-001, TC-ACC-003 | All linked cases Pass |
| FR-50 | TC-ERR-001 | All linked cases Pass |
| FR-51 | TC-ERR-002 | All linked cases Pass |
| FR-52 | TC-ERR-002, TC-ERR-005 | All linked cases Pass |
| FR-53 | TC-ERR-001 | All linked cases Pass |
| FR-54 | TC-ERR-001, TC-ERR-002 | All linked cases Pass |
| FR-55 | TC-FUN-002, TC-FUN-004 | All linked cases Pass |
| FR-56 | TC-FUN-004 | All linked cases Pass |
| FR-57 | TC-FUN-004, TC-PRIV-001 | All linked cases Pass |
| FR-58 | TC-FUN-004 | All linked cases Pass |
| FR-59 | TC-ERR-003 | All linked cases Pass |
| FR-60 | TC-FUN-002, TC-ERR-004 | All linked cases Pass |
| FR-61 | TC-ERR-004 | All linked cases Pass |
| FR-62 | TC-CNT-014, TC-ERR-004 | All linked cases Pass |
| FR-63 | TC-ERR-004 | All linked cases Pass |
| FR-64 | TC-ERR-004 | All linked cases Pass |
| FR-65 | TC-FUN-003, TC-ERR-004 | All linked cases Pass |
| FR-66 | TC-ERR-004, TC-PRIV-001 | All linked cases Pass |
| FR-67 | TC-REG-006 | All linked cases Pass |
| FR-68 | TC-REG-001, TC-REG-002, TC-REG-007, TC-REG-011 | All linked cases Pass |
| FR-69 | TC-REG-004 | All linked cases Pass |
| FR-70 | TC-REG-003 | All linked cases Pass |
| FR-71 | TC-REG-005 | All linked cases Pass |
| FR-72 | TC-REG-006 | All linked cases Pass |
| FR-73 | TC-REG-009, TC-REG-010 | All linked cases Pass |
| FR-74 | TC-REG-008, TC-REG-011 | All linked cases Pass |
| FR-75 | TC-REG-012 | All linked cases Pass |
| NFR-01 | TC-UI-001 | All linked cases Pass |
| NFR-02 | TC-FUN-001, TC-UI-001 | All linked cases Pass |
| NFR-03 | TC-FUN-002, TC-UI-001, TC-ACC-002 | All linked cases Pass |
| NFR-04 | TC-UI-001 | All linked cases Pass |
| NFR-05 | TC-UI-001 | All linked cases Pass |
| NFR-06 | TC-ERR-002 | All linked cases Pass |
| NFR-07 | TC-ERR-001 | All linked cases Pass |
| NFR-08 | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| NFR-09 | TC-UI-001 | All linked cases Pass |
| NFR-10 | TC-UI-001 | All linked cases Pass |
| NFR-11 | TC-UI-001 | All linked cases Pass |
| NFR-12 | TC-UI-001 | All linked cases Pass |
| NFR-13 | TC-ERR-001, TC-ERR-005, TC-UI-001 | All linked cases Pass |
| NFR-14 | TC-UI-001 | All linked cases Pass |
| NFR-15 | TC-UI-001 | All linked cases Pass |
| NFR-16 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | All linked cases Pass |
| NFR-17 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | All linked cases Pass |
| NFR-18 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | All linked cases Pass |
| NFR-19 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | All linked cases Pass |
| NFR-20 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | All linked cases Pass |
| NFR-21 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | All linked cases Pass |
| NFR-22 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007, TC-REG-011 | All linked cases Pass |
| NFR-23 | TC-FUN-001 | All linked cases Pass |
| NFR-24 | TC-FUN-001, TC-ACC-002 | All linked cases Pass |
| NFR-25 | TC-FUN-001, TC-ACC-002 | All linked cases Pass |
| NFR-26 | TC-ACC-001 | All linked cases Pass |
| NFR-27 | TC-ACC-001 | All linked cases Pass |
| NFR-28 | TC-ACC-003 | All linked cases Pass |
| NFR-29 | TC-ERR-001, TC-ACC-003 | All linked cases Pass |
| NFR-30 | TC-ERR-001, TC-ACC-003 | All linked cases Pass |
| NFR-31 | TC-ACC-003 | All linked cases Pass |
| NFR-32 | TC-ACC-003 | All linked cases Pass |
| NFR-33 | TC-ACC-004 | All linked cases Pass |
| NFR-34 | TC-ACC-002 | All linked cases Pass |
| NFR-35 | TC-ACC-004 | All linked cases Pass |
| NFR-36 | TC-ACC-001 | All linked cases Pass |
| NFR-37 | TC-ERR-001, TC-ACC-001 | All linked cases Pass |
| NFR-38 | TC-CNT-009, TC-PERF-001 | All linked cases Pass |
| NFR-39 | TC-FUN-004, TC-PERF-001 | All linked cases Pass |
| NFR-40 | TC-FUN-004, TC-ERR-004, TC-PERF-001 | All linked cases Pass |
| NFR-41 | TC-PERF-001 | All linked cases Pass |
| NFR-42 | TC-COMP-001, TC-COMP-002, TC-COMP-003 | All linked cases Pass |
| NFR-43 | TC-COMP-001, TC-COMP-002, TC-COMP-003 | All linked cases Pass |
| NFR-44 | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007, TC-COMP-001, TC-COMP-002, TC-COMP-003 | All linked cases Pass |
| NFR-45 | TC-COMP-001, TC-COMP-002, TC-COMP-003 | All linked cases Pass |
| NFR-46 | TC-STD-003 | All linked cases Pass |
| NFR-47 | TC-STD-003 | All linked cases Pass |
| NFR-48 | TC-STD-004 | All linked cases Pass |
| NFR-49 | TC-STD-004 | All linked cases Pass |
| NFR-50 | TC-STD-004 | All linked cases Pass |
| NFR-51 | TC-VAL-097, TC-STD-004 | All linked cases Pass |
| NFR-52 | TC-STD-003, TC-STD-004 | All linked cases Pass |
| NFR-53 | TC-REG-012, TC-STD-004 | All linked cases Pass |
| NFR-54 | TC-DOC-003 | All linked cases Pass |
| NFR-55 | TC-PRIV-001 | All linked cases Pass |
| NFR-56 | TC-PRIV-001 | All linked cases Pass |
| NFR-57 | TC-PRIV-001 | All linked cases Pass |
| NFR-58 | TC-PRIV-001 | All linked cases Pass |
| NFR-59 | TC-PRIV-001 | All linked cases Pass |
| NFR-60 | TC-PRIV-001 | All linked cases Pass |
| NFR-61 | TC-PRIV-002 | All linked cases Pass |
| NFR-62 | TC-PRIV-001 | All linked cases Pass |
| NFR-63 | TC-FUN-003, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005, TC-PRIV-006 | All linked cases Pass |
| NFR-64 | TC-STD-001 | All linked cases Pass |
| NFR-65 | TC-STD-002 | All linked cases Pass |
| NFR-66 | TC-STD-001, TC-STD-002 | All linked cases Pass |
| NFR-67 | TC-STD-003 | All linked cases Pass |
| NFR-68 | TC-STD-004 | All linked cases Pass |
| SC-01 | TC-STD-003 | All linked cases Pass |
| SC-02 | TC-PRIV-001 | All linked cases Pass |
| SC-03 | TC-PRIV-001 | All linked cases Pass |
| SC-04 | TC-PRIV-001, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005 | All linked cases Pass |
| SC-05 | TC-CNT-010, TC-CNT-011 | All linked cases Pass |
| SC-06 | TC-REG-012 | All linked cases Pass |
| SC-07 | TC-REG-012 | All linked cases Pass |
| SC-08 | TC-REG-012 | All linked cases Pass |
| SC-09 | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011, TC-REG-012 | All linked cases Pass |
| SC-10 | TC-STD-003, TC-STD-004 | All linked cases Pass |
| SC-11 | TC-STD-001, TC-STD-002, TC-DOC-006 | All linked cases Pass |
| VR-01 | TC-VAL-001, TC-VAL-003, TC-VAL-005, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-012, TC-VAL-014, TC-VAL-016 | All linked cases Pass |
| VR-02 | TC-VAL-002, TC-VAL-004, TC-VAL-006, TC-VAL-011, TC-VAL-013, TC-VAL-015, TC-VAL-017 | All linked cases Pass |
| VR-03 | TC-VAL-001, TC-VAL-002, TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023 | All linked cases Pass |
| VR-04 | TC-VAL-003, TC-VAL-004, TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | All linked cases Pass |
| VR-05 | TC-VAL-005, TC-VAL-006, TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | All linked cases Pass |
| VR-06 | TC-VAL-007 | All linked cases Pass |
| VR-07 | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | All linked cases Pass |
| VR-08 | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054, TC-VAL-065 | All linked cases Pass |
| VR-09 | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | All linked cases Pass |
| VR-10 | TC-VAL-008, TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | All linked cases Pass |
| VR-11 | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064, TC-VAL-065 | All linked cases Pass |
| VR-12 | TC-VAL-009, TC-VAL-066, TC-VAL-067 | All linked cases Pass |
| VR-13 | TC-VAL-010, TC-VAL-011, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072 | All linked cases Pass |
| VR-14 | TC-VAL-012, TC-VAL-013, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077 | All linked cases Pass |
| VR-15 | TC-VAL-014, TC-VAL-015, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | All linked cases Pass |
| VR-16 | TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | All linked cases Pass |
| VR-17 | TC-VAL-016, TC-VAL-017, TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | All linked cases Pass |
| VR-18 | TC-CNT-011, TC-CNT-013 | All linked cases Pass |
| VR-19 | TC-FUN-004 | All linked cases Pass |
| VR-20 | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023, TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036, TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091, TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-VAL-097, TC-CNT-012 | All linked cases Pass |


## 6. Standards validation and warning disposition

| Test | Tool / profile | Errors | Warnings | Evidence | Disposition |
|---|---|---:|---:|---|---|
| TC-STD-001 | Nu HTML Checker vnu 26.11.26 | 0 | 0 | E09 | Pass |
| TC-STD-002 | W3C CSS Validator, CSS Level 3 + SVG | 0 | 3 | E10 | Pass with justified warnings |

| Screenshot line | Selector | Background and border | Disposition |
|---:|---|---|---|
| 1166 | `.alumni-form button[type="submit"]` | `#14345a` | Retain |
| 1172 | `.alumni-form button[type="submit"]:not(:disabled):hover` | `#234f7b` | Retain |
| 1177 | `.alumni-form button[type="submit"]:not(:disabled):active` | `#102846` | Retain |

All warnings concern identical background and border colors. The supplied stylesheet confirms these declarations. This is a solid-button styling choice, not a syntax error; matching border and background does not itself imply insufficient text contrast. Batch 6 contrast and keyboard focus checks were reported passed. No source change is necessary solely to suppress these warnings. The screenshots show filenames, not hashes or commit IDs. Suggested repository evidence paths (user reports saving; not independently verified): `screenshots/W3C_HTML_Validation.png`, `screenshots/W3C_CSS_Validation.png`, `screenshots/W3C_CSS_Warnings.png` under assignment-2.

## 7. Defect and post-audit retest register

The original audit remains historical: 150 Compliant, 19 Partially Compliant, 7 Non-Compliant, 96 Not Verifiable across 272 identifiers. Section 20 records source remediation of F-01–F-06, retained advisories F-07/F-09 and open F-08. The following dispositions update execution reporting only, not those historical counts.

| Finding | Severity | Corrective action / decision | Original retest references | Current disposition |
|---|---|---|---|---|
| F-01 | Critical | Initially disabled Register, guarded readiness, submission prevention and CSP form-action none | FUN-003/004, PRIV-001/003–006 | Source corrected; retests user-reported Pass |
| F-02 | High | Scoped element/type guards and fail-closed initialization | FUN-003, PRIV-005/006, COMP-001–003 | Source corrected; retests user-reported Pass |
| F-03 | Medium | Faculty joining-date format/calendar guard | REG-003/005/006 | Source corrected; retests user-reported Pass |
| F-04 | Low | Guard missing dropdown parent | REG-006 | Source corrected; retest user-reported Pass |
| F-05 | Low | Persistent demonstration notice and no-JS notice | PRIV-001, FUN-004 | Source corrected; retests user-reported Pass |
| F-06 | Low | Targeted whitespace and selector formatting | STD-003 | Prior static review Pass |
| F-07 | Informational | Retain existing navigation styling; no redesign | RES-004/007, ACC-001 | Advisory retained; tests reported Pass |
| F-08 | Informational | Record formal execution and validator evidence separately | STD-001/002, DOC-006 | Formal execution and validator evidence recorded; DOC-006 user-confirmed Pass; historical evidence limitations retained |
| F-09 | Informational | Retain existing error revalidation policy | ERR-003/004 (audit references); ERR-002/005 also relevant | Advisory retained; tests reported Pass |

Earlier Stage 6 duplicate validation implementation was corrected before the final audit; subsequent validation cases reported Pass. No new failed formal case was reported. Walkthrough line-reference issue: 600px C1233–1301 → C1233–1294; 375px C1305–1325 → C1298–1315. User confirmed correction; revised file not inspected. No website retest required solely for reference edits. No claim of independently observed critical/high defect closure is made.

## 8. Incremental development and baseline preservation

Supplied Git log lists 13 commits after `assignment-1-final`:

| Commit | Stage |
|---|---|
| 89c4678 | Formal SRS |
| d888ea0 | SRS-based test plan |
| 95ff481 | Semantic HTML form |
| 519dbc6 | Fields and constraints |
| cd5be28 | Responsive styling |
| b3a304f | Feedback structure |
| 08ea50a | Live counter |
| bbb3cac | Comprehensive validation |
| 68fb36e | Accessible errors and success |
| 1922bed | Conformance audit |
| b3e20c4 | Corrective implementation |
| 70d9677 | Code walkthrough |
| 99926ab | Code walkthrough update |

The supplied log shows HEAD, main, origin/main and origin/HEAD at 99926ab and local baseline tag at cf70e4a. This supports DOC-003 but does not prove live remote state. REG-012 is user-reported Pass, including baseline/ZIP/document preservation; original archive hashes, remote tag query and diff output were not independently supplied. The duplicate walkthrough commit message is not a defect. The later submission candidate revision was user-confirmed verified (E15); its exact hash was not supplied. Reverify the revision after this documentation update.

## 9. Final deliverable verification and exit criteria

| Case | Confirmed manual verification | Recorded status |
|---|---|---|
| TC-DOC-006 | Testing report and evidence checked | Pass |
| TC-DOC-007 | Final ZIP created and tested after extraction | Pass |
| TC-DOC-008 | Public AI conversation links verified | Pass |
| TC-DOC-009 | Candidate Git revision verified | Pass |

All four results are based on the user's explicit confirmation (E15), not independent inspection. No new evidence files, links, timestamps or commit hashes are asserted.

### Post-update submission integrity

These results apply to the previously verified submission candidate. Replacing README.md and TESTING_REPORT.md changes the documentation snapshot. Commit and push the updated documents, record the actual new revision and verify remote availability. Recreate the final ZIP from that revision, extract it into a clean directory, compare its contents and verify the website and updated documentation. Ensure the public conversation links remain accessible. Record the final package/revision verification separately to avoid circular self-identification. These are post-update release checks, not additional test cases or a reversal of the recorded passes. Repeat affected tests if source changes.

## 10. Conclusion and approval

All 168 cases are recorded as Pass on the stated evidence basis, with zero Pending and zero reported Fail (100% recorded pass rate). Both validators show zero errors; CSS warnings are justified. Source remediation and regression are supported by static evidence and user confirmations, not independently witnessed runtime execution. The verified candidate has completed all recorded test cases. Submission of the updated documentation snapshot requires ZIP and Git revision reverification as described in Section 9; evidence limitations remain. The approved SRS, original test plan, audit and source files remain unchanged by report generation.

Student review: user-confirmed for the verified candidate. Instructor approval and signatures are not asserted.