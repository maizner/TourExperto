var search = {
    
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
        });

        $('.dropdown-toggle').dropdown();

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
	    });

        //Init de number spinners within the modal 
        $(".input-spinnumber").inputSpinner()
    }
      

    
    
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