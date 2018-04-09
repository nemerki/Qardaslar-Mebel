$(document).ready(function() {
	if($('.single-product__img-small ul li').length)
	{
		var thumbs = $('.single-product__img-small ul li');
		var singleImage = $('.single-product__img-big');

		thumbs.each(function()
		{
			var item = $(this);
			item.on('click', function()
			{
				thumbs.removeClass('active');
				item.addClass('active');
				var img = item.find('img').data('image');
				singleImage.css('background-image', 'url(' + img + ')');
			});
		});
	}
});