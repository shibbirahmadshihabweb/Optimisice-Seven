const menu_background = document.querySelector(".menu__background");

const megamenus = document.querySelectorAll(".megamenu");
const megamenu_wrappers = document.querySelectorAll(".megamenu__content-wrapper");

megamenus.forEach((menu) => {
    menu.click = () => {
        menu_background.classList.remove("hidden");
    }
});

megamenu_wrappers.forEach((menu_wrappers) => {
    menu_wrappers.onmouseout = () => {
        menu_background.classList.add("hidden");
    }
});

// const observer = new MutationObserver(() => {
//   const display = window.getComputedStyle(target).display;

//   if (display !== "none") {
//     console.log("Element is now visible!");
//     // Do something when it becomes visible
//     link.href = "https://example.com"; // set or change link
//   } else {
//     console.log("Element is hidden.");
//     // Optionally do something when hidden
//     link.href = "#";
//   }
// });

// observer.observe(target, {
//   attributes: true,
//   attributeFilter: ["style"],
// });
