var booking = {
    
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBib29raW5nID0ge1xyXG4gICAgXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDT01JRU5aTyBERSBWQUxJREFDSU9ORVMgWSBNQU5JUFVMQUNJT04gREUgQ0xBU0VTIFBBUlNMRVkgSlNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgICAgICAkKCcuanNfZm9ybV92YWxpZGF0aW9uJykucGFyc2xleSh7XHJcbiAgICAgICAgICAgIC8vY2xhc2VzIGVuIGlucHV0IHBhcmEgZXN0aWxvcyBjc3MgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ3BhcnNsZXktc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6ICAgJ3BhcnNsZXktZXJyb3InLFxyXG4gICAgICAgICAgICBlcnJvcnNXcmFwcGVyOic8c3BhbiBjbGFzcz1cImRlZmF1bHRfdmFsaWRhdGlvbl9tc2pcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgZXJyb3JUZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xhc2VzIHBhcmEgZXN0aWxvcyBkZSBlcnJvclxyXG4gICAgICAgIHdpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDplcnJvcicsICgpPT4ge1xyXG4gICAgICAgICAgICAkKCcucGFyc2xleS1lcnJvcicpLnBhcmVudHMoJy5mb3JtLWdyb3VwJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc3VjY2VzcycpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xhc2VzIHBhcmEgZXN0aWxvcyBkZSDDqXhpdG9cclxuICAgICAgICB3aW5kb3cuUGFyc2xleS5vbignZmllbGQ6c3VjY2VzcycsICgpPT4ge1xyXG4gICAgICAgICAgICAkKCcucGFyc2xleS1zdWNjZXNzJykucGFyZW50cygnLmZvcm0tZ3JvdXAnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRklOIEZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgYm9va2luZy5pbml0KCk7XHJcbn0pOyJdLCJmaWxlIjoiYm9va2luZy5qcyJ9
