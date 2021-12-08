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
/* harmony export */   "cardEnhancement": function() { return /* binding */ cardEnhancement; }
/* harmony export */ });
/**
 * Card enhancement to trigger the main link whenever the card area is clicked
 * See https://css-tricks.com/block-links-the-search-for-a-perfect-solution/
 */

var cardEnhancement = (function () {

	var cardsArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="card"]'));

	if (exists(cardsArray)) {

		// Loop through cards adding a click event and identifying the main link
		cardsArray.forEach(function (card, index) {

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

			card.addEventListener('click', function() {

				var noTextSelected = !window.getSelection().toString();
				if (noTextSelected) {

					mainLink.click();

				}

			});

		});

	}

})();



/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapsibles": function() { return /* binding */ collapsibles; }
/* harmony export */ });
/**
 * Collapsible sections
 * See https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
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
				heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' + heading.innerHTML + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="30px" height="30px"><use class="angle-down" href="/dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="/dist/assets/svg/nav-icons.svg#angle-up"></use></svg></button>';

				// Add appropriate aria role to the collapsible section
				heading.nextElementSibling.setAttribute('aria-hidden', 'true');

				// Assign the button
				var btn = heading.querySelector('button');

				// Add click event listener
				btn.addEventListener('click', function(event){

					// Cast the state as a boolean
					var expanded = btn.getAttribute('aria-expanded') === 'true';

					// Switch the state
					btn.setAttribute('aria-expanded', !expanded);

					// Switch the collapsible section's visibility
					heading.nextElementSibling.setAttribute('aria-hidden', expanded);

				});

			}); // End loop

		}); // End loop

	} // End if statement

})();



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disclosureWidget": function() { return /* binding */ disclosureWidget; }
/* harmony export */ });
var disclosureWidget = (function () {

	let toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));

	let closeDisclosures = function () {

		toggleButtonArray.forEach(function (btn) {

			if (btn.getAttribute('aria-expanded') === 'true') {

				btn.setAttribute('aria-expanded', 'false');

			}

		});

	}

	if (exists(toggleButtonArray)) {

		toggleButtonArray.forEach(function (btn) {

			btn.style = "";
			btn.setAttribute('aria-expanded', 'false');

		});

		document.addEventListener('click', function (event) {

			if (event.target.matches('[data-toggle="true"]')) {

				if (event.target.matches('[aria-expanded="false"]')) {

					closeDisclosures();
					event.target.setAttribute('aria-expanded', 'true');

				} else {

					event.target.setAttribute('aria-expanded', 'false');

				}

			} else {

				closeDisclosures();

			}

		});

		document.addEventListener('keyup', function (event) {

			if (event.defaultPrevented) {
				return;
			}

			let key = event.key || event.keyCode;

			if (key === 'Escape' || key === 'Esc' || key === 27) {

				closeDisclosures();

			}

		});

	}

})();



/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formErrorSummary": function() { return /* binding */ formErrorSummary; }
/* harmony export */ });
var formErrorSummary = (function () {

	let errorSummary = document.querySelector('[data-component="error-summary"]');

	if (exists(errorSummary)) {

		errorSummary.focus();

	}

})();



/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": function() { return /* binding */ navigation; }
/* harmony export */ });
var navigation = (function () {

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector;
	}

	if (!Element.prototype.closest) {
		Element.prototype.closest = function(s) {
			var el = this;

			do {
				if (Element.prototype.matches.call(el, s)) return el;
				el = el.parentElement || el.parentNode;
			} while (el !== null && el.nodeType === 1);
			return null;
		};
	}

	let nav = document.querySelector('.global-nav__inner ul');
	let mobileNavToggler = document.querySelector('[data-trigger="mobile-nav"]');
	mobileNavToggler.style = "";
	let menuIcon = '<svg class="icon icon--larger" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="1em" height="1em"><use class="menu-icon" href="/dist/assets/svg/nav-icons.svg#menu-icon"></use><use class="close-icon" href="/dist/assets/svg/nav-icons.svg#close-icon"></use></svg>';
	let parentLinks = [].slice.call(nav.querySelectorAll('.top-nav-item.has-children > a'));
	let subNavArray = [].slice.call(nav.querySelectorAll('.nav__submenu'));

	// I18N for 'Menu' button text
	let menuText = 'Menu';
	if (document.documentElement.lang === 'ja') {
		menuText = 'メニュー';
	} else if (document.documentElement.lang === 'zh-hans') {
		menuText = '菜单';
	}

	// I18N for 'Main menu' back button text
	let backText = 'Back to main menu';
	if (document.documentElement.lang === 'ja') {
		backText = 'メインメニューに戻る';
	} else if (document.documentElement.lang === 'zh-hans') {
		backText = '返回主菜单';
	}

	let closeSubNavs = function () {
		let subNavTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="subnav"]'));
		subNavTriggers.forEach(function (trigger) {
			trigger.setAttribute('aria-expanded', 'false');
			trigger.removeAttribute('class');
		});
	}

	// Toggle mobile navigation
	let toggleMobileNav = function () {

		if (mobileNavToggler && nav) {

			mobileNavToggler.innerHTML = menuText + menuIcon;
			mobileNavToggler.setAttribute('aria-expanded', 'false');

			document.addEventListener('click', function (event) {

				if (event.target.matches('[data-trigger="mobile-nav"]')) {

					if (event.target.getAttribute('aria-expanded') === 'false') {

						event.target.setAttribute('aria-expanded', 'true');

					} else {

						event.target.setAttribute('aria-expanded', 'false');
						closeSubNavs();

					}

				}

			}, false);

		}

	}

	// Media query event handler
	let mq = window.matchMedia('(min-width: 70em)');
	mq.addListener(WidthChange);
	WidthChange(mq);

	// Media query change
	function WidthChange(mq) {
		if (!(mq.matches)) {
			toggleMobileNav();
		} else {
			mobileNavToggler.setAttribute('aria-expanded', 'true');
		}
	}

	if (exists(parentLinks)) {

		parentLinks.forEach(function (item) {

			let clonedLink = item.cloneNode(true);
			let linkText = item.textContent + '&nbsp;';
			let toggleButton = document.createElement('button');
			let backButton = document.createElement('button');
			let fragment = document.createDocumentFragment();
			let subNav = item.parentNode.querySelector('.nav__submenu__intro');
			let submenuFirstChild = subNav.querySelector('.nav__submenu__intro__text');

			toggleButton.setAttribute('type', 'button');
			toggleButton.setAttribute('aria-expanded', 'false');
			toggleButton.setAttribute('data-trigger', 'subnav');
			toggleButton.innerHTML = linkText + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon nav-small" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="/dist/assets/svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="/dist/assets/svg/nav-icons.svg#angle-right"></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon nav-wide" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-down" href="/dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="/dist/assets/svg/nav-icons.svg#angle-up"></use></svg>';

			backButton.setAttribute('type', 'button');
			backButton.setAttribute('class', 'button button--ghost u-full-width with-icon--before with-icon--larger');
			backButton.setAttribute('data-trigger', 'mobile-back');
			backButton.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="/dist/assets/svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="/dist/assets/svg/nav-icons.svg#angle-right"></use></svg>' + backText;

			fragment.appendChild(backButton);
			fragment.appendChild(clonedLink);

			subNav.insertBefore(fragment, submenuFirstChild);
			item.parentNode.replaceChild(toggleButton, item);

		});

		for (let i = 0; i < subNavArray.length; i++) {

			subNavArray[i].style = "";

		}

		document.addEventListener('click', function (event) {

			if (event.target.matches('[data-trigger="subnav"]')) {

				if (event.target.matches('[aria-expanded="false"]')) {

					closeSubNavs();
					event.target.setAttribute('aria-expanded', 'true');
					event.target.setAttribute('class', 'js-active');

				} else {

					event.target.setAttribute('aria-expanded', 'false');
					event.target.removeAttribute('class');

				}

			} else if (event.target.matches('[data-trigger="mobile-back"]')) {

				event.target.closest('li').querySelector('[data-trigger="subnav"]').setAttribute('aria-expanded', 'false');

			} else {

				closeSubNavs();

			}

		});

		document.addEventListener('keyup', function (event) {

			if (event.defaultPrevented) {
				return;
			}

			let key = event.key || event.keyCode;

			if (key === 'Escape' || key === 'Esc' || key === 27) {

				closeSubNavs();

			}

		});

	}

})();



/***/ }),
/* 7 */
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
/* harmony import */ var _main_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _main_collapsibles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _main_disclosure_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _main_form_error_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _main_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _main_responsive_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);








(0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_6__.responsiveTables)();

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
			(0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_6__.responsiveTables)();

		}, 66);
	}

}, false);

}();
/******/ })()
;