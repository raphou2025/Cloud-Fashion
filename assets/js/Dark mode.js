const toggleBtn = document.getElementById("toggleTheme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const navbar = document.querySelector(".navbar");

if (navbar) {
  const navList = navbar.querySelector(".navbar-nav");

  if (navList) {
    const menu = document.createElement("div");
    const menuToggle = document.createElement("button");

    menu.className = "navbar-menu";
    menu.id = "site-navigation";
    menuToggle.className = "navbar-menu-toggle";
    menuToggle.type = "button";
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.setAttribute("aria-controls", menu.id);
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML =
      '<span></span><span></span><span></span>';

    const menuItems = [
      navList,
      navbar.querySelector(".search-form"),
      navbar.querySelector(".group-btn"),
    ].filter(Boolean);

    for (const item of menuItems) {
      menu.append(item);
    }

    navList.setAttribute("aria-label", "Main navigation");
    navbar.append(menuToggle, menu);

    const menuMedia = window.matchMedia("(max-width: 768px)");
    const setMenuOpen = (isOpen) => {
      const shouldOpen = menuMedia.matches && isOpen;
      navbar.classList.toggle("is-menu-open", shouldOpen);
      menuToggle.setAttribute("aria-expanded", String(shouldOpen));
      menuToggle.setAttribute(
        "aria-label",
        shouldOpen ? "Close navigation menu" : "Open navigation menu"
      );
      menu.setAttribute("aria-hidden", String(menuMedia.matches && !shouldOpen));
    };

    menuToggle.addEventListener("click", () => {
      setMenuOpen(!navbar.classList.contains("is-menu-open"));
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (!navbar.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    const updateMenuMode = () => {
      navbar.classList.remove("is-menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menu.setAttribute("aria-hidden", String(menuMedia.matches));
    };

    updateMenuMode();
    menuMedia.addEventListener("change", updateMenuMode);
  }

  const profile = navbar.querySelector(".profile-info");

  if (toggleBtn || profile) {
    const navbarActions = document.createElement("div");
    navbarActions.className = "navbar-actions";

    navbar.append(navbarActions);

    if (profile) {
      navbarActions.append(profile);
    }

    navbarActions.append(toggleBtn);
  }
}

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
  if (!toggleBtn) return;

  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i> Light Mode'
    : '<i class="fa-solid fa-moon"></i> Dark Mode';
}

// Toggle theme when clicking the button
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateToggleBtn();
  });
}

// Set correct button text/icon when DOM loaded
window.addEventListener("DOMContentLoaded", updateToggleBtn);
