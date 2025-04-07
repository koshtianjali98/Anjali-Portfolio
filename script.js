// script.js

// Fade-in animation on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 1.5s ease-in forwards';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach(section => {
  section.style.opacity = 0;
  observer.observe(section);
});

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
