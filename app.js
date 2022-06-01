var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  window.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth > 500) {
        let linkStyle = document.querySelector('#link');
        let scriptPath = document.querySelector('#path');
        linkStyle.remove();
        scriptPath.remove();

        document.body.childNodes[1].childNodes[3].childNodes[1].style.cssText = `display: none`;
      

    } else {
  
      
  
      
  
  
  
  
    }
  })
  
 