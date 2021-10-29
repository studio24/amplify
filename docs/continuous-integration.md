# Continuous Integration setup

## Github actions

We use [GitHub actions](https://docs.github.com/en/actions) to run automated actions on any merge into the default branch (main).

## PHP

Config: [`.github/workflows/php.yml`](../.github/workflows/php.yml)

Tests the project across different versions of PHP. The default workflow runs:

* [PHP linting](#php-linting) - is the code syntax valid?
* [Code formatting](#code-formatting) - does the PHP code meet our coding standards?
* [Tests](#tests) - do automated tests run?

### PHP linting

We use [PHPLint](https://github.com/overtrue/phplint) to test PHP files for syntax errors. This package runs a lot faster 
than trying to run a bash command for `php -l`.

Config: [`.phplint.yml`](../.phplint.yml)

By default, we exclude the vendor folder and test all other PHP files in the project.

Run manually via `./vendor/bin/phplint`

### Code formatting

We use [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) to test PHP files to ensure they meet our coding 
standards. This helps maintenance and working in a team.

Config: [`.phpcs.xml.dist`](../.phpcs.xml.dist)

Our coding standard is:

* [PSR-12](https://www.php-fig.org/psr/psr-12/)
* Require [`declare(strict_types=1);`](https://www.php.net/language.types.declarations#language.types.declarations.strict) at top of PHP files
* Skip declare & class naming rules for `tests/*` (so we can skip namespaces & have multiple classes per file in a test)

By default, we test PHP files in the paths `src` and `tests`. Edit this path if your PHP files are stored elsewhere (see the `file` tag).

If you need to exclude certain files within these folders use the `exclude-pattern` tag, e.g.:

```xml
<exclude-pattern>path/to/*</exclude-pattern>
```
Run manually via `./vendor/bin/phpcs`

#### Fixing code issues automatically

Use PHP Code Beautifier and Fixer (`phpcbf`) to automatically fix code issues. 

Run manually via `./vendor/bin/phpcbf`

### Tests

#### PHPUnit

We use [PHPUnit](https://phpunit.de/) for writing unit tests, testing small components of code. 

Config: [`phpunit.xml.dist`](../phpunit.xml.dist) 

By default this is set up to run tests in the [`tests/`](../tests/) folder and code coverage in the `src/` folder. 
See [composing a test suite using XML config](https://phpunit.readthedocs.io/en/9.5/organizing-tests.html?highlight=phpunit.xml#composing-a-test-suite-using-xml-configuration) 
and the [XML config file docs](https://phpunit.readthedocs.io/en/9.5/configuration.html). 
If you wish, you can override configuration with a local `phpunit.xml` file that isn't checked into git.

Read [how to write unit tests](https://phpunit.readthedocs.io/en/9.5/writing-tests-for-phpunit.html).

Run manually via `./vendor/bin/phpunit`
