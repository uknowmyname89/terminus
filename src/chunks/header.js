require("@fancyapps/fancybox");
require("ion-rangeslider");
require("ion-rangeslider/css/ion.rangeSlider.css");
require("slick-carousel");

$(function(){
	$('[data-mobile-toggle=true]').click(function(e){
		e.preventDefault();
		$('.menu-mobile-block').toggleClass('show');
		$('html').toggleClass('o-hidden');
	});
	$('.nav-link.dropdown').click(function(e){
		e.preventDefault();
		var data=$(this).data('submenu-toggle');
		$('.nav-link.dropdown').not(this).removeClass('active');
		$(this).toggleClass('active');
		$('.submenu__item').slideUp();
		if ($(this).hasClass('active')) {
			$('.submenu__item.item'+data).slideDown();
		}
	});
});
