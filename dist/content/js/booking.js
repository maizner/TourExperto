var booking = {
    
    init: function () {
        
        // -----------------------------------------------------------------------------
        // COMIENZO DE VALIDACIONES Y MANIPULACION DE CLASES PARSLEY JS
        // ----------------------------------------------------------------------------- 
       
        // $('#booking').on('click', (e)=>{
        //     e.preventDefault()
        // })
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
        $('.select2.withsearch').select2({
        });
      
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
    booking.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBib29raW5nID0ge1xyXG4gICAgXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDT01JRU5aTyBERSBWQUxJREFDSU9ORVMgWSBNQU5JUFVMQUNJT04gREUgQ0xBU0VTIFBBUlNMRVkgSlNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgICAgIFxyXG4gICAgICAgIC8vICQoJyNib29raW5nJykub24oJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgJCgnLmpzX2Zvcm1fdmFsaWRhdGlvbicpLnBhcnNsZXkoe1xyXG4gICAgICAgICAgICAvL2NsYXNlcyBlbiBpbnB1dCBwYXJhIGVzdGlsb3MgY3NzIFxyXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdwYXJzbGV5LXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBlcnJvckNsYXNzOiAgICdwYXJzbGV5LWVycm9yJyxcclxuICAgICAgICAgICAgZXJyb3JzV3JhcHBlcjonPHNwYW4gY2xhc3M9XCJkZWZhdWx0X3ZhbGlkYXRpb25fbXNqXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgIGVycm9yVGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1tZXNzYWdlXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0NsYXNlcyBwYXJhIGVzdGlsb3MgZGUgZXJyb3JcclxuICAgICAgICB3aW5kb3cuUGFyc2xleS5vbignZmllbGQ6ZXJyb3InLCAoKT0+IHtcclxuICAgICAgICAgICAgJCgnLnBhcnNsZXktZXJyb3InKS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0NsYXNlcyBwYXJhIGVzdGlsb3MgZGUgw6l4aXRvXHJcbiAgICAgICAgd2luZG93LlBhcnNsZXkub24oJ2ZpZWxkOnN1Y2Nlc3MnLCAoKT0+IHtcclxuICAgICAgICAgICAgJCgnLnBhcnNsZXktc3VjY2VzcycpLnBhcmVudHMoJy5mb3JtLWdyb3VwJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvL2luaXQgc2VsZWN0IE5PIHNlYXJjaCBib3hcclxuICAgICAgICAgJCgnLnNlbGVjdDIubm9zZWFyY2gnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxyXG4gICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzIDogXCJuby1zZWFyY2hcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5zZWxlY3QyLndpdGhzZWFyY2gnKS5zZWxlY3QyKHtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgIC8vSW5pdCBkZSBzY3JvbGxlciBwbHVnaW5cclxuICAgICAgICAgJCgnLnNlbGVjdDInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKFwiLm5hbm9cIikubmFub1Njcm9sbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIFxyXG59O1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRlVOQ0lPTkVTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZJTiBGVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGJvb2tpbmcuaW5pdCgpO1xyXG59KTsiXSwiZmlsZSI6ImJvb2tpbmcuanMifQ==
