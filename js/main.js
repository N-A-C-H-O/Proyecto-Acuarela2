
var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
      var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      768: {
        direction: 'horizontal' } } });
  //# sourceURL=pen.js

var ViewportHeight = window.innerHeight;
const allSwiper = document.querySelectorAll('.swiper-slide');
allSwiper.forEach(el => {
    el.style.height = `${ViewportHeight}px`;
})

const sliderItem3 = document.querySelector('.carousel-item__3');

if (innerWidth >= 320 && innerWidth < 1024) {
  sliderItem3.remove()
}