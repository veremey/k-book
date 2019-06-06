import $ from "jquery";

$(document).ready(function () {
	$('.js-down').on('click touchstart', function(e){
		e.preventDefault();

		var father = $(this).parents('.section');
		var neighbour = $(this).parents('.section').next();
		var header = $('.header').outerHeight();
		var oftop = neighbour.offset().top - header;

		$('html,body').animate({
			scrollTop: oftop
			}, 800, 'swing');
	});
});
