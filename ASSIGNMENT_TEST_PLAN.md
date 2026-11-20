# Test and Validation Plan

## Department of Computer Science Homepage

**University of Delhi**

| Document Information | Details |
|---|---|
| Project Title | Department of Computer Science Homepage |
| Document Type | Software Test and Validation Plan |
| Version | 1.0 |
| Academic Context | Web Development and Prompt Engineering Assignment |
| Reference Document | SRS.md, Version 1.0 |
| Testing Approach | AI-Assisted Test Planning and Manual Verification |
| Technologies | HTML5, CSS3 |
| Test Execution Status | In Progress |

---

## 1. Introduction

### 1.1 Purpose

The purpose of this document is to define a comprehensive testing and validation plan for the Department of Computer Science homepage developed as part of the Web Development and Prompt Engineering assignment.

The test cases are derived from the functional, non-functional, and AI-assisted workflow requirements defined in `SRS.md`.

The plan covers functional behavior, UI/UX, responsive design, semantic HTML, accessibility, HTML/CSS standards compliance, and submission evidence.

### 1.2 Testing Scope

Testing focuses on the mandatory homepage requirements:

- Semantic HTML5 structure
- Department identification
- Primary navigation
- CSS hover-based dropdown submenus
- Departmental overview
- Side-by-side image gallery
- Faculty directory
- Responsive layout
- Footer
- Internal navigation
- HTML/CSS coding conventions
- W3C standards validation
- AI-assisted development evidence

Additional JavaScript and jQuery features in the broader website are outside the mandatory scope of this test plan.

### 1.3 Testing Objectives

The objectives are to:

1. Verify that every mandatory functional requirement is implemented.
2. Check the visual consistency and usability of the homepage.
3. Validate responsiveness at representative viewport widths.
4. Verify semantic HTML structure and image accessibility.
5. Check compliance with the prescribed Google HTML/CSS Style Guide.
6. Validate HTML and CSS using W3C tools.
7. Verify that AI-assisted development activities are documented.
8. Record actual test results and identify implementation gaps.

---

## 2. Testing Environment

| Component | Description |
|---|---|
| Project Type | Static departmental homepage |
| Primary File | index.html |
| Stylesheet | style.css |
| Technologies Under Test | HTML5, CSS3 |
| Code Editor | Visual Studio Code |
| Testing Method | Manual browser testing and source inspection |
| Browsers | Chrome, Edge, Firefox |
| Viewport Widths | 1440px, 1024px, 768px, 600px, 375px |
| HTML Validator | W3C Nu HTML Checker |
| CSS Validator | W3C CSS Validation Service |
| Reference Specification | SRS.md |
| Operating System | To be recorded during testing |
| Test Date | To be recorded during testing |

### 2.1 Test Status Definitions

| Status | Meaning |
|---|---|
| Not Tested | Test has not yet been executed |
| Pass | Actual result matches expected result |
| Fail | Actual result does not match expected result |
| Blocked | Test cannot be executed due to a dependency or environment issue |
| Not Applicable | Test does not apply, with justification |

All tests are initially marked **Not Tested**.

---

## 3. Functional Testing

### 3.1 Semantic HTML Structure

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| FT-01 | FR-01 | Inspect the beginning of index.html | Document uses HTML5 doctype | Pass |
| FT-02 | FR-01 | Inspect the page header | Semantic header element exists | Pass |
| FT-03 | FR-01 | Inspect navigation structure | Navigation uses a nav element | Pass |
| FT-04 | FR-01 | Inspect main content | Main element contains primary content | Pass |
| FT-05 | FR-01 | Inspect content grouping | Logical sections use section elements | Pass |
| FT-06 | FR-01 | Inspect footer | Semantic footer element exists | Pass |

### 3.2 Department Identification and Overview

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| FT-07 | FR-02 | Open homepage | University of Delhi name is visible | Pass |
| FT-08 | FR-02 | Check department heading | Department of Computer Science is identified | Pass |
| FT-09 | FR-05 | Locate departmental overview | A concise overview paragraph is present | Pass |
| FT-10 | FR-05 | Inspect overview placement | Overview appears within main content | Pass |

### 3.3 Navigation and Dropdown Menus

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| FT-11 | FR-03 | Open homepage | Primary navigation is visible | Pass |
| FT-12 | FR-03 | Click navigation links | Links open or scroll to intended destinations | Pass |
| FT-13 | FR-04 | Hover over a dropdown parent | Corresponding submenu becomes visible | Pass |
| FT-14 | FR-04 | Move pointer away from submenu | Dropdown closes as designed | Pass |
| FT-15 | FR-04 | Inspect CSS dropdown implementation | Dropdown visibility is controlled using CSS :hover | Pass |
| FT-16 | FR-10 | Click an internal section link | Browser moves to the correct section | Pass |
| FT-17 | FR-10 | Inspect href and id values | Every internal target exists and matches its link | Pass |

### 3.4 Department Gallery

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| FT-18 | FR-06 | Open Gallery section | Two department-related images appear | Pass |
| FT-19 | FR-06 | Inspect gallery layout | Images are displayed side by side | Pass |
| FT-20 | FR-06 | Inspect gallery CSS | Flexbox or Grid is used | Pass |
| FT-21 | FR-06 | Inspect image sources | Both image files load successfully | Pass |

### 3.5 Faculty Directory

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| FT-22 | FR-07 | Open Faculty section | Faculty profiles are visible | Pass |
| FT-23 | FR-07 | Inspect faculty markup | Faculty details use ul or dl elements | Pass |
| FT-24 | FR-07 | Inspect faculty profiles | Every profile includes a faculty name | Pass |
| FT-25 | FR-07 | Inspect faculty profiles | Every profile includes a designation | Pass |
| FT-26 | FR-07 | Inspect faculty profiles | Every profile includes a date of joining | Pass |

### 3.6 Footer and Responsive Functionality

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| FT-27 | FR-09 | Scroll to bottom of homepage | Footer is visible | Pass |
| FT-28 | FR-09 | Inspect footer content | Appropriate concluding information is present | Pass |
| FT-29 | FR-08 | Resize homepage to tablet width | Content remains readable and usable | Pass |
| FT-30 | FR-08 | Resize homepage to mobile width | Content and navigation remain usable | Pass |

---

## 4. UI/UX Testing

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| UI-01 | NFR-01 | Inspect homepage at desktop width | Sections are aligned consistently | Not Tested |
| UI-02 | NFR-01 | Inspect page typography | Headings and paragraphs are readable | Not Tested |
| UI-03 | NFR-01 | Inspect section spacing | Content has appropriate margins and padding | Not Tested |
| UI-04 | NFR-01 | Inspect navigation styling | Menu items are visually distinguishable | Not Tested |
| UI-05 | NFR-01 | Inspect dropdown placement | Dropdown does not unintentionally cover essential controls | Not Tested |
| UI-06 | NFR-01 | Inspect gallery images | Images are clearly visible without unintended distortion | Not Tested |
| UI-07 | NFR-01 | Inspect faculty section | Profiles are organized and readable | Not Tested |
| UI-08 | NFR-01 | Check text/background contrast | Text remains readable against its background | Not Tested |

---

## 5. Responsive Design Testing

The following widths are representative testing targets defined in the SRS.

| Test ID | SRS Reference | Viewport | Expected Result | Status |
|---|---|---|---|---|
| RD-01 | NFR-01 | 1440px | Desktop layout displays correctly | Pass |
| RD-02 | NFR-01 | 1024px | Content remains readable and aligned | Pass |
| RD-03 | NFR-01 | 768px | Layout adapts to tablet width | Pass |
| RD-04 | NFR-01 | 600px | Mobile layout rules apply appropriately | Pass |
| RD-05 | NFR-01 | 375px | No unintended horizontal page overflow occurs | Pass |
| RD-06 | FR-06, NFR-01 | 375px | Both gallery images remain side by side and visible | Pass |
| RD-07 | FR-07, NFR-01 | 375px | Faculty profiles remain readable | Pass |
| RD-08 | FR-04, FR-08 | 375px | Navigation and dropdown links remain usable | Pass |

---

## 6. HTML Semantics and Accessibility Testing

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| AC-01 | NFR-02 | Inspect HTML heading hierarchy | Headings follow a logical structure | Not Tested |
| AC-02 | NFR-02 | Inspect HTML elements | Elements are used for their intended purpose | Not Tested |
| AC-03 | NFR-08 | Inspect gallery image alt attributes | Informative images have meaningful alternative text | Not Tested |
| AC-04 | NFR-08 | Inspect university logo | Logo has appropriate alternative text | Not Tested |
| AC-05 | NFR-08 | Inspect faculty directory | Faculty information is structured as lists | Not Tested |
| AC-06 | NFR-08 | Navigate using Tab key | Interactive links can receive keyboard focus | Not Tested |
| AC-07 | NFR-08 | Navigate dropdown using keyboard | Keyboard limitations, if any, are identified and recorded | Not Tested |
| AC-08 | NFR-08 | Inspect link descriptions | Link text communicates its destination or purpose | Not Tested |

**Accessibility note:** The assignment explicitly requires CSS hover-based dropdowns. Keyboard access is evaluated as a recommended usability check; any limitation should be documented rather than hidden.

---

## 7. HTML Validation Testing

**Validator:** https://validator.w3.org/nu/

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| HV-01 | NFR-03 | Inspect document beginning | Uses HTML5 doctype | Not Tested |
| HV-02 | NFR-03 | Inspect head element | UTF-8 character encoding is declared | Not Tested |
| HV-03 | NFR-03 | Inspect HTML tag names | Element names are lowercase | Not Tested |
| HV-04 | NFR-03 | Inspect HTML attribute names | Attribute names are lowercase | Not Tested |
| HV-05 | NFR-03 | Inspect attribute values | Values are enclosed in double quotes | Not Tested |
| HV-06 | NFR-03 | Submit HTML to W3C validator | No HTML validation errors are reported | Pass |
| HV-07 | NFR-03 | Inspect HTML nesting | Elements are nested correctly | Not Tested |
| HV-08 | NFR-05 | Inspect link to stylesheet | External CSS file is linked correctly | Not Tested |

---

## 8. CSS Validation Testing

**Validator:** https://jigsaw.w3.org/css-validator/

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| CV-01 | NFR-04 | Submit style.css to CSS validator | No CSS validation errors are reported | Pass |
| CV-02 | NFR-04 | Inspect CSS declarations | Properties and values use valid syntax | Not Tested |
| CV-03 | NFR-04 | Inspect CSS braces | Rules are properly enclosed | Not Tested |
| CV-04 | NFR-04 | Inspect CSS property names | Properties are written in lowercase | Not Tested |
| CV-05 | NFR-04 | Inspect CSS colors | Hexadecimal color values are valid | Not Tested |

---

## 9. Google HTML/CSS Style Guide Testing

**Reference:** https://google.github.io/styleguide/htmlcssguide.html

### 9.1 HTML Coding Conventions

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| SG-01 | NFR-06 | Inspect HTML indentation | Two spaces per indentation level | Not Tested |
| SG-02 | NFR-06 | Inspect source formatting | No tab-based indentation | Not Tested |
| SG-03 | NFR-06 | Inspect HTML tags and attributes | Lowercase syntax is used | Not Tested |
| SG-04 | NFR-06 | Inspect source lines | No unnecessary trailing whitespace | Not Tested |
| SG-05 | NFR-03 | Inspect link tags | No unnecessary type="text/css" attribute | Not Tested |
| SG-06 | NFR-05 | Inspect HTML elements | No inline style attributes | Not Tested |

### 9.2 CSS Coding Conventions

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| SG-07 | NFR-06 | Inspect CSS indentation | Two-space indentation is used | Not Tested |
| SG-08 | NFR-06 | Inspect CSS selectors | Selectors use lowercase naming | Not Tested |
| SG-09 | NFR-06 | Inspect hexadecimal colors | Hexadecimal letters are lowercase | Not Tested |
| SG-10 | NFR-06 | Inspect CSS declarations | A space follows each property colon | Not Tested |
| SG-11 | NFR-06 | Inspect CSS declarations | Each declaration ends with a semicolon | Not Tested |
| SG-12 | NFR-07 | Inspect zero values | Unnecessary units after zero are omitted | Not Tested |
| SG-13 | NFR-07 | Inspect repeated properties | Shorthand properties are used where appropriate | Not Tested |
| SG-14 | NFR-07 | Inspect class names | Names are descriptive and hyphen-separated | Not Tested |
| SG-15 | NFR-07 | Inspect selectors | Classes are preferred over ID selectors for styling | Not Tested |
| SG-16 | NFR-07 | Inspect CSS rules | No unnecessary !important declarations | Not Tested |
| SG-17 | NFR-07 | Inspect CSS organization | Related rules are grouped logically | Not Tested |
| SG-18 | NFR-07 | Inspect CSS comments | Major sections have descriptive comments | Not Tested |

---

## 10. Cross-Browser Testing

| Test ID | SRS Reference | Browser | Expected Result | Status |
|---|---|---|---|---|
| CB-01 | NFR-09 | Google Chrome | Layout and navigation work correctly | Not Tested |
| CB-02 | NFR-09 | Microsoft Edge | Layout and navigation work correctly | Not Tested |
| CB-03 | NFR-09 | Mozilla Firefox | Layout and navigation work correctly | Not Tested |

Browser compatibility is a recommended quality requirement in the SRS.

---

## 11. Code Documentation and Walkthrough Testing

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| CD-01 | NFR-10 | Inspect HTML organization | Major structural blocks are identifiable | Not Tested |
| CD-02 | NFR-10 | Inspect CSS organization | Related styles are grouped logically | Not Tested |
| CD-03 | NFR-10 | Inspect comments | Comments explain relevant code sections | Not Tested |
| CD-04 | AI-05 | Review AI code walkthrough | HTML and CSS blocks are explained accurately | Not Tested |

---

## 12. AI-Assisted Workflow and Deliverable Testing

| Test ID | SRS Reference | Test Case / Action | Expected Result | Status |
|---|---|---|---|---|
| AI-T01 | AI-01 | Review requirements prompt | Prompt demonstrates conversion of informal requirements into SRS | Not Tested |
| AI-T02 | AI-01 | Inspect SRS.md | Formal SRS contains identifiable requirements | Not Tested |
| AI-T03 | AI-02 | Review testing prompt | Prompt requests tests based on SRS | Not Tested |
| AI-T04 | AI-02 | Inspect test plan | Test cases reference SRS requirement IDs | Not Tested |
| AI-T05 | AI-03 | Review development transcript | Iterative code generation or refinement is demonstrated | Not Tested |
| AI-T06 | AI-04 | Review conformance audit | Requirements are compared against actual source code | Not Tested |
| AI-T07 | AI-05 | Review code walkthrough | HTML/CSS functionality is explained | Not Tested |
| AI-T08 | AI-06 | Inspect manual testing records | Actual test results are documented | Not Tested |
| AI-T09 | AI-06 | Inspect W3C validation evidence | HTML and CSS validation results are documented | Not Tested |
| AI-T10 | AI-07 | Inspect ZIP archive | Required source files and image assets are included | Not Tested |
| AI-T11 | AI-07 | Open public AI chat link | Shared conversation is accessible | Not Tested |

---

## 13. Requirements Traceability Matrix

This matrix connects the requirements defined in the SRS with the detailed test cases.

| SRS Requirement | Related Test Cases |
|---|---|
| FR-01 | FT-01–FT-06 |
| FR-02 | FT-07–FT-08 |
| FR-03 | FT-11–FT-12 |
| FR-04 | FT-13–FT-15, RD-08 |
| FR-05 | FT-09–FT-10 |
| FR-06 | FT-18–FT-21, RD-06 |
| FR-07 | FT-22–FT-26, RD-07 |
| FR-08 | FT-29–FT-30, RD-08 |
| FR-09 | FT-27–FT-28 |
| FR-10 | FT-16–FT-17 |
| NFR-01 | UI-01–UI-08, RD-01–RD-08 |
| NFR-02 | AC-01–AC-02 |
| NFR-03 | HV-01–HV-07, SG-05 |
| NFR-04 | CV-01–CV-05 |
| NFR-05 | HV-08, SG-06 |
| NFR-06 | SG-01–SG-04, SG-07–SG-11 |
| NFR-07 | SG-12–SG-18 |
| NFR-08 | AC-03–AC-08 |
| NFR-09 | CB-01–CB-03 |
| NFR-10 | CD-01–CD-03 |
| AI-01 | AI-T01–AI-T02 |
| AI-02 | AI-T03–AI-T04 |
| AI-03 | AI-T05 |
| AI-04 | AI-T06 |
| AI-05 | CD-04, AI-T07 |
| AI-06 | AI-T08–AI-T09 |
| AI-07 | AI-T10–AI-T11 |

---

## 14. Manual Test Execution Procedure

### Phase 1: Functional Verification

1. Open the project in Visual Studio Code.
2. Launch index.html using Live Server or a browser.
3. Check the semantic structure of the homepage.
4. Verify department identification and overview.
5. Test navigation links and CSS hover dropdowns.
6. Check the two-image gallery.
7. Verify faculty names, designations, and joining dates.
8. Inspect footer information.

### Phase 2: Responsive and UI/UX Verification

1. Open browser Developer Tools.
2. Enable responsive device mode.
3. Test viewport widths of 1440px, 1024px, 768px, 600px, and 375px.
4. Verify navigation usability.
5. Check text readability and spacing.
6. Confirm that the gallery remains side by side.
7. Check for unintended horizontal overflow.
8. Record any visual defects.

### Phase 3: HTML/CSS Validation

1. Open the W3C HTML Validator.
2. Upload index.html or paste its source code.
3. Record errors and warnings.
4. Correct any validation errors.
5. Repeat validation.
6. Open the W3C CSS Validator.
7. Upload style.css.
8. Record errors and warnings.
9. Correct errors and validate again.

### Phase 4: Coding Guidelines Review

1. Inspect HTML indentation and formatting.
2. Check lowercase syntax and double-quoted attributes.
3. Verify that presentation is maintained in external CSS.
4. Inspect CSS selectors, declarations, and comments.
5. Identify unnecessary ID selectors and !important declarations.
6. Correct confirmed style-guide violations.
7. Recheck website appearance after changes.

### Phase 5: AI-Assisted Review

1. Provide the SRS, test plan, index.html, and style.css to the AI tool.
2. Request a requirements conformance audit.
3. Review identified gaps.
4. Apply appropriate corrections.
5. Request a code walkthrough.
6. Save or preserve the AI-generated explanations.
7. Verify the final submission archive and chat share link.

---

## 15. Test Pass and Fail Criteria

A test shall be marked **Pass** when the observed result matches the expected result.

A test shall be marked **Fail** when the observed result differs from the expected result.

A test shall remain **Not Tested** until it has actually been executed.

Tests that cannot be executed due to missing dependencies may be marked **Blocked**, with an explanation.

### Overall Acceptance Criteria

The homepage may be considered compliant with the assignment's mandatory requirements when:

- All mandatory functional requirements pass.
- HTML and CSS validation reports contain no errors.
- Required coding conventions are satisfied.
- Responsive layouts are verified.
- Required AI-assisted workflow evidence is available.
- Any remaining recommended-quality limitations are documented.

---

## 16. Defect and Issue Log

Record issues discovered during testing.

| Issue ID | Related Test | Description | Severity | Resolution | Status |
|---|---|---|---|---|---|
| — | — | No issues recorded yet | — | — | Not Started |

### Severity Definitions

- **High:** A mandatory feature is missing or unusable.
- **Medium:** A feature works but has a significant visual or usability defect.
- **Low:** A minor formatting or documentation issue.

---

## 17. Validation Results Record

### 17.1 HTML Validation

| Field | Result |
|---|---|
| Validator | W3C Nu HTML Checker |
| Validation Date | 20 November 2026 |
| Number of Errors | 0 |
| Number of Warnings | 0 |
| Final Status | Pass |

### 17.2 CSS Validation

| Field | Result |
|---|---|
| Validator | W3C CSS Validation Service |
| Validation Date | 20 November 2026 |
| Number of Errors | 0 |
| Number of Warnings | Not confirmed from screenshot |
| Final Status | Pass |

### 17.3 Validation Evidence

| Validation | Evidence | Result |
|---|---|---|
| HTML | screenshots/html-validation.png | Pass |
| CSS | screenshots/css-validation.png | Pass |

---

## 18. Final Testing Summary

| Testing Category | Number of Tests |
|---|---:|
| Functional Testing | 30 |
| UI/UX Testing | 8 |
| Responsive Design | 8 |
| Accessibility and Semantics | 8 |
| HTML Validation | 8 |
| CSS Validation | 5 |
| Google HTML/CSS Style Guide | 18 |
| Cross-Browser Testing | 3 |
| Code Documentation and Walkthrough | 4 |
| AI Workflow and Deliverables | 11 |
| **Total** | **103** |

### Results Summary

| Result | Count |
|---|---:|
| Passed | 40 |
| Failed | 0 |
| Blocked | 0 |
| Not Applicable | 0 |
| Not Tested | 63 |
| **Total** | **103** |

---

## 19. Conclusion

This test and validation plan was generated from the Software Requirements Specification for the Department of Computer Science homepage.

It provides structured verification of functional requirements, responsive behavior, UI/UX quality, HTML semantics, accessibility, coding conventions, and W3C standards compliance.

The plan also includes checks for the AI-assisted development workflow and final assignment deliverables.

The next development activity is to review and refine the existing HTML/CSS code against the SRS and Google HTML/CSS Style Guide.

**Document Status:** HTML and CSS validation completed successfully. Manual functional, responsive, accessibility, and cross-browser testing is in progress.