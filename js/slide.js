var slider = $('.slider');
var next = $('.btn-next');
var previous = $('.btn-prev');


$('.slider section:last').insertBefore('.slider section:first');
slider.css("margin-left", '-'+100+'%');

function moverD(){
	slider.animate({
		marginLeft:'-'+200+'%'
	}, 900, function(){
		$('.slider section:first').insertAfter('.slider section:last');
		slider.css("margin-left", '-'+100+'%');
	});
}

function moverI(){
	slider.animate({
		marginLeft:0
	}, 900, function(){
		$('.slider section:last').insertBefore('.slider section:first');
		slider.css("margin-left", '-'+100+'%');
	});
}

next.on('click', function(){
	moverD();
});

previous.on('click', function(){
	moverI();
});

setInterval(moverD, 4500);