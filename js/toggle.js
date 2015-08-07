/// <reference path="jquery/jquery-1.10.2.min.js"/>
jQuery(function ($) {
    $("[data-zo-toggle]").click(function () {
        var el = $($(this).attr("data-zo-toggle"));
        if (el.hasClass("zojs--on")) {
            el.removeClass("zojs--on").trigger("close.zo");
        } else {
            el.addClass("zojs--on").trigger("open.zo");
        }
        return false;
    });
    $("[data-zo-open]").click(function () {
        $($(this).attr("data-zo-open")).addClass("zojs--on").trigger("open.zo");
        return false;
    });
    $("[data-zo-close]").click(function () {
        $($(this).attr("data-zo-close")).removeClass("zojs--on").trigger("close.zo");
        return false;
    });
    $(window).on("keyup", function (e) {
        if (e.keyCode === 27) {
            $(".zojs--on").removeClass("zojs--on");
        }
    });
});