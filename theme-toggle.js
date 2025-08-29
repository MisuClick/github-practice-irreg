// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  function updateTheme() {
    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    updateTheme();
  });

  // Initialize on page load
  updateTheme();
});
