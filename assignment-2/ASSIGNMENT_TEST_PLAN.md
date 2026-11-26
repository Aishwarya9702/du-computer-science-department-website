# Software Test and Validation Plan

## Assignment 2: Designing and Validating an Alumni Registration Form Using AI-Assisted Development

**Department of Computer Science — University of Delhi**  
**M.Sc. Computer Science | Web Development and Prompt Engineering**

## 1. Document information and overview

| Attribute | Value |
|---|---|
| Version | 1.0 |
| Date | 26 November 2026 |
| Status | Reviewed and Finalized — Execution Pending |
| Requirements baseline | Finalized SRS Version 1.0 (uploaded SRS(7).md) |
| Location | assignment-2/ASSIGNMENT_TEST_PLAN.md |
| Implementation status | Not Started |
| Testing report | assignment-2/TESTING_REPORT.md |
| Evidence directory | assignment-2/screenshots/ |

### 1.1 Version history

| Version | Date | Description |
|---|---|---|
| 1.0 | 26 November 2026 | Initial SRS-derived test plan; no execution results recorded. |

### 1.2 Objectives and scope

Verify all approved functional, non-functional, validation, workflow, deliverable, constraint and acceptance requirements; detect boundary and negative-input defects; verify accessibility, responsive behavior, privacy and preservation of Assignment 1. The scope includes alumni.html, shared style.css and script.js, the complete website for regression, repository history and academic deliverables. Backend, authentication, database, real registration, ownership verification and production security certification are out of scope.

### 1.3 Methodology and environment

Use black-box equivalence partitioning, boundary-value analysis, negative testing, source inspection, browser developer tools, accessibility inspection, regression comparison, W3C validation and document review. AI conformance review is static evidence, not a substitute for browser execution. Test the same identified candidate commit throughout a run; repeat affected cases after fixes. Use a local static website, clean browser profile, current stable Chrome, Edge and Firefox, desktop and mobile browser or device emulation, DevTools Network/Console/Elements/Accessibility/Storage/Performance panels, Git/GitHub, W3C validators and an available screen reader. Record actual OS, browser versions, viewport, zoom, date, candidate commit and tools at execution; none are assumed tested.

### 1.4 Entry and exit criteria

Before implementation: finalized SRS, test plan and verified remote assignment-1-final tag pointing to the final Assignment 1 commit; preserve original ZIP and documents. The SRS records tag verification as Completed, but independent evidence must be retained. Before runtime execution: candidate implementation available, static resources accessible, baseline available, fictional fixtures prepared and environment recorded. Documentation and baseline checks may be performed earlier. Exit: all applicable approved requirements verified, mandatory acceptance criteria satisfied, no unresolved critical/high defects, manual and regression evidence recorded, zero W3C HTML/CSS errors, warnings and remaining minor deviations documented, final ZIP/transcript/report prepared. Do not treat unexecuted or blocked cases as passes.

### 1.5 Execution conventions

Each case starts independently from a fresh page unless otherwise specified. B means populate the valid baseline below; replace only the named field. A(n) means exactly n repetitions of ASCII `a` (A(0) is empty). D is the browser's current local date; Y its current local year; record both at execution. D+1 means next calendar day. For each multi-value or multi-control case, record each sub-run separately in the report; overall Pass requires all sub-runs to pass. For invalid cases, confirm no success and no data transmission. Native date/number/email controls may sanitize input: record attempted input and actual DOM value, and distinguish browser prevention from JS rejection. For invalid dates that cannot be represented in the native control, record rejection/sanitization and inspect JS calendar validation; do not claim an impossible DOM value was submitted. For programmatic tests, use DevTools only on disposable local pages, set the relevant DOM value and dispatch input where specified, then use normal Register; restore by reloading. Do not alter repository source or disable the validation logic to force a pass. For native maxlength tests use actual typing/paste, not DOM assignment. Evidence filenames should identify test ID, revision and run; use fictional data only.

### 1.6 Fictional baseline B

| Field | Value |
|---|---|
| Full Name | Sample Alumni |
| Email Address | alumni@example.com |
| Contact Number | 0123456789 |
| Date of Birth | 1999-06-15 |
| Academic Batch / Year of Passing | 2022 |
| Course / Department | M.Sc. Computer Science |
| Current Designation | Research Assistant |
| Organization / Company Name | Example Research Lab |
| Current Location | Delhi, India |
| About Yourself | Empty (optional) |
| Alumni Feedback | Sample feedback for the department. |

Use only synthetic fixtures; do not contact any address or number. Expected acceptance means frontend validation only. No additional age, chronology, name-character, phone-prefix or employment-verification rule is introduced.

### 1.7 Status and evidence rules

Not Tested = no execution; Pass = observed expected result; Fail = mismatch; Blocked = prerequisite unavailable; Not Applicable = documented and approved non-applicability (e.g. conditional inherited feature absent from verified baseline). Actual results are blank until execution. Record evidence and defect references in the testing report. Severity: Critical (data transmission or unusable core workflow), High (major required behavior broken), Medium (limited functional/accessibility issue), Low (minor presentation/documentation issue); assess impact rather than assigning automatically.

## 2. Test cases

All cases below are planned, not executed. SRS references are explicit; IN field specifications and sections 5–6 govern validation examples.


### 2.1 Functional and initial-state testing

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-FUN-001 | FR-01, FR-02, FR-03, FR-04, FR-05, FR-06, NFR-23, NFR-24, NFR-25, NFR-02, AC-01, AC-02 | Semantic structure | Fresh page; JavaScript enabled; fictional data only. | Inspect source and accessibility tree for header, nav, main, section, footer, form, four fieldsets and legends; inspect all 11 label associations and unique IDs. | All elements and meaningful labels/groups present. |  | Not Tested |
| TC-FUN-002 | FR-07, FR-08, FR-09, FR-10, FR-11, FR-12, FR-13, FR-14, FR-15, FR-16, FR-17, FR-18, FR-19, FR-21, FR-22, FR-24, FR-55, FR-60, NFR-03, AC-03, AC-04, AC-06 | Controls and required status | Fresh page; JavaScript enabled; fictional data only. | Inspect all 11 controls against SRS section 5; edit each; inspect required attributes, input types, five course options and both buttons. | Nine required registration fields and required feedback; optional About Yourself; correct types and options; buttons present. |  | Not Tested |
| TC-FUN-003 | FR-29, FR-65, NFR-63, AC-19, AC-41 | Initial state and initialization | Fresh page; JavaScript enabled; fictional data only. | Use clean profile; inspect initial HTML with scripts paused, then allow initialization; inspect form. | Initially Register disabled; enabled only after handlers initialize; empty controls, placeholder, 0 entered/300 remaining, no errors or success, no invalid styling; date/year bounds initialized. |  | Not Tested |
| TC-FUN-004 | FR-34, FR-45, FR-55, FR-56, FR-57, FR-58, VR-19, NFR-39, NFR-40, AC-29 | Successful validation | Fresh page; JavaScript enabled; fictional data only. | Fill baseline B; click Register; observe URL, network and values. | Success states demonstration and no submission/storage; values retained; no reload or data transmission. |  | Not Tested |
| TC-FUN-005 | FR-20, AC-05 | Professional alternatives | Fresh page; JavaScript enabled; fictional data only. | Repeat B with Student / Not applicable, Retired / Independent, Self-employed / Self-employed, Unemployed / Not applicable. | Each pair accepted. |  | Not Tested |

### 2.2 Input validation testing

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-VAL-001 | FR-09, VR-03, FR-35, VR-01, AC-07 | Full Name empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Full Name empty; Register. | Rejected; Full Name required error; no success. |  | Not Tested |
| TC-VAL-002 | FR-09, VR-03, FR-36, VR-02, AC-07 | Full Name whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with three spaces; Register. | Rejected as empty; Full Name error; no success. |  | Not Tested |
| TC-VAL-003 | FR-10, VR-04, FR-35, VR-01, AC-07 | Email Address empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Email Address empty; Register. | Rejected; Email Address required error; no success. |  | Not Tested |
| TC-VAL-004 | FR-10, VR-04, FR-36, VR-02, AC-07 | Email Address whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with three spaces; Register. | Rejected as empty; Email Address error; no success. |  | Not Tested |
| TC-VAL-005 | FR-11, VR-05, FR-35, VR-01, AC-07 | Contact Number empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Contact Number empty; Register. | Rejected; Contact Number required error; no success. |  | Not Tested |
| TC-VAL-006 | FR-11, VR-05, FR-36, VR-02, AC-07 | Contact Number whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with three spaces; Register. | Rejected as empty; Contact Number error; no success. |  | Not Tested |
| TC-VAL-007 | FR-12, VR-06, FR-35, VR-01, AC-07 | Date of Birth empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Date of Birth empty; Register. | Rejected; Date of Birth required error; no success. |  | Not Tested |
| TC-VAL-008 | FR-13, VR-10, FR-35, VR-01, AC-07 | Graduation year empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Graduation year empty; Register. | Rejected; Graduation year required error; no success. |  | Not Tested |
| TC-VAL-009 | FR-14, FR-16, VR-12, FR-35, VR-01, AC-07 | Course / Department empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Course / Department empty; Register. | Rejected; Course / Department required error; no success. |  | Not Tested |
| TC-VAL-010 | FR-17, VR-13, FR-35, VR-01, AC-07 | Current Designation empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Current Designation empty; Register. | Rejected; Current Designation required error; no success. |  | Not Tested |
| TC-VAL-011 | FR-17, VR-13, FR-36, VR-02, AC-07 | Current Designation whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with three spaces; Register. | Rejected as empty; Current Designation error; no success. |  | Not Tested |
| TC-VAL-012 | FR-18, VR-14, FR-35, VR-01, AC-07 | Organization empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Organization empty; Register. | Rejected; Organization required error; no success. |  | Not Tested |
| TC-VAL-013 | FR-18, VR-14, FR-36, VR-02, AC-07 | Organization whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with three spaces; Register. | Rejected as empty; Organization error; no success. |  | Not Tested |
| TC-VAL-014 | FR-19, FR-43, VR-15, FR-35, VR-01, AC-07 | Current Location empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Current Location empty; Register. | Rejected; Current Location required error; no success. |  | Not Tested |
| TC-VAL-015 | FR-19, FR-43, VR-15, FR-36, VR-02, AC-07 | Current Location whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with three spaces; Register. | Rejected as empty; Current Location error; no success. |  | Not Tested |
| TC-VAL-016 | FR-24, FR-33, VR-17, FR-35, VR-01, AC-07 | Alumni Feedback empty | Fresh page; JavaScript enabled; fictional data only. | Fill B except leave Alumni Feedback empty; Register. | Rejected; Alumni Feedback required error; no success. |  | Not Tested |
| TC-VAL-017 | FR-24, FR-33, VR-17, FR-36, VR-02, AC-07 | Alumni Feedback whitespace only | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with three spaces; Register. | Rejected as empty; Alumni Feedback error; no success. |  | Not Tested |
| TC-VAL-018 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Al` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Al`; Register. | Rejected; meaningful Full Name error; no success. |  | Not Tested |
| TC-VAL-019 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Ana` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Ana`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-020 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Anya` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Anya`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-021 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `  Al  ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `  Al  `; Register. | Rejected; meaningful Full Name error; no success. |  | Not Tested |
| TC-VAL-022 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `  Ana  ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `  Ana  `; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-023 | FR-09, FR-37, VR-03, VR-20, AC-08, AC-17 | Full Name — `Éva O’Neil-Sen` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Full Name with `Éva O’Neil-Sen`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-024 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `alumni@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `alumni@example.com`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-025 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a+b@sub.example.org` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a+b@sub.example.org`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-026 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `  alumni@example.com  ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `  alumni@example.com  `; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-027 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `alumniexample.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `alumniexample.com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-028 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `@example.com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-029 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `alumni@` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `alumni@`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-030 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@@example.com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-031 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@example` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@example`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-032 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@.com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-033 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@example..com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@example..com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-034 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a b@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a b@example.com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-035 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@-example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@-example.com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-036 | FR-10, FR-38, VR-04, VR-20, AC-09 | Email Address — `a@example.com,b@example.com` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Email Address with `a@example.com,b@example.com`; Register. | Rejected; meaningful Email Address error; no success. |  | Not Tested |
| TC-VAL-037 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `012345678` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `012345678`; Register. | Rejected; meaningful Contact Number error; no success. |  | Not Tested |
| TC-VAL-038 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `0123456789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `0123456789`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-039 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234567890` | Fresh page; JavaScript enabled; fictional data only. | Fill B; attempt to enter an 11-digit contact number through normal input. If HTML prevents the excessive length, use DevTools to assign the 11-digit value and attempt registration. | Normal input must not permit an invalid excessive-length value where a native restriction exists. JavaScript must reject an actual 11-digit value when the native restriction is bypassed. |  | Not Tested |
| TC-VAL-040 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234a6789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `01234a6789`; Register. | Rejected; meaningful Contact Number error; no success. |  | Not Tested |
| TC-VAL-041 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234-6789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `01234-6789`; Register. | Rejected; meaningful Contact Number error; no success. |  | Not Tested |
| TC-VAL-042 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `01234 6789` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `01234 6789`; Register. | Rejected; meaningful Contact Number error; no success. |  | Not Tested |
| TC-VAL-043 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `+911234567890` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `+911234567890`; Register. | Rejected; meaningful Contact Number error; no success. |  | Not Tested |
| TC-VAL-044 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — `０１２３４５６７８９` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with `０１２３４５６７８９`; Register. | Rejected; meaningful Contact Number error; no success. |  | Not Tested |
| TC-VAL-045 | FR-11, FR-39, VR-05, VR-20, AC-10 | Contact Number — ` 0123456789 ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Contact Number with ` 0123456789 `; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-046 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1999-06-15` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1999-06-15`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-047 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1900-01-01` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1900-01-01`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-048 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1899-12-31` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1899-12-31`; Register. | Rejected; meaningful Date of Birth error; no success. |  | Not Tested |
| TC-VAL-049 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `2000-02-29` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `2000-02-29`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-050 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `1900-02-29` (attempt) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `1900-02-29` (attempt); Register. | Rejected; meaningful Date of Birth error; no success. |  | Not Tested |
| TC-VAL-051 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `2023-02-29` (attempt) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `2023-02-29` (attempt); Register. | Rejected; meaningful Date of Birth error; no success. |  | Not Tested |
| TC-VAL-052 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — `2024-04-31` (attempt) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with `2024-04-31` (attempt); Register. | Rejected; meaningful Date of Birth error; no success. |  | Not Tested |
| TC-VAL-053 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — D (today) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with D (today); Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-054 | FR-12, FR-40, VR-07, VR-08, VR-09, AC-11, AC-12 | Date of Birth — D+1 (tomorrow) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Date of Birth with D+1 (tomorrow); Register. | Rejected; meaningful Date of Birth error; no success. |  | Not Tested |
| TC-VAL-055 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `1979` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `1979`; Register. | Rejected; meaningful Graduation year error; no success. |  | Not Tested |
| TC-VAL-056 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `1980` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `1980`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-057 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `1981` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `1981`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-058 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — Y (current year) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with Y (current year); Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-059 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — Y+1 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with Y+1; Register. | Rejected; meaningful Graduation year error; no success. |  | Not Tested |
| TC-VAL-060 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `2020.5` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `2020.5`; Register. | Rejected; meaningful Graduation year error; no success. |  | Not Tested |
| TC-VAL-061 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `2020.0` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `2020.0`; Register. | Rejected; meaningful Graduation year error; no success. |  | Not Tested |
| TC-VAL-062 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `2e3` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `2e3`; Register. | Rejected; meaningful Graduation year error; no success. |  | Not Tested |
| TC-VAL-063 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `999` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `999`; Register. | Rejected; meaningful Graduation year error; no success. |  | Not Tested |
| TC-VAL-064 | FR-13, FR-41, VR-10, VR-11, AC-13, AC-14 | Graduation year — `02000` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Graduation year with `02000`; Register. | Rejected; meaningful Graduation year error; no success. |  | Not Tested |
| TC-VAL-065 | FR-40, FR-41, FR-44, VR-08, VR-11, AC-17 | Dynamic date and year | Fresh page; JavaScript enabled; fictional data only. | Inspect bounds on load; in isolated test environment change local date across year boundary without reload; attempt newly valid date/year; restore clock. | Submission uses current local date/year, not stale or hardcoded bounds; record any native-control limitation. |  | Not Tested |
| TC-VAL-066 | FR-14, FR-15, FR-16, VR-12, AC-04 | All valid courses | Fresh page; JavaScript enabled; fictional data only. | Repeat B for each of five SRS course options. | Each available non-placeholder option accepted. |  | Not Tested |
| TC-VAL-067 | FR-16, VR-12, AC-04 | Unrecognized course | B; DevTools; local disposable page. | In DevTools temporarily insert/select an option with a value outside the approved list; Register; reload. | Unrecognized value rejected. |  | Not Tested |
| TC-VAL-068 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — `X` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with `X`; Register. | Rejected; meaningful Current Designation error; no success. |  | Not Tested |
| TC-VAL-069 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — `XY` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with `XY`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-070 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — `XYZ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with `XYZ`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-071 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — ` X ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with ` X `; Register. | Rejected; meaningful Current Designation error; no success. |  | Not Tested |
| TC-VAL-072 | FR-17, VR-13, AC-15, FR-37, VR-20 | Current Designation — ` XY ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Designation with ` XY `; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-073 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — `X` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with `X`; Register. | Rejected; meaningful Organization error; no success. |  | Not Tested |
| TC-VAL-074 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — `XY` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with `XY`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-075 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — `XYZ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with `XYZ`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-076 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — ` X ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with ` X `; Register. | Rejected; meaningful Organization error; no success. |  | Not Tested |
| TC-VAL-077 | FR-18, VR-14, AC-15, FR-37, VR-20 | Organization — ` XY ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Organization with ` XY `; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-078 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — `X` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `X`; Register. | Rejected; meaningful Current Location error; no success. |  | Not Tested |
| TC-VAL-079 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — `XY` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `XY`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-080 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — `XYZ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `XYZ`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-081 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — ` X ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with ` X `; Register. | Rejected; meaningful Current Location error; no success. |  | Not Tested |
| TC-VAL-082 | FR-19, FR-43, VR-15, AC-16, FR-37, VR-20 | Current Location — ` XY ` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with ` XY `; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-083 | FR-19, FR-43, VR-15, AC-16 | Current Location — `Delhi` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `Delhi`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-084 | FR-19, FR-43, VR-15, AC-16 | Current Location — `Delhi, India` | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Current Location with `Delhi, India`; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-085 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — empty | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with empty; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-086 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — three spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with three spaces; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-087 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — A(9) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with A(9); Register. | Rejected; meaningful About Yourself error; no success. |  | Not Tested |
| TC-VAL-088 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — A(10) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with A(10); Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-089 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — A(11) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with A(11); Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-090 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — two spaces + A(9) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with two spaces + A(9) + two spaces; Register. | Rejected; meaningful About Yourself error; no success. |  | Not Tested |
| TC-VAL-091 | FR-21, FR-22, FR-23, VR-16, VR-20, AC-06 | About Yourself — two spaces + A(10) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace About Yourself with two spaces + A(10) + two spaces; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-092 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — A(9) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with A(9); Register. | Rejected; meaningful Alumni Feedback error; no success. |  | Not Tested |
| TC-VAL-093 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — A(10) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with A(10); Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-094 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — A(11) | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with A(11); Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-095 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — two spaces + A(9) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with two spaces + A(9) + two spaces; Register. | Rejected; meaningful Alumni Feedback error; no success. |  | Not Tested |
| TC-VAL-096 | FR-33, FR-42, VR-17, VR-20, AC-23 | Alumni Feedback — two spaces + A(10) + two spaces | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace Alumni Feedback with two spaces + A(10) + two spaces; Register. | Accepted; demonstration success. |  | Not Tested |
| TC-VAL-097 | FR-44, NFR-51, VR-20, AC-17 | HTML/JS parity | Fresh page; JavaScript enabled; fictional data only. | Inspect HTML and JS against SRS 5 and 6.3: required, types, minimums, pattern, date/year bounds, option membership, trimming and raw feedback max; compare native validity with final custom decisions. | No contradictory policy; JS handles rules native attributes cannot express; record native sanitization separately. |  | Not Tested |

### 2.3 Feedback counter and boundary testing

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-CNT-001 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 0 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(0) using normal typing/paste; inspect counts; Register. | 0 entered, 300 remaining; rejected for required/minimum length. |  | Not Tested |
| TC-CNT-002 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 1 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(1) using normal typing/paste; inspect counts; Register. | 1 entered, 299 remaining; rejected for required/minimum length. |  | Not Tested |
| TC-CNT-003 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 9 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(9) using normal typing/paste; inspect counts; Register. | 9 entered, 291 remaining; rejected for required/minimum length. |  | Not Tested |
| TC-CNT-004 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 10 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(10) using normal typing/paste; inspect counts; Register. | 10 entered, 290 remaining; accepted. |  | Not Tested |
| TC-CNT-005 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 11 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(11) using normal typing/paste; inspect counts; Register. | 11 entered, 289 remaining; accepted. |  | Not Tested |
| TC-CNT-006 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 150 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(150) using normal typing/paste; inspect counts; Register. | 150 entered, 150 remaining; accepted. |  | Not Tested |
| TC-CNT-007 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 299 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(299) using normal typing/paste; inspect counts; Register. | 299 entered, 1 remaining; accepted. |  | Not Tested |
| TC-CNT-008 | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-33, FR-42, VR-17, NFR-08, AC-18, AC-19, AC-20, AC-21, AC-23 | Feedback length 300 | Fresh page; JavaScript enabled; fictional data only. | Fill B; replace feedback with A(300) using normal typing/paste; inspect counts; Register. | 300 entered, 0 remaining; accepted. |  | Not Tested |
| TC-CNT-009 | FR-28, NFR-38, AC-20 | Typing and deletion | Fresh page; JavaScript enabled; fictional data only. | Start empty feedback; type abc; delete one; paste de; select all and delete. | Counts 3/297, 2/298, 4/296, 0/300 immediately; no reload. |  | Not Tested |
| TC-CNT-010 | FR-25, FR-30, SC-05, AC-22 | Native 301 attempt | Fresh page; JavaScript enabled; fictional data only. | Paste A(301) into empty feedback; separately type one extra character after A(300). | Actual value never exceeds 300; counter reflects actual value; at 300 shows zero remaining. |  | Not Tested |
| TC-CNT-011 | FR-32, FR-42, VR-18, SC-05, AC-22, AC-24 | Programmatic 301 boundary | B; DevTools; disposable local page. | Using DevTools set textarea value to A(301) without removing maxlength; dispatch input event; inspect count; Register; reload. | 301 entered, 0 remaining (never negative); JS rejects excessive raw length; no success. |  | Not Tested |
| TC-CNT-012 | FR-26, FR-27, FR-28, VR-20, AC-24 | Whitespace and Unicode | Fresh page; JavaScript enabled; fictional data only. | Enter `a b`, then `a` + newline + `b`, then `é😀`, then `e` + combining acute accent; inspect each separately. | Counts respectively 3/297, 3/297, 3/297, 2/298; UTF-16 units, not visual glyphs. |  | Not Tested |
| TC-CNT-013 | FR-25, FR-32, FR-42, VR-18, AC-22, AC-24 | Raw length vs trimmed length | B; DevTools. | Set feedback to A(300) plus one trailing space through DevTools; dispatch input; Register. | 301/0; rejected despite trimmed length 300. |  | Not Tested |
| TC-CNT-014 | FR-31, FR-62, AC-31 | Counter reset | Fresh page; JavaScript enabled; fictional data only. | Enter A(150); Reset. | 0 entered, 300 remaining. |  | Not Tested |

### 2.4 Error handling and reset

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-ERR-001 | FR-46, FR-47, FR-48, FR-49, FR-50, FR-53, FR-54, NFR-07, NFR-13, NFR-29, NFR-30, NFR-37, AC-25, AC-26, AC-28 | Multiple errors and focus | Fresh page; JavaScript enabled; fictional data only. | Fill B; clear name and location; enter invalid email; Register; inspect DOM and focus. | All three field-specific errors near controls; associated error text and aria-invalid; distinct styling; general error; focus first invalid in document order; no success. |  | Not Tested |
| TC-ERR-002 | FR-51, FR-52, FR-54, NFR-06, AC-27, AC-28 | Correction and retention | Fresh page; JavaScript enabled; fictional data only. | Fill B with invalid name and email; Register; compare values; correct name only; then email; Register. | Values retained; corrected errors clear/update; remaining error persists until corrected; success only after all pass. |  | Not Tested |
| TC-ERR-003 | FR-59, AC-30 | Clear stale success | Fresh page; JavaScript enabled; fictional data only. | For each of 11 controls independently, validate B successfully then edit that control. | Success message clears on each edit. |  | Not Tested |
| TC-ERR-004 | FR-60, FR-61, FR-62, FR-63, FR-64, FR-65, FR-66, NFR-40, AC-31 | Complete reset | Fresh page; JavaScript enabled; fictional data only. | Fill B, invalidate name, Register, Reset; repeat after successful validation. | All values empty, placeholder selected, messages cleared, invalid styling/ARIA reset, 0/300 counter, no reload or transmission. |  | Not Tested |
| TC-ERR-005 | FR-48, FR-52, NFR-13, AC-25 | No premature errors | Fresh page; JavaScript enabled; fictional data only. | Load fresh page; edit a valid field without submitting; inspect untouched fields. | No application-generated invalid states on untouched fields. |  | Not Tested |

### 2.5 UI/UX testing

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-UI-001 | NFR-01, NFR-02, NFR-03, NFR-04, NFR-05, NFR-09, NFR-10, NFR-11, NFR-12, NFR-13, NFR-14, NFR-15, AC-32 | Visual consistency | Fresh page; JavaScript enabled; fictional data only. | Compare alumni page to tagged baseline; inspect typography, spacing, alignment, margins, padding, borders, backgrounds, fieldset legends, heading, instructions and buttons; hover/focus/activate buttons. | Readable consistent departmental design; persistent instructions; required markers; distinguishable buttons and visible interaction feedback. |  | Not Tested |

### 2.6 Responsive design

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-RES-001 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 1440px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 1440px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. |  | Not Tested |
| TC-RES-002 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 1280px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 1280px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. |  | Not Tested |
| TC-RES-003 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 1024px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 1024px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. |  | Not Tested |
| TC-RES-004 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 768px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 768px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. |  | Not Tested |
| TC-RES-005 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 425px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 425px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. |  | Not Tested |
| TC-RES-006 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 375px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 375px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. |  | Not Tested |
| TC-RES-007 | NFR-16, NFR-17, NFR-18, NFR-19, NFR-20, NFR-21, NFR-22, NFR-44, AC-33 | Responsive 320px | Fresh page; JavaScript enabled; fictional data only. | Set viewport width 320px at 100% zoom; inspect empty, filled and invalid form; scroll vertically; use Register and Reset; inspect document scroll width and navigation. | No unintended horizontal overflow (scroll width ≤ viewport), clipping or overlap; all labels, legends, errors, counter and buttons readable/usable; navigation wraps as baseline. |  | Not Tested |

### 2.7 Accessibility

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-ACC-001 | NFR-26, NFR-27, NFR-36, NFR-37, AC-34 | Keyboard workflow | Fresh page; JavaScript enabled; fictional data only. | Use Tab and Shift+Tab through page and controls; use keyboard to select course, Register and Reset; trigger invalid submission. | All controls operable; visible focus; logical order, no trap; first invalid receives focus. |  | Not Tested |
| TC-ACC-002 | FR-05, FR-07, NFR-03, NFR-24, NFR-25, NFR-34, AC-34, AC-36 | Accessible names and required markers | Fresh page; JavaScript enabled; fictional data only. | Inspect accessibility tree and click labels; inspect required and optional states and invalid text with colour disregarded. | Labels identify controls; groups named; required status and errors not colour-only. |  | Not Tested |
| TC-ACC-003 | NFR-28, NFR-29, NFR-30, NFR-31, NFR-32, FR-49, AC-35 | Accessible dynamic messages | Fresh page; JavaScript enabled; fictional data only. | Inspect textarea description, error associations and live regions; type feedback, submit invalid then valid form; use available screen reader or accessibility inspection. | Counter/instructions associated; polite counter live region; status exposed; errors associated and aria-invalid updated. Record actual assistive technology used. |  | Not Tested |
| TC-ACC-004 | NFR-33, NFR-35, AC-36 | Autocomplete and contrast | Fresh page; JavaScript enabled; fictional data only. | Inspect applicable autocomplete tokens; measure foreground/background contrast for normal form text and error messages using DevTools contrast inspector. | Appropriate tokens; each measured ratio ≥4.5:1. |  | Not Tested |

### 2.8 Browser compatibility

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-COMP-001 | NFR-42, NFR-43, NFR-44, NFR-45, AC-38 | Google Chrome core workflow | Fresh page; JavaScript enabled; fictional data only. | Use current stable Google Chrome; record actual version; load all pages; run B, invalid email, feedback typing/paste, reset, keyboard navigation and console inspection. | Core workflow works; no uncaught JS errors; record browser-specific differences. |  | Not Tested |
| TC-COMP-002 | NFR-42, NFR-43, NFR-44, NFR-45, AC-38 | Microsoft Edge core workflow | Fresh page; JavaScript enabled; fictional data only. | Use current stable Microsoft Edge; record actual version; load all pages; run B, invalid email, feedback typing/paste, reset, keyboard navigation and console inspection. | Core workflow works; no uncaught JS errors; record browser-specific differences. |  | Not Tested |
| TC-COMP-003 | NFR-42, NFR-43, NFR-44, NFR-45, AC-38 | Mozilla Firefox core workflow | Fresh page; JavaScript enabled; fictional data only. | Use current stable Mozilla Firefox; record actual version; load all pages; run B, invalid email, feedback typing/paste, reset, keyboard navigation and console inspection. | Core workflow works; no uncaught JS errors; record browser-specific differences. |  | Not Tested |

### 2.9 Performance

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-PERF-001 | NFR-38, NFR-39, NFR-40, NFR-41, AC-37 | Immediate local interaction | Fresh page; JavaScript enabled; fictional data only. | Record input event and DOM update in DevTools; type/delete/paste; Register and Reset with network log open; inspect dependencies. | Counter updates within same input handling cycle; no reload or validation request; no unnecessary new dependencies. |  | Not Tested |

### 2.10 Privacy and fail-safe behavior

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-PRIV-001 | FR-45, FR-57, FR-66, NFR-55, NFR-56, NFR-57, NFR-58, NFR-59, NFR-60, NFR-62, SC-02, SC-03, SC-04, AC-40 | No data transmission/storage | Fresh page; JavaScript enabled; fictional data only. | Use clean profile; record initial storage and network; enter B, submit invalid and valid, reset; inspect requests, URLs, cookies, local/session storage, console and source for database/auth/geolocation. | No registration values transmitted, persisted or logged; no auth/geolocation request; demonstration notice visible; only fictional data used. |  | Not Tested |
| TC-PRIV-002 | NFR-61, AC-40 | Safe DOM handling | Fresh page; JavaScript enabled; fictional data only. | Enter harmless literal markup `<b>Sample</b>` in text fields/feedback; inspect any reflected messages and DOM; inspect rendering methods. | User content not interpreted as HTML; no injected elements. |  | Not Tested |
| TC-PRIV-003 | NFR-63, FR-45, SC-04, AC-41 | JavaScript disabled | Local test page; DevTools; fictional data; preserve network log. | In disposable browser session arrange JavaScript disabled; reload; inspect Register disabled state; fill available controls; try click, Enter in each single-line field and keyboard activation; monitor URL/network; restore environment. | Register remains disabled; no native submission, navigation carrying data, success or transmission. |  | Not Tested |
| TC-PRIV-004 | NFR-63, FR-45, SC-04, AC-41 | script.js blocked before load | Local test page; DevTools; fictional data; preserve network log. | In disposable browser session arrange script.js blocked before load; reload; inspect Register disabled state; fill available controls; try click, Enter in each single-line field and keyboard activation; monitor URL/network; restore environment. | Register remains disabled; no native submission, navigation carrying data, success or transmission. |  | Not Tested |
| TC-PRIV-005 | NFR-63, FR-45, SC-04, AC-41 | initialization interrupted before handlers are ready | Local test page; DevTools; fictional data; preserve network log. | In disposable browser session arrange initialization interrupted before handlers are ready; reload; inspect Register disabled state; fill available controls; try click, Enter in each single-line field and keyboard activation; monitor URL/network; restore environment. | Register remains disabled; no native submission, navigation carrying data, success or transmission. |  | Not Tested |
| TC-PRIV-006 | NFR-63, FR-45, AC-41 | Initialization order | Fresh page; JavaScript enabled; fictional data only. | Inspect source and use breakpoint before handler registration and immediately before enabling Register; resume. | Register disabled until validation and submission prevention ready; no unsafe native path. |  | Not Tested |

### 2.11 Regression and baseline preservation

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-REG-001 | FR-68, SC-09, AI-35, AC-45 | Homepage | Verified tagged baseline and candidate available; compare same browser/viewport. | Compare content and layout to tagged baseline. | Unchanged homepage. |  | Not Tested |
| TC-REG-002 | FR-68, SC-09, AI-35, AC-45 | Gallery | Verified tagged baseline and candidate available; compare same browser/viewport. | Inspect both images, captions and responsive layout. | Matches baseline. |  | Not Tested |
| TC-REG-003 | FR-70, SC-09, AI-35, AC-45 | Faculty directory | Verified tagged baseline and candidate available; compare same browser/viewport. | Compare entries; calculate experience from sample joining dates and current date. | Directory unchanged; experience matches baseline formula. |  | Not Tested |
| TC-REG-004 | FR-69, SC-09, AI-35, AC-45 | Random event image | Verified tagged baseline and candidate available; compare same browser/viewport. | Reload repeatedly; compare allowed images/captions and inspect selection logic. | Valid image/caption pairs; random selection preserved; no requirement for different image every reload. |  | Not Tested |
| TC-REG-005 | FR-71, SC-09, AI-35, AC-45 | Digital clock | Verified tagged baseline and candidate available; compare same browser/viewport. | Observe consecutive updates and compare local time. | Clock updates as baseline. |  | Not Tested |
| TC-REG-006 | FR-08, FR-67, FR-72, SC-09, AI-35, AC-45 | Navigation | Verified tagged baseline and candidate available; compare same browser/viewport. | Use hover, keyboard focus, click/tap and outside click; follow Home, Alumni and Timetable links; inspect current page marker. | Existing dropdown and navigation behavior preserved. |  | Not Tested |
| TC-REG-007 | FR-68, SC-09, AI-35, AC-45 | News Events Notices | Verified tagged baseline and candidate available; compare same browser/viewport. | Compare all three sections and layout. | Content and layout preserved. |  | Not Tested |
| TC-REG-008 | FR-74, SC-09, AI-35, AC-45 | Timetable | Verified tagged baseline and candidate available; compare same browser/viewport. | Open timetable and compare entries and styling. | Matches baseline. |  | Not Tested |
| TC-REG-009 | FR-73, SC-09, AI-35, AC-45 | jQuery activity list | Verified tagged baseline and candidate available; compare same browser/viewport. | Locate baseline feature; add sample item using existing control. | Item added as baseline. |  | Not Tested |
| TC-REG-010 | FR-73, SC-09, AI-35, AC-45 | Gallery fade | Verified tagged baseline and candidate available; compare same browser/viewport. | Use existing fade controls. | Fade in/out behaves as baseline. |  | Not Tested |
| TC-REG-011 | FR-68, FR-74, NFR-22, SC-09, AI-35, AC-45 | Responsive existing pages | Verified tagged baseline and candidate available; compare same browser/viewport. | Repeat baseline comparison at all seven SRS widths. | Existing responsive behavior preserved. |  | Not Tested |
| TC-REG-012 | FR-75, NFR-53, DR-10, SC-06, SC-07, SC-08, SC-09, AC-46 | Baseline and repository preservation | Repository access and original archive; execute before implementation and repeat before submission. | Identify final Assignment 1 commit; inspect local tag and remote GitHub tag (including dereferenced commit if annotated); compare original ZIP hash and Assignment 1 docs against preserved copies; inspect git diff and remote identity. | Remote tag points to verified final commit; original ZIP and docs unchanged; same repo; unrelated files unchanged or separately documented. |  | Not Tested |

### 2.12 Standards and code quality

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-STD-001 | NFR-64, NFR-66, AI-32, AI-34, DR-08, SC-11, AC-42, AC-44 | W3C HTML | Fresh page; JavaScript enabled; fictional data only. | Upload candidate alumni.html to https://validator.w3.org/; record date, input revision, errors/warnings and screenshot. | Zero errors; warnings resolved or justified. |  | Not Tested |
| TC-STD-002 | NFR-65, NFR-66, AI-33, AI-34, DR-08, SC-11, AC-43, AC-44 | W3C CSS | Fresh page; JavaScript enabled; fictional data only. | Upload style.css to https://jigsaw.w3.org/css-validator/; record selected profile, date, revision, errors/warnings and screenshot. | Zero errors under recorded profile; warnings resolved or justified. |  | Not Tested |
| TC-STD-003 | NFR-46, NFR-47, NFR-52, NFR-67, SC-01, SC-10, AC-39, AC-44 | HTML/CSS coding review | Fresh page; JavaScript enabled; fictional data only. | Inspect doctype, UTF-8, lang, viewport, lowercase tags/attributes, double quotes, two-space indentation, unique IDs, semantic labels, external CSS/JS, no inline styles/events, CSS naming, spacing, comments, unnecessary IDs/important, fluid layout and Flexbox/Grid where appropriate. | Conforms to SRS section 9 and applicable Google HTML/CSS guide; deviations documented. |  | Not Tested |
| TC-STD-004 | NFR-48, NFR-49, NFR-50, NFR-51, NFR-52, NFR-53, NFR-68, SC-10, AC-39, AC-44 | JavaScript quality and scope | Fresh page; JavaScript enabled; fictional data only. | Inspect addEventListener, const/let, names, comments, safe DOM, guard clauses, duplication, globals, dependencies, validation before success, submission prevention and alumni-only diff; load pages lacking form. | Readable scoped logic; no unnecessary duplication or unrelated changes; absent elements handled safely. |  | Not Tested |

### 2.13 AI workflow and deliverables

| Test Case ID | SRS IDs | Objective | Preconditions | Input / steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| TC-DOC-001 | AI-01, AI-02, AI-03, AI-04, DR-04, AC-47 | SRS verification | Fresh page; JavaScript enabled; fictional data only. | Review approved SRS and transcript against assignment and gap analysis. | Formal separate SRS covers required categories and distinguishes M/E/P/C. |  | Not Tested |
| TC-DOC-002 | AI-05, AI-06, AI-07, AI-08, AI-09, AI-10, DR-05, AC-47 | Test plan verification | Fresh page; JavaScript enabled; fictional data only. | Review this plan against SRS; check unique IDs, all fields, expected/actual/status columns, initial Not Tested, RTM and coverage categories. | Complete traceable plan; no fabricated execution. |  | Not Tested |
| TC-DOC-003 | AI-11, AI-12, AI-13, AI-14, AI-15, NFR-54, DR-09, AC-48 | Incremental workflow | Fresh page; JavaScript enabled; fictional data only. | Review transcript and Git commits for staged prompts, reuse, review before incorporation and iterative debugging. | Stages and refinements traceable; incremental commits identifiable. |  | Not Tested |
| TC-DOC-004 | AI-16, AI-17, AI-18, AI-19, AI-20, AI-21, AI-22, DR-06, AC-48 | Conformance audit | Fresh page; JavaScript enabled; fictional data only. | Inspect CONFORMANCE_AUDIT.md and transcript; verify updated source, SRS and plan supplied; review coverage, gaps, counter, validation, accessibility, responsive and standards findings; inspect defect status. | Audit distinguishes static findings from browser evidence and documents missing/partial requirements and resolutions. |  | Not Tested |
| TC-DOC-005 | AI-23, AI-24, AI-25, AI-26, AI-27, AI-28, DR-07, AC-49 | Code walkthrough | Fresh page; JavaScript enabled; fictional data only. | Inspect CODE_WALKTHROUGH.md and transcript for HTML controls, CSS selectors/responsiveness, JS events, validation, counter, success/reset and no actual submission. | All topics explained accurately. |  | Not Tested |
| TC-DOC-006 | AI-29, AI-30, AI-31, AI-32, AI-33, AI-34, AI-35, AI-36, DR-03, DR-08, SC-11, AC-50 | Manual evidence and report | Fresh page; JavaScript enabled; fictional data only. | Inspect TESTING_REPORT.md, screenshots, browser/viewport records, actual results, defects and retests; match evidence to candidate commit and cases. | Executed results supported by evidence; W3C results and regression recorded; no AI-only claims as manual passes. |  | Not Tested |
| TC-DOC-007 | DR-01, AC-51 | Final ZIP | Fresh page; JavaScript enabled; fictional data only. | Extract final archive into clean folder; compare manifest to candidate; open website and check assets and core workflow. | Complete updated source/assets; works after extraction; no confidential data. |  | Not Tested |
| TC-DOC-008 | DR-02, AC-51 | Public transcript | Fresh page; JavaScript enabled; fictional data only. | Open share link in signed-out/private browser; review completeness and privacy. | Accessible complete AI workflow; no secrets or real alumni data. |  | Not Tested |
| TC-DOC-009 | DR-11, AC-46 | Final revision | Fresh page; JavaScript enabled; fictional data only. | Record final candidate commit and remote availability; if optional assignment-2-final tag used verify target. | Final revision reproducible; optional tag not required. |  | Not Tested |

## 3. Requirements Traceability Matrix

Each row maps an exact SRS identifier to planned verification cases. Coverage means planned mapping only, not implementation compliance or execution.

| SRS ID | Requirement / criterion | Test case IDs | Status |
|---|---|---|---|
| FR-01 | The system shall provide an Alumni Registration page using semantic HTML5 elements, including header, navigation, main, section and footer. | TC-FUN-001 | Not Tested |
| FR-02 | The system shall contain a dedicated form element for collecting alumni registration information. | TC-FUN-001 | Not Tested |
| FR-03 | The system shall group related registration fields using fieldset elements. | TC-FUN-001 | Not Tested |
| FR-04 | Each fieldset shall contain a meaningful legend describing its purpose. | TC-FUN-001 | Not Tested |
| FR-05 | Every user-editable form control shall have a meaningful label associated with its unique identifier. | TC-FUN-001, TC-ACC-002 | Not Tested |
| FR-06 | The system shall organize registration fields into personal, academic, professional and additional information groups. | TC-FUN-001 | Not Tested |
| FR-07 | The system shall clearly distinguish required and optional fields through visible indicators and appropriate HTML attributes. | TC-FUN-002, TC-ACC-002 | Not Tested |
| FR-08 | The system shall preserve the existing departmental header, footer and navigation links. | TC-FUN-002, TC-REG-006 | Not Tested |
| FR-09 | The system shall provide a required Full Name text field. | TC-FUN-002, TC-VAL-001, TC-VAL-002, TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023 | Not Tested |
| FR-10 | The system shall provide a required Email Address field using the email input type. | TC-FUN-002, TC-VAL-003, TC-VAL-004, TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | Not Tested |
| FR-11 | The system shall provide a required Contact Number field using the tel input type. | TC-FUN-002, TC-VAL-005, TC-VAL-006, TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | Not Tested |
| FR-12 | The system shall provide a required Date of Birth field using the date input type. | TC-FUN-002, TC-VAL-007, TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | Not Tested |
| FR-13 | The system shall provide a required Academic Batch / Year of Passing field using a numeric input control. | TC-FUN-002, TC-VAL-008, TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | Not Tested |
| FR-14 | The system shall provide a required Course / Department selection field. | TC-FUN-002, TC-VAL-009, TC-VAL-066 | Not Tested |
| FR-15 | The Course / Department dropdown shall retain the existing course options and an initial empty selection. | TC-FUN-002, TC-VAL-066 | Not Tested |
| FR-16 | The system shall reject the initial empty course selection during form validation. | TC-FUN-002, TC-VAL-009, TC-VAL-066, TC-VAL-067 | Not Tested |
| FR-17 | The system shall provide a required Current Designation text field. | TC-FUN-002, TC-VAL-010, TC-VAL-011, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072 | Not Tested |
| FR-18 | The system shall provide a required Organization / Company Name text field. | TC-FUN-002, TC-VAL-012, TC-VAL-013, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077 | Not Tested |
| FR-19 | The system shall provide a required Current Location text field. | TC-FUN-002, TC-VAL-014, TC-VAL-015, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | Not Tested |
| FR-20 | The designation and organization fields shall accept meaningful alternatives for alumni who are unemployed, retired, self-employed or pursuing further studies. | TC-FUN-005 | Not Tested |
| FR-21 | The system shall retain the existing About Yourself textarea. | TC-FUN-002, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | Not Tested |
| FR-22 | The About Yourself field shall be optional. | TC-FUN-002, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | Not Tested |
| FR-23 | When non-empty information is entered in About Yourself, it shall satisfy the specified minimum-length constraint. | TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | Not Tested |
| FR-24 | The system shall provide a dedicated Alumni Feedback textarea for collecting comments, suggestions and feedback. | TC-FUN-002, TC-VAL-016, TC-VAL-017 | Not Tested |
| FR-25 | The feedback textarea shall restrict user-entered content to a maximum of 300 characters. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-010, TC-CNT-013 | Not Tested |
| FR-26 | The system shall display the number of feedback characters entered. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-012 | Not Tested |
| FR-27 | The system shall explicitly display the number of feedback characters remaining. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-012 | Not Tested |
| FR-28 | The character counter shall update whenever the feedback value changes through normal user input, including typing, deletion and pasting. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-009, TC-CNT-012 | Not Tested |
| FR-29 | The character counter shall initially display zero entered characters and 300 remaining characters. | TC-FUN-003, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| FR-30 | When feedback reaches 300 characters, the counter shall display 300 entered characters and zero remaining characters. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-010 | Not Tested |
| FR-31 | The feedback counter shall be restored to its initial state when the form is reset. | TC-CNT-014 | Not Tested |
| FR-32 | JavaScript shall independently reject feedback exceeding 300 characters if the HTML input restriction is bypassed. | TC-CNT-011, TC-CNT-013 | Not Tested |
| FR-33 | Alumni Feedback shall be required and shall contain at least 10 characters after trimming leading and trailing whitespace. | TC-VAL-016, TC-VAL-017, TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| FR-34 | The system shall validate registration information using JavaScript before displaying a successful validation message. | TC-FUN-004 | Not Tested |
| FR-35 | The system shall reject submission when any required field is empty. | TC-VAL-001, TC-VAL-003, TC-VAL-005, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-012, TC-VAL-014, TC-VAL-016 | Not Tested |
| FR-36 | The system shall treat whitespace-only values as empty for required textual fields. | TC-VAL-002, TC-VAL-004, TC-VAL-006, TC-VAL-011, TC-VAL-013, TC-VAL-015, TC-VAL-017 | Not Tested |
| FR-37 | The system shall enforce the specified minimum lengths for applicable textual fields. | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082 | Not Tested |
| FR-38 | The system shall reject email addresses that do not satisfy the defined email-format rules. | TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | Not Tested |
| FR-39 | The system shall reject contact numbers that do not satisfy the defined digit and length constraints. | TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | Not Tested |
| FR-40 | The system shall reject missing, invalid or future dates of birth. | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054, TC-VAL-065 | Not Tested |
| FR-41 | The system shall reject graduation years outside the specified permitted range or not represented by four decimal digits. | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064, TC-VAL-065 | Not Tested |
| FR-42 | The system shall reject feedback exceeding 300 characters or failing the approved minimum-length requirement. | TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-011, TC-CNT-013 | Not Tested |
| FR-43 | The system shall validate Current Location according to its required status and minimum length. | TC-VAL-014, TC-VAL-015, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | Not Tested |
| FR-44 | HTML input constraints and JavaScript validation shall implement the same approved validation policy. | TC-VAL-065, TC-VAL-097 | Not Tested |
| FR-45 | The system shall prevent default form submission and shall not transmit registration information. | TC-FUN-004, TC-PRIV-001, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005, TC-PRIV-006 | Not Tested |
| FR-46 | The system shall display meaningful validation messages identifying the affected fields and the corresponding validation failures. | TC-ERR-001 | Not Tested |
| FR-47 | Validation messages shall appear near their corresponding invalid fields. | TC-ERR-001 | Not Tested |
| FR-48 | The system shall visually distinguish invalid fields from valid or unvalidated fields. | TC-ERR-001, TC-ERR-005 | Not Tested |
| FR-49 | The system shall identify invalid fields programmatically using appropriate accessibility attributes. | TC-ERR-001, TC-ACC-003 | Not Tested |
| FR-50 | Following an unsuccessful validation attempt, the system shall move keyboard focus to the first invalid field. | TC-ERR-001 | Not Tested |
| FR-51 | The system shall preserve entered information when validation fails. | TC-ERR-002 | Not Tested |
| FR-52 | When an invalid field is corrected, its outdated error message and invalid state shall be cleared or updated according to the current validation result. | TC-ERR-002, TC-ERR-005 | Not Tested |
| FR-53 | The system shall provide a general form-level message indicating that validation errors must be corrected. | TC-ERR-001 | Not Tested |
| FR-54 | The system shall not display a successful validation message while any validation condition remains unsatisfied. | TC-ERR-001, TC-ERR-002 | Not Tested |
| FR-55 | The system shall provide a Register button for initiating form validation. | TC-FUN-002, TC-FUN-004 | Not Tested |
| FR-56 | When all applicable validation conditions are satisfied, the system shall display a meaningful success message. | TC-FUN-004 | Not Tested |
| FR-57 | The success message shall explicitly indicate that the application is a demonstration and that no registration information has been transmitted or stored. | TC-FUN-004, TC-PRIV-001 | Not Tested |
| FR-58 | The system shall retain entered information after successful validation until the user resets or edits the form. | TC-FUN-004 | Not Tested |
| FR-59 | The system shall clear an outdated success message when the user modifies any registration field. | TC-ERR-003 | Not Tested |
| FR-60 | The system shall provide a Reset button. | TC-FUN-002, TC-ERR-004 | Not Tested |
| FR-61 | Activating Reset shall restore all editable form controls to their initial values. | TC-ERR-004 | Not Tested |
| FR-62 | Reset shall restore the feedback counter to zero entered characters and 300 remaining characters. | TC-CNT-014, TC-ERR-004 | Not Tested |
| FR-63 | Reset shall clear all field-specific validation messages and form-level messages. | TC-ERR-004 | Not Tested |
| FR-64 | Reset shall remove invalid-field styling and restore the initial accessibility validation states. | TC-ERR-004 | Not Tested |
| FR-65 | Reset shall restore the initial empty Course / Department selection. | TC-FUN-003, TC-ERR-004 | Not Tested |
| FR-66 | Reset shall not initiate form submission or data transmission. | TC-ERR-004, TC-PRIV-001 | Not Tested |
| FR-67 | The system shall retain navigation between the homepage, Alumni Registration page and timetable page. | TC-REG-006 | Not Tested |
| FR-68 | Existing departmental homepage content and layout shall remain unaffected by alumni form enhancements. | TC-REG-001, TC-REG-002, TC-REG-007, TC-REG-011 | Not Tested |
| FR-69 | Existing random event-image functionality shall be preserved. | TC-REG-004 | Not Tested |
| FR-70 | Existing faculty experience calculation functionality shall be preserved. | TC-REG-003 | Not Tested |
| FR-71 | Existing digital clock functionality shall be preserved. | TC-REG-005 | Not Tested |
| FR-72 | Existing navigation dropdown functionality, including hover, keyboard focus and click or tap behavior, shall be preserved. | TC-REG-006 | Not Tested |
| FR-73 | Existing jQuery-based activity-list and gallery fade functionalities shall be preserved wherever implemented in the complete repository. | TC-REG-009, TC-REG-010 | Not Tested |
| FR-74 | Existing timetable functionality and styling shall remain unaffected. | TC-REG-008, TC-REG-011 | Not Tested |
| FR-75 | Existing Assignment 1 documentation and its final submission version shall be preserved. | TC-REG-012 | Not Tested |
| VR-01 | A required field is empty. | TC-VAL-001, TC-VAL-003, TC-VAL-005, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-012, TC-VAL-014, TC-VAL-016 | Not Tested |
| VR-02 | A required textual field contains only whitespace. | TC-VAL-002, TC-VAL-004, TC-VAL-006, TC-VAL-011, TC-VAL-013, TC-VAL-015, TC-VAL-017 | Not Tested |
| VR-03 | Full Name contains fewer than three trimmed characters. | TC-VAL-001, TC-VAL-002, TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023 | Not Tested |
| VR-04 | Email does not satisfy the approved email-format rules. | TC-VAL-003, TC-VAL-004, TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | Not Tested |
| VR-05 | Contact Number does not contain exactly ten ASCII digits after trimming. | TC-VAL-005, TC-VAL-006, TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | Not Tested |
| VR-06 | Date of Birth is missing. | TC-VAL-007 | Not Tested |
| VR-07 | Date of Birth does not represent a valid calendar date. | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | Not Tested |
| VR-08 | Date of Birth is later than the current local date. | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054, TC-VAL-065 | Not Tested |
| VR-09 | Date of Birth precedes 1 January 1900. | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | Not Tested |
| VR-10 | Graduation year is not represented by exactly four decimal digits. | TC-VAL-008, TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | Not Tested |
| VR-11 | Graduation year is less than 1980 or greater than the current year. | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064, TC-VAL-065 | Not Tested |
| VR-12 | Course / Department selection is empty or not an available valid option. | TC-VAL-009, TC-VAL-066, TC-VAL-067 | Not Tested |
| VR-13 | Current Designation contains fewer than two trimmed characters. | TC-VAL-010, TC-VAL-011, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072 | Not Tested |
| VR-14 | Organization contains fewer than two trimmed characters. | TC-VAL-012, TC-VAL-013, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077 | Not Tested |
| VR-15 | Current Location contains fewer than two trimmed characters. | TC-VAL-014, TC-VAL-015, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | Not Tested |
| VR-16 | About Yourself is non-empty after trimming but contains fewer than ten trimmed characters. | TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | Not Tested |
| VR-17 | Feedback contains fewer than ten trimmed characters. | TC-VAL-016, TC-VAL-017, TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| VR-18 | Original feedback length exceeds 300 characters. | TC-CNT-011, TC-CNT-013 | Not Tested |
| VR-19 | All applicable validation rules are satisfied. | TC-FUN-004 | Not Tested |
| VR-20 | A field contains leading or trailing whitespace. | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023, TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036, TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045, TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077, TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091, TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-VAL-097, TC-CNT-012 | Not Tested |
| NFR-01 | The form shall use readable labels, instructions and validation messages. | TC-UI-001 | Not Tested |
| NFR-02 | Related registration fields shall be grouped logically. | TC-FUN-001, TC-UI-001 | Not Tested |
| NFR-03 | Required fields shall be identifiable without relying exclusively on colour. | TC-FUN-002, TC-UI-001, TC-ACC-002 | Not Tested |
| NFR-04 | Input instructions shall remain understandable when placeholder text is no longer visible. | TC-UI-001 | Not Tested |
| NFR-05 | Register and Reset buttons shall be visually distinguishable. | TC-UI-001 | Not Tested |
| NFR-06 | Validation failure shall not erase previously entered information. | TC-ERR-002 | Not Tested |
| NFR-07 | Error messages shall identify the affected field and explain the required correction. | TC-ERR-001 | Not Tested |
| NFR-08 | The form shall display feedback character usage and remaining capacity without requiring submission. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| NFR-09 | The form shall retain a consistent departmental colour scheme. | TC-UI-001 | Not Tested |
| NFR-10 | Labels, inputs and textareas shall use consistent typography, spacing and alignment. | TC-UI-001 | Not Tested |
| NFR-11 | The form shall use appropriate margins, padding, borders and background colours. | TC-UI-001 | Not Tested |
| NFR-12 | Input controls shall provide visible focus feedback. | TC-UI-001 | Not Tested |
| NFR-13 | Invalid input controls shall have a distinct visual state accompanied by explanatory text. | TC-ERR-001, TC-ERR-005, TC-UI-001 | Not Tested |
| NFR-14 | Register and Reset buttons shall provide visible interaction feedback. | TC-UI-001 | Not Tested |
| NFR-15 | Fieldset and legend styling shall remain consistent with the existing departmental website design. | TC-UI-001 | Not Tested |
| NFR-16 | The Alumni Registration page shall remain usable on desktop, tablet and mobile screen sizes. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | Not Tested |
| NFR-17 | The page shall not introduce unintended horizontal scrolling at the specified test viewport widths. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | Not Tested |
| NFR-18 | Form fields, labels, legends and error messages shall remain within their available containers. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | Not Tested |
| NFR-19 | The form shall adapt its spacing and layout according to the available viewport width. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | Not Tested |
| NFR-20 | Register and Reset buttons shall remain accessible without overlap or clipping. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | Not Tested |
| NFR-21 | The feedback counter shall remain readable and visible at all specified viewport widths. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | Not Tested |
| NFR-22 | Existing mobile navigation wrapping shall be preserved. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007, TC-REG-011 | Not Tested |
| NFR-23 | The HTML document shall declare its language. | TC-FUN-001 | Not Tested |
| NFR-24 | All form controls shall have meaningful associated labels. | TC-FUN-001, TC-ACC-002 | Not Tested |
| NFR-25 | Related controls shall be semantically grouped using fieldset and legend elements. | TC-FUN-001, TC-ACC-002 | Not Tested |
| NFR-26 | All interactive form controls shall be operable using a keyboard. | TC-ACC-001 | Not Tested |
| NFR-27 | Keyboard focus shall remain visible throughout form interaction. | TC-ACC-001 | Not Tested |
| NFR-28 | The feedback textarea shall be programmatically associated with its character counter and relevant instructions. | TC-ACC-003 | Not Tested |
| NFR-29 | Field-specific validation messages shall be programmatically associated with their corresponding fields. | TC-ERR-001, TC-ACC-003 | Not Tested |
| NFR-30 | Invalid fields shall be identified using appropriate aria-invalid states. | TC-ERR-001, TC-ACC-003 | Not Tested |
| NFR-31 | The form-level status message shall use an appropriate accessible live-region mechanism. | TC-ACC-003 | Not Tested |
| NFR-32 | Dynamic feedback-count changes shall be exposed through an appropriate polite live region. | TC-ACC-003 | Not Tested |
| NFR-33 | The form shall use appropriate autocomplete attributes for applicable personal and professional information fields. | TC-ACC-004 | Not Tested |
| NFR-34 | Validation states shall not be communicated exclusively through colour. | TC-ACC-002 | Not Tested |
| NFR-35 | Normal-sized form text and validation messages shall achieve a contrast ratio of at least 4.5:1 against their backgrounds. | TC-ACC-004 | Not Tested |
| NFR-36 | The form shall not introduce keyboard traps. | TC-ACC-001 | Not Tested |
| NFR-37 | Following failed validation, keyboard focus shall move to the first invalid field in document order. | TC-ERR-001, TC-ACC-001 | Not Tested |
| NFR-38 | Feedback character counting shall update within the same input-event handling cycle without requiring a page reload. | TC-CNT-009, TC-PERF-001 | Not Tested |
| NFR-39 | Form validation shall complete locally without requiring a network request. | TC-FUN-004, TC-PERF-001 | Not Tested |
| NFR-40 | Register and Reset operations shall not reload the page. | TC-FUN-004, TC-ERR-004, TC-PERF-001 | Not Tested |
| NFR-41 | The enhanced form shall not introduce unnecessary external libraries or dependencies. | TC-PERF-001 | Not Tested |
| NFR-42 | The form shall use standard HTML5, CSS3 and JavaScript browser features. | TC-COMP-001, TC-COMP-002, TC-COMP-003 | Not Tested |
| NFR-43 | The form shall support the core registration workflow in current stable versions of Google Chrome, Microsoft Edge and Mozilla Firefox. | TC-COMP-001, TC-COMP-002, TC-COMP-003 | Not Tested |
| NFR-44 | The form shall remain usable in a mobile browser or an equivalent browser device-emulation environment. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007, TC-COMP-001, TC-COMP-002, TC-COMP-003 | Not Tested |
| NFR-45 | The form shall not produce uncaught JavaScript errors during normal registration, validation and reset operations. | TC-COMP-001, TC-COMP-002, TC-COMP-003 | Not Tested |
| NFR-46 | HTML, CSS and JavaScript shall remain in separate source files. | TC-STD-003 | Not Tested |
| NFR-47 | Alumni-specific CSS rules shall be scoped to alumni-related containers or classes. | TC-STD-003 | Not Tested |
| NFR-48 | Alumni-specific JavaScript shall execute only when the required form elements are present. | TC-STD-004 | Not Tested |
| NFR-49 | Validation logic shall use meaningful variable and function names. | TC-STD-004 | Not Tested |
| NFR-50 | Repeated validation and character-counting logic shall be consolidated where practical. | TC-STD-004 | Not Tested |
| NFR-51 | The feedback maximum-length configuration shall remain consistent across HTML and JavaScript. | TC-VAL-097, TC-STD-004 | Not Tested |
| NFR-52 | Source-code comments shall explain non-obvious behavior and major functional sections. | TC-STD-003, TC-STD-004 | Not Tested |
| NFR-53 | Unrelated Assignment 1 source-code sections shall not be modified unnecessarily. | TC-REG-012, TC-STD-004 | Not Tested |
| NFR-54 | The Assignment 2 implementation shall be developed through identifiable incremental Git commits. | TC-DOC-003 | Not Tested |
| NFR-55 | Registration information shall not be transmitted to any external server. | TC-PRIV-001 | Not Tested |
| NFR-56 | Registration information shall not be stored in a database, cookies, local storage or session storage by application code. | TC-PRIV-001 | Not Tested |
| NFR-57 | The application shall not request authentication credentials. | TC-PRIV-001 | Not Tested |
| NFR-58 | The application shall not request geolocation permissions. | TC-PRIV-001 | Not Tested |
| NFR-59 | User-entered personal information shall not be deliberately written to the browser console by application code. | TC-PRIV-001 | Not Tested |
| NFR-60 | Testing and academic evidence shall use fictional or sample alumni information rather than actual personal records. | TC-PRIV-001 | Not Tested |
| NFR-61 | User-derived content shall be handled using safe DOM operations rather than being interpreted as executable HTML. | TC-PRIV-002 | Not Tested |
| NFR-62 | The page shall clearly communicate its frontend-only academic demonstration status. | TC-PRIV-001 | Not Tested |
| NFR-63 | If JavaScript is unavailable, the registration workflow shall fail safely without transmitting form information. | TC-FUN-003, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005, TC-PRIV-006 | Not Tested |
| NFR-64 | The updated alumni.html document shall pass W3C HTML validation with zero errors. | TC-STD-001 | Not Tested |
| NFR-65 | The updated style.css stylesheet shall pass W3C CSS validation with zero errors under the selected validation profile. | TC-STD-002 | Not Tested |
| NFR-66 | Validator warnings shall be reviewed and either resolved or documented with justification. | TC-STD-001, TC-STD-002 | Not Tested |
| NFR-67 | The source code shall follow the applicable Google HTML/CSS Style Guide and assignment-specific coding conventions. | TC-STD-003 | Not Tested |
| NFR-68 | The JavaScript implementation shall follow the coding practices specified in the official assignment. | TC-STD-004 | Not Tested |
| AI-01 | An AI assistant shall be used to convert the informal assignment specification into a formal SRS. | TC-DOC-001 | Not Tested |
| AI-02 | The SRS shall include functional, non-functional, input, validation, interface and responsiveness requirements. | TC-DOC-001 | Not Tested |
| AI-03 | Existing source files and the preliminary gap analysis shall be considered during requirements engineering. | TC-DOC-001 | Not Tested |
| AI-04 | Mandatory requirements, inherited functionality and proposed decisions shall be distinguished. | TC-DOC-001 | Not Tested |
| AI-05 | An AI assistant shall generate a comprehensive test and validation plan derived from the approved SRS. | TC-DOC-002 | Not Tested |
| AI-06 | Each test case shall have a unique test identifier and reference its corresponding requirement identifiers. | TC-DOC-002 | Not Tested |
| AI-07 | Test cases shall include test inputs or actions, expected results, actual results and execution status. | TC-DOC-002 | Not Tested |
| AI-08 | All test cases shall initially be marked Not Tested. | TC-DOC-002 | Not Tested |
| AI-09 | The test plan shall include a requirements traceability matrix. | TC-DOC-002 | Not Tested |
| AI-10 | The test plan shall cover functional, boundary, negative, accessibility, responsive, regression and standards-validation testing. | TC-DOC-002 | Not Tested |
| AI-11 | The implementation shall be developed through structured, incremental AI prompts. | TC-DOC-003 | Not Tested |
| AI-12 | Existing source code shall be reused where it satisfies the approved requirements. | TC-DOC-003 | Not Tested |
| AI-13 | Each development stage shall focus on a clearly defined set of requirements. | TC-DOC-003 | Not Tested |
| AI-14 | AI-generated changes shall be reviewed before being incorporated into the repository. | TC-DOC-003 | Not Tested |
| AI-15 | Iterative debugging and refinement shall be documented in the AI transcript. | TC-DOC-003 | Not Tested |
| AI-16 | The updated HTML, CSS and JavaScript files shall be provided to an AI assistant together with the SRS and test plan. | TC-DOC-004 | Not Tested |
| AI-17 | The AI assistant shall evaluate implementation coverage against the specified requirements. | TC-DOC-004 | Not Tested |
| AI-18 | The review shall identify missing, partially implemented and inconsistent requirements. | TC-DOC-004 | Not Tested |
| AI-19 | The review shall evaluate the feedback limit, character counter and JavaScript validation rules. | TC-DOC-004 | Not Tested |
| AI-20 | The review shall evaluate code quality, accessibility, responsiveness and standards compliance through source inspection. | TC-DOC-004 | Not Tested |
| AI-21 | The review shall distinguish source-code findings from behaviors requiring actual browser testing. | TC-DOC-004 | Not Tested |
| AI-22 | Identified defects and their resolution status shall be documented. | TC-DOC-004 | Not Tested |
| AI-23 | An AI assistant shall explain the purpose of the HTML elements and form controls. | TC-DOC-005 | Not Tested |
| AI-24 | The AI assistant shall explain the relevant CSS selectors, properties and responsive layout rules. | TC-DOC-005 | Not Tested |
| AI-25 | The AI assistant shall explain the JavaScript event listeners and validation functions. | TC-DOC-005 | Not Tested |
| AI-26 | The AI assistant shall explain the feedback character-counting logic. | TC-DOC-005 | Not Tested |
| AI-27 | The AI assistant shall explain the successful validation and reset workflows. | TC-DOC-005 | Not Tested |
| AI-28 | The code walkthrough shall distinguish frontend validation from actual data submission. | TC-DOC-005 | Not Tested |
| AI-29 | The student shall manually execute the applicable test cases in a web browser. | TC-DOC-006 | Not Tested |
| AI-30 | Actual results and Pass or Fail statuses shall be recorded after execution. | TC-DOC-006 | Not Tested |
| AI-31 | Failed tests shall be documented and retested following corrective changes. | TC-DOC-006 | Not Tested |
| AI-32 | Updated HTML markup shall be checked using the W3C Markup Validation Service. | TC-STD-001, TC-DOC-006 | Not Tested |
| AI-33 | Updated CSS shall be checked using the W3C CSS Validation Service. | TC-STD-002, TC-DOC-006 | Not Tested |
| AI-34 | Validation evidence and relevant browser-testing evidence shall be retained. | TC-STD-001, TC-STD-002, TC-DOC-006 | Not Tested |
| AI-35 | Existing Assignment 1 functionalities shall undergo regression testing. | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011, TC-DOC-006 | Not Tested |
| AI-36 | AI-generated reviews shall not be represented as completed manual test results. | TC-DOC-006 | Not Tested |
| DR-01 | Source Code ZIP | TC-DOC-007 | Not Tested |
| DR-02 | AI Transcript | TC-DOC-008 | Not Tested |
| DR-03 | Testing Report | TC-DOC-006 | Not Tested |
| DR-04 | SRS | TC-DOC-001 | Not Tested |
| DR-05 | Test Plan | TC-DOC-002 | Not Tested |
| DR-06 | Conformance Audit | TC-DOC-004 | Not Tested |
| DR-07 | Code Walkthrough | TC-DOC-005 | Not Tested |
| DR-08 | Validation Evidence | TC-STD-001, TC-STD-002, TC-DOC-006 | Not Tested |
| DR-09 | Version-Control History | TC-DOC-003 | Not Tested |
| DR-10 | Assignment 1 Baseline | TC-REG-012 | Not Tested |
| DR-11 | Assignment 2 Final Version | TC-DOC-009 | Not Tested |
| SC-01 | The application shall use HTML5, CSS3 and JavaScript. | TC-STD-003 | Not Tested |
| SC-02 | The application shall remain frontend-only. | TC-PRIV-001 | Not Tested |
| SC-03 | No backend, database or authentication mechanism shall be introduced. | TC-PRIV-001 | Not Tested |
| SC-04 | Registration information shall not be transmitted or persistently stored by application code. | TC-PRIV-001, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005 | Not Tested |
| SC-05 | Feedback shall not exceed 300 characters under the defined counting convention. | TC-CNT-010, TC-CNT-011 | Not Tested |
| SC-06 | Assignment 2 shall extend the existing departmental website. | TC-REG-012 | Not Tested |
| SC-07 | The existing GitHub repository shall be reused. | TC-REG-012 | Not Tested |
| SC-08 | The completed Assignment 1 version and documentation shall be preserved. | TC-REG-012 | Not Tested |
| SC-09 | Unrelated website functionalities shall remain unaffected. | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011, TC-REG-012 | Not Tested |
| SC-10 | Source code shall follow the prescribed coding guidelines. | TC-STD-003, TC-STD-004 | Not Tested |
| SC-11 | Manual verification and W3C standards validation shall be completed before final submission. | TC-STD-001, TC-STD-002, TC-DOC-006 | Not Tested |
| AC-01 | The alumni page contains semantic HTML5 structure, a form, meaningful fieldsets and legends, and associated labels for every editable form control. | TC-FUN-001 | Not Tested |
| AC-02 | Registration information is logically grouped and required fields are visibly identifiable. | TC-FUN-001 | Not Tested |
| AC-03 | All nine registration fields specified in Assignment 2 are present and usable. | TC-FUN-002 | Not Tested |
| AC-04 | The course dropdown retains its existing options and rejects the initial empty selection. | TC-FUN-002, TC-VAL-066, TC-VAL-067 | Not Tested |
| AC-05 | Valid alternative professional responses are accepted. | TC-FUN-005 | Not Tested |
| AC-06 | About Yourself remains available, accepts an empty value and rejects non-empty values shorter than ten trimmed characters. | TC-FUN-002, TC-VAL-085, TC-VAL-086, TC-VAL-087, TC-VAL-088, TC-VAL-089, TC-VAL-090, TC-VAL-091 | Not Tested |
| AC-07 | Submitting the form with any required field empty or containing only whitespace fails validation. | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-VAL-005, TC-VAL-006, TC-VAL-007, TC-VAL-008, TC-VAL-009, TC-VAL-010, TC-VAL-011, TC-VAL-012, TC-VAL-013, TC-VAL-014, TC-VAL-015, TC-VAL-016, TC-VAL-017 | Not Tested |
| AC-08 | A two-character trimmed name is rejected and a three-character valid name is accepted. | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023 | Not Tested |
| AC-09 | Valid email examples satisfying the specified policy are accepted, while malformed addresses are rejected. | TC-VAL-024, TC-VAL-025, TC-VAL-026, TC-VAL-027, TC-VAL-028, TC-VAL-029, TC-VAL-030, TC-VAL-031, TC-VAL-032, TC-VAL-033, TC-VAL-034, TC-VAL-035, TC-VAL-036 | Not Tested |
| AC-10 | A ten-digit contact number is accepted, while nine-digit, eleven-digit and alphabetic values are rejected. | TC-VAL-037, TC-VAL-038, TC-VAL-039, TC-VAL-040, TC-VAL-041, TC-VAL-042, TC-VAL-043, TC-VAL-044, TC-VAL-045 | Not Tested |
| AC-11 | Missing, impossible, future and pre-1900 birth dates are rejected. | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | Not Tested |
| AC-12 | Valid leap-year dates and permitted date-boundary values are accepted. | TC-VAL-046, TC-VAL-047, TC-VAL-048, TC-VAL-049, TC-VAL-050, TC-VAL-051, TC-VAL-052, TC-VAL-053, TC-VAL-054 | Not Tested |
| AC-13 | Graduation years 1980 and the current year are accepted, while 1979 and the following year are rejected. | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | Not Tested |
| AC-14 | Decimal and scientific-notation graduation-year values are rejected. | TC-VAL-055, TC-VAL-056, TC-VAL-057, TC-VAL-058, TC-VAL-059, TC-VAL-060, TC-VAL-061, TC-VAL-062, TC-VAL-063, TC-VAL-064 | Not Tested |
| AC-15 | One-character designation and organization values are rejected, while valid two-character values are accepted. | TC-VAL-068, TC-VAL-069, TC-VAL-070, TC-VAL-071, TC-VAL-072, TC-VAL-073, TC-VAL-074, TC-VAL-075, TC-VAL-076, TC-VAL-077 | Not Tested |
| AC-16 | Empty and one-character locations are rejected, while valid locations containing at least two trimmed characters are accepted. | TC-VAL-078, TC-VAL-079, TC-VAL-080, TC-VAL-081, TC-VAL-082, TC-VAL-083, TC-VAL-084 | Not Tested |
| AC-17 | HTML constraints and JavaScript validation follow the documented policy without contradictory boundaries or required-field states. | TC-VAL-018, TC-VAL-019, TC-VAL-020, TC-VAL-021, TC-VAL-022, TC-VAL-023, TC-VAL-065, TC-VAL-097 | Not Tested |
| AC-18 | A dedicated feedback textarea exists with a maximum length of 300. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| AC-19 | Empty feedback displays zero entered characters and 300 remaining characters. | TC-FUN-003, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| AC-20 | Typing, deleting and pasting feedback updates both displayed counts correctly. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008, TC-CNT-009 | Not Tested |
| AC-21 | Exactly 300 entered characters produces zero remaining characters. | TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| AC-22 | Normal input cannot exceed 300 characters, and programmatically introduced excessive content fails validation. | TC-CNT-010, TC-CNT-011, TC-CNT-013 | Not Tested |
| AC-23 | Nine trimmed feedback characters are rejected and ten valid trimmed characters are accepted. | TC-VAL-092, TC-VAL-093, TC-VAL-094, TC-VAL-095, TC-VAL-096, TC-CNT-001, TC-CNT-002, TC-CNT-003, TC-CNT-004, TC-CNT-005, TC-CNT-006, TC-CNT-007, TC-CNT-008 | Not Tested |
| AC-24 | Character counting follows the documented UTF-16 length convention, including spaces, line breaks and applicable Unicode characters. | TC-CNT-011, TC-CNT-012, TC-CNT-013 | Not Tested |
| AC-25 | Each invalid field displays a meaningful associated error message and a distinct invalid state. | TC-ERR-001, TC-ERR-005 | Not Tested |
| AC-26 | Following failed validation, keyboard focus moves to the first invalid field. | TC-ERR-001 | Not Tested |
| AC-27 | Validation failure does not erase entered values. | TC-ERR-002 | Not Tested |
| AC-28 | Corrected fields no longer display outdated errors, and success is not displayed while invalid fields remain. | TC-ERR-001, TC-ERR-002 | Not Tested |
| AC-29 | A fully valid form displays the frontend demonstration success message without reloading the page or transmitting data. | TC-FUN-004 | Not Tested |
| AC-30 | Editing any field after successful validation clears the outdated success message. | TC-ERR-003 | Not Tested |
| AC-31 | Reset restores all field values, messages, counter values, selection states and validation styling to their initial states. | TC-CNT-014, TC-ERR-004 | Not Tested |
| AC-32 | Labels, inputs, instructions, buttons, focus states and invalid states are readable, consistent and visually distinguishable. | TC-UI-001 | Not Tested |
| AC-33 | The form remains usable at 1440px, 1280px, 1024px, 768px, 425px, 375px and 320px without unintended horizontal overflow or overlapping controls. | TC-RES-001, TC-RES-002, TC-RES-003, TC-RES-004, TC-RES-005, TC-RES-006, TC-RES-007 | Not Tested |
| AC-34 | All form controls are accessible through keyboard navigation with visible focus and no keyboard traps. | TC-ACC-001, TC-ACC-002 | Not Tested |
| AC-35 | Feedback counts, field errors and form status messages have appropriate programmatic accessibility associations. | TC-ACC-003 | Not Tested |
| AC-36 | Applicable autocomplete attributes are present, validation does not rely exclusively on colour and normal text meets the specified contrast target. | TC-ACC-002, TC-ACC-004 | Not Tested |
| AC-37 | Counter updates, validation and reset occur locally without unnecessary page reloads or dependencies. | TC-PERF-001 | Not Tested |
| AC-38 | Core form operations work in the specified browsers without uncaught JavaScript errors. | TC-COMP-001, TC-COMP-002, TC-COMP-003 | Not Tested |
| AC-39 | Source inspection confirms separation of concerns, scoped changes, meaningful naming and maintainable implementation. | TC-STD-003, TC-STD-004 | Not Tested |
| AC-40 | Browser inspection confirms that application code does not transmit, persist or log registration information. | TC-PRIV-001, TC-PRIV-002 | Not Tested |
| AC-41 | Disabling JavaScript does not permit registration information to be transmitted through default form submission. | TC-FUN-003, TC-PRIV-003, TC-PRIV-004, TC-PRIV-005, TC-PRIV-006 | Not Tested |
| AC-42 | The updated alumni.html document produces zero W3C HTML validation errors. | TC-STD-001 | Not Tested |
| AC-43 | The updated style.css stylesheet produces zero W3C CSS validation errors under the recorded validation profile. | TC-STD-002 | Not Tested |
| AC-44 | Validator warnings are reviewed and applicable coding guidelines are satisfied or deviations are documented. | TC-STD-001, TC-STD-002, TC-STD-003, TC-STD-004 | Not Tested |
| AC-45 | Existing departmental navigation, homepage, timetable and unrelated JavaScript and jQuery functionalities pass regression testing. | TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-005, TC-REG-006, TC-REG-007, TC-REG-008, TC-REG-009, TC-REG-010, TC-REG-011 | Not Tested |
| AC-46 | The final Assignment 1 commit, Git tag, documentation and original submission archive are preserved. | TC-REG-012, TC-DOC-009 | Not Tested |
| AC-47 | The SRS and test plan are complete and contain uniquely identifiable, traceable requirements and test cases. | TC-DOC-001, TC-DOC-002 | Not Tested |
| AC-48 | The AI transcript and development history demonstrate incremental implementation, refinement and conformance review. | TC-DOC-003, TC-DOC-004 | Not Tested |
| AC-49 | The code walkthrough explains the HTML, CSS and JavaScript implementation. | TC-DOC-005 | Not Tested |
| AC-50 | Manual testing, regression testing and W3C validation results are recorded with actual execution evidence. | TC-DOC-006 | Not Tested |
| AC-51 | The final source-code ZIP and public AI transcript share link are available and suitable for submission. | TC-DOC-007, TC-DOC-008 | Not Tested |

## 4. Supporting testing records

### 4.1 Defect log

| Defect ID | Test ID | Revision/environment | Steps | Expected | Actual | Severity | Priority | Status | Fix commit | Retest result | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |

### 4.2 Test execution summary

| Category | Planned | Not Tested | Pass | Fail | Blocked | N/A |
|---|---:|---:|---:|---:|---:|---:|
| Functional and initial-state testing | 5 | 5 | 0 | 0 | 0 | 0 |
| Input validation testing | 97 | 97 | 0 | 0 | 0 | 0 |
| Feedback counter and boundary testing | 14 | 14 | 0 | 0 | 0 | 0 |
| Error handling and reset | 5 | 5 | 0 | 0 | 0 | 0 |
| UI/UX testing | 1 | 1 | 0 | 0 | 0 | 0 |
| Responsive design | 7 | 7 | 0 | 0 | 0 | 0 |
| Accessibility | 4 | 4 | 0 | 0 | 0 | 0 |
| Browser compatibility | 3 | 3 | 0 | 0 | 0 | 0 |
| Performance | 1 | 1 | 0 | 0 | 0 | 0 |
| Privacy and fail-safe behavior | 6 | 6 | 0 | 0 | 0 | 0 |
| Regression and baseline preservation | 12 | 12 | 0 | 0 | 0 | 0 |
| Standards and code quality | 4 | 4 | 0 | 0 | 0 | 0 |
| AI workflow and deliverables | 9 | 9 | 0 | 0 | 0 | 0 |
| Total | 168 | 168 | 0 | 0 | 0 | 0 |

Zero counts denote no execution, not successful testing. Pass rate: not available.

### 4.3 Browser compatibility record

| Browser | Actual version | OS/device | Revision | Actual result | Status | Evidence |
|---|---|---|---|---|---|---|
| Chrome | | | | | Not Tested | |
| Edge | | | | | Not Tested | |
| Firefox | | | | | Not Tested | |
| Mobile browser / emulation | | | | | Not Tested | |

### 4.4 Responsive testing record

| Width (px) | Browser/height/zoom | Actual overflow/layout result | Status | Evidence |
|---|---|---|---|---|
| 1440 | | | Not Tested | |
| 1280 | | | Not Tested | |
| 1024 | | | Not Tested | |
| 768 | | | Not Tested | |
| 425 | | | Not Tested | |
| 375 | | | Not Tested | |
| 320 | | | Not Tested | |

### 4.5 W3C validation evidence record

| File | Validator/profile | Revision/date | Errors | Warnings | Warning disposition | Evidence | Status |
|---|---|---|---|---|---|---|---|
| alumni.html | W3C HTML | | | | | | Not Tested |
| style.css | W3C CSS (profile to record) | | | | | | Not Tested |

### 4.6 Regression summary

| Test ID | Feature | Baseline revision | Candidate revision | Actual result | Status | Evidence |
|---|---|---|---|---|---|---|
| TC-REG-001 | Homepage | | | | Not Tested | |
| TC-REG-002 | Gallery | | | | Not Tested | |
| TC-REG-003 | Faculty directory | | | | Not Tested | |
| TC-REG-004 | Random event image | | | | Not Tested | |
| TC-REG-005 | Digital clock | | | | Not Tested | |
| TC-REG-006 | Navigation | | | | Not Tested | |
| TC-REG-007 | News Events Notices | | | | Not Tested | |
| TC-REG-008 | Timetable | | | | Not Tested | |
| TC-REG-009 | jQuery activity list | | | | Not Tested | |
| TC-REG-010 | Gallery fade | | | | Not Tested | |
| TC-REG-011 | Responsive existing pages | | | | Not Tested | |
| TC-REG-012 | Baseline and repository preservation | | | | Not Tested | |

### 4.7 Requirements coverage summary

| Category | SRS identifiers | Mapped | Executed/verified |
|---|---:|---:|---:|
| FR | 75 | 75 | 0 |
| VR | 20 | 20 | 0 |
| NFR | 68 | 68 | 0 |
| AI | 36 | 36 | 0 |
| DR | 11 | 11 | 0 |
| SC | 11 | 11 | 0 |
| AC | 51 | 51 | 0 |
| Total | 272 | 272 | 0 |

Planned identifier coverage: 100%. This is not a pass rate.

### 4.8 Individual execution record (copy for each run)

| Test ID | Sub-run/input | Date/tester | Browser/version/OS | Revision | Expected | Actual | Status | Evidence/defect |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | Not Tested | |

### 4.9 Final testing conclusion template

- Candidate revision: [record]
- Execution period and environment: [record]
- Tests executed / passed / failed / blocked / not tested: [record]
- Acceptance criteria satisfied: [record]
- Open defects and approved deviations: [record]
- HTML/CSS validation results: [record]
- Regression and remote baseline verification: [record]
- Deliverable verification: [record]
- Submission readiness decision and rationale: [record after execution]

Current conclusion: testing has not started; submission readiness cannot be determined.

## 5. SRS review observations (no baseline changes)

- The document status spelling discrepancy identified in the SRS was corrected during test plan review. No requirement or validation constraint was modified.
- NFR-63 retains its shorter wording, and section 10.1 does not repeat the disabled-button rule. Section 6.1 explicitly requires initial disablement, successful initialization and prevention of native submission. The plan tests these together, including failed initialization as requested; no SRS edit is made.
- Section 17.3 records Assignment 1 tag verification as Completed. This is a source-reported status, not independently verified here; TC-REG baseline check requires remote evidence.
- Native number controls can normalize or reject lexical forms such as scientific notation, and native date controls can sanitize impossible dates. Record attempted and actual values separately; if the implementation cannot distinguish a normalized lexical form, report the discrepancy against VR-10 rather than relaxing the rule.
- Native pattern/minlength checks can differ from trimmed-value rules (especially contact number and optional whitespace-only About Yourself). The SRS permits custom validation; verify final decisions against sections 5–6 and document native limitations.
- Section 6.5 describes remaining as 300 minus entered, but explicitly requires zero for excessive programmatic values. The explicit boundary rule governs testing.
- Existing jQuery features and original archive are conditional on actual baseline availability; missing evidence blocks verification, not an automatic pass.

## 6. References

- Finalized Assignment 2 SRS Version 1.0, uploaded SRS(7).md (sections 4–17).
- Google HTML/CSS Style Guide: https://google.github.io/styleguide/htmlcssguide.html
- W3C Markup Validation Service: https://validator.w3.org/
- W3C CSS Validation Service: https://jigsaw.w3.org/css-validator/

---

**End of Software Test and Validation Plan**

**Version:** 1.0  
**Document Status:** Reviewed and Finalized  
**Execution Status:** Not Tested  
**Implementation Status:** Not Started
