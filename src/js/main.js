$(document).ready(function() {
    // DataBG();
    toggleClass();
    mappingMenu();
    linkAbout();
    // linkScroll();
    swiperInit();
    tabActive();
});


function toggleClass() {
    $('.moblie-toggle, .overlay').click(function() {
        $(this).toggleClass("click");
        $('.menu_mobile').toggleClass("show");
        $('.overlay').toggleClass("show");
    });
    $('.search-icon, .btn-close').click(function() {
        $(this).toggleClass("click");
        $('.searchbox').toggleClass("show");
    });
}

function mappingMenu() {
    return new MappingListener({
        selector: ".nav-menu",
        mobileWrapper: ".mobile-wrapper",
        mobileMethod: "appendTo",
        desktopWrapper: ".nav-wrapper",
        desktopMethod: "appendTo",
        breakpoint: 1281
    }).watch();
}

function linkAbout() {
    let elemHeader = $('header').outerHeight();
    let menuStiky = $('.block_feature-header').outerHeight();
    let elemLink = $('.block_feature-first a');
    elemLink.on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        console.log(hash);
        $('html, body').animate({
            scrollTop: $(hash).offset().top - (elemHeader + menuStiky)
        }, 0);
    })
}

// function linkScroll() {
//     $(".link-to-about-section a").on("click", function(event) {
//         if (this.hash !== "") {
//             let offset = $("header").outerHeight() + 50;
//             var hash = this.hash;
//             $(".link-to-about-section a").removeClass('active')
//             $(this).addClass('active')

//             $("html, body").animate({
//                     scrollTop: $(hash).offset().top - offset,
//                 },
//                 800,
//                 function() {
//                     window.location.hash = hash;
//                 }
//             );
//         } // End if
//     });
// }

$('.collapse').click(function(e) {
    e.preventDefault();
    $('.collapse').removeClass('click');

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .collapse-inner').removeClass('show');
        $this.parent().parent().find('li .collapse-inner').slideUp(350);
        $this.toggleClass('click');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

function swiperInit() {
    var homerSwiper = new Swiper(".home-banner .swiper-container", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".home-banner-pagination",
            type: "bullets",
            clickable: "true"
        }
    });
    var brandSwiper = new Swiper(".block_news-list .slide-news", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.block_news-list .nav-arrow-next',
            prevEl: '.block_news-list .nav-arrow-prev',
        },
        pagination: {
            el: ".news-pagination",
            type: "bullets",
            clickable: "true"
        },
    });
    var brandSwiper = new Swiper(".block_feature-header .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 5,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: ".block_feature-header .nav-arrow-next",
            prevEl: ".block_feature-header .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            400: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 6,
            },
            1025: {
                slidesPerView: 7,
            },
            1440: {
                slidesPerView: 8,
            },
            1600: {
                slidesPerView: 9,
            },
        },
    });
}



$('.moreless-button').click(function() {
    $(this).toggleClass("click");
    $('.moreless-button').toggleClass("show");
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Xem thêm") {
        $(this).text("Thu gọn")
    } else {
        $(this).text("Xem thêm")
    }
});
$('.moreless-button-2').click(function() {
    $(this).toggleClass("click");
    $('.moreless-button-2').toggleClass("show");
    $('.moretext-2').slideToggle();
    if ($('.moreless-button-2').text() == "Xem thêm") {
        $(this).text("Thu gọn")
    } else {
        $(this).text("Xem thêm")
    }
});
$('.moreless-button-3').click(function() {
    $(this).toggleClass("click");
    $('.moreless-button-3').toggleClass("show");
    $('.moretext-3').slideToggle();
    if ($('.moreless-button-3').text() == "Xem thêm") {
        $(this).text("Thu gọn")
    } else {
        $(this).text("Xem thêm")
    }
});

function tabActive() {
    $(".tab-navigation li a").on("click", function() {
        $(this)
            .parents(".tab-navigation")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper .tab-item.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}