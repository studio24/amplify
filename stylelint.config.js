/** @type {import('stylelint').Config}
 *
 * The following CSS rules have been disabled:
 * color-hex-length
 * comment-whitespace-inside rule
 *
 * The following SCSS rules have been disabled:
 * scss/at-extend-no-missing-placeholder
 * scss/dollar-variable-colon-space-after
 * scss/dollar-variable-empty-line-before
 * scss/dollar-variable-pattern
 * scss/double-slash-comment-empty-line-before
 *
 * A custom rule has been added to allow classes using the BEM syntax - see https://github.com/humanmade/coding-standards/issues/193#issuecomment-1405099508
 * */
export default {
	extends: ["stylelint-config-standard-scss"],
	"rules": {
		"color-hex-length": null,
		"comment-whitespace-inside": null,
		"scss/at-extend-no-missing-placeholder": null,
		"scss/dollar-variable-colon-space-after": null,
		"scss/dollar-variable-empty-line-before": null,
		"scss/dollar-variable-pattern": null,
		"scss/double-slash-comment-empty-line-before": null,
		/** selector class pattern must match [BEM CSS](https://en.bem.info/methodology/css) - [Regex](https://regexr.com/3apms) */
		'selector-class-pattern': [
			'^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
			{
				/** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
				resolveNestedSelectors: true,
				/** Custom message */
				message: function expected(selectorValue) {
					return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
				},
			},
		],
	}
};