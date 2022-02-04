import {exists} from "./_helpers";

/**
 * Simple disclosure widget
 * @see https://adrianroselli.com/2020/05/disclosure-widgets.html
 */

var disclosureWidget = (function () {

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

export {disclosureWidget};