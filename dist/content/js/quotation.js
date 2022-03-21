var quotation = {
    
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
    }
       
    
};


// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 



// -----------------------------------------------------------------------------
//FIN FUNCIONES
// ----------------------------------------------------------------------------- 

$(function () {
    quotation.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJxdW90YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHF1b3RhdGlvbiA9IHtcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ09NSUVOWk8gREUgVkFMSURBQ0lPTkVTIFkgTUFOSVBVTEFDSU9OIERFIENMQVNFUyBQQVJTTEVZIEpTXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgJCgnLmpzX2Zvcm1fdmFsaWRhdGlvbicpLnBhcnNsZXkoe1xyXG4gICAgICAgICAgICAvL2NsYXNlcyBlbiBpbnB1dCBwYXJhIGVzdGlsb3MgY3NzIFxyXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdwYXJzbGV5LXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBlcnJvckNsYXNzOiAgICdwYXJzbGV5LWVycm9yJyxcclxuICAgICAgICAgICAgZXJyb3JzV3JhcHBlcjonPHNwYW4gY2xhc3M9XCJkZWZhdWx0X3ZhbGlkYXRpb25fbXNqXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgIGVycm9yVGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1tZXNzYWdlXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0NsYXNlcyBwYXJhIGVzdGlsb3MgZGUgZXJyb3JcclxuICAgICAgICB3aW5kb3cuUGFyc2xleS5vbignZmllbGQ6ZXJyb3InLCAoKT0+IHtcclxuICAgICAgICAgICAgJCgnLnBhcnNsZXktZXJyb3InKS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0NsYXNlcyBwYXJhIGVzdGlsb3MgZGUgw6l4aXRvXHJcbiAgICAgICAgd2luZG93LlBhcnNsZXkub24oJ2ZpZWxkOnN1Y2Nlc3MnLCAoKT0+IHtcclxuICAgICAgICAgICAgJCgnLnBhcnNsZXktc3VjY2VzcycpLnBhcmVudHMoJy5mb3JtLWdyb3VwJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vaW5pdCBzZWxlY3QgTk8gc2VhcmNoIGJveFxyXG4gICAgICAgICQoJy5zZWxlY3QyLm5vc2VhcmNoJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgICAgICAgICAgZHJvcGRvd25Dc3NDbGFzcyA6IFwibm8tc2VhcmNoXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuc2VsZWN0Mi53aXRoc2VhcmNoJykuc2VsZWN0MigpO1xyXG4gICAgICBcclxuICAgICAgICAgLy9Jbml0IGRlIHNjcm9sbGVyIHBsdWdpblxyXG4gICAgICAgICAkKCcuc2VsZWN0MicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIubmFub1wiKS5uYW5vU2Nyb2xsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRklOIEZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgcXVvdGF0aW9uLmluaXQoKTtcclxufSk7Il0sImZpbGUiOiJxdW90YXRpb24uanMifQ==
