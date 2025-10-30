// ======================================
// GLOBAL DOM LOADING HELPER
// ======================================
document.addEventListener("DOMContentLoaded", () => {
  // Smooth initialization log
  console.log("✅ Portfolio Script Loaded Successfully");

  // ===============================
  // 1️⃣ MOBILE MENU TOGGLE
  // ===============================
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ===============================
  // 2️⃣ SMOOTH SCROLL FOR ANCHORS
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===============================
  // 3️⃣ HERO TEXT FADE-IN ON LOAD
  // ===============================
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(30px)";

    setTimeout(() => {
      heroText.style.transition = "all 1s ease-out";
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
    }, 200);
  }

  // ===============================
  // 4️⃣ SCROLL REVEAL FOR CARDS
  // ===============================
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

  if (cards.length) {
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }

  // ===============================
  // 5️⃣ CONTACT FORM VALIDATION
  // ===============================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('input[type="text"]');
      const email = contactForm.querySelector('input[type="email"]');
      const message = contactForm.querySelector("textarea");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = true;

      if (name.value.trim().length < 3) {
        alert("⚠️ Please enter a valid name (at least 3 characters).");
        isValid = false;
      }

      if (!emailPattern.test(email.value.trim())) {
        alert("⚠️ Please enter a valid email address.");
        isValid = false;
      }

      if (message.value.trim().length < 10) {
        alert("⚠️ Your message should be at least 10 characters long.");
        isValid = false;
      }

      if (isValid) {
        alert("✅ Thank you! Your message has been sent successfully.");
        contactForm.reset();
      }
    });
  }

  // ===============================
  // 6️⃣ DARK MODE TOGGLE
  // ===============================
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (darkModeToggle) {
    // Load saved theme
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
  }

  // ===============================
  // 7️⃣ BACK TO TOP BUTTON
  // ===============================
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ===============================
  // 8️⃣ PROJECTS PAGE – TAB SWITCHING
  // ===============================
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        button.classList.add("active");
        const target = document.getElementById(button.dataset.tab);
        if (target) {
          target.classList.add("active");
          target.classList.add("fade-in");
          setTimeout(() => target.classList.remove("fade-in"), 500);
        }
      });
    });
  }

  // ===============================
  // 9️⃣ PROJECTS REVEAL ON SCROLL
  // ===============================
  const projectSections = document.querySelectorAll(".tab-content");

  function revealProjectsOnScroll() {
    const trigger = window.innerHeight * 0.9;
    projectSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < trigger) {
        section.classList.add("show");
      }
    });
  }

  if (projectSections.length) {
    window.addEventListener("scroll", revealProjectsOnScroll);
    revealProjectsOnScroll();
  }

  // ===============================
  // 🔟 READ MORE / LESS BUTTONS
  // ===============================
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  readMoreBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.previousElementSibling;
      const isVisible = content.style.display === "block";
      content.style.display = isVisible ? "none" : "block";
      btn.textContent = isVisible ? "Read more..." : "Read less...";
    });
  });

  // ===============================
  // 1️⃣1️⃣ THIRD-PARTY LIBRARIES INIT
  // ===============================
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 1000, once: true });
  }

  if (typeof Swiper !== "undefined") {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: { delay: 5000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    });
  }

  if (typeof lightbox !== "undefined") {
    lightbox.option({ resizeDuration: 200, wrapAround: true });
  }

  if (typeof Typed !== "undefined") {
    new Typed(".typed-text", {
      strings: ["Developer.", "Data Analyst.", "Creator."],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
  }

  if (typeof CountUp !== "undefined") {
    const stats = document.querySelectorAll(".stat-number");
    stats.forEach(stat => {
      const endValue = parseInt(stat.getAttribute("data-target"), 10);
      const counter = new CountUp(stat, endValue);
      if (!counter.error) counter.start();
    });
  }

  if (typeof Isotope !== "undefined") {
    const iso = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
        filterButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
      });
    });
  }

  if (window.$ && $(".justified-gallery").length) {
    $(".justified-gallery").justifiedGallery({
      rowHeight: 200,
      lastRow: "nojustify",
      margins: 5,
    });
  }
});
