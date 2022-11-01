function loadEvent() {
  const primaryNav = document.querySelector(".primary-navigation");

  const hamburger = document.querySelector(".hamburger");

  const close = document.querySelector(".menu_close");

  const visibilityNav = primaryNav.getAttribute("data-visible");
  const visibilityClose = close.getAttribute("data-visible");
  const visibilityHamburger = hamburger.getAttribute("data-visible");

  hamburger.addEventListener("click", () => {
    if (visibilityNav === "false") {
      primaryNav.setAttribute("data-visible", true);
      close.setAttribute("data-visible", true);
      hamburger.setAttribute("data-visible", false);
    }
  });
  close.addEventListener("click", () => {
    primaryNav.setAttribute("data-visible", false);
    close.setAttribute("data-visible", false);
    hamburger.setAttribute("data-visible", true);
  });
}
window.addEventListener("load", loadEvent);
