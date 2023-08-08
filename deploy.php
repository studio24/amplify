<?php
namespace Deployer;

/**
 * 1. Deployer recipes we are using for this website
 */
require 'recipe/common.php';
require 'vendor/studio24/deployer-recipes/recipe/common.php';

/**
 * 2. Deployment configuration variables
 */

// Friendly project name
set('application', 'Amplify');

// The repo for the project
set('repository', 'git@github.com:studio24/amplify.git');;

// Shared directories that are not in git and need to persist between deployments (e.g. uploaded images)
add ('shared_directories', [
    '.well-known'
]);

set('webroot', 'web');
set('git_ssh_command', 'ssh');

// Default stage - prevents accidental deploying to production with dep deploy
set('default_stage', 'staging');

/**
 * 3. Hosts
 */

host('production')
    ->set('hostname', '63.34.69.8')
    ->set('deploy_path', '/data/var/www/vhosts/amplify/production')
    ->set('url', 'https://amplify.studio24.net');

host('staging')
    ->set('hostname', '63.34.69.8')
    ->set('deploy_path', '/data/var/www/vhosts/amplify/staging')
    ->set('url', 'https://amplify-staging.studio24.net');


/**
 * 4. Deployment tasks
 *
 * Any custom deployment tasks to run
 */

