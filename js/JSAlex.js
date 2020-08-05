var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  effect: 'fade',
  navigation: {
    nextEl: '.js-header-slider-right',
    prevEl: '.js-header-slider-left'
  },
  initialSlide: 1,
  slidesPerView: 'auto',
  spaceBetween: 10,
  fadeEffect: {
    crossFade: true
  }
});
