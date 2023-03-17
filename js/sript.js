
const iconMenu = document.querySelector('.menu-header__icon');
const menuBody = document.querySelector('.menu-header__body');
const menuLinks = document.querySelectorAll('.menu__header__link');
const logo = document.querySelector('.header__logo');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuLinks.forEach(menuLinks => {
			if (iconMenu.classList.contains('_active')) {
				menuLinks.addEventListener("click", function (e) {
					document.body.classList.remove('_lock');
					iconMenu.classList.remove('_active');
					menuBody.classList.remove('_active');
				})
				logo.addEventListener("click", function (e) {
					document.body.classList.remove('_lock');
					iconMenu.classList.remove('_active');
					menuBody.classList.remove('_active');
				})
			}
		})
	})
}


/*
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	})*/

new Swiper('.slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	initialSlide: 3,
	autoHeight: true,
	loop: true,
	keyboard: {
		enabled: true,
	}
});