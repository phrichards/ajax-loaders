$(function() {

	var getTracks = function(){
		$.ajax({
			url: 'http://ws.audioscrobbler.com/2.0/',
			type: 'GET',
			dataType: 'jsonp',
			data: {
				method: 'user.getartisttracks',
				user: 'elevature',
				artist: 'the national',
				api_key: '51657a939714920b12e608782d9961d0',
				format: 'json'
			},
			success: function(result) {
				console.log(result);
			}
		}); // end of ajax
	} // end of getTracks

	$('.button1').on('click', function(){
		$(this).loaders({spinnerNumber: 1, backgroundColor: 'green'});
		getTracks();
	});
	$('.button2').on('click', function(){
		$(this).loaders({spinnerNumber: 2, backgroundColor: 'blue'});
		getTracks();
	});
	$('.button3').on('click', function(){
		$(this).loaders({spinnerNumber: 3, backgroundColor: 'red'});
		getTracks();
	});
	$('.button4').on('click', function(){
		$(this).loaders({spinnerNumber: 4, backgroundColor: 'yellow'});
		getTracks();
	});
	$('.button5').on('click', function(){
		$(this).loaders({spinnerNumber: 5, backgroundColor: 'orange', top: '10%', left: '10%'});
		getTracks();
	});
	$('.button6').on('click', function(){
		$(this).loaders({spinnerNumber: 6, backgroundColor: 'purple', top: '10%', left: '90%'});
		getTracks();
	});
	$('.button7').on('click', function(){
		$(this).loaders({spinnerNumber: 7, backgroundColor: 'brown', top: '60%', left: '10%'});
		getTracks();
	});
	$('.button8').on('click', function(){
		$(this).loaders({spinnerNumber: 8, backgroundColor: 'black', top: '60%', left: '90%'});
		getTracks();
	});
});