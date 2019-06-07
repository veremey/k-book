import $ from "jquery";
import mask from 'jquery-mask-plugin';

$(document).ready(function () {

	$('.js-ppp').click(function(e){
		e.preventDefault();
		//close all popup
		$('.ppp').removeClass('is-active');
		$('.ppp__content').removeClass('is-active');
		//open my popup
		var getClass = $(this).data('ppp');
		$('.ppp').addClass('is-active');
		$('#' + getClass).addClass('is-active');

		$('.page').addClass('ppp-opened');

	});

	$('.js-close').click(function(e){
		e.preventDefault();
		//close all popups
		closePpp();
	});

	// $('.contact__input').on('change', function(){
	// 	if($(this).val().length){
	// 		$(this).siblings().css({'display' : 'none'})
	// 	} else {
	// 		$(this).siblings().css({'display' : ''});
	// 	}
	// });

	$('.contact__input_phone').mask('+000000000000');
});



function closePpp(){
	$('.ppp').removeClass('is-active');
	$('.ppp__content').removeClass('is-active');
	$('.page').removeClass('ppp-opened');
}

$(document).on('click', function(el){
	var childr = $('.ppp__shadow');

	if($(el.target).is(childr) == true ){
		closePpp();
	}
});