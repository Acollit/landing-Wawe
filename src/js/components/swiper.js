import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
const swiper = new Swiper(".blog__swiper", {
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
