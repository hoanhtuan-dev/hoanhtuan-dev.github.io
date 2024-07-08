const navUl = document.getElementById("navbar-menu");

const btnMenu = document.getElementById("toggle-mobile-menu");

const navUlBg = document.getElementById("navUlBg");

if (navUl) {
  navUl.classList.add("nav-ul-hidden");
}

if (btnMenu && navUl) {
  btnMenu.addEventListener("click", () => {
    if (navUl.classList.contains("nav-ul-hidden")) {
      navUl.classList.remove("nav-ul-hidden")
      navUl.classList.add("nav-ul-show");
    }
    else {
      navUl.classList.remove("nav-ul-show");
      navUl.classList.add("nav-ul-hidden");
    }
  });
}

if (navUlBg && navUl) {
  navUlBg.addEventListener("click", () => {
    if (navUl.classList.contains("nav-ul-show")) {
      navUl.classList.remove("nav-ul-show");
      navUl.classList.add("nav-ul-hidden");
    }
  });
}

