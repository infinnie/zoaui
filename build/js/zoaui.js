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
/// <reference path="jquery/jquery-1.10.2.min.js"/>
(function ($) {
    "use strict";
    $(function () {
        $(document).on("click", "[data-zo-toggle]", function () {
            var el = $($(this).attr("data-zo-toggle"));
            if (el.hasClass("zojs--on")) {
                el.removeClass("zojs--on").trigger("close.zo");
            } else {
                el.addClass("zojs--on").trigger("open.zo");
            }
            return false;
        }).on("click", "[data-zo-open]", function () {
            $($(this).attr("data-zo-open")).addClass("zojs--on").trigger("open.zo");
            return false;
        }).on("click", "[data-zo-close]", function () {
            $($(this).attr("data-zo-close")).removeClass("zojs--on").trigger("close.zo");
            return false;
        });
        $(window).on("keyup", function (e) {
            if (e.keyCode === 27) {
                $(".zojs--on").removeClass("zojs--on").trigger("close.zo");
            }
        });
        $(document).on("open.zo", ".zo-dlgContainer", function () {
            $(this).find(".zo-dlg").css("top", $(window).scrollTop());
        });
    });
})(window.jQuery);
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