# masonry-grid-generator

An AngularJs app that generates CSS for use with David Desandro's Masonry plug-in

## Requisites

This code was created in a build process using:

- [Ruby](http://rubyinstaller.org/)
- [Sass gem for Ruby](http://sass-lang.com/install)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/)
- [Yeoman and its dependencies](http://yeoman.io/)
- [generator-angular for Yeoman](https://github.com/yeoman/generator-angular)

## Dev Environment Set-Up

Use Yeoman to scaffold a project using generator-angular, including Bootstrap and Sass.

Copy the contents of the app folder from this repo into the app folder created by generator-webapp.

## Developing and Building

Switch to the webapp's parent folder.

- `grunt serve` runs a test web server which listens to changes in the app folder and provides JavaScript linting, Sass compilation and live reload.
- `grunt dist` builds the project into a "dist" folder.

## JSHint Tests

No tests at present, so some will need to be written, or the relevant Grunt tasks disabled in the interim.
