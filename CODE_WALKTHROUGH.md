# HTML and CSS Code Walkthrough

**Project:** Department of Computer Science Homepage  
**University:** University of Delhi  
**Assignment:** Designing and Validating a Department Homepage Using AI-Assisted Development  
**Document Version:** 1.0  
**Files Reviewed:** `index.html`, `style.css`  
**Method:** AI-Assisted Block-by-Block Code Explanation

---

## 1. Introduction

This document explains the HTML and CSS implementation of the Department of Computer Science homepage.

The website uses semantic HTML5 for its structure and CSS3 for presentation, navigation, responsive layouts, and visual effects.

The walkthrough connects the implemented components with the functional and non-functional requirements established in the Software Requirements Specification (SRS).

## 2. HTML Document Structure

### 2.1 HTML5 Doctype

```html
<!doctype html>
<html lang="en">
```

The `<!doctype html>` declaration identifies the document as HTML5 and enables standards-mode rendering.

The `lang="en"` attribute declares English as the document language, supporting accessibility tools and browsers.

**SRS Mapping:** FR-01, NFR-02, NFR-03.

### 2.2 Head Section

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Department of Computer Science | University of Delhi</title>
</head>
```

The head section contains information about the webpage.

- `charset="utf-8"` supports Unicode text.
- The viewport meta tag enables responsive scaling on mobile devices.
- The stylesheet link connects the HTML document to external CSS.
- The title identifies the webpage in the browser tab.

Separating HTML and CSS improves readability and maintainability.

**SRS Mapping:** FR-01, NFR-01, NFR-05.

## 3. University Header

### 3.1 HTML Implementation

```html
<header class="site-header">
  <div class="header-container">
    <img
      src="images/University of Delhi logo.jpg"
      alt="University of Delhi Logo"
      class="du-logo"
    >
    <div class="header-text">
      <p class="university-name">University of Delhi</p>
      <h1>Department of Computer Science</h1>
    </div>
  </div>
</header>
```

The semantic `<header>` represents the introductory area of the webpage.

The university logo is displayed using an image element with alternative text. The department name appears inside an `<h1>`, identifying the primary page heading.

The actual header also includes a tagline describing the department's educational and research focus.

### 3.2 CSS Implementation

The `.site-header` selector defines the navy-blue background, white text, and spacing.

The `.header-container` selector uses `display: flex` to position the logo and text horizontally.

The `.du-logo` selector controls image dimensions, padding, and appearance.

At viewport widths of 600px or less, media queries reduce the header padding, logo dimensions, and text sizes.

**SRS Mapping:** FR-02, FR-08, NFR-01.

## 4. Navigation Bar and Dropdown Menus

### 4.1 Semantic Navigation

```html
<nav class="navbar" aria-label="Main navigation">
```

The `<nav>` element identifies the website's primary navigation region.

Navigation items are organized using an unordered list.

The homepage includes links for Home, About Us, Academics, Faculty, Updates, Alumni Registration, Timetable, and Contact.

### 4.2 Dropdown Structure

```html
<li class="dropdown">
  <a href="#about">About Us</a>
  <ul class="dropdown-menu">
    <li><a href="#about">Department Overview</a></li>
    <li><a href="#gallery">Department Gallery</a></li>
  </ul>
</li>
```

The nested list represents a submenu within a primary navigation item.

The `href` values refer to matching section IDs in the HTML document.

### 4.3 CSS Dropdown Behavior

```css
.dropdown:hover > .dropdown-menu,
.dropdown:focus-within > .dropdown-menu {
  display: block;
}
```

The dropdown is hidden by default using `display: none`.

The `:hover` pseudo-class reveals the submenu when the pointer moves over its parent.

The `:focus-within` pseudo-class also reveals the submenu when keyboard focus is within the dropdown.

The stylesheet uses absolute positioning and `z-index` to place the dropdown above nearby page content.

The navigation list uses Flexbox with wrapping enabled to accommodate narrower screens.

**SRS Mapping:** FR-03, FR-04, FR-10, NFR-08.

## 5. Main Content and Department Overview

The `<main>` element contains the primary content of the webpage.

Each major content area is organized into a semantic `<section>` with a descriptive heading.

### 5.1 Welcome Section

```html
<section id="home" class="welcome-section">
```

The welcome section introduces the department and includes links to academic programmes and the official department website.

CSS uses a light gradient background, spacing, and styled links that resemble buttons.

The `.welcome-links` container uses Flexbox with wrapping to accommodate smaller screens.

### 5.2 About Section

```html
<section id="about" class="about-section">
  <h2>About the Department</h2>
```

The About section contains a paragraph describing departmental education, research, programming, algorithms, artificial intelligence, and emerging technologies.

The `.about-section` class defines the section's background and padding.

The `.about-section p` selector controls paragraph typography and line spacing.

Using an ID for navigation and a class for styling separates navigation behavior from visual presentation.

**SRS Mapping:** FR-01, FR-05, NFR-07.

## 6. Department Gallery

### 6.1 HTML Implementation

```html
<section id="gallery" class="gallery-section">
  <h2>Department Gallery</h2>
  <div class="image-container">
    <img
      src="images/University of Delhi logo.jpg"
      alt="University of Delhi"
      class="gallery-fade-image"
    >
    <img
      src="images/Department of Computer Science.jpg"
      alt="Department of Computer Science"
      class="gallery-fade-image"
    >
  </div>
</section>
```

The gallery contains two images associated with the university and department.

The `.gallery-fade-image` class is also used by the existing jQuery image-fade functionality.

### 6.2 Flexbox Layout

```css
.image-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}
```

`display: flex` establishes a flexible layout container.

`flex-direction: row` arranges the images horizontally.

The `gap` property creates spacing between them, while `justify-content: center` controls alignment.

### 6.3 Image Styling

```css
.image-container img {
  width: calc(50% - 10px);
  height: 220px;
  object-fit: contain;
  border: 1px solid #dce3eb;
  background-color: #f7f9fc;
  box-sizing: border-box;
}
```

Each image occupies approximately half of the available container width.

The `calc()` expression accounts for the gap between the two images.

`object-fit: contain` preserves the image's proportions without cropping its content.

The layout is designed to keep the images side by side, including at narrower viewport widths.

Actual visibility and readability at mobile widths must be confirmed through browser testing.

**SRS Mapping:** FR-06, FR-08, NFR-01.

## 7. Additional Departmental Information

### 7.1 Department History

The History section uses a heading and paragraph to describe the department's background and development.

CSS controls section spacing, typography, and responsive text alignment.

### 7.2 Vision and Mission

The Vision and Mission section contains two `<article>` elements.

The `.vision-mission-container` uses Flexbox to display the cards horizontally.

At widths of 600px or less, `flex-direction: column` stacks the cards vertically.

### 7.3 Academic Programmes

The Academic Programmes section uses three cards to describe undergraduate, postgraduate, and doctoral education.

The `.programmes-container` uses CSS Grid.

```css
.programmes-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
```

The layout changes to two columns at widths of 900px or less and one column at widths of 600px or less.

### 7.4 Research Areas

The Research Areas section displays eight subject areas, including artificial intelligence, machine learning, natural language processing, data science, cybersecurity, and computer vision.

The `.research-container` uses a four-column CSS Grid on wider screens.

Responsive media queries reduce this to two columns at widths of 1000px or less and one column at widths of 600px or less.

These sections extend the mandatory homepage with additional academic information.

## 8. Faculty Directory

### 8.1 HTML List Structure

```html
<ul class="faculty-list">
  <li class="faculty-card">
    <h3>Prof. Neelima Gupta</h3>
    <ul>
      <li><strong>Designation:</strong> Senior Professor</li>
      <li>
        <strong>Date of Joining (Sample):</strong>
        <time datetime="2005-07-15">15 July 2005</time>
      </li>
    </ul>
  </li>
</ul>
```

The faculty directory uses a parent unordered list containing individual faculty cards.

Each card includes a faculty name, designation, sample joining date, and dynamically calculated experience field.

The `<time>` element represents the joining date in a machine-readable format.

The website explicitly identifies joining dates as sample data for academic demonstration.

### 8.2 Faculty Grid

```css
.faculty-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}
```

The faculty list uses a two-column CSS Grid.

At widths of 600px or less, the layout changes to one column to improve readability.

**SRS Mapping:** FR-07, FR-08, NFR-02.

## 9. News, Events, and Notices

The Updates section contains three articles identified as News, Events, and Notices.

Each article contains a list of illustrative announcements.

The `.updates-container` uses Flexbox to create a three-column layout on larger screens.

At widths of 900px or less, the cards stack vertically.

The content is explicitly identified as sample material, distinguishing academic demonstrations from official departmental announcements.

## 10. Additional Interactive Features

The homepage contains several features developed for other web development practicals.

### 10.1 Random Event Image

The Event Highlights section includes an image element and caption.

The image has an ID that allows JavaScript to locate and update it.

### 10.2 Digital Clock

The Digital Clock section includes a `<time>` element with the ID `digital-clock` and a separate element for the current date.

These elements provide display targets for the existing JavaScript.

### 10.3 Student Activity Planner

The Activity Planner includes a form, labeled text input, submit button, feedback message, and unordered list.

The list provides a container for dynamically added activities.

### 10.4 Gallery Fade Controls

The Gallery section includes Fade In and Fade Out buttons.

The controls are associated with the existing gallery image class.

### 10.5 External Scripts

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="script.js"></script>
<script src="jquery-script.js"></script>
```

The HTML loads the jQuery library, followed by the project's JavaScript files.

The scripts are placed near the end of the body so that the page markup is available before they execute.

The internal behavior of the scripts requires separate inspection of their source files.

These additional features are not mandatory for the Department Homepage assignment but demonstrate integration with earlier practical work.

## 11. Contact Section and Footer

### 11.1 Contact Information

The Contact section provides departmental location information and a link to the official website.

The `<address>` element is used for the contact address.

The `.contact-card` selector provides a bordered card layout with a light background.

### 11.2 Semantic Footer

```html
<footer class="site-footer">
```

The footer identifies the university and department, describes the page as an academic project, and clarifies that it is not an official University of Delhi website.

The `.site-footer` selector applies the navy-blue background, white text, centered alignment, and spacing.

**SRS Mapping:** FR-09.

## 12. Responsive Design Strategy

The website uses CSS media queries to adjust layouts according to viewport width.

| Viewport condition | Main adaptations |
|---|---|
| Above 1000px | Wider research and programme grids |
| 1000px and below | Research grid reduces to two columns |
| 900px and below | Programme grid reduces to two columns; updates stack |
| 600px and below | Faculty, programme, and research grids become single-column |
| 600px and below | Header, typography, padding, and other components become more compact |

The navigation uses `flex-wrap: wrap` to accommodate narrower viewports.

The gallery retains its horizontal Flexbox arrangement.

Responsive behavior must be verified at the viewport widths specified in the SRS and test plan: 1440px, 1024px, 768px, 600px, and 375px.

**SRS Mapping:** FR-08, NFR-01.

## 13. Google HTML/CSS Style Guide Compliance

The implementation incorporates several prescribed coding conventions:

- HTML5 doctype and UTF-8 character encoding.
- Lowercase HTML element and attribute names.
- Double-quoted HTML attribute values.
- Two-space indentation.
- External CSS stylesheet.
- Descriptive, hyphen-separated CSS class names.
- Lowercase hexadecimal color values.
- CSS section comments.
- Avoidance of `!important` declarations.
- Use of classes for visual styling while retaining IDs for navigation and scripting.

These conventions support code readability and maintainability.

Final standards compliance requires HTML and CSS validation.

## 14. SRS Traceability Summary

| Requirement | Implemented component |
|---|---|
| FR-01 | Semantic document structure |
| FR-02 | University header |
| FR-03 | Primary navigation |
| FR-04 | CSS dropdown menus |
| FR-05 | Department overview |
| FR-06 | Flexbox image gallery |
| FR-07 | Faculty directory |
| FR-08 | Responsive CSS rules |
| FR-09 | Semantic footer |
| FR-10 | Internal anchor navigation |
| NFR-01 | Media queries and adaptive layouts |
| NFR-02 | Semantic elements and heading structure |
| NFR-05 | External stylesheet |
| NFR-06 | Google formatting conventions |
| NFR-07 | Descriptive selectors and organized CSS |
| NFR-08 | Alternative text and focus-aware navigation |
| NFR-10 | Section comments and documentation |

## 15. Limitations and Pending Verification

The walkthrough is based on source-code inspection rather than browser execution.

The following activities remain outstanding:

1. Execute the manual test cases in `ASSIGNMENT_TEST_PLAN.md`.
2. Check responsive behavior at all required viewport widths.
3. Verify navigation and dropdown interaction with mouse and keyboard.
4. Confirm that both gallery images load and remain visible.
5. Validate HTML using the W3C Nu HTML Checker.
6. Validate CSS using the W3C CSS Validation Service.
7. Test the homepage in the required browsers.
8. Record actual results and any corrective actions.

## 16. Conclusion

The Department of Computer Science homepage demonstrates the use of semantic HTML5, CSS Flexbox, CSS Grid, responsive media queries, and CSS hover-based navigation.

The implementation satisfies the main structural requirements identified in the SRS at the source-code level.

Additional academic sections and interactive features extend the homepage beyond the minimum assignment requirements.

The next stage is manual execution and standards validation to establish whether the implementation meets the acceptance criteria in practice.
