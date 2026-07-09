import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import * as sass from 'sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));

const root = path.resolve(__dirname, `./${pkg.config.from}`, './styles');
const outDir = path.resolve(__dirname, `./${pkg.config.to}`, './styles');

const minify = process.env.MINIFY === 'true';

const entries = ['core', 'advanced', 'print'];

fs.mkdirSync(outDir, { recursive: true });

for (const name of entries) {
	const { css } = sass.compile(path.resolve(root, `${name}.scss`), {
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
