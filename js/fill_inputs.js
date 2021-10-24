var tag = document.getElementsByClassName('filters-label');
var count = 0;
//$divElement = $('.prop-name');
//$('#prop_name').attr("value",$divElement.text());

for (var i = 0; i < tag.length; i++) {
	if(tag[i].style.display == 'none');
	{
		count++;
	}
}
console.log(count);
if(count == tag.length){

	document.getElementsByClassName('propiedades-filters')[0].style.display = 'none';
}