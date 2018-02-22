$(document).ready(function(){

	$('button').click(function(){
		var temp = $('#first_name').val();
		$('#first').append(temp);
	});
	$('button').click(function(){
		var temp = $('#last_name').val();
		$('#last').append(temp);
	});
	$('button').click(function(){
		var temp = $('#email').val();
		$('#mail').append(temp);
	});
	$('button').click(function(){
		var temp = $('#phone').val();
		$('#phon').append(temp);
	});
	

});

	