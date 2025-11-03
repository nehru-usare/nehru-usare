// assets/js/theme.js

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Default: dark theme
const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateIcon(nextTheme);
});

// Change toggle icon dynamically
function updateIcon(theme) {
  themeToggle.textContent = theme === "dark" ? "🌞" : "🌙";
}
