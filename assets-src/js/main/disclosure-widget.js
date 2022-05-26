import {exists} from './_exists.helper';
import './_closest.polyfill.js';

/**
 * Simple disclosure widget
 * @see https://adrianroselli.com/2020/05/disclosure-widgets.html
 */

var disclosureWidget = function () {
	var toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));
	var closeDisclosures = function () {
		toggleButtonArray.forEach(function (btn) {
			if (btn.getAttribute('aria-expanded') === 'true') {
				btn.setAttribute('aria-expanded', 'false');
			}
		});
	}

	if (exists(toggleButtonArray)) {
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

			let key = event.key || event.keyCode;

			if (key === 'Escape' || key === 'Esc' || key === 27) {
				closeDisclosures();
			}
		});
	}
};

export {disclosureWidget};