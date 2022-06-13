import {exists} from './_exists.helper';

/**
 * Collapsible panels
 * @see https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 * @see https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/
 */

var collapsibles = function () {
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
					'<span class="with-icon--before"><svg class="icon icon--24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41z" class="circle-down"/><path d="m12 9-4.5 4.5 1.41 1.41L12 11.83l3.09 3.09 1.41-1.411z" class="circle-up"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><span class="js-collapsible-label">Show</span><span class="visuallyhidden"> this section</span></span>' +
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
};

export {collapsibles};