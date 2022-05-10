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
        $('.select2.withsearch').select2({
        });
      
         //Init de scroller plugin
         $('.select2').on('click', function(){
            $(".nano").nanoScroller();
        });
        
        // SVG Elements to inject
        var mySVGsToInject = document.querySelectorAll('img.inject-me');
        // Do the injection
        SVGInjector(mySVGsToInject);
        console.log(mySVGsToInject)
    }
       
    
};


// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 



// -----------------------------------------------------------------------------
//FIN FUNCIONES
// ----------------------------------------------------------------------------- 

$(function () {
    myaccount.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJteS1vcGVyYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBteWFjY291bnQgPSB7XHJcbiAgICBcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIENPTUlFTlpPIERFIFZBTElEQUNJT05FUyBZIE1BTklQVUxBQ0lPTiBERSBDTEFTRVMgUEFSU0xFWSBKU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4gICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5qc19mb3JtX3ZhbGlkYXRpb24nKS5wYXJzbGV5KHtcclxuICAgICAgICAgICAgLy9jbGFzZXMgZW4gaW5wdXQgcGFyYSBlc3RpbG9zIGNzcyBcclxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAncGFyc2xleS1zdWNjZXNzJyxcclxuICAgICAgICAgICAgZXJyb3JDbGFzczogICAncGFyc2xleS1lcnJvcicsXHJcbiAgICAgICAgICAgIGVycm9yc1dyYXBwZXI6JzxzcGFuIGNsYXNzPVwiZGVmYXVsdF92YWxpZGF0aW9uX21zalwiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICBlcnJvclRlbXBsYXRlOic8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tbWVzc2FnZVwiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGFzZXMgcGFyYSBlc3RpbG9zIGRlIGVycm9yXHJcbiAgICAgICAgd2luZG93LlBhcnNsZXkub24oJ2ZpZWxkOmVycm9yJywgKCk9PiB7XHJcbiAgICAgICAgICAgICQoJy5wYXJzbGV5LWVycm9yJykucGFyZW50cygnLmZvcm0tZ3JvdXAnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGFzZXMgcGFyYSBlc3RpbG9zIGRlIMOpeGl0b1xyXG4gICAgICAgIHdpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDpzdWNjZXNzJywgKCk9PiB7XHJcbiAgICAgICAgICAgICQoJy5wYXJzbGV5LXN1Y2Nlc3MnKS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZXJyb3InKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy9pbml0IHNlbGVjdCBOTyBzZWFyY2ggYm94XHJcbiAgICAgICAgICQoJy5zZWxlY3QyLm5vc2VhcmNoJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgICAgICAgICAgZHJvcGRvd25Dc3NDbGFzcyA6IFwibm8tc2VhcmNoXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuc2VsZWN0Mi53aXRoc2VhcmNoJykuc2VsZWN0Mih7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAvL0luaXQgZGUgc2Nyb2xsZXIgcGx1Z2luXHJcbiAgICAgICAgICQoJy5zZWxlY3QyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIi5uYW5vXCIpLm5hbm9TY3JvbGxlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNWRyBFbGVtZW50cyB0byBpbmplY3RcclxuICAgICAgICB2YXIgbXlTVkdzVG9JbmplY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuaW5qZWN0LW1lJyk7XHJcbiAgICAgICAgLy8gRG8gdGhlIGluamVjdGlvblxyXG4gICAgICAgIFNWR0luamVjdG9yKG15U1ZHc1RvSW5qZWN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhteVNWR3NUb0luamVjdClcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRklOIEZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbXlhY2NvdW50LmluaXQoKTtcclxufSk7Il0sImZpbGUiOiJteS1vcGVyYXRpb25zLmpzIn0=
