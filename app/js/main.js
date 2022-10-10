window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.industries__slider');
    new Swiper(sliderEl, {
      slidesPerView: 5,
      navigation: {
        nextEl: '.industries__slider .swiper-button-next',
        prevEl: '.industries__slider .swiper-button-prev',
      },
      breakpoints: {
        1900: {
          slidesPerView: 5,
        },
        1450: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.videos__slider');
    const parentEl = document.querySelector('.videos__content');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 25,
      navigation: {
        nextEl: document.querySelector('.videos__content .swiper-button-next'),
        prevEl: document.querySelector('.videos__content .swiper-button-prev'),
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 90) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 80) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  // * ===== toggleGrades
  (function toggleGrades() {
    const cards = document.querySelectorAll('.production-card');

    cards.forEach((card) => {
      if (card) {
        card.addEventListener('click', (e) => {
          if (e.target.matches('.production-card__show')) {
            card
              .querySelector('.production-card__overlay')
              .classList.toggle('active');
          }
        });
      }
    });
  })();

  // * ===== Change View Product
  (function changeView() {
    const list = document.querySelector('.production__list');
    const products = document.querySelectorAll('.production-card');
    const btnGrid = document.querySelector('.btn-grid');
    const btnList = document.querySelector('.btn-list');

    if (list) {
      btnGrid.addEventListener('click', (e) => {
        products.forEach((product) => {
          if (product) {
            product.className = 'production-card production-card--grid';
            list.classList.remove('production__list--list');
          }

          btnGrid.classList.add('active');
          btnList.classList.remove('active');
        });
      });

      btnList.addEventListener('click', (e) => {
        products.forEach((product) => {
          if (product) {
            product.className = 'production-card production-card--list';
            list.classList.add('production__list--list');
          }

          btnGrid.classList.remove('active');
          btnList.classList.add('active');
        });
      });
    }
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    menuCloseBtn.addEventListener('click', () => {
      menu.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-order', '.popup--order', '.popup__close');
  })();

  // * ===== Range Slider
  (function handlesSlider() {
    const parent = document.querySelector('.range-slider--diameter');

    if (parent) {
      const rangeSlider = parent.querySelector('.range-slider__range');
      const rangeSliderValue = parent.querySelector('.range-slider__value');

      noUiSlider.create(rangeSlider, {
        start: [500],
        connect: [true, false],
        range: {
          min: [377],
          max: [1920],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' мм.',
        }),
      });

      rangeSlider.noUiSlider.on('update', function (values, handle) {
        rangeSliderValue.value = values[handle];
      });
    }
  })();

  // * ===== Range Slider
  (function handlesSlider() {
    const parent = document.querySelector('.range-slider--thickness');

    if (parent) {
      const rangeSlider = parent.querySelector('.range-slider__range');
      const rangeSliderValue = parent.querySelector('.range-slider__value');

      noUiSlider.create(rangeSlider, {
        start: [20],
        connect: [true, false],
        range: {
          min: [3],
          max: [25],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' мм.',
        }),
      });

      rangeSlider.noUiSlider.on('update', function (values, handle) {
        rangeSliderValue.value = values[handle];
      });
    }
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 25,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * ===== toggleAccordion
  function toggleAccordion(accordionControl, accordionContent, accordion) {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  }

  toggleAccordion('.accordion-control', '.accordion-content', '.accordion');

  //   // * ===== Toggle Tabs
  //   function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //     const header = document.querySelectorAll(headerSelector);
  //     const tab = document.querySelectorAll(tabSelector);
  //     const content = document.querySelectorAll(contentSelector);

  //     header.forEach((el) => {
  //       if (el) {
  //         hideTabContent();
  //         showTabContent();
  //         function hideTabContent() {
  //           content.forEach((item) => {
  //             item.classList.remove('active');
  //           });
  //           tab.forEach((item) => {
  //             item.classList.remove(activeClass);
  //           });
  //         }
  //         function showTabContent(i = 0) {
  //           content[i].classList.add('active');
  //           tab[i].classList.add(activeClass);
  //         }
  //         header.forEach((item) => {
  //           if (item) {
  //             item.addEventListener('click', (e) => {
  //               const target = e.target;
  //               if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //                 tab.forEach((item, i) => {
  //                   if (target == item || target.parentNode == item) {
  //                     hideTabContent();
  //                     showTabContent(i);
  //                   }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  //   someTabs('.contacts', '.contacts-top__item', '.contacts__content', 'active');
});
