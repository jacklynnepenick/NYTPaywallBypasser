// ==UserScript==
// @name         NYTimes Paywall Bypasser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypasses the NYT paywall
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @author       You
// @match        *://www.nytimes.com/*
// @icon         https://www.google.com/s2/favicons?domain=nytimes.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function myFunc() {
        $('#app>div>div').attr('style',
            'overflow: initial !important;' +
            'width: initial !important;' +
            'height: initial !important;' +
            'position: initial !important;'
        );
        $('#app>div>div>:not(:nth-child(1), :nth-child(2))').remove();
    }
    $(document).arrive('#app>div>div', myFunc);
    myFunc();
})();
