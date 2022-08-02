var scripts = {
    
    init: function () {
        

        // -----------------------------------------------------------------------------
        // COMIENZO DE VALIDACIONES Y MANIPULACION DE CLASES PARSLEY JS
        // ----------------------------------------------------------------------------- 
       
        
        
        $('.js_form_validation').parsley({
            //clases en input para estilos css 
            successClass: 'parsley-success',
            errorClass:   'parsley-error',
            
        });

        window.Parsley.addValidator('captchaValidation', {
            validateString: function(value) {
                if(debug) console.log("Validating captcha", value);
                if(value.length > 0) {
                    return true;
                } else {
                    return false;
                }                    
            }
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
        
        
         
        //Inhabilito caracteres como E, e + y - en input number
        var invalidChars = [ "-","+","e","E" ];
        var input= document.querySelectorAll("input[type=number]");

        $(input).on("keydown", function(e) {
            console.log("paso")
            if (invalidChars.includes(e.key)) {
              e.preventDefault();
            }
        });


        //Init de tooltip
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        });
    
    },  
    
};


// -----------------------------------------------------------------------------
//FUNCIONES
// ----------------------------------------------------------------------------- 

/**  We are going to remove all errors from the container. */
var cleanErrors = function() {
    $("#captchaerrors").empty();
};

var addCaptchaValidation = function() {
    
    cleanErrors();
    $('.js_form_validation').parsley().destroy();
    $('#g-recaptcha-response').attr('required', true);
    // We are going to create a new validator on Parsley
    $('#g-recaptcha-response').attr('data-parsley-captcha-validation', true);
    $('#g-recaptcha-response').attr('data-parsley-error-message', "Necesitamos que confirmes que no sos un robot. Gracias.");
    $('#g-recaptcha-response').attr('data-parsley-errors-container', "#captchaerrors");
    $('.js_form_validation').parsley();
};

var onloadCallback = function() {
    /**
     * If we try to load page to show the congrats message we don't need to load recaptcha.
     * Simply create a new key that is for live environments.
     */
    if($("#botvalidator").length > 0) {
        
        grecaptcha.render('botvalidator', {
            'sitekey' : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
            'callback': cleanErrors
        });
        addCaptchaValidation();
        /**
         * We are going to use arrive library in order to check new google recaptcha
         * element added after the current one is expired and then we will create new attributes for that element.
         * Expires-callback google recaptcha is not working, probably it is executed before element creation.
         * https://github.com/uzairfarooq/arrive/
         */
        $(document).arrive("#g-recaptcha-response", function() {
            // 'this' refers to the newly created element
            addCaptchaValidation();
        });
    }
};




// -----------------------------------------------------------------------------
//FIN FUNCIONES
// ----------------------------------------------------------------------------- 

$(function () {
    scripts.init();
});