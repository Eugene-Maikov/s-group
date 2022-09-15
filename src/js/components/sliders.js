// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiperNews = new Swiper(".news__slider", {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".news__btn-next",
    prevEl: ".news__btn-prev",
  },
  clickable: true,

  pagination: {
    el: '.news-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const swiperPartners = new Swiper(".partners__slider", {
  slidesPerView: 6,
  spaceBetween: 50,

  navigation: {
    nextEl: ".partners__btn-next",
    prevEl: ".partners__btn-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    770: {
      slidesPerView: 6,
    },
  },
});
const swiperReviews = new Swiper(".reviews__slider", {
  slidesPerView: 2,
  spaceBetween: 30,

  navigation: {
    nextEl: ".reviews__btn-next",
    prevEl: ".reviews__btn-prev",
  },

  pagination: {
    el: '.reviews-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
