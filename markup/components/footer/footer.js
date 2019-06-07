import $ from "jquery";
import mask from 'jquery-mask-plugin';
import valid from 'jquery-validation';


$(document).ready(function () {

	validate();

	$('.js-ppp').click(function(e){
		// e.preventDefault();
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


function validate() {
	$('.js-validate').each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: 'has-error',
				rules: {
					name: {
						minlength: 2,
						required: true
					},
					city: {
						minlength: 2
					},
					// password: {
					// 	minlength: 5
					// },
					// confirm_password: {
					// 	minlength: 5,
					// 	equalTo: '#password'
					// },
					email: {
						email: true,
						required: true
					},
					phone: {
						minlength: 17,
						required: true
					},
					// sallerTel: {
					// 	minlength: 17
					// },
					address: {
						minlength: 2
					},
					message: {
						minlength: 4
					},
					date: {
						minlength: 4
					},
					time: {
						minlength: 10
					},
					items: {
						minlength: 1
					},
					sallerName: {
						minlength: 2
					},
					sallerPost: {
						minlength: 2
					},
					square: {
						minlength: 1
					},
					garantUserComment:{
						minlength: 4
					},
					client: {
						required: true
					},
					agree: {
						required: true
					},
					obectYstanovki: {
						required: true
					},
					celZakypki: {
						required: true
					}
				},
				messages: {
					firstname: '* Вас так зовут?',
					lastname: '* У вас такая фамилия?',
					fathername: '* У вас такое отчество?',
					password: {
						required: '* Введите пароль',
						minlength: '* Минимум 5 символов'
					},
					confirm_password: {
						 required: '* Пароли не совпадают',
						 minlength: '* Минимум 5 символов',
						 equalTo: '* Пароли не совпадают'
					},
					// email: 'заполнено некорректно',
					address: '* Это Ваш адрес?',
					any: '* Заполните поле',
					time: 'Заполните поле',
					items: 'Заполните поле',
					company: '* Заполните поле',
					tel: {
						required: 'заполнено некорректно',
						minlength: 'заполнено некорректно'
					},
					name: {
						required: 'заполнено некорректно',
						minlength: 'Минимум 2 символa'
					},
					message: {
						required: '* Заполните поле',
						minlength: 'Заполните поле',
					},
					text_area: {
						required: '* Заполните поле',
						minlength: 'Заполните поле'
					}
				}
			});
		}
	});
}
