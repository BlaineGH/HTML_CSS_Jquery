$(document).ready(function(){
	$('form').submit(function(){
		return false;
	})
	$('form').submit(function(){
		var firstname = $('#first').val();
		var lastname = $('#last').val();
		var description = $('#description').val();
		$('#card').append('<div><h2>'+firstname+' '+lastname+'</h2><p>Click Here for a description</p><p id="bio">'+description+'</p></div>');
	})
	$(document).on('click', '#card div', function(){
		$(this).children().toggle();
	})
});