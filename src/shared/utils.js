async function includeHTML() {
  const header = document.querySelector("header.main-header");
  const footer = document.querySelector("footer.main-footer");

  if (header) {
    const res = await fetch("/src/shared/header.html");
    header.innerHTML = await res.text();
    
    // Initialize mobile menu after header is loaded
    initMobileMenu();
  }

  if (footer) {
    const res = await fetch("/src/shared/footer.html");
    footer.innerHTML = await res.text();
  }
}

// Mobile menu toggle functionality
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      
      // Update aria-expanded for accessibility
      const isExpanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
      
      // Change icon
      menuToggle.textContent = isExpanded ? "✕" : "☰";
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);
