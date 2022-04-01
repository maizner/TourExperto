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

        /**  We are going to remove all errors from the container. */
    var cleanErrors = function() {
        $("#captchaerrors").empty();
    };
    
    var addCaptchaValidation = function() {
        console.log("Adding captcha validation");
        
        cleanErrors();

        $('#myform').parsley().destroy();

        $('#g-recaptcha-response').attr('required', true);
        // We are going to create a new validator on Parsley
        $('#g-recaptcha-response').attr('data-parsley-captcha-validation', true);
        $('#g-recaptcha-response').attr('data-parsley-error-message', "Necesitamos que confirmes que no sos un robot. Gracias.");
        $('#g-recaptcha-response').attr('data-parsley-errors-container', "#captchaerrors");
    $('#myform').parsley();
    };
    

    /** We are going to add a new Parsley validator, this validation is called from
    #g-recaptcha-response after clicking the submit button*/

    window.Parsley.addValidator('captchaValidation', {

            validateString: function(value) {
                if(debug) console.log("Validating captcha", value);
                if(value.length > 0) {
                    return true;
                } else {
                    return false;
                }                    
            },
            messages: {en: 'Necesitamos que confirmes que no sos un robot. Gracias.'}
          });