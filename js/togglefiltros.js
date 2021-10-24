var filter = $('.filtering');
var div = $('.filtering-zone');
var cros = $('#cross');
var bar = $('#bars');
var i = 0;
var he = div.css('height');

$(document).ready(function(){
	cros.click(function(){
		div.animate({height:'toggle'});
		if(i===0){
			cros.attr('src','../imgs/x.svg');
			i=1;
		}
		else {
			cros.attr('src','../imgs/down-arrow.svg');
			i=0;
		}
		
	});
	if (window.matchMedia('(min-width: 705px)').matches) {
		div.css('height','100%');
		cros.css('display', 'none');
	}
	$(window).resize(function(){
		if (window.matchMedia('(min-width: 705px)').matches) {
			cros.css('display', 'none');
			div.css('display','block');
		}
		else if(window.matchMedia('(max-width: 704px)').matches){
			cros.css('display', 'block');	
		}	
	});
});