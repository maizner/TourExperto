var index = {
    
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
        
        //SVG
        // Elements to inject
        var mySVGsToInject = document.querySelectorAll('img.svg');
        // Do the injection
        SVGInjector(mySVGsToInject);

        //Home Sliders
        $('#hero-items, #paymode-items').slick({
            arrows: false,
            autoplay: true,
        });


        $('#tag-items, #review-items').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,

            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            }]
        });

        $('#travel-items, #offer-items').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            variableWidth: true,
            
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            }]
        });

        $('#info-items').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
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

        $('#agent-logo-items').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button" style=""><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button" style=""><i class="fas fa-angle-right"></i></button>',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false, 
                    centerMode: false               
                },
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false, 
                    centerMode: false               
                }
            }]
        });


        
        //Date picker 
        //https://www.daterangepicker.com/
        
        $('input[name="datepicker"]').daterangepicker({
            // singleDatePicker: true,
            showDropdowns: false,
            startDate: moment().startOf('hour'),
            endDate: moment().startOf('hour').add(168, 'hour'),
            autoApply:true,
            minYear: 1901,
            locale:{
                    language: 'auto',
                    format: 'DD/MM/YYYY', 
                    daysOfWeek: ["DOM","LUN","MAR","MIER","JUE","VIE","SA" ], 
                    monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"], 
                    firstDay: 0,
                },
    
          });
          $('input[name="datepicker"]').val('¿Cuando?');

          //SE AGREGAN DATOS EN EL INPUT HIDDEN PARA SER TOMADO POR BACKEND
          $('input[name="datepicker"]').on('apply.daterangepicker', function (ev, picker) {
            // debugger;
            var a = picker.startDate.format('DD/MM/YYYY');
            var b = picker.endDate.format('DD/MM/YYYY');
            $('input[name="DateFrom"]').val(a);
            $('input[name="DateTo"]').val(b);
        });

        //Init de number spinners within the modal 
        $(".input-spinnumber").inputSpinner();
      
    
    },  
    
};


// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 



// -----------------------------------------------------------------------------
//FIN FUNCIONES
// ----------------------------------------------------------------------------- 

$(function () {
    index.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5kZXggPSB7XHJcbiAgICBcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDT01JRU5aTyBERSBWQUxJREFDSU9ORVMgWSBNQU5JUFVMQUNJT04gREUgQ0xBU0VTIFBBUlNMRVkgSlNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgICAgICAkKCcuanNfZm9ybV92YWxpZGF0aW9uJykucGFyc2xleSh7XHJcbiAgICAgICAgICAgIC8vY2xhc2VzIGVuIGlucHV0IHBhcmEgZXN0aWxvcyBjc3MgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ3BhcnNsZXktc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6ICAgJ3BhcnNsZXktZXJyb3InLFxyXG4gICAgICAgICAgICBlcnJvcnNXcmFwcGVyOic8c3BhbiBjbGFzcz1cImRlZmF1bHRfdmFsaWRhdGlvbl9tc2pcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgZXJyb3JUZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xhc2VzIHBhcmEgZXN0aWxvcyBkZSBlcnJvclxyXG4gICAgICAgIHdpbmRvdy5QYXJzbGV5Lm9uKCdmaWVsZDplcnJvcicsICgpPT4ge1xyXG4gICAgICAgICAgICAkKCcucGFyc2xleS1lcnJvcicpLnBhcmVudHMoJy5mb3JtLWdyb3VwJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc3VjY2VzcycpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQ2xhc2VzIHBhcmEgZXN0aWxvcyBkZSDDqXhpdG9cclxuICAgICAgICB3aW5kb3cuUGFyc2xleS5vbignZmllbGQ6c3VjY2VzcycsICgpPT4ge1xyXG4gICAgICAgICAgICAkKCcucGFyc2xleS1zdWNjZXNzJykucGFyZW50cygnLmZvcm0tZ3JvdXAnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL1NWR1xyXG4gICAgICAgIC8vIEVsZW1lbnRzIHRvIGluamVjdFxyXG4gICAgICAgIHZhciBteVNWR3NUb0luamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5zdmcnKTtcclxuICAgICAgICAvLyBEbyB0aGUgaW5qZWN0aW9uXHJcbiAgICAgICAgU1ZHSW5qZWN0b3IobXlTVkdzVG9JbmplY3QpO1xyXG5cclxuICAgICAgICAvL0hvbWUgU2xpZGVyc1xyXG4gICAgICAgICQoJyNoZXJvLWl0ZW1zLCAjcGF5bW9kZS1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAkKCcjdGFnLWl0ZW1zLCAjcmV2aWV3LWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyN0cmF2ZWwtaXRlbXMsICNvZmZlci1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjaW5mby1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNhZ2VudC1sb2dvLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1hcnJvd1wiIGFyaWEtbGFiZWw9XCJcIiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJcIj48aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvL0RhdGUgcGlja2VyIFxyXG4gICAgICAgIC8vaHR0cHM6Ly93d3cuZGF0ZXJhbmdlcGlja2VyLmNvbS9cclxuICAgICAgICBcclxuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZGF0ZXBpY2tlclwiXScpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgIC8vIHNpbmdsZURhdGVQaWNrZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dEcm9wZG93bnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6IG1vbWVudCgpLnN0YXJ0T2YoJ2hvdXInKSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogbW9tZW50KCkuc3RhcnRPZignaG91cicpLmFkZCgxNjgsICdob3VyJyksXHJcbiAgICAgICAgICAgIGF1dG9BcHBseTp0cnVlLFxyXG4gICAgICAgICAgICBtaW5ZZWFyOiAxOTAxLFxyXG4gICAgICAgICAgICBsb2NhbGU6e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnREQvTU0vWVlZWScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRheXNPZldlZWs6IFtcIkRPTVwiLFwiTFVOXCIsXCJNQVJcIixcIk1JRVJcIixcIkpVRVwiLFwiVklFXCIsXCJTQVwiIF0sIFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcIkVuZXJvXCIsXCJGZWJyZXJvXCIsXCJNYXJ6b1wiLFwiQWJyaWxcIixcIk1heW9cIixcIkp1bmlvXCIsXCJKdWxpb1wiLFwiQWdvc3RvXCIsXCJTZXB0aWVtYnJlXCIsXCJPY3R1YnJlXCIsXCJOb3ZpZW1icmVcIixcIkRpY2llbWJyZVwiXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3REYXk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJkYXRlcGlja2VyXCJdJykudmFsKCfCv0N1YW5kbz8nKTtcclxuXHJcbiAgICAgICAgICAvL1NFIEFHUkVHQU4gREFUT1MgRU4gRUwgSU5QVVQgSElEREVOIFBBUkEgU0VSIFRPTUFETyBQT1IgQkFDS0VORFxyXG4gICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImRhdGVwaWNrZXJcIl0nKS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24gKGV2LCBwaWNrZXIpIHtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHZhciBhID0gcGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgICAgICAgICAgdmFyIGIgPSBwaWNrZXIuZW5kRGF0ZS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cIkRhdGVGcm9tXCJdJykudmFsKGEpO1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiRGF0ZVRvXCJdJykudmFsKGIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0luaXQgZGUgbnVtYmVyIHNwaW5uZXJzIHdpdGhpbiB0aGUgbW9kYWwgXHJcbiAgICAgICAgJChcIi5pbnB1dC1zcGlubnVtYmVyXCIpLmlucHV0U3Bpbm5lcigpO1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgfSwgIFxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRklOIEZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgaW5kZXguaW5pdCgpO1xyXG59KTsiXSwiZmlsZSI6ImluZGV4LmpzIn0=
