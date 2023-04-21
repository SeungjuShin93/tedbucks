const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'search');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // Number of slides per view
  spaceBetween: 10, // Spacing between slides
  centeredSlides: true, // Show first slide in the center
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    // Enable slide pagination
    el: '.promotion .swiper-pagination', // Selector for pagination element
    clickable: true, // Allow user to control page number element
  },
  navigation: {
    // Enable previous/next slide buttons
    prevEl: '.promotion .swiper-prev', // Selector for previous button
    nextEl: '.promotion .swiper-next', // Selector for next button
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});
