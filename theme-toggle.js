// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  function updateTheme() {
    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");   // save preference
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");  // save preference
    }
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    updateTheme();
  });

  // Initialize on page load
  updateTheme();
});
