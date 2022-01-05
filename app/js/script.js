// const btnHamburger = document.querySelector('#btnHamburger');
const btnMenu = document.querySelector('#btnMenu');
const btnImage = document.getElementById('btnImage');

const body = document.querySelector('body');
const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');

const fadeElems = document.querySelectorAll('.has-fade');

const menuItems = document.querySelectorAll('.menu-item > a');

btnMenu.addEventListener('click', function(){
	console.log('open hamburger');
	if(header.classList.contains('open')){ // Close hamburger menu
		body.classList.remove('noscroll');
		header.classList.remove('open');
		btnImage.src = '../../images/icon-hamburger.svg';
		fadeElems.forEach(function(element){
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		})
		
	} else { // Open hamburger menu
		body.classList.add('noscroll');
		header.classList.add('open');
		btnImage.src = '../../images/icon-close.svg';
		fadeElems.forEach(function(element){
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
		
	}
});

menuItems.forEach(item => {
	item.addEventListener('click', () => {
		// const subMenu = document.getElementById(item.dataset.menu);
		// subMenu.style.display = 'block';
		// subMenu.classList.add('expand')
		const menuItem = item.parentElement
		if (menuItem.classList.contains('expand')) {
			menuItem.classList.remove('expand');
		} else {
			item.parentElement.classList.add('expand');
		}
	});
});