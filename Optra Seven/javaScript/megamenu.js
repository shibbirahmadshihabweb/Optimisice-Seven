const menu_background = document.querySelector(".menu__background");

const megamenus = document.querySelectorAll(".megamenu");
const megamenu_wrappers = document.querySelectorAll(".megamenu__content-wrapper");

megamenus.forEach((menu) => {
    menu.onmouseover = () => {
        menu_background.classList.remove("hidden");
    }
});

megamenu_wrappers.forEach((menu_wrappers) => {
    menu_wrappers.onmouseout = () => {
        menu_background.classList.add("hidden");
    }
});