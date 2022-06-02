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

  if (window.innerWidth > 400) {
    let linkStyle = document.querySelector('#link');
    let scriptPath = document.querySelector('#path');
    linkStyle.remove();
    scriptPath.remove();


    document.body.childNodes[1].childNodes[1].style = `position: relative;`;

    //
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1].removeAttribute('aria-label');
    //
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[3].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[3].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[3].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[3].removeAttribute('aria-label');
    //
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[5].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[5].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[5].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[5].removeAttribute('aria-label');
    // ViewSonic
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[7].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[7].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[7].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[7].removeAttribute('aria-label');
    //  bosh
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[9].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[9].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[9].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[9].removeAttribute('aria-label');
    // hp
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[11].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[11].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[11].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[11].removeAttribute('aria-label');
    // aser
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[13].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[13].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[13].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[13].removeAttribute('aria-label');
    // sony
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[15].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[15].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[15].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[15].removeAttribute('aria-label');
    // lenogo
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[17].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[17].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[17].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[17].removeAttribute('aria-label');
    // samsung
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[19].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[19].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[19].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[19].removeAttribute('aria-label');
    // apple
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[21].setAttribute('class', 's1');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[21].removeAttribute('role');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[21].removeAttribute('id');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[21].removeAttribute('aria-label');




    document.body.childNodes[1]
      .childNodes[3].childNodes[1]
      .style = `display: flex;
                       
                       flex-wrap: wrap;`;

    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1].style = `display: inline;`;
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[3].style = `display: inline;`;
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[5].style = `display: inline;`;
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[7].style = `display: inline;`;
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[9].style = `display: inline;`;
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[11].style = `display: inline;`;
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[13].style = `display: inline;`;
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[15].style = `display: inline;`;


    document.body.childNodes[3].setAttribute('style', 'inline;');
  } else {
    document.body.childNodes[3].setAttribute('style', 'opacity: 0');

  }
})


let popup = document.querySelector('#lenogo');
let popup1 = document.querySelector('.samsung');
let popup2 = document.querySelector('.apple');
let popup3 = document.querySelector('.apple2');
let openPopupButton = document.querySelector('.footer');
openPopupButton.addEventListener('click', () => {
  if (!popup.classList.contains('hidden')) {
    popup.classList.add('hidden')
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[17].setAttribute('style', 'block');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[21].setAttribute('style', 'block');
    popup1.classList.add('hidden');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[19].setAttribute('style', 'block');
    popup2.classList.add('hidden');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[23].setAttribute('style', 'block');
    popup3.classList.add('hidden');
    document.querySelector('.button').value = 'Показать все';
    document.querySelector('#arrows').style.transform = 'rotate(360deg)';
    document.querySelector('.footer').style.top = '350px'

  } else {
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[17].setAttribute('style', 'inline');
    popup.classList.remove('hidden')
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[21].setAttribute('style', 'inline');
    popup1.classList.remove('hidden')
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[19].setAttribute('style', 'inline');
    popup2.classList.remove('hidden');
    document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[23].setAttribute('style', 'inline');
    popup3.classList.remove('hidden');
    document.querySelector('.button').value = 'Скрыть';
    document.querySelector('#arrows').style.transform = 'rotate(180deg)';
    document.querySelector('.footer').style.top = '450px'

  }

});


window.addEventListener("DOMContentLoaded", () => {

  if (window.innerWidth < 780) {
    document.querySelector('.footer').style.top = '800px'
    let openPopupButton = document.querySelector('.footer');
openPopupButton.addEventListener('click', () => {
  if (!popup.classList.contains('hidden')) {
    document.querySelector('.footer').style.top = '750px'
  }else{
    document.querySelector('.footer').style.top = '550px'
  }
})
  } else {

  }



})