# Department of Computer Science Website
## University of Delhi

A responsive, multi-page departmental website developed as part of the **Web Development and Prompt Engineering Practical**.

The project demonstrates the use of **HTML5, CSS3, JavaScript, and jQuery** to create a structured and interactive website featuring departmental information, faculty profiles, academic programmes, an alumni registration form, a course timetable, dynamic content, and interactive user interface elements.

The website also demonstrates practical web development concepts such as semantic HTML, responsive design, DOM manipulation, event handling, form validation, and jQuery animations.

> **Disclaimer:** This is an independent academic project created for educational purposes. It is not an official University of Delhi website.

---

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

## Website Features

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

- CSS hover-based dropdown menus
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

The images represent illustrative activities such as coding workshops, technical seminars, and student hackathons.

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

A separate webpage, `alumni.html`, contains an alumni registration form.

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
└── screenshots/
    ├── html-validation.png
    └── css-validation.png
```

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
```

### Step 2: Open the Project

Open the downloaded project folder in Visual Studio Code.

### Step 3: Launch the Website

Open `index.html` in a web browser.

Alternatively, use the Live Server extension in VS Code.

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

## Testing

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

## Limitations

- The website is a front-end academic demonstration.
- No backend or database is implemented.
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