/* Practical 18: Gallery Image Fade Effects */

(function initializeGalleryFade() {
  const fadeInButton = document.getElementById("gallery-fade-in");
  const fadeOutButton = document.getElementById("gallery-fade-out");

  // Feature absence on unrelated pages is normal.
  if (!fadeInButton && !fadeOutButton) {
    return;
  }

  // Disable animation controls if initialization is unavailable.
  function disableGalleryControls() {
    if (fadeInButton instanceof HTMLButtonElement) {
      fadeInButton.disabled = true;
    }

    if (fadeOutButton instanceof HTMLButtonElement) {
      fadeOutButton.disabled = true;
    }
  }

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
    }
  });
})();