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

	$('button').on('click', function(){
		$(this).loaders({spinnerNumber: 7, backgroundColor: 'green'});
		getTracks();
	});
});