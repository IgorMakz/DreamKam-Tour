const mainSwiper = new Swiper('.main-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    speed: 800,
  });

const heroSwiper = new Swiper('.hero-swiper', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.hero-swiper-next',
      prevEl: '.hero-swiper-prev',
    },
    slidesPerView: 1,
    speed: 500,
  });

const block1Swiper = new Swiper('.block1-swiper', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.block1-swiper-next',
      prevEl: '.block1-swiper-prev',
    },
    slidesPerView: 1.5,
    speed: 500,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 20
      }
    }
});

const block2Swiper = new Swiper('.block2-swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.block2-swiper-next',
    prevEl: '.block2-swiper-prev',
  },
  slidesPerView: 1.5,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20
    }
  }
});

const block3Swiper = new Swiper('.block3-swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.block3-swiper-next',
    prevEl: '.block3-swiper-prev',
  },
  slidesPerView: 1.5,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20
    }
  }
});

const block5Swiper = new Swiper('.block5-swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.block5-swiper-next',
    prevEl: '.block5-swiper-prev',
  },
  slidesPerView: 1.5,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20
    }
  }
});

const block6Swiper = new Swiper('.block6-swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.block6-swiper-next',
    prevEl: '.block6-swiper-prev',
  },
  slidesPerView: 1.5,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20
    }
  }
});

const block7Swiper = new Swiper('.block7-swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.block7-swiper-next',
    prevEl: '.block7-swiper-prev',
  },
  slidesPerView: 1.5,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20
    }
  }
});