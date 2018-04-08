$(document).ready(function() {
	$('.center').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		dots:true,
		//autoplay: true,
		//arrows: true,
		nextArrow:'<button class="slick-next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button class="slick-prev" type="button"> <i class="fa fa-angle-left" aria-hidden="true"></i> </button> ',

		responsive: [
		{
			breakpoint: 991,
			settings: {
				//arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				//arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
		]
	});
});


