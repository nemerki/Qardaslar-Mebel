$(document).ready(function() {
	var nonLinearSlider = document.getElementById('slider-snap');

	noUiSlider.create(nonLinearSlider, {
		connect: true,
		behaviour: 'tap',
		start: [ 50, 1500 ],
		range: {
		// Starting at 500, step the value by 500,
		// until 4000 is reached. From there, step by 1000.
		'min': [ 0 ],
		'20%': [ 300, 10 ],
		'30%': [ 500, 50 ],
		'50%': [ 1000, 100 ],
		'70%': [ 5000, 1000 ],
		'max': [ 10000 ]
	}
});

	var nodes = [

	document.getElementById('min'), // 0
	document.getElementById('max')  // 1
	];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
	nodes[handle].innerHTML = values[handle] ;
});


});