$(window).load(function () {
    var mobileSize = 767,
        tabletSize = 1199;
    //responsive();
    $(window).bind("orientationchange", function (e) {
        responsive();
    });
    $(window).resize(function () {
        responsive();
    });
    function responsive() {
        var searchHolder = $('#header .searchHolder');
        if (width > mobileSize) {
            searchHolder.width('0');
            //searchHolder.hide();
        } else {
            searchHolder.width('100%');
        };
        if ($('#search').hasClass('open')) {
            $('#search').trigger('click');
        };
    };
});