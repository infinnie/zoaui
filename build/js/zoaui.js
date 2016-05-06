/// <reference path="jquery/jquery-1.10.2.min.js"/>
(function ($) {
    // Later release the polyfill in case jQuery is not yet loaded
    $(function () {
        $(document).on("click", "[data-zo-navbar]", function () {
            $($(this).attr("data-zo-navbar")).toggleClass("zojs-navbar--on");
            return false;
        });
    });
})(window.jQuery);
/// <reference path="jquery/jquery-1.10.2.min.js"/>
(function ($) {
    $(function () {
        $(document).on("click", "[data-zo-toggle]", function () {
            var el = $($(this).attr("data-zo-toggle"));
            if (el.hasClass("zojs--on")) {
                el.removeClass("zojs--on").trigger("close.zo");
            } else {
                el.addClass("zojs--on").trigger("open.zo");
            }
            return false;
        });
        $(document).on("click", "[data-zo-open]", function () {
            $($(this).attr("data-zo-open")).addClass("zojs--on").trigger("open.zo");
            return false;
        });
        $(document).on("click", "[data-zo-close]", function () {
            $($(this).attr("data-zo-close")).removeClass("zojs--on").trigger("close.zo");
            return false;
        });
        $(window).on("keyup", function (e) {
            if (e.keyCode === 27) {
                $(".zojs--on").removeClass("zojs--on");
            }
        });
        $(document).on("open.zo", ".zo-dlgContainer", function () {
            $(this).find(".zo-dlg").css("top", $(window).scrollTop());
        });
    });
})(window.jQuery);
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