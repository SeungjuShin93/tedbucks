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
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // hide badge
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
      // show #to-top
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // show badge
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
      // hide #to-top
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

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

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // Add a scene to monitor
    triggerElement: spyEl, // Specify the element to monitor for visibility
    triggerHook: 0.8, // Monitor visibility at 80% of the screen
  })
    .setClassToggle(spyEl, 'show') // Add the 'show' class when the element is visible on screen
    .addTo(new ScrollMagic.Controller()); // Assign the scene to the controller (required!)
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
