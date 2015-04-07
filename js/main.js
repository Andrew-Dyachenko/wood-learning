$(document).ready(function () {
	$('#photo-gallery .item').nivoLightbox();

	function equalHeight () {
	    var biggestHeight = 0;
	    $('#photo-gallery .item img').each(function () {
	        if($(this).height() > biggestHeight) {
	            biggestHeight = $(this).height();  
	        }  
	    });
	    $('#photo-gallery .item').height(biggestHeight); 
	}
	
	$(window).resize(function () {
		$('#photo-gallery .item').removeAttr('style');
		equalHeight();
	});

	equalHeight();
});