
/* Practical 9: Random Event Image */

const eventImages = [
    {
        src: "images/events/event1.jpg",
        alt: "Illustrative coding workshop event",
        caption: "Republic Day Celebration"
    },
    {
        src: "images/events/event2.jpeg",
        alt: "Illustrative technical seminar event",
        caption: "Technical Seminar"
    },
    {
        src: "images/events/event3.jpeg",
        alt: "Illustrative student hackathon event",
        caption: "Student Hackathon"
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

    facultyMembers.forEach(function(member) {

        const dateString = member.dataset.joiningDate;

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

const alumniForm = document.getElementById("alumni-form");
const feedback = document.getElementById("feedback");
const characterCount = document.getElementById("character-count");
const formMessage = document.getElementById("form-message");

/* Live Character Counter */

if (feedback && characterCount) {
    feedback.addEventListener("input", function() {
        characterCount.textContent =
            feedback.value.length + " / 300 characters";
    });
}

/* Form Validation */

if (alumniForm) {

    alumniForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dob = document.getElementById("dob").value;
        const batch = document.getElementById("batch").value;
        const degree = document.getElementById("degree").value;
        const designation = document.getElementById("designation").value.trim();
        const organization = document.getElementById("organization").value.trim();
        const about = document.getElementById("about-yourself").value.trim();
        const feedbackText = feedback.value.trim();

        let error = "";

        /* Empty Field Validation */

        if (
            !fullName || !email || !phone ||
            !dob || !batch || !degree ||
            !designation || !organization ||
            !about || !feedbackText
        ) {
            error = "Please fill in all fields.";
        }

        /* Minimum Length Validation */

        else if (fullName.length < 3) {
            error = "Full Name must contain at least 3 characters.";
        }

        else if (designation.length < 2) {
            error = "Designation must contain at least 2 characters.";
        }

        else if (organization.length < 2) {
            error = "Organization must contain at least 2 characters.";
        }

        else if (about.length < 10) {
            error = "About Yourself must contain at least 10 characters.";
        }

        else if (feedbackText.length < 10) {
            error = "Feedback must contain at least 10 characters.";
        }

        else if (feedback.value.length > 300) {
            error = "Feedback cannot exceed 300 characters.";
        }

        /* Email Validation */

        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            error = "Please enter a valid email address.";
        }

        /* Phone Validation */

        else if (!/^[0-9]{10}$/.test(phone)) {
            error = "Please enter a valid 10-digit phone number.";
        }

        /* Date of Birth Validation */

        else if (!isValidDOB(dob)) {
            error = "Please enter a valid date of birth.";
        }

        /* Graduation Batch Validation */

        else if (
            !/^\d{4}$/.test(batch) ||
            Number(batch) < 1980 ||
            Number(batch) > new Date().getFullYear()
        ) {
            error = "Please enter a valid graduation year.";
        }

        /* Display Result */

        if (error) {
            formMessage.textContent = error;
            formMessage.className = "form-message error";
        } else {
            formMessage.textContent =
                "Form validated successfully! " +
                "This is a demonstration; no data has been submitted.";

            formMessage.className = "form-message success";
        }

    });

    /* Reset Form Message and Counter */

    alumniForm.addEventListener("reset", function() {

        formMessage.textContent = "";
        formMessage.className = "form-message";

        if (characterCount) {
            characterCount.textContent = "0 / 300 characters";
        }
    });
}

/* Validate Date of Birth */

function isValidDOB(dateString) {

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return false;
    }

    const [year, month, day] = dateString
        .split("-")
        .map(Number);

    const date = new Date(year, month - 1, day);
    const today = new Date();

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        date <= today &&
        year >= 1900
    );
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
