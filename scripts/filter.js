/*events*/
(function ($) {
    $(document).ready(function () {
        width = $(window).width();
        responsiveF();
        $(window).bind("orientationchange", function (e) {
            width = $(this).width();
            responsiveF();
        });

        $(window).resize(function () {
            width = $(this).width();
            responsiveF();
        });
        var defTextCategoryMob = $('.activeCategoryMob').text(),
        categoryMob = $('.activeCategoryMob'),
        categoryList = categoryMob.siblings('.tableStyle'),
        holderSearch = jQuery('.holderSearch');
        categoryMob.text(defTextCategoryMob + ' ' + categoryList.find('li.active a').text());
        categoryMob.click(function () {
            categoryList.slideToggle();
        });
        jQuery('.topScrollButton').click(function () {
            if (navigator.userAgent.search(/Safari/) > -1) {
                $('body').animate({ scrollTop: 0 }, 700);
            } else {
                $('html').animate({ scrollTop: 0 }, 700);
            }
        });
        jQuery('.tableStyle li').each(function () {
            jQuery(this).click(function () {
                if (!jQuery(this).hasClass('disabled')) {
                    var parent = jQuery(this).parents('#category');
                    if (jQuery(this).hasClass('active')) {
                        jQuery(this).removeClass('active');
                        if (parent.length) {
                            categoryMob.text(defTextCategoryMob);
                        };
                    } else {
                        jQuery(this).siblings('.active').removeClass("active");
                        jQuery(this).addClass("active");
                        if (parent.length) {
                            categoryMob.text(defTextCategoryMob + ' ' + parent.find('li.active a').text());
                            if (width < 1199) {
                                parent.slideUp();
                            };
                        };
                    };
                };
            });
        });
        //search page
        jQuery('.go, .search').click(function () {
            if (jQuery(this).siblings('form').length) {
                jQuery(this).siblings('form').submit();
            };
        });
        jQuery('.filterButton, .bottomDropDown a, .back').click(function () {
            jQuery(this).parents('.holderTable').find('.filterDropDown').slideToggle();
        });
        /*function*/
        function responsiveF() {
            var listCat = $('.activeCategoryMob').siblings('ul.tableStyle');
            var listSubCat = $('#subCat li');
            if (width > 1199) {
                listCat.css("display", "table");
                listCat.find('li').each(function () {
                    if ($(this).css("display") == "block") {
                        $(this).css("display", "table-cell");
                    };
                });
                listSubCat.each(function () {
                    if ($(this).css("display") == "block") {
                        $(this).css("display", "table-cell");
                    };
                });
                $('.filterDropDown').show();
            } else {
                $('.filterDropDown').hide();
                listCat.hide();
                listCat.find('li').each(function () {
                    if ($(this).css("display") == "table-cell") {
                        $(this).css("display", "block");
                    };
                });
                listSubCat.each(function () {
                    if ($(this).css("display") == "table-cell") {
                        $(this).css("display", "block");
                    };
                });
                jQuery('.filterDropDown').each(function () {
                    var filterDropDown = jQuery(this);
                    $("body").on('click touchmove', function (e) {
                        if (width < 767) {

                            var parents = jQuery(e.target).parents(),
                            filterButton = jQuery(e.target).hasClass("filterButton");
                            match = false;
                            parents.each(function () {
                                if ((this === filterDropDown[0]) || (filterButton)) {
                                    match = true;
                                    return false;
                                }
                            });
                            if (!match) {
                                filterDropDown.slideUp(200);
                            }
                        };
                    });
                });
            };
        };
    });
})(jQuery);