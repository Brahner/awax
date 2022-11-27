document.addEventListener( 'DOMContentLoaded', function(){
	let btnScroll = document.querySelector('.scroll__btn');
	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.menu');
	
	btnScroll.addEventListener('click', function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
	
	burger.addEventListener('click', function(){
		burger.classList.toggle('burger--active');
		menu.classList.toggle('menu--active');
	});
});
