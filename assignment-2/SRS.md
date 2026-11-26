# Software Requirements Specification (SRS)

## Assignment 2: Designing and Validating an Alumni Registration Form Using AI-Assisted Development

**Department of Computer Science**  
**University of Delhi**  
**M.Sc. Computer Science**  
**Web Development and Prompt Engineering**

---

## 1. Document Information

| Attribute | Description |
|---|---|
| Document Title | Software Requirements Specification |
| Project Name | Department of Computer Science Website |
| Module | Alumni Registration Form |
| Assignment | Assignment 2 |
| Document Version | 1.0 |
| Date | 26 November 2026 |
| Document Status | Reviewed and Finalized |
| Development Methodology | Incremental AI-Assisted Software Development |
| Technologies | HTML5, CSS3, JavaScript |
| Application Type | Frontend Web Application |
| Version Control | Git and GitHub |
| Document Location | assignment-2/SRS.md |
| Intended Audience | Student Developer, Course Instructor, Tester and Reviewer |

### 1.1 Version History

| Version | Date | Description |
|---|---|---|
| 1.0 | 26 November 2026 | Initial SRS prepared from the official assignment specification, existing source files and preliminary implementation gap analysis. Reviewed and finalized before test planning and implementation. |

### 1.2 Document Conventions

The following classifications distinguish official assignment requirements from existing functionality and proposed implementation decisions.

| Classification | Meaning |
|---|---|
| M — Mandatory | Requirement explicitly specified in the official Assignment 2 instructions. |
| E — Existing | Additional functionality or behavior inherited from Assignment 1 that must be preserved. |
| P — Proposed | Implementation decision introduced to improve consistency, accessibility, maintainability or usability. |
| C — Project Constraint | Requirement arising from the agreed project scope, repository strategy or frontend-only architecture. |

All requirements included in the approved SRS shall form the development baseline, regardless of their original classification.

The term **shall** indicates a requirement that must be satisfied by the implementation.

### 1.3 Requirement Identification

| Prefix | Requirement Category |
|---|---|
| FR | Functional Requirement |
| NFR | Non-Functional Requirement |
| VR | Validation Requirement |
| AI | AI-Assisted Workflow Requirement |
| DR | Deliverable Requirement |
| AC | Acceptance Criterion |
| SC | System Constraint |

Each requirement shall have a unique identifier to support traceability, test planning, implementation review and final conformance auditing.

---

## 2. Introduction

### 2.1 Purpose

The purpose of this Software Requirements Specification is to define the functional, non-functional, validation, accessibility, interface and development requirements for enhancing the existing Alumni Registration Form of the Department of Computer Science website.

The document converts the informal Assignment 2 specification into structured, measurable and testable software requirements.

It shall serve as the primary reference for:

- Requirements engineering.
- Software test planning.
- Incremental implementation.
- AI-assisted development.
- Automated conformance review.
- Code comprehension.
- Manual browser testing.
- HTML and CSS standards validation.
- Final academic submission.

### 2.2 Project Background

A departmental website was previously developed as part of Assignment 1 using HTML5, CSS3 and JavaScript.

The website includes a departmental homepage, an Alumni Registration Form, a course timetable page, navigation facilities and interactive JavaScript-based functionalities.

The existing Alumni Registration Form already includes most registration fields, basic form styling, JavaScript validation, feedback collection, character counting and reset functionality.

Assignment 2 extends this existing implementation by introducing missing requirements and improving validation consistency, semantic structure, accessibility, responsiveness and user experience.

The project shall follow an incremental development approach rather than creating an independent application.

### 2.3 Scope

The scope of Assignment 2 includes:

- Enhancement of the existing Alumni Registration Form.
- Addition of missing registration fields.
- Semantic grouping of related form fields.
- Improvement of HTML input constraints.
- Synchronization of HTML and JavaScript validation rules.
- Feedback collection with a maximum limit of 300 characters.
- Live display of entered and remaining feedback characters.
- Field-specific validation messages.
- Visual identification of invalid fields.
- Successful frontend validation messages.
- Form reset functionality.
- Responsive interface design.
- Accessibility improvements.
- AI-assisted requirements engineering, implementation and testing.
- Preservation of existing departmental website functionalities.
- Preparation of Assignment 2 documentation and submission evidence.

### 2.4 Out-of-Scope Functionalities

The following functionalities are outside the scope of this assignment:

- Backend development.
- Database integration.
- Persistent alumni information storage.
- User authentication and authorization.
- Account creation and login.
- Email or mobile number verification services.
- OTP generation.
- Server-side form processing.
- Actual transmission of registration information.
- Administrative dashboards.
- Modification of unrelated departmental website features.

The registration form shall operate as a frontend-only academic demonstration.

### 2.5 Project Objectives

The objectives of the project are to:

1. Develop a complete and responsive Alumni Registration Form.
2. Collect personal, academic and professional information through appropriate form controls.
3. Implement all nine registration fields specified in Assignment 2.
4. Provide a feedback textarea with a maximum limit of 300 characters.
5. Display entered and remaining feedback characters dynamically.
6. Validate user input using consistent HTML and JavaScript constraints.
7. Provide meaningful and accessible validation messages.
8. Improve usability across desktop, tablet and mobile devices.
9. Follow standard HTML5, CSS3 and JavaScript coding practices.
10. Demonstrate a structured AI-assisted software development lifecycle.
11. Preserve the completed Assignment 1 implementation and documentation.
12. Produce verifiable testing and standards-validation evidence.

### 2.6 Definitions and Abbreviations

| Term | Definition |
|---|---|
| SRS | Software Requirements Specification |
| SDLC | Software Development Life Cycle |
| HTML5 | HyperText Markup Language, Version 5 |
| CSS3 | Cascading Style Sheets, Level 3 |
| JS | JavaScript |
| DOM | Document Object Model |
| LLM | Large Language Model |
| UI | User Interface |
| UX | User Experience |
| DOB | Date of Birth |
| W3C | World Wide Web Consortium |
| ARIA | Accessible Rich Internet Applications |
| RTM | Requirements Traceability Matrix |
| Git | Distributed version control system |
| GitHub | Platform for hosting and managing Git repositories |
| Frontend Validation | Validation performed within the user's web browser |
| Regression Testing | Testing existing functionalities after introducing modifications |

---

## 3. Overall System Description

### 3.1 Existing System Overview

The existing departmental website contains the following relevant files:

| File | Existing Responsibility |
|---|---|
| alumni.html | Alumni Registration Form and page structure |
| style.css | Shared website styling and responsive layouts |
| script.js | Alumni validation, character counting and other interactive website functionalities |
| index.html | Departmental homepage |
| timetable.html | Course timetable page |

The preliminary source-code review established that the existing Alumni Registration Form contains eight of the nine registration fields specified in Assignment 2.

The existing form additionally contains an About Yourself textarea and an Alumni Feedback textarea.

Existing implementations include:

- Semantic page-level HTML elements.
- Associated form labels.
- Appropriate HTML input types.
- A degree-selection dropdown.
- A feedback textarea with a 300-character maximum.
- Live entered-character counting.
- JavaScript empty-field validation.
- Minimum-length validation.
- Email and contact-number validation.
- Date-of-birth validation.
- Graduation-year validation.
- Form validation messages.
- Register and Reset buttons.
- Responsive CSS styling.

The presence of these implementations has been established through source-code inspection. Their actual browser behavior has not yet been verified during Assignment 2.

### 3.2 Existing System Limitations

| Gap ID | Identified Limitation |
|---|---|
| GAP-01 | Current Location field is missing. |
| GAP-02 | Form fields are not grouped using fieldset and legend elements. |
| GAP-03 | Remaining feedback characters are not explicitly displayed. |
| GAP-04 | HTML required attributes do not consistently match JavaScript validation. |
| GAP-05 | Several JavaScript minimum-length constraints are absent from HTML. |
| GAP-06 | HTML and JavaScript graduation-year limits differ. |
| GAP-07 | Invalid inputs are not visually distinguished from normal inputs. |
| GAP-08 | Empty-field validation produces a generic message. |
| GAP-09 | HTML date-of-birth boundaries are missing. |
| GAP-10 | Feedback counter is not directly associated with the textarea. |
| GAP-11 | Field-specific accessible error associations are missing. |
| GAP-12 | Focus is not moved to an invalid field after failed validation. |
| GAP-13 | The additional About Yourself field is mandatory in JavaScript but optional in HTML. |
| GAP-14 | Validation messages may remain visible after the user changes input. |
| GAP-15 | Updated responsive behavior requires manual verification. |
| GAP-16 | Enhanced reset behavior requires verification. |
| GAP-17 | Updated HTML and CSS standards validation is pending. |
| GAP-18 | Assignment 2 documentation and testing evidence are pending. |

### 3.3 Proposed System

The proposed system shall extend the existing Alumni Registration Form within the departmental website.

The enhanced system shall organize registration information into the following semantic groups:

| Group | Fields |
|---|---|
| Personal Information | Full Name, Email Address, Contact Number, Date of Birth |
| Academic Information | Academic Batch / Year of Passing, Course / Department |
| Professional Information | Current Designation, Organization / Company Name, Current Location |
| Additional Information and Feedback | About Yourself, Alumni Feedback |

The system shall retain the existing departmental visual identity and navigation structure.

### 3.4 User Characteristics

| User | Description |
|---|---|
| Alumni | Users entering personal, academic and professional information and feedback. |
| Student Developer | Individual responsible for requirements engineering, implementation and testing. |
| Course Instructor | Academic evaluator reviewing functionality, code quality and deliverables. |
| Tester | Individual executing functional, accessibility, responsive and regression test cases. |

The application shall not implement separate user roles, authentication or access-control mechanisms.

### 3.5 Operating Environment

The application shall operate within a modern web browser supporting HTML5, CSS3 and standard JavaScript.

The proposed development and testing environment includes:

- A local development environment.
- A modern source-code editor.
- Git and GitHub.
- Browser developer tools.
- Desktop and mobile browser environments.
- W3C HTML and CSS validation services.
- An LLM-based AI assistant.

No application server or database shall be required.

### 3.6 System Architecture

The system shall use a client-side architecture consisting of three primary layers.

| Layer | Technology | Responsibility |
|---|---|---|
| Structure | HTML5 | Semantic markup, form fields, labels and input constraints |
| Presentation | CSS3 | Layout, styling, responsiveness and validation states |
| Behavior | JavaScript | Character counting, input validation, error handling and reset behavior |

The browser shall load the HTML document and its external CSS and JavaScript resources.

All registration validation shall occur locally within the browser.

No registration information shall be transmitted to an external system.

---

## 4. Functional Requirements

### 4.1 Semantic Structure and Form Organization

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-01 | The system shall provide an Alumni Registration page using semantic HTML5 elements, including header, navigation, main, section and footer. | M |
| FR-02 | The system shall contain a dedicated form element for collecting alumni registration information. | M |
| FR-03 | The system shall group related registration fields using fieldset elements. | M |
| FR-04 | Each fieldset shall contain a meaningful legend describing its purpose. | M |
| FR-05 | Every user-editable form control shall have a meaningful label associated with its unique identifier. | M |
| FR-06 | The system shall organize registration fields into personal, academic, professional and additional information groups. | P |
| FR-07 | The system shall clearly distinguish required and optional fields through visible indicators and appropriate HTML attributes. | P |
| FR-08 | The system shall preserve the existing departmental header, footer and navigation links. | E, C |

### 4.2 Personal Information

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-09 | The system shall provide a required Full Name text field. | M, P |
| FR-10 | The system shall provide a required Email Address field using the email input type. | M, P |
| FR-11 | The system shall provide a required Contact Number field using the tel input type. | M, P |
| FR-12 | The system shall provide a required Date of Birth field using the date input type. | M, P |

### 4.3 Academic Information

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-13 | The system shall provide a required Academic Batch / Year of Passing field using a numeric input control. | M, P |
| FR-14 | The system shall provide a required Course / Department selection field. | M, P |
| FR-15 | The Course / Department dropdown shall retain the existing course options and an initial empty selection. | E |
| FR-16 | The system shall reject the initial empty course selection during form validation. | M, P |

The existing course options shall be preserved:

- B.Sc. (Hons.) Computer Science.
- M.Sc. Computer Science.
- Master of Computer Applications.
- Ph.D. Computer Science.
- Other.

These options are inherited from the existing implementation and are not asserted to be an exhaustive official list of University of Delhi programmes.

### 4.4 Professional Information

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-17 | The system shall provide a required Current Designation text field. | M, P |
| FR-18 | The system shall provide a required Organization / Company Name text field. | M, P |
| FR-19 | The system shall provide a required Current Location text field. | M, P |
| FR-20 | The designation and organization fields shall accept meaningful alternatives for alumni who are unemployed, retired, self-employed or pursuing further studies. | P |

Examples of acceptable professional information include Student, Retired, Self-employed, Not applicable and similar meaningful textual responses satisfying the validation constraints.

The Current Location field shall collect a general location, such as a city or city and country. It shall not require a complete residential address.

### 4.5 Additional Information

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-21 | The system shall retain the existing About Yourself textarea. | E |
| FR-22 | The About Yourself field shall be optional. | P |
| FR-23 | When non-empty information is entered in About Yourself, it shall satisfy the specified minimum-length constraint. | E, P |

The About Yourself field is an additional feature inherited from Assignment 1. It is not one of the nine registration fields explicitly specified in Assignment 2.

### 4.6 Feedback Collection

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-24 | The system shall provide a dedicated Alumni Feedback textarea for collecting comments, suggestions and feedback. | M |
| FR-25 | The feedback textarea shall restrict user-entered content to a maximum of 300 characters. | M |
| FR-26 | The system shall display the number of feedback characters entered. | M |
| FR-27 | The system shall explicitly display the number of feedback characters remaining. | M |
| FR-28 | The character counter shall update whenever the feedback value changes through normal user input, including typing, deletion and pasting. | M, P |
| FR-29 | The character counter shall initially display zero entered characters and 300 remaining characters. | P |
| FR-30 | When feedback reaches 300 characters, the counter shall display 300 entered characters and zero remaining characters. | M, P |
| FR-31 | The feedback counter shall be restored to its initial state when the form is reset. | M, E |
| FR-32 | JavaScript shall independently reject feedback exceeding 300 characters if the HTML input restriction is bypassed. | M, P |
| FR-33 | Alumni Feedback shall be required and shall contain at least 10 characters after trimming leading and trailing whitespace. | E, P |

The required status and minimum length of 10 characters are retained implementation decisions from Assignment 1. The official Assignment 2 specification explicitly mandates only the maximum limit of 300 characters.

### 4.7 Form Validation

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-34 | The system shall validate registration information using JavaScript before displaying a successful validation message. | M |
| FR-35 | The system shall reject submission when any required field is empty. | M |
| FR-36 | The system shall treat whitespace-only values as empty for required textual fields. | P |
| FR-37 | The system shall enforce the specified minimum lengths for applicable textual fields. | M |
| FR-38 | The system shall reject email addresses that do not satisfy the defined email-format rules. | M |
| FR-39 | The system shall reject contact numbers that do not satisfy the defined digit and length constraints. | M |
| FR-40 | The system shall reject missing, invalid or future dates of birth. | M |
| FR-41 | The system shall reject graduation years outside the specified permitted range or not represented by four decimal digits. | E, P |
| FR-42 | The system shall reject feedback exceeding 300 characters or failing the approved minimum-length requirement. | M, E |
| FR-43 | The system shall validate Current Location according to its required status and minimum length. | M, P |
| FR-44 | HTML input constraints and JavaScript validation shall implement the same approved validation policy. | P |
| FR-45 | The system shall prevent default form submission and shall not transmit registration information. | C |

### 4.8 Error Handling

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-46 | The system shall display meaningful validation messages identifying the affected fields and the corresponding validation failures. | M |
| FR-47 | Validation messages shall appear near their corresponding invalid fields. | P |
| FR-48 | The system shall visually distinguish invalid fields from valid or unvalidated fields. | M |
| FR-49 | The system shall identify invalid fields programmatically using appropriate accessibility attributes. | P |
| FR-50 | Following an unsuccessful validation attempt, the system shall move keyboard focus to the first invalid field. | P |
| FR-51 | The system shall preserve entered information when validation fails. | P |
| FR-52 | When an invalid field is corrected, its outdated error message and invalid state shall be cleared or updated according to the current validation result. | P |
| FR-53 | The system shall provide a general form-level message indicating that validation errors must be corrected. | P |
| FR-54 | The system shall not display a successful validation message while any validation condition remains unsatisfied. | M |

### 4.9 Successful Validation

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-55 | The system shall provide a Register button for initiating form validation. | M |
| FR-56 | When all applicable validation conditions are satisfied, the system shall display a meaningful success message. | M |
| FR-57 | The success message shall explicitly indicate that the application is a demonstration and that no registration information has been transmitted or stored. | E, C |
| FR-58 | The system shall retain entered information after successful validation until the user resets or edits the form. | E, P |
| FR-59 | The system shall clear an outdated success message when the user modifies any registration field. | P |

The recommended success message is:

> Form validated successfully! This is a demonstration; no data has been submitted or stored.

Successful validation shall not be represented as an actual completed alumni registration.

### 4.10 Reset Functionality

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-60 | The system shall provide a Reset button. | M |
| FR-61 | Activating Reset shall restore all editable form controls to their initial values. | M |
| FR-62 | Reset shall restore the feedback counter to zero entered characters and 300 remaining characters. | M, E |
| FR-63 | Reset shall clear all field-specific validation messages and form-level messages. | P |
| FR-64 | Reset shall remove invalid-field styling and restore the initial accessibility validation states. | P |
| FR-65 | Reset shall restore the initial empty Course / Department selection. | P |
| FR-66 | Reset shall not initiate form submission or data transmission. | C |

### 4.11 Existing Website Preservation

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| FR-67 | The system shall retain navigation between the homepage, Alumni Registration page and timetable page. | E, C |
| FR-68 | Existing departmental homepage content and layout shall remain unaffected by alumni form enhancements. | E, C |
| FR-69 | Existing random event-image functionality shall be preserved. | E |
| FR-70 | Existing faculty experience calculation functionality shall be preserved. | E |
| FR-71 | Existing digital clock functionality shall be preserved. | E |
| FR-72 | Existing navigation dropdown functionality, including hover, keyboard focus and click or tap behavior, shall be preserved. | E |
| FR-73 | Existing jQuery-based activity-list and gallery fade functionalities shall be preserved wherever implemented in the complete repository. | E, C |
| FR-74 | Existing timetable functionality and styling shall remain unaffected. | E, C |
| FR-75 | Existing Assignment 1 documentation and its final submission version shall be preserved. | C |

---

## 5. Detailed Input Field Specifications

### 5.1 Field Definition Table

The following table defines the proposed validation baseline for Assignment 2.

All nine registration fields are mandatory under this proposed baseline. The official assignment requires their inclusion but does not individually prescribe the mandatory or optional status of every field.

| Field ID | Field Name | HTML Control | Data Type | Required | Minimum | Maximum / Constraint |
|---|---|---|---|---|---|---|
| IN-01 | Full Name | Text input | String | Yes | 3 characters | No additional maximum specified |
| IN-02 | Email Address | Email input | String | Yes | Valid format | Defined email-format rules |
| IN-03 | Contact Number | Telephone input | Numeric string | Yes | 10 digits | Exactly 10 ASCII digits |
| IN-04 | Date of Birth | Date input | Calendar date | Yes | 1900-01-01 | Current local date |
| IN-05 | Academic Batch / Year of Passing | Number input | Integer year | Yes | 1980 | Current local calendar year |
| IN-06 | Course / Department | Select | Enumerated string | Yes | Non-empty selection | One available non-placeholder option |
| IN-07 | Current Designation | Text input | String | Yes | 2 characters | No additional maximum specified |
| IN-08 | Organization / Company Name | Text input | String | Yes | 2 characters | No additional maximum specified |
| IN-09 | Current Location | Text input | String | Yes | 2 characters | No additional maximum specified |
| IN-10 | About Yourself | Textarea | String | No | 10 characters if non-empty | No additional maximum specified |
| IN-11 | Alumni Feedback | Textarea | String | Yes | 10 characters | 300 characters |

### 5.2 Input Field Descriptions

#### 5.2.1 Full Name

The Full Name field shall collect the name of the alumnus.

Validation constraints:

- The field shall be mandatory.
- The value shall contain at least three characters after trimming leading and trailing whitespace.
- Whitespace-only input shall be rejected.
- Legitimate names containing spaces, hyphens, apostrophes or non-English letters shall not be rejected solely because of those characters.

The minimum length of three characters is inherited from Assignment 1. It is a project-specific rule rather than an official assignment value.

#### 5.2.2 Email Address

The Email Address field shall collect an email address using the HTML email input type.

Validation constraints:

- The field shall be mandatory.
- Leading and trailing whitespace shall be ignored during validation.
- The address shall satisfy the browser's basic single-email syntax constraints.
- The address shall contain exactly one at-sign separating the local part and domain.
- The local part and domain shall not be empty.
- The domain shall contain a period separating non-empty domain components.
- Embedded whitespace shall not be permitted.

The domain-period rule retains the existing project's requirement for a domain suffix.

The system shall perform format validation only. It shall not verify email ownership, existence or deliverability.

#### 5.2.3 Contact Number

The Contact Number field shall collect a contact number using the telephone input type.

Validation constraints:

- The field shall be mandatory.
- Leading and trailing whitespace shall be ignored during validation.
- The normalized value shall contain exactly ten ASCII digits.
- Alphabetic characters, internal spaces, hyphens and other symbols shall be rejected.
- Numbers containing fewer or more than ten digits shall be rejected.
- Leading zeroes shall not be removed through numeric conversion.

The ten-digit format is inherited from Assignment 1 and is adopted as a domestic contact-number convention for this academic project.

International telephone formats and country-code validation are outside the current scope.

#### 5.2.4 Date of Birth

The Date of Birth field shall collect a valid calendar date using the HTML date input type.

Validation constraints:

- The field shall be mandatory.
- The selected date shall represent a valid calendar date.
- The date shall not precede 1 January 1900.
- The date shall not exceed the current local calendar date.
- Invalid calendar dates shall be rejected.
- Leap-year dates shall be evaluated according to calendar rules.

The minimum date of 1 January 1900 is inherited from the existing JavaScript implementation.

The system shall not impose an additional minimum-age requirement because the official assignment does not specify one.

#### 5.2.5 Academic Batch / Year of Passing

The Academic Batch / Year of Passing field shall collect the calendar year in which the alumnus completed the relevant academic programme.

Validation constraints:

- The field shall be mandatory.
- The value shall contain exactly four decimal digits.
- The value shall represent an integer year.
- The minimum permitted year shall be 1980.
- The maximum permitted year shall be the current local calendar year.
- Future graduation years shall be rejected.
- Decimal values and scientific-notation representations shall be rejected.

The minimum year of 1980 is inherited from Assignment 1.

The dynamic maximum year resolves the inconsistency between the existing HTML maximum of 2035 and the JavaScript maximum of the current year.

#### 5.2.6 Course / Department

The Course / Department field shall allow alumni to select their academic programme from the available options.

Validation constraints:

- The field shall be mandatory.
- The initial placeholder option shall have an empty value.
- The placeholder shall not constitute a valid selection.
- The selected value shall correspond to an available non-placeholder option.

The existing degree dropdown shall be retained and relabelled where necessary to align with Assignment 2 terminology.

#### 5.2.7 Current Designation

The Current Designation field shall collect the current professional or academic designation of the alumnus.

Validation constraints:

- The field shall be mandatory.
- The value shall contain at least two characters after trimming.
- Whitespace-only input shall be rejected.
- Meaningful alternatives such as Student, Retired or Unemployed shall be accepted.

#### 5.2.8 Organization / Company Name

The Organization / Company Name field shall collect the organization or company associated with the alumnus.

Validation constraints:

- The field shall be mandatory.
- The value shall contain at least two characters after trimming.
- Whitespace-only input shall be rejected.
- Alternatives such as Self-employed, Independent or Not applicable shall be accepted.

#### 5.2.9 Current Location

The Current Location field shall collect the general current geographical location of the alumnus.

Validation constraints:

- The field shall be mandatory.
- The value shall contain at least two characters after trimming.
- Whitespace-only input shall be rejected.
- City names and city-country combinations shall be accepted.

No location-verification service, geolocation permission or external mapping integration shall be required.

#### 5.2.10 About Yourself

The About Yourself field shall retain the additional information functionality introduced in Assignment 1.

Validation constraints:

- The field shall be optional.
- Empty or whitespace-only input shall be accepted as an omitted optional value.
- If non-empty content is provided, the trimmed value shall contain at least ten characters.

Changing this field from effectively mandatory to optional resolves the existing HTML and JavaScript inconsistency while preserving the feature.

#### 5.2.11 Alumni Feedback

The Alumni Feedback field shall collect suggestions, comments or feedback concerning the department.

Validation constraints:

- The field shall be mandatory.
- The trimmed value shall contain at least ten characters.
- The original textarea value shall not exceed 300 characters.
- Whitespace-only feedback shall be rejected.
- Spaces and line breaks shall contribute to the maximum character count.
- Feedback containing exactly 300 characters shall be accepted if all other validation conditions are satisfied.

The minimum length and mandatory status are retained project decisions. The maximum length of 300 characters is an explicit assignment requirement.

---

## 6. Validation Requirements

### 6.1 General Validation Policy

The system shall implement custom JavaScript validation while retaining appropriate HTML validation attributes.

The existing form-level novalidate approach may be retained to prevent automatic browser submission messages from interfering with the custom validation interface.

When novalidate is used, JavaScript shall explicitly enforce all applicable validation rules.

HTML attributes shall communicate the expected input constraints, support accessibility and provide native input restrictions where applicable.

JavaScript shall perform the final validation decision.

To ensure safe behavior when JavaScript is unavailable, the Register button shall initially be disabled and shall be enabled only after successful initialization of the JavaScript form-validation functionality. The implementation shall also prevent unintended native form submission when JavaScript is unavailable.

### 6.2 Validation Rule Specification

| Requirement ID | Validation Rule | Expected Result | Classification |
|---|---|---|---|
| VR-01 | A required field is empty. | Submission validation fails and the affected field is identified. | M |
| VR-02 | A required textual field contains only whitespace. | The value is treated as empty. | P |
| VR-03 | Full Name contains fewer than three trimmed characters. | Full Name validation fails. | M, E |
| VR-04 | Email does not satisfy the approved email-format rules. | Email validation fails. | M |
| VR-05 | Contact Number does not contain exactly ten ASCII digits after trimming. | Contact Number validation fails. | M, E |
| VR-06 | Date of Birth is missing. | Date of Birth validation fails. | M |
| VR-07 | Date of Birth does not represent a valid calendar date. | Date of Birth validation fails. | M |
| VR-08 | Date of Birth is later than the current local date. | Date of Birth validation fails. | M |
| VR-09 | Date of Birth precedes 1 January 1900. | Date of Birth validation fails. | E |
| VR-10 | Graduation year is not represented by exactly four decimal digits. | Graduation year validation fails. | E |
| VR-11 | Graduation year is less than 1980 or greater than the current year. | Graduation year validation fails. | E, P |
| VR-12 | Course / Department selection is empty or not an available valid option. | Course selection validation fails. | M, P |
| VR-13 | Current Designation contains fewer than two trimmed characters. | Designation validation fails. | E |
| VR-14 | Organization contains fewer than two trimmed characters. | Organization validation fails. | E |
| VR-15 | Current Location contains fewer than two trimmed characters. | Location validation fails. | P |
| VR-16 | About Yourself is non-empty after trimming but contains fewer than ten trimmed characters. | About Yourself validation fails. | E, P |
| VR-17 | Feedback contains fewer than ten trimmed characters. | Feedback validation fails. | E |
| VR-18 | Original feedback length exceeds 300 characters. | Feedback validation fails. | M |
| VR-19 | All applicable validation rules are satisfied. | Successful frontend validation message is displayed. | M |
| VR-20 | A field contains leading or trailing whitespace. | Textual validation uses the trimmed value except where raw feedback length is required. | P |

### 6.3 HTML and JavaScript Constraint Synchronization

The following decisions resolve inconsistencies identified during preliminary source-code inspection.

| Field | Existing Inconsistency | Approved Baseline Proposed by This SRS |
|---|---|---|
| Full Name | JavaScript minimum length is absent from HTML. | Both layers shall represent a minimum length of three characters. |
| Email Address | Native email syntax and JavaScript regular expression differ. | JavaScript shall enforce native email syntax and the additional documented domain-period rule. |
| Contact Number | JavaScript requires the field, but HTML does not. | Both layers shall identify the field as required and enforce the ten-digit policy. |
| Date of Birth | HTML does not define date boundaries. | Both layers shall use 1 January 1900 through the current local date. |
| Graduation Year | HTML maximum is 2035, while JavaScript uses the current year. | Both layers shall use 1980 through the current local year. |
| Course / Department | Existing JavaScript checks only for a non-empty value. | Validation shall require an available non-placeholder option. |
| Current Designation | HTML lacks required and minimum-length constraints. | Both layers shall identify the field as required with a minimum length of two. |
| Organization | HTML lacks required and minimum-length constraints. | Both layers shall identify the field as required with a minimum length of two. |
| Current Location | No existing implementation. | Both layers shall identify the field as required with a minimum length of two. |
| About Yourself | HTML treats the field as optional, while JavaScript requires it. | Both layers shall treat the field as optional with a conditional minimum length of ten. |
| Feedback | HTML and JavaScript differ in whitespace treatment for minimum length. | Maximum length shall use the original value; minimum length shall use the trimmed value. |

The HTML and JavaScript constraints shall not intentionally contradict one another.

Where native HTML attributes cannot express a rule completely, such as trimming whitespace or requiring a four-digit representation in a numeric control, JavaScript shall enforce the additional rule.

### 6.4 Dynamic Date and Year Constraints

The system shall derive the current date and current year from the browser's local calendar.

The maximum permitted Date of Birth and graduation year shall be initialized dynamically when the form is loaded.

The submission validation shall evaluate the current local date and year again to prevent outdated boundaries from affecting validation.

The system shall not use a permanently hardcoded maximum graduation year.

### 6.5 Feedback Character Counting Policy

For the feedback textarea:

- Maximum permitted length = 300.
- Entered characters = length of the original textarea value.
- Remaining characters = 300 minus entered characters.

The counter shall use the same length convention as HTML maxlength and JavaScript string length, namely UTF-16 code units.

Consequently, certain Unicode characters, including some emojis, may contribute more than one unit to the displayed count.

This convention is a proposed implementation decision intended to maintain consistency between HTML and JavaScript.

The following counter states shall be supported:

| Feedback Length | Entered Characters | Remaining Characters | Expected Behavior |
|---|---|---|---|
| 0 | 0 | 300 | Initial state |
| 1 | 1 | 299 | Counter updates |
| 10 | 10 | 290 | Minimum length may be satisfied |
| 150 | 150 | 150 | Counter updates |
| 299 | 299 | 1 | One character remains |
| 300 | 300 | 0 | Maximum limit reached |
| Greater than 300 | Actual excessive length if bypassed | 0 | Validation fails |

Under normal user interaction, the HTML maxlength constraint shall prevent input beyond the permitted limit.

If excessive content is introduced programmatically, JavaScript shall reject it during validation. The remaining-character display shall not show a negative number.

### 6.6 Validation Message Specification

| Condition | Expected Message or Equivalent |
|---|---|
| Full Name missing | Please enter your full name. |
| Full Name too short | Full Name must contain at least 3 characters. |
| Email missing | Please enter your email address. |
| Invalid email | Please enter a valid email address. |
| Contact Number missing | Please enter your contact number. |
| Invalid contact number | Contact Number must contain exactly 10 digits. |
| Date of Birth missing | Please enter your date of birth. |
| Invalid date | Please enter a valid date of birth. |
| Future date | Date of Birth cannot be in the future. |
| Date before minimum | Date of Birth cannot be earlier than 1 January 1900. |
| Graduation year missing | Please enter your year of passing. |
| Invalid graduation year | Please enter a valid graduation year between 1980 and the current year. |
| Course not selected | Please select your course or department. |
| Designation missing | Please enter your current designation. |
| Designation too short | Current Designation must contain at least 2 characters. |
| Organization missing | Please enter your organization or company name. |
| Organization too short | Organization must contain at least 2 characters. |
| Location missing | Please enter your current location. |
| Location too short | Current Location must contain at least 2 characters. |
| About Yourself too short | About Yourself must contain at least 10 characters if provided. |
| Feedback missing | Please enter your feedback. |
| Feedback too short | Feedback must contain at least 10 characters. |
| Feedback too long | Feedback cannot exceed 300 characters. |
| General validation failure | Please correct the highlighted fields before continuing. |
| Successful validation | Form validated successfully! This is a demonstration; no data has been submitted or stored. |

Equivalent wording may be used provided that the message clearly identifies the affected field and the applicable validation requirement.

---

## 7. External Interface Requirements

### 7.1 User Interface Requirements

The user interface shall retain the existing departmental colour scheme and general website identity.

The form shall provide:

- A clear Alumni Registration heading.
- A short introductory description.
- A visible explanation of the academic demonstration.
- Logical semantic grouping of fields.
- Clearly associated labels.
- Required-field indicators.
- Appropriate input controls.
- Persistent format instructions where necessary.
- A dedicated feedback counter.
- Field-specific validation messages.
- A general form status message.
- Register and Reset buttons.

The interface shall not require users to navigate to another page to complete frontend validation.

### 7.2 Navigation Interface

The Alumni Registration page shall retain existing navigation links to:

- Home.
- Alumni Registration.
- Timetable.

The current page shall remain identifiable using the existing navigation accessibility mechanism.

The alumni form enhancement shall not introduce changes to unrelated departmental navigation behavior.

### 7.3 Software Interfaces

The Alumni Registration page shall use:

- The existing external stylesheet, style.css.
- The existing external JavaScript file, script.js.
- Existing website resources where applicable.
- Standard browser DOM and event-handling interfaces.

No external validation API or backend service shall be required.

### 7.4 Communication Interface

The application shall not transmit registration values through network requests, URL query parameters, form actions or external services.

Loading the existing website's static resources is permitted.

Registration information shall remain within the current browser document during normal interaction.

---

## 8. Non-Functional Requirements

### 8.1 Usability Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-01 | The form shall use readable labels, instructions and validation messages. | M |
| NFR-02 | Related registration fields shall be grouped logically. | M |
| NFR-03 | Required fields shall be identifiable without relying exclusively on colour. | P |
| NFR-04 | Input instructions shall remain understandable when placeholder text is no longer visible. | P |
| NFR-05 | Register and Reset buttons shall be visually distinguishable. | M |
| NFR-06 | Validation failure shall not erase previously entered information. | P |
| NFR-07 | Error messages shall identify the affected field and explain the required correction. | M |
| NFR-08 | The form shall display feedback character usage and remaining capacity without requiring submission. | M |

### 8.2 Visual Design Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-09 | The form shall retain a consistent departmental colour scheme. | E |
| NFR-10 | Labels, inputs and textareas shall use consistent typography, spacing and alignment. | M |
| NFR-11 | The form shall use appropriate margins, padding, borders and background colours. | M |
| NFR-12 | Input controls shall provide visible focus feedback. | M |
| NFR-13 | Invalid input controls shall have a distinct visual state accompanied by explanatory text. | M |
| NFR-14 | Register and Reset buttons shall provide visible interaction feedback. | M |
| NFR-15 | Fieldset and legend styling shall remain consistent with the existing departmental website design. | P |

### 8.3 Responsive Design Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-16 | The Alumni Registration page shall remain usable on desktop, tablet and mobile screen sizes. | M |
| NFR-17 | The page shall not introduce unintended horizontal scrolling at the specified test viewport widths. | P |
| NFR-18 | Form fields, labels, legends and error messages shall remain within their available containers. | P |
| NFR-19 | The form shall adapt its spacing and layout according to the available viewport width. | M |
| NFR-20 | Register and Reset buttons shall remain accessible without overlap or clipping. | M |
| NFR-21 | The feedback counter shall remain readable and visible at all specified viewport widths. | P |
| NFR-22 | Existing mobile navigation wrapping shall be preserved. | E |

The proposed responsive test viewport widths are:

| Device Category | Viewport Widths |
|---|---|
| Desktop / Laptop | 1440px, 1280px |
| Tablet | 1024px, 768px |
| Mobile | 425px, 375px, 320px |

The existing single-column layout may be retained. A multi-column layout is optional and shall not be introduced if it reduces readability or responsiveness.

### 8.4 Accessibility Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-23 | The HTML document shall declare its language. | M, E |
| NFR-24 | All form controls shall have meaningful associated labels. | M |
| NFR-25 | Related controls shall be semantically grouped using fieldset and legend elements. | M |
| NFR-26 | All interactive form controls shall be operable using a keyboard. | M |
| NFR-27 | Keyboard focus shall remain visible throughout form interaction. | M |
| NFR-28 | The feedback textarea shall be programmatically associated with its character counter and relevant instructions. | P |
| NFR-29 | Field-specific validation messages shall be programmatically associated with their corresponding fields. | P |
| NFR-30 | Invalid fields shall be identified using appropriate aria-invalid states. | P |
| NFR-31 | The form-level status message shall use an appropriate accessible live-region mechanism. | P, E |
| NFR-32 | Dynamic feedback-count changes shall be exposed through an appropriate polite live region. | P, E |
| NFR-33 | The form shall use appropriate autocomplete attributes for applicable personal and professional information fields. | P |
| NFR-34 | Validation states shall not be communicated exclusively through colour. | P |
| NFR-35 | Normal-sized form text and validation messages shall achieve a contrast ratio of at least 4.5:1 against their backgrounds. | P |
| NFR-36 | The form shall not introduce keyboard traps. | P |
| NFR-37 | Following failed validation, keyboard focus shall move to the first invalid field in document order. | P |

These requirements define selected accessibility practices for the assignment. They do not constitute a claim of complete WCAG certification.

### 8.5 Performance Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-38 | Feedback character counting shall update within the same input-event handling cycle without requiring a page reload. | M, P |
| NFR-39 | Form validation shall complete locally without requiring a network request. | C |
| NFR-40 | Register and Reset operations shall not reload the page. | P |
| NFR-41 | The enhanced form shall not introduce unnecessary external libraries or dependencies. | P |

### 8.6 Compatibility Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-42 | The form shall use standard HTML5, CSS3 and JavaScript browser features. | M |
| NFR-43 | The form shall support the core registration workflow in current stable versions of Google Chrome, Microsoft Edge and Mozilla Firefox. | P |
| NFR-44 | The form shall remain usable in a mobile browser or an equivalent browser device-emulation environment. | M |
| NFR-45 | The form shall not produce uncaught JavaScript errors during normal registration, validation and reset operations. | P |

Browser versions and the actual testing environment shall be recorded in the testing report.

### 8.7 Maintainability Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-46 | HTML, CSS and JavaScript shall remain in separate source files. | M |
| NFR-47 | Alumni-specific CSS rules shall be scoped to alumni-related containers or classes. | P |
| NFR-48 | Alumni-specific JavaScript shall execute only when the required form elements are present. | P |
| NFR-49 | Validation logic shall use meaningful variable and function names. | M |
| NFR-50 | Repeated validation and character-counting logic shall be consolidated where practical. | P |
| NFR-51 | The feedback maximum-length configuration shall remain consistent across HTML and JavaScript. | P |
| NFR-52 | Source-code comments shall explain non-obvious behavior and major functional sections. | M |
| NFR-53 | Unrelated Assignment 1 source-code sections shall not be modified unnecessarily. | C |
| NFR-54 | The Assignment 2 implementation shall be developed through identifiable incremental Git commits. | P |

### 8.8 Privacy and Data Handling Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-55 | Registration information shall not be transmitted to any external server. | C |
| NFR-56 | Registration information shall not be stored in a database, cookies, local storage or session storage by application code. | C |
| NFR-57 | The application shall not request authentication credentials. | C |
| NFR-58 | The application shall not request geolocation permissions. | C |
| NFR-59 | User-entered personal information shall not be deliberately written to the browser console by application code. | P |
| NFR-60 | Testing and academic evidence shall use fictional or sample alumni information rather than actual personal records. | P |
| NFR-61 | User-derived content shall be handled using safe DOM operations rather than being interpreted as executable HTML. | P |
| NFR-62 | The page shall clearly communicate its frontend-only academic demonstration status. | C |
| NFR-63 | If JavaScript is unavailable, the registration workflow shall fail safely without transmitting form information. | C, P |

Browser-managed autofill, browser history and other browser-level behavior are outside the application's direct storage control.

### 8.9 Standards Compliance Requirements

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| NFR-64 | The updated alumni.html document shall pass W3C HTML validation with zero errors. | M, P |
| NFR-65 | The updated style.css stylesheet shall pass W3C CSS validation with zero errors under the selected validation profile. | M, P |
| NFR-66 | Validator warnings shall be reviewed and either resolved or documented with justification. | P |
| NFR-67 | The source code shall follow the applicable Google HTML/CSS Style Guide and assignment-specific coding conventions. | M |
| NFR-68 | The JavaScript implementation shall follow the coding practices specified in the official assignment. | M |

---

## 9. Coding Standards

### 9.1 General Coding Standards

The implementation shall follow these conventions:

- Use consistent two-space indentation.
- Remove unnecessary trailing whitespace.
- Use meaningful identifiers.
- Maintain consistent formatting.
- Write readable and maintainable source code.
- Include appropriate comments.
- Avoid unnecessary duplication.
- Preserve separation of structure, presentation and behavior.

### 9.2 HTML Coding Standards

The HTML implementation shall:

- Begin with the HTML5 doctype declaration.
- Declare UTF-8 character encoding.
- Declare the document language.
- Include responsive viewport metadata.
- Use lowercase element and attribute names.
- Use double quotation marks for attribute values.
- Use semantic HTML elements.
- Use fieldset and legend elements for related form controls.
- Associate every editable form control with a meaningful label.
- Use unique element identifiers.
- Use appropriate input types.
- Use suitable validation and accessibility attributes.
- Avoid inline CSS and inline JavaScript event handlers.
- Reference external CSS and JavaScript files.

### 9.3 CSS Coding Standards

The CSS implementation shall:

- Use the existing external stylesheet.
- Group related rules using meaningful section comments.
- Use lowercase selectors and property names.
- Use descriptive, hyphen-separated class names.
- Maintain consistent indentation and spacing.
- Avoid unnecessary ID selectors.
- Avoid unnecessary use of the important declaration.
- Use Flexbox or Grid where appropriate.
- Provide responsive layouts using fluid sizing and media queries.
- Provide distinct focus and invalid-field states.
- Scope alumni-specific styles to prevent unintended changes elsewhere.

### 9.4 JavaScript Coding Standards

The JavaScript implementation shall:

- Use meaningful variable and function names.
- Use addEventListener for form-related events.
- Use const and let according to variable reassignment requirements.
- Validate user input before displaying success.
- Use appropriate DOM methods for updating messages and counters.
- Avoid unnecessary inline JavaScript.
- Avoid unnecessary global variables.
- Prevent default form submission.
- Avoid unnecessary repetition of validation logic.
- Preserve unrelated website functions.
- Handle absent page-specific elements safely.
- Use comments to explain important validation logic.
- Avoid unnecessary external dependencies.

The Google HTML/CSS Style Guide applies specifically to HTML and CSS. JavaScript requirements are derived from the assignment's separate JavaScript coding guidelines and standard JavaScript development practices.

---

## 10. System Behavior

### 10.1 Initial Form State

When the Alumni Registration page loads:

- All editable registration fields shall have empty initial values.
- The Course / Department dropdown shall display its initial placeholder option.
- The feedback counter shall display zero entered characters and 300 remaining characters.
- No validation error or success message shall be displayed.
- No field shall display an application-generated invalid state.
- The current date and graduation-year boundaries shall be initialized.

### 10.2 Input Interaction

When a user enters or modifies information:

- Input values shall remain editable.
- Feedback character counts shall update immediately when feedback changes.
- Outdated success messages shall be cleared.
- Previously invalid fields shall have their validation states updated when corrected.
- Untouched fields shall not display premature application-generated error messages.

### 10.3 Form Submission Workflow

| Step | System Behavior |
|---|---|
| 1 | The user activates the Register button. |
| 2 | The system prevents default form submission. |
| 3 | The system reads the current field values. |
| 4 | Applicable textual values are normalized for validation. |
| 5 | The system evaluates required-field and field-specific validation rules. |
| 6 | The system identifies all invalid fields. |
| 7 | If validation fails, field-specific errors and a general error message are displayed. |
| 8 | Keyboard focus moves to the first invalid field. |
| 9 | If all validation rules pass, the success message is displayed. |
| 10 | Entered information remains visible, and no registration data is transmitted or stored. |

### 10.4 Reset Workflow

| Step | System Behavior |
|---|---|
| 1 | The user activates the Reset button. |
| 2 | All form controls return to their initial values. |
| 3 | The Course / Department dropdown returns to its placeholder selection. |
| 4 | Field-specific and form-level messages are cleared. |
| 5 | Invalid-field styling and accessibility states are reset. |
| 6 | The feedback counter returns to zero entered characters and 300 remaining characters. |
| 7 | No submission, page reload or data transmission occurs. |

---

## 11. Assignment 1 Preservation and Repository Requirements

### 11.1 Repository Strategy

Assignment 2 shall be developed within the existing Department of Computer Science website GitHub repository.

A separate website or independent application shall not be created.

The existing source code shall serve as the development baseline.

### 11.2 Baseline Preservation

Before modifying existing application source files:

- The final Assignment 1 commit shall be identified.
- The completed Assignment 1 version shall be preserved using a Git tag named assignment-1-final.
- The tag shall reference the verified final Assignment 1 commit.
- The tag shall be retained in the repository and published to the remote repository.
- The existing Assignment 1 submission ZIP shall remain unchanged.
- Existing Assignment 1 documentation shall remain accessible and unchanged.

The creation and publication of the Git tag shall be verified before implementation begins.

### 11.3 Source File Modification Boundaries

| File / Component | Permitted Action |
|---|---|
| alumni.html | Extend and refine the existing registration form. |
| style.css | Modify or add alumni-specific styling. |
| script.js | Refine alumni-specific character-counting and validation logic. |
| index.html | Preserve existing implementation. |
| timetable.html | Preserve existing implementation. |
| Existing image assets | Preserve unchanged. |
| Existing jQuery implementation | Preserve unchanged. |
| Assignment 1 documentation | Preserve unchanged. |
| Assignment 2 documentation | Create separately. |

If an unrelated source-code defect is discovered, it shall be documented separately rather than silently modified as part of Assignment 2.

### 11.4 Documentation Organization

The existing Assignment 1 documentation shall not be overwritten.

Assignment 2 documentation shall be maintained within a dedicated assignment-2 directory.

| Document | Proposed Location |
|---|---|
| Software Requirements Specification | assignment-2/SRS.md |
| Test and Validation Plan | assignment-2/ASSIGNMENT_TEST_PLAN.md |
| Automated Conformance Audit | assignment-2/CONFORMANCE_AUDIT.md |
| Code Walkthrough | assignment-2/CODE_WALKTHROUGH.md |
| Manual Testing Report | assignment-2/TESTING_REPORT.md |
| Validation Evidence | assignment-2/screenshots/ |

The documentation directory is a proposed organizational decision and is not an explicit requirement of the official assignment.

### 11.5 Regression Requirements

Following the Alumni Registration Form enhancement, regression testing shall verify that the following existing functionalities remain unaffected:

- Departmental homepage.
- Departmental gallery.
- Faculty directory.
- Faculty experience calculation.
- Random event-image display.
- Digital clock.
- Navigation dropdowns.
- News, Events and Notices.
- Timetable page.
- Dynamic activity-list functionality.
- Gallery fade functionality.
- Existing responsive layouts.

The complete repository shall be used during regression testing.

---

## 12. AI-Assisted Development Workflow

### 12.1 Requirements Engineering

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| AI-01 | An AI assistant shall be used to convert the informal assignment specification into a formal SRS. | M |
| AI-02 | The SRS shall include functional, non-functional, input, validation, interface and responsiveness requirements. | M |
| AI-03 | Existing source files and the preliminary gap analysis shall be considered during requirements engineering. | P |
| AI-04 | Mandatory requirements, inherited functionality and proposed decisions shall be distinguished. | P |

### 12.2 Test Planning

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| AI-05 | An AI assistant shall generate a comprehensive test and validation plan derived from the approved SRS. | M |
| AI-06 | Each test case shall have a unique test identifier and reference its corresponding requirement identifiers. | P |
| AI-07 | Test cases shall include test inputs or actions, expected results, actual results and execution status. | M, P |
| AI-08 | All test cases shall initially be marked Not Tested. | P |
| AI-09 | The test plan shall include a requirements traceability matrix. | P |
| AI-10 | The test plan shall cover functional, boundary, negative, accessibility, responsive, regression and standards-validation testing. | M, P |

### 12.3 Iterative Implementation

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| AI-11 | The implementation shall be developed through structured, incremental AI prompts. | M |
| AI-12 | Existing source code shall be reused where it satisfies the approved requirements. | P |
| AI-13 | Each development stage shall focus on a clearly defined set of requirements. | P |
| AI-14 | AI-generated changes shall be reviewed before being incorporated into the repository. | P |
| AI-15 | Iterative debugging and refinement shall be documented in the AI transcript. | M |

The proposed implementation sequence is:

1. Preserve the completed Assignment 1 baseline.
2. Review and approve the SRS.
3. Generate the test and validation plan.
4. Refine the existing semantic HTML form structure.
5. Add Current Location and synchronize registration-field constraints.
6. Refine form styling and semantic group presentation.
7. Enhance the feedback textarea and character counter.
8. Refine JavaScript validation.
9. Introduce field-specific errors and accessible validation states.
10. Refine success and reset behavior.
11. Verify responsive behavior.
12. Conduct automated conformance review.
13. Generate the code walkthrough.
14. Execute manual and regression testing.
15. Perform W3C standards validation.
16. Prepare final submission deliverables.

### 12.4 Automated Conformance Review

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| AI-16 | The updated HTML, CSS and JavaScript files shall be provided to an AI assistant together with the SRS and test plan. | M |
| AI-17 | The AI assistant shall evaluate implementation coverage against the specified requirements. | M |
| AI-18 | The review shall identify missing, partially implemented and inconsistent requirements. | M |
| AI-19 | The review shall evaluate the feedback limit, character counter and JavaScript validation rules. | M |
| AI-20 | The review shall evaluate code quality, accessibility, responsiveness and standards compliance through source inspection. | M |
| AI-21 | The review shall distinguish source-code findings from behaviors requiring actual browser testing. | P |
| AI-22 | Identified defects and their resolution status shall be documented. | P |

AI-based conformance review shall not replace manual browser testing or official W3C validation.

### 12.5 Code Comprehension

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| AI-23 | An AI assistant shall explain the purpose of the HTML elements and form controls. | M |
| AI-24 | The AI assistant shall explain the relevant CSS selectors, properties and responsive layout rules. | M |
| AI-25 | The AI assistant shall explain the JavaScript event listeners and validation functions. | M |
| AI-26 | The AI assistant shall explain the feedback character-counting logic. | M |
| AI-27 | The AI assistant shall explain the successful validation and reset workflows. | M |
| AI-28 | The code walkthrough shall distinguish frontend validation from actual data submission. | P |

### 12.6 Manual Verification

| Requirement ID | Requirement Description | Classification |
|---|---|---|
| AI-29 | The student shall manually execute the applicable test cases in a web browser. | M |
| AI-30 | Actual results and Pass or Fail statuses shall be recorded after execution. | M |
| AI-31 | Failed tests shall be documented and retested following corrective changes. | P |
| AI-32 | Updated HTML markup shall be checked using the W3C Markup Validation Service. | M |
| AI-33 | Updated CSS shall be checked using the W3C CSS Validation Service. | M |
| AI-34 | Validation evidence and relevant browser-testing evidence shall be retained. | P |
| AI-35 | Existing Assignment 1 functionalities shall undergo regression testing. | C |
| AI-36 | AI-generated reviews shall not be represented as completed manual test results. | P |

---

## 13. Submission Deliverable Requirements

| Requirement ID | Deliverable | Description | Classification |
|---|---|---|---|
| DR-01 | Source Code ZIP | A single ZIP archive containing the complete updated website source code and required assets. | M |
| DR-02 | AI Transcript | A public share link to the complete AI-assisted development conversation. | M |
| DR-03 | Testing Report | A report containing executed test cases, expected results, actual results and Pass or Fail status. | M |
| DR-04 | SRS | A formal requirements specification maintained separately from Assignment 1 documentation. | M, P |
| DR-05 | Test Plan | A comprehensive test and validation plan derived from the SRS. | M |
| DR-06 | Conformance Audit | A documented AI-assisted review of implementation coverage and identified gaps. | M, P |
| DR-07 | Code Walkthrough | A documented explanation of the HTML, CSS and JavaScript implementation. | M, P |
| DR-08 | Validation Evidence | Recorded W3C HTML and CSS validation results. | M, P |
| DR-09 | Version-Control History | Incremental commits documenting Assignment 2 development. | P |
| DR-10 | Assignment 1 Baseline | Preserved Assignment 1 Git tag, documentation and original submission archive. | C |
| DR-11 | Assignment 2 Final Version | A verified final repository version, optionally identified by the assignment-2-final Git tag. | P |

The official submission deliverables are the source-code ZIP, AI transcript share link and testing report.

The additional documentation and version-control evidence support the required AI-assisted development workflow and demonstrate traceability.

### 13.1 AI Transcript Coverage

The AI transcript shall demonstrate:

- Preliminary implementation review.
- SRS generation.
- Test-case generation.
- Structured step-by-step development.
- Iterative debugging and refinement.
- Automated conformance review.
- HTML, CSS and JavaScript code comprehension.

The shared transcript shall not expose actual alumni personal information, passwords, access tokens or other confidential information.

### 13.2 Testing Report Requirements

The testing report shall include:

- Test case identifiers.
- Referenced requirement identifiers.
- Test environment.
- Test inputs or actions.
- Expected results.
- Actual results.
- Execution status.
- Identified defects.
- Retest results where applicable.
- Responsive testing evidence.
- HTML and CSS validation results.
- Regression testing summary.
- Final testing conclusion.

No testing result shall be fabricated or marked Passed without execution evidence.

---

## 14. System Constraints, Assumptions and Limitations

### 14.1 System Constraints

| Constraint ID | Constraint Description |
|---|---|
| SC-01 | The application shall use HTML5, CSS3 and JavaScript. |
| SC-02 | The application shall remain frontend-only. |
| SC-03 | No backend, database or authentication mechanism shall be introduced. |
| SC-04 | Registration information shall not be transmitted or persistently stored by application code. |
| SC-05 | Feedback shall not exceed 300 characters under the defined counting convention. |
| SC-06 | Assignment 2 shall extend the existing departmental website. |
| SC-07 | The existing GitHub repository shall be reused. |
| SC-08 | The completed Assignment 1 version and documentation shall be preserved. |
| SC-09 | Unrelated website functionalities shall remain unaffected. |
| SC-10 | Source code shall follow the prescribed coding guidelines. |
| SC-11 | Manual verification and W3C standards validation shall be completed before final submission. |

### 14.2 Assumptions

The following assumptions establish the proposed implementation baseline:

1. Users access the application using a modern browser with JavaScript enabled.
2. The nine specified registration fields are mandatory.
3. The additional About Yourself field is optional.
4. Alumni Feedback is mandatory with a retained minimum length of ten characters.
5. Contact numbers follow the existing ten-digit domestic format.
6. Graduation years range from 1980 to the current local calendar year.
7. Dates of birth range from 1 January 1900 to the current local date.
8. Current Location represents a general location rather than a residential address.
9. Professional fields permit meaningful alternatives for alumni without current employment.
10. The browser's local date and year provide the reference for date-based validation.
11. The existing course options are sufficient for the academic demonstration.
12. Existing website assets and unrelated source files remain available in the repository.
13. The proposed responsive viewport sizes are sufficient for the planned academic testing scope.

These assumptions are project decisions rather than additional official assignment requirements.

They shall be reviewed before implementation and updated through document versioning if necessary.

### 14.3 Limitations

The application has the following limitations:

- It does not perform actual alumni registration.
- It does not store submitted information.
- It does not verify the identity of users.
- It does not verify email ownership or deliverability.
- It does not verify contact-number ownership.
- It does not verify academic qualifications or employment information.
- It does not support international telephone-number formats.
- It does not validate whether graduation dates are chronologically consistent with dates of birth.
- It does not impose a minimum alumni age.
- Date-based validation depends on the browser's local system date.
- Some Unicode characters may count as multiple UTF-16 code units.
- Browser-level autofill behavior is outside direct application control.
- Client-side validation can be bypassed and is not a substitute for server-side validation in a production system.
- Complete accessibility certification is outside the scope of this academic project.

The complete Assignment 1 repository, including the homepage, timetable and separate jQuery source where applicable, was not inspected during the preliminary review. Preservation of these components shall be established through repository inspection and regression testing.

---

## 15. Measurable Acceptance Criteria

The following acceptance criteria define the conditions that must be satisfied before Assignment 2 is considered ready for submission.

### 15.1 Structural and Registration Acceptance Criteria

| Acceptance ID | Related Requirements | Acceptance Criterion |
|---|---|---|
| AC-01 | FR-01–FR-05 | The alumni page contains semantic HTML5 structure, a form, meaningful fieldsets and legends, and associated labels for every editable form control. |
| AC-02 | FR-06–FR-07 | Registration information is logically grouped and required fields are visibly identifiable. |
| AC-03 | FR-09–FR-19 | All nine registration fields specified in Assignment 2 are present and usable. |
| AC-04 | FR-14–FR-16 | The course dropdown retains its existing options and rejects the initial empty selection. |
| AC-05 | FR-20 | Valid alternative professional responses are accepted. |
| AC-06 | FR-21–FR-23 | About Yourself remains available, accepts an empty value and rejects non-empty values shorter than ten trimmed characters. |

### 15.2 Validation Acceptance Criteria

| Acceptance ID | Related Requirements | Acceptance Criterion |
|---|---|---|
| AC-07 | FR-34–FR-36, VR-01–VR-02 | Submitting the form with any required field empty or containing only whitespace fails validation. |
| AC-08 | FR-37, VR-03 | A two-character trimmed name is rejected and a three-character valid name is accepted. |
| AC-09 | FR-38, VR-04 | Valid email examples satisfying the specified policy are accepted, while malformed addresses are rejected. |
| AC-10 | FR-39, VR-05 | A ten-digit contact number is accepted, while nine-digit, eleven-digit and alphabetic values are rejected. |
| AC-11 | FR-40, VR-06–VR-09 | Missing, impossible, future and pre-1900 birth dates are rejected. |
| AC-12 | FR-40, VR-07–VR-09 | Valid leap-year dates and permitted date-boundary values are accepted. |
| AC-13 | FR-41, VR-10–VR-11 | Graduation years 1980 and the current year are accepted, while 1979 and the following year are rejected. |
| AC-14 | FR-41, VR-10 | Decimal and scientific-notation graduation-year values are rejected. |
| AC-15 | FR-17–FR-18, VR-13–VR-14 | One-character designation and organization values are rejected, while valid two-character values are accepted. |
| AC-16 | FR-19, FR-43, VR-15 | Empty and one-character locations are rejected, while valid locations containing at least two trimmed characters are accepted. |
| AC-17 | FR-44, VR-20 | HTML constraints and JavaScript validation follow the documented policy without contradictory boundaries or required-field states. |

### 15.3 Feedback Acceptance Criteria

| Acceptance ID | Related Requirements | Acceptance Criterion |
|---|---|---|
| AC-18 | FR-24–FR-25 | A dedicated feedback textarea exists with a maximum length of 300. |
| AC-19 | FR-26–FR-29 | Empty feedback displays zero entered characters and 300 remaining characters. |
| AC-20 | FR-28 | Typing, deleting and pasting feedback updates both displayed counts correctly. |
| AC-21 | FR-30 | Exactly 300 entered characters produces zero remaining characters. |
| AC-22 | FR-25, FR-32, VR-18 | Normal input cannot exceed 300 characters, and programmatically introduced excessive content fails validation. |
| AC-23 | FR-33, VR-17 | Nine trimmed feedback characters are rejected and ten valid trimmed characters are accepted. |
| AC-24 | FR-26–FR-32 | Character counting follows the documented UTF-16 length convention, including spaces, line breaks and applicable Unicode characters. |

### 15.4 Error Handling, Success and Reset Acceptance Criteria

| Acceptance ID | Related Requirements | Acceptance Criterion |
|---|---|---|
| AC-25 | FR-46–FR-49 | Each invalid field displays a meaningful associated error message and a distinct invalid state. |
| AC-26 | FR-50, NFR-37 | Following failed validation, keyboard focus moves to the first invalid field. |
| AC-27 | FR-51, NFR-06 | Validation failure does not erase entered values. |
| AC-28 | FR-52–FR-54 | Corrected fields no longer display outdated errors, and success is not displayed while invalid fields remain. |
| AC-29 | FR-55–FR-58 | A fully valid form displays the frontend demonstration success message without reloading the page or transmitting data. |
| AC-30 | FR-59 | Editing any field after successful validation clears the outdated success message. |
| AC-31 | FR-60–FR-66 | Reset restores all field values, messages, counter values, selection states and validation styling to their initial states. |

### 15.5 User Interface and Accessibility Acceptance Criteria

| Acceptance ID | Related Requirements | Acceptance Criterion |
|---|---|---|
| AC-32 | NFR-01–NFR-15 | Labels, inputs, instructions, buttons, focus states and invalid states are readable, consistent and visually distinguishable. |
| AC-33 | NFR-16–NFR-22 | The form remains usable at 1440px, 1280px, 1024px, 768px, 425px, 375px and 320px without unintended horizontal overflow or overlapping controls. |
| AC-34 | NFR-23–NFR-27, NFR-36 | All form controls are accessible through keyboard navigation with visible focus and no keyboard traps. |
| AC-35 | NFR-28–NFR-32 | Feedback counts, field errors and form status messages have appropriate programmatic accessibility associations. |
| AC-36 | NFR-33–NFR-35 | Applicable autocomplete attributes are present, validation does not rely exclusively on colour and normal text meets the specified contrast target. |

### 15.6 Compatibility, Privacy and Standards Acceptance Criteria

| Acceptance ID | Related Requirements | Acceptance Criterion |
|---|---|---|
| AC-37 | NFR-38–NFR-41 | Counter updates, validation and reset occur locally without unnecessary page reloads or dependencies. |
| AC-38 | NFR-42–NFR-45 | Core form operations work in the specified browsers without uncaught JavaScript errors. |
| AC-39 | NFR-46–NFR-54 | Source inspection confirms separation of concerns, scoped changes, meaningful naming and maintainable implementation. |
| AC-40 | FR-45, FR-57, NFR-55–NFR-62 | Browser inspection confirms that application code does not transmit, persist or log registration information. |
| AC-41 | NFR-63 | Disabling JavaScript does not permit registration information to be transmitted through default form submission. |
| AC-42 | NFR-64, AI-32 | The updated alumni.html document produces zero W3C HTML validation errors. |
| AC-43 | NFR-65, AI-33 | The updated style.css stylesheet produces zero W3C CSS validation errors under the recorded validation profile. |
| AC-44 | NFR-66–NFR-68 | Validator warnings are reviewed and applicable coding guidelines are satisfied or deviations are documented. |

### 15.7 Regression and Deliverable Acceptance Criteria

| Acceptance ID | Related Requirements | Acceptance Criterion |
|---|---|---|
| AC-45 | FR-08, FR-67–FR-74 | Existing departmental navigation, homepage, timetable and unrelated JavaScript and jQuery functionalities pass regression testing. |
| AC-46 | FR-75, DR-10 | The final Assignment 1 commit, Git tag, documentation and original submission archive are preserved. |
| AC-47 | AI-01–AI-10, DR-04–DR-05 | The SRS and test plan are complete and contain uniquely identifiable, traceable requirements and test cases. |
| AC-48 | AI-11–AI-22, DR-06, DR-09 | The AI transcript and development history demonstrate incremental implementation, refinement and conformance review. |
| AC-49 | AI-23–AI-28, DR-07 | The code walkthrough explains the HTML, CSS and JavaScript implementation. |
| AC-50 | AI-29–AI-36, DR-03, DR-08 | Manual testing, regression testing and W3C validation results are recorded with actual execution evidence. |
| AC-51 | DR-01–DR-02 | The final source-code ZIP and public AI transcript share link are available and suitable for submission. |

### 15.8 Final Acceptance Conditions

Assignment 2 shall be considered submission-ready when:

- All mandatory assignment requirements are implemented.
- All nine registration fields are present.
- Feedback counting and validation satisfy the approved constraints.
- All applicable mandatory acceptance criteria have been satisfied.
- No unresolved critical or high-priority functional defects remain.
- Manual testing has been completed and documented.
- Regression testing confirms preservation of Assignment 1 functionality.
- Updated HTML and CSS produce zero validation errors.
- Any remaining warnings, minor deviations or limitations are documented.
- The AI-assisted development transcript is complete.
- Required submission deliverables are prepared.
- The final Assignment 1 version remains preserved.

---

## 16. Preliminary Requirements Traceability

The following matrix connects major assignment requirements and preliminary gaps to the corresponding SRS requirements.

| Assignment Requirement / Gap | SRS Requirement References |
|---|---|
| Semantic HTML5 structure | FR-01–FR-07, NFR-23–NFR-25 |
| Missing fieldset and legend | FR-03–FR-06, NFR-25 |
| Nine registration fields | FR-09–FR-20 |
| Missing Current Location | FR-19, FR-43, VR-15 |
| Feedback collection | FR-24–FR-33 |
| Maximum 300 characters | FR-25, FR-32, VR-18 |
| Missing remaining-character count | FR-26–FR-31 |
| Empty-field validation | FR-35–FR-36, VR-01–VR-02 |
| Minimum-length validation | FR-37, VR-03, VR-13–VR-17 |
| Email validation | FR-38, VR-04 |
| Contact-number validation | FR-39, VR-05 |
| Date-of-birth validation | FR-40, VR-06–VR-09 |
| Graduation-year inconsistency | FR-41, FR-44, VR-10–VR-11 |
| Required-field inconsistency | FR-07, FR-34–FR-44 |
| About Yourself inconsistency | FR-21–FR-23, VR-16 |
| Invalid-field styling | FR-48, NFR-13 |
| Field-specific error messages | FR-46–FR-54 |
| Accessible error associations | FR-49, NFR-28–NFR-32 |
| Invalid-field focus management | FR-50, NFR-37 |
| Outdated validation messages | FR-52, FR-59 |
| Successful validation | FR-55–FR-59 |
| Reset functionality | FR-60–FR-66 |
| Responsive design | NFR-16–NFR-22 |
| Coding standards | NFR-46–NFR-54, NFR-67–NFR-68 |
| W3C validation | NFR-64–NFR-66, AI-32–AI-34 |
| Assignment 1 preservation | FR-67–FR-75, SC-06–SC-09 |
| AI-assisted requirements engineering | AI-01–AI-04 |
| AI-assisted test planning | AI-05–AI-10 |
| Iterative development | AI-11–AI-15 |
| Automated conformance review | AI-16–AI-22 |
| Code comprehension | AI-23–AI-28 |
| Manual verification | AI-29–AI-36 |
| Submission deliverables | DR-01–DR-11 |

A complete requirement-to-test-case traceability matrix shall be developed during the subsequent test-planning phase.

---

## 17. Requirements Review and Change Management

### 17.1 Proposed Implementation Decisions

The following decisions have been introduced or retained to establish a consistent implementation baseline.

| Decision ID | Proposed Decision | Basis |
|---|---|---|
| PD-01 | All nine registration fields shall be required. | Consistent registration completeness policy |
| PD-02 | About Yourself shall be optional. | Resolves existing HTML and JavaScript inconsistency |
| PD-03 | Feedback shall remain mandatory with a minimum length of ten characters. | Preserves existing Assignment 1 behavior |
| PD-04 | Contact Number shall contain exactly ten digits. | Preserves existing validation policy |
| PD-05 | Graduation year shall range from 1980 to the current year. | Resolves inconsistent maximum-year constraints |
| PD-06 | Date of Birth shall range from 1 January 1900 to the current local date. | Preserves existing date-validation policy |
| PD-07 | Current Location shall contain at least two trimmed characters. | Defines validation for the missing field |
| PD-08 | Professional fields shall accept meaningful non-employment alternatives. | Improves inclusivity and usability |
| PD-09 | Field-specific errors and invalid states shall be implemented. | Improves accessibility and error identification |
| PD-10 | Feedback counting shall use UTF-16 code units. | Maintains consistency between HTML and JavaScript |
| PD-11 | Validated information shall remain visible until edited or reset. | Preserves existing interaction behavior |
| PD-12 | Assignment 2 documentation shall be maintained separately. | Preserves Assignment 1 documentation |
| PD-13 | The final Assignment 1 version shall be preserved using a Git tag. | Supports version control and reproducibility |
| PD-14 | The application shall not perform actual registration or data storage. | Frontend-only project scope |
| PD-15 | Additional accessibility and responsive acceptance targets shall be adopted. | Improves measurable software quality |

These decisions are incorporated into Version 1.0 as the proposed baseline. They shall not be represented as independently mandated by the official assignment.

### 17.2 Change Management

If a requirement changes during subsequent development:

1. The affected requirement identifiers shall be identified.
2. The reason for the change shall be documented.
3. The SRS version history shall be updated.
4. Related test cases shall be revised.
5. The implementation shall be updated accordingly.
6. Relevant tests shall be executed again.
7. The change shall be recorded through an appropriate Git commit.

Requirements shall not be silently modified to make an incorrect implementation appear compliant.

### 17.3 Current Development Status

| Activity | Status |
|---|---|
| Official assignment review | Completed |
| Existing alumni source-code inspection | Completed |
| Preliminary implementation gap analysis | Completed |
| Initial SRS generation | Completed |
| SRS approval | Completed |
| Assignment 1 baseline tag verification | Completed |
| Test and validation plan | Pending |
| Assignment 2 implementation | Not Started |
| Automated conformance review | Pending |
| Code comprehension documentation | Pending |
| Manual browser testing | Not Tested |
| Regression testing | Not Tested |
| W3C HTML validation for updated implementation | Not Tested |
| W3C CSS validation for updated implementation | Not Tested |
| Final submission preparation | Pending |

---

## 18. References

1. Department of Computer Science, University of Delhi. Assignment 2: Designing and Validating an Alumni Registration Form Using AI-Assisted Development. Official course assignment specification.

2. Existing Assignment 1 source code: alumni.html, style.css and script.js. Department of Computer Science website project.

3. Preliminary Requirements and Implementation Gap Analysis conducted during the Assignment 2 AI-assisted development workflow.

4. Google. (2012–present). Google HTML/CSS Style Guide. Originally authored by Jens O. Meiert.  
   https://google.github.io/styleguide/htmlcssguide.html

5. W3C Markup Validation Service.  
   https://validator.w3.org/

6. W3C CSS Validation Service.  
   https://jigsaw.w3.org/css-validator/

---

## 19. Conclusion

This Software Requirements Specification establishes a structured and measurable development baseline for enhancing the existing Alumni Registration Form of the Department of Computer Science website.

The specification incorporates the official Assignment 2 requirements, addresses the limitations identified during preliminary source-code inspection and defines consistent validation rules for HTML and JavaScript.

The proposed system shall provide a complete registration interface, semantic form organization, live feedback character counting, accessible validation messages, responsive styling and reliable frontend validation.

The development process shall preserve the completed Assignment 1 implementation and documentation while following an incremental AI-assisted software development lifecycle.

This document shall serve as the reference for subsequent test planning, implementation, automated conformance review, code comprehension, manual verification and final academic submission.

---

**End of Software Requirements Specification**

**Document Version:** 1.0  
**Document Status:** Reviewed and Finalized  
**Implementation Status:** Not Started