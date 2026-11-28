# Assignment 3 — AI-Assisted Code Comprehension Walkthrough

## 1. Document information

| Property | Value |
|---|---|
| Project | Department of Computer Science Website, University of Delhi |
| Document | CODE_WALKTHROUGH.md |
| Version | 1.0 — reviewed code walkthrough |
| Intended path | assignment-3/CODE_WALKTHROUGH.md |
| Requirements | Approved SRS v1.0, 27 November 2026 |
| Verification baseline | Approved Software Test and Validation Plan v1.0 |
| Audit baseline | Approved Conformance Audit, including Section 23 |
| Method | AI-assisted static code comprehension |
| Formal execution | 158 Not Tested; no submission readiness claim |

All line references below refer to the current uploads, not historical audit line numbers. Excerpts are verbatim fragments, not standalone replacement programs. Examples are explanatory, not executed tests.

### 1.1 Inspected references

- `index(20261128-101252).html` — 892 lines.

- `alumni(20261128-101251).html` — 250 lines.

- `timetable(20261128-101258).html` — 151 lines.

- `style(20261128-101254).css` — 1932 lines.

- `script(20261128-101253).js` — 1817 lines.

- `jquery-script(20261128-101253).js` — 50 lines.

- `SRS(20261128-101237).md` — 387 lines.

- `ASSIGNMENT_TEST_PLAN(20261128-101237).md` — 2212 lines.

- `CONFORMANCE_AUDIT(20261128-101237).md` — 684 lines.

## 2. Project overview and architecture

The project is an independent academic demonstration, not an official university service. Assignment 1 provides the departmental content, responsive layout, gallery, navigation and timetable; Assignment 2 adds the detailed local alumni registration workflow; Assignment 3 extends the random event display to five entries, refines faculty experience calculation and replaces the jQuery activity insertion with native JavaScript. No backend, authentication or persistent activity storage is introduced.

### 2.1 Logical repository structure

```text
repository/
  index.html
  alumni.html
  timetable.html
  style.css
  script.js
  jquery-script.js
  images/
    events/ (five referenced image files)
  README.md
  assignment-3/
    SRS.md
    ASSIGNMENT_TEST_PLAN.md
    CONFORMANCE_AUDIT.md
    CODE_WALKTHROUGH.md
    screenshots/
```

This is the intended structure derived from the references, not a verified repository inventory. Historical assignment directories and tags are to be preserved. HTML defines meaning and controls; CSS controls visual presentation; JS reads and changes DOM state. The homepage loads jQuery 3.7.1, then script.js, then jquery-script.js at the end of the body (index.html 880–886). Alumni loads only script.js near the end; timetable loads no script. All use style.css. Native features do not depend on jQuery. Loading after markup makes DOM targets available; the gallery additionally uses jQuery ready. A failed CDN request can delay script execution but does not make native code depend on jQuery.

## 3. HTML walkthrough

### 3.1 Homepage

index.html 1–105 declares HTML5, English language, UTF-8, viewport, stylesheet, header and named navigation. The main contains sections for welcome, overview, gallery, history, vision/mission, programmes, research, faculty, updates, events, clock, planner and contact. Articles group related cards; lists represent collections; footer identifies the academic demonstration. Navigation uses links for destinations and native buttons for disclosure, with initially false aria-expanded and decorative arrows hidden from assistive technology. The four dropdowns are About Us, Academics, Faculty and Updates; alumni and timetable are separate page links.

**Source:** `index.html`, lines 42–51 (verbatim excerpt).

```html
      <li class="dropdown">
        <button type="button" class="dropdown-toggle" aria-expanded="false">
          About Us <span aria-hidden="true">▾</span>
        </button>

        <ul class="dropdown-menu">
          <li><a href="#about">Department Overview</a></li>
          <li><a href="#gallery">Department Gallery</a></li>
        </ul>
      </li>
```

The gallery (161–185) contains two images with alt text and separate type=button controls. Faculty markup (454–583) preserves five sample profiles, visible joining dates and machine-readable time/data attributes. The experience span initially explains that JavaScript is required. The disclaimer prevents interpreting sample dates as verified employment records.

**Source:** `index.html`, lines 480–490 (verbatim excerpt).

```html
              <time datetime="2005-07-15">
                15 July 2005
              </time>
            </li>
            <li>
              <strong>Experience:</strong>
              <span class="faculty-experience" data-joining-date="2005-07-15">
                Experience requires JavaScript.
              </span>
            </li>
          </ul>
```

The event figure contains an initial image and matching caption; aria-live polite and aria-atomic true request announcement of the complete updated caption. The initial image remains meaningful without JavaScript if the asset loads.

**Source:** `index.html`, lines 730–738 (verbatim excerpt).

```html
      <figure class="random-event-container">
        <img id="random-event-image"
          src="images/events/event1.jpg"
          alt="Students and professors participating in Republic Day Celebration">
        <figcaption id="event-caption" aria-live="polite" aria-atomic="true">
          Republic Day Celebration
        </figcaption>
      </figure>

```

The activity form associates a visible label with the input, limits ordinary entry to 100 code units and links feedback through aria-describedby. A submit button supports Enter as well as click. The feedback paragraph is outside the form but associated with the input; the initially empty unordered list receives items.

**Source:** `index.html`, lines 785–809 (verbatim excerpt).

```html
        <form id="activity-form">

          <label for="activity-input">
            Enter an Activity
          </label>

          <div class="activity-input-group">

            <input type="text" id="activity-input" placeholder="e.g. Attend AI Workshop" maxlength="100" aria-describedby="activity-message">

            <button type="submit" id="add-item-btn">
              Add Item
            </button>

          </div>

        </form>

        <p id="activity-message" class="activity-message" aria-live="polite"></p>

        <h3>My Activities</h3>

        <ul id="activity-list" class="activity-list">
        </ul>

```

### 3.2 Alumni registration

alumni.html 1–58 sets CSP form-action 'none', page navigation with aria-current, a fictional-data notice, noscript warning and novalidate form. Fieldsets and legends group personal, academic, professional and additional information (60–201). Labels, required attributes, input types, autocomplete, hints and hidden error paragraphs provide structure. Fields include name, email, phone, DOB, batch, degree, designation, organization, location, optional about and required feedback. Feedback has minlength 10 and maxlength 300. Register is initially disabled; reset is a native control. The script supplies custom validation and enables registration only after initialization. No actual registration is performed.

**Source:** `alumni.html`, lines 184–200 (verbatim excerpt).

```html
          <div class="form-group">
            <label for="feedback">Alumni Feedback (required)</label>

            <textarea id="feedback" name="feedback" rows="4"
              minlength="10" maxlength="300"
              placeholder="Share your feedback about the department"
              aria-describedby="feedback-hint character-count"
              required></textarea>

            <p id="feedback-hint">
              Enter at least 10 characters after trimming leading and
              trailing whitespace. Feedback must not exceed 300 characters
              in total.
            </p>

            <p id="character-count" class="character-count"
              aria-live="polite" aria-atomic="true">
```

### 3.3 Timetable and fallback

timetable.html 33–126 uses a section, sample-data note, table caption, thead/tbody, column and row scope and colspan for labs. The wrapper is focusable in normal Tab order, a named region, and scrolls independently. F-06 adds explicit focusability without changing timetable data.

**Source:** `timetable.html`, lines 52–69 (verbatim excerpt).

```html
      <div class="timetable-wrapper" tabindex="0"
        role="region" aria-label="Weekly course timetable">

        <table class="course-timetable">

          <caption>
            Weekly Course Timetable
          </caption>

          <thead>
            <tr>
              <th scope="col">Day</th>
              <th scope="col">9:00 - 10:00</th>
              <th scope="col">10:00 - 11:00</th>
              <th scope="col">11:00 - 12:00</th>
              <th scope="col">12:00 - 1:00</th>
              <th scope="col">1:00 - 2:00</th>
              <th scope="col">2:00 - 3:00</th>
```

Without JS, static content, links, gallery images and timetable remain; faculty shows its static explanation, event shows the initial figure, and alumni Register stays disabled with a noscript notice. CSS-only hover/focus navigation remains but aria-expanded is static and narrow overflow is documented. The activity form is not a functional planner without JS; its default submission is not prevented by a script that never runs. Gallery buttons and clock do not provide their interactive behavior without JS. These are fallback boundaries, not claims of full no-JS equivalence.

## 4. CSS walkthrough

CSS uses shared colours, spacing, typography and media queries. Flexbox aligns items along a row or column (header, navigation, gallery, activity controls); Grid creates card columns (faculty, programmes, research, updates). Breakpoints include 600, 768, 900, 1000 and 375px. At small widths padding and font sizes reduce, cards stack and navigation wraps. The gallery is deliberately kept side by side, not converted to a single column. The following width calculation reserves the 20px gap and border-box includes borders in the declared width.

**Source:** `style.css`, lines 3–17 (verbatim excerpt).

```css
.image-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}

.image-container img {
  width: calc(50% - 10px);
  height: 220px;
  object-fit: contain;
  border: 1px solid #dce3eb;
  background-color: #f7f9fc;
  box-sizing: border-box;
```

Faculty grid (216–259) uses repeat(2,minmax(0,1fr)) and switches to one column at 600px. Event styling (1478–1533) uses a centred figure, contained image, fixed responsive height, hidden-image rule and wrapping caption; faculty experience and unavailable feedback styling follow (1538 onward). Activity styles (1716–1867) use a flexible input, border-box, max-width, invalid border, distinct success/error colours, disabled button styling and overflow-wrap:anywhere for long list items. The 600px rule stacks the controls. Textual feedback means colour is not the sole signal.

**Source:** `style.css`, lines 1835–1848 (verbatim excerpt).

```css
.activity-list {
  padding-left: 25px;
}

.activity-list li {
  padding: 12px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid #dce3eb;
  border-radius: 6px;
  color: #24364b;
  line-height: 1.6;
  overflow-wrap: anywhere;
}
```

Navigation base CSS (94–189) uses absolute menus with minimum width and nowrap links. The fallback hover/focus selectors apply only without navigation-enhanced. Enhanced visibility follows the button ARIA attribute, and align-right changes anchoring. This is a conditional correction, not a general collision solver. Focus outlines are visible on buttons and links; form inputs have focus styles. Timetable wrapper uses horizontal overflow rather than making the entire page scroll sideways.

**Source:** `style.css`, lines 1910–1924 (verbatim excerpt).

```css
.navigation-enhanced .dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
  display: block;
}

.navigation-enhanced .dropdown.align-right > .dropdown-menu {
  left: auto;
  right: 0;
}

.dropdown-toggle:focus-visible,
.dropdown-menu a:focus-visible {
  outline: 2px solid white;
  outline-offset: -3px;
}

```

**Source:** `style.css`, lines 1345–1358 (verbatim excerpt).

```css
.timetable-wrapper {
  width: 100%;
  overflow-x: auto;
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.timetable-wrapper:focus-visible {
  outline: 2px solid #234f7b;
  outline-offset: 2px;
}

/* Timetable */
```

Actual contrast, zoom, keyboard focus visibility and layout at 320/375/768/1024/1440px remain formal verification tasks. Source declarations do not establish computed rendering in every browser.

## 5. Random event image — script.js 2–360

### 5.1 Data and validation

The eventImages array contains five objects, each with src, alt and caption. The paths and captions are:

| Path under images/events/ | Caption |
|---|---|
| event1.jpg | Republic Day Celebration |
| event2.jpeg | Anti-Ragging Awareness Session |
| event3.jpeg | Department Event |
| event4.jpg | Sankalan 2026 |
| event5.jpg | Sports Day |

The alt strings describe the corresponding scenes in the metadata; actual asset accuracy and permissions are not established by reading strings. isNonemptyText, isValidEventPath and isValidEvent (129–147) require nonblank strings and restrict paths to the event directory with supported extensions. The filter/map/filter pipeline trims values and uses a Set to exclude repeated exact trimmed paths. It does not compare image binary content.

**Source:** `script.js`, lines 273–292 (verbatim excerpt).

```js
    const seenPaths = new Set();

    // Create a separate collection of valid, distinct candidates.
    const eligibleEvents = collection
      .filter(isValidEvent)
      .map(function (event) {
        return {
          src: event.src.trim(),
          alt: event.alt.trim(),
          caption: event.caption.trim()
        };
      })
      .filter(function (event) {
        if (seenPaths.has(event.src)) {
          return false;
        }

        seenPaths.add(event.src);
        return true;
      });
```

### 5.2 Execution flow

1. displayRandomEvent() runs independently at script load (354–360). It locates section, image and caption; checks homepage context; identifies a unique event figure and uses a dataset marker to avoid duplicate initialization.
2. Validate target types and direct parent relationships. If missing, warn and attempt unavailable feedback without mutating arbitrary caption targets.
3. Construct the full eligible collection. If empty, verify the initial image using its complete/load/error state and natural dimensions. Preserve a usable initial image and caption while adding a separate status message; otherwise hide the broken image.
4. Copy eligible entries, select a random index, remove that candidate and increment attempts. Math.random returns a value in [0,1); multiplying by length and flooring yields an index from zero to length minus one. For five entries, illustrative random 0.64 yields floor(3.2)=3 (event4 if all five are eligible).
5. loadEventImage (150–190) creates a detached Image, registers load/error before assigning src and alt, removes listeners on completion and resolves the loaded image or null. Unexpected handler errors reject the promise.
6. On success reuse the loaded node, preserve ID/class, update the current image reference and set caption text from the same selected object. Return immediately.
7. On ordinary load failure try another distinct candidate; stop at five attempts or exhaustion and show unavailable feedback. Each reload starts afresh, so consecutive repeats are valid.

**Source:** `script.js`, lines 312–341 (verbatim excerpt).

```js
    // Each candidate can be attempted only once.
    let attempts = 0;
    while (remainingEvents.length > 0 && attempts < maxAttempts) {
      const randomIndex = Math.floor(
        Math.random() * remainingEvents.length
      );

      const selectedEvent = remainingEvents.splice(
        randomIndex,
        1
      )[0];

      attempts++;
      const loadedImage = await loadEventImage(selectedEvent);

      if (loadedImage) {
        // Reuse the successfully loaded image instead of reloading it.
        loadedImage.id = eventImage.id;
        loadedImage.className = eventImage.className;
        loadedImage.hidden = false;

        eventImage.replaceWith(loadedImage);
        eventImage = loadedImage;
        eventCaption.textContent = selectedEvent.caption;

        return;
      }

      warnEvent("Event highlights: unable to load " + selectedEvent.src);
    }
```

F-05 adds maxAttempts=5 (40) independently of collection size; it does not truncate the initial eligible collection. F-07 adds typed section/figure/caption checks (58–81), independent recovery (83–126), current-image tracking (333–335) and protected warning/outer promise catch. If the caption update fails after replacement, recovery targets the replacement. If caption cannot be used, a suitable section/figure receives a status paragraph. Recovery is best effort: no timeout exists for a stalled image request; failed DOM APIs can prevent hiding or feedback. A replacement that throws after a side effect is not guaranteed recoverable. No polling or persistent selection history exists.

## 6. Faculty experience — script.js 362–680

### 6.1 Calendar calculation

The initializer reads .faculty-experience elements under #faculty and passes member.dataset.joiningDate to getExperienceText. parseJoiningDate (382–417) checks exact ten-character YYYY-MM-DD format, years 1–9999, month bounds and day bounds using a month-length array. It avoids Date constructor normalization and special handling of years 0–99. Gregorian leap years are divisible by 400 or divisible by 4 but not 100. Thus 2000 is leap and 1900/2100 are not. getLocalCalendarDate uses local getFullYear/getMonth/getDate rather than UTC; month is adjusted from zero-based. getDateKey produces a comparable YYYYMMDD number. Future dates are rejected before calculation.

**Source:** `script.js`, lines 435–478 (verbatim excerpt).

```js
  function calculateCompletedYears(joiningDate, today) {
    let anniversaryMonth = joiningDate.month;
    let anniversaryDay = joiningDate.day;

    // A leap-day anniversary falls on 1 March in non-leap years.
    if (anniversaryMonth === 2 &&
        anniversaryDay === 29 &&
        !isLeapYear(today.year)) {
      anniversaryMonth = 3;
      anniversaryDay = 1;
    }

    let experience = today.year - joiningDate.year;

    const beforeAnniversary =
      today.month < anniversaryMonth ||
      (today.month === anniversaryMonth &&
        today.day < anniversaryDay);

    if (beforeAnniversary) {
      experience--;
    }

    return Math.max(0, experience);
  }

  // Validate the joining date and produce the required display text.
  function getExperienceText(value, today) {
    const joiningDate = parseJoiningDate(value);

    if (!joiningDate) {
      return "Invalid joining date";
    }

    if (getDateKey(joiningDate) > getDateKey(today)) {
      return "Joining date is in the future.";
    }

    const experience = calculateCompletedYears(joiningDate, today);
    const unit = experience === 1 ? "year" : "years";

    return `${experience} ${unit} (Sample)`;
  }

```

### 6.2 Worked examples (illustrative, not test results)

| Joining date | Local current date | Reason | Output |
|---|---|---|---|
| 2005-07-15 | 2026-07-14 | 21 minus 1 | 20 years (Sample) |
| 2005-07-15 | 2026-07-15 | anniversary reached | 21 years (Sample) |
| 2005-07-15 | 2026-07-16 | after anniversary | 21 years (Sample) |
| 2026-11-28 | 2026-11-28 | same day | 0 years (Sample) |
| 2025-11-28 | 2026-11-28 | exactly one | 1 year (Sample) |
| 2000-02-29 | 2025-02-28 | March 1 convention | 24 years (Sample) |
| 2000-02-29 | 2025-03-01 | anniversary reached | 25 years (Sample) |
| 2000-02-29 | 2024-02-29 | leap-year anniversary | 24 years (Sample) |
| 1900-02-29 | 2026-11-28 | impossible date | Invalid joining date |
| 2027-01-01 | 2026-11-28 | future | Joining date is in the future. |

### 6.3 Initialization and recovery

The IIFE runs immediately. It checks homepage context, section and targets, reports incomplete cards and uses dataset.facultyInitialized to prevent duplicate timers. checkFacultyDate reads a local date key and skips recalculation when unchanged. updateExperienceText also compares text before writing. A 60000ms interval checks the date, not a second-by-second experience update. A suspended tab can update at the next available callback; exact scheduling is browser-dependent.

**Source:** `script.js`, lines 560–579 (verbatim excerpt).

```js
  function checkFacultyDate() {
    try {
      const today = getLocalCalendarDate();
      const currentDateKey = getDateKey(today);

      if (!Number.isFinite(currentDateKey)) {
        throw new Error("Local calendar date unavailable.");
      }

      if (currentDateKey === lastCheckedDate) {
        return;
      }

      calculateFacultyExperience(today);
      lastCheckedDate = currentDateKey;
    } catch (error) {
      // Reset state before attempting any DOM recovery.
      lastCheckedDate = null;
      warnFaculty("Faculty experience: date check failed.");
      facultyMembers.forEach(markUnavailable);
```

**Source:** `script.js`, lines 645–679 (verbatim excerpt).

```js
    ownsInitialization = true;
    facultySection.dataset.facultyInitialized = "true";

    // Calculate immediately, then check the local date once per minute.
    checkFacultyDate();
    timerActive = true;
    facultyTimer = window.setInterval(function () {
      if (timerActive) {
        checkFacultyDate();
      }
    }, checkInterval);
  } catch (error) {
    // Disable this callback before attempting timer cleanup.
    timerActive = false;
    lastCheckedDate = null;
    warnFaculty("Faculty experience: initialization failed.");

    let timerCleared = true;
    if (facultyTimer !== null) {
      timerCleared = recoverFaculty(function () {
        window.clearInterval(facultyTimer);
        facultyTimer = null;
      }, "Faculty experience: timer cleanup failed.");
    }

    // Never release another initializer's marker or a live timer's guard.
    if (ownsInitialization && timerCleared) {
      recoverFaculty(function () {
        delete facultySection.dataset.facultyInitialized;
      }, "Faculty experience: initialization state cleanup failed.");
    }

    facultyMembers.forEach(markUnavailable);
    showUnavailableFeedback();
  }
```

F-03: calculateFacultyExperience isolates each profile in try/catch; markUnavailable uses recoverFaculty to protect secondary writes. showUnavailableFeedback attempts a section status message; warnFaculty guards diagnostics. Date failure resets lastCheckedDate before recovery. Initialization failure deactivates callback, attempts clearInterval, and releases only its owned marker when cleanup succeeds. If physical timer removal fails the callback guard prevents work; marker is retained. A timer API that registers and then throws may not expose its handle. A profile failure may remain until the next date change; section feedback can persist. Actual scheduling, recovery and announcements require testing.

## 7. Native activity planner — script.js 682–1036

### 7.1 Migration and normal flow

The old jQuery list handler is removed; jquery-script.js now contains gallery behavior only. initializeActivityPlanner is a closure returning an initializer, with WeakSets for managed forms and installed blockers. It obtains six DOM targets and checks expected types/relationships before registering one native submit handler for normal operation. The marker and WeakSet prevent repeated initialization. Missing targets on unrelated pages normally cause a silent return; incomplete homepage targets trigger unavailable handling.

On submit, preventDefault stops ordinary form navigation, then the availability guard prevents insertion if shut down. The raw value is read before trimming; length above 100 is rejected even if whitespace would disappear. JavaScript string length counts UTF-16 code units, not visual characters: 100 ASCII letters or 50 😀 (two units each) fit; 101 letters or 51 😀 do not. A combining sequence may also use multiple units. HTML maxlength helps ordinary typing but programmatic values require JS validation.

**Source:** `script.js`, lines 846–898 (verbatim excerpt).

```js
    function handleActivitySubmit(event) {
      let rawActivity = null;
      let newItem = null;

      try {
        event.preventDefault();
        if (!available) {
          return;
        }

        // Read the original value before performing any trimming.
        rawActivity = activityInput.value;

        // Validate the raw UTF-16 length before other input checks.
        if (rawActivity.length > 100) {
          showActivityValidationError(
            "Activity must not exceed 100 characters."
          );
          return;
        }

        // Remove leading and trailing whitespace after length validation.
        const activity = rawActivity.trim();

        // Reject empty and whitespace-only input.
        if (activity === "") {
          showActivityValidationError(
            "Please enter an activity."
          );
          return;
        }

        // Create a list item without interpreting user input as HTML.
        newItem = document.createElement("li");
        newItem.textContent = activity;

        // Preserve existing items and their insertion order.
        activityList.appendChild(newItem);

        // Clear the invalid state only after successful insertion.
        activityInput.removeAttribute("aria-invalid");

        // Clear the input and display successful feedback.
        activityInput.value = "";

        showActivityMessage(
          "Activity added successfully!",
          false
        );

        activityInput.focus();

      } catch (error) {
```

The blank check rejects empty or whitespace-only text. Validation errors retain input, set aria-invalid and focus it; success removes invalid state, clears input, shows success and restores focus. The new li is created using createElement and textContent, so markup-like input is displayed literally rather than parsed as HTML. appendChild preserves insertion order; no duplicate-name check exists, so duplicates are permitted. The list exists only in the current DOM and is reconstructed empty on reload. No storage or backend is used.

### 7.2 F-04 shutdown and rollback

If an unexpected failure occurs, available becomes false first. The handler independently attempts to prevent default again, remove only the new item if it belongs to the list, restore the original untrimmed input, clear validation state, shut down and restore focus. disableActivityPlanner (752–844) recovers the associated form if necessary, tracks ownership, attempts a prevention-only submit listener and records installation only on success. The original handler is removed only when a blocker is known installed; if registration fails, the original inactive handler can still prevent default. It separately marks unavailable, disables submit/image controls and Add Item, and attempts feedback text and CSS class updates. Diagnostics avoid logging input values.

**Source:** `script.js`, lines 900–926 (verbatim excerpt).

```js
        warnActivity("Activity planner: submission processing failed.");
        preventActivitySubmission(event);

        recoverActivity(function () {
          if (newItem && newItem.parentNode === activityList) {
            activityList.removeChild(newItem);
          }
        }, "Activity planner: list rollback failed.");
        recoverActivity(function () {
          if (rawActivity !== null &&
              activityInput instanceof HTMLInputElement) {
            activityInput.value = rawActivity;
          }
        }, "Activity planner: input restoration failed.");
        recoverActivity(function () {
          if (activityInput instanceof HTMLInputElement) {
            activityInput.removeAttribute("aria-invalid");
          }
        }, "Activity planner: validation state cleanup failed.");

        disableActivityPlanner();
        recoverActivity(function () {
          if (activityInput instanceof HTMLInputElement) {
            activityInput.focus();
          }
        }, "Activity planner: focus restoration failed.");
      }
```

The shutdown is deliberately best effort: if all prevention APIs fail, navigation cannot be guaranteed; direct form.submit() bypasses normal submit events. Failed rollback may leave the new item; failed input/feedback writes may leave stale state. These limitations do not establish formal fault-test success. The intended normal path is synchronous, with one insertion per valid submit.

## 8. Inherited features and integration

### 8.1 Alumni validation — script.js 1038–1634

initializeAlumniForm checks form and controls, uses a ready guard, and enables Register only at the end. updateFeedbackCounter (1106–1123) reads maxlength and value.length, clamps remaining count at zero, and writes textual feedback. updateDateAndYearConstraints sets maximum DOB and batch from the local date. validateAlumniForm (1261–1397) builds an error object keyed by field ID: trimmed name >=3; email checked by custom syntax helper; phone exactly ten ASCII digits; DOB valid from 1900-01-01 through today; batch four digits from 1980 through current year; approved degree; designation/organization/location >=2; optional about blank or >=10 trimmed; feedback raw <=300 and trimmed >=10. Email validation is syntactic, not proof of ownership or deliverability.

Field error helpers (1400–1522) preserve instructional aria-describedby tokens, associate error IDs, set aria-invalid and show summary. Submit prevents default, refreshes date constraints, displays errors and focuses first invalid field; success explicitly states no submission/storage. Delegated input/change revalidate previously invalid fields and clear stale success. Reset clears errors/messages and schedules counter update after native reset. CSP form-action 'none' is an independent browser policy safeguard; no backend or storage calls are implemented. Use fictional data only.

**Source:** `script.js`, lines 1106–1123 (verbatim excerpt).

```js
  function updateFeedbackCounter() {
    if (!feedback || !characterCount) {
      return;
    }

    const maxLength = feedback.maxLength;
    const enteredCharacters = feedback.value.length;
    const remainingCharacters = Math.max(
      0,
      maxLength - enteredCharacters
    );

    characterCount.textContent =
      `${enteredCharacters} characters entered | ` +
      `${remainingCharacters} characters remaining`;
  }

  /* Local Date and Year Constraints */
```

**Source:** `script.js`, lines 1524–1557 (verbatim excerpt).

```js
  alumniForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!ready) {
      return;
    }

    const today = new Date();

    // Refresh the permitted date and year before validation.
    updateDateAndYearConstraints(today);

    const validationErrors = validateAlumniForm(today);

    displayValidationErrors(validationErrors);

    const invalidFieldIds = fieldIds.filter(function (fieldId) {
      return Boolean(validationErrors[fieldId]);
    });

    if (invalidFieldIds.length > 0) {
      updateValidationSummary();

      // Focus the first invalid field in form order.
      fields[invalidFieldIds[0]].focus();

      return;
    }

    showFormMessage(
      "Form validated successfully! " +
      "This is a demonstration; no data has been submitted or stored.",
      "success"
    );
  });
```

### 8.2 Digital clock — script.js 1637–1702

updateDigitalClock locates #digital-clock and #current-date, reads local time, converts hours to 12-hour form using hours % 12 || 12, pads components and writes time/date. Date formatting uses en-IN. It assigns dateTime from toISOString to the clock span; this assignment does not turn a span into a semantic time element. The function runs immediately, then every 1000ms only if the clock target exists. This timer is separate from the faculty timer. Real update timing depends on browser scheduling.

### 8.3 Navigation — script.js 1706–1818; style.css 180–183, 1910–1924

F-01 replaces conflicting visibility state with one active disclosure and pinned flag. initializeNavigation finds .navbar and each dropdown/toggle/menu, checks completeness and avoids repeated enhancement. openMenu closes another active menu, sets aria-expanded true and positions it. closeMenu clears active/pinned, sets false, removes alignment and restores focus when requested or when focus was inside the menu. Mouse pointerenter opens transiently; pointerleave closes only if not pinned and focus is not in menu. Native button click (including touch, Enter and Space) pins an open menu or closes a pinned one. Merely tabbing onto the enhanced button does not open it; activation does. focusout closes when leaving the dropdown, outside click closes, Escape dismisses and can restore focus. The enhancement class is added after handlers are installed.

F-02 positionMenu removes align-right, measures the menu right edge and compares with document.documentElement.clientWidth. If it exceeds viewport, align-right anchors the menu to the right edge of its parent. Resize repeats positioning for the active menu. This does not clamp both edges or solve every possible width. CSS-only hover/focus fallback has static ARIA and retains narrow overflow limitations. Earlier Chromium checks and user-confirmed reproduction are historical evidence in audit Section 23; exact final measurements and physical touch/cross-browser checks remain pending.

**Source:** `script.js`, lines 1730–1760 (verbatim excerpt).

```js
  function positionMenu(item) {
    item.dropdown.classList.remove("align-right");
    if (item.menu.getBoundingClientRect().right >
        document.documentElement.clientWidth) {
      item.dropdown.classList.add("align-right");
    }
  }

  function closeMenu(restoreFocus = false) {
    if (!active) {
      return;
    }
    const item = active;
    active = null;
    pinned = false;
    item.toggle.setAttribute("aria-expanded", "false");
    item.dropdown.classList.remove("align-right");
    if (restoreFocus || item.menu.contains(document.activeElement)) {
      item.toggle.focus();
    }
  }

  function openMenu(item, pin = false) {
    if (active !== item) {
      closeMenu();
      active = item;
    }
    pinned = pin;
    item.toggle.setAttribute("aria-expanded", "true");
    positionMenu(item);
  }
```

### 8.4 jQuery gallery — jquery-script.js 1–50

initializeGalleryFade looks up both buttons; if both absent it returns. If window.jQuery is not a function, it warns and disables available button controls while preserving static images. Otherwise it aliases jQuery to $, registers ready callback and attaches click handlers. stop(true,true) clears queued animations and completes the current one before fadeTo(800,1) or fadeTo(800,0). Opacity changes rather than removing layout space. Initialization catch disables controls. This does not guarantee recovery from every asynchronous animation error. Native features remain independent of the CDN.

**Source:** `jquery-script.js`, lines 23–47 (verbatim excerpt).

```js
  // Preserve the static gallery when the jQuery CDN is unavailable.
  if (typeof window.jQuery !== "function") {
    console.warn("Gallery fade: jQuery is unavailable.");
    disableGalleryControls();
    return;
  }

  const $ = window.jQuery;

  $(document).ready(function () {
    try {
      $("#gallery-fade-in").click(function () {
        $(".gallery-fade-image")
          .stop(true, true)
          .fadeTo(800, 1);
      });

      $("#gallery-fade-out").click(function () {
        $(".gallery-fade-image")
          .stop(true, true)
          .fadeTo(800, 0);
      });
    } catch (error) {
      console.warn("Gallery fade: initialization failed.");
      disableGalleryControls();
```

F-06 timetable enhancement is described in Sections 3 and 4. The original keyboard scrolling failure was not reproduced in tested Chromium at 320 and 375px according to audit Section 23; explicit tabindex, named region and visible focus are preventive compatibility improvements, not proof of a reproduced defect. Firefox, Edge, screen readers and physical devices remain to be verified.

## 9. Error handling, accessibility and design principles

Feature-specific initialization avoids one monolithic handler. Event promises have a final catch; faculty and planner isolate recovery operations; alumni has a guarded initializer; gallery checks dependency availability. Not every inherited clock/navigation operation is wrapped in its own try/catch, so universal exception isolation is not claimed. DOM type checks and scoped queries reduce accidental mutation; fixed diagnostics avoid personal input. Accessible names derive from labels, button text and named regions; image alt text and caption convey context; live regions and aria-invalid communicate validation. Native controls provide keyboard activation and CSS focus indicators support navigation. Safe textContent avoids HTML interpretation, not every conceivable security risk. Responsive CSS and wrapping aim to prevent unintended overflow. Actual screen-reader announcements, contrast, touch, focus, browser compatibility and fault behavior require formal verification.

## 10. Requirements traceability

The following mapping is derived directly from the approved test case SRS fields. It is a selected component-level map, not a replacement for the complete approved matrix. Every listed case is Not Tested.

| Component | Approved test case | Approved SRS references |
|---|---|---|
| Event image | TC-IMG-001 — Five distinct assets | FR-IMG-01, IR-05, AC-01 |
| Event image | TC-IMG-002 — Paths and metadata | FR-IMG-02, IR-05, AC-01 |
| Event image | TC-IMG-003 — Initial fallback | FR-IMG-06, AC-01 |
| Event image | TC-IMG-004 — Observational refresh | FR-IMG-04, FR-IMG-05, FR-IMG-07, NFR-07, AC-02 |
| Event image | TC-IMG-005 — Random formula | FR-IMG-03, FR-IMG-07, AC-01 |
| Event image | TC-IMG-006 — Caption safety | FR-IMG-05, NFR-11, AC-01 |
| Event image | TC-IMG-007 — Image accessibility | IR-01, NFR-03, SC-06, AC-08 |
| Event image | TC-IMG-008 — Controlled index 0 | FR-IMG-03, FR-IMG-05, AC-01 |
| Event image | TC-IMG-009 — Controlled index 1 | FR-IMG-03, FR-IMG-05, AC-01 |
| Event image | TC-IMG-010 — Controlled index 2 | FR-IMG-03, FR-IMG-05, AC-01 |
| Event image | TC-IMG-011 — Controlled index 3 | FR-IMG-03, FR-IMG-05, AC-01 |
| Event image | TC-IMG-012 — Controlled index 4 | FR-IMG-03, FR-IMG-05, AC-01 |
| Event image | TC-IMG-013 — Upper random-index boundary | FR-IMG-03, FR-IMG-05, AC-01 |
| Event image | TC-IMG-014 — Permitted repeat | FR-IMG-07, AC-02 |
| Event image | TC-IMG-015 — Empty collection with usable fallback | FR-IMG-08, VR-IMG-01, AC-02 |
| Event image | TC-IMG-016 — Empty collection without fallback | VR-IMG-01, FR-IMG-08, AC-02 |
| Event image | TC-IMG-017 — Invalid metadata | VR-IMG-04, FR-IMG-08, AC-02 |
| Event image | TC-IMG-018 — Missing image target | VR-IMG-03, NFR-06, AC-02 |
| Event image | TC-IMG-019 — Missing caption target | VR-IMG-03, NFR-06, AC-02 |
| Event image | TC-IMG-020 — Missing or corrupt selected asset | VR-IMG-02, FR-IMG-05, AC-02 |
| Event image | TC-IMG-021 — All assets fail | VR-IMG-02, NFR-07, FR-IMG-08, AC-02 |
| Faculty | TC-FAC-001 — Preserve profiles and dates | FR-FAC-01, FR-FAC-02, IR-02, AC-03 |
| Faculty | TC-FAC-002 — Initial display | FR-FAC-06, FR-FAC-07, AC-03 |
| Faculty | TC-FAC-003 — Illustrative disclaimer | FR-FAC-09, AC-03 |
| Faculty | TC-FAC-004 — No JavaScript | FR-FAC-10, AC-03 |
| Faculty | TC-FAC-005 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-006 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-007 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-008 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-009 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-010 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-011 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-012 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-013 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-014 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-015 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-016 — Fixed-date calculation | FR-FAC-05, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-017 — Fixed-date calculation | FR-FAC-05, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-018 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-019 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-020 — Fixed-date calculation | FR-FAC-03, FR-FAC-04, FR-FAC-06, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-021 — Fixed-date calculation | FR-FAC-05, VR-FAC-03, AC-03 |
| Faculty | TC-FAC-022 — Reject invalid date | FR-FAC-05, VR-FAC-01, AC-03 |
| Faculty | TC-FAC-023 — Reject invalid date | FR-FAC-05, VR-FAC-01, AC-03 |
| Faculty | TC-FAC-024 — Reject invalid date | FR-FAC-05, VR-FAC-01, AC-03 |
| Faculty | TC-FAC-025 — Reject invalid date | FR-FAC-05, VR-FAC-01, AC-03 |
| Faculty | TC-FAC-026 — Reject invalid date | FR-FAC-05, VR-FAC-01, AC-03 |
| Faculty | TC-FAC-027 — Reject invalid date | FR-FAC-05, VR-FAC-01, AC-03 |
| Faculty | TC-FAC-028 — Reject invalid date | FR-FAC-05, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-029 — Reject invalid date | FR-FAC-05, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-030 — Reject invalid date | FR-FAC-05, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-031 — Reject invalid date | FR-FAC-05, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-032 — Reject invalid date | FR-FAC-05, VR-FAC-02, AC-03 |
| Faculty | TC-FAC-033 — Reject invalid date | FR-FAC-05, VR-FAC-01, AC-03 |
| Faculty | TC-FAC-034 — Independent profiles | VR-FAC-04, FR-FAC-05, AC-03 |
| Faculty | TC-FAC-035 — Minute checks and date rollover | FR-FAC-07, NFR-08, AC-04 |
| Faculty | TC-FAC-036 — Unchanged DOM | FR-FAC-08, NFR-08, AC-04 |
| Faculty | TC-FAC-037 — Suspended tab | FR-FAC-07, AC-04 |
| Faculty | TC-FAC-038 — Local versus UTC date | FR-FAC-03, AC-03 |
| Faculty | TC-FAC-039 — No unrelated timer | FR-FAC-08, FR-REG-09, NFR-08, AC-04 |
| Activity / isolation | TC-LST-001 — Existing interface | FR-LST-01, IR-03, SC-06, AC-05 |
| Activity / isolation | TC-LST-002 — Native implementation | FR-LST-02, FR-LST-06, FR-LST-07, SC-07, AC-05 |
| Activity / isolation | TC-LST-003 — Button submission | FR-LST-02, FR-LST-03, FR-LST-09, VR-LST-04, NFR-01, AC-05 |
| Activity / isolation | TC-LST-004 — Enter submission | FR-LST-02, FR-LST-03, NFR-02, AC-05 |
| Activity / isolation | TC-LST-005 — Order and duplicates | FR-LST-07, FR-LST-11, AC-05 |
| Activity / isolation | TC-LST-006 — Empty input | FR-LST-04, FR-LST-08, FR-LST-09, VR-LST-01, AC-06 |
| Activity / isolation | TC-LST-007 — Spaces only | FR-LST-04, VR-LST-01, AC-06 |
| Activity / isolation | TC-LST-008 — Other whitespace | FR-LST-04, VR-LST-01, AC-06 |
| Activity / isolation | TC-LST-009 — Trim input | FR-LST-04, FR-LST-06, VR-LST-04, AC-05 |
| Activity / isolation | TC-LST-010 — Native length constraint | FR-LST-05, AC-06 |
| Activity / isolation | TC-LST-011 — Bypassed length | FR-LST-05, VR-LST-02, FR-LST-09, AC-06 |
| Activity / isolation | TC-LST-012 — Emoji length boundary | FR-LST-05, VR-LST-02, AC-06 |
| Activity / isolation | TC-LST-013 — Literal markup | FR-LST-06, NFR-11, AC-05 |
| Activity / isolation | TC-LST-014 — Accessible feedback | FR-LST-08, FR-LST-13, NFR-03, AC-06 |
| Activity / isolation | TC-LST-015 — Repeated initialization | FR-LST-10, AC-06 |
| Activity / isolation | TC-LST-016 — Temporary state | FR-LST-12, IR-08, AC-05 |
| Activity / isolation | TC-LST-017 — Synchronous insertion | NFR-09, AC-05 |
| Activity / isolation | TC-LST-018 — Valid length boundary | FR-LST-05, FR-LST-06, VR-LST-04, AC-06 |
| Activity / isolation | TC-LST-019 — Valid length boundary | FR-LST-05, FR-LST-06, VR-LST-04, AC-06 |
| Activity / isolation | TC-LST-020 — Valid length boundary | FR-LST-05, FR-LST-06, VR-LST-04, AC-06 |
| Activity / isolation | TC-LST-021 — Unicode text | FR-LST-06, NFR-11, AC-05 |
| Activity / isolation | TC-LST-022 — Missing or wrong-type dependency | FR-LST-14, VR-LST-03, NFR-06, AC-06 |
| Activity / isolation | TC-LST-023 — Missing or wrong-type dependency | FR-LST-14, VR-LST-03, NFR-06, AC-06 |
| Activity / isolation | TC-LST-024 — Missing or wrong-type dependency | FR-LST-14, VR-LST-03, NFR-06, AC-06 |
| Activity / isolation | TC-LST-025 — Missing or wrong-type dependency | FR-LST-14, VR-LST-03, NFR-06, AC-06 |
| Activity / isolation | TC-LST-026 — Missing or wrong-type dependency | FR-LST-14, VR-LST-03, NFR-06, AC-06 |
| Activity / isolation | TC-LST-027 — Isolate event display initialization failure | VR-INIT-01, NFR-06, AC-06 |
| Activity / isolation | TC-LST-028 — Isolate faculty calculator initialization failure | VR-INIT-01, NFR-06, AC-06 |
| Activity / isolation | TC-LST-029 — Isolate activity planner initialization failure | VR-INIT-01, NFR-06, AC-06 |
| Inherited regression | TC-REG-001 — Homepage content | FR-REG-01, AC-07 |
| Inherited regression | TC-REG-002 — Navigation links | FR-REG-02, AC-07 |
| Inherited regression | TC-REG-003 — Dropdown hover and keyboard | FR-REG-02, NFR-02, AC-07 |
| Inherited regression | TC-REG-004 — Click and outside click | FR-REG-02, AC-07 |
| Inherited regression | TC-REG-005 — Digital clock | FR-REG-03, AC-07 |
| Inherited regression | TC-REG-006 — Gallery assets and animation | FR-REG-04, AC-07 |
| Inherited regression | TC-REG-007 — Animation queue | FR-REG-04, AC-07 |
| Inherited regression | TC-REG-008 — jQuery migration | FR-REG-05, FR-LST-10, IR-06, AC-07 |
| Inherited regression | TC-REG-009 — CDN outage | VR-INIT-02, IR-06, NFR-06, AC-07 |
| Inherited regression | TC-REG-010 — Alumni fields | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-011 — Alumni valid submission | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-012 — Alumni required fields and focus | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-013 — Alumni name and professional fields | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-014 — Alumni email and phone | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-015 — Alumni birth date | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-016 — Alumni batch and course | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-017 — Alumni optional about | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-018 — Alumni feedback counter | FR-REG-06, SC-09, AC-07 |
| Inherited regression | TC-REG-019 — Alumni reset | FR-REG-06, AC-07 |
| Inherited regression | TC-REG-020 — Alumni privacy notice and CSP | FR-REG-07, AC-07 |
| Inherited regression | TC-REG-021 — Register initialization guard | FR-REG-07, AC-07 |
| Inherited regression | TC-REG-022 — Timetable structure | FR-REG-08, AC-07 |
| Inherited regression | TC-REG-023 — Shared script guards | FR-REG-09, VR-IMG-03, VR-LST-03, NFR-06, AC-07 |
| Inherited regression | TC-REG-024 — Unrelated file changes | FR-REG-10, AC-07 |
| Inherited regression | TC-REG-025 — Script and CSS dependencies | IR-04, AC-07 |
| Accessibility / responsive | TC-UI-001 — Keyboard and labels | IR-01, NFR-02, NFR-03, SC-06, AC-08 |
| Accessibility / responsive | TC-UI-002 — Contrast | NFR-15, AC-08 |
| Accessibility / responsive | TC-UI-003 — Long text wrapping | NFR-05, AC-08 |
| Accessibility / responsive | TC-UI-004 — Gallery mobile layout | FR-REG-11, NFR-05, AC-08 |
| Accessibility / responsive | TC-UI-005 — Responsive viewport | NFR-04, FR-REG-11, IR-01, AC-08 |
| Accessibility / responsive | TC-UI-006 — Responsive viewport | NFR-04, FR-REG-11, IR-01, AC-08 |
| Accessibility / responsive | TC-UI-007 — Responsive viewport | NFR-04, FR-REG-11, IR-01, AC-08 |
| Accessibility / responsive | TC-UI-008 — Responsive viewport | NFR-04, FR-REG-11, IR-01, AC-08 |
| Accessibility / responsive | TC-UI-009 — Responsive viewport | NFR-04, FR-REG-11, IR-01, AC-08 |
| Browser compatibility | TC-BR-001 — Chrome compatibility | IR-07, NFR-13, AI-09, AC-09 |
| Browser compatibility | TC-BR-002 — Edge compatibility | IR-07, NFR-13, AI-09, AC-09 |
| Browser compatibility | TC-BR-003 — Firefox compatibility | IR-07, NFR-13, AI-09, AC-09 |
| Browser compatibility | TC-BR-004 — Touch interaction | IR-07, FR-REG-02, AC-08 |
| Validation / source quality | TC-VAL-001 — HTML index validation | AI-10, AC-10 |
| Validation / source quality | TC-VAL-002 — HTML alumni validation | AI-10, AC-10 |
| Validation / source quality | TC-VAL-003 — HTML timetable validation | AI-10, AC-10 |
| Validation / source quality | TC-VAL-004 — CSS validation | AI-10, AC-10 |
| Validation / source quality | TC-VAL-005 — JavaScript syntax | AI-11, AC-10 |
| Validation / source quality | TC-VAL-006 — HTML semantics | SC-01, AC-09 |
| Validation / source quality | TC-VAL-007 — Formatting | SC-02, SC-03, AC-09 |
| Validation / source quality | TC-VAL-008 — Separation of concerns | SC-04, NFR-12, AC-09 |
| Validation / source quality | TC-VAL-009 — Maintainability | SC-05, NFR-10, AC-09 |
| Validation / source quality | TC-VAL-010 — Safe DOM and handler audit | SC-07, NFR-11, FR-LST-10, AC-09 |
| Validation / source quality | TC-VAL-011 — CSS and guide review | SC-08, SC-09, SC-10, AC-09 |
| Validation / source quality | TC-VAL-012 — Console inspection | AI-11, NFR-13, AC-09, AC-10 |
| Workflow / deliverables | TC-DOC-001 — Baseline review | AI-01, AC-10 |
| Workflow / deliverables | TC-DOC-002 — Approved SRS | AI-02, AC-10 |
| Workflow / deliverables | TC-DOC-003 — Test plan | AI-03, AC-10 |
| Workflow / deliverables | TC-DOC-004 — Nine steps | AI-04, AC-10 |
| Workflow / deliverables | TC-DOC-005 — Debugging | AI-05, AC-10 |
| Workflow / deliverables | TC-DOC-006 — Conformance audit | AI-06, AC-10 |
| Workflow / deliverables | TC-DOC-007 — Corrective development | AI-07, AC-10 |
| Workflow / deliverables | TC-DOC-008 — Walkthrough | AI-08, AC-10 |
| Workflow / deliverables | TC-DOC-009 — Manual execution completeness | AI-09, NFR-14, AC-09, AC-10 |
| Workflow / deliverables | TC-DOC-010 — Testing report | AI-12, DR-03, AC-10 |
| Workflow / deliverables | TC-DOC-011 — Documentation files | DR-04, AC-10 |
| Workflow / deliverables | TC-DOC-012 — Evidence register | DR-05, AI-10, AC-10 |
| Workflow / deliverables | TC-DOC-013 — Public transcript | AI-13, DR-02, AC-11 |
| Workflow / deliverables | TC-DOC-014 — Historical preservation | DR-06, AI-14, AC-11 |
| Workflow / deliverables | TC-DOC-015 — Incremental Git history | AI-14, AC-10 |
| Workflow / deliverables | TC-DOC-016 — README accuracy | DR-07, AC-11 |
| Workflow / deliverables | TC-DOC-017 — ZIP inventory and privacy | DR-01, DR-10, AC-11 |
| Workflow / deliverables | TC-DOC-018 — Extract and run ZIP | DR-08, DR-01, AC-11 |
| Workflow / deliverables | TC-DOC-019 — Candidate and final tag | DR-09, AI-14, AC-11 |

## 11. Corrective implementation summary

The following dispositions preserve the original audit severity and Section 23 decisions. All formal verification remains outstanding.

| Finding | Original severity | Root cause or concern | Corrective action or disposition | Affected files | Related SRS IDs | Approved test case IDs |
|---|---|---|---|---|---|---|
| F-01 | Medium | Independent CSS hover/focus and JS state could disagree. | Disclosure state uses aria-expanded as the enhanced CSS visibility source; pointer hover, native click/Enter/Space/tap, Escape, focusout and outside click; CSS-only fallback retained. | script.js; style.css | FR-REG-02, NFR-02, AC-07 | TC-REG-003, TC-REG-004, TC-BR-004, TC-UI-001 |
| F-02 | Medium | Left-aligned absolute menus with minimum width and nowrap could exceed viewport. | Following user-confirmed browser reproduction, conditionally align right using measured menu boundary; reposition on resize. | script.js; style.css | NFR-04, FR-REG-02, AC-08 | TC-UI-005, TC-UI-006, TC-UI-007, TC-UI-008, TC-UI-009, TC-REG-003, TC-REG-004 |
| F-03 | High | Secondary exceptions in faculty recovery could escape and interrupt later features. | Protect per-profile writes, section feedback, warnings, date recovery, timer cleanup and owned initialization marker; deactivate timer callback on failure. | script.js | VR-INIT-01, NFR-06, VR-FAC-04 | TC-LST-028, TC-FAC-034, TC-REG-023 |
| F-04 | Medium | Sequential shutdown could stop on a secondary exception; stale success or active insertion could remain. | Set availability false first; independently recover form, install blocker, remove handler where safe, disable controls, update feedback; weak state guards duplicate initialization; independently attempt rollback, raw input restoration, invalid-state cleanup and focus. | script.js | FR-LST-14, VR-LST-03, VR-INIT-01 | TC-LST-022, TC-LST-023, TC-LST-024, TC-LST-025, TC-LST-026, TC-LST-027, TC-LST-028, TC-LST-029 |
| F-05 | Low | Attempt count previously depended on collection size; preventive risk with more than five entries. | Use maxAttempts = 5 and counter with full eligible copy, random index and splice; stop on success or exhaustion. | script.js | VR-IMG-02, FR-IMG-08 | TC-IMG-020, TC-IMG-021 |
| F-06 | Medium | Scroll wrapper lacked explicit focusability and accessible identification; compatibility concern. | Add tabindex="0", role="region", aria-label="Weekly course timetable" and 2px focus-visible outline; preserve semantic table and internal scrolling. | timetable.html; style.css | NFR-02, FR-REG-08 | TC-UI-001, TC-REG-022 |
| F-07 | Medium | Unsuitable caption target and detached original image could compromise recovery. | Validate section/figure/image/caption relationships; use event-specific status feedback; track current image after replacement; protect recovery independently. | script.js | VR-IMG-03, VR-INIT-01 | TC-IMG-018, TC-IMG-019, TC-LST-027 |
| F-08 | Low | Continuation indentation and inherited selector duplication required review. | Retain acceptable continuation alignment, decorative comments and complementary navbar rules; conflicting visibility rules removed during F-01/F-02. | No additional changes; script.js and style.css inspected | SC-03, SC-10 | TC-VAL-007, TC-VAL-011 |
| F-09 | Informational | README describes prior assignments rather than current features. | Defer root README finalization to Step 20; preserve historical records. | README.md (future update only) | DR-07 | TC-DOC-016 |
| F-10 | Informational | Missing complete asset, browser, validation, Git and package evidence; supplementary fixture coverage needed. | Collect formal evidence; supplement existing cases with 50/51 surrogate-pair emoji checks, rollback fault and attempt-count instrumentation; do not add formal IDs. | Testing report, evidence directory, final ZIP and Git records (future) | IR-05, NFR-14, AC-01, AC-10, AC-11 | TC-IMG-001, TC-IMG-002, TC-LST-020, TC-LST-021, TC-LST-029, TC-DOC-009, TC-DOC-010, TC-DOC-011, TC-DOC-012, TC-DOC-013, TC-DOC-014, TC-DOC-015, TC-DOC-016, TC-DOC-017, TC-DOC-018, TC-DOC-019 |

F-01–F-07: seven implemented corrective/preventive changes; F-08: inspection resolution retaining acceptable continuation indentation, decorative comments and complementary inherited CSS rules; F-09: README deferred to Step 20; F-10: evidence collection deferred. Eight of ten addressed = 80% corrective action progress, not a test pass rate or overall compliance. F-02 retains CSS-only limitation; F-06 is preventive. The original audit classifications are unchanged.

## 12. Practical viva questions and answers

**1. Why use semantic HTML?**  
It gives content meaningful structure through header, nav, main, section and footer.

**2. Why use a button for dropdowns?**  
It provides native click, Enter and Space activation without pretending to be a destination link.

**3. What is aria-expanded?**  
It communicates whether the disclosure is open and drives enhanced CSS visibility.

**4. Why use alt text?**  
It provides a textual alternative to the image.

**5. Why use figcaption?**  
It associates a visible caption with the event figure.

**6. What does aria-live polite do?**  
It requests non-interruptive announcement of changes.

**7. What is Flexbox used for?**  
One-dimensional alignment, including the gallery and navigation.

**8. What is Grid used for?**  
Card columns, such as the faculty directory.

**9. Why use minmax(0,1fr)?**  
It allows equal grid tracks to shrink below intrinsic content width.

**10. Why use object-fit contain?**  
It preserves image proportions within the allocated box.

**11. How does the gallery remain two columns?**  
Each image takes calc(50% - 10px) in a flex row with a 20px gap.

**12. What does a media query do?**  
It applies CSS based on conditions such as viewport width.

**13. How is a random index calculated?**  
Math.floor(Math.random() * remainingEvents.length).

**14. Can the same event appear on consecutive refreshes?**  
Yes; no previous selection is stored.

**15. Why use splice?**  
It removes the attempted candidate so fallback does not repeat it.

**16. What is the fallback limit?**  
Five distinct candidate attempts, even if the eligible collection is larger.

**17. Why load an image before replacing the displayed one?**  
To verify successful loading and avoid displaying a known broken candidate.

**18. What does async/await do here?**  
It waits for image promise completion without blocking other script features.

**19. How are duplicate paths excluded?**  
A Set tracks exact trimmed src strings.

**20. What is dataset?**  
A DOM interface to data-* attributes, such as data-joining-date.

**21. Why validate calendar components manually?**  
To reject impossible dates and avoid automatic Date normalization.

**22. Is 1900 a leap year?**  
No; century years must be divisible by 400.

**23. How are completed years calculated?**  
Subtract joining year from current year and subtract one before the anniversary.

**24. When is a February 29 anniversary in a non-leap year?**  
March 1.

**25. Why use local date getters?**  
Experience follows the device-local calendar, not UTC.

**26. Why check every minute?**  
To detect local date rollover without unnecessary per-second calculation.

**27. How are duplicate faculty timers prevented?**  
A dataset initialization marker guards the initializer.

**28. Why compare existing experience text?**  
To avoid unnecessary DOM writes.

**29. What does preventDefault do?**  
It cancels ordinary form submission/navigation for a cancelable submit event.

**30. Why use submit instead of click only?**  
It handles both button activation and Enter submission.

**31. Why check raw length before trim?**  
Overlength input must be rejected even if trimming would shorten it.

**32. How many UTF-16 units does 😀 occupy?**  
Two; 50 such emoji occupy 100 units.

**33. Why use textContent rather than innerHTML?**  
It treats input as literal text instead of parsing markup.

**34. How is an item added?**  
createElement("li"), assign textContent, appendChild to the list.

**35. Are duplicate activities allowed?**  
Yes; no duplicate-name rejection is implemented.

**36. Why does the list reset on reload?**  
It is DOM-only and no persistence is implemented.

**37. What does the planner availability guard do?**  
It prevents insertion after shutdown even if the original handler remains.

**38. What is rollback?**  
Attempt to remove the newly inserted item and restore raw input after unexpected failure.

**39. Why use WeakSet?**  
It tracks managed form objects without requiring persistent IDs or strong ownership references.

**40. Why is alumni novalidate used?**  
Custom JS controls validation messages and focus instead of native submit validation UI.

**41. What is the alumni feedback limit?**  
300 raw UTF-16 units and at least ten trimmed units.

**42. How is alumni privacy protected?**  
No submission/storage logic, preventDefault, CSP form-action none and fictional-data notice.

**43. How is the clock updated?**  
Immediately and every 1000ms when its target exists.

**44. What does stop(true,true) do?**  
Clears queued animations and jumps the current animation to its end.

**45. What if jQuery is missing?**  
Gallery controls are disabled; static images and native features remain.

**46. How does Escape close a dropdown?**  
The document keydown handler invokes closeMenu and restores focus when appropriate.

**47. How is right overflow addressed?**  
Measure the right edge and apply align-right when it exceeds viewport width.

**48. Why tabindex=0 on timetable wrapper?**  
It explicitly includes the scrolling region in normal keyboard focus order.

**49. What is an SRS?**  
The approved baseline of required behavior and constraints.

**50. What is traceability?**  
Linking requirements to planned verification cases and implementation evidence.

**51. Does 80% corrective progress mean 80% tests passed?**  
No; eight of ten findings addressed, while all 158 tests remain Not Tested.

**52. Why use AI-assisted audit and walkthrough?**  
To identify issues, explain actual code and plan verification; human review and evidence remain necessary.

## 13. Verification, limitations and conclusion

### 13.1 Evidence boundaries

This walkthrough inspected all six current production source uploads and the three approved reference documents. It generated excerpts directly from source and checked all 125 SRS IDs and 158 test case IDs and their references. No new browser, controlled fault, external validator or Git execution is claimed. The updated audit records prior actual syntax checks, simulated recovery checks, historical Chromium checks and user-confirmed corrective approval/commit/push; these are preliminary and not formal execution. Raw historical logs, full asset directory and permissions, current README, previous assignment documentation, repository history, final ZIP and public links were not inspected in this walkthrough. The source is not a verified deployed revision.

| Formal metric | Count |
|---|---:|
| Total | 158 |
| Passed | 0 |
| Failed | 0 |
| Not Tested | 158 |
| Blocked | 0 |

### 13.2 Remaining work

Review this walkthrough, execute the approved manual and controlled plan with actual evidence, restore fixtures, perform W3C HTML/CSS and final JavaScript syntax checks, inspect console and dependencies, prepare testing report, finalize README, verify ZIP extraction and execution, public conversation links, exact Git revision and submission package. Retest any confirmed defects. No source or approved baseline document was modified by this walkthrough.

### 13.3 Conclusion

The source demonstrates incremental integration of static HTML, responsive CSS, native JavaScript and a limited jQuery gallery dependency. Assignment 3 adds bounded random image selection, local-calendar faculty experience and safe native list insertion with defensive recovery. Corrective changes strengthen navigation, failure isolation and accessibility, but best-effort recovery and compatibility limitations remain. This document supports comprehension and viva preparation; it does not certify formal compliance or final submission readiness.
