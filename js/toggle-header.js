var bars = $('#header-bars');
var links = document.getElementsByClassName('header-link');
var linksalter = $('.header-link');
var main = $('.header-bar');
var control = 1;

$(document).ready(function(){
	bars.on('click', function(){
		ToggleHead();
	});
	if (window.matchMedia('(min-width: 829px)').matches) {//modifique 7-10-17 23:24
		main.css('display','block');
	}
	else if(window.matchMedia('(max-width: 828px)').matches){//modifique 7-10-17 23:24
		main.css('display','none');	
	}

	$(window).resize(function(){
		if (window.matchMedia('(min-width: 829px)').matches) {//modifique 7-10-17 23:24
			main.css('display','block');
		}
		else if(window.matchMedia('(max-width: 829px)').matches){//modifique 7-10-17 23:24
			main.css('display','none');
			document.getElementById('header-bars').src = "../imgs/bars.svg";
		}	
	});
});

function ToggleHead(){
	if(main.is(':animated') == true){
		return false;
	}
	if(main.css('display') === 'block'){
		document.getElementById('header-bars').src = "../imgs/bars.svg";
	}
	else if(main.css('display') === 'none'){
		document.getElementById('header-bars').src = "../imgs/x.svg";
	}
	main.slideToggle('linear');
}