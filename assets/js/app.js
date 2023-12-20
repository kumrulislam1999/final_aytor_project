$(function () {
    // ==== Start header_page click jQuery Event ===== //

    $("#multiple_nav").on("click", function () {
        $('#multilink_nav_page').addClass('show')
    })
    $('.search_box').on('click', function () {
        $('#search_popup').addClass('show')

    });
    $('#btn_close, .close_popup').on('click', function () {
        $('#search_popup').removeClass('show')

    });

    $('.shopping_sidebar').on('click', function () {
        $('#cart_sidebar').addClass('show')
    })

    $('#btn_close_1').on('click', function () {
        $('#cart_sidebar').removeClass('show')
    })

    $(window).on('load', function () {
        $('#pupup_section').addClass('show')
    })

    $(".close_btn").on('click', function () {
        $('#pupup_section').removeClass('show')
    })
    // ====End header_page click jQuery Event ===== //

    // ==== Start Home_page Sliding jQuery ===== //
    $(".hero_slidin_box").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: false,
        fade: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
        appendDots: $(".dot_box"),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }]
    })


    $('.arriavl_sliding_box').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: `<i class='bx bx-arrow-back arrow arrow_left'></i> `,
        nextArrow: `<i class='bx bx-arrow-back arrow arrow_right'></i>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    })


    $('.deals_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        appendDots: $(".dot_box_1"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]

    })


    $('.latest_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        appendDots: $(".dot_box_2"),
        prevArrow: `<i class='bx bx-arrow-back arrow arrow_left'></i> `,
        nextArrow: `<i class='bx bx-arrow-back arrow arrow_right'></i>`,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    })



    // ====End Home_page sliding jQuery ===== //


    // ==== Start About_page sliding jQuery ===== //
    $('.leadership_slide_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        arrows: true,
        dots: false,
        prevArrow: `<i class='bx bx-arrow-back arrow arrow_left'></i> `,
        nextArrow: `<i class='bx bx-arrow-back arrow arrow_right'></i>`,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }]
    });
    $('.profile_sliding_box').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        appendDots: '.append_dot_box',
        dotsClass: "slick_dot",
        asNavFor: '.profile_asnavfor_box'
    });
    $('.profile_asnavfor_box').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.profile_sliding_box',
        centerMode: true,
        focusOnSelect: true
    });
    $('.instagram_sliding').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        arrows: false,
        dots: true,
        appendDots: '.append_dot_box_1',
        dotsClass: "slick_dot",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }]
    });
    // ==== End About_page sliding jQuery ===== //

    // ==== Start Shop_page Click Event jQuery  ===== //
    $('.menu_grid').on('click', function () {
        $('.menu_grid').addClass('show');
        $(".menu_line").removeClass('show');
        $('.shop_menu_grid').addClass('show');
        $('.shop_menu_line').removeClass('show')
    })
    $('.menu_line').on('click', function () {
        $('.menu_line').addClass('show');
        $(".menu_grid").removeClass('show');
        $('.shop_menu_line').addClass('show');
        $('.shop_menu_grid').removeClass('show');




    })


    // ==== End Shop_page Click Event jQuery  ===== //



    // ==== Start Shop_details_page sliding Event jQuery  ===== //
    $('.details_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        transition: 0.5,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "1px",
        arrows: false,
        fade: true,
        speed: 500,
        asNavFor: ".shop_asNavFor",

    })
    $('.shop_asNavFor').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        transition: 0.5,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: "1px",
        arrows: false,
        speed: 500,
        asNavFor: ".details_sliding_box",
        centerMode: true,

    })


    $('.overview_button_1').on('click', function () {
        $('.overview_button_1').addClass('active');
        $('.overview_button_2').removeClass('active');
        $('.overview_button_3').removeClass('active');
        $('.description_box').addClass('show')
        $('.customer_box').removeClass('show')
        $('.additional_box').removeClass('show');
    })

    $('.overview_button_2').on('click', function () {
        $('.overview_button_1').removeClass('active');
        $('.overview_button_2').addClass('active');
        $('.overview_button_3').removeClass('active');
        $('.customer_box').addClass('show')
        $('.description_box').removeClass('show')
        $('.additional_box').removeClass('show');
    })

    $('.overview_button_3').on('click', function () {
        $('.overview_button_3').addClass('active');
        $('.overview_button_2').removeClass('active');
        $('.overview_button_1').removeClass('active');
        $('.description_box').removeClass('show')
        $('.customer_box').removeClass('show')
        $('.additional_box').addClass('show');
    })


    $('.related_box').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        transition: 0.5,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '1px',
        arrows: false,
        speed: 500,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    })


    // ==== End Shop_details_page sliding Event jQuery  ===== //



    // ==== Start Shop_Classic_page sliding Event jQuery  ===== //
    $(".sliding_box").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        transition: 0.5,
        arrows: false,
        speed: 500,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        prevArrow: `<i class='bx bx-arrow-back arrow arrow_left'></i> `,
        nextArrow: `<i class='bx bx-arrow-back arrow arrow_right'></i>`,

    })
    // ==== End Shop_Classic_page sliding Event jQuery  ===== //

    // ==== Start Shop_Classic_page sliding Event jQuery  ===== //
    $(".sidebar_sliding_box").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        transition: 0.5,
        arrows: false,
        speed: 500,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,

    })
    // ==== Start Shop_Classic_page sliding Event jQuery  ===== //


    // ======== Start Chackout Page Here  ======== //
    $("#bank").click(function () {
        $(".bank_payment").addClass("fade");
        $(".cheque_payment").removeClass("fade");
        $(".credit_payment").removeClass("fade");
        $(".catch_payment").aremovelass("fade");
    })
    $("#cheque").click(function () {
        $(".bank_payment").removeClass("fade");
        $(".cheque_payment").addClass("fade");
        $(".credit_payment").removeClass("fade");
        $(".catch_payment").removeClass("fade");
    })
    $("#credit").click(function () {
        $(".bank_payment").removeClass("fade");
        $(".cheque_payment").removeClass("fade");
        $(".credit_payment").addClass("fade");
        $(".catch_payment").removeClass("fade");
    })
    $("#catch").click(function () {
        $(".bank_payment").removeClass("fade");
        $(".cheque_payment").removeClass("fade");
        $(".credit_payment").removeClass("fade");
        $(".catch_payment").addClass("fade");
    })
    // ======== End Chackout Page Here  ======== //
})


// ======== Start Counter Page Here  ======== //
$("#timer").countdown("2024/12/10", function (event) {
    var $this = $(this).html(
        event.strftime(
            "" +
            " <div><h4>%D</h4> <p>Days</p></div> " +
            "<span>:</span>" +
            " <div><h4>%H</h4> <p> Hour </p></div> " +
            "<span>:</span>" +
            " <div><h4>%M</h4> <p>Minute</p></div>   " +
            "<span>:</span>" +
            " <div><h4>%S</h4> <p>Second</p> </div>  "
        )
    );
});
// ======== End Counter Page Here  ======== //


// ======== Start ToolTip Here  ======== //
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
})
// ======== End ToolTip Here  ======== //



