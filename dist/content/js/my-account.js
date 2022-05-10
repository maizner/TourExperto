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

         //Init de number spinners within the modal 
         $(".input-spinnumber").inputSpinner()



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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJteS1hY2NvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBteWFjY291bnQgPSB7XHJcbiAgICBcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIENPTUlFTlpPIERFIFZBTElEQUNJT05FUyBZIE1BTklQVUxBQ0lPTiBERSBDTEFTRVMgUEFSU0xFWSBKU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4gICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5qc19mb3JtX3ZhbGlkYXRpb24nKS5wYXJzbGV5KHtcclxuICAgICAgICAgICAgLy9jbGFzZXMgZW4gaW5wdXQgcGFyYSBlc3RpbG9zIGNzcyBcclxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAncGFyc2xleS1zdWNjZXNzJyxcclxuICAgICAgICAgICAgZXJyb3JDbGFzczogICAncGFyc2xleS1lcnJvcicsXHJcbiAgICAgICAgICAgIGVycm9yc1dyYXBwZXI6JzxzcGFuIGNsYXNzPVwiZGVmYXVsdF92YWxpZGF0aW9uX21zalwiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICBlcnJvclRlbXBsYXRlOic8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tbWVzc2FnZVwiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGFzZXMgcGFyYSBlc3RpbG9zIGRlIGVycm9yXHJcbiAgICAgICAgd2luZG93LlBhcnNsZXkub24oJ2ZpZWxkOmVycm9yJywgKCk9PiB7XHJcbiAgICAgICAgICAgICQoJy5wYXJzbGV5LWVycm9yJykucGFyZW50cygnLmZvcm0tZ3JvdXAnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGFzZXMgcGFyYSBlc3RpbG9zIGRlIMOpeGl0b1xyXG4gICAgICAgIHdpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDpzdWNjZXNzJywgKCk9PiB7XHJcbiAgICAgICAgICAgICQoJy5wYXJzbGV5LXN1Y2Nlc3MnKS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZXJyb3InKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy9pbml0IHNlbGVjdCBOTyBzZWFyY2ggYm94XHJcbiAgICAgICAgICQoJy5zZWxlY3QyLm5vc2VhcmNoJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgICAgICAgICAgZHJvcGRvd25Dc3NDbGFzcyA6IFwibm8tc2VhcmNoXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuc2VsZWN0Mi53aXRoc2VhcmNoJykuc2VsZWN0MigpO1xyXG4gICAgICBcclxuICAgICAgICAgLy9Jbml0IGRlIHNjcm9sbGVyIHBsdWdpblxyXG4gICAgICAgICAkKCcuc2VsZWN0MicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIubmFub1wiKS5uYW5vU2Nyb2xsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy9DcmVhbmRvIHZhbGlkYWNpw7NuIHBlcnNvbmFsaXphZGEgcGFyYSBwZXNvIG3DoXhpbW9cclxuICAgICAgICB3aW5kb3cuUGFyc2xleS5hZGRWYWxpZGF0b3IoJ21heGZpbGVzaXplJywge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24oX3ZhbHVlLCBtYXhTaXplLCBwYXJzbGV5SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciBmaWxlcyA9IHBhcnNsZXlJbnN0YW5jZS4kZWxlbWVudFswXS5maWxlcztcclxuICAgICAgICAgICAgICByZXR1cm4gZmlsZXMubGVuZ3RoICE9IDEgIHx8IGZpbGVzWzBdLnNpemUgPD0gbWF4U2l6ZSAqIDEwMjQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlcXVpcmVtZW50VHlwZTogJ2ludGVnZXInXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy9Jbml0IGRlIG51bWJlciBzcGlubmVycyB3aXRoaW4gdGhlIG1vZGFsIFxyXG4gICAgICAgICAkKFwiLmlucHV0LXNwaW5udW1iZXJcIikuaW5wdXRTcGlubmVyKClcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgXHJcbn07XHJcblxyXG4vL1RvZ2dsZW8gZWwgaWNvbm8vIGlucHV0IHBhcmEgbW9zdHJhciBjb250cmFzZcOxYVxyXG5zaG93SGlkZVBhc3N3b3JkKFwiLnBhc3N3b3JkIC5pY29uXCIpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG4vL21vc3RyYXIgY29udHJhc2XDsWFcclxuZnVuY3Rpb24gc2hvd0hpZGVQYXNzd29yZChwc3cpe1xyXG4gICAgJChwc3cpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnaW5hY3RpdmUnKSl7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKFwiaW5wdXRbdHlwZT1wYXNzd29yZF1cIikuYXR0cigndHlwZScsJ3RleHQnKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaW5hY3RpdmVcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcclxuXHJcbiAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpe1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncyhcImlucHV0W3R5cGU9dGV4dF1cIikuYXR0cigndHlwZScsJ3Bhc3N3b3JkJylcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5hZGRDbGFzcyhcImluYWN0aXZlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZJTiBGVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIG15YWNjb3VudC5pbml0KCk7XHJcbn0pOyJdLCJmaWxlIjoibXktYWNjb3VudC5qcyJ9
