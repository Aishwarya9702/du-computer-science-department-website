# Department of Computer Science Website
## University of Delhi

A responsive, multi-page departmental website developed as part of the **Web Development and Prompt Engineering Practical**.

The project demonstrates the use of **HTML5, CSS3, JavaScript, and jQuery** to create a structured and interactive website featuring departmental information, faculty profiles, academic programmes, an alumni registration form, a course timetable, dynamic content, and interactive user interface elements.

The website also demonstrates practical web development concepts such as semantic HTML, responsive design, DOM manipulation, event handling, form validation, and jQuery animations.

> **Disclaimer:** This is an independent academic project created for educational purposes. It is not an official University of Delhi website.

---

## Assignment Overview

| Assignment | Scope | Documentation |
|---|---|---|
| Assignment 1 | Original multi-page departmental website and practical exercises | Root-level documents |
| Assignment 2 | Incremental enhancement and validation of the Alumni Registration Form | `assignment-2/` |

Both assignments share the same website source files. Assignment 2 extends rather than replaces Assignment 1. The Git tag `assignment-1-final` preserves the Assignment 1 baseline at commit `cf70e4a`.

## Project Objectives

- Develop a multi-page departmental website using semantic HTML5.
- Design responsive webpages using CSS3, Flexbox, CSS Grid, and media queries.
- Implement navigation menus with CSS hover-based dropdowns.
- Present faculty details using structured HTML lists.
- Create an alumni registration form with HTML5 controls and JavaScript validation.
- Design an illustrative weekly course timetable using HTML tables.
- Implement dynamic webpage functionality using JavaScript.
- Use JavaScript Date objects to calculate faculty experience and display a live digital clock.
- Implement random image selection on webpage refresh.
- Use jQuery for dynamic list creation and image animation effects.
- Practice DOM manipulation, event handling, and input validation.
- Maintain project documentation and manual testing records.
- Use Git and GitHub for version control and project management.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure, semantic elements, forms, and tables |
| CSS3 | Styling, colors, typography, and responsive design |
| CSS Flexbox | Navigation, image gallery, and multi-column layouts |
| CSS Grid | Faculty, academic programme, and research cards |
| JavaScript | Dynamic content, calculations, clock, and form validation |
| jQuery 3.7.1 | Dynamic list creation and image fade effects |
| DOM Manipulation | Updating webpage content dynamically |
| Git | Version control |
| GitHub | Repository hosting and project management |
| Visual Studio Code | Code development and editing |
| Live Server | Local development and browser testing |

---

## Assignment 1 — Website Features (Preserved)

### 1. Department Homepage

The homepage provides an overview of the Department of Computer Science, University of Delhi.

It includes:

- University and department header
- Navigation bar with dropdown menus
- Welcome section
- About the Department
- Department image gallery
- Department history
- Vision and Mission
- Academic Programmes
- Research Areas
- Faculty information
- News, Events, and Notices
- Event Highlights
- Live Digital Clock
- Student Activity Planner
- Contact information
- Footer

The homepage uses semantic HTML5 elements to organize content and CSS3 to provide a consistent visual appearance.

### 2. Navigation Menu

The website includes a horizontal navigation bar with dropdown submenus.

Features include:

- CSS hover-based dropdown menus, keyboard focus support and JavaScript click/tap handling
- Internal section navigation
- Links between multiple webpages
- Consistent navigation styling
- Responsive layout adjustments

### 3. Department Gallery

The homepage includes two department-related images displayed side by side using CSS Flexbox.

The gallery also supports interactive jQuery fade effects, allowing users to gradually hide and display both images using dedicated buttons.

The gallery maintains its side-by-side layout during the animations.

### 4. Faculty Information

Faculty information is presented using HTML unordered lists and styled faculty cards.

Each faculty card displays:

- Faculty name
- Designation
- Sample date of joining
- Dynamically calculated years of experience

JavaScript calculates the completed years of experience based on the sample joining date and the current date.

**Note:** Joining dates and calculated experience are illustrative and do not represent verified faculty employment records.

### 5. Academic Programmes

The website presents information about the following academic programmes:

- Undergraduate Computer Science programmes
- M.Sc. Computer Science
- Master of Computer Applications (MCA)
- Ph.D. Computer Science

The information is organized using styled cards for readability.

### 6. Research Areas

The website highlights several areas of computer science research, including:

- Artificial Intelligence
- Machine Learning
- Natural Language Processing
- Data Science
- Cybersecurity
- Computer Vision
- Software Engineering
- Computer Networks

### 7. News, Events, and Notices

The homepage includes a three-column layout created using CSS Flexbox.

The sections display illustrative:

- Departmental news
- Academic events
- Important notices

**Note:** The announcements are sample content created for the practical and should not be treated as verified university announcements.

### 8. Random Event Image

**Practical 9 — JavaScript**

The Event Highlights section displays a randomly selected illustrative event image whenever the homepage loads.

Features include:

- Random image selection using `Math.random()`
- Dynamic image source updates
- Corresponding image captions
- DOM manipulation using JavaScript
- Different event images across repeated page loads

The current script identifies the illustrative images as Republic Day Celebration, Anti-Ragging Awareness Session, and Department Event. Random selection may repeat an image on consecutive loads.

### 9. Faculty Experience Calculator

**Practical 10 — JavaScript**

The website automatically calculates faculty experience using sample joining dates.

Features include:

- JavaScript Date objects
- Extraction of joining dates from HTML data attributes
- Calculation of completed years of experience
- Automatic updating based on the current date
- Dynamic display of calculated results in faculty cards

### 10. Alumni Registration Form

The original Assignment 1 webpage, `alumni.html`, contained the following alumni registration form features. Assignment 2 enhances this same page; see the dedicated section below.

The form includes:

- Full Name
- Email Address
- Phone Number
- Date of Birth
- Graduation Batch
- Degree
- Current Designation
- Organization
- About Yourself
- Alumni Feedback
- Register and Reset buttons

**Practical 11 — JavaScript Form Validation**

JavaScript validation includes:

- Required-field validation
- Minimum input length validation
- Email format validation
- Ten-digit phone number validation
- Date of birth validation
- Graduation year validation
- Feedback minimum-length validation
- Feedback maximum limit of 300 characters
- Live feedback character counter
- Form reset handling
- Success and error messages

The feedback character counter updates dynamically as the user types.

**Important:** The alumni form is a front-end demonstration. Validating the form does not register an alumnus or store information in a database.

### 11. Course Timetable

A separate webpage, `timetable.html`, presents an illustrative M.Sc. Computer Science weekly timetable.

Features include:

- Monday-to-Friday schedule
- Subject names
- Time slots
- Lunch breaks
- Practical laboratory sessions
- HTML table elements
- Merged cells using `colspan`
- Responsive horizontal scrolling

**Note:** The timetable is created for academic demonstration and is not an official university timetable.

### 12. Live Digital Clock

**Practical 16 — JavaScript**

The homepage includes a digital clock that displays the current date and time.

Features include:

- Current time in 12-hour format
- Hours, minutes, and seconds
- AM/PM indicator
- Current date and weekday
- Automatic updates every second
- JavaScript `Date` objects
- `setInterval()` for repeated updates

The clock displays the visitor's device-local time.

### 13. Dynamic Student Activity Planner

**Practical 17 — jQuery**

The Student Activity Planner allows users to dynamically add activities to an unordered list.

Features include:

- Text input for activity names
- Add Item button
- Dynamic list creation using jQuery
- Support for the Enter key
- Prevention of empty or whitespace-only entries
- Automatic input clearing after adding an item
- Feedback messages
- List updates without refreshing the webpage

The activity list is temporary and is not stored in a database or browser storage.

### 14. Gallery Image Fade Effects

**Practical 18 — jQuery**

The existing department gallery includes interactive image fade animations.

Features include:

- Fade In button
- Fade Out button
- Smooth animations using jQuery
- Animation duration of 800 milliseconds
- Preservation of the side-by-side gallery layout
- Prevention of animation buildup during repeated button clicks

The implementation uses jQuery's `fadeTo()` method to animate image opacity while maintaining the original image positions.

---

## Assignment 2 — Enhanced Alumni Registration Form

**Designing and Validating an Alumni Registration Form Using AI-Assisted Development**

Assignment 2 improves the existing `alumni.html` module through semantic grouping, completion of the required registration fields, consistent input validation, accessible feedback, responsive styling and privacy safeguards. It retains the departmental visual identity and existing website functionality.

### Registration fields and validation rules

The form contains nine mandatory registration fields, one optional About Yourself field and mandatory Alumni Feedback. Four `fieldset` and `legend` groups organize the controls. Required fields are explicitly labelled.

| Group | Field | Control | Validation |
|---|---|---|---|
| Personal | Full Name | Text | Required; at least 3 characters after trimming |
| Personal | Email Address | Email | Required; valid HTML email syntax, exactly one `@`, nonempty local and domain parts, dotted domain with no empty components, no embedded whitespace |
| Personal | Contact Number | Telephone | Required; exactly 10 ASCII digits after trimming; leading zeroes allowed; no country code, internal spaces or symbols |
| Personal | Date of Birth | Date | Required; valid Gregorian date from 1900-01-01 to the device-local current date, inclusive |
| Academic | Academic Batch / Year of Passing | Number | Required; exactly four digits, 1980 to the current local year inclusive; decimal and exponent notation rejected |
| Academic | Course / Department | Select | Required; choose B.Sc. (Hons.) Computer Science, M.Sc. Computer Science, MCA, Ph.D. Computer Science or Other; placeholder is invalid |
| Professional | Current Designation | Text | Required; at least 2 trimmed characters |
| Professional | Organization / Company Name | Text | Required; at least 2 trimmed characters |
| Professional | Current Location | Text | Required; at least 2 trimmed characters; city or city and country, not full address |
| Additional information and feedback | About Yourself | Textarea | Optional; if nonblank after trimming, at least 10 characters |
| Additional information and feedback | Alumni Feedback | Textarea | Required; at least 10 trimmed characters and at most 300 raw characters |

Designation accepts alternatives such as Student, Unemployed, Retired and Self-employed. Organization accepts Not applicable, Independent or Self-employed where appropriate. Required text cannot consist solely of whitespace. HTML constraints complement JavaScript validation; the form uses `novalidate` to allow consistent custom error presentation. Date and year maxima are initialized and refreshed at validation time.

### Live feedback counter

- Starts at `0 characters entered | 300 characters remaining`.
- Updates on input, including typing, deletion and paste, without reloading the page.
- Uses the textarea's `maxlength` and JavaScript string length (UTF-16 code units); some emoji count as more than one unit.
- At the limit, displays 300 entered and 0 remaining. Remaining count is never negative.
- JavaScript independently rejects values exceeding 300 units even if the HTML limit is bypassed.
- Reset restores the initial counter and form state.

### Accessible validation and responsive design

- Associated labels, meaningful legends, persistent instructions and appropriate autocomplete attributes.
- Field-specific error text, visual invalid styling, `aria-invalid` and dynamic `aria-describedby` associations that preserve existing hints.
- Polite live regions for the counter and form-level status; focus moves to the first invalid field on unsuccessful validation.
- Entered values remain available for correction. Previously invalid fields are rechecked on edits, without premature errors on untouched fields.
- Successful validation displays a demonstration-only message; subsequent edits clear stale success. Reset clears values, errors, invalid states and status messages.
- Fluid form width, responsive spacing, wrapping navigation and stacked mobile buttons. Manual responsive tests were reported passed at 1440, 1280, 1024, 768, 425, 375 and 320 px.

### Frontend-only architecture and privacy

`alumni.html` defines the form and semantic controls; `style.css` provides shared and scoped responsive styles; `script.js` initializes the form, validates inputs, updates the counter and manages accessible messages. No additional library is required for alumni validation.

Registration is a local validation demonstration, not an actual registration service. The submit handler prevents default submission, and the page declares a Content Security Policy with `form-action 'none'` as an additional native-submission safeguard. Register is initially disabled and enabled only after successful initialization of required controls and handlers. Missing elements or initialization failures leave registration disabled; a `noscript` notice explains unavailable validation. Messages use safe text updates rather than injecting user-provided HTML.

The application does not intentionally transmit or persist registration values, use browser storage for them, or log them to the console. Use fictional sample data only. Browser-managed autofill and external browser behavior are outside the application's control. Client-side validation and CSP are not substitutes for production server-side validation or a comprehensive security review.

### AI-assisted software development methodology

1. Analyze the assignment specification and existing implementation; finalize the SRS with uniquely identified requirements and acceptance criteria.
2. Derive a test plan and requirements traceability matrix before implementation.
3. Develop incrementally: semantic structure, fields and constraints, responsive styling, feedback counter, validation and accessible error handling.
4. Review AI-generated changes, maintain Git commits and conduct a source-code conformance audit.
5. Correct audit findings, including fail-safe initialization, missing-element guards, inherited faculty/dropdown guards, the demonstration notice and formatting; preserve historical audit findings and append verification results.
6. Prepare a code comprehension walkthrough explaining the implementation and execution flow.
7. Execute manual functional, boundary, accessibility, privacy, compatibility and regression tests; perform W3C validation and consolidate evidence in the testing report.
8. Complete final deliverable verification before claiming submission readiness.

AI assists requirements engineering, implementation, review and documentation. Manual test confirmations, validator evidence and source inspection are distinguished; AI-generated expected outcomes are not treated as executed tests.

### Assignment documentation

| Document | Assignment 1 | Assignment 2 |
|---|---|---|
| Software Requirements Specification | [SRS](SRS.md) | [SRS](assignment-2/SRS.md) |
| Test and validation plan | [Test plan](ASSIGNMENT_TEST_PLAN.md) | [Test plan](assignment-2/ASSIGNMENT_TEST_PLAN.md) |
| Conformance audit | [Audit](CONFORMANCE_AUDIT.md) | [Audit and post-audit update](assignment-2/CONFORMANCE_AUDIT.md) |
| Code comprehension | [Walkthrough](CODE_WALKTHROUGH.md) | [Walkthrough](assignment-2/CODE_WALKTHROUGH.md) |
| Testing records | [Supplementary checklist](TESTING.md) | [Testing report](assignment-2/TESTING_REPORT.md) |

The finalized Assignment 2 SRS and test plan remain the requirements and testing baselines. The audit records original findings and subsequent corrective verification. The walkthrough explains HTML, CSS and JavaScript behavior. The testing report contains individual execution records for all 168 cases, evidence limitations and outstanding checks.

---

## Project Structure

```text
du-computer-science-department-website/
├── index.html
├── alumni.html
├── timetable.html
├── style.css
├── script.js
├── jquery-script.js
├── README.md
├── TESTING.md
├── SRS.md
├── ASSIGNMENT_TEST_PLAN.md
├── CONFORMANCE_AUDIT.md
├── CODE_WALKTHROUGH.md
├── images/
│   ├── university-of-delhi-logo.jpg
│   ├── department-of-computer-science.jpg
│   └── events/
│       ├── event1.jpg
│       ├── event2.jpeg
│       └── event3.jpeg
├── screenshots/
│   ├── html-validation.png
│   └── css-validation.png
└── assignment-2/
    ├── SRS.md
    ├── ASSIGNMENT_TEST_PLAN.md
    ├── CONFORMANCE_AUDIT.md
    ├── CODE_WALKTHROUGH.md
    ├── TESTING_REPORT.md
    └── screenshots/
```

Root-level academic documents and screenshots belong to Assignment 1. Assignment 2 evidence is maintained in its own screenshots directory; individual evidence filenames are recorded in the testing report. This tree reflects the documented repository structure, not an independently retrieved live GitHub manifest.

### File Descriptions

| File | Description |
|---|---|
| `index.html` | Main departmental homepage |
| `alumni.html` | Alumni registration and feedback form |
| `timetable.html` | Illustrative weekly course timetable |
| `style.css` | Website styling and responsive layouts |
| `script.js` | Random event images, faculty experience, alumni validation, and digital clock |
| `jquery-script.js` | Dynamic activity list and gallery fade animations |
| `README.md` | Project documentation |
| `TESTING.md` | Manual testing documentation |
| `images/` | Website images and illustrative event images |

---

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/Aishwarya9702/du-computer-science-department-website.git
cd du-computer-science-department-website
```

### Step 2: Open the Project

Open the downloaded project folder in Visual Studio Code.

### Step 3: Launch the Website

Open `index.html` in a web browser.

Alternatively, use the Live Server extension in VS Code: right-click `index.html` and select **Open with Live Server**. Navigate to the alumni page using the website menu. A local URL used during testing was `http://127.0.0.1:5500/alumni.html` (the port may vary). Enable JavaScript for interactive features.

### Step 4: Explore the Website

Use the navigation menu to access:

- Department homepage
- Faculty information
- Academic programmes
- Alumni registration form
- Course timetable
- Other departmental sections

### Step 5: Test Interactive Features

Try the following:

- Refresh the homepage to observe random event images.
- Check automatically calculated faculty experience.
- Enter dummy information in the alumni form to test validation.
- Type feedback to observe the live character counter.
- Observe the digital clock updating every second.
- Add activities using the Student Activity Planner.
- Use Fade In and Fade Out buttons in the department gallery.

### Requirements

- A modern web browser
- Internet connection for loading jQuery from its CDN
- Visual Studio Code (recommended for development)

No package installation, backend server, or database setup is required.

---

## Practical Requirements Covered

| Practical No. | Description | Technology |
|---|---|---|
| 3 | Department homepage using semantic HTML5 | HTML5 |
| 4 | Alumni registration form with CSS | HTML5, CSS3 |
| 5 | Course timetable using HTML tables | HTML5 |
| 6 | Styling HTML elements | CSS3 |
| 7 | Three-column News, Events, and Notices layout | CSS Flexbox |
| 8 | Dropdown navigation using hover effects | CSS3 |
| 9 | Random event image on homepage refresh | JavaScript |
| 10 | Faculty experience calculation | JavaScript |
| 11 | Alumni feedback counter and form validation | JavaScript |
| 16 | Digital clock updating every second | JavaScript |
| 17 | Dynamic list creation | jQuery |
| 18 | Image fade in and fade out effects | jQuery |

---

## Assignment 1 — Testing

The website is tested manually to verify its structure, functionality, and user interactions.

Testing areas include:

### HTML and CSS Testing

- Navigation links
- Dropdown menus
- Image loading
- Faculty information
- Academic programme cards
- Alumni form structure
- Timetable layout
- Responsive design
- CSS styling

### JavaScript Testing

- Random event image selection
- Faculty experience calculations
- Required-field validation
- Email and phone validation
- Date of birth validation
- Feedback character counter
- Form reset functionality
- Digital clock updates

### jQuery Testing

- Dynamic activity list creation
- Empty input handling
- Adding items using the Enter key
- Gallery fade-in animation
- Gallery fade-out animation
- Preservation of gallery layout

Assignment-specific test cases, execution results, and W3C validation records are maintained in [`ASSIGNMENT_TEST_PLAN.md`](ASSIGNMENT_TEST_PLAN.md).

Additional manual test cases for the complete multi-page website are documented in [`TESTING.md`](TESTING.md) as a supplementary, unexecuted testing checklist.

The formal Software Requirements Specification, conformance audit, and HTML/CSS code walkthrough are available in `SRS.md`, `CONFORMANCE_AUDIT.md`, and `CODE_WALKTHROUGH.md`, respectively.

---

## Assignment 2 — Testing and Standards Validation

The recorded results in the finalized execution report are:

| Category | Total | Passed | Failed | Pending |
|---|---:|---:|---:|---:|
| Functional | 5 | 5 | 0 | 0 |
| Field validation | 97 | 97 | 0 | 0 |
| Character counter | 14 | 14 | 0 | 0 |
| Error handling and reset | 5 | 5 | 0 | 0 |
| UI/UX | 1 | 1 | 0 | 0 |
| Responsive design | 7 | 7 | 0 | 0 |
| Accessibility | 4 | 4 | 0 | 0 |
| Cross-browser compatibility | 3 | 3 | 0 | 0 |
| Performance | 1 | 1 | 0 | 0 |
| Privacy and fail-safe behavior | 6 | 6 | 0 | 0 |
| Regression and baseline preservation | 12 | 12 | 0 | 0 |
| Standards and code quality | 4 | 4 | 0 | 0 |
| AI workflow and documentation | 9 | 5 | 0 | 4 |
| **Total** | **168** | **164** | **0** | **4** |

**Recorded pass proportion: 97.62%.** Chrome, Edge and Firefox compatibility, responsive checks and Assignment 1 regression tests were reported passed. Accessibility inspection used Chrome DevTools; no screen-reader execution is claimed. The report distinguishes manual confirmations from static review and validator evidence. Individual sub-run observations and exact browser versions were not collected.

### W3C validation

| File | Validator | Recorded result |
|---|---|---|
| `alumni.html` | Nu HTML Checker | Zero errors and zero warnings in the supplied screenshot; subsequent HTML correction and successful revalidation reported by the developer |
| `style.css` | W3C CSS Validator (CSS Level 3 + SVG) | Zero errors; three reviewed warnings |

The three CSS warnings concern identical background and border colors on the Register button in normal, hover and active states (lines 1166, 1172 and 1177 in the validated stylesheet). These are intentional solid-button styling choices, not CSS syntax errors. No changes are required solely to suppress them. Contrast and focus checks were separately reported passed.

The latest HTML revalidation and commit/push of the correction and testing report are developer-reported updates; the new validator screenshot and final remote revision have not been independently verified here. The earlier report remains the recorded execution snapshot.

### Outstanding final deliverable checks

| Test ID | Remaining verification | Recorded status |
|---|---|---|
| TC-DOC-006 | Testing report review and evidence reconciliation | Pending |
| TC-DOC-007 | Final ZIP inspection and clean extraction test | Pending |
| TC-DOC-008 | Public AI conversation link accessibility and privacy verification | Pending |
| TC-DOC-009 | Final candidate commit and remote availability verification | Pending |

Implementation, auditing, corrective development, code comprehension and reported manual testing are complete. The testing report has been prepared and is reported committed and pushed. The four recorded pending cases are retained until their acceptance criteria are verified; zero reported failures is not proof of defect-free software.

### Version control and Assignment 1 preservation

The `assignment-1-final` tag identifies the original Assignment 1 baseline (`cf70e4a`). To inspect it without changing the working tree:

```bash
git show assignment-1-final:README.md
git log --oneline assignment-1-final..HEAD
```

The supplied earlier Git history shows incremental Assignment 2 commits for the SRS, test plan, implementation, audit, corrections and walkthrough. The final revision should be recorded separately after deliverable verification; the earlier report's candidate hash is not assumed to be the latest commit.

---

## Limitations

- The website is a front-end academic demonstration.
- No backend or database is implemented.
- No authentication, OTP, email/phone ownership verification, server-side validation or administrative registration dashboard is implemented.
- Local form validation checks format and constraints, not the authenticity of alumni information.
- Final deliverable verification remains pending in the recorded testing report.
- The alumni form does not store or submit registration information.
- Faculty joining dates are sample values.
- Academic announcements and event images are illustrative.
- The timetable is not an official departmental schedule.
- Activities added to the Student Activity Planner disappear when the page is refreshed.
- jQuery requires an internet connection when loaded through the CDN.
- The random event image feature may select the same image on consecutive refreshes.
- Some components use horizontal scrolling on smaller screens.
- No automated testing framework has been implemented.

---

## Future Improvements

- Implement backend functionality for alumni registration.
- Connect the alumni registration form to a database.
- Add persistent storage for student activities.
- Develop an administrative interface for academic announcements.
- Introduce search functionality.
- Improve mobile navigation and accessibility.
- Add dynamic academic events and departmental updates.
- Implement automated testing.
- Integrate verified departmental information where permitted.

---

## Author

Developed as part of the **Web Development and Prompt Engineering Practical**.

**Project:** Department of Computer Science Website  
**Institution:** University of Delhi  
**Technologies:** HTML5, CSS3, JavaScript, jQuery, Git, GitHub

---

## Acknowledgement

This project was developed for academic learning and practical implementation of web development concepts.

**Department of Computer Science, University of Delhi**

Official website: https://cs.du.ac.in/

---

## License and Usage

This project is intended for educational and demonstration purposes.

University names, logos, and related materials remain the property of their respective owners.

This repository is not affiliated with or endorsed by the University of Delhi.