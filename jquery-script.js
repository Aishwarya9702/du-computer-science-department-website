
/* ==================================
   Practical 17: Dynamic List
   Using jQuery
================================== */

$(document).ready(function () {

  $("#activity-form").on("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Read and trim input
    const activity = $("#activity-input").val().trim();

    // Validate input
    if (activity === "") {
      $("#activity-message")
        .text("Please enter an activity.")
        .css("color", "#b42318");

      return;
    }

    // Create a new list item safely
    const newItem = $("<li></li>").text(activity);

    // Append item to list
    $("#activity-list").append(newItem);

    // Clear input
    $("#activity-input").val("");

    // Show success message
    $("#activity-message")
      .text("Activity added successfully!")
      .css("color", "#167347");

    // Focus input again
    $("#activity-input").focus();

  });

});




/* Practical 18: Gallery Image Fade Effects */

$(document).ready(function () {

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

});
