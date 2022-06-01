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
        

        document.body.childNodes[1].childNodes[1].style = `position: relative;`;

        document.body.childNodes[1]
          .childNodes[3].childNodes[1]
            .style = `display: flex;
                       justify-content: space-around;
                       flex-wrap: wrap;`;

                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[3].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[5].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[7].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[9].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[11].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[13].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[15].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[17].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[19].style = `display: inline;`;
                       document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[21].style = `display: inline;`;

                      


    } else {
  
      
  
      
  
  
  
  
    }
  })

  
  
 