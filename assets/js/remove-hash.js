// Get all the links with hash URLs
const links = document.querySelectorAll('a[href^="#"]');

// Add a click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default link behavior
    const href = this.getAttribute("href"); // get the hash URL
    const id = href.slice(1); // remove the "#" from the URL
    const target = document.getElementById(id); // get the target element
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // scroll to the target element
      history.replaceState(null, null, id); // replace the URL hash with the id
    }
  });
});

