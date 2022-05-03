var myaccount = {
    
    init: function () {
        
        // -----------------------------------------------------------------------------
        // COMIENZO DE VALIDACIONES Y MANIPULACION DE CLASES PARSLEY JS
        // ----------------------------------------------------------------------------- 
       
      
        $('.js_form_validation').parsley({
            //clases en input para estilos css 
            successClass: 'parsley-success',
            errorClass:   'parsley-error',
            errorsWrapper:'<span class="default_validation_msj"></span>',
            errorTemplate:'<span class="validation-message"></span>',
            
        });

        //Clases para estilos de error
        window.Parsley.on('field:error', ()=> {
            $('.parsley-error').parents('.form-group')
            .addClass('error')
            .removeClass('success')
        });

        //Clases para estilos de éxito
        window.Parsley.on('field:success', ()=> {
            $('.parsley-success').parents('.form-group')
            .addClass('success')
            .removeClass('error')
        });

         //init select NO search box
         $('.select2.nosearch').select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass : "no-search"
        });
        $('.select2.withsearch').select2();
      
         //Init de scroller plugin
         $('.select2').on('click', function(){
            $(".nano").nanoScroller();
        });
        

        //Creando validación personalizada para peso máximo
        window.Parsley.addValidator('maxfilesize', {
            validateString: function(_value, maxSize, parsleyInstance) {
              if (!window.FormData) {
                return true;
              }
              var files = parsleyInstance.$element[0].files;
              return files.length != 1  || files[0].size <= maxSize * 1024;
            },
            requirementType: 'integer'
            
          });



    }
       
    
};

//Toggleo el icono/ input para mostrar contraseña
showHidePassword(".password .icon");

// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 

//mostrar contraseña
function showHidePassword(psw){
    $(psw).on('click', function(){
        if($(this).hasClass('inactive')){

            $(this).siblings("input[type=password]").attr('type','text')
            $(this).removeClass("inactive").addClass("active")

        }else if($(this).hasClass('active')){

            $(this).siblings("input[type=text]").attr('type','password')
            $(this).removeClass("active").addClass("inactive")
        }
    });
};

// -----------------------------------------------------------------------------
//FIN FUNCIONES
// ----------------------------------------------------------------------------- 

$(function () {
    myaccount.init();
});