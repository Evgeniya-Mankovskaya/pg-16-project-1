$('.reviews__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.reviews__slider-2',
});
$('.reviews__slider-2').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.reviews__slider',
  /* centerMode: true, */
  focusOnSelect: true,
  /* variablewidth: true, */
  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
    ]
});
