import {exists} from './_exists.helper';

/**
 * Shift focus to form error summary, if present
 * @see https://design-system.service.gov.uk/components/error-summary/#how-it-works
 */
var formErrorSummary = function () {
	var errorSummary = document.querySelector('[data-component="error-summary"]');

	if (exists(errorSummary)) {
		errorSummary.focus();
	}
};

export {formErrorSummary};