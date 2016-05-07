/// <reference path="jquery/jquery-1.10.2.min.js"/>
(function ($) {
    "use strict";
    $(function () {
        var body = $(document.body),
            posClasses = {
                left: "zojs--offCanvasLeft",
                right: "zojs--offCanvasRight"
            }, themeClasses = {
                dark: "zojs-offCanvasContainer--dark",
                light: "zojs-offCanvasContainer--light"
            }, isOffCanvas = false;
        $(document).on("open.zo", "[data-zo-offcanvas-pos]", function () {
            var target = $(this), pos = target.attr("data-zo-offcanvas-pos"), theme = target.attr("data-zo-offcanvas-theme") || "light";
            isOffCanvas = target[0];
            body.addClass(posClasses[pos]).addClass(themeClasses[theme]);
            target.addClass("zojs-offCanvas--current");
            setTimeout(function () {
                target.addClass("zojs-offCanvas--above");
            }, 250);
        }).on("close.zo", "[data-zo-offcanvas-pos]", function () {
            var target = $(this), pos = target.attr("data-zo-offcanvas-pos"), theme = target.attr("data-zo-offcanvas-theme") || "light";
            body.removeClass(posClasses[pos]).removeClass(themeClasses[theme]);
            target.removeClass("zojs-offCanvas--current zojs-offCanvas--above");

        });
    });
})(window.jQuery);