import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { build } from 'vite';
import browserslistToEsbuild from 'browserslist-to-esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));

const root = path.resolve(__dirname, `./${pkg.config.from}`, './js');
const outDir = path.resolve(__dirname, `./${pkg.config.to}`, './js');
const target = browserslistToEsbuild();
const minify = process.env.MINIFY === 'true';

// Each entry is bundled independently (rather than as a single multi-entry
// build) because Rollup's iife/umd output formats don't support the
// code-splitting Vite otherwise introduces for multi-entry app builds.
// Entries are added with the `entries` key in the package.json config.
for (const [name, file] of Object.entries(pkg.config.js.entries)) {
	await build({
		root,
		configFile: false,
		publicDir: false,
		logLevel: 'warn',
		build: {
			outDir,
			emptyOutDir: false,
			target,
			sourcemap: false,
			minify: minify ? 'esbuild' : false,
			lib: {
				entry: path.resolve(root, file),
				name: name.replace(/[^a-zA-Z0-9]/g, '_'),
				formats: ['iife'],
				fileName: () => minify ? `${name}.min.js` : `${name}.js`,
			},
		},
	});
}

// Coping libraries that are directly references over to the dist folder
// without bundling them. For this to work, all the libraries need to be
// installed as dependencies in the package.json so they can be found in the
// node_modules folder.
// Libraries are added with the `libraries` key in the package.json config.
fs.mkdirSync(path.resolve(outDir, 'libraries'), { recursive: true });

for (const [input, output] of Object.entries(pkg.config.js.libraries)) {
	fs.copyFileSync(
		path.resolve(__dirname, 'node_modules/', input),
		path.resolve(outDir, 'libraries/', output),
	);
}
