function px2rem_750(){
	var iWidth = document.documentElement.getBoundingClientRect().width;
	iWidth = iWidth > 750 ? 750 : iWidth;
	document.getElementsByTagName('html')[0].style.fontSize = iWidth / 20.83333 + 'px';
}
window.onload = function(){
	px2rem_750();
}
window.onresize = function(){
	px2rem_750();
}