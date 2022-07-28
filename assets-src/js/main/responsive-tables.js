import {exists} from './_exists.helper';

/**
 * Responsive tables
 * Tab index changed from 0 to -1 if there is no horizontal overflow
 * @see https://www.tpgi.com/short-note-on-improving-usability-of-scrollable-regions/
 */

var responsiveTables = function () {

	// Get all the table wraps
	var tablesArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="table-wrap"]'));

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

export {responsiveTables};