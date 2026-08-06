// This script builds the CSS files from the Sass source files
// it is run twice, once for expanded and once for compressed
// CSS using the MINIFY env variable
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import * as sass from 'sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssPrefixSelector from 'postcss-prefix-selector';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));

const root = path.resolve(__dirname, `./${pkg.config.from}`, './styles');
const outDir = path.resolve(__dirname, `./${pkg.config.to}`, './styles');

const minify = process.env.MINIFY === 'true';

fs.mkdirSync(outDir, { recursive: true });

for (const [name, file] of Object.entries(pkg.config.css.entries)) {

	const { css } = sass.compile(path.resolve(root, `${file}`), {
		style: minify ? 'compressed' : 'expanded',
		sourceMap: false,
	});

	const result = await postcss([autoprefixer]).process(css, {
		from: undefined,
		map: false,
	});

	const fileName = minify ? `${name}.min.css` : `${name}.css`;
	fs.writeFileSync(path.resolve(outDir, fileName), result.css);
}


// WordPress editor specific CSS file
// Not listed as an entry point, but still needs to be built and uses an additional
// plugin to target the editor only

// Only build if is WordPress and editor file is present
const editorFile = path.resolve(root, `editor.scss`);
if (pkg.config.isWordPress && fs.existsSync(editorFile)) {
	// Custom plugin to replace the prefix of the editor-specific CSS with a custom selector
	const editorCssPrefix = postcssPrefixSelector({
		prefix: '.editor-styles-wrapper',
		transform(prefix, selector) {
			// :root, html, body all become .editor-styles-wrapper so that
			// CSS variables and base styles are scoped to the editor canvas,
			// matching what WordPress Gutenberg does with add_editor_style()
			if ([':root', 'html', 'body'].includes(selector)) return prefix
			return `${prefix} ${selector}`
		},
	});

	// Build process
	const { css } = sass.compile(editorFile, {
		style: minify ? 'compressed' : 'expanded',
		sourceMap: false,
	});

	const result = await postcss([autoprefixer, editorCssPrefix]).process(css, {
		from: undefined,
		map: false,
	});

	const fileName = minify ? `editor.min.css` : `editor.css`;
	fs.writeFileSync(path.resolve(outDir, fileName), result.css);
} else if (pkg.config.isWordPress && !fs.existsSync(editorFile)) {
	console.warn('WordPress editor specific CSS file not found. Skipping build.');
}
