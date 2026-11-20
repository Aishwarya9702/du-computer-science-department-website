# Software Requirements Specification (SRS)

## Department of Computer Science Homepage

**University of Delhi**

| Document Information | Details |
|---|---|
| Project Title | Department of Computer Science Homepage |
| Document Type | Software Requirements Specification (SRS) |
| Version | 1.0 |
| Academic Context | Web Development and Prompt Engineering Assignment |
| Development Approach | AI-Assisted Front-End Development |
| Technologies | HTML5, CSS3 |
| Institution | University of Delhi |
| Document Status | Initial Requirements Baseline |

---

## 1. Introduction

### 1.1 Purpose

The purpose of this Software Requirements Specification (SRS) is to define the functional, non-functional, interface, and implementation requirements for developing a responsive homepage for the Department of Computer Science, University of Delhi.

The document provides a structured representation of the assignment requirements and establishes a reference for development, testing, validation, and AI-assisted conformance review.

### 1.2 Scope

The proposed system is a static, responsive departmental homepage developed using HTML5 and CSS3.

The homepage shall provide essential departmental information, including:

- University and department identification
- Primary navigation menu
- CSS-driven dropdown submenus
- Departmental overview
- Department-related image gallery
- Faculty directory
- Responsive layouts
- Footer information

The website shall use semantic HTML5 elements and follow established HTML/CSS coding guidelines.

The project also involves the use of Large Language Models (LLMs) for requirements engineering, test planning, iterative development, code review, and code comprehension.

**Scope clarification:** This SRS focuses on the homepage specified in the assignment. Additional features already present in the broader website, such as the alumni registration form, timetable, JavaScript clock, and jQuery interactions, are outside the mandatory scope of this SRS.

### 1.3 Intended Audience

This document is intended for:

- Students developing the homepage
- Faculty evaluating the assignment
- Developers reviewing the HTML/CSS implementation
- Testers performing functional and visual validation
- AI tools assisting with development and conformance checking

### 1.4 Definitions and Abbreviations

| Term | Description |
|---|---|
| SRS | Software Requirements Specification |
| HTML5 | HyperText Markup Language, Version 5 |
| CSS3 | Cascading Style Sheets, Level 3 and related modules |
| UI | User Interface |
| UX | User Experience |
| LLM | Large Language Model |
| W3C | World Wide Web Consortium |
| Responsive Design | Layout adaptation across different viewport sizes |
| Semantic HTML | HTML elements used according to their intended meaning |

---

## 2. Overall System Description

### 2.1 Product Perspective

The system is a browser-based departmental homepage that serves as an informational interface for students, faculty, prospective applicants, and visitors.

The homepage shall be accessible through a modern web browser and shall not require authentication, backend services, or database connectivity for its core functionality.

### 2.2 Product Functions

The homepage shall:

1. Display university and department identification.
2. Provide a primary navigation bar.
3. Display dropdown submenus using CSS hover interactions.
4. Present a concise departmental overview.
5. Display two department-related images side by side.
6. Present faculty names, designations, and joining dates.
7. Adapt its layout to different viewport sizes.
8. Provide a footer with appropriate information.

### 2.3 User Characteristics

The expected users include:

- Students seeking departmental information
- Prospective students exploring academic information
- Faculty members
- Academic visitors
- General website visitors

Users are expected to possess basic familiarity with web browsing.

### 2.4 Operating Environment

The homepage shall operate in modern desktop and mobile web browsers.

The development environment may include:

- Visual Studio Code
- HTML5
- CSS3
- A local browser or development server
- Git and GitHub for version control

### 2.5 Assumptions and Dependencies

- A modern web browser is available.
- Required image assets are stored in the project.
- The stylesheet is correctly linked to the HTML document.
- Departmental information is provided as static content.
- The homepage does not require a backend server.
- Sample faculty joining dates may be used for academic demonstration and must be identified as illustrative rather than official records.

---

## 3. Functional Requirements

### FR-01: Semantic HTML5 Structure

**Priority:** Mandatory

The homepage shall use the following semantic HTML5 elements:

- `<header>` for introductory and departmental identification content.
- `<nav>` for primary navigation.
- `<main>` for the primary webpage content.
- `<section>` for logically grouped content.
- `<footer>` for concluding webpage information.

**Acceptance Condition:** All required semantic elements are present and used according to their intended purpose.

### FR-02: Department Identification

**Priority:** Mandatory

The homepage shall clearly identify the Department of Computer Science and the University of Delhi.

**Acceptance Condition:** The university and department names are visible when the homepage loads.

### FR-03: Primary Navigation Menu

**Priority:** Mandatory

The homepage shall provide a primary navigation bar containing links to relevant departmental sections or pages.

**Acceptance Condition:** Navigation links are visible and lead to their intended destinations.

### FR-04: CSS Dropdown Submenus

**Priority:** Mandatory

The navigation bar shall include dropdown submenus controlled through the CSS `:hover` pseudo-class.

**Acceptance Condition:** Hovering over a navigation item with a submenu reveals the corresponding dropdown without requiring JavaScript.

### FR-05: Departmental Overview

**Priority:** Mandatory

The homepage shall contain a concise paragraph describing the Department of Computer Science.

**Acceptance Condition:** The overview is present, readable, and placed within the main content area.

### FR-06: Department Image Gallery

**Priority:** Mandatory

The homepage shall display two department-related images using a CSS Flexbox or Grid layout.

**Acceptance Condition:** Both images are visible and positioned side by side.

### FR-07: Faculty Directory

**Priority:** Mandatory

The homepage shall display faculty information using structured HTML lists, such as `<ul>` or `<dl>`.

Each faculty profile shall contain:

- Faculty name
- Designation
- Date of joining

**Acceptance Condition:** Every displayed faculty profile contains the three required fields within a structured list.

### FR-08: Responsive Homepage

**Priority:** Mandatory

The homepage shall adapt to desktop, tablet, and mobile viewport widths using responsive CSS techniques.

**Acceptance Condition:** Content remains readable and navigation remains usable across the tested viewport sizes.

### FR-09: Footer

**Priority:** Mandatory

The homepage shall include a semantic `<footer>` element containing appropriate concluding information, such as departmental identification, contact details, or a project disclaimer.

**Acceptance Condition:** The footer is visible and semantically implemented.

### FR-10: Internal Navigation

**Priority:** Mandatory

Where navigation links reference sections on the homepage, the links shall target valid section identifiers.

**Acceptance Condition:** Clicking an internal navigation link moves the browser to its intended section.

---

## 4. Non-Functional Requirements

### NFR-01: Responsiveness

**Priority:** Mandatory

The homepage shall maintain a usable layout at representative viewport widths of 1440px, 1024px, 768px, 600px, and 375px.

These widths are selected as measurable testing targets.

**Acceptance Condition:** Content remains readable, controls remain accessible, and no unintended horizontal page overflow occurs.

### NFR-02: Semantic Correctness

**Priority:** Mandatory

HTML elements shall be used according to their semantic purpose.

**Acceptance Condition:** The page contains appropriate structural elements and a logical heading hierarchy.

### NFR-03: HTML Standards Compliance

**Priority:** Mandatory

The HTML document shall:

- Begin with `<!doctype html>`.
- Declare UTF-8 character encoding.
- Use valid HTML5 markup.
- Use lowercase element and attribute names.
- Enclose attribute values in double quotation marks.

**Acceptance Condition:** The document passes W3C HTML validation without errors.

### NFR-04: CSS Standards Compliance

**Priority:** Mandatory

The stylesheet shall contain valid CSS declarations and follow the prescribed coding guidelines.

**Acceptance Condition:** The stylesheet passes W3C CSS validation without errors.

### NFR-05: Separation of Concerns

**Priority:** Mandatory

HTML shall define the webpage structure, while presentation shall be maintained in an external CSS stylesheet.

Inline `style` attributes shall be avoided.

**Acceptance Condition:** The homepage links to an external stylesheet and does not rely on inline styling for its layout.

### NFR-06: Code Formatting

**Priority:** Mandatory

The source code shall follow these formatting conventions:

- Two-space indentation
- No tab-based indentation
- Lowercase HTML element and attribute names
- Lowercase CSS selectors and properties
- Lowercase hexadecimal color values
- No unnecessary trailing whitespace
- Consistent CSS declaration formatting
- Semicolons at the end of CSS declarations

**Acceptance Condition:** Source inspection confirms compliance with the prescribed conventions.

### NFR-07: CSS Maintainability

**Priority:** Mandatory

The stylesheet shall:

- Group related rules into logical sections.
- Include descriptive section comments.
- Use meaningful, hyphen-separated class names.
- Prefer class selectors over ID selectors for styling.
- Avoid unnecessary `!important` declarations.
- Omit units after zero values where applicable.
- Use shorthand properties where appropriate.

**Acceptance Condition:** CSS code review confirms adherence to the stated conventions.

### NFR-08: Accessibility

**Priority:** Mandatory for meaningful image alternatives; other checks are recommended quality criteria.

All informative images shall contain meaningful `alt` attributes.

Headings, lists, navigation, and structural elements shall be used semantically.

Keyboard accessibility and readable contrast should also be evaluated as part of UI/UX testing.

**Acceptance Condition:** Image alternatives and semantic structures are verified, and any keyboard or contrast limitations are documented.

### NFR-09: Browser Compatibility

**Priority:** Recommended

The homepage should function correctly in current versions of major browsers, including Google Chrome, Microsoft Edge, and Mozilla Firefox.

**Acceptance Condition:** Manual testing confirms that the essential layout and navigation behave consistently in tested browsers.

### NFR-10: Code Documentation

**Priority:** Mandatory

The source code shall be organized and documented using appropriate comments and descriptive identifiers.

**Acceptance Condition:** Major code sections can be identified and understood during a block-by-block walkthrough.

---

## 5. External Interface Requirements

### 5.1 User Interface

The homepage shall provide:

- A clearly visible header
- A horizontal primary navigation bar on desktop
- Dropdown submenus
- A departmental overview section
- A two-image gallery
- A faculty directory
- A footer

The interface should use consistent typography, spacing, and visual styling.

### 5.2 Software Interface

The homepage shall use HTML5 and CSS3.

No external application programming interface (API), authentication system, or database is required.

### 5.3 Hardware Interface

No specialized hardware is required.

The system shall be accessible using a standard computer or mobile device with a web browser.

### 5.4 Communication Interface

The homepage may be opened locally or served through a standard web server.

No specialized communication protocol is required beyond normal browser-based access.

---

## 6. Design and Implementation Constraints

The following constraints apply to the assignment:

1. HTML5 semantic elements must be used.
2. Navigation dropdowns must be implemented using CSS `:hover`.
3. The image gallery must use CSS Flexbox or Grid.
4. Faculty profiles must use structured HTML lists.
5. The homepage must support responsive layouts.
6. HTML structure and CSS presentation must remain separated.
7. Source code must follow the prescribed Google HTML/CSS Style Guide conventions.
8. HTML and CSS must be validated using W3C validation tools.
9. The AI-assisted workflow must be documented through the chat transcript.

---

## 7. AI-Assisted Development Requirements

The following requirements describe the development workflow rather than runtime functionality.

### AI-01: Requirements Engineering

An AI tool shall be prompted to convert the informal assignment specification into a formal SRS document.

**Evidence:** Structured requirements prompt and generated SRS.

### AI-02: Test Planning

An AI tool shall be prompted to generate functional, UI/UX, and HTML/CSS validation test cases based on the SRS.

**Evidence:** AI-generated test plan containing requirement identifiers, test steps, and expected results.

### AI-03: Iterative Development

AI-assisted prompts shall be used to generate, refine, or debug the HTML/CSS implementation.

**Evidence:** Development prompts, suggested changes, and subsequent revisions.

### AI-04: Automated Conformance Review

The SRS, test plan, and source code shall be provided to an AI tool for a requirements compliance review.

**Evidence:** AI-generated audit identifying compliant requirements, gaps, and recommended corrections.

### AI-05: Code Comprehension

An AI tool shall be prompted to explain the HTML and CSS code line by line or block by block.

**Evidence:** Generated code walkthrough.

### AI-06: Manual Verification

The student shall manually execute the test cases and validate the HTML/CSS code using W3C validation tools.

**Evidence:** Recorded test results and validation findings.

### AI-07: Submission Evidence

The final submission shall contain:

- A ZIP archive of the project source files and image assets.
- A public AI chat share link demonstrating the required workflow.

**Evidence:** ZIP archive and accessible shared conversation link.

---

## 8. Acceptance Criteria

The homepage shall be considered compliant with the mandatory functional and technical requirements when:

1. The required semantic HTML5 elements are present.
2. The department and university are clearly identified.
3. The primary navigation menu works.
4. CSS hover-based dropdown submenus are functional.
5. The departmental overview is displayed.
6. Two images are displayed side by side.
7. Faculty information is presented using structured HTML lists.
8. Faculty names, designations, and joining dates are visible.
9. The homepage remains usable at the specified viewport widths.
10. The HTML document passes W3C validation without errors.
11. The CSS stylesheet passes W3C validation without errors.
12. The prescribed coding conventions have been reviewed and applied.
13. The SRS-based test plan has been executed and its results documented.
14. The AI-assisted development workflow is demonstrated through the submitted transcript.

---

## 9. Requirements Traceability Matrix

The following matrix links requirements to planned validation activities.

| Requirement ID | Requirement | Planned Test ID | Verification Method |
|---|---|---|---|
| FR-01 | Semantic HTML5 structure | TC-01 | HTML inspection |
| FR-02 | Department identification | TC-02 | Visual inspection |
| FR-03 | Primary navigation | TC-03 | Functional testing |
| FR-04 | CSS dropdown menus | TC-04 | Hover interaction |
| FR-05 | Departmental overview | TC-05 | Content inspection |
| FR-06 | Side-by-side image gallery | TC-06 | Layout testing |
| FR-07 | Faculty directory | TC-07 | HTML and content inspection |
| FR-08 | Responsive homepage | TC-08 | Viewport testing |
| FR-09 | Semantic footer | TC-09 | HTML inspection |
| FR-10 | Internal navigation | TC-10 | Link testing |
| NFR-01 | Responsive behavior | TC-11 | Multi-viewport testing |
| NFR-02 | Semantic correctness | TC-12 | Markup review |
| NFR-03 | HTML standards | TC-13 | W3C HTML validation |
| NFR-04 | CSS standards | TC-14 | W3C CSS validation |
| NFR-05 | External CSS | TC-15 | Source inspection |
| NFR-06 | Code formatting | TC-16 | Style-guide review |
| NFR-07 | CSS maintainability | TC-17 | CSS inspection |
| NFR-08 | Accessibility | TC-18 | Accessibility review |
| NFR-09 | Browser compatibility | TC-19 | Cross-browser testing |
| NFR-10 | Code documentation | TC-20 | Code walkthrough review |
| AI-01–AI-07 | AI-assisted workflow | TC-21 | Deliverable and transcript review |

The test IDs are provisional and will be used as the starting point for the detailed test suite generated in the next stage.

---

## 10. Out-of-Scope Features

The following features are not mandatory for the homepage assignment:

- Backend database integration
- User authentication
- Alumni registration processing
- Dynamic server-side content
- Administrative dashboards
- Online payments
- Content management systems
- Advanced JavaScript or jQuery functionality

These features may exist in the broader practical project without affecting the homepage assignment's minimum requirements.

---

## 11. Conclusion

This Software Requirements Specification establishes the functional, non-functional, technical, and AI-assisted workflow requirements for the Department of Computer Science homepage.

The document provides a formal baseline for developing, reviewing, and validating the homepage according to the assignment specification.

The next stage of the assignment is to generate a comprehensive test and validation suite based on the requirements identified in this SRS.

**Document Status:** Requirements specification prepared; implementation compliance and manual validation remain pending.