/**
 * Helper function to check whether element exists
 * Attached to window to make sure it is available globally
 * @param elem
 * @return {boolean}
 */
window.exists = function(elem) {
	return (elem !== 'undefined' && elem !== null && (elem.length >= 0 || elem.innerHTML.length >= 0))
};