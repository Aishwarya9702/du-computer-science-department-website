
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

function displayRandomEvent() {

  const randomIndex = Math.floor(
    Math.random() * eventImages.length
  );

  const selectedEvent = eventImages[randomIndex];

  const eventImage = document.getElementById(
    "random-event-image"
  );

  const eventCaption = document.getElementById(
    "event-caption"
  );

  if (eventImage && eventCaption) {
    eventImage.src = selectedEvent.src;
    eventImage.alt = selectedEvent.alt;
    eventCaption.textContent = selectedEvent.caption;
  }
}

displayRandomEvent();


/* Practical 10: Faculty Experience Calculator */

function calculateFacultyExperience() {

  const facultyMembers = document.querySelectorAll(
    ".faculty-experience"
  );

  const today = new Date();

  facultyMembers.forEach(function (member) {

    const dateString = member.dataset.joiningDate;

    if (!dateString || !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(dateString)) {
      member.textContent = "Invalid joining date";
      return;
    }

    const [year, month, day] = dateString
      .split("-")
      .map(Number);

    const joiningDate = new Date(
      year,
      month - 1,
      day
    );

    if (
      joiningDate.getFullYear() !== year ||
      joiningDate.getMonth() !== month - 1 ||
      joiningDate.getDate() !== day ||
      joiningDate > today
    ) {
      member.textContent = "Invalid joining date";
      return;
    }

    let experience = today.getFullYear() - year;

    if (
      today.getMonth() < joiningDate.getMonth() ||
      (
        today.getMonth() === joiningDate.getMonth() &&
        today.getDate() < joiningDate.getDate()
      )
    ) {
      experience--;
    }

    member.textContent = experience + " years (Sample)";
  });
}

calculateFacultyExperience();


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