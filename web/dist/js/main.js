/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function() {

/**
 * Helper function to check whether element exists
 * Attached to window to make sure it is available globally
 * @param elem
 * @return {boolean}
 */
window.exists = function(elem) {
	return (elem !== 'undefined' && elem !== null && (elem.length >= 0 || elem.innerHTML.length >= 0))
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapsibles": function() { return /* binding */ collapsibles; }
/* harmony export */ });
/**
 * Collapsible panels
 * @see https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 * @see https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/
 */

var collapsibles = (function () {

	// Get all the collapsible containers
	var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsibles"]'));

	if (exists(collapseArray)) {

		// Loop through containers
		collapseArray.forEach(function (item) {

			// Get headings inside a collapsible container
			var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsibles"]'));

			// Loop through headings
			headingsArray.forEach(function (heading, index) {

				// Insert a button for opening/closing the collapsible section
				heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' +
					'<span class="js-collapsible-heading">' + heading.innerHTML + '</span>' +
					'<span class="js-collapsible-toggle"><span class="visuallyhidden">, </span>' +
					'<span class="with-icon--before"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41z" class="circle-down"/><path d="m12 9-4.5 4.5 1.41 1.41L12 11.83l3.09 3.09 1.41-1.411z" class="circle-up"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><span class="js-collapsible-label">Show</span></span>' +
					 '</span></button>';

				// Add appropriate aria role to the collapsible section
				heading.nextElementSibling.setAttribute('aria-hidden', 'true');

				// Assign the button
				var btn = heading.querySelector('button');
				var toggleText = btn.querySelector('.js-collapsible-label');

				// Add click event listener
				btn.addEventListener('click', function(event){
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

})();



/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsiveTables": function() { return /* binding */ responsiveTables; }
/* harmony export */ });
/**
 * Responsive tables
 * Tab index changed from 0 to -1 if there is no horizontal overflow
 */

var responsiveTables = function () {

	// Get all the table wraps
	let tablesArray = Array.prototype.slice.call(document.querySelectorAll('.table-wrap'));

	if (exists(tablesArray)) {

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
				item.removeAttribute('aria-labelledby')
				item.removeAttribute('tabindex');

			} else {

				item.setAttribute('role', 'region');
				item.setAttribute('aria-labelledby', ariaLabel);
				item.setAttribute('tabindex', '0');

			}

		}); // End loop

	} // End if statement

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
/* harmony import */ var _main_exists_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_exists_helper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_collapsibles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _main_responsive_tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);


// import {cardEnhancement} from "./main/cards";
// import {disclosureWidget} from "./main/disclosure-widget";
// import {formErrorSummary} from "./main/form-error-summary";
// import {navigation} from "./main/navigation";


(0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_2__.responsiveTables)();

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
			(0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_2__.responsiveTables)();

		}, 66);
	}

}, false);

}();
/******/ })()
;