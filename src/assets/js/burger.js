const burger = document.querySelector('.icon-menu');
const mobileNav = document.querySelector('.mobile-nav');

if (burger) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('icon-menu_active');
		mobileNav.classList.toggle('mobile-nav_active');

		document.body.classList.toggle('_stop-scroll');
	});
}
