
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





