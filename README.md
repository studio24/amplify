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
* [Syncing tasks](#syncing-tasks)
* [Built with](#built-with)
* [Credits](#credits)

## Site URLs

### Live
* https://www.example.com
* https://www.example.com/_build_summary.json

### Staging
* https://staging.example.com
* https://staging.example.com/_build_summary.json

### Development
* http://local.amplify.studio24.net/

## Installing

### Requirements

- PHP 7.4
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

There are also specific commands if you only want to compile certain front-end assets:

````bash
nvm use 

# Copy font assets to the `dist` directory
npm run fonts

# Copy image assets to the `dist` directory (note they are *not optimised* as part of this step)
npm run images

# Optimise and then copy SVG assets to the `dist` directory
npm run svgs

# Compile the Sass partials into CSS files in the `dist` directory
npm run styles

# Compile, transpile and minify the JS files, place them in the `dist` directory
npm run js
````

### Configuration

#### NPM

If needed, update the `package.json` file in the project root to specify which browsers are supported (referenced by the CSS and JS build tools) and manage the packages and NPM scripts required to build the site assets.

#### SVG Optimizer

[SVG Optimizer](https://github.com/svg/svgo) is used to optimise SVG files. There is a `svgo.config.js` file in the project root to determine optimisation settings.

#### Webpack

[Webpack](https://webpack.js.org/) is used to compile, transpile and minify JavaScript files. Two files exist in the project root to determine these settings:

* `webpack.config.js` for the non-minified version
* `webpack.config.min.js` for the minified version

## Making changes

To make changes to code first work on a branch and create a Pull Request to merge changes into the `main` branch.

All changes to the `main` branch need to pass [continuous integration](docs/continuous-integration.md) tests (PHP linting, PHP code standards).

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

## Syncing tasks

Sync files from production or staging to your local development environment. These are setup in the `deploy.php` script, see the [sync](https://github.com/studio24/deployer-recipes/blob/main/docs/sync.md) task for more.

#### Sync assets: Live → Local development

````bash
./vendor/bin/dep sync production --files=images
````
#### Sync assets: Staging → Local development

````bash
./vendor/bin/dep sync staging --files=images
````

## Credits
- **Nicola Saunders** - *Front-End Lead Developer* - Studio 24
