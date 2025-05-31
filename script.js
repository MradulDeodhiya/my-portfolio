// Navbar scroll effect
const nav = document.querySelector("nav");
const mobileNav = document.querySelector("#hamburger-nav");

window.addEventListener("scroll", () => {
  // Add scrolled class for background change
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");

function toggleMenu() {
  hamburgerIcon.classList.toggle("open");
  menuLinks.classList.toggle("open");
}

// Active link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a, .menu-links a");

function setActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Close mobile menu if open
      if (menuLinks.classList.contains("open")) {
        toggleMenu();
      }

      // Smooth scroll to target
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Initialize active link on page load
setActiveLink();

// Update active link on scroll
window.addEventListener("scroll", setActiveLink);

// Theme switcher animation
const themeSwitch = document.querySelector("#checkbox");
const body = document.querySelector("body");

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
});

// Contact Form Handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you would typically send this data to a server
  // For now, we'll just log it and show a success message
  console.log("Form submitted:", { name, email, message });

  // Clear form
  contactForm.reset();

  // Show success message (you can customize this)
  alert("Thank you for your message! I will get back to you soon.");
});
