$(document).ready(function () {
	// DataBG();
	toggleClass();
	mappingMenu();
});


function toggleClass() {
	$('.moblie-toggle, .overlay').click(function () {
		$(this).toggleClass("click");
		$('.menu_mobile').toggleClass("show");
		$('.overlay').toggleClass("show");
	});
	$('.search, .btn-close').click(function () {
		$(this).toggleClass("click");
		$('.box_search').toggleClass("show");
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

$('.collapse').click(function (e) {
    e.preventDefault();
	$(".collapse").removeClass('click');
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