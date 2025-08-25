
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


// -------------------- Portfolio Filter --------------------

const filterButtons = document.querySelectorAll(".filter-list");
const contentCards = document.querySelectorAll(".content-card");

filterButtons.forEach(filterBtn => {
  filterBtn.addEventListener("click", () => {
    const filterValue = filterBtn.dataset.filter.toLowerCase();

    filterButtons.forEach(btn => btn.classList.remove("active"));
    filterBtn.classList.add("active");

    contentCards.forEach(card => {
      const categories = card.dataset.category.toLowerCase().split(" ");

      if (filterValue === "all" || categories.includes(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// -------------------- card slider --------------------
document.querySelectorAll(".scrolling__card-container").forEach(container => {
  const cards = container.querySelectorAll(".scrolling-snap");
  let index = 0;

  const section = container.closest("section");

  // prev/next buttons section
  const prevBtns = section.querySelectorAll(".prev__button");
  const nextBtns = section.querySelectorAll(".next__button");

  function showCard(i) {
    const cardWidth = cards[0].offsetWidth + 40; // card width + gap
    container.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  }

  // prev buttons - listener
  prevBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (index > 0) {
        index--;
      } else {
        // surute thakle sesh card e chole jabe
        index = cards.length - 1;
      }
      showCard(index);
    });
  });

  // next buttons - listener
  nextBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (index < cards.length - 1) {
        index++;
      } else {
        // loop card
        index = 0;
      }
      showCard(index);
    });
  });

  // Swipe/Drag support
  let startX = 0;
  let isDragging = false;

  container.addEventListener("touchstart", e => { startX = e.touches[0].clientX; isDragging = true; });
  container.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const diff = startX - e.touches[0].clientX;
    if (diff > 50) {
      index = (index < cards.length - 1) ? index + 1 : 0;
      showCard(index);
      isDragging = false;
    } else if (diff < -50) {
      index = (index > 0) ? index - 1 : cards.length - 1;
      showCard(index);
      isDragging = false;
    }
  });
  container.addEventListener("touchend", () => { isDragging = false; });
  container.addEventListener("mousedown", e => { startX = e.clientX; isDragging = true; container.classList.add("dragging"); });
  container.addEventListener("mousemove", e => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (diff > 50) {
      index = (index < cards.length - 1) ? index + 1 : 0;
      showCard(index);
      startX = e.clientX;
    } else if (diff < -50) {
      index = (index > 0) ? index - 1 : cards.length - 1;
      showCard(index);
      startX = e.clientX;
    }
  });
  container.addEventListener("mouseup", () => { isDragging = false; container.classList.remove("dragging"); });
  container.addEventListener("mouseleave", () => { isDragging = false; container.classList.remove("dragging"); });
});
