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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzY3JpcHRzID0ge1xyXG4gICAgXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ09NSUVOWk8gREUgVkFMSURBQ0lPTkVTIFkgTUFOSVBVTEFDSU9OIERFIENMQVNFUyBQQVJTTEVZIEpTXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAkKCcuanNfZm9ybV92YWxpZGF0aW9uJykucGFyc2xleSh7XHJcbiAgICAgICAgICAgIC8vY2xhc2VzIGVuIGlucHV0IHBhcmEgZXN0aWxvcyBjc3MgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ3BhcnNsZXktc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6ICAgJ3BhcnNsZXktZXJyb3InLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LlBhcnNsZXkuYWRkVmFsaWRhdG9yKCdjYXB0Y2hhVmFsaWRhdGlvbicsIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVTdHJpbmc6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkZWJ1ZykgY29uc29sZS5sb2coXCJWYWxpZGF0aW5nIGNhcHRjaGFcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0NsYXNlcyBwYXJhIGVzdGlsb3MgZGUgZXJyb3JcclxuICAgICAgICB3aW5kb3cuUGFyc2xleS5vbignZmllbGQ6ZXJyb3InLCAoKT0+IHtcclxuICAgICAgICAgICAgJCgnLnBhcnNsZXktZXJyb3InKS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0NsYXNlcyBwYXJhIGVzdGlsb3MgZGUgw6l4aXRvXHJcbiAgICAgICAgd2luZG93LlBhcnNsZXkub24oJ2ZpZWxkOnN1Y2Nlc3MnLCAoKT0+IHtcclxuICAgICAgICAgICAgJCgnLnBhcnNsZXktc3VjY2VzcycpLnBhcmVudHMoJy5mb3JtLWdyb3VwJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIC8vSW5oYWJpbGl0byBjYXJhY3RlcmVzIGNvbW8gRSwgZSArIHkgLSBlbiBpbnB1dCBudW1iZXJcclxuICAgICAgICB2YXIgaW52YWxpZENoYXJzID0gWyBcIi1cIixcIitcIixcImVcIixcIkVcIiBdO1xyXG4gICAgICAgIHZhciBpbnB1dD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9bnVtYmVyXVwiKTtcclxuXHJcbiAgICAgICAgJChpbnB1dCkub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXNvXCIpXHJcbiAgICAgICAgICAgIGlmIChpbnZhbGlkQ2hhcnMuaW5jbHVkZXMoZS5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL0luaXQgZGUgdG9vbHRpcFxyXG4gICAgICAgIHZhciB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSlcclxuICAgICAgICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICB9LCAgXHJcbiAgICBcclxufTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZVTkNJT05FU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbi8qKiAgV2UgYXJlIGdvaW5nIHRvIHJlbW92ZSBhbGwgZXJyb3JzIGZyb20gdGhlIGNvbnRhaW5lci4gKi9cclxudmFyIGNsZWFuRXJyb3JzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI2NhcHRjaGFlcnJvcnNcIikuZW1wdHkoKTtcclxufTtcclxuXHJcbnZhciBhZGRDYXB0Y2hhVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICBjbGVhbkVycm9ycygpO1xyXG4gICAgJCgnLmpzX2Zvcm1fdmFsaWRhdGlvbicpLnBhcnNsZXkoKS5kZXN0cm95KCk7XHJcbiAgICAkKCcjZy1yZWNhcHRjaGEtcmVzcG9uc2UnKS5hdHRyKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gICAgLy8gV2UgYXJlIGdvaW5nIHRvIGNyZWF0ZSBhIG5ldyB2YWxpZGF0b3Igb24gUGFyc2xleVxyXG4gICAgJCgnI2ctcmVjYXB0Y2hhLXJlc3BvbnNlJykuYXR0cignZGF0YS1wYXJzbGV5LWNhcHRjaGEtdmFsaWRhdGlvbicsIHRydWUpO1xyXG4gICAgJCgnI2ctcmVjYXB0Y2hhLXJlc3BvbnNlJykuYXR0cignZGF0YS1wYXJzbGV5LWVycm9yLW1lc3NhZ2UnLCBcIk5lY2VzaXRhbW9zIHF1ZSBjb25maXJtZXMgcXVlIG5vIHNvcyB1biByb2JvdC4gR3JhY2lhcy5cIik7XHJcbiAgICAkKCcjZy1yZWNhcHRjaGEtcmVzcG9uc2UnKS5hdHRyKCdkYXRhLXBhcnNsZXktZXJyb3JzLWNvbnRhaW5lcicsIFwiI2NhcHRjaGFlcnJvcnNcIik7XHJcbiAgICAkKCcuanNfZm9ybV92YWxpZGF0aW9uJykucGFyc2xleSgpO1xyXG59O1xyXG5cclxudmFyIG9ubG9hZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvKipcclxuICAgICAqIElmIHdlIHRyeSB0byBsb2FkIHBhZ2UgdG8gc2hvdyB0aGUgY29uZ3JhdHMgbWVzc2FnZSB3ZSBkb24ndCBuZWVkIHRvIGxvYWQgcmVjYXB0Y2hhLlxyXG4gICAgICogU2ltcGx5IGNyZWF0ZSBhIG5ldyBrZXkgdGhhdCBpcyBmb3IgbGl2ZSBlbnZpcm9ubWVudHMuXHJcbiAgICAgKi9cclxuICAgIGlmKCQoXCIjYm90dmFsaWRhdG9yXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBcclxuICAgICAgICBncmVjYXB0Y2hhLnJlbmRlcignYm90dmFsaWRhdG9yJywge1xyXG4gICAgICAgICAgICAnc2l0ZWtleScgOiAnNkxlSXhBY1RBQUFBQUpjWlZScXlIaDcxVU1JRUdOUV9NWGppWktoSScsXHJcbiAgICAgICAgICAgICdjYWxsYmFjayc6IGNsZWFuRXJyb3JzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRkQ2FwdGNoYVZhbGlkYXRpb24oKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXZSBhcmUgZ29pbmcgdG8gdXNlIGFycml2ZSBsaWJyYXJ5IGluIG9yZGVyIHRvIGNoZWNrIG5ldyBnb29nbGUgcmVjYXB0Y2hhXHJcbiAgICAgICAgICogZWxlbWVudCBhZGRlZCBhZnRlciB0aGUgY3VycmVudCBvbmUgaXMgZXhwaXJlZCBhbmQgdGhlbiB3ZSB3aWxsIGNyZWF0ZSBuZXcgYXR0cmlidXRlcyBmb3IgdGhhdCBlbGVtZW50LlxyXG4gICAgICAgICAqIEV4cGlyZXMtY2FsbGJhY2sgZ29vZ2xlIHJlY2FwdGNoYSBpcyBub3Qgd29ya2luZywgcHJvYmFibHkgaXQgaXMgZXhlY3V0ZWQgYmVmb3JlIGVsZW1lbnQgY3JlYXRpb24uXHJcbiAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL3V6YWlyZmFyb29xL2Fycml2ZS9cclxuICAgICAgICAgKi9cclxuICAgICAgICAkKGRvY3VtZW50KS5hcnJpdmUoXCIjZy1yZWNhcHRjaGEtcmVzcG9uc2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICd0aGlzJyByZWZlcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgZWxlbWVudFxyXG4gICAgICAgICAgICBhZGRDYXB0Y2hhVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GSU4gRlVOQ0lPTkVTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBzY3JpcHRzLmluaXQoKTtcclxufSk7Il0sImZpbGUiOiJzY3JpcHRzLmpzIn0=
