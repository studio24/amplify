/**
 * Shift focus to form error summary, if present
 * @see https://design-system.service.gov.uk/components/error-summary/#how-it-works
 */
var formErrorSummary = function () {
	var firstError = document.querySelector('[data-component="error-summary"] li:first-of-type a');

	if (firstError) {
		firstError.focus();
	}
};

export {formErrorSummary};