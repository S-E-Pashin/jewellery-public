/******/ (function() { // webpackBootstrap
!function() {
"use strict";
/*!***************************************!*\
  !*** ./source/js/login-open-close.js ***!
  \***************************************/


$(document).ready(function () {
  $('.header__login').click(function (e) {
    e.preventDefault();
    if ($('.login').hasClass('login')) {
      $('.login').removeClass('login--close').addClass('login--open');
      $('.body').addClass('body--restricted-travel');

      setTimeout(function () {
        $('#login-id-email').focus();
      }, 100);

      $('.login__button-close').click(function () {
        $('.login').removeClass('login--open').addClass('login--close');
        $('.body').removeClass('body--restricted-travel');
      });

      closingClickOverlayLogin();

      $(document).keydown(function (elem) {
        if (elem.key === 'Escape') {
          $('.login').removeClass('login--open').addClass('login--close');
          $('.body').removeClass('body--restricted-travel');
        }
      });
    }
  });

  var closingClickOverlayLogin = function () {
    $(document).mousedown(function (e) {
      if ($('.login').hasClass('login--open')) {
        var login = $('.login__wrapper');
        if (!login.is(e.target) && login.has(e.target).length === 0) {
          $('.login').removeClass('login--open').addClass('login--close');
          $('.body').removeClass('body--restricted-travel');
        }
      }
    });
  };
});

}();
!function() {
"use strict";
/*!*****************************************!*\
  !*** ./source/js/mail-local-storage.js ***!
  \*****************************************/


// $(document).ready(function () {
//   console.log(localStorage.inputLoginEmail);
// });

var inputLoginEmail = '';

$('#login-id-email').keyup(function () {
  inputLoginEmail = $('#login-id-email').val();
  localStorage.setItem('inputLoginEmail', inputLoginEmail);
});

}();
!function() {
"use strict";
/*!************************************!*\
  !*** ./source/js/menu-switcher.js ***!
  \************************************/


$(document).ready(function () {
  getSwitchClass();
  removeHeaderJs();

  $('.header__menu-switch').click(function () {

    if ($('.header').hasClass('header--js-close')) {
      removeSwitchClass();
      getHeaderJs();

    } else {
      getSwitchClass();
      removeHeaderJs();
    }
  });
});

var getSwitchClass = function () {
  if ($('.header').not('header--js-close')) {
    $('.header').addClass('header--js-close');
  }
};

var removeSwitchClass = function () {
  $('.header').removeClass('header--js-close');
};

var getHeaderJs = function () {
  if ($('.header').not('header--js')) {
    $('.header').addClass('header--js');
  }
};

var removeHeaderJs = function () {
  if ($('.header').hasClass('header--js')) {
    $('.header').removeClass('header--js');
  }
};

}();
!function() {
"use strict";
/*!***************************************!*\
  !*** ./source/js/popup-open-close.js ***!
  \***************************************/


$(document).ready(function () {
  $('.card__button-add').click(function () {
    if ($('.popup').hasClass('popup')) {
      $('.popup').removeClass('popup--close').addClass('popup--open');
      $('.body').addClass('body--restricted-travel');

      $('.popup__button-close').click(function () {
        $('.popup').removeClass('popup--open').addClass('popup--close');
        $('.body').removeClass('body--restricted-travel');
      });

      closingClickOverlay();

      $(document).keydown(function (e) {
        if (e.key === 'Escape') {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      });
    }
  });

  var closingClickOverlay = function () {
    $(document).mousedown(function (e) {
      if ($('.popup').hasClass('popup--open')) {
        var popup = $('.popup__wrapper');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      }
    });
  };
});

}();
!function() {
/*!******************************!*\
  !*** ./source/js/scripts.js ***!
  \******************************/
//

}();
!function() {
/*!**********************************!*\
  !*** ./source/js/shop-slider.js ***!
  \**********************************/
// const buttonLeft = $('.shop__arrow--prev');
// const buttonRight = $('.shop__arrow--next');
// const fieldSlider = $('.shop__field');
//
// $(document).ready(function(){
//   // $('.shop__field').slick({setting-name: setting-value});
//
//   $('.shop__field').slick({
//     infinite: true,
//     // adaptiveHeight: true,
//     // appendArrows: $('shop__arrow--prev'),
//     // centerPadding: '10px',
//
//     // prevArrow: <button type="button" className="shop__arrow shop__arrow--prev slick-prev"><svg className="shop__arrow-svg" width="40" height="11" viewBox="0 0 29 9" fill="none" xmlns="http://www.w3.org/2000/svg"><use xlink:href="img/sprite.svg#icon-shop-arrow"></use></svg></button>,
//     // nextArrow: ,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//
//     responsive: [
//       {
//         breakpoint: 1330,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           // dots: true
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           // dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
//
//   buttonLeft.click(function () {
//     slideToleft();
//   });
//
//   buttonRight.click(function () {
//     slideToRight();
//   });
//
//   // var currentSlide = $('.shop__field').slick('slickPrev');
//
//   const slideToleft = function () {
//     fieldSlider.slick('slickPrev')
//   }
//
//   const slideToRight = function () {
//     fieldSlider.slick('slickNext')
//   }
// });
//

}();
!function() {
"use strict";
/*!*********************************!*\
  !*** ./source/js/switch-faq.js ***!
  \*********************************/


$(document).ready(function () {

  $('.faq__item').click(function (e) {
    var target = e.target;

    if ($(target).hasClass('faq__item--close')) {
      $(target).removeClass('faq__item--close');

    } else {
      $(target).addClass('faq__item--close');
    }
  });

  var closeAllFaqItem = function () {
    $('.faq__item').addClass('faq__item--close');
  };

  closeAllFaqItem();
});

}();
!function() {
"use strict";
/*!*******************************************!*\
  !*** ./source/js/switch-filter-vision.js ***!
  \*******************************************/


$(document).ready(function () {
  var filter = $('.catalog__filter-wrapper');
  var filterSwitch = $('.catalog__switch-filter');
  var filterButtonClose = $('.filter__close-button');

  filterSwitch.click(function () {
    if (filterSwitch.hasClass('catalog__switch-filter--visible')) {
      filterSwitch.removeClass('catalog__switch-filter--visible');
      openFilter();
    } else {
      filterSwitch.addClass('catalog__switch-filter--visible');
    }
  });

  filterButtonClose.click(function () {
    closeFilter();
    showFilterSwitch();
  });

  var closeFilter = function () {
    filter.addClass('catalog__filter-wrapper--close');
  };

  var openFilter = function () {
    filter.removeClass('catalog__filter-wrapper--close');
  };

  var showFilterSwitch = function () {
    filterSwitch.addClass('catalog__switch-filter--visible');
  };

  closeFilter();
  showFilterSwitch();
});

}();
!function() {
"use strict";
/*!************************************!*\
  !*** ./source/js/switch-filter.js ***!
  \************************************/


$(document).ready(function () {

  $('.filter__header').click(function (e) {
    var target = e.target;

    if ($(target).is(':not(.filter__section-switch)')) {
      if ($(target).hasClass('filter__header--close')) {
        $(target).removeClass('filter__header--close');

        if ($(target).parent().hasClass('filter__section--close')) {
          $(target).parent().removeClass('filter__section--close');
        }
      } else {
        $(target).addClass('filter__header--close');
      }

      if ($(target).parent().hasClass('filter__section--close')) {
        //
      } else {
        $(target).parent().addClass('filter__section--close');
      }
    }
  });
});

var closeAllFaqItem = function () {
  $('.faq__item').addClass('faq__item--close');
};

closeAllFaqItem();

}();
/******/ })()
;