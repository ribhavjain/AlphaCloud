(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/assets/css/master-form.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/assets/css/master-form.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * * * * * * MasterForm * * * * * * \n*/\n\n/* Bootstrap Resets */\n\n.row{ margin: 0 auto;}\n\n.vt-skip2 a {position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;}\n\n.vt-skip2 a:focus {position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;}\n\n.vt-wrap {max-width: 1200px;margin: 0 auto; position: relative; padding: 30px 0 0;}\n\n.placeholder-div{padding-top: 23px; height: 70px;border:3px dashed #ccc; color: #999; text-align: center;}\n\n.vp-captcha{margin-top: 40px; margin-bottom: 20px;float: right;}\n\n/*\ninput field and border(s)\n*/\n\n.vp-form .form-control {height: 51px;padding: 8px;font-size: 24px;font-weight: 300;color: #c8c8c8;\n      /*Resets*/background-color: inherit;background-image: none;border: none;border-radius: 0;box-shadow: none;transition: none;/*Resets*/\n  }\n\n.vp-form {font-size: 16px;}\n\n.vp-form .form-control:focus {/* border-color: transparent */border: 2px solid #26a1a1;outline: 0;box-shadow: none;color: #26a1a1;}\n\n.vp-form .vp-hasvalue .form-control {color: #32424E;}\n\n.vp-form-hdr-desc{ margin-top: 40px;padding-top: 20px;padding-bottom: 12px;border-top: 2px solid #dee4e8;color: #32424e;float: left;width: 100%; }\n\n.vp-form-hdr{ margin-top: 30px;padding-top: 20px;padding-bottom: 0px;border-top: 2px solid #dee4e8;color: #32424e;float: left;width: 100%; }\n\n.vp-form-title{padding-bottom: 0;border-top: none;}\n\n.vp-form .vp-form-hdr h2{font-size: 32px;font-weight: 300;margin-bottom: 15px;}\n\n.vp-form .vp-form-hdr h3,\n  .vp-form .vp-form-hdr-desc h3{font-size: 20px;font-weight: 400;line-height: 1.2;text-transform: uppercase;margin-top:18px;margin-bottom:8px;color: #202e39;}\n\n/*.vp-form-text .inner-addon .form-control {border: none;width: calc(100% - 50px);margin-bottom: 0;margin-left: 0;border-radius: 0;}*/\n\n.vp-form .form-group{ margin-bottom: 0; padding-top: 10px;padding-bottom: 20px;float: left;width: 100%; }\n\n.vp-form .form-group.vp-form-confirm{padding-top: 10px;}\n\n.vp-form .has-warning { padding-top: 16px;padding-bottom: 16px; }\n\n.vp-form .form-group.vp-form-radio{padding-top: 10px;margin-left:10px;}\n\n.vp-form .form-group.vp-form-radio p{margin: 0 0 10px;}\n\n.vp-form textarea.form-control{ resize: none; height: 250px;}\n\n/*.vp-form-text .inner-addon .form-control:hover {border: none;width: calc(100% - 52px);}*/\n\n/* Credit Card */\n\n.vp-form .form-group.vp-form-cc,\n  .vp-form .form-group.vp-form-confirm\n  {padding-bottom: 10px;}\n\n.vp-select-bdr{height: 51px;}\n\n.vp-select-bdr,\n  .vp-form-ig .form-control,\n  .vp-form-text .form-control \n  {border: 1px solid #677a89;width: calc(100% + 2px);margin-bottom: -2px;margin-left: -1px;border-radius: 0;}\n\n/*.vp-form-text .inner-addon{margin-bottom: 0;}*/\n\n.vp-select-bdr:hover,\n  .vp-form-ig .form-control:hover,\n  .vp-form-text .form-control:hover \n  {border-width: 2px; width: calc(100% + 4px);margin-bottom: -2px;margin-left: -2px;}\n\n.vp-select-bdr .vp-form-bdr-select { width: calc(100% + 4px); }\n\n/*.vp-form-text .inner-addon:hover .form-control,\n  .vp-form-text .inner-addon .form-control:hover {margin-bottom: 0px;margin-left: 0px;}*/\n\n.vp-form textarea.form-control:hover {padding-top: 7px;}\n\n.vp-form-bdr {border:2px solid transparent;margin: 0;}\n\n.vp-form-bdr label {display: table;width: auto;margin:-14px 5px 7px;padding:0 5px;font-weight: 400;background-color: #fff;font-size: 16px;}\n\n.vp-hasvalue .vp-form-bdr{border: 1px solid #999;padding:1px;}\n\n.vp-hasvalue .vp-select-bdr{border-color: transparent;}\n\n.vp-hasvalue:hover .vp-form-bdr{border-width: 2px;padding:0;}\n\n.vp-focus .vp-form-bdr, \n  .vp-focus:hover .vp-form-bdr{ border-color:#26a1a1;}\n\n/* Bootstrap Hack - hide input field border when in focus or have a value*/\n\n.vp-focus .vp-select-bdr,\n  .vp-form-ig.vp-focus .form-control,\n  .vp-form-ig.vp-hasvalue .form-control,\n  .vp-form-text.vp-focus .form-control,\n  .vp-form-text.vp-hasvalue .form-control,\n  .vp-form-text.vp-focus .inner-addon,\n  .vp-form-text.vp-hasvalue .inner-addon,\n  .vp-form-text.vp-focus .form-control:hover,\n  .vp-form-text.vp-hasvalue .form-control:hover {border-color: transparent;background-color: transparent;}\n\n/* \nPlaceholder text\n*/\n\n.vp-form .form-control::-webkit-input-placeholder { color: #c3cdd5;font-size: 24px;}\n\n/* Chrome/Opera/Safari */\n\n.vp-form .form-control::-moz-placeholder {color: #c3cdd5;font-size: 24px;}\n\n/* Firefox 19+ */\n\n.vp-form .form-control:-ms-input-placeholder {color: #c3cdd5;font-size: 24px;}\n\n/* IE 10+ */\n\n.vp-form .form-control:-moz-placeholder {color: #c3cdd5;font-size: 24px;}\n\n/* Firefox 18- */\n\n/* hides the controls from Date field*/\n\n.vp-form input[type=date].form-control::-webkit-inner-spin-button,\n  .vp-form input[type=date].form-control::-webkit-calendar-picker-indicator {display: none;-webkit-appearance: none;}\n\n.vp-form input[type=date].form-control::-ms-clear {display: none;}\n\n/* \n  Disabled fields\n*/\n\n.vp-form .disabled .vp-form-bdr label {color: #9fafbc;}\n\n.vp-form .disabled .form-control,\n  .vp-form .disabled .form-control:hover{border: 1px solid #e1e1e1;background-color: inherit;color: #32424E;}\n\n.vp-form .disabled .form-control:hover{ width: calc(100% + 2px);margin-left: -1px;}\n\n/* \n  Read Only fields\n*/\n\n.vp-form .readonly .vp-form-bdr label {color: #9fafbc;}\n\n.vp-form .readonly .form-control,\n  .vp-form .readonly .form-control:hover{border-color: #e1e1e1;background-color: inherit;color: #32424E;}\n\n.vp-form .readonly.vp-focus .vp-form-bdr,\n  .vp-form .readonly.vp-hasvalue .vp-form-bdr{border:1px solid #e1e1e1;padding: 1px;}\n\n.vp-form .readonly.vp-focus .form-control,\n  .vp-form .readonly.vp-hasvalue .form-control,\n  .vp-form .readonly.vp-focus .form-control:hover,\n  .vp-form .readonly.vp-hasvalue .form-control:hover{border-color:transparent;}\n\n/* Icon Inside input */\n\n.vp-form .inner-addon { position: relative; }\n\n/* enable absolute positioning */\n\n.vp-form .inner-addon .glyphicon {position: absolute;top: 17px; padding-right:10px; font-size: 22px;cursor: pointer;}\n\n/* style icon */\n\n.vp-form .vp-focus .inner-addon .glyphicon {color:#0081c2}\n\n.vp-form .left-addon .glyphicon  { left:  0px;}\n\n.vp-form .right-addon .glyphicon { right: 0px;font-size: 22px;}\n\n/* align icon */\n\n.vp-form .form-pw .glyphicon {color: #c3cdd5;}\n\n/* align icon */\n\n.vp-form .vp-focus .inner-addon .glyphicon{color: #26a1a1;}\n\n/* focus icon */\n\n.vp-form .left-addon input.form-control  { padding-left:  30px; }\n\n.vp-form .right-addon input.form-control { padding-right: 40px; }\n\n/* add padding  */\n\n/* Hint Text */\n\n.vp-form-message{height: 0;}\n\n.vp-form-message.hint-txt{ padding: 8px 10px 0; font-size: 13px;line-height: 1.31;text-align: left; color: #32424E; }\n\n.vp-form-message.hint-txt span{ display: block; font-weight: 300;line-height: 1.31;color: #32424E;float: left;width: 100%; }\n\n/*\n Radio Buttons\n*/\n\n.radio, .checkbox {position: relative;display: block;font-weight:400;margin-top: 0;margin-bottom: 0;}\n\n/*  .radio label, .checkbox label {padding-left: 29px;padding-bottom: initial;min-height: 20px;font-weight: normal;cursor: pointer;}*/\n\ninput[type=\"file\"]:focus,\n  input[type=\"radio\"]:focus,\n  input[type=\"checkbox\"]:focus {outline: none;}\n\n[type=\"radio\"]:checked,\n  [type=\"radio\"]:not(:checked) {left: -9999px;}\n\n[type=\"radio\"]:checked + label,\n  [type=\"radio\"]:not(:checked) + label\n  {display: inline-block;position: relative;margin: 11px auto; padding-left: 33px;cursor: pointer; font-weight: 400; line-height: 24px;  color: #32424E;}\n\n[type=\"radio\"]:checked + label:before,\n  [type=\"radio\"]:not(:checked) + label:before\n  {content: '';position: absolute;left: 0;top: 0;width: 24px;height: 24px; border: 1px solid #999;border-radius: 100%;background: #fff;}\n\n[type=\"radio\"]:checked + label:after,\n  [type=\"radio\"]:not(:checked) + label:after \n    {content: '';width: 16px;height: 16px;background: #26a1a1; position: absolute;top: 4px;left: 4px;border-radius: 100%; transition: all 0.2s ease;}\n\n[type=\"radio\"]:not(:checked) + label:after {opacity: 0;-webkit-transform: scale(0);transform: scale(0);}\n\n[type=\"radio\"]:checked + label:after {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}\n\n/* Focus state */\n\n[type=\"radio\"]:focus{ border: 2px solid #26a1a1;}\n\n[type=\"radio\"]::hover{ border: 2px solid #999;}\n\n[type=\"radio\"]:focus:checked + label:before,\n  [type=\"radio\"]:focus:not(:checked) + label:before{border: 2px solid #26a1a1;}\n\n[type=\"radio\"]:focus:checked + label:after,\n  [type=\"radio\"]:focus:not(:checked) + label:after{background: #26a1a1;}\n\n/*  [type=\"radio\"]:focus:after {box-shadow: 0 0 2px 2px rgba(0, 159, 227, 0.5);}*/\n\n.vp-focus [type=\"radio\"]:checked + label:before {border: 2px solid #26a1a1;}\n\n.vp-focus [type=\"radio\"]:checked + label:after {background-color:#26a1a1;}\n\n[type=\"radio\"] + label:hover::before{ border-width: 2px;}\n\n/* \n  Checkboxes \n*/\n\n.vp-form-checkbox input[type=\"checkbox\"]{width: 24px;height: 24px;border-radius: 0;position: absolute;left: -9999px;}\n\n.vp-form-checkbox {margin-bottom: 10px;margin-left: 45px; font-weight: 300; line-height: 24px;  color: #32424E;}\n\n.vp-form-checkbox label {position: relative;font-weight: 300;cursor: pointer;}\n\n/* Base styles for spans */\n\n.vp-form-checkbox span::before,\n.vp-form-checkbox span::after \n{content: '';position: absolute;top: 0;bottom: 0;margin: auto;}\n\n.vp-form-checkbox span.checkbox::before \n{width: 24px;height: 24px;background-color: #fff;left: -35px;box-sizing: border-box;border:1px solid #999;transition: border-color .2s;}\n\n.vp-form-checkbox span.checkbox::after \n{content: '\\e5ca';font-family: 'Material Icons';left: -31px;top: 0;color: transparent;transition: color .2s;}\n\ninput[type=\"checkbox\"]:checked + label span.checkbox::after {color: #26a1a1;}\n\n/* hover */\n\n.vp-form-checkbox span.checkbox:hover::before {border-width: 2px;}\n\n/* Checkbox : FOCUS*/\n\n.vp-hasvalue .vp-form-checkbox span.checkbox::before {border-color:#999;}\n\n.vp-focus .vp-form-checkbox span.checkbox::before {border-width: 2px;border-color:#26a1a1;}\n\n.vp-focus input[type=\"checkbox\"]:checked + label span.checkbox::after {color: #26a1a1;}\n\n/*\nCredit Card input field\n*/\n\n.vp-form-cc-row{height:30px; padding-bottom:12px;text-align: right;float: right;}\n\n.vp-form-cc-icon{position: relative;display:inline-block;height:30px; background-size: contain;}\n\n.vp-form-cc-icon:before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    z-index: 1;\n    opacity: 0;\n  }\n\n.vp-form-cc-icon.not:before {opacity: .85;  }\n\n.vp-form-cc-icon.active:before {opacity: 0;  }\n\n/* \n  Password\n*/\n\n.vp-form-message .vp-form-pw:before {\n    position: relative;\n    top: 0;\n    display: inline-block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1;\n    content:'\\25CF';\n    padding-right: 10px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.vp-form-message div{padding: 0 10px 11px 0;margin-left: 0;}\n\n.vp-form-message .c1{border-left: 0;}\n\n.vp-form-message .vp-form-pw.vp-pw-ok:before {top: 3px;font-family: \"Material Icons\";content: \"\\e5ca\"; }\n\n.vp-form-message .vp-form-pw.vp-pw-bad:before { top: 3px; font-family: \"Material Icons\";content: \"\\e14c\"; }\n\n.vp-form-message.hint-txt .vp-pw-ok{color: #26a1a1;}\n\n.vp-form-message.hint-txt .vp-pw-bad{color:#d9534f;}\n\n.has-error .vp-form-message.pw{ padding: 8px 0;background-color: #f2dede;float: left;width: 100%; }\n\n.has-error .vp-form-message div.c1,\n.has-error .vp-form-message div.c2{padding-left:10px;border: none;}\n\n.has-error .vp-form-message.pw em{display: none !important;}\n\n.has-error .vp-form-message div{background-color: #f2dede;}\n\n/* Hide/Show Icon */\n\n.glyphicon-eye-open:before { font-family: 'Material Icons';content: '\\e8f4'; }\n\n.glyphicon-eye-close:before { font-family: 'Material Icons';content: '\\e8f5'; }\n\n/*\nIcons\n*/\n\n.vxdsicon {display: block;position: relative;top: -5px;font-style: normal;font-weight: normal;line-height: 1;float: left;content: \"\";position: relative;display: inline-block;font-family: 'Material Icons';font-size: .5em;font-style: normal;font-weight: 400;line-height: 1;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;float: right;transition: -webkit-transform .25s linear;transition: transform .25s linear;transition: transform .25s linear, -webkit-transform .25s linear;-webkit-transition: -webkit-transform .25s linear;background-color:#fff; /* This is required */}\n\n.vxdsicon.vxdsicon-error {}\n\n.vxdsicon.vxdsicon-error:after { content:'\\E000';font-size: 23px;position: relative;color: #d9534f; }\n\n.vxdsicon.vxdsicon-valid:after { content:'\\E86C';font-size: 23px;position: relative;color: #439843; }\n\n.form-group.has-warning .vxdsicon-error:after,\n.vxdsicon.vxdsicon-warn:after { content:'\\E002';font-size: 23px;position: relative;color: #af8741; }\n\n.vp-form-select .vxdsicon { background-color: transparent; }\n\n.vxdsicon.normal {width: 23px;height: 23px;}\n\n.vxdsicon.small {width: 16px;height: 16px;}\n\n.vxdsicon.medium {width: 64px;height: 64px;}\n\n.vxdsicon.large {width: 128px;height: 128px;}\n\n.form-group.has-warning .vxdsicon-error.normal,\n.vxdsicon-warn.normal {width: 27px;height: 24px;}\n\n.vxdsicon-warn.small {width: 18px;height: 16px;}\n\n.vxdsicon-warn.medium {width: 72px;height: 64px;}\n\n.vxdsicon-warn.large {width: 144px;height: 128px;}\n\n.form-validate-icon {position: absolute;top: 0;right: 0;z-index: 2;display: block;width: 34px;height: 34px;line-height: 34px;text-align: center;pointer-events: none;}\n\n/*\n  Verification\n*/\n\n.vp-form-text .form-validate-icon{display: none;}\n\n.vp-form-text.vp-form-confirm.has-success .form-validate-icon,\n  .vp-form-text.vp-form-confirm.has-pwsuccess .form-validate-icon,\n  .vp-form-text.has-error .form-validate-icon{display:inline-block;}\n\n/* Control icon placement */\n\n.vp-form-text label ~ .form-validate-icon,\n  .vp-form-text .form-validate-icon {right: 10px;top: 13px;}\n\n.vp-form-text.vp-focus .form-validate-icon,\n  .vp-form-text.vp-hasvalue .form-validate-icon {right: 10px;top: -6px;}\n\n/* Control Warning icon placement */\n\n.vp-form-text.has-warning label ~ .form-validate-icon,\n  .vp-form-text.has-warning .form-validate-icon {right: 10px;top: 3px;}\n\n.vp-form-text.has-warning.vp-focus .form-validate-icon,\n  .vp-form-text.has-warning.vp-hasvalue .form-validate-icon {right: 10px;top: 0;}\n\n/* Password icon placement */\n\n.form-pw .form-validate-icon {top: -16px;}\n\n.form-pw.vp-focus .form-validate-icon,\n  .form-pw.vp-hasvalue .form-validate-icon {top: -35px;}\n\n/* Radio button and Checkbox icon placement*/\n\n.vp-form-radio p{position: relative; display: inline-block;}\n\n.vp-form-radio .form-validate-icon,\n  .vp-form-radio.has-valid .form-validate-icon,\n  .vp-form-checkbox .form-validate-icon,\n  .has-valid .vp-form-checkbox .form-validate-icon{display: none;}\n\n.vp-form-radio.has-error .form-validate-icon{display: inline-block;top: -4px; right: -34px;}\n\n.has-error .vp-form-checkbox .form-validate-icon{display: inline-block;top: -4px; right: -34px;}\n\n/* end - Radio button and Checkbox icon placement - end */\n\ndiv[class^=\"has\"] .vp-form-message{min-height:36px; padding: 8px 10px; }\n\n.help-text {display: block; margin: 0; padding: 5px 10px 5px 0;color: #737373;}\n\n.vp-form .vp-form-message em{font-style: normal;}\n\n/* Success*/\n\n.has-success .vp-form-message{background-color: transparent;}\n\n.has-success .help-text {display: none !important;}\n\n/* error*/\n\n.has-error .vp-form-message{padding: 8px 10px;background-color: #f2dede;font-weight: bold;color: #d9534f;}\n\n/* Warning*/\n\n.has-warning.has-error .vp-form-message{background-color: #fcf8e3;font-weight: bold;text-align: left;color: #af8741;}\n\n.has-warning \n\n/*  .has-error .radio,\n  .has-error .radio-inline,\n  .has-error .checkbox,\n  .has-error .checkbox-inline,\n  .has-error.radio label,\n  .has-error.checkbox label,\n  .has-error.radio-inline label,\n  .has-error.checkbox-inline label,*/\n  .has-error .help-text a,\n  .has-error .help-text,\n  .has-error .control-label{color:#d9534f;}\n\n.has-error .help-text a,\n  .has-warning .help-text a{text-decoration: underline;}\n\n/*  .has-warning .radio, \n  .has-warning .radio-inline, \n  .has-warning.radio label, \n  .has-warning.radio-inline label,\n  .has-warning .checkbox, \n  .has-warning .checkbox-inline, \n  .has-warning.checkbox label,\n  .has-warning.checkbox-inline label, */\n\n.has-warning .help-text,\n  .has-warning .help-text a { color: #af8741; }\n\n.has-error .radio,\n  .has-error .radio-inline,\n  .has-error .checkbox,\n  .has-error .checkbox-inline,\n  .has-error.radio label,\n  .has-error.checkbox label,\n  .has-error.radio-inline label,\n  .has-error.checkbox-inline label,\n  .has-success .control-label,\n  .has-error .control-label,\n  .has-warning .control-label{ color: #32424E; }\n\n/* \n  Global Error  Handling * \n*/\n\n.vp-form-error-glob{display:none;margin-top: 20px; margin-bottom: 20px; font-weight: bold;;line-height: 1.31;text-align: right; color: #d9534f;}\n\n/*\n  * * * * * * Mobile * * *  * * * * *\n**/\n\n@media (max-width: 575px) {\n  body{line-height: 1.3;}\n  .vp-form .vp-form-hdr h2 {font-size: 26px;}\n  .vp-form .vp-form-hdr h3,\n  .vp-form .vp-form-hdr-desc h3 {font-size: 18px;text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);}\n  .vp-form-cc-row{text-align: left;}\n  .vp-form .vp-form-hdr h3, .vp-form .vp-form-hdr-desc h3 {\n    text-shadow: 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@media (max-width: 765px) {\n  .vp-form-hdr-desc {margin-top: 30px;padding-top: 10px;}\n  .vp-form-message {height: initial;}\n  .vp-form-message div.c1{padding-bottom: 0;}\n  .vp-form-message div {\n    border: 0px solid #fff;\n  }\n  .vp-form .form-group button {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n/** \n  * * * * * * IE11 Only * * *  * * * * *\n***/\n\n@media all and (-ms-high-contrast:none){\n.vp-form-text .form-control:hover {margin-top: -1px;margin-bottom: -1px;}\n  \n}\n\n/*** \n  * * * * * * Edge Only * * *  * * * * *\n****/\n\n@supports (-ms-ime-align:auto){\n\n}\n\n/*** \n  * * * * * * Safari Only * * *  * * * * *\n****/\n\n@media screen and (-webkit-min-device-pixel-ratio:0) { \n  [type=\"radio\"]:checked + label:after{width: 14px;height: 14px;top: 5px;left: 5px;}\n\n}\n\n/*\n * * * * * * SELECT2 * * * * * * \nmaster-form-select2.css\n*/\n\n/* \nselect2-container \n*/\n\n.select2-container{position: relative;display: inline-block;height: 48px; margin: 0;font-size: 26px;font-weight: 300;line-height: 48px; text-align: left;color: #32424E; border: none;box-sizing: border-box;font-size: 24px;width: 100% !important;margin-left: 0;padding: 0; }\n\n.select2-container:hover{margin-top: -1px;}\n\n.select2-container .select2-selection--single\n  {box-sizing: border-box;cursor: pointer;display: block;height: 28px;-moz-user-select: none;-ms-user-select: none;user-select: none;-webkit-user-select: none; }\n\n.select2-container .select2-selection--single .select2-selection__rendered\n  {display: block;padding-left: 8px;padding-right: 20px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;font-size: 24px; }\n\n.select2-container .select2-selection--single .select2-selection__clear\n  {position: relative; }\n\n.select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered \n  {padding-right: 8px;padding-left: 20px; }\n\n.select2-container .select2-selection--multiple \n  {display: block;min-height: 32px;box-sizing: border-box;cursor: pointer;-moz-user-select: none;-ms-user-select: none;user-select: none;-webkit-user-select: none; }\n\n.select2-container .select2-selection--multiple .select2-selection__rendered \n  {display: inline-block;overflow: hidden;padding-left: 8px;text-overflow: ellipsis;white-space: nowrap; }\n\n.select2-container .select2-search--inline \n  {float: left; }\n\n.select2-container .select2-search--inline .select2-search__field \n  {box-sizing: border-box;border: none;font-size: 100%;margin-top: 5px;padding: 0; }\n\n.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button \n{-webkit-appearance: none; }\n\n/* \nselect2-dropdown \n*/\n\n.select2-dropdown \n  {display: block;position: absolute; left: -100000px;width: 100%; background-color: white;border: 2px solid #26a1a1;border-top: none;border-radius: 0;box-sizing: border-box;margin-left:-2px;z-index: 51;}\n\n/* \nselect2-results\n*/\n\n.select2-results {display: block;max-height: 192px; overflow-y: auto; }\n\n.select2-results__options{list-style: none;margin: 0;padding: 0; }\n\n.select2-results__option {padding: 0 6px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }\n\n.select2-results__option[aria-selected]{cursor: pointer;font-size: 24px;line-height: 48px;margin-bottom: 0; }\n\n.select2-results__option--highlighted{background-color: #f2f5f8;}\n\n.select2-results__option.select2-results__message{font-size: 16px;font-weight: bold;color: #32424e; }\n\n/* No results found */\n\n/* \nselect2-container \n*/\n\n.select2-container--open .select2-dropdown { top:-50px;left: 0;border: 2px solid #26a1a1;border-top: transparent; }\n\n/* - select2-selection--single */\n\n.select2-container .select2-selection--single:focus\n{ border: none; }\n\n.select2-container .select2-selection--single .select2-selection__clear\n{ cursor: pointer; float: right; font-weight: bold; margin-right: 10px; }\n\n.select2-container .select2-selection--single .select2-selection__placeholder\n{ color: #999; }\n\n/* - - select2-selection__arrow */\n\n.select2-container .select2-selection--single .select2-selection__arrow\n{position: absolute; top: 23px; right: 25px; width: 18px;height: 8px; border: none;}\n\n.select2-container .select2-selection--single .select2-selection__arrow b\n{position: absolute; width: 100%; height: 100%; background-repeat: no-repeat; background-size: contain;}\n\n/* - RIGHT ALIGNED */\n\n.select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__clear\n  { float: left; }\n\n.select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow\n  {position: absolute; top: 23px; right: 25px; width: 18px;height: 8px; border: none;}\n\n/* - select2-container--open */\n\n.select2-container.select2-container--open:hover\n{margin-top: 0;}\n\n.select2-container.select2-container--open .select2-selection--single\n  {border: none; }\n\n/* - select2-container--open - select2-selection__arrow */\n\n.select2-container.select2-container--open .select2-selection--single .select2-selection__arrow\n  {top: 20px;z-index: 1000}\n\n.select2-container.select2-container--open .select2-selection--single .select2-selection__arrow b\n  {background-repeat: no-repeat; background-size: contain;-webkit-transform:rotate(-180deg);\n        transform:rotate(-180deg); }\n\n/* \n.select2-search--dropdown \n*/\n\n.select2-search--dropdown {display: block;padding: 0;border-bottom: 2px solid #26a1a1 !important;}\n\n.select2-search--dropdown .select2-search__field \n  {padding: 0 8px;border: none;color: #0081c2;width: 100%;box-sizing: border-box;font-size: 24px; }\n\n.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button \n  {-webkit-appearance: none; }\n\n.select2-search--dropdown.select2-search--hide \n  {display: none; }\n\n/* \n.select2-search--dropdown \n*/\n\n.select2-selection:focus,\n.select2-search--dropdown .select2-search__field:focus{border: none;outline: none;}\n\n/* \n.select2-close-mask \n*/\n\n.select2-close-mask \n  {display: block;position: fixed;left: 0;top: 0;margin: 0;padding: 0;min-height: 100%;min-width: 100%;height: auto;width: auto;border: 0;opacity: 0;z-index: 99;background-color: #fff;filter: alpha(opacity=0); }\n\n/* \n.select2-hidden-accessible\n*/\n\n.select2-hidden-accessible \n  {border: 0 !important;clip: rect(0 0 0 0) !important;height: 1px !important;margin: -1px !important;overflow: hidden !important;padding: 0 !important;position: absolute !important;width: 1px !important; }\n\n@media (max-width: 575px) {\n  .select2-container .select2-selection--single .select2-selection__rendered {padding-right: 40px; }\n}\n\n/* Remove the pages functionality from surveyjs */\n\npages-editor {\n  display: none !important;\n}\n\n/* End of Master Form */"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}\n.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}\n.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\n.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}\n.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}\n.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}\n.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}\n.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}\n.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}\n.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}\n.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}\n.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}\n.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}\n.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}\n.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}\n.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}\n.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}\n.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}\n.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}\n.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}\n.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}\n.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}\n.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}\n.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}\n.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}\n.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-badge-small .mat-badge-content{font-size:6px}\n.mat-badge-large .mat-badge-content{font-size:24px}\n.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}\n.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}\n.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}\n.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}\n.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}\n.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card-title{font-size:24px;font-weight:400}\n.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}\n.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-checkbox-layout .mat-checkbox-label{line-height:24px}\n.mat-chip{font-size:13px;line-height:18px}\n.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}\n.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-header-cell{font-size:12px;font-weight:500}\n.mat-cell,.mat-footer-cell{font-size:14px}\n.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-calendar-body{font-size:13px}\n.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}\n.mat-calendar-table-header th{font-size:11px;font-weight:400}\n.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}\n.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field-wrapper{padding-bottom:1.34375em}\n.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}\n.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}\n.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}\n.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}\n.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}\n.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}\n.mat-form-field-label{top:1.34375em}\n.mat-form-field-underline{bottom:1.34375em}\n.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}\n.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}\n.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}\n.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}\n.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}\n.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}\n.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}\n.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}\ninput.mat-input-element{margin-top:-.0625em}\n.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}\n.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select-trigger{height:1.125em}\n.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-step-label{font-size:14px;font-weight:400}\n.mat-step-label-selected{font-size:14px;font-weight:500}\n.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}\n.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\n.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}\n.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}\n.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}\n.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}\n.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}\n.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}\n.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}\n.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\n.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tree-node{font-weight:400;font-size:14px}\n.mat-ripple{overflow:hidden;position:relative}\n.mat-ripple.mat-ripple-unbounded{overflow:visible}\n.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}\n@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}\n.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\n.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container{position:fixed;z-index:1000}\n.cdk-overlay-container:empty{display:none}\n.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}\n@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}\n.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}\n.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}\n.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}\ntextarea.cdk-textarea-autosize{resize:none}\ntextarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}\n.mat-ripple-element{background-color:rgba(0,0,0,.1)}\n.mat-option{color:rgba(0,0,0,.87)}\n.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\n.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}\n.mat-optgroup-label{color:rgba(0,0,0,.54)}\n.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}\n.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}\n.mat-pseudo-checkbox::after{color:#fafafa}\n.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}\n.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}\n.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}\n.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-theme-loaded-marker{display:none}\n.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\n.mat-badge-content{color:#fff;background:#673ab7}\n.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}\n.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}\n.mat-badge{position:relative}\n.mat-badge-hidden .mat-badge-content{display:none}\n.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\n.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}\n.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}\n@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}\n.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}\n.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}\n.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}\n.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}\n@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}\n.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}\n.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}\n.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}\n.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}\n@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}\n.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}\n.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}\n.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}\n.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}\n.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}\n.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}\n.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}\n.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}\n.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}\n.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}\n.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}\n.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}\n.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}\n.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}\n.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}\n.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}\n.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}\n.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}\n.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}\n.mat-button-toggle{color:rgba(0,0,0,.38)}\n.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}\n.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\n.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}\n.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}\n.mat-card{background:#fff;color:rgba(0,0,0,.87)}\n.mat-card-subtitle{color:rgba(0,0,0,.54)}\n.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}\n.mat-checkbox-checkmark{fill:#fafafa}\n.mat-checkbox-checkmark-path{stroke:#fafafa!important}\n@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}\n.mat-checkbox-mixedmark{background-color:#fafafa}\n.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}\n.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}\n.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}\n.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}\n.mat-table{background:#fff}\n.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}\nmat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}\n.mat-header-cell{color:rgba(0,0,0,.54)}\n.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}\n.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}\n.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}\n.mat-calendar-table-header{color:rgba(0,0,0,.38)}\n.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}\n.mat-calendar-body-label{color:rgba(0,0,0,.54)}\n.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}\n.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}\n.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}\n.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}\n.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}\n.mat-calendar-body-selected{background-color:#673ab7;color:#fff}\n.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}\n.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-toggle-active{color:#673ab7}\n.mat-datepicker-toggle-active.mat-accent{color:#ffd740}\n.mat-datepicker-toggle-active.mat-warn{color:#f44336}\n.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-divider{border-top-color:rgba(0,0,0,.12)}\n.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}\n.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-action-row{border-top-color:rgba(0,0,0,.12)}\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}\n@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}\n.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}\n.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}\n.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}\n.mat-form-field-label{color:rgba(0,0,0,.6)}\n.mat-hint{color:rgba(0,0,0,.6)}\n.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}\n.mat-focused .mat-form-field-required-marker{color:#ffd740}\n.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}\n.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}\n.mat-error{color:#f44336}\n.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}\n.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}\n.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}\n.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}\n.mat-icon.mat-primary{color:#673ab7}\n.mat-icon.mat-accent{color:#ffd740}\n.mat-icon.mat-warn{color:#f44336}\n.mat-input-element:disabled{color:rgba(0,0,0,.38)}\n.mat-input-element{caret-color:#673ab7}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-accent .mat-input-element{caret-color:#ffd740}\n.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}\n.mat-list-item-disabled{background-color:#eee}\n.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}\n.mat-menu-panel{background:#fff}\n.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}\n.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}\n.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}\n.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}\n.mat-paginator{background:#fff}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}\n.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\n.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}\n.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}\n.mat-progress-bar-background{fill:#d1c4e9}\n.mat-progress-bar-buffer{background-color:#d1c4e9}\n.mat-progress-bar-fill::after{background-color:#673ab7}\n.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}\n.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}\n.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}\n.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}\n.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}\n.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}\n.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}\n.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}\n.mat-select-content,.mat-select-panel-done-animating{background:#fff}\n.mat-select-value{color:rgba(0,0,0,.87)}\n.mat-select-placeholder{color:rgba(0,0,0,.42)}\n.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}\n.mat-select-arrow{color:rgba(0,0,0,.54)}\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}\n.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-drawer.mat-drawer-push{background-color:#fff}\n.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}\n.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}\n.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}\n.mat-slide-toggle-thumb{background-color:#fafafa}\n.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}\n.mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}\n.mat-primary .mat-slider-thumb-label-text{color:#fff}\n.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}\n.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}\n.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}\n.mat-warn .mat-slider-thumb-label-text{color:#fff}\n.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}\n.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}\n.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}\n.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}\n.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}\n.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}\n.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}\n.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}\n.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}\n.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}\n.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}\n.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}\n.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}\n.mat-sort-header-arrow{color:#757575}\n.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}\n.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\n.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}\n.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}\n.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}\n.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}\n.mat-tab-group.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}\n.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}\n.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}\n.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}\n.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}\n.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}\n.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}\n.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}\n.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-primary{background:#673ab7;color:#fff}\n.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-warn{background:#f44336;color:#fff}\n.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}\n.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}\n.mat-toolbar .mat-input-element{caret-color:currentColor}\n.mat-tooltip{background:rgba(97,97,97,.9)}\n.mat-tree{background:#fff}\n.mat-tree-node{color:rgba(0,0,0,.87)}\n.mat-snack-bar-container{background:#323232;color:#fff}\n.mat-simple-snackbar-action{color:#ffd740}\nhtml {\n    position: relative;\n    min-height: 100%;\n  }\n.content {\n    margin-bottom: 0; /* Margin bottom by footer height */\n  }\n.dark-footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 165px; /* Set the fixed height of the footer here */\n    line-height: 60px; /* Vertically center the text there */\n}\n.btn.sv_complete_btn {\n  display: none;\n}\n.my-complete-btn {\n  display:inline !important;\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/*the panel that holds the save and submit buttons on the edit page*/\n.panel-footer {\n    text-align: left;\n    background-color: #fff;\n}\n.redFlag { \n  color: red;\n  vertical-align: bottom;\n  cursor: pointer;\n}\n.blackFlag {\n  color: black;\n  vertical-align: bottom;\n  cursor: pointer;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/css/master-form.css":
/*!****************************************!*\
  !*** ./src/assets/css/master-form.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/raw-loader!../../../node_modules/postcss-loader/lib??embedded!./master-form.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/assets/css/master-form.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!***************************************************************!*\
  !*** multi ./src/styles.css ./src/assets/css/master-form.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rijain/Desktop/refugeeApp/src/styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! /Users/rijain/Desktop/refugeeApp/src/assets/css/master-form.css */"./src/assets/css/master-form.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map