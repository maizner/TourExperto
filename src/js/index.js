var index = {
    
    init: function () {
        //SVG
        // Elements to inject
        var mySVGsToInject = document.querySelectorAll('img.svg');
        // Do the injection
        SVGInjector(mySVGsToInject);

        // //Header
        // $('#header').headroom({
        //     offset: 50,
        //     tolerance: {
        //         down: 0,
        //         up: -300
        //     },
        // });

        //Home Sliders
        $('#hero-items, #paymode-items').slick({
            arrows: false,
            autoplay: true,
        })


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
        })

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
        })

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
        })

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
        })


        
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