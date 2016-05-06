/// <reference path="jquery/jquery-1.10.2.min.js"/>
(function ($) {
    $(function () {
        var body = $(document.body),
            posClasses = {
                left: "zojs--offCanvasLeft",
                right: "zojs--offCanvasRight"
            }, themeClasses = {
                dark: "zojs-offCanvasContainer--dark",
                light: ""
            }, isOffCanvas = false;
        $(document).on("click", "[data-zo-offcanvas]", function () {
            var target = $($(this).attr("data-zo-offcanvas")), pos = target.attr("data-zo-offcanvas-pos"), theme = target.attr("data-zo-offcanvas-theme") || "light";
            if (false === isOffCanvas && target.length) {
                isOffCanvas = target[0];
                body.addClass(posClasses[pos]).removeClass(themeClasses.dark).addClass(themeClasses[theme]);
                target.addClass("zojs-offCanvas--current");
                setTimeout(function () {
                    target.addClass("zojs-offCanvas--above");
                }, 250);
            } else if (isOffCanvas === target[0]) {
                isOffCanvas = false;
                body.removeClass(posClasses[pos]);
                target.removeClass("zojs-offCanvas--current zojs-offCanvas--above");
            }
            return false;
        });
    });
})(window.jQuery);