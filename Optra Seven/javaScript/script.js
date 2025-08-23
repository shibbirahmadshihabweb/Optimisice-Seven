
/* Script For Accordion*/

const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach(item => {
  const title = item.querySelector(".accordion__question");
  const content = item.querySelector(".accordion__answer");

  title.addEventListener("click", () => {
    for (i = 0; i < accordionItems.length; i++) {
      if(accordionItems[i] != item){
        accordionItems[i].classList.remove("active");
      }else{
        // toggle the accordion item
        item.classList.toggle("active");
      }
    }

  });
});


/* Script For add class in sticky header*/
window.addEventListener("scroll", function() {
  const header = document.querySelector(".site-main-header__container");
  header.classList.toggle("sticky-header", window.scrollY > 0);
});



// responsive aside menu

const responsiveMenuButton = document.querySelector(".main-menu__responsive-btn");
const responsiveMenu = document.querySelector(".main-menu-responsive");
const responsiveMenuClose = document.querySelector(".main-menu-responsive__close-btn");
const responsiveMenuStartProjet = document.querySelector(".main-menu-responsive .start-project-btn-wrarpper");
const responsiveMenuLogo = document.querySelector(".main-menu-responsive__logo");

responsiveMenuButton.addEventListener('click', () => {
  responsiveMenu.classList.add("active");
  document.body.classList.add("no-scroll");
});

responsiveMenuClose.addEventListener('click', () => {
  responsiveMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

responsiveMenuStartProjet.addEventListener('click', () => {
  responsiveMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

responsiveMenuLogo.addEventListener('click', () => {
  responsiveMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
});




document.querySelectorAll(".main-menu-responsive .main-menu__link").forEach(link => {
  link.addEventListener("click", () => {
    responsiveMenu.classList.remove("active");
   document.body.classList.remove("no-scroll");
  });
});
