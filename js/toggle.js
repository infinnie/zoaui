/// <reference path="jquery/jquery-1.10.2.min.js"/>
jQuery(function ($) {
    $("[data-zo-toggle]").click(function () {
        $($(this).attr("data-zo-toggle")).toggleClass("zojs--on");
        return false;
    });
    $(window).on("keyup", function (e) {
        if (e.keyCode === 27) {
            $(".zojs--on").removeClass("zojs--on");
        }
    });
});