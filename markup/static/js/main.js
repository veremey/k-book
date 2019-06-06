'use strict';

import $ from "jquery";
import accordion from './../../components/accordion/accordion.js';
import hero from './../../components/hero/hero.js';
import popup from './../../components/footer/footer.js';

$(document).ready(function () {
	//add css to head
	var linkElement = "<link href='static/css/main.css' rel='stylesheet'  type='text/css'>";

	 $("head").append(linkElement);

	 var $font = '<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900&display=swap&subset=cyrillic" rel="stylesheet">';

	$('[name="HandheldFriendly" ]').append($font);

});
