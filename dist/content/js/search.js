var search = {
    
    init: function () {
        //SVG
        // Elements to inject
        var mySVGsToInject = document.querySelectorAll('img.svg');
        // Do the injection
        SVGInjector(mySVGsToInject);

        //init select with search (by default)
        $('#pais, #ciudad').select2()
        $('#applied').select2({
            dropdownCssClass : "d-none hide"
        })
        $("#clearAllFilters").on('click',function(){
            $("#applied").val(-100).trigger('change');
          });
        
        
        //init select NO search box
        $('#region, #supplier, #prodtype, #mes, #currency').select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass : "no-search"
        });
      
         //Init de scroller plugin
         $('.select2').on('click', function(){
            $(".nano").nanoScroller();
        });
        
        //Init range slider on shown collapsible panel, and destroy on hidden
        $('#content-morefilters').one('shown.bs.collapse', function () {
            activeSlider();
        })

        $('.dropdown-toggle').dropdown()
    },  

    
    
};


// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 
function activeSlider(){
    var sliderDias = new rSlider({
        target: '#sliderDias',
        values: ['1 Días', '10 Días', '19 Días', '27 Días', '36 Días'],
        range: true,
        set: ['1 Días', '36 Días'],
        onChange: function (vals) {
            console.log(vals);
        }
    });
    
    var sliderPrecio = new rSlider({
        target: '#sliderPrecio',
        values: ['$0', '$2517', '$5034', '$7551', '$10068', '$10.000'],
        range: true,
        set: ['$0', '$10.000'],
        onChange: function (vals) {
            console.log(vals);
        }
    });
}



// -----------------------------------------------------------------------------
//FIN FUNCIONES
// ----------------------------------------------------------------------------- 

$(function () {
    search.init();
   
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlYXJjaCA9IHtcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vU1ZHXHJcbiAgICAgICAgLy8gRWxlbWVudHMgdG8gaW5qZWN0XHJcbiAgICAgICAgdmFyIG15U1ZHc1RvSW5qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLnN2ZycpO1xyXG4gICAgICAgIC8vIERvIHRoZSBpbmplY3Rpb25cclxuICAgICAgICBTVkdJbmplY3RvcihteVNWR3NUb0luamVjdCk7XHJcblxyXG4gICAgICAgIC8vaW5pdCBzZWxlY3Qgd2l0aCBzZWFyY2ggKGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgJCgnI3BhaXMsICNjaXVkYWQnKS5zZWxlY3QyKClcclxuICAgICAgICAkKCcjYXBwbGllZCcpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzIDogXCJkLW5vbmUgaGlkZVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiI2NsZWFyQWxsRmlsdGVyc1wiKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIjYXBwbGllZFwiKS52YWwoLTEwMCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvL2luaXQgc2VsZWN0IE5PIHNlYXJjaCBib3hcclxuICAgICAgICAkKCcjcmVnaW9uLCAjc3VwcGxpZXIsICNwcm9kdHlwZSwgI21lcywgI2N1cnJlbmN5Jykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgICAgICAgICAgZHJvcGRvd25Dc3NDbGFzcyA6IFwibm8tc2VhcmNoXCJcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgIC8vSW5pdCBkZSBzY3JvbGxlciBwbHVnaW5cclxuICAgICAgICAgJCgnLnNlbGVjdDInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKFwiLm5hbm9cIikubmFub1Njcm9sbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9Jbml0IHJhbmdlIHNsaWRlciBvbiBzaG93biBjb2xsYXBzaWJsZSBwYW5lbCwgYW5kIGRlc3Ryb3kgb24gaGlkZGVuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtbW9yZWZpbHRlcnMnKS5vbmUoJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZXIoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuZHJvcGRvd24tdG9nZ2xlJykuZHJvcGRvd24oKVxyXG4gICAgfSwgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbmZ1bmN0aW9uIGFjdGl2ZVNsaWRlcigpe1xyXG4gICAgdmFyIHNsaWRlckRpYXMgPSBuZXcgclNsaWRlcih7XHJcbiAgICAgICAgdGFyZ2V0OiAnI3NsaWRlckRpYXMnLFxyXG4gICAgICAgIHZhbHVlczogWycxIETDrWFzJywgJzEwIETDrWFzJywgJzE5IETDrWFzJywgJzI3IETDrWFzJywgJzM2IETDrWFzJ10sXHJcbiAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgc2V0OiBbJzEgRMOtYXMnLCAnMzYgRMOtYXMnXSxcclxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHZhciBzbGlkZXJQcmVjaW8gPSBuZXcgclNsaWRlcih7XHJcbiAgICAgICAgdGFyZ2V0OiAnI3NsaWRlclByZWNpbycsXHJcbiAgICAgICAgdmFsdWVzOiBbJyQwJywgJyQyNTE3JywgJyQ1MDM0JywgJyQ3NTUxJywgJyQxMDA2OCcsICckMTAuMDAwJ10sXHJcbiAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgc2V0OiBbJyQwJywgJyQxMC4wMDAnXSxcclxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GSU4gRlVOQ0lPTkVTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBzZWFyY2guaW5pdCgpO1xyXG4gICBcclxufSk7Il0sImZpbGUiOiJzZWFyY2guanMifQ==
