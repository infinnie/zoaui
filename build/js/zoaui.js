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