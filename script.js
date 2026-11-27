
/* Practical 9: Random Event Image */


const eventImages = [
  {
    src: "images/events/event1.jpg",
    alt: "Students and professors participating in Republic Day Celebration",
    caption: "Republic Day Celebration"
  },
  {
    src: "images/events/event2.jpeg",
    alt: "Speaker addressing students and faculty during an anti-ragging awareness session",
    caption: "Anti-Ragging Awareness Session"
  },
  {
    src: "images/events/event3.jpeg",
    alt: "Students and faculty seated in a lecture hall during a college event",
    caption: "Department Event"
  },
  {
    src: "images/events/event4.jpg",
    alt: "Sankalan 2026 collage showing the inaugural ceremony, technical activities, student presentations and certificate distribution",
    caption: "Sankalan 2026"
  },
  {
    src: "images/events/event5.jpg",
    alt: "Sports Day collage showing students playing chess, participating in outdoor activities and gathering for refreshments",
    caption: "Sports Day"
  }
];


async function displayRandomEvent() {
  const eventSection = document.getElementById("event-highlights");
  const eventImage = document.getElementById("random-event-image");
  const eventCaption = document.getElementById("event-caption");

  const unavailableMessage = "Event images are currently unavailable.";

  // Recognize the homepage even if event markup is incomplete.
  const isHomepage = Boolean(
    eventSection ||
    eventImage ||
    eventCaption ||
    document.getElementById("home") ||
    /(?:^|\/)index\.html$/.test(window.location.pathname) ||
    window.location.pathname.endsWith("/")
  );

  // Feature absence on unrelated pages is normal.
  if (!isHomepage) {
    return;
  }

  function showUnavailable(keepInitialImage = false) {
    if (eventImage instanceof HTMLImageElement) {
      eventImage.hidden = !keepInitialImage;
    }

    // Preserve the initial caption when its image remains usable.
    if (!keepInitialImage &&
        eventCaption instanceof HTMLElement) {
      eventCaption.textContent = unavailableMessage;
      return;
    }

    const feedbackContainer =
      eventSection instanceof HTMLElement
        ? eventSection
        : document.querySelector(".random-event-container");

    if (!(feedbackContainer instanceof HTMLElement)) {
      return;
    }

    let feedback = feedbackContainer.querySelector(
      ".event-unavailable-message"
    );

    if (!feedback) {
      feedback = document.createElement("p");
      feedback.className = "event-unavailable-message";
      feedback.setAttribute("role", "status");
      feedbackContainer.appendChild(feedback);
    }

    feedback.textContent = unavailableMessage;
  }

  // Accept only nonempty text metadata.
  function isNonemptyText(value) {
    return typeof value === "string" &&
      value.trim().length > 0;
  }

  // Restrict image sources to relative departmental event paths.
  function isValidEventPath(value) {
    return isNonemptyText(value) &&
      /^images\/events\/[a-z0-9_-]+\.(?:jpg|jpeg|png|webp|gif|avif)$/i
        .test(value.trim());
  }

  function isValidEvent(event) {
    return event !== null &&
      typeof event === "object" &&
      isValidEventPath(event.src) &&
      isNonemptyText(event.alt) &&
      isNonemptyText(event.caption);
  }

  // Load each candidate independently before displaying it.
  function loadEventImage(event) {
    return new Promise(function (resolve) {
      const candidateImage = new Image();

      function cleanup() {
        candidateImage.removeEventListener("load", handleLoad);
        candidateImage.removeEventListener("error", handleError);
      }

      function handleLoad() {
        cleanup();

        if (candidateImage.naturalWidth > 0 &&
            candidateImage.naturalHeight > 0) {
          resolve(candidateImage);
        } else {
          resolve(null);
        }
      }

      function handleError() {
        cleanup();
        resolve(null);
      }

      // Register handlers before assigning the source.
      candidateImage.addEventListener("load", handleLoad);
      candidateImage.addEventListener("error", handleError);

      candidateImage.alt = event.alt;
      candidateImage.src = event.src;
    });
  }

  // Verify the initial HTML image without starting another request.
  function verifyInitialImage() {
    return new Promise(function (resolve) {
      function cleanup() {
        eventImage.removeEventListener("load", handleLoad);
        eventImage.removeEventListener("error", handleError);
      }

      function handleLoad() {
        cleanup();
        resolve(
          eventImage.naturalWidth > 0 &&
          eventImage.naturalHeight > 0
        );
      }

      function handleError() {
        cleanup();
        resolve(false);
      }

      eventImage.addEventListener("load", handleLoad);
      eventImage.addEventListener("error", handleError);

      // Account for images that finished loading before initialization.
      if (eventImage.complete) {
        handleLoad();
      }
    });
  }

  try {
    // Validate the required DOM targets and their element types.
    if (!(eventSection instanceof HTMLElement) ||
        !(eventImage instanceof HTMLImageElement) ||
        !(eventCaption instanceof HTMLElement) ||
        eventCaption.tagName !== "FIGCAPTION" ||
        !eventSection.contains(eventImage) ||
        !eventSection.contains(eventCaption)) {
      console.warn("Event highlights: incomplete homepage markup.");
      showUnavailable();
      return;
    }

    // Prevent duplicate initialization within the same page load.
    if (eventSection.dataset.eventInitialized === "true") {
      return;
    }

    eventSection.dataset.eventInitialized = "true";

    const collection =
      typeof eventImages !== "undefined" &&
      Array.isArray(eventImages)
        ? eventImages
        : [];

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

    // Retain the verified initial HTML image if no entry is eligible.
    if (eligibleEvents.length === 0) {
      console.warn("Event highlights: no eligible image entries.");

      const initialImageUsable = await verifyInitialImage();

      showUnavailable(initialImageUsable);
      return;
    }

    // Use a separate candidate list without modifying eventImages.
    const remainingEvents = eligibleEvents.slice();

    // Hide the initial image if it is already known to be broken.
    if (eventImage.complete && eventImage.naturalWidth === 0) {
      eventImage.hidden = true;
    }

    // Each candidate can be attempted only once.
    while (remainingEvents.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * remainingEvents.length
      );

      const selectedEvent = remainingEvents.splice(
        randomIndex,
        1
      )[0];

      const loadedImage = await loadEventImage(selectedEvent);

      if (loadedImage) {
        // Reuse the successfully loaded image instead of reloading it.
        loadedImage.id = eventImage.id;
        loadedImage.className = eventImage.className;
        loadedImage.hidden = false;

        eventImage.replaceWith(loadedImage);
        eventCaption.textContent = selectedEvent.caption;

        return;
      }

      console.warn(
        "Event highlights: unable to load " + selectedEvent.src
      );
    }

    // No eligible asset could be loaded.
    showUnavailable();

  } catch (error) {
    // Isolate unexpected failures from other shared features.
    console.warn("Event highlights: initialization failed.");
    showUnavailable();
  }
}

// Initialize independently of the other shared JavaScript features.
displayRandomEvent().catch(function () {
  console.warn("Event highlights: unexpected initialization failure.");
});

/* Practical 10: Faculty Experience Calculator */

(function initializeFacultyExperience() {
  const checkInterval = 60000;
  const unavailableMessage = "Faculty experience is currently unavailable.";

  let facultySection = null;
  let facultyMembers = [];
  let facultyTimer = null;
  let lastCheckedDate = null;

  // Apply the Gregorian leap-year rules, including century years.
  function isLeapYear(year) {
    return year % 400 === 0 ||
      (year % 4 === 0 && year % 100 !== 0);
  }

  // Validate calendar components without constructing a Date object.
  function parseJoiningDate(value) {
    if (typeof value !== "string" ||
        value.length !== 10 ||
        !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value)) {
      return null;
    }

    const [year, month, day] = value.split("-").map(Number);

    if (year < 1 || year > 9999 ||
        month < 1 || month > 12) {
      return null;
    }

    const daysInMonth = [
      31,
      isLeapYear(year) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ];

    if (day < 1 || day > daysInMonth[month - 1]) {
      return null;
    }

    return { year, month, day };
  }

  // Read the device-local calendar date rather than a UTC date.
  function getLocalCalendarDate() {
    const now = new Date();

    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  }

  // Produce a comparable numeric key for a calendar date.
  function getDateKey(date) {
    return date.year * 10000 + date.month * 100 + date.day;
  }

  // Calculate completed calendar years using the joining anniversary.
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

  // Avoid rewriting the DOM when the displayed text is unchanged.
  function updateExperienceText(member, message) {
    if (member.textContent.trim() !== message) {
      member.textContent = message;
    }
  }

  // Provide unavailable feedback when a suitable section exists.
  function showUnavailableFeedback() {
    if (facultySection instanceof HTMLElement) {
      let feedback = facultySection.querySelector(
        ".faculty-unavailable-message"
      );

      if (!feedback) {
        feedback = document.createElement("p");
        feedback.className = "faculty-unavailable-message";
        feedback.setAttribute("role", "status");
        facultySection.appendChild(feedback);
      }

      updateExperienceText(feedback, unavailableMessage);
    }
  }

  // Process each faculty profile independently.
  function calculateFacultyExperience(today) {
    facultyMembers.forEach(function (member) {
      try {
        const message = getExperienceText(
          member.dataset.joiningDate,
          today
        );

        updateExperienceText(member, message);
      } catch (error) {
        console.warn("Faculty experience: profile calculation failed.");
        updateExperienceText(member, unavailableMessage);
      }
    });
  }

  // Recalculate only when the local calendar date changes.
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
      console.warn("Faculty experience: date check failed.");

      facultyMembers.forEach(function (member) {
        updateExperienceText(member, unavailableMessage);
      });

      // Permit recovery at the next available date check.
      lastCheckedDate = null;
    }
  }

  try {
    facultySection = document.getElementById("faculty");

    const existingTargets = document.querySelectorAll(
      ".faculty-experience"
    );

    // Recognize incomplete homepage markup without affecting other pages.
    const isHomepage = Boolean(
      facultySection ||
      existingTargets.length > 0 ||
      document.getElementById("home") ||
      /(?:^|\/)index\.html$/.test(window.location.pathname) ||
      window.location.pathname.endsWith("/")
    );

    if (!isHomepage) {
      return;
    }

    if (!(facultySection instanceof HTMLElement)) {
      console.warn("Faculty experience: faculty section is missing.");

      existingTargets.forEach(function (member) {
        updateExperienceText(member, unavailableMessage);
      });

      return;
    }

    // Prevent repeated initialization and duplicate faculty timers.
    if (facultySection.dataset.facultyInitialized === "true") {
      return;
    }

    facultyMembers = Array.from(
      facultySection.querySelectorAll(".faculty-experience")
    ).filter(function (member) {
      return member instanceof HTMLElement;
    });

    if (facultyMembers.length === 0) {
      console.warn("Faculty experience: no experience targets found.");
      showUnavailableFeedback();
      return;
    }

    // Report incomplete cards while continuing with available profiles.
    const facultyCards = facultySection.querySelectorAll(".faculty-card");

    const incompleteCards = Array.from(facultyCards).some(
      function (card) {
        return card.querySelectorAll(".faculty-experience").length !== 1;
      }
    );

    if (facultyCards.length !== 5 ||
        facultyMembers.length !== 5 ||
        incompleteCards) {
      console.warn("Faculty experience: incomplete faculty markup.");
      showUnavailableFeedback();
    }

    facultySection.dataset.facultyInitialized = "true";

    // Calculate immediately, then check the local date once per minute.
    checkFacultyDate();
    facultyTimer = window.setInterval(checkFacultyDate, checkInterval);
  } catch (error) {
    // Isolate unexpected failures from other website features.
    if (facultyTimer !== null) {
      window.clearInterval(facultyTimer);
    }

    console.warn("Faculty experience: initialization failed.");

    facultyMembers.forEach(function (member) {
      updateExperienceText(member, unavailableMessage);
    });

    if (facultySection instanceof HTMLElement) {
      delete facultySection.dataset.facultyInitialized;
      showUnavailableFeedback();
    }
  }
})();

/* Practical 17: Dynamic List Using Native JavaScript */

function initializeActivityPlanner() {
  let activitySection = null;
  let activityForm = null;
  let activityInput = null;
  let addItemButton = null;
  let activityMessage = null;
  let activityList = null;

  const unavailableMessage = "Activity planner is unavailable.";

  // Display textual feedback using external CSS classes.
  function showActivityMessage(message, isError) {
    if (!(activityMessage instanceof HTMLElement)) {
      return;
    }

    activityMessage.textContent = message;

    activityMessage.classList.remove(
      "activity-error",
      "activity-success"
    );

    activityMessage.classList.add(
      isError ? "activity-error" : "activity-success"
    );
  }

  // Prevent navigation when the planner cannot be initialized.
  function preventActivitySubmission(event) {
    event.preventDefault();
  }

  // Disable an incomplete planner without affecting other features.
  function disableActivityPlanner() {
    if (activityForm instanceof HTMLFormElement) {
      activityForm.removeEventListener(
        "submit",
        handleActivitySubmit
      );

      activityForm.addEventListener(
        "submit",
        preventActivitySubmission
      );

      activityForm.dataset.activityInitialized = "unavailable";

      // Disable available submit controls belonging to this form.
      Array.from(activityForm.elements).forEach(function (control) {
        if ((control instanceof HTMLButtonElement ||
             control instanceof HTMLInputElement) &&
            (control.type === "submit" ||
             control.type === "image")) {
          control.disabled = true;
        }
      });
    }

    if (addItemButton instanceof HTMLButtonElement) {
      addItemButton.disabled = true;
    }

    showActivityMessage(unavailableMessage, true);
  }

  // Process both button activation and Enter-key submission.
  function handleActivitySubmit(event) {
    event.preventDefault();

    const activity = activityInput.value.trim();

    // Preserve existing empty-input validation.
    if (activity === "") {
      showActivityMessage(
        "Please enter an activity.",
        true
      );

      activityInput.focus();
      return;
    }

    // Create a list item without interpreting user input as HTML.
    const newItem = document.createElement("li");
    newItem.textContent = activity;

    // Preserve existing items and their insertion order.
    activityList.appendChild(newItem);

    // Clear the input and display successful feedback.
    activityInput.value = "";

    showActivityMessage(
      "Activity added successfully!",
      false
    );

    activityInput.focus();
  }

  try {
    activitySection = document.getElementById("activity-planner");
    activityForm = document.getElementById("activity-form");
    activityInput = document.getElementById("activity-input");
    addItemButton = document.getElementById("add-item-btn");
    activityMessage = document.getElementById("activity-message");
    activityList = document.getElementById("activity-list");

    // Recognize the homepage even when planner markup is incomplete.
    const isHomepage = Boolean(
      activitySection ||
      activityForm ||
      activityInput ||
      addItemButton ||
      activityMessage ||
      activityList ||
      document.getElementById("home") ||
      /(?:^|\/)index\.html$/.test(window.location.pathname) ||
      window.location.pathname.endsWith("/")
    );

    // Feature absence on unrelated pages is normal.
    if (!isHomepage) {
      return;
    }

    // Prevent repeated initialization and duplicate submit listeners.
    if (activityForm instanceof HTMLFormElement &&
        (activityForm.dataset.activityInitialized === "true" ||
         activityForm.dataset.activityInitialized === "unavailable")) {
      return;
    }

    // Validate all required elements and their relationships.
    const dependenciesValid =
      activitySection instanceof HTMLElement &&
      activitySection.tagName === "SECTION" &&
      activityForm instanceof HTMLFormElement &&
      activityInput instanceof HTMLInputElement &&
      activityInput.type === "text" &&
      activityInput.maxLength === 100 &&
      addItemButton instanceof HTMLButtonElement &&
      addItemButton.type === "submit" &&
      activityMessage instanceof HTMLParagraphElement &&
      activityList instanceof HTMLUListElement &&
      activityInput.form === activityForm &&
      addItemButton.form === activityForm &&
      activitySection.contains(activityForm) &&
      activitySection.contains(activityInput) &&
      activitySection.contains(addItemButton) &&
      activitySection.contains(activityMessage) &&
      activitySection.contains(activityList);

    if (!dependenciesValid) {
      console.warn("Activity planner: incomplete homepage markup.");
      disableActivityPlanner();
      return;
    }

    // Register exactly one native form submit listener.
    activityForm.addEventListener(
      "submit",
      handleActivitySubmit
    );

    activityForm.dataset.activityInitialized = "true";

  } catch (error) {
    // Isolate unexpected initialization failures.
    console.warn("Activity planner: initialization failed.");
    disableActivityPlanner();
  }
}

// Initialize independently of the other shared website features.
initializeActivityPlanner();


/* Practical 11: Alumni Form Validation */

function initializeAlumniForm() {
  const alumniForm = document.getElementById("alumni-form");
  if (!(alumniForm instanceof HTMLFormElement)) {
    return;
  }

  const registerButton = alumniForm.querySelector("#register-button");
  if (!(registerButton instanceof HTMLButtonElement)) {
    return;
  }
  registerButton.disabled = true;

  const feedback = alumniForm.querySelector("#feedback");
  const characterCount = alumniForm.querySelector("#character-count");
  const formMessage = alumniForm.querySelector("#form-message");
  let ready = false;

  const minimumBirthDate = "1900-01-01";
  const minimumGraduationYear = 1980;
  const maximumFeedbackLength = 300;

  const approvedCourses = [
    "bsc",
    "msc",
    "mca",
    "phd",
    "other"
  ];

  const fields = {
    "full-name": alumniForm.querySelector("#full-name"),
    "email": alumniForm.querySelector("#email"),
    "phone": alumniForm.querySelector("#phone"),
    "dob": alumniForm.querySelector("#dob"),
    "batch": alumniForm.querySelector("#batch"),
    "degree": alumniForm.querySelector("#degree"),
    "designation": alumniForm.querySelector("#designation"),
    "organization": alumniForm.querySelector("#organization"),
    "location": alumniForm.querySelector("#location"),
    "about-yourself": alumniForm.querySelector("#about-yourself"),
    "feedback": feedback
  };

  const fieldIds = Object.keys(fields);
  const errorContainers = {};
  fieldIds.forEach(function (fieldId) {
    errorContainers[fieldId] = alumniForm.querySelector(`#${fieldId}-error`);
  });

  const controlsValid = fieldIds.every(function (fieldId) {
    const field = fields[fieldId];
    const expectedType = fieldId === "degree" ? HTMLSelectElement :
      fieldId === "feedback" || fieldId === "about-yourself" ?
        HTMLTextAreaElement : HTMLInputElement;
    return field instanceof expectedType && field.form === alumniForm &&
      errorContainers[fieldId] instanceof HTMLElement;
  });

  if (!controlsValid || !(characterCount instanceof HTMLElement) ||
      !(formMessage instanceof HTMLElement) ||
      registerButton.form !== alumniForm || registerButton.type !== "submit") {
    return;
  }

  /* Live Character Counter */

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

  function getLocalDateString(date) {
    const year = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function updateDateAndYearConstraints(today) {
    fields.dob.max = getLocalDateString(today);
    fields.batch.max = String(today.getFullYear());
  }

  /* Required Text and Minimum Length Validation */

  function validateRequiredText(value, label, minimumLength = 1) {
    if (value.length === 0) {
      return `${label} is required.`;
    }

    if (value.length < minimumLength) {
      return `${label} must contain at least ${minimumLength} characters.`;
    }

    return "";
  }

  /* Email Address Validation */

  function isValidEmail(value) {
    if (/\s/.test(value)) {
      return false;
    }

    const emailParts = value.split("@");

    if (
      emailParts.length !== 2 ||
      !emailParts[0] ||
      !emailParts[1]
    ) {
      return false;
    }

    const domainParts = emailParts[1].split(".");

    if (
      domainParts.length < 2 ||
      domainParts.some(function (part) {
        return part.length === 0;
      })
    ) {
      return false;
    }

    // Apply the native HTML email syntax to the trimmed value.
    const emailValidator = document.createElement("input");
    emailValidator.type = "email";
    emailValidator.required = true;
    emailValidator.value = value;

    return emailValidator.validity.valid;
  }

  /* Contact Number Validation */

  function isValidContactNumber(value) {
    return /^[0-9]{10}$/.test(value);
  }

  /* Date of Birth Validation */

  function isValidDOB(value, today) {
    if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value)) {
      return false;
    }

    if (
      value < minimumBirthDate ||
      value > getLocalDateString(today)
    ) {
      return false;
    }

    const [year, month, day] = value.split("-").map(Number);

    const isLeapYear =
      year % 400 === 0 ||
      (year % 4 === 0 && year % 100 !== 0);

    const daysInMonth = [
      31,
      isLeapYear ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ];

    return (
      month >= 1 &&
      month <= 12 &&
      day >= 1 &&
      day <= daysInMonth[month - 1]
    );
  }

  /* Graduation Year Validation */

  function isValidGraduationYear(value, today) {
    if (!/^[0-9]{4}$/.test(value)) {
      return false;
    }

    const year = Number(value);

    return (
      year >= minimumGraduationYear &&
      year <= today.getFullYear()
    );
  }

  /* Course / Department Validation */

  function isValidCourse(value) {
    return approvedCourses.includes(value);
  }

  /* Comprehensive Field Validation */

  function validateAlumniForm(today) {
    const errors = {};

    // Store one validation message per invalid field.
    function addError(fieldId, message) {
      if (message) {
        errors[fieldId] = message;
      }
    }

    /* Personal Information */

    const fullName = fields["full-name"].value.trim();
    const email = fields.email.value.trim();
    const phone = fields.phone.value.trim();
    const dob = fields.dob.value;

    addError(
      "full-name",
      validateRequiredText(fullName, "Full Name", 3)
    );

    if (!email) {
      addError("email", "Email Address is required.");
    } else if (!isValidEmail(email)) {
      addError("email", "Please enter a valid email address.");
    }

    if (!phone) {
      addError("phone", "Contact Number is required.");
    } else if (!isValidContactNumber(phone)) {
      addError(
        "phone",
        "Contact Number must contain exactly 10 digits (0–9)."
      );
    }

    if (!dob) {
      addError("dob", "Date of Birth is required.");
    } else if (!isValidDOB(dob, today)) {
      addError(
        "dob",
        "Enter a valid date of birth from 1900-01-01 to today."
      );
    }

    /* Academic Information */

    const batch = fields.batch.value;
    const degree = fields.degree.value;

    if (!batch) {
      addError(
        "batch",
        "Academic Batch / Year of Passing is required."
      );
    } else if (!isValidGraduationYear(batch, today)) {
      addError(
        "batch",
        `Enter a four-digit year from ${minimumGraduationYear} ` +
        `to ${today.getFullYear()}.`
      );
    }

    if (!degree) {
      addError("degree", "Please select your Course / Department.");
    } else if (!isValidCourse(degree)) {
      addError("degree", "Please select an approved course.");
    }

    /* Professional Information */

    const designation = fields.designation.value.trim();
    const organization = fields.organization.value.trim();
    const location = fields.location.value.trim();

    addError(
      "designation",
      validateRequiredText(
        designation,
        "Current Designation",
        2
      )
    );

    addError(
      "organization",
      validateRequiredText(
        organization,
        "Organization / Company Name",
        2
      )
    );

    addError(
      "location",
      validateRequiredText(location, "Current Location", 2)
    );

    /* Optional About Yourself */

    const about = fields["about-yourself"].value.trim();

    if (about && about.length < 10) {
      addError(
        "about-yourself",
        "About Yourself must contain at least 10 characters " +
        "when provided."
      );
    }

    /* Alumni Feedback */

    const rawFeedback = fields.feedback.value;
    const trimmedFeedback = rawFeedback.trim();

    if (rawFeedback.length > maximumFeedbackLength) {
      addError(
        "feedback",
        `Alumni Feedback cannot exceed ${maximumFeedbackLength} characters.`
      );
    } else {
      addError(
        "feedback",
        validateRequiredText(
          trimmedFeedback,
          "Alumni Feedback",
          10
        )
      );
    }

    return errors;
  }


  /* Accessible Field-Specific Error Handling */

  // Preserve instructional descriptions when adding or removing errors.
  function updateErrorAssociation(field, errorId, hasError) {
    const descriptions = new Set(
      (field.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter(Boolean)
    );

    if (hasError) {
      descriptions.add(errorId);
    } else {
      descriptions.delete(errorId);
    }

    if (descriptions.size > 0) {
      field.setAttribute(
        "aria-describedby",
        Array.from(descriptions).join(" ")
      );
    } else {
      field.removeAttribute("aria-describedby");
    }
  }

  /* Display an Individual Field Error */

  function showFieldError(fieldId, message) {
    const field = fields[fieldId];
    const errorContainer = errorContainers[fieldId];

    errorContainer.textContent = message;
    errorContainer.hidden = false;

    field.setAttribute("aria-invalid", "true");

    updateErrorAssociation(
      field,
      errorContainer.id,
      true
    );
  }

  /* Clear an Individual Field Error */

  function clearFieldError(fieldId) {
    const field = fields[fieldId];
    const errorContainer = errorContainers[fieldId];

    errorContainer.textContent = "";
    errorContainer.hidden = true;

    field.removeAttribute("aria-invalid");

    updateErrorAssociation(
      field,
      errorContainer.id,
      false
    );
  }

  /* Display All Validation Results */

  function displayValidationErrors(validationErrors) {
    fieldIds.forEach(function (fieldId) {
      if (validationErrors[fieldId]) {
        showFieldError(
          fieldId,
          validationErrors[fieldId]
        );
      } else {
        clearFieldError(fieldId);
      }
    });
  }

  /* Clear All Field Errors */

  function clearAllFieldErrors() {
    fieldIds.forEach(clearFieldError);
  }

  /* Form-Level Message Management */

  function clearFormMessage() {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  function showFormMessage(message, messageType) {
    formMessage.className =
      `form-message ${messageType}`;

    if (formMessage.textContent !== message) {
      formMessage.textContent = message;
    }
  }

  /* Form-Level Validation Summary */

  function updateValidationSummary() {
    const invalidFieldIds = fieldIds.filter(function (fieldId) {
      return fields[fieldId].getAttribute("aria-invalid") === "true";
    });

    const errorCount = invalidFieldIds.length;

    if (errorCount === 0) {
      clearFormMessage();
      return;
    }

    const message = errorCount === 1
      ? "Please correct the highlighted field before registering."
      : `Please correct the ${errorCount} highlighted fields ` +
        "before registering.";

    showFormMessage(message, "error");
  }

  /* Initialize Dynamic HTML Constraints */

  updateDateAndYearConstraints(new Date());

  /* Form Submission */

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

  /* Revalidate Previously Invalid Fields */

  function handleFieldModification(event) {
    if (!ready) {
      return;
    }
    const field = event.target;
    const fieldId = field.id;

    // Ignore events originating outside the registration controls.
    if (!fieldIds.includes(fieldId) || fields[fieldId] !== field) {
      return;
    }

    // A previous success result is no longer current after an edit.
    if (formMessage.classList.contains("success")) {
      clearFormMessage();
    }

    // Avoid premature validation of untouched or unvalidated fields.
    if (field.getAttribute("aria-invalid") !== "true") {
      return;
    }

    const today = new Date();

    updateDateAndYearConstraints(today);

    const validationErrors = validateAlumniForm(today);

    if (validationErrors[fieldId]) {
      showFieldError(
        fieldId,
        validationErrors[fieldId]
      );
    } else {
      clearFieldError(fieldId);
    }

    updateValidationSummary();
  }

  // Delegate modification handling to the form.
  alumniForm.addEventListener("input", handleFieldModification);
  alumniForm.addEventListener("change", handleFieldModification);

  /* Reset Form Validation States and Counter */

  alumniForm.addEventListener("reset", function () {
    if (!ready) {
      return;
    }
    clearAllFieldErrors();
    clearFormMessage();

    // Update the counter after the native form reset completes.
    setTimeout(updateFeedbackCounter, 0);
  });

  updateFeedbackCounter();
  feedback.addEventListener("input", updateFeedbackCounter);
  // Enable registration only after all initialization steps succeed.
  ready = true;
  registerButton.disabled = false;
}

try {
  initializeAlumniForm();
} catch (error) {
  // Do not log registration data or interrupt unrelated page features.
  const registerButton = document.getElementById("register-button");
  if (registerButton instanceof HTMLButtonElement) {
    registerButton.disabled = true;
  }
}


/* ==================================
   Practical 16: Digital Clock
================================== */

function updateDigitalClock() {

  const clockElement = document.getElementById(
    "digital-clock"
  );

  const dateElement = document.getElementById(
    "current-date"
  );

  if (!clockElement || !dateElement) {
    return;
  }

  const now = new Date();

  // Get hours, minutes and seconds
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Display time
  const currentTime =
    `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

  clockElement.textContent = currentTime;

  // Machine-readable time
  clockElement.dateTime = now.toISOString();

  // Format current date
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  dateElement.textContent = now.toLocaleDateString(
    "en-IN",
    dateOptions
  );
}

// Display immediately when page loads
updateDigitalClock();

// Update every second
if (document.getElementById("digital-clock")) {
  setInterval(updateDigitalClock, 1000);
}


/* Click-to-open navigation dropdowns */

document.querySelectorAll(".dropdown-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.closest(".dropdown");
    if (!dropdown) {
      return;
    }
    const isOpen = dropdown.classList.contains("is-open");

    document.querySelectorAll(".dropdown").forEach((item) => {
      item.classList.remove("is-open");

      const toggle = item.querySelector(".dropdown-toggle");

      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    if (!isOpen) {
      dropdown.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

/* Close dropdowns when clicking outside */

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((item) => {
      item.classList.remove("is-open");

      const toggle = item.querySelector(".dropdown-toggle");

      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});