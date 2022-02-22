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
        })
       


        //Init de Toast 
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwcm9kdWN0byA9IHtcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR2FsZXLDrWEgc2xpZGVyIGRlIHByb2R1Y3RvXHJcbiAgICAgICAgJCgnI21haW4tcHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLWFycm93XCIgYXJpYS1sYWJlbD1cIlwiIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vR2FsZXLDrWEgZGUgcHJvZHVjdG9zIHJlbGFjaW9uYWRvcyAoIFBvcnF1ZSB0ZSBndXN0YS4uLilcclxuICAgICAgICAkKCcjcmVsUHJvZHMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1hcnJvd1wiIGFyaWEtbGFiZWw9XCJcIiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9HYWxlcsOtYSBkZSByZXZpZXdzXHJcbiAgICAgICAgJCgnI3Jldmlld3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBcclxuICAgIFxyXG5cclxuICAgICAgICAvL2NsYXNlIGFjdGl2YSBkZWwgYm90w7NuIGZpbHRybyBkZSBmZWNoYXMgKCBTZWxlY2Npb25lIHVuIG1lcyBkZSBzYWxpZGEpXHJcbiAgICAgICAgJCgnLmF2YWlsYWJsZS1kYXRlcyAuYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vSW5pdCBkZSB0b29sdGlwc1xyXG4gICAgICAgIHZhciB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSlcclxuICAgICAgICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2luaXQgc2VsZWN0IE5PIHNlYXJjaCBib3hcclxuICAgICAgICAkKCcuc2VsZWN0Mi5ub3NlYXJjaCcpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3MgOiBcIm5vLXNlYXJjaFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY2xhc2UgYWN0aXZhIGRlbCBib3TDs24gZGUgY3VhZHJvIHRhcmlmYXJpbyBhbCBzZWxlY2Npb25hciAxIG8gMiBoYWJpdGFjaW9uZXNcclxuICAgICAgICAkKCcucm9vbXMgLnNlbGVjdDInKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCIwIEhhYml0YWNpb25lc1wiKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLnRhYmxlJykuc2libGluZ3MoJy5idG4tc2VjdGlvbicpLmZpbmQoJy5idG4nKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy50YWJsZScpLnNpYmxpbmdzKCcuYnRuLXNlY3Rpb24nKS5maW5kKCcuYnRuJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcblxyXG5cclxuICAgICAgICAvL0luaXQgZGUgVG9hc3QgXHJcbiAgICAgICAgLy8gdmFyIHRvYXN0VHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhcicpXHJcbiAgICAgICAgLy8gdmFyIHRvYXN0TGl2ZUV4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXJUb2FzdCcpXHJcbiAgICAgICAgLy8gaWYgKHRvYXN0VHJpZ2dlcikge1xyXG4gICAgICAgIC8vIHRvYXN0VHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdExpdmVFeGFtcGxlKVxyXG5cclxuICAgICAgICAvLyAgICAgdG9hc3Quc2hvdygpXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIFxyXG59O1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRlVOQ0lPTkVTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZJTiBGVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHByb2R1Y3RvLmluaXQoKTtcclxufSk7Il0sImZpbGUiOiJwcm9kdWN0LmpzIn0=
