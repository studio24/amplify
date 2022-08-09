/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exists": function() { return /* binding */ exists; }
/* harmony export */ });
/**
 * Check whether an element exists in the DOM
 * @param elem
 * @return {boolean}
 */
var exists = function exists(elem) {
  return elem !== 'undefined' && elem !== null && (elem.length >= 0 || elem.innerHTML.length >= 0);
};



/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardEnhancement": function() { return /* binding */ cardEnhancement; }
/* harmony export */ });
/* harmony import */ var _exists_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Card enhancement to trigger the main link whenever the card area is clicked
 * @see https://css-tricks.com/block-links-the-search-for-a-perfect-solution/
 */

var cardEnhancement = function cardEnhancement() {
  var cardsArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="card"]'));

  if ((0,_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(cardsArray)) {
    // Loop through cards adding a click event and identifying the main link
    cardsArray.forEach(function (card) {
      var mainLink = card.querySelector('.card__link');
      var clickableElems = Array.prototype.slice.call(card.querySelectorAll('[data-click]')); // Allow other links/buttons in the card to still be "clickable"

      if (clickableElems) {
        clickableElems.forEach(function (elem) {
          return elem.addEventListener("click", function (event) {
            return event.stopPropagation();
          });
        });
      }

      card.addEventListener('click', function () {
        var noTextSelected = !window.getSelection().toString();

        if (noTextSelected) {
          mainLink.click();
        }
      });
    });
  }
};



/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapsibles": function() { return /* binding */ collapsibles; }
/* harmony export */ });
/* harmony import */ var _exists_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Collapsible panels
 * @see https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 * @see https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/
 */

var collapsibles = function collapsibles() {
  // Get all the collapsible containers
  var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsibles"]'));

  if ((0,_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(collapseArray)) {
    // Loop through containers
    collapseArray.forEach(function (item) {
      // Get headings inside a collapsible container
      var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsibles"]')); // Loop through headings

      headingsArray.forEach(function (heading, index) {
        // Insert a button for opening/closing the collapsible section
        heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' + '<span class="js-collapsible-heading">' + heading.innerHTML + '</span>' + '<span class="js-collapsible-toggle"><span class="visuallyhidden">, </span>' + '<span class="with-icon--before"><svg class="icon icon--24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41z" class="circle-down"/><path d="m12 9-4.5 4.5 1.41 1.41L12 11.83l3.09 3.09 1.41-1.411z" class="circle-up"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><span class="js-collapsible-label">Show</span><span class="visuallyhidden"> this section</span></span>' + '</span></button>'; // Add appropriate aria role to the collapsible section

        heading.nextElementSibling.setAttribute('aria-hidden', 'true'); // Assign the button

        var btn = heading.querySelector('button');
        var toggleText = btn.querySelector('.js-collapsible-label'); // Add click event listener

        btn.addEventListener('click', function (event) {
          // Cast the state as a boolean
          var expanded = btn.getAttribute('aria-expanded') === 'true'; // Switch the state

          btn.setAttribute('aria-expanded', !expanded); // Switch the collapsible section's visibility

          heading.nextElementSibling.setAttribute('aria-hidden', expanded); // Update the toggle text

          if (expanded == true) {
            toggleText.textContent = 'Show';
          } else {
            toggleText.textContent = 'Hide';
          }
        });
      }); // End loop
    }); // End loop
  } // End if statement

};



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disclosureWidget": function() { return /* binding */ disclosureWidget; }
/* harmony export */ });
/* harmony import */ var _exists_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _closest_polyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _closest_polyfill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_closest_polyfill_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Simple disclosure widget
 * @see https://adrianroselli.com/2020/05/disclosure-widgets.html
 */

var disclosureWidget = function disclosureWidget() {
  var toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));

  var closeDisclosures = function closeDisclosures() {
    toggleButtonArray.forEach(function (btn) {
      if (btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  };

  if ((0,_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(toggleButtonArray)) {
    toggleButtonArray.forEach(function (btn) {
      btn.removeAttribute('style');
      btn.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-toggle="true"]')) {
        var toggleTarget = event.target.nextElementSibling;

        if (event.target.matches('[aria-expanded="false"]')) {
          closeDisclosures();
          event.target.setAttribute('aria-expanded', 'true');
          toggleTarget.setAttribute('data-item-expanded', 'true');
        } else {
          event.target.setAttribute('aria-expanded', 'false');
          toggleTarget.removeAttribute('data-item-expanded');
        }
      } else if (event.target.closest('[data-item-expanded="true"]')) {
        // Do nothing - user is interacting with the expanded content
        return;
      } else {
        closeDisclosures();
      }
    });
    document.addEventListener('keyup', function (event) {
      if (event.defaultPrevented) {
        return;
      }

      var key = event.key || event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        closeDisclosures();
      }
    });
  }
};



/***/ }),
/* 5 */
/***/ (function() {

/**
 * Element.closest polyfill for IE
 * Needed for disclosure widget
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formErrorSummary": function() { return /* binding */ formErrorSummary; }
/* harmony export */ });
/* harmony import */ var _exists_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Shift focus to form error summary, if present
 * @see https://design-system.service.gov.uk/components/error-summary/#how-it-works
 */

var formErrorSummary = function formErrorSummary() {
  var errorSummary = document.querySelector('[data-component="error-summary"]');

  if ((0,_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(errorSummary)) {
    errorSummary.focus();
  }
};



/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsiveTables": function() { return /* binding */ responsiveTables; }
/* harmony export */ });
/* harmony import */ var _exists_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Responsive tables
 * Tab index changed from 0 to -1 if there is no horizontal overflow
 * @see https://www.tpgi.com/short-note-on-improving-usability-of-scrollable-regions/
 */

var responsiveTables = function responsiveTables() {
  // Get all the table wraps
  var tablesArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="table-wrap"]'));

  if ((0,_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(tablesArray)) {
    // Loop through them
    tablesArray.forEach(function (item) {
      // Get the parent element of the table wrap, and it's width
      var container = item.parentElement;
      var containerWidth = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"), 10); // Get the table inside the table wrap, and it's width

      var table = item.firstElementChild;
      var tableWidth = parseInt(window.getComputedStyle(table, null).getPropertyValue("width"), 10); // Comparison: true if the container is wider than the table

      var noScroll = containerWidth >= tableWidth;
      var ariaLabel = item.querySelector('caption').id; // Only make the container focusable if it needs scrolling

      if (noScroll === true) {
        item.removeAttribute('role');
        item.removeAttribute('aria-labelledby');
        item.removeAttribute('tabindex');
      } else {
        item.setAttribute('role', 'region');
        item.setAttribute('aria-labelledby', ariaLabel);
        item.setAttribute('tabindex', '0');
      }
    }); // End loop
  } // End if statement

};



/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navDoubleLevel": function() { return /* binding */ navDoubleLevel; }
/* harmony export */ });
/* harmony import */ var _closest_polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _closest_polyfill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_closest_polyfill_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Object for creating double-level navigation menus
 * Inspired by https://github.com/mrwweb/clicky-menus/blob/main/clicky-menus.js
 * Uses event delegation to handle events for improved performance
 * Also manages button for toggling navigation on mobile
 */

var navDoubleLevel = function navDoubleLevel(menu) {
  var container = menu.parentElement;
  var mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');

  this.init = function () {
    mobileToggleSetup();
    menuSetup();
    document.addEventListener('click', clickHandler);
    document.addEventListener('keyup', closeOnEscKey);
  };

  function closeSubmenus() {
    var subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('button'));
    subNavTriggers.forEach(function (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    });
  }

  function clickHandler(event) {
    if (event.target.matches('[data-trigger="mobile-nav"]')) {
      if (event.target.matches('[aria-expanded="true"]')) {
        closeSubmenus();
        event.target.setAttribute('aria-expanded', 'false');
      } else {
        event.target.setAttribute('aria-expanded', 'true');
      }
    } else if (event.target.matches('[data-trigger="sub-nav"]')) {
      if (event.target.matches('[aria-expanded="true"]')) {
        event.target.setAttribute('aria-expanded', 'false');
      } else {
        closeSubmenus();
        event.target.setAttribute('aria-expanded', 'true');
      }
    } else {
      closeSubmenus();
    }
  } // function closeOnEscKey(event) {
  //     if (event.defaultPrevented) {
  //         return;
  //     }
  //
  //     let key = event.key || event.keyCode;
  //
  //     if (key === 'Escape' || key === 'Esc' || key === 27) {
  //         closeAllOpenMenus()
  //     }
  // }


  function closeOnEscKey(event) {
    if (event.defaultPrevented) {
      return;
    }

    var key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
      var subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('[data-trigger="sub-nav"]'));
      var result = true;

      for (var i = 0; i < subNavTriggers.length; i++) {
        if (subNavTriggers[i].getAttribute('aria-expanded') === 'true') {
          result = false;
          break;
        }
      }

      if (result && mobileToggle.style.display === 'block') {
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        closeSubmenus();
      }
    }
  }

  function mobileToggleSetup() {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.style.display = 'block'; // Corresponds to $bp-tab-landscape Sass variable (1024px)

    var mq = window.matchMedia('(min-width: 64em)');
    mq.addListener(WidthChange);
    WidthChange(mq); // Media query change

    function WidthChange(mq) {
      if (!mq.matches) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.style.display = 'block';
      } else {
        mobileToggle.setAttribute('aria-expanded', 'true');
        mobileToggle.style.display = 'none';
      }
    }
  }

  function menuSetup() {
    var submenus = Array.prototype.slice.call(menu.querySelectorAll('ul'));
    submenus.forEach(function (submenu) {
      var menuItem = submenu.parentElement;

      if ('undefined' !== typeof submenu) {
        var button = convertLinkToButton(menuItem);
        setUpAria(submenu, button);
      }
    });
  }
  /**
   * Why do this? See https://justmarkup.com/articles/2019-01-21-the-link-to-button-enhancement/
   */


  function convertLinkToButton(menuItem) {
    var link = menuItem.getElementsByTagName('a')[0];
    var linkClone = link.cloneNode(true);
    var linkHTML = link.innerHTML;
    var linkAtts = link.attributes;
    var icon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true">' + '<path class="control-vertical" d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />' + '<path class="control-horizontal" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>' + '</svg>';
    var button = document.createElement('button');
    button.setAttribute('data-trigger', 'sub-nav');
    var li = document.createElement('li');
    var subMenu = link.nextElementSibling;

    if (null !== link) {
      // copy button attributes and content from link
      button.innerHTML = linkHTML.trim();
      button.innerHTML = button.innerHTML + icon;

      for (var i = 0, length = linkAtts.length; i < length; i++) {
        var attr = linkAtts[i];

        if ('href' !== attr.name) {
          button.setAttribute(attr.name, attr.value);
        }
      } // insert cloned link as first item of submenu list


      li.appendChild(linkClone);
      subMenu.insertBefore(li, subMenu.children[0]);
      menuItem.replaceChild(button, link);
    }

    return button;
  }

  function setUpAria(submenu, button) {
    var submenuId = submenu.getAttribute('id');
    var id;

    if (null === submenuId) {
      id = 'js-' + button.textContent.trim().replace(/\s+/g, '-').toLowerCase() + '-submenu';
    } else {
      id = 'js-' + submenuId + '-submenu';
    } // set button ARIA


    button.setAttribute('aria-controls', id);
    button.setAttribute('aria-expanded', false); // set submenu ARIA

    submenu.setAttribute('id', id);
  }
};



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_exists_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _main_collapsibles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _main_disclosure_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _main_form_error_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _main_responsive_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _main_nav_double_level__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);








function domLoadedActions() {
  (0,_main_cards__WEBPACK_IMPORTED_MODULE_1__.cardEnhancement)();
  (0,_main_collapsibles__WEBPACK_IMPORTED_MODULE_2__.collapsibles)();
  (0,_main_disclosure_widget__WEBPACK_IMPORTED_MODULE_3__.disclosureWidget)();
  (0,_main_form_error_summary__WEBPACK_IMPORTED_MODULE_4__.formErrorSummary)();
  (0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_5__.responsiveTables)();
  /* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */

  var navigation = document.querySelector('ul[data-component="nav-double"]');

  if ((0,_main_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(navigation)) {
    var siteNav = new _main_nav_double_level__WEBPACK_IMPORTED_MODULE_6__.navDoubleLevel(navigation);
    siteNav.init();
  }
}

if (document.readyState === 'loading') {
  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', domLoadedActions);
} else {
  // `DOMContentLoaded` has already fired
  domLoadedActions();
} // Tie the responsiveTables function to a resize event, and debounce for performance


var timeout;
window.addEventListener('resize', function (event) {
  // If timer is null, reset it to 66ms and run desired functions.
  // Otherwise, wait until timer is cleared
  if (!timeout) {
    timeout = setTimeout(function () {
      // Reset timeout
      timeout = null; // Run our resize functions

      (0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_5__.responsiveTables)();
    }, 66);
  }
}, false);
}();
/******/ })()
;