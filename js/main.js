const hotelSlider = new Swiper('.hotel-slider', {
   // Optional parameters
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
   },
   effect: "coverflow",
});
const reviewsSwiper = new Swiper('.reviews-swiper', {
   // Optional parameters
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.reviews-swiper__button-next',
      prevEl: '.reviews-swiper__button-prev',
   },
});


$('.parallax-window').parallax({ imageSrc: '/img/newsletter/newsletter-bg.jpg' });


var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
   console.log("Клик по кнопке меню");
   document
      .querySelector(".header-buttom")
      .classList.toggle("header__buttom-visible");
});