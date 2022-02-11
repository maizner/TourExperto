Marco sass - Gulp - Nunjucks
======

Lo que este marco hace por usted:

* Limpia y minifica JavaScript.
* Compila sass con [`libSass`](https://github.com/sass/libsass "libsass"). 
* Autoprefija, minimiza y elimina CSS no utilizado.
* Optimiza imágenes: PNG, JPG, GIF y SVG.
* Renderiza plantillas de Nunjucks con [`gulp-nunjucks-render`](https://github.com/carlosl/gulp-nunjucks-render "gulp-nunjucks-render").
* Utiliza [`gulp-data`](https://github.com/colynb/gulp-data "gulp-data") para llenar las plantillas de Nunjucks con datos JSON.


Empezando:
------  

1. [Instalación](#installation)
  * [Requerimientos](#requirements)
2. [Estructura del proyecto](#structure)  
3. [Configuración](#config)  
  * [Sass](#sass)
  * [Nunjucks](#nunjucks)
4. [Dependencias](#dependencies)  

<a name="installation"></a> Instalación
------
### <a name="requirements"></a>Requerimientos

* [Node.js](https://nodejs.org/en/ "Node.js") 

Los usuarios de OS X pueden instalar Node con [Homebrew](http://brew.sh/ "Homebrew").

```shell
$ brew install node
```

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md "Primeros pasos con Gulp")  

Instale Gulp globalmente en su máquina.

```shell
$ npm install -g gulp-cli
```

<a name="Structure"></a> Estructura
------
Así es como se ve la estructura del proyecto:


```
Front-Starter/
│
│
├── dist/                     # Salida compilada y lista para producción
├── node_modules/             # Módulos de instalación  de paquetes NPM
├── src/                      # Código fuente; estos son los únicos archivos que necesita tocar 
│   │ 
│   ├── fonts/                # Archivos de fuentes del proyecto (Raleway)
│   ├── images/               # Carpeta de imágenes con subdirectorios
│   ├── js/                   # Carpeta de scripts con subdirectorios
│   ├── scss/                 # Carpeta Sass; más información a continuación
│   ├── views/                # Plantillas Nunjucks; más información a continuación
│   ├── libs/                 # Archivos de terceros para el proyecto
│   │   ├── js/               # Compilado en un archivo minificado ubicado dist/content/libs/libs.js
│   │   └── scss/             # Compilado en un archivo minificado ubicado dist/content/libs/libs.css
│   └── data.json             # datos JSON; utilizado para poblar plantillas de Nunjucks
│
│
└── package.json              # Lista de bibliotecas y utilidades de terceros
```  
**¿Qué pasa con los archivos estáticos?**  
Los archivos estáticos se pueden colocar en la raíz de la carpeta `src` y se copiarán en la carpeta `dist` sin cambiar nada (e.g. favicon.ico, robots.txt, ...).

> **Note**: Make sure you are working in the `src/` folder. The `gulp` and `gulp dev` commands will delete the `dist/` and `.tmp/` folder before compiling again, so changes made in these folders will be lost.  

<a name="config"></a> Configuración
------
### <a name="sass"></a>Sass



La estructura de carpetas de Sass se ve así:


```
scss/
│
├── base/
│   │   
│   ├── _base.scsss           # Estilos estándar de uso común
│   ├── _fonts.scss           # Estilos sass
│   ├── _helpers.scss         # Estilos helpers o ayudantes para usar en todos los sitios.
│   └── _Typography.scss      # Grupo de estilos de tipografía base
│  
├── pages/
│   │   
│   ├── _page1.scss           # Solo estilos relacionados a páginas globales         
│   └── _page2.scss           #...
│        
├── pages/mainPage/
│   │
│	  └── _jumbotron.scss       # Estilos específicos de secciones de cada página
│	
├── shared/
│   │   
│   ├── _modal.scss           # Componentes que compartieron con otras vistas
│   ├── _loader.scss          # Navegación
│   └── _mask.scss            # Componentes que compartieron con otras vistas
│  
│  
├── layout/  
│   │    
│   ├── _Header.scss          # Botones
│   └──_footer.scss           # Pie de página
│  
├── utilities/     				  
│   │              
│   ├── _functions.scss       # Funciones Sass
│   ├── _variables.scss       # variables
│   └── _mixins.scss          # Mixins de Sass
│  
├── Components/ 
│   │     
│   ├── _button.scss          # Componentes 
│   └── _cards.scss           	"
│   ├── _checkbox.scss          "
│   └── _tables.scss            "
│   └── _....scss 
│  
└── mainPage.scss             # Principales archivos Sass. Los principales archivos de compilación de cada página (compilaremos un archivo css principal por página)
```


La estructura de carpetas de Nunjucks se ve así:


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



<a name="dependencies"></a>Dependencias
------  
Una lista de todas las dependencias utilizadas en este proyecto y una breve explicación de lo que se utiliza.  
### NPM
* [`autoprefixer`](https://github.com/postcss/autoprefixer "autoprefixer"): Agrega automáticamente prefijos de proveedores a las reglas de CSS.
* [`del`](https://github.com/sindresorhus/del "del"): Elimina archivos y carpetas. En este caso, la carpeta `dist/` siempre que ejecute el comando `gulp`.
* [`gulp`](http://gulpjs.com/ "gulp"):Cree un sistema que automatice las tareas comunes durante el desarrollo.
* [`gulp-cache`](https://github.com/jgable/gulp-cache "gulp-cache"): Guarda en caché el resultado de una tarea.
* [`gulp-concat`](https://github.com/contra/gulp-concat "gulp-concat"): Concatena múltiples archivos en uno.
* [`gulp-data`](https://github.com/colynb/gulp-data "gulp-data"): Genera el objeto de datos, utilizado en las plantillas Nunjucks.
* [`gulp-cssnano`](http://cssnano.co/ "gulp-cssnano"): Minimiza y optimiza CSS (si es necesario)
* [`gulp-imagemin`](https://github.com/sindresorhus/gulp-imagemin "gulp-imagemin"): Optimiza imágenes: PNG, JPG, GIF y SVG.
* [`gulp-jshint`](https://github.com/spalger/gulp-jshint "gulp-jshint"): Complemento Gulp para JSHint. Elimina errores de JavaScript.
* [`gulp-nunjucks-render`](https://github.com/carlosl/gulp-nunjucks-render "gulp-nunjucks-render"): Render Nunjucks templates.
* [`gulp-plumber`](https://github.com/floatdrop/gulp-plumber "gulp-plumber"): Previene la rotura de tuberías causada por errores de los complementos de GULP.
* [`gulp-postcss`]( "gulp-postcss"): Canalice CSS a través de varios preprocesadores (`autoprefixer`, `cssnano`), pero solo analícelo una vez.
* [`gulp-purgecss`](https://github.com/FullHuman/gulp-purgecss "gulp-purgecss"): Elimina CSS no utilizado. Excelente para limpiar recursos externos (por ejemplo, Bootstrap, Font Awesome).
* [`gulp-sass`](https://github.com/dlmanning/gulp-sass "gulp-sass"): Compila Sass a CSS con [`libSass`](https://github.com/sass/libsass "libsass").

* [`gulp-size`](https://github.com/sindresorhus/gulp-size "gulp-size"): Muestre el tamaño de la salida compilada en su línea de comando/terminal.
* [`gulp-sourcemaps`](https://github.com/floridoo/gulp-sourcemaps "gulp-sourcemaps"): Agrega mapas de origen en línea o externos. Útil al depurar código comprimido.
* [`gulp-uglify`](https://github.com/terinjokes/gulp-uglify "gulp-uglify"): Minifica JavaScript. 
* [`gulp-useref`](https://github.com/jonkemp/gulp-useref "gulp-useref"): Concatena archivos entre `build` bloques en tu HTML.
* [`jshint`](https://github.com/jshint/jshint "jshint"): Detecta errores en su código JavaScript.
* [`lazypipe`](https://github.com/OverZealous/lazypipe "lazypipe"): Le permite crear una canalización inicializada de forma diferida.



