var producto = {
    
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
        
        
        //Galería slider de producto
        $('#main-product-slider').slick({
            infinite: true,
            speed: 800,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button" style=""><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button" style=""><i class="fas fa-chevron-right"></i></button>'
        });

        //Galería de productos relacionados ( Porque te gusta...)
        $('#relProds').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button" style=""><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button" style=""><i class="fas fa-chevron-right"></i></button>',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false, 
                    centerMode: false               
                }
            }]
        });
        
        //Galería de reviews
        $('#reviewslider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
          
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false, 
                    centerMode: false               
                }
            }]
        });
      
        
    

        //clase activa del botón filtro de fechas ( Seleccione un mes de salida)
        $('.available-dates .btn').on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
        });

        //Init de tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        });

        //init select NO search box
        $('.select2.nosearch').select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass : "no-search"
        });

        //clase activa del botón de cuadro tarifario al seleccionar 1 o 2 habitaciones
        $('.rooms .select2').on('change', function (e) {
            if ($(this).val() == "0 Habitaciones"){
                $(this).parents('.table').siblings('.btn-section').find('.btn').removeClass("active");
            }else{
                $(this).parents('.table').siblings('.btn-section').find('.btn').addClass("active");
            }
            console.log($(this).val())
        });
       


        //Init de number spinners within the modal 
        $(".input-spinnumber").inputSpinner();
    }
       
    
};


// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 



// -----------------------------------------------------------------------------
//FIN FUNCIONES
// ----------------------------------------------------------------------------- 

$(function () {
    producto.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwcm9kdWN0byA9IHtcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIENPTUlFTlpPIERFIFZBTElEQUNJT05FUyBZIE1BTklQVUxBQ0lPTiBERSBDTEFTRVMgUEFSU0xFWSBKU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4gICAgICAgICQoJy5qc19mb3JtX3ZhbGlkYXRpb24nKS5wYXJzbGV5KHtcclxuICAgICAgICAgICAgLy9jbGFzZXMgZW4gaW5wdXQgcGFyYSBlc3RpbG9zIGNzcyBcclxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAncGFyc2xleS1zdWNjZXNzJyxcclxuICAgICAgICAgICAgZXJyb3JDbGFzczogICAncGFyc2xleS1lcnJvcicsXHJcbiAgICAgICAgICAgIGVycm9yc1dyYXBwZXI6JzxzcGFuIGNsYXNzPVwiZGVmYXVsdF92YWxpZGF0aW9uX21zalwiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICBlcnJvclRlbXBsYXRlOic8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tbWVzc2FnZVwiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGFzZXMgcGFyYSBlc3RpbG9zIGRlIGVycm9yXHJcbiAgICAgICAgd2luZG93LlBhcnNsZXkub24oJ2ZpZWxkOmVycm9yJywgKCk9PiB7XHJcbiAgICAgICAgICAgICQoJy5wYXJzbGV5LWVycm9yJykucGFyZW50cygnLmZvcm0tZ3JvdXAnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGFzZXMgcGFyYSBlc3RpbG9zIGRlIMOpeGl0b1xyXG4gICAgICAgIHdpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDpzdWNjZXNzJywgKCk9PiB7XHJcbiAgICAgICAgICAgICQoJy5wYXJzbGV5LXN1Y2Nlc3MnKS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZXJyb3InKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR2FsZXLDrWEgc2xpZGVyIGRlIHByb2R1Y3RvXHJcbiAgICAgICAgJCgnI21haW4tcHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLWFycm93XCIgYXJpYS1sYWJlbD1cIlwiIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0dhbGVyw61hIGRlIHByb2R1Y3RvcyByZWxhY2lvbmFkb3MgKCBQb3JxdWUgdGUgZ3VzdGEuLi4pXHJcbiAgICAgICAgJCgnI3JlbFByb2RzJykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLWFycm93XCIgYXJpYS1sYWJlbD1cIlwiIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR2FsZXLDrWEgZGUgcmV2aWV3c1xyXG4gICAgICAgICQoJyNyZXZpZXdzbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICBcclxuXHJcbiAgICAgICAgLy9jbGFzZSBhY3RpdmEgZGVsIGJvdMOzbiBmaWx0cm8gZGUgZmVjaGFzICggU2VsZWNjaW9uZSB1biBtZXMgZGUgc2FsaWRhKVxyXG4gICAgICAgICQoJy5hdmFpbGFibGUtZGF0ZXMgLmJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0luaXQgZGUgdG9vbHRpcHNcclxuICAgICAgICB2YXIgdG9vbHRpcFRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykpXHJcbiAgICAgICAgdmFyIHRvb2x0aXBMaXN0ID0gdG9vbHRpcFRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAodG9vbHRpcFRyaWdnZXJFbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9pbml0IHNlbGVjdCBOTyBzZWFyY2ggYm94XHJcbiAgICAgICAgJCgnLnNlbGVjdDIubm9zZWFyY2gnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxyXG4gICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzIDogXCJuby1zZWFyY2hcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NsYXNlIGFjdGl2YSBkZWwgYm90w7NuIGRlIGN1YWRybyB0YXJpZmFyaW8gYWwgc2VsZWNjaW9uYXIgMSBvIDIgaGFiaXRhY2lvbmVzXHJcbiAgICAgICAgJCgnLnJvb21zIC5zZWxlY3QyJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IFwiMCBIYWJpdGFjaW9uZXNcIil7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy50YWJsZScpLnNpYmxpbmdzKCcuYnRuLXNlY3Rpb24nKS5maW5kKCcuYnRuJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcudGFibGUnKS5zaWJsaW5ncygnLmJ0bi1zZWN0aW9uJykuZmluZCgnLmJ0bicpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vSW5pdCBkZSBudW1iZXIgc3Bpbm5lcnMgd2l0aGluIHRoZSBtb2RhbCBcclxuICAgICAgICAkKFwiLmlucHV0LXNwaW5udW1iZXJcIikuaW5wdXRTcGlubmVyKCk7XHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIFxyXG59O1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRlVOQ0lPTkVTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZJTiBGVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHByb2R1Y3RvLmluaXQoKTtcclxufSk7Il0sImZpbGUiOiJwcm9kdWN0LmpzIn0=
