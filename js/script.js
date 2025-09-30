// ===== Mobile Menu Toggle =====
 const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ===== Fade In Hero Text on Load =====
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(30px)";

  setTimeout(() => {
    heroText.style.transition = "all 1s ease-out";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 200);
});

// ===== Scroll Reveal for Cards =====
const cards = document.querySelectorAll(".card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Initial check
revealOnScroll();
// ===== Responsive Navbar Toggle =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// ===== Contact Form Validation =====
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent default form submission

      const name = contactForm.querySelector('input[type="text"]');
      const email = contactForm.querySelector('input[type="email"]');
      const message = contactForm.querySelector("textarea");

      let isValid = true;

      // Name validation
      if (name.value.trim().length < 3) {
        alert("⚠️ Please enter a valid name (at least 3 characters).");
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        alert("⚠️ Please enter a valid email address.");
        isValid = false;
      }

      // Message validation
      if (message.value.trim().length < 10) {
        alert("⚠️ Your message should be at least 10 characters long.");
        isValid = false;
      }

      // If everything is valid
      if (isValid) {
        alert("✅ Thank you! Your message has been sent successfully.");
        contactForm.reset();
      }
    });
  }
});
// ===== Dark Mode Toggle =====
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// ===== Back to Top Button =====
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===== Initialize AOS (Animate On Scroll) Library =====
AOS.init({
  duration: 1000,
  once: true,
});

// ===== Initialize Swiper.js for Testimonials =====
const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ===== Initialize Lightbox2 for Image Gallery =====
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

// ===== Initialize Typed.js for Typing Effect =====
const typed = new Typed(".typed-text", {
  strings: ["Developer.", "Designer.", "Creator."],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// ===== Initialize CountUp.js for Statistics =====
const stats = document.querySelectorAll(".stat-number");

stats.forEach(stat => {
  const endValue = parseInt(stat.getAttribute("data-target"), 10);
  const countUp = new CountUp(stat, endValue);
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
});

// ===== Initialize Justified Gallery =====
$(document).ready(function () {
  $(".justified-gallery").justifiedGallery({
    rowHeight: 200,
    lastRow: "nojustify",
    margins: 5,
  });
});

// ===== Initialize Isotope for Portfolio Filtering =====
const iso = new Isotope(".portfolio-container", {
  itemSelector: ".portfolio-item",
  layoutMode: "fitRows",
});

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
