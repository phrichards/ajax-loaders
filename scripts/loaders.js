$.fn.loaders = function(options){

	var settings = $.extend({
		spinnerNumber: 1,
		backgroundColor: '#000',
		top: '30%',
		left: '48%'
	}, options);

	$(document).ajaxStart(function(){
		$('.overlay').append('<div class="spinner">');
		$('.overlay').fadeIn();
	});
	$(document).ajaxStop(function(){
		$('.overlay').fadeOut();
		$('.overlay').empty();
	})

	if (settings.spinnerNumber == 1) {
		$('.overlay').append('<div class="spinner1">');
		$('.spinner1').css({
			backgroundColor: settings.backgroundColor,
			top: settings.top,
			left: settings.left 
			});
	} 
	else if (settings.spinnerNumber == 2) {
		$('.overlay').append('<div class="spinner2">');
		$('.spinner2').append('<div class="double-bounce1">', '<div class="double-bounce2">')
		$('.double-bounce1, .double-bounce2').css({backgroundColor: settings.backgroundColor});
		$('.spinner2').css({top: settings.top, left: settings.left});
	}
	else if (settings.spinnerNumber == 3) {
		$('.overlay').append('<div class="spinner3">');
		$('.spinner3').append('<div class="rect1">', '<div class="rect2">', '<div class="rect3">', '<div class="rect4">', '<div class="rect5">');
		$('.spinner3 > div').css({backgroundColor: settings.backgroundColor});
		$('.spinner3').css({top: settings.top, left: settings.left});
	}
	else if (settings.spinnerNumber == 4) {
		$('.overlay').append('<div class="spinner4">');
		$('.spinner4').append('<div class="cube1">', '<div class="cube2">');
		$('.cube1, .cube2').css({backgroundColor: settings.backgroundColor});
		$('.spinner4').css({top: settings.top, left: settings.left});
	}
	else if (settings.spinnerNumber == 5) {
		$('.overlay').append('<div class="spinner5">');
		$('.spinner5').css({
			backgroundColor: settings.backgroundColor,
			top: settings.top,
			left: settings.left 
			});
	}
	else if (settings.spinnerNumber == 6) {
		$('.overlay').append('<div class="spinner6">');
		$('.spinner6').append('<div class="dot1">', '<div class="dot2">')
		$('.dot1, .dot2').css({backgroundColor: settings.backgroundColor});
		$('.spinner6').css({top: settings.top, left: settings.left});
	}
	else if (settings.spinnerNumber == 7) {
		$('.overlay').append('<div class="spinner7">');
		$('.spinner7').append('<div class="bounce1">', '<div class="bounce2">', '<div class="bounce3">')
		$('.spinner7 > div').css({backgroundColor: settings.backgroundColor});
		$('.spinner7').css({top: settings.top, left: settings.left});
	}
	else if (settings.spinnerNumber == 8) {
		$('.overlay').append('<div class="spinner8">');
		$('.spinner8').append('<div class="spinner8-container container1">', '<div class="spinner8-container container2">', '<div class="spinner8-container container3">')
		$('.container1').append('<div class="circle1">', '<div class="circle2">', '<div class="circle3">', '<div class="circle4">');
		$('.container2').append('<div class="circle1">', '<div class="circle2">', '<div class="circle3">', '<div class="circle4">');
		$('.container3').append('<div class="circle1">', '<div class="circle2">', '<div class="circle3">', '<div class="circle4">');
		$('.container1 > div, .container2 > div, .container3 > div').css({backgroundColor: settings.backgroundColor});
		$('.spinner8').css({top: settings.top, left: settings.left});
	}

	return this;
};