# Website Testing Documentation

## Department of Computer Science, University of Delhi

This document describes the manual testing plan for the Department of Computer Science website developed as part of the **Web Development and Prompt Engineering Practical**.

The website is developed using HTML5, CSS3, JavaScript, and jQuery.

Testing covers webpage structure, navigation, styling, responsive layouts, form validation, dynamic content, and interactive functionality.

> **Note:** All test cases are initially marked **Not Tested**. Update each status to **Pass** or **Fail** after performing the corresponding test in a browser. The test cases below are planned checks, not claims that testing has already been completed.

---

## 1. Testing Objectives

The objectives of testing are to:

- Verify that all webpages load correctly.
- Check navigation links and dropdown menus.
- Validate the alumni registration form using JavaScript.
- Verify the course timetable structure.
- Check CSS styling and layout consistency.
- Test responsive behavior on different screen sizes.
- Verify random event image selection.
- Check faculty experience calculations.
- Test the feedback character counter and input validation.
- Verify that the digital clock updates every second.
- Test dynamic list creation using jQuery.
- Verify gallery image fade-in and fade-out animations.
- Identify and correct functional or visual issues.
- Ensure new JavaScript and jQuery features do not interfere with existing functionality.

---

## 2. Testing Environment

| Component | Details |
|---|---|
| Project Type | Static multi-page interactive website |
| Technologies | HTML5, CSS3, JavaScript, jQuery 3.7.1 |
| Code Editor | Visual Studio Code |
| Version Control | Git and GitHub |
| Testing Method | Manual browser testing |
| Development Server | VS Code Live Server (optional) |
| Browsers | To be recorded during testing |
| Operating System | To be recorded during testing |
| Screen Sizes | Desktop, tablet, and mobile viewport widths |
| Internet Connection | Required for loading jQuery from CDN |

---

## 3. Homepage Testing

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| H01 | Open `index.html` | Homepage loads correctly | Not Tested |
| H02 | Check header | University and department names appear | Not Tested |
| H03 | Check navigation bar | Menu items display correctly | Not Tested |
| H04 | Check department introduction | Text is visible and readable | Not Tested |
| H05 | Check department gallery | Both images appear side by side | Not Tested |
| H06 | Check faculty section | Faculty information appears in lists | Not Tested |
| H07 | Check Vision and Mission | Both cards display correctly | Not Tested |
| H08 | Check Academic Programmes | Programme cards appear correctly | Not Tested |
| H09 | Check Research Areas | Research cards display correctly | Not Tested |
| H10 | Check News, Events, Notices | Three columns appear on desktop | Not Tested |
| H11 | Check Contact section | Contact information is visible | Not Tested |
| H12 | Check footer | Copyright and disclaimer are visible | Not Tested |
| H13 | Check Event Highlights | Event image and caption appear | Not Tested |
| H14 | Check Digital Clock section | Clock and date appear | Not Tested |
| H15 | Check Student Activity Planner | Input field, button, and list appear | Not Tested |

---

## 4. Navigation Testing

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| N01 | Click Home | Opens or scrolls to homepage | Not Tested |
| N02 | Hover over About Us | Dropdown menu appears | Not Tested |
| N03 | Hover over Academics | Dropdown menu appears | Not Tested |
| N04 | Hover over Faculty | Dropdown menu appears | Not Tested |
| N05 | Hover over Updates | Dropdown menu appears | Not Tested |
| N06 | Click Academic Programmes | Scrolls to programmes section | Not Tested |
| N07 | Click Alumni | Opens `alumni.html` | Not Tested |
| N08 | Click Timetable | Opens `timetable.html` | Not Tested |
| N09 | Click Contact | Scrolls to Contact section | Not Tested |
| N10 | Click external website link | Official website opens | Not Tested |

---

## 5. Alumni Registration Form Testing

The Alumni Registration Form includes HTML5 input elements and JavaScript-based validation.

### 5.1 Form Structure and Input Testing

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| A01 | Open `alumni.html` | Registration page loads correctly | Not Tested |
| A02 | Enter Full Name | Text is accepted | Not Tested |
| A03 | Enter Email Address | Email input accepts text | Not Tested |
| A04 | Enter Phone Number | Phone input accepts numeric characters | Not Tested |
| A05 | Select Date of Birth | Date input accepts a valid date | Not Tested |
| A06 | Enter Graduation Batch | Numeric input is accepted | Not Tested |
| A07 | Select a degree | Selected option appears | Not Tested |
| A08 | Enter designation | Text is accepted | Not Tested |
| A09 | Enter organization | Text is accepted | Not Tested |
| A10 | Enter About Yourself | Textarea accepts input | Not Tested |
| A11 | Enter Alumni Feedback | Feedback textarea accepts input | Not Tested |
| A12 | Click Reset | All form fields are cleared | Not Tested |
| A13 | Focus on an input | Focus styling appears | Not Tested |
| A14 | Hover over buttons | Button appearance changes | Not Tested |

### 5.2 JavaScript Form Validation — Practical 11

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| AV01 | Submit an empty form | Required-field error appears | Not Tested |
| AV02 | Enter name shorter than 3 characters | Minimum name length error appears | Not Tested |
| AV03 | Enter invalid email | Email validation error appears | Not Tested |
| AV04 | Enter phone number with fewer than 10 digits | Phone validation error appears | Not Tested |
| AV05 | Enter phone number containing letters | Phone validation error appears | Not Tested |
| AV06 | Leave Date of Birth empty | Required-field error appears | Not Tested |
| AV07 | Enter a future Date of Birth | Date validation error appears | Not Tested |
| AV08 | Enter an invalid graduation year | Graduation year validation error appears | Not Tested |
| AV09 | Enter designation shorter than 2 characters | Minimum length error appears | Not Tested |
| AV10 | Enter organization shorter than 2 characters | Minimum length error appears | Not Tested |
| AV11 | Enter About Yourself shorter than 10 characters | Minimum length error appears | Not Tested |
| AV12 | Enter feedback shorter than 10 characters | Feedback validation error appears | Not Tested |
| AV13 | Type in Feedback textarea | Character counter updates dynamically | Not Tested |
| AV14 | Enter exactly 300 feedback characters | Input is accepted | Not Tested |
| AV15 | Attempt to enter more than 300 characters | Additional characters are prevented | Not Tested |
| AV16 | Submit valid dummy details | Validation success message appears | Not Tested |
| AV17 | Submit valid form | Page does not reload or submit data | Not Tested |
| AV18 | Click Reset after entering feedback | Character counter resets to zero | Not Tested |
| AV19 | Trigger a validation error | Error message appears without an alert box | Not Tested |

### Form Limitations

- The form performs client-side validation only.
- No backend or database is implemented.
- Successful validation does not register an alumnus.
- Form information is not stored or transmitted to a registration service.
- Testing should use dummy information rather than real personal data.

---

## 6. Timetable Testing

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| T01 | Open `timetable.html` | Timetable page loads | Not Tested |
| T02 | Check table caption | Weekly Course Timetable appears | Not Tested |
| T03 | Check table headings | Time slots appear correctly | Not Tested |
| T04 | Check weekdays | Monday to Friday appear | Not Tested |
| T05 | Check subject names | Subjects appear in correct cells | Not Tested |
| T06 | Check lunch break | Lunch cells have distinct styling | Not Tested |
| T07 | Check lab sessions | Labs span two time slots | Not Tested |
| T08 | Check table borders | Rows and columns are separated | Not Tested |
| T09 | Hover over table rows | Row background changes | Not Tested |
| T10 | Reduce browser width | Table scrolls horizontally | Not Tested |

---

## 7. CSS Testing

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| C01 | Check headings | Navy-blue styling is applied | Not Tested |
| C02 | Check paragraphs | Text is readable with proper spacing | Not Tested |
| C03 | Check lists | Lists have appropriate formatting | Not Tested |
| C04 | Check backgrounds | Section backgrounds display correctly | Not Tested |
| C05 | Check borders | Cards and tables have visible borders | Not Tested |
| C06 | Check padding | Content is not crowded against edges | Not Tested |
| C07 | Check margins | Sections have appropriate spacing | Not Tested |
| C08 | Check hover effects | Cards and links respond to hover | Not Tested |
| C09 | Check Flexbox layout | Multi-column sections align correctly | Not Tested |
| C10 | Check CSS Grid | Card grids display correctly | Not Tested |
| C11 | Check clock styling | Clock uses the intended navy-blue theme | Not Tested |
| C12 | Check activity planner styling | Input and button are properly aligned | Not Tested |
| C13 | Check gallery fade buttons | Buttons match website styling | Not Tested |

---

## 8. Responsive Design Testing

Test the website at different browser viewport widths.

| Test ID | Screen Width | Expected Result | Status |
|---|---|---|---|
| R01 | 1440px | Desktop layout displays correctly | Not Tested |
| R02 | 1024px | Content remains readable | Not Tested |
| R03 | 768px | Responsive layouts adjust correctly | Not Tested |
| R04 | 600px | Mobile layout rules apply | Not Tested |
| R05 | 375px | No unintended page overflow | Not Tested |
| R06 | 375px | Timetable supports horizontal scrolling | Not Tested |
| R07 | 375px | Gallery images remain side by side | Not Tested |
| R08 | 375px | Alumni form remains usable | Not Tested |
| R09 | 375px | Digital clock text remains readable | Not Tested |
| R10 | 375px | Activity Planner controls remain usable | Not Tested |
| R11 | 375px | Gallery fade buttons remain accessible | Not Tested |

---

## 9. Random Event Image Testing — Practical 9

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| JS09-01 | Open homepage | An event image is displayed | Not Tested |
| JS09-02 | Refresh homepage repeatedly | Random event images are selected | Not Tested |
| JS09-03 | Check event caption | Caption matches the selected image | Not Tested |
| JS09-04 | Check image alternative text | Alt text corresponds to selected event | Not Tested |
| JS09-05 | Check event image files | All configured image paths load correctly | Not Tested |
| JS09-06 | Check page layout | Event image fits within its container | Not Tested |

**Expected behavior:** A random event is selected on each page load. The same image may appear on consecutive refreshes because selection is random.

---

## 10. Faculty Experience Calculator Testing — Practical 10

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| JS10-01 | Load Faculty section | Experience appears for all five faculty members | Not Tested |
| JS10-02 | Check Neelima Gupta's sample date | Completed experience is calculated correctly | Not Tested |
| JS10-03 | Check Punam Bedi's sample date | Completed experience is calculated correctly | Not Tested |
| JS10-04 | Check Vasudha Bhatnagar's sample date | Completed experience is calculated correctly | Not Tested |
| JS10-05 | Check Naveen Kumar's sample date | Completed experience is calculated correctly | Not Tested |
| JS10-06 | Check Dilip Senapati's sample date | Completed experience is calculated correctly | Not Tested |
| JS10-07 | Check experience labels | Sample data is clearly identified | Not Tested |
| JS10-08 | Check page after loading | No faculty card remains stuck on Calculating... | Not Tested |

**Expected behavior:** Experience is calculated in completed years using the current date and each sample joining date.

---

## 11. Digital Clock Testing — Practical 16

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| JS16-01 | Open homepage | Digital clock appears | Not Tested |
| JS16-02 | Check time format | Time appears in HH:MM:SS AM/PM format | Not Tested |
| JS16-03 | Observe clock for several seconds | Seconds update automatically | Not Tested |
| JS16-04 | Check current date | Correct date is displayed | Not Tested |
| JS16-05 | Check AM/PM indicator | Indicator matches device-local time | Not Tested |
| JS16-06 | Keep page open | Clock continues updating without refresh | Not Tested |
| JS16-07 | Resize browser | Clock remains readable | Not Tested |

---

## 12. Dynamic Activity Planner Testing — Practical 17

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| JQ17-01 | Enter an activity and click Add Item | New list item appears | Not Tested |
| JQ17-02 | Enter an activity and press Enter | New list item appears | Not Tested |
| JQ17-03 | Submit empty input | Validation message appears | Not Tested |
| JQ17-04 | Submit whitespace-only input | Validation message appears | Not Tested |
| JQ17-05 | Add a valid activity | Input field clears | Not Tested |
| JQ17-06 | Add multiple activities | All items appear in the list | Not Tested |
| JQ17-07 | Add an activity | Page does not refresh | Not Tested |
| JQ17-08 | Add an activity | Success message appears | Not Tested |
| JQ17-09 | Enter HTML-like text | Text is displayed without being executed as HTML | Not Tested |
| JQ17-10 | Refresh the webpage | Temporary list items disappear | Not Tested |

**Expected behavior:** The list updates dynamically using jQuery. Activity items are not stored permanently.

---

## 13. Gallery Image Fade Effects Testing — Practical 18

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| JQ18-01 | Open homepage gallery | Both images are visible | Not Tested |
| JQ18-02 | Check fade buttons | Fade In and Fade Out buttons appear | Not Tested |
| JQ18-03 | Click Fade Out | Both gallery images gradually become transparent | Not Tested |
| JQ18-04 | Click Fade In | Both gallery images gradually become visible | Not Tested |
| JQ18-05 | Check animation duration | Animation takes approximately 800 milliseconds | Not Tested |
| JQ18-06 | Click buttons repeatedly | Animations do not accumulate excessively | Not Tested |
| JQ18-07 | Fade images out | Image positions remain unchanged | Not Tested |
| JQ18-08 | Fade images in | Original side-by-side layout is preserved | Not Tested |
| JQ18-09 | Use fade buttons | Page does not reload | Not Tested |

**Expected behavior:** The existing gallery images fade in and out using jQuery's `fadeTo()` method while maintaining their positions.

---

## 14. Cross-Browser Testing

| Browser | Expected Result | Status |
|---|---|---|
| Google Chrome | Website and interactive features work correctly | Not Tested |
| Microsoft Edge | Website and interactive features work correctly | Not Tested |
| Mozilla Firefox | Website and interactive features work correctly | Not Tested |

---

## 15. JavaScript and jQuery Integration Testing

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| I01 | Load homepage | No JavaScript errors appear in browser console | Not Tested |
| I02 | Refresh homepage | Random image selection works | Not Tested |
| I03 | Check faculty section | Experience calculations work | Not Tested |
| I04 | Observe digital clock | Clock continues updating | Not Tested |
| I05 | Add an activity | Activity Planner works without affecting other sections | Not Tested |
| I06 | Apply gallery fade effects | Other interactive features continue working | Not Tested |
| I07 | Open alumni.html | JavaScript form validation works | Not Tested |
| I08 | Check browser console | No missing script or image errors appear | Not Tested |
| I09 | Load website with internet connection | jQuery library loads successfully | Not Tested |
| I10 | Test GitHub-hosted version, if enabled | Linked scripts and images load correctly | Not Tested |

---

## 16. Test Execution Procedure

1. Open the project in Visual Studio Code.
2. Launch `index.html` using Live Server or a web browser.
3. Verify homepage content, images, and navigation.
4. Open `alumni.html` and test form validation using dummy data.
5. Test the feedback character counter and Reset button.
6. Open `timetable.html` and inspect the weekly schedule.
7. Refresh the homepage repeatedly to test random event image selection.
8. Verify faculty experience calculations against sample joining dates.
9. Observe the digital clock for several seconds.
10. Add multiple activities using the Student Activity Planner.
11. Test gallery Fade In and Fade Out buttons.
12. Resize the browser to test responsive layouts.
13. Open browser Developer Tools and inspect the Console for errors.
14. Repeat relevant tests in additional browsers.
15. Record each test result as Pass or Fail.
16. Correct any identified issues and repeat failed tests.

---

## 17. Issues and Fixes

### Issue 1: Timetable Styling

**Observed Issue:**

The timetable initially displayed without proper cell spacing, borders, and background colors.

**Fix Applied:**

Added dedicated CSS rules for the timetable, including cell padding, borders, alternating row colors, and horizontal scrolling.

**Verification Status:** To be confirmed through final browser testing.

### Issue 2: Homepage Typography and Spacing

**Observed Issue:**

Some homepage headings and paragraphs initially used inconsistent fonts and spacing.

**Fix Applied:**

Updated the CSS to maintain consistent typography, heading colors, margins, and padding.

**Verification Status:** To be confirmed through final browser testing.

### Issue 3: Random Event Image Loading

**Observed Issue:**

An event image initially failed to load, displaying a broken-image icon and alternative text.

**Fix Applied:**

Reviewed the event image file paths and filenames to identify the source of the loading issue.

**Verification Status:** To be confirmed through final browser testing.

### Issue 4: Gallery Fade Effects Placement

**Observed Issue:**

The initial implementation added a separate Image Fade Effects section instead of applying the animation to the existing department gallery.

**Fix Applied:**

Removed the separate section and integrated the jQuery fade controls into the existing gallery.

Used `fadeTo()` to preserve the side-by-side image layout during animation.

**Verification Status:** To be confirmed through final browser testing.

---

## 18. Final Testing Summary

| Category | Total Tests |
|---|---:|
| Homepage | 15 |
| Navigation | 10 |
| Alumni Form Structure | 14 |
| Alumni JavaScript Validation | 19 |
| Timetable | 10 |
| CSS | 13 |
| Responsive Design | 11 |
| Random Event Image | 6 |
| Faculty Experience Calculator | 8 |
| Digital Clock | 7 |
| Dynamic Activity Planner | 10 |
| Gallery Image Fade Effects | 9 |
| Cross-Browser | 3 |
| Integration Testing | 10 |
| **Total** | **145** |

### Test Results

| Result | Count |
|---|---:|
| Passed | 0 |
| Failed | 0 |
| Not Tested | 145 |
| **Total** | **145** |

*The counts above are placeholders until the manual tests are executed and their results recorded.*

### Testing Status

**Pending final manual verification.**

After completing the testing process, update the results table and individual test statuses.

---

## 19. Conclusion

The Department of Computer Science website has been developed using HTML5, CSS3, JavaScript, and jQuery.

The manual testing plan covers webpage structure, navigation, alumni form validation, timetable layout, CSS styling, responsive design, dynamic JavaScript features, and jQuery interactions.

The project demonstrates fundamental and intermediate front-end web development concepts, including:

- Semantic HTML5
- CSS3 styling and responsive layouts
- JavaScript DOM manipulation
- JavaScript form validation
- Date and time calculations
- Dynamic webpage updates
- jQuery event handling
- jQuery animations
- Manual browser testing

Final testing results will be recorded after executing the test cases and verifying the website's functionality.