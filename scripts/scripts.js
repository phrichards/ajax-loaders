$(function() {

	var mockAjax = function(){
		$.ajax({
			url: '/test/inline',
			dataType: 'json',
			success: function() {
			}
		});
	}

	$('.button1').on('click', function(){
		$(this).loaders({spinnerNumber: 1, backgroundColor: 'green'});
		mockAjax();
	});
	$('.button2').on('click', function(){
		$(this).loaders({spinnerNumber: 2, backgroundColor: 'blue'});
		mockAjax();
	});
	$('.button3').on('click', function(){
		$(this).loaders({spinnerNumber: 3, backgroundColor: 'red'});
		mockAjax();
	});
	$('.button4').on('click', function(){
		$(this).loaders({spinnerNumber: 4, backgroundColor: 'yellow'});
		mockAjax();
	});
	$('.button5').on('click', function(){
		$(this).loaders({spinnerNumber: 5, backgroundColor: 'orange', top: '10%', left: '10%'});
		mockAjax();
	});
	$('.button6').on('click', function(){
		$(this).loaders({spinnerNumber: 6, backgroundColor: 'purple', top: '10%', left: '90%'});
		mockAjax();
	});
	$('.button7').on('click', function(){
		$(this).loaders({spinnerNumber: 7, backgroundColor: 'brown', top: '60%', left: '10%'});
		mockAjax();
	});
	$('.button8').on('click', function(){
		$(this).loaders({spinnerNumber: 8, backgroundColor: 'black', top: '60%', left: '90%'});
		mockAjax();
	});
});