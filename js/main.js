
const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    speed: 1600,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + "</span>";
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        direction: 'vertical' } } });

let ViewportHeight = window.innerHeight;
let header = document.querySelector('.navbar');
let headerHeight = header.offsetHeight;

const allSwiper = document.querySelectorAll('.swiper-slide');
allSwiper.forEach(el => {
    el.style.height = `${ViewportHeight - headerHeight}px`;
})