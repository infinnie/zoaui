/// <reference path="jquery/jquery-1.10.2.min.js"/>
(function ($) {
    "use strict";
    // Later release the polyfill in case jQuery is not yet loaded
    $(function () {
        $(document).on("click", "[data-zo-navbar]", function () {
            $($(this).attr("data-zo-navbar")).toggleClass("zojs-navbar--on");
            return false;
        });
    });
})(window.jQuery);