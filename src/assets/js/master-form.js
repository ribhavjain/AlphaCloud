    // <!-- Adds classes to form-group based on focus/blur/has value -->      
    $(function(){
        $('input.form-control').focus(function() {$( this ).closest( '.form-group' ).addClass('vp-focus ');});
        
        $('input:radio,input:checkbox').change(function() {
            $( '.form-group' ).removeClass('vp-focus');
            $( this ).closest( '.form-group' ).addClass('vp-focus');
        });
        $('.vp-form-bdr input,.vp-form-bdr textarea,.vp-form-radio input,.vp-form-checkbox input')
        .focus(function() {
                $( '.vp-form-radio input,.vp-form-checkbox input,.vp-form-select' ).closest( '.form-group' ).removeClass('vp-focus');
          $( this ).closest( '.form-group' ).removeClass('vp-hasvalue');
            $( this ).closest( '.form-group' ).addClass('vp-focus');
        })
        .blur(function(){
                if($( this ).not( $( '.vp-form-radio input' ))){$( this ).closest( '.form-group' ).removeClass('vp-focus');}
                if($( this ).val()){$( this ).closest( '.form-group' ).addClass('vp-hasvalue');}
                else{$( this ).closest( '.form-group' ).removeClass('has-success');}
        });
    }); 

      //Initialize the validation object which will be called on form submit.
        $( document ).ready( function () {
       var validobj = $( "#masterForm" ).validate( { //Form ID
                rules: {
                    vpInputReq: {required: true,minlength: 2}, //input field with name:vpInputReq
                    vpInputConf: {minlength: 2}, //input field with name:vpInputConf
                    vpInputWarn: {minlength: 2},
                    InputFormat: {required: true,minlength: 10},
                    vpInputUser: {required: true,minlength: 5},
                    vpPassword: {required: true,minlength: 5},//pattern: /[a-zA-Z][0-9]/},
                    vpInputCheck: {required: true },
                    vpInputRadio: {required: true },
                    vpSelect:   {required: true }
                },
                messages: {
                    vpInputReq: {
                        required: "Required error message text goes here.",
                        minlength: "Error message text goes here. <a href='#' >redirect link</a>"
                    },
                    vpInputConf: "Error message text goes here. <a href='#' >redirect link</a>",
                    vpInputWarn: "Warning message text goes here. <a href='#' >redirect link</a>",
                    InputFormat: {
                        required: "Required error message text goes here.",
                        minlength: "Error message text goes here. <a href='#' >redirect link</a>"
                    },
                    vpInputUser: {
                        required: "Please enter a username",
                        minlength: "Your username must consist of at least 5 characters"
                    },
                    vpPassword: "",
                    vpInputCheck: "Required",
                    vpInputRadio: "Required",
                    vpSelect: "Error message text goes here. <a href='#' >redirect link</a>"
                },
                errorElement: "em",
                errorPlacement: function ( error, element ) {
                    error.addClass( "help-text" );// Add the `help-block` class to the error element

                    // Add `has-feedback` class to the parent div.form-group
                    // in order to add icons to inputs
                    element.parents( ".form-group" ).addClass( "has-feedback" );
                
                    var fgpe = element.parents( ".form-group" );
                    // As long as element is NOT checkbox or radio button.
                    if ( !($( element ).is(':checkbox') || $( element ).is(':radio')))  {
                        $( fgpe ).find( ".vp-form-message" ).append( error );
                        $( fgpe ).find( ".vp-form-message" ).css( "height", "auto" );
                    }
                    // Add the span element, if doesn't exists, and apply the icon classes to it.
                    if ( !element.next( "span.form-validate-icon" )[ 0 ] ) {
                        if ( !($( element ).is(':checkbox') || $( element ).is(':radio'))) {
                            $( "<span class='form-validate-icon normal vxdsicon vxdsicon-error'></span>" ).insertAfter( element );
                        }
                    }
                },
                success: function ( label, element ) {
                    // Add the span element, if doesn't exists, and apply the icon classes to it.
                    if ( !$( element ).next( "span.form-validate-icon" )[ 0 ] ) {
                        if ( !($( element ).is(':checkbox') || $( element ).is(':radio'))) {
                            $( "<span class='form-validate-icon normal vxdsicon vxdsicon-valid'></span>" ).insertAfter( $( element ) );
                        }
                    }
                },
                highlight: function ( element, errorClass, validClass ) {
                    $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
                    if ( !$( element ).is(':checkbox') || $( element ).is(':radio')) {
                        $( element ).next( "span.form-validate-icon" ).addClass( "vxdsicon-error" ).removeClass( " vxdsicon-valid" );
                    }
                },
                unhighlight: function ( element, errorClass, validClass ) {
                    $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
                    if ( !($( element ).is(':checkbox') || $( element ).is(':radio'))) {
                        $( element ).next( "span.form-validate-icon" ).addClass( " vxdsicon-valid" ).removeClass( "vxdsicon-error" );
                    }
                }

            });
            
        //If the change event fires we want to see if the form validates.
        //But we don't want to check before the form has been submitted by the user
        //initially.
        $(document).on("change", ".select2-offscreen", function () {
                //alert('1 ~ line378');
                if (!$.isEmptyObject(validobj.submitted)) {
                    validobj.form();
                }
        });

            //Code the creates the SELECT2 Dropdown
            //Transforms the listbox visually into a Select2.
            /* https://select2.org/programmatic-control/events#limiting-the-scope-of-the-change-event */    
            $("#vpSelect").select2({
                selectOnClose: true,
                width: '100%', // need to override the changed default
                theme: "bootstrap",
                placeholder: "Placeholder",
                allowClear:false
            }).on("select2:select", function (e) {
            var selected_element = $(e.currentTarget);
            var select_val = selected_element.val();
            var tmpval = $("#vpSelect").val();
                if(tmpval == '') {
                    $( this ).closest( '.form-group' ).removeClass('vp-hasvalue');
                } else {
                    $( this ).closest( '.form-group' ).addClass('vp-hasvalue');
                }
                $("#vpSelect").val( select_val );
                if (!$.isEmptyObject(validobj.submitted)) {
                    validobj.form();
                }

            });
        // selector opens when you click lable
            $(".vp-form-select .control-label").click(function(){ 
            $("#vpSelect").select2("open");
        });

    //on closing the removes and adds classes to match what happens on .blur event above
            $("#vpSelect").on("select2:opening", function() { 
                $( this ).closest( '.form-group' ).removeClass('vp-hasvalue');
            });
            $("#vpSelect").on("select2:closing", function() { 
                if($( this ).val()){$( this ).closest( '.vp-form-select' ).addClass('vp-hasvalue');}
            });
        });

    // <!-- Form Password Validation - multistep/strength -->

    $(document).ready(function() {
    // PASSWORD FORM
    //https://www.webdesignerdepot.com/2012/01/password-strength-verification-with-jquery/

    //on password field blur start password verification function
        $('input[type=password]').blur(function(e) {$('input[type=password]').keyup();});

        $('input[type=password]').keyup(function() {
    // set password variable    
            var $pwfield = $(this).parents( ".form-group" );
            if( $(this).val() )  {
                var pswd = $(this).val();
    // 
                function pass(v){$('.vp-form-pw' + v).removeClass('vp-pw-bad').addClass('vp-pw-ok');};
                function fail(v){$('.vp-form-pw' + v).removeClass('vp-pw-ok').addClass('vp-pw-bad');};
                function failed(v){if ( $('.vp-form-pw' + v).hasClass('vp-pw-ok')) {$('.vp-form-pw' + v).removeClass('vp-pw-ok');};};

                if ( $pwfield.hasClass('has-error')||$pwfield.hasClass('has-success')) {
                    if($pwfield.hasClass('has-pwsuccess')){$pwfield.removeClass( "has-pwsuccess" );}
                    if ( pswd.length < 2 ) {fail('.v1');}else {pass('.v1');}
                    if ( pswd.length < 3 ) {fail('.v2');}else {pass('.v2');}
                    if ( pswd.length < 4 ) {fail('.v3');}else {pass('.v3');}
                    if ( pswd.length < 5 ) {fail('.v4');}else {pass('.v4');}
        /*  if ( pswd.match(/[A-z]/) - lower case 
                if ( pswd.match(/[A-Z]/) - Upper case 
                if ( pswd.length < 5 ) - min characters
                if ( pswd.match(/\d/)  - number*/
                }else{
                    if ( pswd.length < 2 ) {failed('.v1');}else {pass('.v1');}
                    if ( pswd.length < 3 ) {failed('.v2');}else {pass('.v2');}
                    if ( pswd.length < 4 ) {failed('.v3');}else {pass('.v3');}
                    if ( pswd.length < 5 ) {failed('.v4');}else {pass('.v4');}
                }
                
        }else{
                $('.vp-form-pw').removeClass('vp-pw-ok');
                setTimeout(function()   {if ( $pwfield.hasClass('has-error')) {$('.vp-form-pw').addClass('vp-pw-bad');} }, 1);
            }
            if (!$(".vp-form-pw").not(".vp-pw-ok").length) {
                if ( !$(this).next( "span" )[ 0 ] ) { // add the SPAN that creates the formgroup icon
                    $( "<span class='vxdsicon normal form-validate-icon vxdsicon-valid'></span>" ).insertAfter( $(this) );
                }
                    setTimeout(function()   {if( !$pwfield.hasClass('has-success')){$pwfield.addClass( "has-pwsuccess" );}}, 1);
                
            }else{
                if($pwfield.hasClass('has-pwsuccess')){$pwfield.removeClass( "has-pwsuccess" );}
            }
        });

    });
        
    // Hide/Show Password   obscuration
    $(document).ready(function(){
        $(".toggle-password").click(function() {
            $(this).toggleClass("glyphicon-eye-open glyphicon-eye-close");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
            $('#vpPassword').focus();
        });
    });

    //on Form submit button click start password verification function
        $("button[type='submit']").on("click", function(e) {
            $('input[type=password]').keyup(); //starts the passwords multi-step verification
        });

    var selectedCardIcon = null;
    // credit card
    var cleaveCreditCard = new Cleave('.input-credit-card', {
    creditCard:true,
    onCreditCardTypeChanged: function (type) {
            $('.vp-form-cc-icon').removeClass("active");
            $('.vp-form-cc-icon').addClass("not");
            $('.vp-form-cc-icon::before').css("opacity;", ".85");
        if(type == 'amex'){
          $('.vp-form-cc-icon.amex').addClass("active");
        }else if (type == 'diners') {
          $('.vp-form-cc-icon.dci').addClass("active");
        }else if (type == 'discover') {
          $('.vp-form-cc-icon.discove').addClass("active");
        }else if (type == 'mastercard') {
          $('.vp-form-cc-icon.mastercard').addClass("active");
        }else if (type == 'visa') {
          $('.vp-form-cc-icon.visa').addClass("active");
                } else {
            $('.vp-form-cc-icon').removeClass("not");
            }
        }
    });

    var cleave = new Cleave('.vp-form-date', {
        date: true,
        datePattern: ['m', 'd', 'Y']
    });