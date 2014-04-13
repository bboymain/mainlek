
$(document).ready(function(){

	/* default settings */
	$('.venobox').venobox(); 


	/* open content with custom settings */
	$('.venobox_custom').venobox({
		framewidth: '600px',
		frameheight: '350px',
		border: '6px',
		bordercolor: '#ba7c36',
		numeratio: false,
		infinigall: false
	});

	/* auto-open #firstlink on page load */
	$("#firstlink").venobox().trigger('click');
});
