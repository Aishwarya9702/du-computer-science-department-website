
# Website Testing Documentation

## Department of Computer Science, University of Delhi

This document describes the manual testing performed on the Department of Computer Science website developed for the Web Development and Prompt Engineering practical.

## 1. Testing Objectives

The objectives of testing are to:

- Verify that all webpages load correctly.
- Check navigation links and dropdown menus.
- Validate the alumni registration form.
- Verify the course timetable structure.
- Check CSS styling and layout consistency.
- Test responsive behavior on different screen sizes.
- Identify and correct functional or visual issues.

## 2. Testing Environment

| Component | Details |
|-----------|---------|
| Project Type | Static multi-page website |
| Technologies | HTML5, CSS3 |
| Code Editor | Visual Studio Code |
| Version Control | Git and GitHub |
| Testing Method | Manual browser testing |
| Browsers | To be recorded during testing |
| Operating System | To be recorded during testing |

## 3. Homepage Testing

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| H01 | Open index.html | Homepage loads correctly | Not Tested |
| H02 | Check header | University and department names appear | Not Tested |
| H03 | Check navigation bar | Menu items display horizontally | Not Tested |
| H04 | Check department introduction | Text is visible and readable | Not Tested |
| H05 | Check department gallery | Both images appear side by side | Not Tested |
| H06 | Check faculty section | Faculty information appears in lists | Not Tested |
| H07 | Check Vision and Mission | Both cards display correctly | Not Tested |
| H08 | Check Academic Programmes | Programme cards appear correctly | Not Tested |
| H09 | Check Research Areas | Research cards display correctly | Not Tested |
| H10 | Check News, Events, Notices | Three columns appear on desktop | Not Tested |
| H11 | Check Contact section | Contact information is visible | Not Tested |
| H12 | Check footer | Copyright and disclaimer are visible | Not Tested |

## 4. Navigation Testing

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| N01 | Click Home | Opens or scrolls to homepage | Not Tested |
| N02 | Hover over About Us | Dropdown menu appears | Not Tested |
| N03 | Hover over Academics | Dropdown menu appears | Not Tested |
| N04 | Hover over Faculty | Dropdown menu appears | Not Tested |
| N05 | Hover over Updates | Dropdown menu appears | Not Tested |
| N06 | Click Academic Programmes | Scrolls to programmes section | Not Tested |
| N07 | Click Alumni | Opens alumni.html | Not Tested |
| N08 | Click Timetable | Opens timetable.html | Not Tested |
| N09 | Click Contact | Scrolls to Contact section | Not Tested |
| N10 | Click external website link | Official website opens | Not Tested |

## 5. Alumni Registration Form Testing

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| A01 | Open alumni.html | Registration page loads | Not Tested |
| A02 | Enter Full Name | Text is accepted | Not Tested |
| A03 | Leave Full Name empty | Browser requires a value on submission | Not Tested |
| A04 | Enter valid email | Email is accepted | Not Tested |
| A05 | Enter invalid email | Browser validation prevents submission | Not Tested |
| A06 | Enter 10-digit phone number | Input satisfies phone pattern | Not Tested |
| A07 | Enter invalid phone number | Browser rejects it on submission | Not Tested |
| A08 | Enter graduation batch | Numeric input is accepted | Not Tested |
| A09 | Leave batch empty | Browser requires a value | Not Tested |
| A10 | Select a degree | Selected option appears | Not Tested |
| A11 | Enter designation | Text is accepted | Not Tested |
| A12 | Enter organization | Text is accepted | Not Tested |
| A13 | Enter About Yourself | Textarea accepts input | Not Tested |
| A14 | Click Reset | All form fields are cleared | Not Tested |
| A15 | Focus on an input | Blue focus styling appears | Not Tested |
| A16 | Hover over buttons | Button appearance changes | Not Tested |

### Form Limitations

The alumni registration form uses HTML5 browser validation.

The form is not connected to a backend or database.

A successful browser validation does not mean that alumni information has been registered or stored.

Do not submit real personal information while testing.

## 6. Timetable Testing

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| T01 | Open timetable.html | Timetable page loads | Not Tested |
| T02 | Check table caption | Weekly Course Timetable appears | Not Tested |
| T03 | Check table headings | Time slots appear correctly | Not Tested |
| T04 | Check weekdays | Monday to Friday appear | Not Tested |
| T05 | Check subject names | Subjects appear in correct cells | Not Tested |
| T06 | Check lunch break | Lunch cells have distinct styling | Not Tested |
| T07 | Check lab sessions | Labs span two time slots | Not Tested |
| T08 | Check table borders | Rows and columns are separated | Not Tested |
| T09 | Hover over table rows | Row background changes | Not Tested |
| T10 | Reduce browser width | Table scrolls horizontally | Not Tested |

## 7. CSS Testing

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
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

## 8. Responsive Design Testing

Test the website at different browser widths.

| Test ID | Screen Width | Expected Result | Status |
|---------|--------------|-----------------|--------|
| R01 | 1440px | Desktop layout displays correctly | Not Tested |
| R02 | 1024px | Content remains readable | Not Tested |
| R03 | 768px | Responsive layouts adjust correctly | Not Tested |
| R04 | 600px | Mobile layout rules apply | Not Tested |
| R05 | 375px | No unintended page overflow | Not Tested |
| R06 | 375px | Timetable supports horizontal scrolling | Not Tested |
| R07 | 375px | Gallery images remain side by side | Not Tested |
| R08 | 375px | Alumni form remains usable | Not Tested |

## 9. Cross-Browser Testing

| Browser | Expected Result | Status |
|---------|-----------------|--------|
| Google Chrome | Website displays correctly | Not Tested |
| Microsoft Edge | Website displays correctly | Not Tested |
| Mozilla Firefox | Website displays correctly | Not Tested |

## 10. Test Execution Procedure

1. Open the project in Visual Studio Code.
2. Launch index.html using Live Server or a browser.
3. Check the homepage content and navigation.
4. Open alumni.html and test form validation.
5. Open timetable.html and inspect the table.
6. Resize the browser to test responsive layouts.
7. Check hover effects, spacing, and colors.
8. Record each test result as Pass or Fail.
9. Correct any identified issues.
10. Repeat failed tests after applying fixes.

## 11. Issues and Fixes

### Issue 1: Timetable Styling

**Observed Issue:**
The timetable initially displayed without proper
cell spacing, borders, and background colors.

**Fix Applied:**
Added dedicated CSS rules for the timetable,
including cell padding, borders, alternating
row colors, and horizontal scrolling.

**Verification Status:**
To be confirmed through final browser testing.

### Issue 2: Homepage Typography and Spacing

**Observed Issue:**
Some homepage headings and paragraphs initially
used inconsistent fonts and spacing.

**Fix Applied:**
Updated the CSS to maintain consistent typography,
heading colors, margins, and padding.

**Verification Status:**
To be confirmed through final browser testing.

## 12. Final Testing Summary

| Category | Total Tests |
|----------|-------------|
| Homepage | 12 |
| Navigation | 10 |
| Alumni Form | 16 |
| Timetable | 10 |
| CSS | 10 |
| Responsive Design | 8 |
| Cross-Browser | 3 |
| **Total** | **69** |

### Results

- Passed: To be updated
- Failed: To be updated
- Not Tested: 69

## 13. Conclusion

The website has been developed using HTML5 and CSS3.

The manual testing plan covers page navigation,
form validation, timetable structure, CSS styling,
and responsive behavior.

Final test results will be recorded after completing
the testing checklist.

This project demonstrates fundamental web development
concepts through a multi-page departmental website.
```
