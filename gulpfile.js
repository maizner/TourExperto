/* GULPFILE TOUR EXPERTO SETUP
 * ==================================================
 *  Comprime y optimiza imágenes, observa errores de código, cache,
 *  agrega .maps a css y js, minifica y concatena librerías en /libs, 
 *  agrega prefijos, organiza assets en /dist/content,
 *  renderiza nunjucks template y crea html en /dist.
 */



/* PLUGINS
 * --------------------------------------------------
 *  Load Gulp plugins
 * -------------------------------------------------- */
{
    const { emitWarning } = process;
    process.emitWarning =
    (warning, type, code, ...extraArgs) =>
    code !== 'DEP0097' && emitWarning(warning, type, code, ...extraArgs);
}
//Prefijo CSS 
var autoprefixer = require('autoprefixer'),
//Sirve y sincroniza los últimos cambios
browserSync = require('browser-sync'),
//Un archivo temporal basada almacenamiento en caché de proxy ( en este caso para la task images)
cache = require('gulp-cache'),
//Min de css de salida
cssnano = require('gulp-cssnano'),
//concatena todos los elementos en la carpeta para compilarlos
concat = require('gulp-concat'),
//Relacionado con el json
data = require('gulp-data'),
//Necesario para FS poder corroborar que un archivo existe y eliminarlo
del = require('del'),
//FS de file system, Módulo para administrar el sistema de archivos: fs
fs = require('fs'),
gulp = require('gulp'),
//Ejecución en secuencia
gulpSequence = require('gulp-sequence'),
//Minifica imagenes 
imagemin = require('gulp-imagemin'),
//Detecta errores en el código js
jshint = require('gulp-jshint'),
//PARA REDUCIR EL TAMAÑO DE ARCHIVOS CSS ELIMINANDO, SELECTORES NO UTILIZADOS, etc
purgecss = require('gulp-purgecss'),
//Es una tarea tardía. Utilizado para purgar clases de css ya compiladas ( purgecss)
lazypipe = require('lazypipe'),
// mergequeries = require('gulp-merge-media-queries'),
nunjucksRender = require('gulp-nunjucks-render'),
//Plumber que se encarga de evitar que gulp watch deje de funcionar en caso de un error.
plumber = require('gulp-plumber'),
//Ayuda a producir CSS mejor y mejor estructurado con BEM y SUIT
postcss = require('gulp-postcss'),
//Automatiza compilacion sass
sass = require('gulp-sass'),
//Muestra el tamaño de tu proyecto
size = require('gulp-size'),
//Mapeo de css
sourcemaps = require('gulp-sourcemaps');

/* VARS
* --------------------------------------------------
*  Variables and project paths
* -------------------------------------------------- */
var reload = browserSync.reload,
autoprefixList = ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

var config = {
 global: {
    input: 'src',
    output: 'dist',
 },

 fonts: {
    input: 'src/fonts/**/*',
    output: 'dist/content/Fonts',
 },
 html: {
    input: 'src/views/**/*.{html,njk}',
    pages: ['src/views/*.{html,njk}'],
    layouts: 'src/views/layouts/*.{html,njk}',
    build: 'dist/**/*.html',
    data: './src/data.json'
 },
 images: {
    input: 'src/images/**/*',
    output: 'dist/content/img',

 },
 scripts: {
    input: 'src/js/**/*.js',
    output: 'dist/content/js',
    all: 'src/libs/js/**/*.js'

 },
 libscripts: {
    input: [
        'src/libs/js/jquery-3.4.1.js',
        'src/libs/js/pace1.0.0.js',
        'src/libs/js/bootstrap.min.js',
        'src/libs/js/rSlider.js',
        'src/libs/js/slick-nav.js',
        'src/libs/js/headroom.js',
        'src/libs/js/slick-slider.js',
        'src/libs/js/magnific-popup.js',
        'src/libs/js/font-awesome.js',
        'src/libs/js/svg-injector.js',
        'src/libs/js/parsley.js',
        'src/libs/js/moment.min.js',
        'src/libs/js/daterangepicker.js',
        'src/libs/js/select2.full.js',
        'src/libs/js/nanoScroller.js',
        'src/libs/js/animateit.js'
        ],

    output: 'dist/content/js/libs',

 },
 static: {
    input: ['src/*.*', '!src/*.{html,njk}', '!src/data.json'],
    size: 'dist/content/**/*'
 },
 
 styles: {
    input: 'src/scss/**/*.{scss,sass}',
    output: 'dist/content/css',
    all: 'src/scss/**/*.{scss,sass}'
 },

 libstyles: {
    input: 'src/libs/scss/**/*.{scss,sass,css}',
    output: 'dist/content/css/libs'
 },

 // Third parties in this version will enter the project completely (css / html / js / imgs / etc)
// Applies to any third party that was not incorporated into the project: example. Jquery, plugins, iconography
 
 vendors: {
    input: ['src/vendors/**'],
    output: 'dist/content/vendors/'
 }
}


/* NUNJUCKS TASK
* --------------------------------------------------
*  Render Nunjucks template(s) to HTML and sync
*  data from data.json on change
* -------------------------------------------------- */
gulp.task('views', function() {
 return gulp.src(config.html.pages, { base: 'src/views' })
     .pipe(plumber())
     .pipe(data(function() {
        return require(config.html.data)
        return JSON.parse(fs.readFileSync(config.html.data))
    }))


     .pipe(nunjucksRender({
         path: ['src/views']
     }))
     .pipe(gulp.dest(config.global.output))
   
});


/* STYLES TASK
* --------------------------------------------------
*  Compile SCSS, autoprefix and make sourcemap
* -------------------------------------------------- */
gulp.task('styles', function() {
 return gulp.src(config.styles.input)
     .pipe(plumber())
     .pipe(sourcemaps.init())
     .pipe(sass({
         outputStyle: 'nested',
         includePaths: ['.']
     }).on('error', sass.logError))
     .pipe(postcss([autoprefixer({ browsers: autoprefixList })]))
     .pipe(cssnano())
     .pipe(sourcemaps.write())
     .pipe(gulp.dest(config.styles.output))
 
});


/* LIB STYLES TASK
* --------------------------------------------------
*  Compile SCSS, autoprefix and make sourcemap
* -------------------------------------------------- */
gulp.task('libstyles', function() {
    return gulp.src(config.libstyles.input)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'nested',
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer({ browsers: autoprefixList })]))
        .pipe(cssnano())
        .pipe(concat('libs.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.libstyles.output))
      
   });
   

/* SCRIPTS TASK
* --------------------------------------------------
*  Lint JS file(s) and report errors in console
* -------------------------------------------------- */
gulp.task('libscripts', function() {
 return gulp.src(config.libscripts.input)
     .pipe(plumber())
     .pipe(sourcemaps.init())
     .pipe(jshint())
     .pipe(concat('libs.js'))
     .pipe(sourcemaps.write())
     .pipe(gulp.dest(config.libscripts.output))
 
});

/* LIBSCRIPTS TASK
* --------------------------------------------------
*  Lint JS file(s) and report errors in console
* -------------------------------------------------- */
gulp.task('scripts', function() {
    return gulp.src(config.scripts.input)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.scripts.output))
    
   });
   

/* FONTS TASK
* --------------------------------------------------
*  Get fonts for folder
* -------------------------------------------------- */
gulp.task('fonts', function() {
 return gulp.src(config.fonts.input)
     .pipe(gulp.dest(config.fonts.output))
  
});


/* IMAGES TASK
* --------------------------------------------------
*  Compress images - PNG, JPG, GIF and SVG
*  Doesn't remove IDs from SVG files
* -------------------------------------------------- */
gulp.task('images', function() {
 return gulp.src(config.images.input)
     .pipe(plumber())
     .pipe(cache(imagemin([
         imagemin.optipng({ optimizationLevel: 6 }),
         imagemin.gifsicle({ interlaced: true }),
         imagemin.svgo({
             plugins: [{ cleanupIDs: false }]
         }) 
     ])))
     .pipe(gulp.dest(config.images.output))
      
});





/* CLEAR TASK
* --------------------------------------------------
*  Clear cache if needed
* -------------------------------------------------- */
gulp.task('clear', function(done) {
 return cache.clearAll(done);
});


/* CLEAN TASK
* --------------------------------------------------
*  Deletes dist/ and .tmp/ folder
* -------------------------------------------------- */
gulp.task('clean:dist', del.bind(null, config.global.output));


/* STATIC TASK
* --------------------------------------------------
*  Move static files to dist/ folder (robots.txt,
*  humans.txt, favicon). Hidden files will be
*  ignored (.git for example)
* -------------------------------------------------- */
gulp.task('static', function() {
 return gulp.src(config.static.input, {
     dot: true
 }).pipe(gulp.dest(config.global.output));
});


/* VENDORS TASK
* --------------------------------------------------
*  Move vendor files to dist/ folder . Hidden files will be
*  ignored (.git for example)
* -------------------------------------------------- */
gulp.task('vendors', function() {
 return gulp.src(config.vendors.input, {
     dot: true
 }).pipe(gulp.dest(config.vendors.output));
});


/* SIZE TASK
* --------------------------------------------------
*  Display size of dist folder
* -------------------------------------------------- */
gulp.task('size', function() {
 return gulp.src(config.static.size)
     .pipe(size({ title: 'Deployment build:', gzip: true }));
});
/* BUILD TASK 
 * --------------------------------------------------
 *  Livereload with browserSync, watch files on 
 *  change and execute tasks accordingly
 * -------------------------------------------------- */
// gulp.task('build', function() {
    

//     browserSync.init({
//         server: {
//             baseDir: [config.global.output],
           
//         },
//         serveStaticOptions: {
//             extensions: ['html']
//         },
//         notify: false,
//         port: 3000
        
//     });
//     gulp.watch(config.views.input, ['views']);  
//     gulp.watch(config.styles.all, ['styles']);
//     gulp.watch(config.scripts.input, ['scripts']);
//     gulp.watch(config.images.input, ['images']);
//     gulp.watch(config.fonts.input, ['fonts']); 
//     gulp.watch(config.vendors.input, ['vendors']); 
//     gulp.watch(config.static.input, ['static']);
//     return gulp.src(config.html.build).pipe(plumber())
    
// });

/* DEFAULT TASK 
* --------------------------------------------------
*  Creates a production-ready build 
*  located in the dist/ folder
* -------------------------------------------------- */

gulp.task('default', function () {
    return gulp.watch('src/**/*.{scss,html,njk,js,ttf,woff,eof,svg}', 
    gulp.series(['clean:dist'],'views','styles','libstyles','scripts','libscripts','fonts', 'images','static','size'));
});