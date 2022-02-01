var producto = {
    
    init: function () {
        
        //Galería slider de producto
        $('#main-product-slider').slick({
            infinite: true,
            speed: 800,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button" style=""><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button" style=""><i class="fas fa-chevron-right"></i></button>'
        })

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
      
        
        // $('.categ-accordion .accordion-body input[name="selectradio"]').on('change', function(){
        //     if ($('input[name="selectradio"]').is(':checked')){
        //         $(this).parents('.table').siblings('.btn-section').find('.btn').addClass("active");
        //     }else{
        //         $(this).parents('.table').siblings('.btn-section').find('.btn').removeClass("active");
        //     }
        // });

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
        $('.rooms .select2').select2({
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
        })
       


        //Init de Toast para reservar (Trigger con usuario NO ingresado al sistema)
        // var toastTrigger = document.getElementById('reservar')
        // var toastLiveExample = document.getElementById('reservarToast')
        // if (toastTrigger) {
        // toastTrigger.addEventListener('click', function () {
        //     var toast = new bootstrap.Toast(toastLiveExample)

        //     toast.show()
        // })
        // }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwcm9kdWN0byA9IHtcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR2FsZXLDrWEgc2xpZGVyIGRlIHByb2R1Y3RvXHJcbiAgICAgICAgJCgnI21haW4tcHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLWFycm93XCIgYXJpYS1sYWJlbD1cIlwiIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vR2FsZXLDrWEgZGUgcHJvZHVjdG9zIHJlbGFjaW9uYWRvcyAoIFBvcnF1ZSB0ZSBndXN0YS4uLilcclxuICAgICAgICAkKCcjcmVsUHJvZHMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1hcnJvd1wiIGFyaWEtbGFiZWw9XCJcIiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9HYWxlcsOtYSBkZSByZXZpZXdzXHJcbiAgICAgICAgJCgnI3Jldmlld3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyAkKCcuY2F0ZWctYWNjb3JkaW9uIC5hY2NvcmRpb24tYm9keSBpbnB1dFtuYW1lPVwic2VsZWN0cmFkaW9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgaWYgKCQoJ2lucHV0W25hbWU9XCJzZWxlY3RyYWRpb1wiXScpLmlzKCc6Y2hlY2tlZCcpKXtcclxuICAgICAgICAvLyAgICAgICAgICQodGhpcykucGFyZW50cygnLnRhYmxlJykuc2libGluZ3MoJy5idG4tc2VjdGlvbicpLmZpbmQoJy5idG4nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy50YWJsZScpLnNpYmxpbmdzKCcuYnRuLXNlY3Rpb24nKS5maW5kKCcuYnRuJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy9jbGFzZSBhY3RpdmEgZGVsIGJvdMOzbiBmaWx0cm8gZGUgZmVjaGFzICggU2VsZWNjaW9uZSB1biBtZXMgZGUgc2FsaWRhKVxyXG4gICAgICAgICQoJy5hdmFpbGFibGUtZGF0ZXMgLmJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0luaXQgZGUgdG9vbHRpcHNcclxuICAgICAgICB2YXIgdG9vbHRpcFRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykpXHJcbiAgICAgICAgdmFyIHRvb2x0aXBMaXN0ID0gdG9vbHRpcFRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAodG9vbHRpcFRyaWdnZXJFbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9pbml0IHNlbGVjdCBOTyBzZWFyY2ggYm94XHJcbiAgICAgICAgJCgnLnJvb21zIC5zZWxlY3QyJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgICAgICAgICAgZHJvcGRvd25Dc3NDbGFzcyA6IFwibm8tc2VhcmNoXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9jbGFzZSBhY3RpdmEgZGVsIGJvdMOzbiBkZSBjdWFkcm8gdGFyaWZhcmlvIGFsIHNlbGVjY2lvbmFyIDEgbyAyIGhhYml0YWNpb25lc1xyXG4gICAgICAgICQoJy5yb29tcyAuc2VsZWN0MicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIjAgSGFiaXRhY2lvbmVzXCIpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcudGFibGUnKS5zaWJsaW5ncygnLmJ0bi1zZWN0aW9uJykuZmluZCgnLmJ0bicpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLnRhYmxlJykuc2libGluZ3MoJy5idG4tc2VjdGlvbicpLmZpbmQoJy5idG4nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vSW5pdCBkZSBUb2FzdCBwYXJhIHJlc2VydmFyIChUcmlnZ2VyIGNvbiB1c3VhcmlvIE5PIGluZ3Jlc2FkbyBhbCBzaXN0ZW1hKVxyXG4gICAgICAgIC8vIHZhciB0b2FzdFRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXInKVxyXG4gICAgICAgIC8vIHZhciB0b2FzdExpdmVFeGFtcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmFyVG9hc3QnKVxyXG4gICAgICAgIC8vIGlmICh0b2FzdFRyaWdnZXIpIHtcclxuICAgICAgICAvLyB0b2FzdFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciB0b2FzdCA9IG5ldyBib290c3RyYXAuVG9hc3QodG9hc3RMaXZlRXhhbXBsZSlcclxuXHJcbiAgICAgICAgLy8gICAgIHRvYXN0LnNob3coKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICBcclxufTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GSU4gRlVOQ0lPTkVTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBwcm9kdWN0by5pbml0KCk7XHJcbn0pOyJdLCJmaWxlIjoiYm9va2luZy5qcyJ9
