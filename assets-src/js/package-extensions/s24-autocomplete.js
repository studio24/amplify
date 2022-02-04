/**
 * Enhances a <select> element into an accessible autocomplete <input>
 * @see https://github.com/alphagov/accessible-autocomplete#progressive-enhancement
 */

import accessibleAutocomplete from 'accessible-autocomplete'

function simpleAccessibleAutocomplete (id) {

	var element = document.getElementById(id)

	if (element) {

		accessibleAutocomplete.enhanceSelectElement({
			confirmOnBlur: false,
			defaultValue: '',
			displayMenu: 'overlay',
			dropdownArrow: function (config) {
				return '<svg xmlns="http://www.w3.org/2000/svg" class="' + config.className + '" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>'
			},
			preserveNullOptions: true,
			selectElement: element,
			showAllValues: true,
		})

		// If a reset button is used to clear the input, reflect this in the underlying <select>
		// and collapse the dropdown menu
		function resetHandler() {

			// Clear autocomplete and hidden select
			var enhancedElement = element.parentElement.querySelector('input');
			enhancedElement.value = '';
			element.value = '';

			// Collapse the dropdown menu
			enhancedElement.click();
			enhancedElement.focus();
			enhancedElement.blur();

		}

		document.addEventListener('click', function (event) {

			if (event.target.matches('button[type="reset"]')) {

				resetHandler();

			}

		}, false);

	}

}

export default simpleAccessibleAutocomplete;