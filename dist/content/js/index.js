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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5kZXggPSB7XHJcbiAgICBcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL1NWR1xyXG4gICAgICAgIC8vIEVsZW1lbnRzIHRvIGluamVjdFxyXG4gICAgICAgIHZhciBteVNWR3NUb0luamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5zdmcnKTtcclxuICAgICAgICAvLyBEbyB0aGUgaW5qZWN0aW9uXHJcbiAgICAgICAgU1ZHSW5qZWN0b3IobXlTVkdzVG9JbmplY3QpO1xyXG5cclxuICAgICAgICAvLyAvL0hlYWRlclxyXG4gICAgICAgIC8vICQoJyNoZWFkZXInKS5oZWFkcm9vbSh7XHJcbiAgICAgICAgLy8gICAgIG9mZnNldDogNTAsXHJcbiAgICAgICAgLy8gICAgIHRvbGVyYW5jZToge1xyXG4gICAgICAgIC8vICAgICAgICAgZG93bjogMCxcclxuICAgICAgICAvLyAgICAgICAgIHVwOiAtMzAwXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vSG9tZSBTbGlkZXJzXHJcbiAgICAgICAgJCgnI2hlcm8taXRlbXMsICNwYXltb2RlLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgJCgnI3RhZy1pdGVtcywgI3Jldmlldy1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyN0cmF2ZWwtaXRlbXMsICNvZmZlci1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNpbmZvLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjYWdlbnQtbG9nby1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLWFycm93XCIgYXJpYS1sYWJlbD1cIlwiIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIlwiPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stYXJyb3dcIiBhcmlhLWxhYmVsPVwiXCIgdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwiXCI+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvL0RhdGUgcGlja2VyIFxyXG4gICAgICAgIC8vaHR0cHM6Ly93d3cuZGF0ZXJhbmdlcGlja2VyLmNvbS9cclxuICAgICAgICBcclxuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZGF0ZXBpY2tlclwiXScpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgIC8vIHNpbmdsZURhdGVQaWNrZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dEcm9wZG93bnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6IG1vbWVudCgpLnN0YXJ0T2YoJ2hvdXInKSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogbW9tZW50KCkuc3RhcnRPZignaG91cicpLmFkZCgxNjgsICdob3VyJyksXHJcbiAgICAgICAgICAgIGF1dG9BcHBseTp0cnVlLFxyXG4gICAgICAgICAgICBtaW5ZZWFyOiAxOTAxLFxyXG4gICAgICAgICAgICBsb2NhbGU6e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnREQvTU0vWVlZWScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRheXNPZldlZWs6IFtcIkRPTVwiLFwiTFVOXCIsXCJNQVJcIixcIk1JRVJcIixcIkpVRVwiLFwiVklFXCIsXCJTQVwiIF0sIFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcIkVuZXJvXCIsXCJGZWJyZXJvXCIsXCJNYXJ6b1wiLFwiQWJyaWxcIixcIk1heW9cIixcIkp1bmlvXCIsXCJKdWxpb1wiLFwiQWdvc3RvXCIsXCJTZXB0aWVtYnJlXCIsXCJPY3R1YnJlXCIsXCJOb3ZpZW1icmVcIixcIkRpY2llbWJyZVwiXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3REYXk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJkYXRlcGlja2VyXCJdJykudmFsKCfCv0N1YW5kbz8nKTtcclxuXHJcbiAgICAgICAgICAvL1NFIEFHUkVHQU4gREFUT1MgRU4gRUwgSU5QVVQgSElEREVOIFBBUkEgU0VSIFRPTUFETyBQT1IgQkFDS0VORFxyXG4gICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImRhdGVwaWNrZXJcIl0nKS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24gKGV2LCBwaWNrZXIpIHtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHZhciBhID0gcGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgICAgICAgICAgdmFyIGIgPSBwaWNrZXIuZW5kRGF0ZS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cIkRhdGVGcm9tXCJdJykudmFsKGEpO1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiRGF0ZVRvXCJdJykudmFsKGIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgfSwgIFxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRklOIEZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgaW5kZXguaW5pdCgpO1xyXG59KTsiXSwiZmlsZSI6ImluZGV4LmpzIn0=
