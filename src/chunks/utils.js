require("@fancyapps/fancybox");
require("ion-rangeslider");
require("ion-rangeslider/css/ion.rangeSlider.css");
import $ from 'jquery';
window.jQuery = $;
require("slick-carousel");

$(function () {

  var $body = $('body');

  $body.on('click', '.ajax-modal', function(e){
    e.preventDefault();
    var $obj = $(this).data("target");
    console.log($(this).data("remote"));
    $($obj+' .modal-content').load($(this).data("remote"),function(){
      $($obj).modal({show:true});
    });
  });
  $("[data-fancybox]").fancybox();
  $(".range-slider").ionRangeSlider({
    skin: "round",
    min: 0,
    max: 20000,
    step: 10,
    grid: true,
    grid_num: 2,
    grid_snap: false
  });



  $('.slick-gallery__full').not('.no-thumb').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: false,
    asNavFor: '.slick-gallery__thumbnails',
  });
  $('.slick-gallery__full.no-thumb').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: false,
  });

  $('.slick-gallery__thumbnails').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-gallery__full',
    dots: false,
    centerPadding: '120px',
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.slick-gallery__thumbnails .slick-slide').removeClass('slick-active');
  $('.slick-gallery__thumbnails .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match slick-active thumbnail to current slide
  $('.slick-gallery__full').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slick-gallery__thumbnails .slick-slide').removeClass('slick-active');
    $('.slick-gallery__thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });

});
