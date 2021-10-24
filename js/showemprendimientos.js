var a = document.getElementsByClassName('emprendimiento--hidden');
var b = document.getElementsByClassName('emprendimientos-vermas')[0];

console.log

b.onclick = function() {
	for(var i = 0; i<a.length;i++){
		a[i].style.display = 'block';
	}
	b.style.display = 'none';
};