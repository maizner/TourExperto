Marco sass - Gulp - Nunjucks
======

What this framework does for you:

* Clean and minify JavaScript.
* Compile sass with [`libSass`](https://github.com/sass/libsass "libsass").
* Autoprefix, minify, and remove unused CSS.
* Optimize images: PNG, JPG, GIF and SVG.
* Render Nunjucks templates with [`gulp-nunjucks-render`](https://github.com/carlosl/gulp-nunjucks-render "gulp-nunjucks-render").
* Use [`gulp-data`](https://github.com/colynb/gulp-data "gulp-data") to populate Nunjucks templates with JSON data.



Starting:
------

1. [Installation](#installation)
  * [Requirements](#requirements)
2. [Project structure](#structure)
3. [Settings](#config)
  * [sass](#sass)
  * [Nunjucks](#nunjucks)
4. [Dependencies](#dependencies)

<a name="installation"></a> Installation
------
### <a name="requirements"></a>Requirements

* [Node.js](https://nodejs.org/en/ "Node.js")

OS X users can install Node with [Homebrew](http://brew.sh/ "Homebrew").

```shell
$ brew install node
```

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md "Getting started with Gulp")

Install Gulp globally on your machine.

```shell
$ npm install -g gulp-cli
```

<a name="Structure"></a> Structure
------
This is what the project structure looks like:


```
Front-Starter/
│
│
├── dist/ # Output compiled and ready for production
├── node_modules/ # NPM package installation modules
├── src/ # Source code; these are the only files you need to touch
│ │
│ ├── fonts/ # Project font files (Raleway)
│ ├── images/ # Images folder with subdirectories
│ ├── js/ # Scripts folder with subdirectories
│ ├── scss/ # Sass folder; more info below
│ ├── views/ # Templates Nunjucks; more info below
│ ├── libs/ # Third party files for the project
│ │ ├── js/ # Compiled into a minified file located dist/content/libs/libs.js
│ │ └── scss/ # Compiled into a minified file located dist/content/libs/libs.css
│ └── data.json # JSON data; used to populate Nunjucks templates
│
│
└── package.json # List of third-party libraries and utilities
```
**What about static files?**
Static files can be placed in the root of the `src` folder and will be copied to the `dist` folder without changing anything (e.g. favicon.ico, robots.txt, ...).

> **Note**: Make sure you are working in the `src/` folder. The `gulp` and `gulp dev` commands will delete the `dist/` and `.tmp/` folder before compiling again, so changes made in these folders will be lost.

<a name="config"></a> Configuration
------
### <a name="sass"></a>sass



The Sass folder structure looks like this:


```
scss/
│
├── basis/
│ │
│ ├── _base.scsss # Commonly used standard styles
│ ├── _fonts.scss # sass styles
│ ├── _helpers.scss # Styles helpers or helpers to use on all sites.
│ └── _Typography.scss # Base typography style group
│
├── pages/
│ │
│ ├── _page1.scss # Only styles related to global pages
│ └── _page2.scss #...
│
├── pages/mainPage/
│ │
│ └── _jumbotron.scss # Styles specific to sections of each page
│
├── share/
│ │
│ ├── _modal.scss # Components that shared with other views
│ ├── _loader.scss # Navigation
│ └── _mask.scss # Components shared with other views
│
│
├──layout/
│ │
│ ├── _Header.scss # Buttons
│ └──_footer.scss # Footer
│
├──Utilities/
│ │
│ ├── _functions.scss # Sass functions
│ ├── _variables.scss # variables
│ └── _mixins.scss # Sass mixins
│
├── Components/
│ │
│ ├── _button.scss # Components
│ └── _cards.scss "
│ ├── _checkbox.scss"
│ └── _tables.scss"
│ └── _....scss
│
└── mainPage.scss # Main Sass files. The main build files for each page (we will build one main css file per page)
```

The Nunjucks folder structure looks like this:


```
Views/
│
├──layout/
│ │
│ └── default.njk # Default template you can reuse(extend)
│
├── partials/ #Partial sections. Easy to change folder to shared.
│ │
│ ├── _page1/...njk # Only Related global pages styles │
│ └── _page2/...njk # Only Related global pages styles
│
├── macro/
│ └── _macro-formField.njk #allows you to define reusable chunks of content.
│
├── share/
│ │
│ ├── _meta.njk # Components that shared with other views
│ ├── _loader.njk
│ └── _...njk
│
│
└── pageOne.njk # The result of all partials(shared, partials, layout). In charge of HTML page in ./dist folder

```



<a name="dependencies"></a>Dependencies
------
A list of all the dependencies used in this project and a brief explanation of what is used.
###NPM
* [`autoprefixer`](https://github.com/postcss/autoprefixer "autoprefixer"): Automatically add vendor prefixes to CSS rules.
* [`del`](https://github.com/sindresorhus/del "del"): Delete files and folders. In this case, the `dist/` folder whenever you run the `gulp` command.
* [`gulp`](http://gulpjs.com/ "gulp"): Create a system that automates common tasks during development.
* [`gulp-cache`](https://github.com/jgable/gulp-cache "gulp-cache"): Cache the result of a task.
* [`gulp-concat`](https://github.com/contra/gulp-concat "gulp-concat"): Concatenate multiple files into one.
* [`gulp-data`](https://github.com/colynb/gulp-data "gulp-data"): Generate the data object, used in Nunjucks templates.
* [`gulp-cssnano`](http://cssnano.co/ "gulp-cssnano"): Minify and optimize CSS (if necessary)
* [`gulp-imagemin`](https://github.com/sindresorhus/gulp-imagemin "gulp-imagemin"): Optimizes images: PNG, JPG, GIF and SVG.
* [`gulp-jshint`](https://github.com/spalger/gulp-jshint "gulp-jshint"): Gulp plugin for JSHint. Eliminate JavaScript errors.
* [`gulp-nunjucks-render`](https://github.com/carlosl/gulp-nunjucks-render "gulp-nunjucks-render"): Render Nunjucks templates.
* [`gulp-plumber`](https://github.com/floatdrop/gulp-plumber "gulp-plumber"): Prevents pipe breaks caused by GULP plugin errors.
* [`gulp-postcss`]( "gulp-postcss"): Pipe CSS through multiple preprocessors (`autoprefixer`, `cssnano`), but only parse it once.
* [`gulp-purgecss`](https://github.com/FullHuman/gulp-purgecss "gulp-purgecss"): Remove unused CSS. Great for cleaning up external resources (eg Bootstrap, Font Awesome).
* [`gulp-sass`](https://github.com/dlmanning/gulp-sass "gulp-sass"): Compile Sass to CSS with [`libSass`](https://github.com/sass/ libsass "libsass").

* [`gulp-size`](https://github.com/sindresorhus/gulp-size "gulp-size"): Display the size of the compiled output in your command line/terminal.
* [`gulp-sourcemaps`](https://github.com/floridoo/gulp-sourcemaps "gulp-sourcemaps"): Add online or external source maps. Useful when debugging compressed code.
* [`gulp-uglify`](https://github.com/terinjokes/gulp-uglify "gulp-uglify"): Minifies JavaScript.
* [`gulp-useref`](https://github.com/jonkemp/gulp-useref "gulp-useref"): Concatenate files between `build` blocks in your HTML.
* [`jshint`](https://github.com/jshint/jshint "jshint"): Catches errors in your JavaScript code.
* [`lazypipe`](https://github.com/OverZealous/lazypipe "lazypipe"): Allows you to create a lazy-initialized pipeline.



