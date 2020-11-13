$(document).ready(function() {
    // DataBG();
    toggleClass();
    mappingMenu();
    linkAbout();
    swiperInit();
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
    $(".link-to-about-section a").on("click", function(event) {
        if (this.hash !== "") {
            let offset = $("header").outerHeight() + 50;
            var hash = this.hash;
            $(".link-to-about-section a").removeClass('active')
            $(this).addClass('active')

            $("html, body").animate({
                    scrollTop: $(hash).offset().top - offset,
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });
}

$('.collapse').click(function(e) {
    e.preventDefault();
    $(this).removeClass('click');
    $('.block_collapse').toggleClass("show");

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(250);
    } else {
        $this.parent().parent().find('li .collapse-inner').removeClass('show');
        $this.parent().parent().find('li .collapse-inner').slideUp(250);
        $this.toggleClass('click');
        $this.next().toggleClass('show');
        $this.next().slideToggle(250);
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