Gulp Nunjucks sass framework
======

What this framework does for you:

* Lints and minifies JavaScript.
* Compiles Sass with [`libSass`](https://github.com/sass/libsass "libsass"). 
* Autoprefixes, minifies and removes unused CSS.
* Optimizes images - PNG, JPG, GIF and SVG.  
* Render Nunjucks templates with [`gulp-nunjucks-render`](https://github.com/carlosl/gulp-nunjucks-render "gulp-nunjucks-render").
* Uses [`gulp-data`](https://github.com/colynb/gulp-data "gulp-data") to populate Nunjucks templates with JSON data.



Getting started
------  

1. [Installation](#installation)
  * [Requirements](#requirements)
2. [Project structure](#structure)  
3. [Configuration](#config)  
  * [Sass](#sass)
  * [Nunjucks](#nunjucks)
  * [Changing the folder structure](#changestructure)
4. [Dependencies](#dependencies)  

<a name="installation"></a> Installation
------
### <a name="requirements"></a>Requirements  

* [Node.js](https://nodejs.org/en/ "Node.js") 

OS X users can install Node with [Homebrew](http://brew.sh/ "Homebrew").

```shell
$ brew install node
```

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md "Getting Started with Gulp")  

Install Gulp globally on your machine.

```shell
$ npm install -g gulp-cli
```

<a name="Structure"></a> Structure
------
This is how the project structure looks like:


```
Front-Starter/
│
│
├── dist/                     # Compiled, production-ready output
├── node_modules/             # npm install
├── src/                      # Source code; these are the only files you need to touch 
│   │ 
│   ├── fonts/                # Project fonts; Overpass font is included by default
│   ├── images/               # Images folder; can have subdirectories
│   ├── js/                   # Scripts folder; can have subdirectories
│   ├── scss/                 # Sass folder; more information below
│   ├── views/                # Nunjucks templates; more information below
│   ├── libs/                 # Complete 3rd party for the project     
│   │   ├── js/               # 3rd parties javascript compiled in a bundle call libs.js in dist/js/libs
│   │   └── scss/             # 3rd parties sass compiled in a bundle call libs.css in dist/css/libs
│   └── data.json             # JSON data; used to populate Nunjucks templates
│
│
└── package.json              # List of 3rd party libraries and utilities
```  
**What about static files?**  
Static files can be placed in the root of the `src` folder and they will be copied into the `dist` folder without changing anything (e.g. favicon.ico, robots.txt, ...).

> **Note**: Make sure you are working in the `src/` folder. The `gulp` and `gulp dev` commands will delete the `dist/` and `.tmp/` folder before compiling again, so changes made in these folders will be lost.  

<a name="config"></a> Configuration
------
### <a name="sass"></a>Sass



Sass folder structure looks like this:


```
scss/
│
├── base/
│   │   
│   ├── _base.scsss           # Commonly used standard styles
│   ├── _fonts.scss           # Font styles
│   ├── _helpers.scss         # Helpers styles to use in all site
│   └── _Typography.scss      # group of base typography stiles
│  
├── pages/
│   │   
│   ├── _page1.scss           # Only Related global pages styles          
│   └── _page2.scss           #...
│        
├── pages/mainPage/
│   │
│	  └── _jumbotron.scss       # EG: Section specific styles of each page
│	
├── shared/
│   │   
│   ├── _modal.scss           # Components that shared with other views
│   ├── _loader.scss          # Navigation
│   └── _mask.scss            # Components that shared with other views
│  
│  
├── layout/  
│   │    
│   ├── _Header.scss          # Buttons
│   └──_footer.scss           # Footer
│  
├── utilities/     				  
│   │              
│   ├── _functions.scss       # Sass funtions
│   ├── _variables.scss       # variables
│   └── _mixins.scss          # Sass mixins
│  
├── Components/ 
│   │     
│   ├── _button.scss          # Components 
│   └── _cards.scss           	"
│   ├── _checkbox.scss          "
│   └── _tables.scss            "
│   └── _....scss 
│  
└── mainPage.scss             # Main Sass files. The main compiling files of each page (we will compile a main css file for page)
```


Nunjucks folder structure looks like this: 


``` 
Views/                                                                       
│
├── layout/                                                                                           
│      │   
│      └── default.njk                   # Default template you can reuse(extend) 
│  
├── partials/                            #Partial sections. Easy to change folder to shared.                 
│       │                                                                                  
│       ├── _page1/...njk                # Only Related global pages styles   │
│       └── _page2/...njk                # Only Related global pages styles 
│        
├── macros/
│	     └── _macro-formField.njk          #allows you to define reusable chunks of content.
│	
├── shared/                                     
│      │   
│      ├── _meta.njk                     # Components that shared with other views
│      ├── _loader.njk             
│      └── _...njk                                                                                    
│                                                                                                    
│                                                                              
└── pageOne.njk                          # The result of all partials(shared, partials, layout). In charge of HTML page in ./dist folder

```



<a name="dependencies"></a>Dependencies
------  
A list of all the dependencies used in this project and a brief explanation for what it is used.  
### NPM
* [`autoprefixer`](https://github.com/postcss/autoprefixer "autoprefixer"): Automatically adds vendor prefixes to CSS rules.  
* [`del`](https://github.com/sindresorhus/del "del"): Deletes files and folders. In this case the `dist/` folder whenever you run the `gulp`  command.   
* [`gulp`](http://gulpjs.com/ "gulp"): Build system that automates common tasks during development.
* [`gulp-cache`](https://github.com/jgable/gulp-cache "gulp-cache"): Caches result of a task. 
* [`gulp-concat`](https://github.com/contra/gulp-concat "gulp-concat"): Concatenates multiple files into one.
* [`gulp-data`](https://github.com/colynb/gulp-data "gulp-data"): Generates the data obect, used in Nunjucks templates
* [`gulp-cssnano`](http://cssnano.co/ "gulp-cssnano"): Minifies and optimizes CSS ( If needed)
* [`gulp-if`](https://github.com/robrich/gulp-if "gulp-if"): Conditionally run tasks.
* [`gulp-imagemin`](https://github.com/sindresorhus/gulp-imagemin "gulp-imagemin"): Optimizes images - PNG, JPG, GIF and SVG.  
* [`gulp-jshint`](https://github.com/spalger/gulp-jshint "gulp-jshint"): Gulp plugin for JSHint. Lints JavaScript errors. 
* [`gulp-nunjucks-render`](https://github.com/carlosl/gulp-nunjucks-render "gulp-nunjucks-render"): Render Nunjucks templates.
* [`gulp-plumber`](https://github.com/floatdrop/gulp-plumber "gulp-plumber"): Prevents pipe breaking caused by errors from gulp plugins.
* [`gulp-postcss`]( "gulp-postcss"): Pipe CSS through several preprocessors (`autoprefixer`, `cssnano`), but only parse it once.
* [`gulp-purgecss`](https://github.com/FullHuman/gulp-purgecss "gulp-purgecss"): Removes unused CSS. Great for cleaning up external resources (e.g. Bootstrap, Font Awesome).  
* [`gulp-sass`](https://github.com/dlmanning/gulp-sass "gulp-sass"): Compiles Sass to CSS with [`libSass`](https://github.com/sass/libsass "libsass").

* [`gulp-size`](https://github.com/sindresorhus/gulp-size "gulp-size"): Display the size of the compiled output in your command line/terminal. 
* [`gulp-sourcemaps`](https://github.com/floridoo/gulp-sourcemaps "gulp-sourcemaps"): Adds inline or external source maps. Useful when debugging compressed code. 
* [`gulp-uglify`](https://github.com/terinjokes/gulp-uglify "gulp-uglify"): Minifies JavaScript. 
* [`gulp-useref`](https://github.com/jonkemp/gulp-useref "gulp-useref"): Concatenates files between `build` blocks in your HTML.
* [`jshint`](https://github.com/jshint/jshint "jshint"): Detects errors in your JavaScript code.
* [`lazypipe`](https://github.com/OverZealous/lazypipe "lazypipe"): Allows you to create a lazily-initialized pipeline.




