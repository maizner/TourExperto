var search = {
    
    init: function () {
        //SVG
        // Elements to inject
        var mySVGsToInject = document.querySelectorAll('img.svg');
        // Do the injection
        SVGInjector(mySVGsToInject);

        //init select with search (by default)
        $('#paises, #ciudades, #anio').select2()
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
        
        activeSliderDuracion()
        //Init range slider on shown collapsible panel, and destroy on hidden
        $('#content-morefilters').one('shown.bs.collapse', function () {
            activeSliderPrecio()
        })

        $('.dropdown-toggle').dropdown()

        $("input[type='checkbox']").on("change", function () {
	        if (this.checked) {
	            $(this)
					.parent()
					.addClass("checked")
					.next('.panel')
					.addClass("ui-selected")

	        } else {
	            $(this)
					.parent()
					.removeClass("checked")
					.next('.panel')
					.removeClass("ui-selected")
	        }
	    })
    },  

    
    
};


// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 
function activeSliderDuracion(){
    var sliderDuracion = new rSlider({
        target: '#sliderDuracion',
        values: ['1 Días', '10 Días', '19 Días', '27 Días', '36 Días'],
        range: true,
        set: ['1 Días', '36 Días'],
        onChange: function (vals) {
            console.log(vals);
        }
    });
    
}

function activeSliderPrecio(){
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlYXJjaCA9IHtcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vU1ZHXHJcbiAgICAgICAgLy8gRWxlbWVudHMgdG8gaW5qZWN0XHJcbiAgICAgICAgdmFyIG15U1ZHc1RvSW5qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLnN2ZycpO1xyXG4gICAgICAgIC8vIERvIHRoZSBpbmplY3Rpb25cclxuICAgICAgICBTVkdJbmplY3RvcihteVNWR3NUb0luamVjdCk7XHJcblxyXG4gICAgICAgIC8vaW5pdCBzZWxlY3Qgd2l0aCBzZWFyY2ggKGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgJCgnI3BhaXNlcywgI2NpdWRhZGVzLCAjYW5pbycpLnNlbGVjdDIoKVxyXG4gICAgICAgICQoJyNhcHBsaWVkJykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3MgOiBcImQtbm9uZSBoaWRlXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIjY2xlYXJBbGxGaWx0ZXJzXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIiNhcHBsaWVkXCIpLnZhbCgtMTAwKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaW5pdCBzZWxlY3QgTk8gc2VhcmNoIGJveFxyXG4gICAgICAgICQoJyNyZWdpb24sICNzdXBwbGllciwgI3Byb2R0eXBlLCAjbWVzLCAjY3VycmVuY3knKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxyXG4gICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzIDogXCJuby1zZWFyY2hcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgLy9Jbml0IGRlIHNjcm9sbGVyIHBsdWdpblxyXG4gICAgICAgICAkKCcuc2VsZWN0MicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIubmFub1wiKS5uYW5vU2Nyb2xsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBhY3RpdmVTbGlkZXJEdXJhY2lvbigpXHJcbiAgICAgICAgLy9Jbml0IHJhbmdlIHNsaWRlciBvbiBzaG93biBjb2xsYXBzaWJsZSBwYW5lbCwgYW5kIGRlc3Ryb3kgb24gaGlkZGVuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtbW9yZWZpbHRlcnMnKS5vbmUoJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZXJQcmVjaW8oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bi10b2dnbGUnKS5kcm9wZG93bigpXHJcblxyXG4gICAgICAgICQoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuXHQgICAgICAgICAgICAkKHRoaXMpXHJcblx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcImNoZWNrZWRcIilcclxuXHRcdFx0XHRcdC5uZXh0KCcucGFuZWwnKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKFwidWktc2VsZWN0ZWRcIilcclxuXHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICQodGhpcylcclxuXHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKFwiY2hlY2tlZFwiKVxyXG5cdFx0XHRcdFx0Lm5leHQoJy5wYW5lbCcpXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoXCJ1aS1zZWxlY3RlZFwiKVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KVxyXG4gICAgfSwgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVU5DSU9ORVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbmZ1bmN0aW9uIGFjdGl2ZVNsaWRlckR1cmFjaW9uKCl7XHJcbiAgICB2YXIgc2xpZGVyRHVyYWNpb24gPSBuZXcgclNsaWRlcih7XHJcbiAgICAgICAgdGFyZ2V0OiAnI3NsaWRlckR1cmFjaW9uJyxcclxuICAgICAgICB2YWx1ZXM6IFsnMSBEw61hcycsICcxMCBEw61hcycsICcxOSBEw61hcycsICcyNyBEw61hcycsICczNiBEw61hcyddLFxyXG4gICAgICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgICAgIHNldDogWycxIETDrWFzJywgJzM2IETDrWFzJ10sXHJcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWxzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZVNsaWRlclByZWNpbygpe1xyXG4gICAgdmFyIHNsaWRlclByZWNpbyA9IG5ldyByU2xpZGVyKHtcclxuICAgICAgICB0YXJnZXQ6ICcjc2xpZGVyUHJlY2lvJyxcclxuICAgICAgICB2YWx1ZXM6IFsnJDAnLCAnJDI1MTcnLCAnJDUwMzQnLCAnJDc1NTEnLCAnJDEwMDY4JywgJyQxMC4wMDAnXSxcclxuICAgICAgICByYW5nZTogdHJ1ZSxcclxuICAgICAgICBzZXQ6IFsnJDAnLCAnJDEwLjAwMCddLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFscykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRklOIEZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgc2VhcmNoLmluaXQoKTtcclxuICAgXHJcbn0pOyJdLCJmaWxlIjoic2VhcmNoLmpzIn0=
