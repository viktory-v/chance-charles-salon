/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (fontID, fontUrl) {
  var forceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  new FontLoader(fontID, fontUrl, forceUpdate);
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global theme */

var FontLoader = exports.FontLoader = function () {
  /**
   * @param {string} fontID - unique font ID.
   * @param {string} fontUrl - font url.
   * @param {boolean} (forceUpdate) - fonts are loaded if they are not already in the local storage, if you specify true,
   *                                  they will be overwritten in any case, default false.
   */
  function FontLoader(fontID, fontUrl) {
    var forceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, FontLoader);

    this._ID = this._toCamelCase(fontID);
    this._url = fontUrl;
    this._keyCss = 'fontLoaderCss' + this._ID;
    this._keyUrl = 'fontLoaderUrl' + this._ID;

    if (forceUpdate || this._needUpdate()) {
      this._update();
    }
  }

  _createClass(FontLoader, [{
    key: '_needUpdate',
    value: function _needUpdate() {
      return this._url !== localStorage.getItem(this._keyUrl) || !localStorage.getItem(this._keyCss);
    }
  }, {
    key: '_update',
    value: function _update() {
      var _this = this;

      localStorage.setItem(this._keyUrl, this._url);
      localStorage.setItem(this._keyCss, '');

      if (this._url.startsWith('http')) {
        fetch(this._url).then(function (response) {
          return response.text();
        }).then(function (css) {
          return _this.css = css;
        }).then(function () {
          var promises = _this.css.match(/(url\(['"]?)(https:\/\/)?[^)"']+/g).map(_this._replace.bind(_this));

          return Promise.all(promises).then(function () {
            _this._insert();
            localStorage.setItem(_this._keyCss, _this.css);
          });
        });
      } else {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = this._url;

        document.head.appendChild(link);
      }
    }
  }, {
    key: '_replace',
    value: function _replace(url) {
      var _this2 = this;

      var replaceUrl = url.replace(/^url\(['"]?/, '');

      url = replaceUrl.startsWith('http') ? replaceUrl : theme.url + 'fonts/' + replaceUrl;

      return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
          return response.blob();
        }).then(function (blob) {
          var self = _this2;
          var reader = new FileReader();

          reader.addEventListener('load', function () {
            self.css = self.css.replace(replaceUrl, this.result.toString());
            resolve();
          });

          reader.readAsDataURL(blob);
        }).catch(reject);
      });
    }
  }, {
    key: '_insert',
    value: function _insert() {
      var style = document.createElement('style');
      style.rel = 'stylesheet';
      document.head.appendChild(style);
      style.textContent = this.css;
    }
  }, {
    key: '_toCamelCase',
    value: function _toCamelCase(str) {
      return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) {
        return chr.toUpperCase();
      });
    }
  }]);

  return FontLoader;
}();

/**
 * @param {string} fontID - unique font ID.
 * @param {string} fontUrl - font url.
 * @param {boolean} [forceUpdate=false] - fonts are loaded if they are not already in the local storage, if you specify
 *                                        true, they will be overwritten in any case, default false.
 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _googleFontsLoader = __webpack_require__(3);

var _googleFontsLoader2 = _interopRequireDefault(_googleFontsLoader);

var _fontsLoader = __webpack_require__(0);

var _fontsLoader2 = _interopRequireDefault(_fontsLoader);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../../woo/js';

//import './map';
//import './popups';
(0, _googleFontsLoader2.default)(["Lato:300,400,500,600,700,900", "Italiana:300,400,500,600,700,900"]);
//import './block';
//import './blog';
/* eslint-disable no-var */


(0, _fontsLoader2.default)('AM+AMB', theme.url + 'fonts/fonts.css');

jQuery(function ($) {
  var $diplomas_popup = $('.section-diplomas .popup');
  if ($diplomas_popup.length) {
    var $diplomas_popup_img = $diplomas_popup.find('img').eq(0);
    $('.section-diplomas .diplomas img').on('click', function (e) {
      $diplomas_popup.addClass('show');
      $diplomas_popup_img.attr('src', this.src);
    });
    $diplomas_popup.on('click', function () {
      $diplomas_popup.removeClass('show');
    });
  }

  $('.btn').on('click', function () {
    $('.calendly-badge-content').trigger('click');
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleFontsLoader = undefined;
exports.getGoogleFontsUrlByFonts = getGoogleFontsUrlByFonts;

exports.default = function (fonts) {
  new GoogleFontsLoader(fonts);
};

var _fontsLoader = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Array of strings that enumerate fonts, format of string "font name:weight(separated by commas)"
 * @typedef {string[]} googleFonts
 */

/**
 * @param {googleFonts} fonts
 */
function getGoogleFontsUrlByFonts(fonts) {
  var format_fonts = [];
  var url = 'https://fonts.googleapis.com/css';
  var text = 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789,.!?&%$#@;:/|\\\'"`^{}[]()<>+=*~';

  fonts.forEach(function (font) {
    var parts = font.split(':');
    parts[0] = parts[0].replace(/ /g, '+');
    format_fonts.push(parts.join(parts.length === 2 && parts[1] !== '' ? ':' : ''));
  });

  return url + '?family=' + format_fonts.join('%7C') + '&text=' + encodeURIComponent(text);
}

var GoogleFontsLoader = exports.GoogleFontsLoader = function (_FontLoader) {
  _inherits(GoogleFontsLoader, _FontLoader);

  /**
   * @param {googleFonts} fonts
   */
  function GoogleFontsLoader(fonts) {
    _classCallCheck(this, GoogleFontsLoader);

    return _possibleConstructorReturn(this, (GoogleFontsLoader.__proto__ || Object.getPrototypeOf(GoogleFontsLoader)).call(this, 'google', getGoogleFontsUrlByFonts(fonts)));
  }

  return GoogleFontsLoader;
}(_fontsLoader.FontLoader);

/**
 * @param {googleFonts} fonts
 */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global jQuery, theme, grecaptcha */

var $ = jQuery;
var gravityFormsReloadStorage = {};
var gravityFormsCheckPopupIntervalsStorage = {};

window.wldReCaptchaInit = function () {
  var $reCaptchaFields = $(theme.reCaptchaInvisibleHolderClassName);

  $reCaptchaFields.each(function () {
    var $form = $(this).closest('form');

    reCaptchaInit($form, getGravityFormID($form));
  });
};

$(function () {
  var $reCaptchaFields = $(theme.reCaptchaInvisibleHolderClassName);
  if ($reCaptchaFields.length) {
    $reCaptchaFields.closest('form').one('focus', ':input', function () {
      $('head').append($('<script/>').attr('src', 'https://www.google.com/recaptcha/api.js?onload=wldReCaptchaInit&render=explicit'));
    });
  }

  var $gravityFormsWrappers = $('.gform_wrapper');
  if ($gravityFormsWrappers.length) {
    $gravityFormsWrappers.each(function () {
      var $gravityForm = $(this);
      var gravityFormId = getGravityFormID($gravityForm);

      gravityFormsReloadStorage[gravityFormId] = new GravityFormsReload($gravityForm, gravityFormId);
    });
  }
});

$(document).on('gform_confirmation_loaded', function (event, gravityFormId) {
  if (typeof gravityFormsReloadStorage[gravityFormId] !== 'undefined') {
    gravityFormsReloadStorage[gravityFormId].reloadForm();
  }
}).on('gform_post_render', function (event, gravityFormId, currentPage) {
  if (currentPage) {
    reCaptchaInit($('#gform_' + gravityFormId), gravityFormId);
  }
});

var GravityFormsReload = function () {
  function GravityFormsReload($gform, gFormId) {
    _classCallCheck(this, GravityFormsReload);

    this.$parent = $gform.parent();
    this.html = this.$parent.html();
    this.gFormId = gFormId;
  }

  _createClass(GravityFormsReload, [{
    key: 'reloadForm',
    value: function reloadForm() {
      var $message = this.$parent.find('#gform_confirmation_wrapper_' + this.gFormId);
      if ($message.length) {
        this.$parent.html(this.html).append($message);

        $(document).trigger('gform_post_render', [this.gFormId, 1]);
      }
    }
  }]);

  return GravityFormsReload;
}();

function getGravityFormID($form) {
  if ($form.is('[id^="gform_"]')) {
    return parseInt($form.attr('id').match(/\d+$/)[0], 10);
  }

  return 0;
}

function reCaptchaInit($form) {
  var gFormId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var $holder = $form.find(theme.reCaptchaInvisibleHolderClassName);

  if (typeof grecaptcha !== 'undefined' && typeof grecaptcha.render !== 'undefined' && typeof theme !== 'undefined' && $holder.is(':empty')) {
    var holderId = grecaptcha.render($holder.get(0), {
      'sitekey': theme.reCaptchaInvisibleSiteKey,
      'size': 'invisible',
      'badge': theme.reCaptchaInvisibleBadgePosition,
      'callback': function callback() {
        $form.trigger('submit', [true, true]);
      },
      'expired-callback': function expiredCallback() {
        grecaptcha.reset(holderId);
      }
    });

    $form.on('submit', function (e, i, executedRecaptcha) {
      if (!executedRecaptcha) {
        e.preventDefault();
        grecaptcha.execute(holderId);

        if (gFormId) {
          $('#gform_confirmation_message_' + gFormId).remove();

          setTimeout(function () {
            if (!gravityFormsCheckPopupIntervalsStorage[gFormId]) {
              gravityFormsCheckPopupIntervalsStorage[gFormId] = setInterval(function () {
                var $iframe = $('iframe[src*="recaptcha/api2/bframe"]');

                // Exit if has open recaptcha
                if ($iframe.length) {
                  for (var _i = 0; _i < $iframe.length; _i++) {
                    if ('visible' === $iframe.eq(_i).parent().parent().css('visibility')) {
                      return;
                    }
                  }
                }

                $('#gform_ajax_spinner_' + gFormId + ':not(.verification-passed)').hide();
                clearInterval(gravityFormsCheckPopupIntervalsStorage[gFormId]);
                gravityFormsCheckPopupIntervalsStorage[gFormId] = false;
              }, 1000);
            }
          }, 500);
        }
      } else {
        if (gFormId) {
          $('#gform_ajax_spinner_' + gFormId).addClass('verification-passed').show();
        }
      }
    });
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(function ($) {
  //Mobile menu open/close
  var openbtn = document.getElementById('open-button');
  var isOpen = false;

  function toggleMenu() {
    if (isOpen) {
      $('body').removeClass('show-menu');
    } else {
      $('body').addClass('show-menu');
    }
    isOpen = !isOpen;
  }

  $('#open-button').on('click', toggleMenu);
  $('#close-button').on('click', toggleMenu);
  $('.content-wrap').on('click', function (_ref) {
    var target = _ref.target;

    if (isOpen && target !== openbtn) {
      toggleMenu();
    }
  });

  // mobile menu expand/minimize
  var $hasChildrenItem = $('.menu-wrap .menu-item-has-children');
  $hasChildrenItem.prepend('<div class="expand-btn"></div>');
  $('.expand-btn').on('click', function (event) {
    var $menuItem = $(event.currentTarget).parent();
    var $parentItem = $(event.currentTarget).parent().parent();

    if ($menuItem.hasClass('open')) {
      $parentItem.find('.menu-item-has-children').removeClass('open');
    } else {
      $parentItem.find('.menu-item-has-children').removeClass('open');
      $menuItem.addClass('open');
    }
  });

  //sticky header
  var sticky = $('#sticky-header');
  var stickyHeaderTop = sticky[0].clientHeight;
  $(document).on('scroll', function () {
    if ($(window).scrollTop() > stickyHeaderTop) {
      sticky.addClass('fixed').removeClass('unfixed');
    } else {
      sticky.removeClass('fixed').addClass('unfixed');
    }
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  jQuery.fn.lightTabs = function (options) {
    var createTabs = function createTabs() {
      var tabs = this;
      var showPage = function showPage(i) {
        $(tabs).find('.tab').hide().eq(i).show();
        $(tabs).find('.tabs-nav').each(function (index, element) {
          $(element).find('li').removeClass('active').eq(i).addClass('active');
        });
      };

      // Initialize tabs and show first tab content
      showPage(0);

      // Add data attributes with tab-content index
      $(tabs).find('.tabs-nav').each(function (index, element) {
        $(element).find('li').each(function (index, element) {
          $(element).attr('data-page', index);
        });
      });

      // Add event listener on each tab
      $(tabs).find('.tabs-nav li').on('click', function () {
        showPage(parseInt($(this).attr('data-page')));
      });

      //select tab by hash
      var hash = window.location.hash;
      if (hash && $('.tabs-nav li[data-hash="' + hash + '"]').length) {
        $('.tabs-nav li[data-hash="' + hash + '"]').trigger('click');
      }
      ;
    };

    return this.each(createTabs);
  };
})(jQuery);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var elements = document.querySelectorAll('[data-1x]'),
      size = is2x() ? '2x' : '1x',
      l = elements.length;

  for (var i = 0; i < l; i++) {
    setBackgroundImage(elements[i]);
  }

  function setBackgroundImage(element) {
    var url = element.getAttribute('data-' + size);

    if (!url) {
      url = element.getAttribute('data-1x');
    }

    element.style.backgroundImage = 'url(' + url + ')';
  }

  function is2x() {
    return window.devicePixelRatio && window.devicePixelRatio >= 2;
  }
})();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global jQuery */
jQuery(function ($) {
  var $testimonials_slider = $(".section-testimonials .slider");
  var $testimonials_images = $(".section-testimonials .images");
  var $diplomas_slider = $(".section-diplomas .diplomas");

  if ($testimonials_slider.length || $testimonials_images.length || $diplomas_slider.length) {
    __webpack_require__.e/* require.ensure */(0).then((function (require) {
      __webpack_require__(11);
      __webpack_require__(13);

      $testimonials_slider.slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });

      $testimonials_images.slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000
        // responsive: [
        //   {
        //     breakpoint: 990,
        //     settings: {
        //       autoplay: true,
        //       autoplaySpeed: 5000,
        //     }
        //   },
        // ]
      });

      $diplomas_slider.slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000
        // responsive: [
        //   {
        //     // breakpoint: 990,
        //     settings: {
        //       autoplay: true,
        //       autoplaySpeed: 3000,
        //     }
        //   },
        // ]
      });
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(function ($) {
  var $header = $('#sticky-header'),
      fix = 18,
      mediaBreakPoint = 992;

  $(window).on('load', function () {
    setTimeout(function () {
      if (location.hash) {
        window.scrollTo(0, 0);
        maybeScrollTo(location.hash);
      }
    }, 1);
  });

  $(document).on('click', 'a[href*="#"]:not([href="#"]):not([href*="popup"]):not(.popup-link)', function (e, runMaybeNeedClick) {
    if ($(this).parent().hasClass('popup-link')) {
      return;
    }

    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      if (e) {
        e.preventDefault();
      }

      maybeScrollTo(this.hash, e, runMaybeNeedClick);
    }
  });

  function maybeNeedClick(id, link) {
    var $links = $('[href="#' + id + '"]');
    if (link) {
      $links = $links.not(link);
    }

    if ($links.length) {
      $links.eq(0).trigger('click', [true]);

      return true;
    }

    return false;
  }

  function maybeScrollTo(hashOrIdOrName, event, runMaybeNeedClick) {
    if (hashOrIdOrName.startsWith('#')) {
      hashOrIdOrName = hashOrIdOrName.slice(1);
    }

    if (true !== runMaybeNeedClick && maybeNeedClick(hashOrIdOrName, event && event.currentTarget)) {
      return;
    }

    var $target = $('#' + hashOrIdOrName);
    if (0 === $target.length) {
      $target = $('[name=' + hashOrIdOrName + ']');
    }

    scrollTo($target);
  }

  function scrollTo($target) {
    if ($target.length) {
      var offset = $target.offset().top - fix;
      var top = offset;

      if ($(window).width() > mediaBreakPoint) {
        top = offset - $header.outerHeight();
      }

      $('html,body').animate({ scrollTop: top }, 1000, function () {
        if ($(window).width() > mediaBreakPoint) {
          $('html,body').animate({ scrollTop: offset - $header.outerHeight() }, 100);
        }
      });
    }
  }

  $.fn.wldScrollTo = function () {
    if (this && this.length) {
      scrollTo($(this).eq(0));
    }

    return this;
  };
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(function ($) {
  //opening external and files links in new tab, exclude #, tel: and mailto:
  $('a:not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]):not([href^="javascript:void(0)"]):not(.target-self)').filter(function () {
    var isExternal = this.hostname !== window.location.hostname,
        isFile = ~this.pathname.indexOf('.') && -1 === this.pathname.indexOf('.php');
    return isExternal || isFile;
  }).attr({
    'target': '_blank',
    'rel': 'noopener'
  });
});

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);
//# sourceMappingURL=init.js.map