window.addEventListener("DOMContentLoaded", function () {
  var prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  var bodyElement = document.body;

  if (prefersDarkMode) {
    bodyElement.classList.add("dark-mode");
  }
});

window.addEventListener("popstate", function () {
  location.reload();
});

function launchResponsiveMenu() {
  var x = document.getElementById("res-menu-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
