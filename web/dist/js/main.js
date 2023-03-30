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
      var clickableElems = Array.prototype.slice.call(card.querySelectorAll('[data-click]'));

      // Allow other links/buttons in the card to still be "clickable"
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
      var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsibles"]'));

      // Loop through headings
      headingsArray.forEach(function (heading, index) {
        // Insert a button for opening/closing the collapsible section
        heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' + '<span class="js-collapsible-heading">' + heading.innerHTML + '</span>' + '<span class="js-collapsible-toggle"><span class="visuallyhidden">, </span>' + '<span class="with-icon--before"><svg class="icon icon--24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41z" class="circle-down"/><path d="m12 9-4.5 4.5 1.41 1.41L12 11.83l3.09 3.09 1.41-1.411z" class="circle-up"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><span class="js-collapsible-label">Show</span><span class="visuallyhidden"> this section</span></span>' + '</span></button>';

        // Add appropriate aria role to the collapsible section
        heading.nextElementSibling.setAttribute('aria-hidden', 'true');

        // Assign the button
        var btn = heading.querySelector('button');
        var toggleText = btn.querySelector('.js-collapsible-label');

        // Add click event listener
        btn.addEventListener('click', function (event) {
          // Cast the state as a boolean
          var expanded = btn.getAttribute('aria-expanded') === 'true';

          // Switch the state
          btn.setAttribute('aria-expanded', !expanded);

          // Switch the collapsible section's visibility
          heading.nextElementSibling.setAttribute('aria-hidden', expanded);

          // Update the toggle text
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
      var containerWidth = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"), 10);

      // Get the table inside the table wrap, and it's width
      var table = item.firstElementChild;
      var tableWidth = parseInt(window.getComputedStyle(table, null).getPropertyValue("width"), 10);

      // Comparison: true if the container is wider than the table
      var noScroll = containerWidth >= tableWidth;
      var ariaLabel = item.querySelector('caption').id;

      // Only make the container focusable if it needs scrolling
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
/* harmony export */   "sortTable": function() { return /* binding */ sortTable; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * Table sort function
 * @param {Element} table - the top level table with data-component="sortable-table"
 */

var sortTable = function sortTable(table) {
  /*  All clickable table th / filtered out those with data-type="no-sort" attributes */
  var headers = _toConsumableArray(table.querySelectorAll('th')).filter(function (header) {
    return header.dataset.type !== 'no-sort';
  });
  var tableBody = table.querySelector('tbody');
  var rows = tableBody.querySelectorAll('tr');

  /*  Setting default sorting order to descending for all th with data-type="*" attribute */
  headers.map(function (header) {
    header.setAttribute('aria-sort', 'descending');
    convertThToBtn(header);
  });

  /*  Creates an array of th each represented as empty ''; */
  var directions = headers.map(function (header) {
    return '';
  });

  /**
   * Converts all table headers to clickable buttons and append svg arrows
   * @param {Element} heading - table th element 
   * @returns {Element} button - button created from table th element with wrapper which contains svg arrows
   */
  function convertThToBtn(heading) {
    var btn = document.createElement('button');
    var appendArrows = function appendArrows(btn) {
      var wrapper = document.createElement('div');
      var arrowsWrapper = "\n        <svg fill=\"currentColor\" focusable=\"false\"\n        aria-hidden=\"true\" class=\"desc icon icon--32\" viewBox=\"0 0 407.436 407.436\">\n          <polygon points=\"203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 \"/>\n        </svg>\n        <svg fill=\"currentColor\" focusable=\"false\"\n        aria-hidden=\"true\" class=\"asc icon icon--32\" viewBox=\"0 0 407.437 407.437\">\n          <polygon points=\"386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 \"/>\n        </svg>\n            ";
      wrapper.classList.add('arrow-wrapper');
      btn.textContent = heading.textContent;
      wrapper.innerHTML = arrowsWrapper;
      btn.appendChild(wrapper);
      return btn;
    };
    appendArrows(btn);
    heading.textContent = "";
    heading.appendChild(btn);
  }
  /**
   * @param {*} index - index of selected column to sort
   * @param {*} content - content to sort
   */
  var transform = function transform(index, content) {
    var type = headers[index].getAttribute('data-type');
    switch (type) {
      case 'number':
      case 'date':
        return parseFloat(content);
      case 'string':
      default:
        return content;
    }
  };
  /**
   * @param {Element} elementsToIterate - list of all active table cells in selected column 
   */
  var removeActiveClasses = function removeActiveClasses(elementsToIterate) {
    elementsToIterate.forEach(function (field) {
      field.classList.remove('active');
    });
  };
  /**
   * @param {Element} header - table th converted to button
   * @param {Element} index  - index of selected column to sort
   */
  var sortCol = function sortCol(header, index) {
    var newRows = Array.from(rows);
    var direction = directions[index] || 'ascending';
    var multiplier = direction === 'ascending' ? 1 : -1;
    header.setAttribute('aria-sort', direction === 'ascending' ? 'descending' : 'ascending');
    newRows.sort(function (rowA, rowB) {
      var cellA;
      var cellB;
      if (header.matches('[data-type="date"]')) {
        cellA = rowA.querySelectorAll('td')[index].getAttribute('data-date');
        cellB = rowB.querySelectorAll('td')[index].getAttribute('data-date');
      } else {
        cellA = rowA.querySelectorAll('td')[index].innerHTML;
        cellB = rowB.querySelectorAll('td')[index].innerHTML;
      }
      var a = transform(index, cellA);
      var b = transform(index, cellB);
      switch (true) {
        case a > b:
          return 1 * multiplier;
        case a < b:
          return -1 * multiplier;
        case a === b:
          return 0;
      }
    });
    rows.forEach(function (row) {
      return tableBody.removeChild(row);
    });
    directions[index] = direction === 'ascending' ? 'descending' : 'ascending';
    newRows.forEach(function (newRow) {
      return tableBody.appendChild(newRow);
    });
  };

  /**
   * @param {Element} header - table th converted to button
   * @param {Element} index - index of selected column to sort
  */
  headers.forEach(function (header, index) {
    header.addEventListener('click', function (e) {
      sortCol(header, index);
      var currentActiveFields = tableBody.querySelectorAll('.active');
      removeActiveClasses(currentActiveFields);
      var fieldsToHighlight = _toConsumableArray(rows).map(function (row) {
        return row.querySelectorAll('td')[index];
      });
      if (document.activeElement === e.target) {
        fieldsToHighlight.forEach(function (field) {
          field.classList.add('active');
        });
      } else {
        removeActiveClasses(fieldsToHighlight);
      }
    });
  });

  /*  Remove active class from table cells when events are triggered  */

  table.addEventListener('keyup', function (e) {
    var key = e.key;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      var currentActiveFields = tableBody.querySelectorAll('.active');
      removeActiveClasses(currentActiveFields);
    }
  });
  document.body.addEventListener('click', function (event) {
    if (!event.target.closest('[data-component="sortable-table"]')) {
      var currentActiveFields = tableBody.querySelectorAll('.active');
      removeActiveClasses(currentActiveFields);
    }
  });
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
/* harmony import */ var _main_sortable_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function domLoadedActions() {
  (0,_main_cards__WEBPACK_IMPORTED_MODULE_1__.cardEnhancement)();
  (0,_main_disclosure_widget__WEBPACK_IMPORTED_MODULE_3__.disclosureWidget)();
  (0,_main_form_error_summary__WEBPACK_IMPORTED_MODULE_4__.formErrorSummary)();

  /* Create sortable table */
  var tables = _toConsumableArray(document.querySelectorAll('table[data-component="sortable-table"]'));
  if ((0,_main_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(tables)) {
    tables.forEach(function (table) {
      return (0,_main_sortable_tables__WEBPACK_IMPORTED_MODULE_6__.sortTable)(table);
    });
  }
  // Needs to fire last as sortTable func may change table width
  // Otherwise, only resize event create responsive table 
  (0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_5__.responsiveTables)();

  /* Create a navSingleLevel object and initiate single-level navigation for a <ul> with the correct data-component attribute */
  var navExampleSingle = document.querySelector('ul[data-component="nav-single"]');
  if ((0,_main_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(navExampleSingle)) {
    var siteNav = new navSingleLevel(navExampleSingle, {
      breakpoint: 768
    });
    siteNav.init();
  }

  /* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
  var navExampleDouble = document.querySelector('ul[data-component="nav-double"]');
  if ((0,_main_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(navExampleDouble)) {
    var _siteNav = new navDoubleLevel(navExampleDouble, {
      breakpoint: 768,
      submenuDirection: 'horizontal'
    });
    _siteNav.init();
  }

  /* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
  var navDoubleIntro = document.querySelector('ul[data-component="nav-double-intro"]');
  if ((0,_main_exists_helper__WEBPACK_IMPORTED_MODULE_0__.exists)(navDoubleIntro)) {
    var _siteNav2 = new navDoubleLevel(navDoubleIntro, {
      breakpoint: 768,
      cloneTopLevelLink: false,
      submenuDirection: 'horizontal',
      submenuIntro: true
    });
    _siteNav2.init();
  }
}
if (document.readyState === 'loading') {
  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', domLoadedActions);
} else {
  // `DOMContentLoaded` has already fired
  domLoadedActions();
}

// Tie the responsiveTables function to a resize event, and debounce for performance
var timeout;
window.addEventListener('resize', function (event) {
  // If timer is null, reset it to 66ms and run desired functions.
  // Otherwise, wait until timer is cleared
  if (!timeout) {
    timeout = setTimeout(function () {
      // Reset timeout
      timeout = null;

      // Run our resize functions
      (0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_5__.responsiveTables)();
    }, 66);
  }
}, false);
}();
/******/ })()
;