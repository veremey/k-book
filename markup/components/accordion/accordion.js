
import $ from "jquery";

$(document).ready(function () {
	$('.accordion__item.is-active .accordion__text').slideDown();

	$('.accordion__item').click(function(){
		$('.accordion__item').removeClass('is-active');
		$('.accordion__text').slideUp();
		$(this).addClass('is-active');
		$(this).find('.accordion__text').slideDown();
	});
});