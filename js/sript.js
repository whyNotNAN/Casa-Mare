
const iconMenu = document.querySelector('.menu-header__icon');
const menuBody = document.querySelector('.menu-header__body');
const menuLinks = document.querySelectorAll('.menu__header__link');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuLinks.forEach(menuLinks=>{
			if (iconMenu.classList.contains('_active')) {
				menuLinks.addEventListener("click", function (e) {
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

new Swiper('.gallery-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	initialSlide: 3,
	autoHeight: true,
	loop: true,
	keyboard: {
		enabled: true,
	}
});