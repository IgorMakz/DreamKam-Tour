//Плавный скрол
const smoothLinks = document.querySelectorAll('.transition');
if(smoothLinks.length > 0) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href').replace('#','');
            const currentBlock = document.getElementById(id);
            currentBlock.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}
//Бургер меню
const menuOpen = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu-burger');
const menuClose = document.querySelector('.menu-close');
const menuLink = document.querySelectorAll('.menu-link');
menuOpen.addEventListener('click', ()=> {
    menu.classList.add('active')
});
menuClose.addEventListener('click', ()=> {
    menu.classList.remove('active')
});

menuLink.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('active')
    })
})

//Прокрутка страницы до начала страницы
const btnUp = document.querySelector('.btn-up');

btnUp.addEventListener('click', ()=> {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
})

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}