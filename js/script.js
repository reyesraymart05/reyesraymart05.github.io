// Typing animation
const texts = ["Full Stack Developer", "IT Systems Administrator"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

// Start typing animation
typeText();

// Smooth scrolling
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// Mobile menu toggle
document.getElementById("mobile-menu-btn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Navigation link clicks
document.querySelectorAll(".nav-link, #mobile-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    scrollToSection(targetId);

    // Close mobile menu if open
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Skill bar animations
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < window.innerHeight - 100) {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    }
  });
}

// Scroll event listener
window.addEventListener("scroll", function () {
  animateOnScroll();
  animateSkillBars();
});

// Initial animation check
animateOnScroll();

// Project functions
function viewProject(projectName) {
  const messages = {
    logistics: "Logistics Management System demo would open here!",
    hris: "HRIS & Payroll System demo would open here!",
    cloud: "Cloud Infrastructure Migration case study would open here!",
  };
  alert(messages[projectName] || "Project demo would open here!");
}

function viewCode(projectName) {
  const messages = {
    logistics: "Logistics Management System code repository would open here!",
    hris: "HRIS & Payroll System code repository would open here!",
    cloud: "Cloud Infrastructure Migration documentation would open here!",
  };
  alert(messages[projectName] || "Project code would open here!");
}

// Resume modal functions
function downloadResume() {
  openResumeModal();
}

function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto"; // Restore scrolling
}

function downloadResumePDF() {
  const pdfPath = "assets/Raymart _Reyes_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "Raymart Reyes Resume.pdf"; // Change file name if you want
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Close modal when clicking outside
document.getElementById("resume-modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeResumeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeResumeModal();
  }
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name && email && subject && message) {
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon!`);
    this.reset();
  }
});

// Back to top button functionality
const backToTopBtn = document.getElementById("back-to-top");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleBackToTopBtn() {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
}

// Active navigation highlighting and back to top button
window.addEventListener("scroll", function () {
  // Back to top button visibility
  toggleBackToTopBtn();

  // Navigation highlighting
  const sections = ["home", "about", "skills", "experience", "education", "projects", "contact"];
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const element = document.getElementById(section);
    const rect = element.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      current = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600");
    link.classList.add("text-gray-600");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.remove("text-gray-600");
      link.classList.add("text-blue-600");
    }
  });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'97cac4e7d6d8c4cb',t:'MTc1NzQ2MzcyNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener) document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState && ((document.onreadystatechange = e), c());
      };
    }
  }
})();
