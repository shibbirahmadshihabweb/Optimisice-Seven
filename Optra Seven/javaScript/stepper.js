// -------------------- Section Active Navigation --------------------


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sub-header-list');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      navLinks.forEach(link => {
        const href = link.querySelector('a').getAttribute('href').slice(1);
        if (href === id) {
          navLinks.forEach(t => t.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".scrolling__card--container");
  const cards = document.querySelectorAll(".scrolling__card");
  const prevBtn = document.querySelector(".prev__button");
  const nextBtn = document.querySelector(".next__button");

  let index = 0;

  function showCard(i) {
    const cardWidth = cards[0].offsetWidth + 20; // card width + gap
    container.scrollTo({
      left: i * cardWidth,
      behavior: "smooth"
    });
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index < cards.length - 1) {
      index++;
      showCard(index);
    }
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index > 0) {
      index--;
      showCard(index);
    }
  });
});
