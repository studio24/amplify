<?php
namespace Deployer;

/**
 * 1. Deployer recipes we are using for this website
 */
require_once 'vendor/studio24/deployer-recipes/recipe/default.php';


/**
 * 2. Deployment configuration variables
 */

// Project name
set('application', 'Amplify');

// Git repo
set('repository', 'git@github.com:studio24/amplify.git');

// Filesystem volume we're deploying to
set('disk_space_filesystem', '/data');

// Shared directories that need to persist between deployments
set('shared_dirs', [
    '.well-known',
]);

// Writable directories
set('writable_dirs', [
]);


/**
 * 3. Hosts
 */

host('production')
    ->set('hostname', '63.34.69.8')
    ->set('deploy_path', '/data/var/www/vhosts/amplify/production')
    ->set('log_files', [
        '/data/logs/amplify.access.log',
        '/data/logs/amplify.error.log',
    ])
    ->set('url', 'https://amplify.studio24.net');

host('staging')
    ->set('hostname', '63.34.69.8')
    ->set('deploy_path', '/data/var/www/vhosts/amplify/staging')
    ->set('log_files', [
        '/data/logs/amplify-staging.access.log',
        '/data/logs/amplify-staging.error.log',
    ])
    ->set('url', 'https://amplify-staging.studio24.net');


/**
 * 4. Deployment tasks
 *
 * Any custom deployment tasks to run
 */

// PHP-FPM reload
after('deploy', 'php-fpm:reload');
