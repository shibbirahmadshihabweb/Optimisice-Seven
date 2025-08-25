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
