
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
