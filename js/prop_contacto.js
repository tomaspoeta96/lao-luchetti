$(document).ready(function(){
	$divElement = $('.prop-name');
	$('#prop_name').attr("value",$divElement.text());

	$('.contactar').click(function(){
		$(".overlay").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}), { duration: 300, queue: false };
		$(".contacto").css({opacity: 0.0, visibility:"visible"}).animate({opacity: 1.0}), { duration: 300, queue: false };
		if ($(".overlay").css('visibility') == 'visible') {
			$("body").css("overflow", "hidden");
		}
	});

	$('.contacto-x').click(function(){
		$(".overlay").css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 1.0}), { duration: 300, queue: false };
		$(".contacto").css({opacity: 0.0, visibility:"hidden"}).animate({opacity: 1.0}), { duration: 300, queue: false };
		if ($(".overlay").css('visibility') == 'hidden') {
			$("body").css("overflow", "initial");
	}
	});

});
