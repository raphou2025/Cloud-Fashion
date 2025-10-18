const toggleBtn = document.getElementById("toggleTheme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply saved theme on load
(function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
})();

// Update button icon + text
function updateToggleBtn() {
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i> Light Mode'
    : '<i class="fa-solid fa-moon"></i> Dark Mode';
}

// Toggle theme when clicking the button
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateToggleBtn();
});

// Set correct button text/icon when DOM loaded
window.addEventListener("DOMContentLoaded", updateToggleBtn);
