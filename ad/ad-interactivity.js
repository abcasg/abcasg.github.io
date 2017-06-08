//This is where our ad interactivity code will live.

$(document).ready( function()
{

	// the rest of our code will go here.

	header_text = $('h1');
	button = $('button');

	// set the header_text to its 
	// initial animation state:
	header_text.css({
		top:50,
		opacity:0
	})

	// set the button to its
	// initial animation state:
	button.css({
		top:100,
		opacity:0
	})

	//animate the header text:
	header_text.animate({
		top:0,
		opacity:1
	} , {
		duration:500,
		complete: function()
		{
			button.animate({
				top:0,
				opacity:1
			}, {
				duration:500
			})
		}
	});

});





/*
function animateUp( $element , duration , complete )
{
	$element.css({
		top:-200,
		opacity:0
	})

	$element.animate({
		top:0,
		opacity:1
	} , {
		duration : duration,
		complete : complete
	})
}
*/