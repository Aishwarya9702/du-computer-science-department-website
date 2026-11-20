# Requirements Conformance Audit Report

**Project:** Department of Computer Science Homepage  
**University:** University of Delhi  
**Document:** AI-Assisted Requirements Conformance Audit  
**Version:** 1.0  
**Reference:** SRS.md and ASSIGNMENT_TEST_PLAN.md  
**Audit Method:** Static HTML/CSS source inspection  
**Overall Status:** Substantially implemented; final validation pending

## 1. Purpose

This audit evaluates whether the Department of Computer Science homepage implements the functional and non-functional requirements established during the requirements engineering phase.

The review examines the supplied `index.html`, CSS stylesheet, and SRS-based test plan. It also identifies outstanding verification activities.

## 2. Functional Requirements Audit

| Requirement | Finding | Status |
|---|---|---|
| FR-01: Semantic HTML5 | Header, navigation, main content, sections, and footer are present | Compliant |
| FR-02: Department identification | University and department names are displayed | Compliant |
| FR-03: Primary navigation | Navigation links and dropdown structures are implemented | Compliant |
| FR-04: Hover dropdowns | CSS includes `:hover` and `:focus-within` rules | Compliant at code level |
| FR-05: Department overview | Dedicated About section contains an overview | Compliant |
| FR-06: Gallery | Two images are arranged using Flexbox | Compliant at code level |
| FR-07: Faculty directory | Faculty names, designations, and sample joining dates appear in lists | Compliant |
| FR-08: Responsive homepage | Responsive CSS rules exist; behavior requires browser testing | Pending verification |
| FR-09: Footer | Footer identifies the project and includes a disclaimer | Compliant |
| FR-10: Internal navigation | Internal link targets exist in the HTML | Compliant at code level |

## 3. Non-Functional Requirements Audit

| Requirement | Finding | Status |
|---|---|---|
| NFR-01: Responsive layout | Media queries are present; required viewport tests remain | Pending verification |
| NFR-02: Semantic correctness | Semantic structure and heading elements are present | Partially verified |
| NFR-03: HTML standards | HTML5 doctype and UTF-8 declaration are present; W3C check remains | Pending validation |
| NFR-04: CSS standards | Stylesheet is structured; W3C CSS check remains | Pending validation |
| NFR-05: External CSS | Stylesheet is linked through a separate CSS file | Compliant |
| NFR-06: Google coding style | Two-space indentation and lowercase hexadecimal colors are used | Substantially compliant |
| NFR-07: Maintainability | Descriptive classes, section comments, and organized rules are present | Substantially compliant |
| NFR-08: Accessibility | Alternative text and keyboard-focus dropdown styling are present; usability checks remain | Partially verified |
| NFR-09: Browser compatibility | Chrome, Edge, and Firefox testing not yet documented | Pending verification |
| NFR-10: Code documentation | Major HTML and CSS sections have explanatory comments | Compliant at code level |

## 4. Identified Issues and Corrective Actions

### Finding F-01: Generic gallery image descriptions

**Severity:** Low  
**Observation:** Gallery images have general alternative text rather than detailed descriptions.

**Recommended action:** Update alternative text to describe the actual visual content.

**Verification:** AC-03, AC-04.

### Finding F-02: Repeated navigation destinations

**Severity:** Low  
**Observation:** Different Academics and Faculty submenu labels lead to the same section.

**Recommended action:** Clarify submenu labels or introduce separate destinations where appropriate.

**Verification:** FT-12, FT-16, FT-17.

### Finding F-03: Responsive behavior not yet verified

**Severity:** Medium  
**Observation:** Responsive media queries are implemented, but visual results at all required widths have not been recorded.

**Recommended action:** Test at 1440px, 1024px, 768px, 600px, and 375px. Confirm that the gallery remains side by side.

**Verification:** RD-01 through RD-08.

### Finding F-04: Standards validation pending

**Severity:** Medium  
**Observation:** No completed W3C validation evidence has been provided.

**Recommended action:** Submit the HTML and CSS to their respective W3C validators and record any errors and corrections.

**Verification:** HV-06, CV-01.

### Finding F-05: Browser compatibility pending

**Severity:** Low  
**Observation:** Cross-browser execution results have not been supplied.

**Recommended action:** Verify layout, navigation, and gallery in Chrome, Edge, and Firefox.

**Verification:** CB-01 through CB-03.

## 5. AI-Assisted Development Evidence

The development workflow includes formal requirements engineering, SRS-based test planning, iterative HTML/CSS refinement, and this conformance audit.

The remaining workflow evidence consists of the detailed code walkthrough, completed manual test records, standards validation results, and final submission verification.

## 6. Audit Limitations

This audit is based on static inspection of the supplied source code. It does not establish that the website renders correctly in every browser or at every viewport size.

The supplied test plan records tests as not executed. Accordingly, no unperformed test has been marked as passed.

## 7. Conclusion

The homepage substantially implements the mandatory functional requirements identified in the assignment.

The source code demonstrates semantic HTML5, CSS hover-based navigation, a two-image Flexbox gallery, a structured faculty directory, and responsive styling.

Final acceptance remains conditional on completing browser testing, W3C validation, accessibility checks, and documentation of actual test results.
