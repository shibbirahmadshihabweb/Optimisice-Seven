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


document.querySelectorAll(".filter-list").forEach(filterBtn => {
  filterBtn.addEventListener("click", () => {
    const filterValue = filterBtn.dataset.filter.toLowerCase();
    
    document.querySelectorAll(".content-card").forEach(card => {
      const categories = card.dataset.category.toLowerCase().split(" ");
      
      if (filterValue === "all" || categories.includes(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
