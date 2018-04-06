$(function(){
	$(".partners__carousel").owlCarousel({
		loop:true,
		margin:10,
		
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});


	$(".header-carousel").owlCarousel({
		loop:true,
		
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$(".featured__carousel").owlCarousel({
		loop:true,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		dots :false,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

});