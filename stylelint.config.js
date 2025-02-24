/** @type {import('stylelint').Config}
 *
 * Starting rulesets:
 * - https://stylelint.io/user-guide/rules
 * - https://github.com/stylelint-scss/stylelint-scss?tab=readme-ov-file#list-of-rules
 *
 * The following CSS rules have been completely disabled:
 * color-hex-length (Specify short or long notation for hex colors)
 * comment-whitespace-inside (Require or disallow whitespace on the inside of comment markers)
 *
 * The following SCSS rules have been completely disabled:
 * scss/at-extend-no-missing-placeholder (Disallow @extend with missing placeholders)
 * scss/dollar-variable-colon-space-after (Require or disallow whitespace after the colon in $-variable declarations)
 * scss/dollar-variable-empty-line-before (Require an empty line or disallow empty lines before $-variable declarations)
 * scss/dollar-variable-pattern (Specify a pattern for Sass-like variables)
 * scss/double-slash-comment-empty-line-before (Require or disallow an empty line before //-comments)
 *
 * A custom regex-based rule has been added to allow classes using BEM syntax.
 * Modified from https://github.com/humanmade/coding-standards/issues/193#issuecomment-1405099508
 * to support our BEM implementation (which is a bit less strict than some)
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
		/** selector class pattern must match [BEM CSS](https://en.bem.info/methodology/css) */
		"selector-class-pattern": [
			"^[a-z]([-]?[a-z0-9]+)*((__)?(--)?[a-z0-9]([-]?[a-z0-9]+)*)*$",
			{
				/** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
				resolveNestedSelectors: true,
				/** Custom message */
				message: function expected(selectorValue) {
					return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
				},
			},
		],
		"declaration-property-unit-disallowed-list": {
			"font-size": ["px"],
			"line-height": ["px"]
		},
	}
};