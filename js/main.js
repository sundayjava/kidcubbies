const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile = document.getElementById("themeToggleMobile");
const siteLogo = document.getElementById("siteLogo");
const modalLogo = document.getElementById("modalLogo");
const sitefotter = document.getElementById("sitefotter");
const themeText = document.getElementById("themeText");
const menuOpen = document.getElementById("menuOpen");
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

const loginBtn = document.querySelector(".login-btn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

let isMenuOpen = false;

function updateTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  themeToggle.innerHTML = theme === "dark"
    ? '<i data-lucide="sun"></i>'
    : '<i class="fas fa-moon"></i>';
  lucide.createIcons(); 

  themeToggleMobile.innerHTML = theme === "dark"
    ? '<i data-lucide="sun"></i>'
    : '<i class="fas fa-moon"></i>';
  lucide.createIcons(); 

  siteLogo.src = theme === "dark"
    ? "./assets/icons/logo.svg"
    : "./assets/icons/logo-light.svg";

  modalLogo.src = theme === "dark"
    ? "./assets/icons/logo.svg"
    : "./assets/icons/logo-light.svg";

  sitefotter.src = theme === "dark"
    ? "./assets/icons/logo.svg"
    : "./assets/icons/logo-light.svg";
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  updateTheme(next);
});

menuOpen.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle("active", isMenuOpen);

  menuOpen.innerHTML = isMenuOpen
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';
  lucide.createIcons(); 
});

document.querySelectorAll('.mobile-menu-links a, .login-btn').forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    mobileMenu.classList.remove("active");

    menuOpen.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });
});

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Optional: Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

themeToggleMobile.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  updateTheme(next);
    themeText.textContent = next === "dark" ? "Dark Mode" : "Light Mode";
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  updateTheme(saved);
});


document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const icon = button.querySelector('.faq-icon');

    // Collapse others
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        const otherIcon = i.querySelector('.faq-icon');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.style.transform = 'rotate(0deg)';
    }

    lucide.createIcons();
  });
});

document.querySelectorAll('.mobile-select').forEach(button => {
  button.addEventListener('click', () => {
    const section = button.closest('.footer-section.mobile');
    section.classList.toggle('active');
  })})



document.querySelector('.hamburger-menu').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
});