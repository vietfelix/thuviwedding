(function ($) {

    "use strict";

    /*------------------------------------------
        Nice Select
    -------------------------------------------*/

    $('.select').niceSelect();

    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/


    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".mobail-menu .open-btn");
        var xbutton = $(".mobail-menu .navbar-toggler");

        openBtn.on("click", function (e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideInn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();


    // function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight();


        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("current-menu-item");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("current-menu-item");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("current-menu-item");
            }

        });
    }


    // smooth-scrolling
    function smoothScrolling($scrollLinks, $topOffset) {
        var links = $scrollLinks;
        var topGap = $topOffset;

        links.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }


    /*------------------------------------------
        = SETTING HEADER MIDDLE LOGO
    -------------------------------------------*/
    function siteMiddleLogoSetting() {
        if (($(".wpo-header-style-1, .wpo-header-style-3").length) && (window.innerWidth > 991) && ($("#navbar > ul").length)) {

            var nav = $("#navbar > ul");
            var navLi = nav.find(">li");

            if (navLi.length > 1) {
                var midLastLi = nav.find(">li:nth-child(" + Math.ceil(navLi.length / 2) + ")");
                var logo = $(".navbar-brand");
                $("<li class='brand-logo'></li>").insertAfter(midLastLi).append(logo);
            } else if (navLi.length == 1) {
                nav.find(">li:first-child").css({
                    "left": -70 + "px"
                })
            }
        } else if (($(".wpo-header-style-1, .wpo-header-style-3").length) && (window.innerWidth < 992) && ($("#navbar > ul").length)) {
            var logo = $(".wpo-header-style-1 .navbar-brand, .wpo-header-style-3 .navbar-brand");
            var navOpenBtn = $(".navbar-header");
            navOpenBtn.after(logo);
        }
    }

    siteMiddleLogoSetting();




    $("body").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.open-btn').removeClass('x-close');
    });


    // toggle1
    $('#toggle1').on("click", function () {
        $('.create-account').slideToggle();
        $('.caupon-wrap.s1').toggleClass('active-border')
    })

    // toggle2
    $('#toggle2').on("click", function () {
        $('#open2').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })

    // toggle3
    $('#toggle3').on("click", function () {
        $('#open3').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })
    // toggle4
    $('#toggle4').on("click", function () {
        $('#open4').slideToggle();
        $('.caupon-wrap.s3').toggleClass('coupon-2')
    })

    $('.payment-select .addToggle').on('click', function () {
        $('.payment-name').addClass('active')
        $('.payment-option').removeClass('active')
    })


    $('.payment-select .removeToggle').on('click', function () {
        $('.payment-option').addClass('active')
        $('.payment-name').removeClass('active')
    });


    $(function () {
        $("#datepicker").datepicker();
    });


    /*==================================
           LOAD MORE JQUERY
   ================================== */
    var list1 = $(".moreload");
    var numToShow1 = 8;
    var button1 = $(".loadmore-btn");
    var numInList1 = list1.length;

    list1.hide();
    if (numInList1 > numToShow1) {
        button1.show();
    }
    list1.slice(0, numToShow1).show();
    button1.on('click', function () {
        var showing1 = list1.filter(':visible').length;
        list1.slice(showing1 - 1, showing1 + numToShow1).fadeIn();
        var nowShowing1 = list1.filter(':visible').length;
        if (nowShowing1 >= numInList1) {
            button1.hide();
        }
    });

    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').fadeOut(250, function () {
                //active wow
                wow.init();
            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        });
    }

    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    // sticky-header

    if ($("#header").length) {
        var header = document.getElementById("sticky-header");
        var stickyPosition = header.offsetTop + header.offsetHeight;
        window.onscroll = function () {
            if (window.pageYOffset > stickyPosition) {
                header.classList.add("sticky");
                document.querySelectorAll('.page-wrapper')[0].style.marginTop = header.offsetHeight + "px";
            } else {
                header.classList.remove("sticky");
                document.querySelectorAll('.page-wrapper')[0].style.marginTop = "0px";
            }
        };
    }

    /*------------------------------------------
     service-slider SLIDER
    -------------------------------------------*/
    if ($(".service-slider").length) {
        $(".service-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 150,
            margin: 30,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            arrows: false,
            nav: true,
            center: true,
            items: 4,
            stagePadding: 60,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    arrows: false,
                    nav: false,
                    stagePadding: 5,
                },

                575: {
                    items: 1,
                    stagePadding: 5,
                },
                767: {
                    items: 2,
                    dots: false,
                },

                992: {
                    items: 2,
                    dots: false,
                },

                1200: {
                    items: 4
                }
            }
        });
    }

    /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 200,
            margin: 0,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            arrows: false,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },

                550: {
                    items: 3
                },

                992: {
                    items: 4
                },

                1200: {
                    items: 5
                }
            }
        });
    }

    /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/

    if ($("#clock").length) {
        var weddingDate = $('#clock').data('date');
        $('#clock').countdown(weddingDate, function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div>' +
                '<div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div>' +
                '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>' +
                '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'));
        });
    }


    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($("input[name='product-count']").length) {
        $("input[name='product-count']").TouchSpin({
            verticalbuttons: true
        });
    }

    /*------------------------------------------
       = BACK TO TOP BTN SETTING
   -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })

    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        preloader();
        // wow.init();

        toggleMobileNavigation();

        smallNavFunctionality();

        smoothScrolling($("#navbar > ul > li > a[href^='#']"), $(".wpo-site-header .navigation").innerHeight());
    });

    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {

        toggleBackToTopBtn();

        activeMenuItem($(".navigation-holder"));

    });

    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {
        toggleClassForSmallNav();
        //smallNavFunctionality();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();

            siteMiddleLogoSetting();

        }, 200));

    });
})(window.jQuery);
