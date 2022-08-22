# Amplify

Front-End starter kit for Studio 24.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for how to deploy the project to staging and live environments. 

Also see more [detailed project documentation](docs/README.md).

### In this document

* [Site URLs](#site-urls)
* [Installing](#installing)
* [Making changes](#making-changes)
* [Deployment](#deployment)
* [Built with](#built-with)
* [Credits](#credits)

## Site URLs

### Live
* https://amplify.studio24.net
* https://amplify.studio24.net/_build_summary.json

### Staging
* https://staging.example.com
* https://staging.example.com/_build_summary.json

### Development
* http://local.amplify.studio24.net/

## Installing

### Requirements

- Node (check the `.nvmrc` file in the project root for latest version)
- [NPM](https://www.npmjs.com/)
- [NVM](https://github.com/creationix/nvm)
- [Composer](https://getcomposer.org/)
- [Deployer](https://deployer.org/docs/installation)

### Installing locally

A step-by-step set of instructions that tell you how to get your local dev environment running.

Clone repo:

````bash
git clone git@github.com:studio24/amplify.git
````

Install PHP dependencies:

```php
composer install
```

Install project dependencies:

````bash
# Switch your version of Node to the correct version for this project (see `.nvmrc`)
nvm use

npm install
````

Build front-end assets:

````bash
npm run build
````

There are also specific commands if you only want to build certain front-end assets:

````bash
nvm use 

# Copy font assets to the `dist` directory
npm run fonts

# Copy image assets to the `dist` directory (note they are **not optimised** as part of this step)
npm run images

# Optimise and then copy SVG assets to the `dist` directory
npm run svgs

# Compile the Sass partials into CSS files in the `dist` directory
npm run styles

# Compile, transpile and minify the JS files, place them in the `dist` directory
npm run js
````

Watch for changes:

````bash
npm run watch
````

* [More about CSS](docs/CSS.md)
* [More about JavaScript](docs/javascript.md)

### Configuration

#### NPM

If needed, update the `package.json` file in the project root to specify [which browsers are supported](docs/browser-support.md) (referenced by the CSS and JS build tools) and manage the packages and NPM scripts required to build the site assets.

#### SVG Optimizer

[SVG Optimizer](https://github.com/svg/svgo) is used to optimise SVG files. There is a `svgo.config.js` file in the project root to determine optimisation settings.

#### Webpack

[Webpack](https://webpack.js.org/) is used to compile, transpile and minify JavaScript files. There is a `webpack.config.js` file in the project root which controls this process.

#### Copying over JS libraries
If there are libraries that you would like to use as is in your project, set up Webpack to copy them across from the src folder to the dist folder.

##### If the script file is in a node_module
In the `webpack.config.js` file, add a 'from-to' pattern to the CopyPlugin configuration parameters, using the syntax:

```
{ from: "./../../node_modules/[node_package_name]/[path to the js file]]", to: "./libraries" }
```

##### If the script file is NOT in a node_module
In the `webpack.config.js` file, uncomment the following line from the CopyPlugin configuration parameters:

```
// { from: "./libraries/", to:  "./libraries" },
```

You can now add the script to the `assets-src/js/libraries` folder and run the full build script or the 'webpack-expanded' script.

## Making changes

Create a new branch for your work, then create a Pull Request when ready to merge changes into the `main` branch.

## Deployment

The site uses Deployer for deployment (installed via Composer). Please note if no branch is specified your current branch is used.

### Deploy to Live

You should always deploy the `main` branch to production.

````
./vendor/bin/dep deploy production --branch=main
````

### Deploy to Staging

The deploy process outputs a summary of what branch is currently deployed to staging, please check this to ensure you're not overwriting someone's work.

````
./vendor/bin/dep deploy staging --branch=branch-name-to-deploy
````

## Credits
- **Nicola Saunders** - *Front-End Lead Developer* - Studio 24
- **Marie Manandise** - *Senior Web Developer* - Studio 24

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Acknowledgements

Inspired by [Springer Nature Front End Playbook](https://github.com/springernature/frontend-playbook), [Every Layout](https://every-layout.dev/) and [CUBE CSS](https://cube.fyi/)