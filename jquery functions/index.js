$(document).ready(function(){
	$('#hideb').click(function(){
		$('#atk').hide();
	});
	$('#show').click(function(){
		$('#atk').show();
	});
	$('#toggle').click(function(){
		$('#atk').toggle();
	});
	$('#atk').hover(function(){
		var temp1 = $(this).attr('data-alt-src');
		var temp2 = $(this).attr('src');
		$(this).attr('src',temp1);
		$(this).attr('data-alt-src', temp2);
	});
	$('#slidedown').click(function(){
		$('#atk').slideDown();
	});
	$('#slideup').click(function(){
		$('#atk').slideUp();
	});
	$('#slidetoggle').click(function(){
		$('#atk').slideToggle();
	});
	$('#fadein').click(function(){
		$('#atk').fadeIn();
	});
	$('#fadeout').click(function(){
		$('#atk').fadeOut();
	});
	$('#addclass').click(function(){
		$('button').addClass('power')
	});
	$('#before').click(function(){
		$('#atk').before("<b>*Zoom*</b>")
	});
	$('#after').click(function(){
		$('#atk').after("<b>RAWR</b>")
	});
	$('#append').click(function(){
		$('p').append("<stong> The Ghostinator!</strong>");
	});
	$('#html').click(function(){
		$('p').html("You wont like him when he is <span id=red>angry!!!</span>")
	})
});