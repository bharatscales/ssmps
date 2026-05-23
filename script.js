(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      const expanded = mainNav.classList.contains("open");
      navToggle.setAttribute("aria-expanded", expanded);
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (lightbox && lightboxImg) {
    document.querySelectorAll("[data-lightbox]").forEach(function (item) {
      item.addEventListener("click", function () {
        const src = item.dataset.lightbox || item.querySelector("img")?.src;
        if (!src) return;
        lightboxImg.src = src;
        lightboxImg.alt = item.dataset.caption || "Gallery image";
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
      lightboxImg.src = "";
    }

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.querySelector(".form-success");

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formSuccess.style.display = "block";
      formSuccess.textContent =
        "Thank you! Your message has been recorded. The school will contact you soon. (For immediate help, please call 9792201779.)";
      contactForm.reset();
      formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  const admissionForm = document.getElementById("admission-form");
  const admissionSuccess = document.querySelector(".admission-success");

  if (admissionForm && admissionSuccess) {
    admissionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      admissionSuccess.style.display = "block";
      admissionSuccess.textContent =
        "Application details saved locally. Please also visit the school office or email ssmps01@gmail.com with documents to complete admission.";
      admissionForm.reset();
    });
  }
})();
