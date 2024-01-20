// --------- Бургер-меню ---------
let burgerMenu = document.querySelector('.menu-burger')
let navMenu = document.querySelector('.header__nav')
burgerMenu.onclick = function() {
    this.classList.toggle('open-menu')
    navMenu.classList.toggle('open-menu')
    document.body.classList.toggle('fixed-page')
}


// --------- Аккордеон ---------
let tabItems = document.querySelectorAll('.tabs-item__title') 

tabItems.forEach((tab) => tab.addEventListener('click', function(){
    let content = tab.nextElementSibling
    // делаем флаг, который содержит - имеет ли текст класс active_tabs(который его раскрывает)
    let flg = content.classList.contains('active_tabs');
  // Удаляем все классы active_tabs и active-tab-icon
  document.querySelectorAll('.active_tabs').forEach((e) => {
    e.classList.remove('active_tabs');
  });
  document.querySelectorAll('.active-tab-icon').forEach((e) => {
    e.classList.remove('active-tab-icon');
  });
  // Если выбранный блок текста не имел active_tabs, добавляем класс
    if(!flg) {
        content.classList.toggle('active_tabs')
        tab.classList.toggle('active-tab-icon')
    }
}))


// --------- Попап ---------
    let buttons = document.querySelectorAll('.btn__button')
    let popup = document.querySelector('.popup__overlay')
    let closeP = document.querySelectorAll('.popup img')

    buttons.forEach(element => {
        element.addEventListener('click', () => {
            popup.classList.add('active')
            document.body.classList.add('fixed-page')
        })
    })
    closeP.forEach((element) => {
        element.addEventListener('click', () => {
            popup.classList.remove('active')
            document.body.classList.remove('fixed-page')
        })
    })
    document.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.classList.remove('active')
            document.body.classList.remove('fixed-page')  // почему не работает??? 
        }
    })
        
        
// Карточки-адвокаты
let lawyers = document.querySelectorAll('.lawyers__item')
let hovers = document.querySelectorAll('.hover')
lawyers.forEach((e) => {
    e.onclick = () => {
        e.firstElementChild.classList.toggle('act')   // или children[0]
    }
})


const swiper = new Swiper('#slider', {
  //стрелки 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: false,
                   
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // работает по принципу mobile first
    slidesPerView: 1,

    spaceBetween: 15,


    breakpoints: {

        768: {
                slidesPerView: 2, 
                slidesPerGroup: 2,
                spaceBetween: 20,
        },

        1024: {
               enabled: false, 
               slidesPerView: 4,
        }

    }
    // loop: true,
})

AOS.init({
    once: true
 });
