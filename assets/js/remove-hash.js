// Get the scroll-to-top button element
const scrollButton = document.querySelector(".scroll-top");

// Add a click event listener to the scroll-to-top button
scrollButton.addEventListener("click", function (e) {
  e.preventDefault();

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  const homepageUrl = window.location.origin;
  history.replaceState(null, null, homepageUrl);
});

// Get all the links with hash URLs
const links = document.querySelectorAll('a[href^="#"]');

// Add a click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Check if the link is for a hash URL
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();

      // Get the hash URL
      const href = this.getAttribute("href");
      const id = href.slice(1); // Remove the "#" from the URL
      const target = document.getElementById(id); // Get the target element
      if (target) {
        target.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element
        history.replaceState(null, null, id); // Replace the URL hash with the id
      }
    }
  });
});
