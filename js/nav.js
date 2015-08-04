/// <reference path="jquery/jquery-1.10.2.min.js"/>
(function ($) {
    var s, _CALLBACK = function ($) {
        // Now we do something
        $(function () {
            $(document).on("click", "[data-zo-toggle=navbar]", function () {
                $($(this).attr("data-zo-for")).toggleClass("zojs-navbar--on");
                return false;
            });
        });
    };
    if (!$) {
        s = document.createElement("script");
        s.src = "/js/jquery/jquery-1.10.2.min.js";
        if ("onload" in s) {
            s.onload = function () {
                _CALLBACK.call(window, jQuery);
            };
        } else {
            s.onreadystatechange = function () {
                if (s.readyState == "loaded" || s.readyState == "complete") {
                    _CALLBACK.call(window, jQuery);
                }
            };
        }
        document.getElementsByTagName("head")[0].appendChild(s);
        return;
    }
    _CALLBACK.call(window, $);
})(window.jQuery);