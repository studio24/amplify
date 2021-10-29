# Amplify

Work in progress

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
* https://www.example.com/cms-admin
* https://www.example.com/_build_summary.json

### Staging
* https://staging.example.com
* https://staging.example.com/cms-admin
* https://staging.example.com/_build_summary.json

### Development
* https://local.example.com
* https://local.example.com/cms-admin

## Installing

### Requirements

- PHP 7.4
- Node v12.16.0
- [NPM](https://www.npmjs.com/)
- [NVM](https://github.com/creationix/nvm)
- [Composer](https://getcomposer.org/)
- [Deployer](https://deployer.org/docs/installation)

### Installing locally

A step-by-step set of instructions that tell you how to get your local dev environment running.

Clone repo:

````bash
git clone git@github.com:studio24/project-base-template.git
````

Install PHP dependencies:

```php
composer install
```

Install project dependencies:

````bash
# Switch your version of Node to the correct version for this project (see `.nvmrc`)
nvm use

cd web/wp-content/themes/example
npm install
````

Build assets:

````bash
cd web/wp-content/themes/example
npm build
````

Watch for changes:

````bash
cd web/wp-content/themes/example
npm watch
````

### Configuration

Any details on configuration files required. 

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

The deploy process outputs a summary of what branch is currently deployed to staging, please check this to ensure you're 
not overwriting someone's work.

````
./vendor/bin/dep deploy staging --branch=branch-name-to-deploy
````

## Syncing tasks

Sync files from production or staging to your local development environment. These are setup in the `deploy.php` script, 
see the [sync](https://github.com/studio24/deployer-recipes/blob/main/docs/sync.md) task for more.

#### Sync assets: Live → Local development

````bash
./vendor/bin/dep sync production --files=images
````
#### Sync assets: Staging → Local development

````bash
./vendor/bin/dep sync staging --files=images
````

## Built with

- [Wordpress 5](https://codex.wordpress.org/) - CMS
- [Apollo 2](https://apollo.studio24.net/) - Front-end starter kit

## Credits
- **Name** - *Role* - Studio 24
- **Name** - *Role* - Studio 24
- **Name** - *Role* - Studio 24
