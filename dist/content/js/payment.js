var payment = {
    
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
        $('.select2.withsearch').select2({
        });
      
         //Init de scroller plugin
         $('.select2').on('click', function(){
            $(".nano").nanoScroller();
        });

         //Init de tooltip
         var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
         var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
         return new bootstrap.Tooltip(tooltipTriggerEl)
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
    payment.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXltZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwYXltZW50ID0ge1xyXG4gICAgXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDT01JRU5aTyBERSBWQUxJREFDSU9ORVMgWSBNQU5JUFVMQUNJT04gREUgQ0xBU0VTIFBBUlNMRVkgSlNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgICAgICAkKCcuanNfZm9ybV92YWxpZGF0aW9uJykucGFyc2xleSh7XHJcbiAgICAgICAgICAgIC8vY2xhc2VzIGVuIGlucHV0IHBhcmEgZXN0aWxvcyBjc3MgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ3BhcnNsZXktc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6ICAgJ3BhcnNsZXktZXJyb3InLFxyXG4gICAgICAgICAgICBlcnJvcnNXcmFwcGVyOic8c3BhbiBjbGFzcz1cImRlZmF1bHRfdmFsaWRhdGlvbl9tc2pcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgZXJyb3JUZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xhc2VzIHBhcmEgZXN0aWxvcyBkZSBlcnJvclxyXG4gICAgICAgIHdpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDplcnJvcicsICgpPT4ge1xyXG4gICAgICAgICAgICAkKCcucGFyc2xleS1lcnJvcicpLnBhcmVudHMoJy5mb3JtLWdyb3VwJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc3VjY2VzcycpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xhc2VzIHBhcmEgZXN0aWxvcyBkZSDDqXhpdG9cclxuICAgICAgICB3aW5kb3cuUGFyc2xleS5vbignZmllbGQ6c3VjY2VzcycsICgpPT4ge1xyXG4gICAgICAgICAgICAkKCcucGFyc2xleS1zdWNjZXNzJykucGFyZW50cygnLmZvcm0tZ3JvdXAnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIC8vaW5pdCBzZWxlY3QgTk8gc2VhcmNoIGJveFxyXG4gICAgICAgICAkKCcuc2VsZWN0Mi5ub3NlYXJjaCcpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3MgOiBcIm5vLXNlYXJjaFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnNlbGVjdDIud2l0aHNlYXJjaCcpLnNlbGVjdDIoe1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgLy9Jbml0IGRlIHNjcm9sbGVyIHBsdWdpblxyXG4gICAgICAgICAkKCcuc2VsZWN0MicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIubmFub1wiKS5uYW5vU2Nyb2xsZXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIC8vSW5pdCBkZSB0b29sdGlwXHJcbiAgICAgICAgIHZhciB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSlcclxuICAgICAgICAgdmFyIHRvb2x0aXBMaXN0ID0gdG9vbHRpcFRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAodG9vbHRpcFRyaWdnZXJFbCkge1xyXG4gICAgICAgICByZXR1cm4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKHRvb2x0aXBUcmlnZ2VyRWwpXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICBcclxufTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GSU4gRlVOQ0lPTkVTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBwYXltZW50LmluaXQoKTtcclxufSk7Il0sImZpbGUiOiJwYXltZW50LmpzIn0=
