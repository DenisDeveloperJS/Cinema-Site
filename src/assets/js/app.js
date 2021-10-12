const shemeSvg = document.querySelector('.scheme__svg');
const pricePriceText = document.querySelector('.price__price-text');
const filmDateData = document.querySelector('.film-date__data');

const rub = pricePriceText.textContent.slice(-1);

const booked = {
	countSeet: 0,
	price: 0,
};

shemeSvg.addEventListener('click', function (e) {
	const target = e.target.closest('path');

	if (
		target &&
		!target.classList.contains('light') &&
		!target.classList.contains('booked')
	) {
		target.classList.toggle('path_active');

		booked.countSeet = ++booked.countSeet;
	}

	if (target && !target.classList.contains('path_active')) {
		console.log(booked.price);
		console.log('minus');

		booked.price = +booked.price - 800;
		console.log(booked.price);
		pricePriceText.textContent = booked.price + ' ' + rub;
	} else if (target) {
		booked.price = +booked.price + 800;
		pricePriceText.textContent = booked.price + ' ' + rub;
	}
});

filmDateData.addEventListener('click', function (e) {
	const target = e.target.closest('.film-date__item');

	if (target) {
		[...filmDateData.children].forEach(item => {
			item.classList.remove('film-date__item_active');
		});

		target.classList.toggle('film-date__item_active');
	}
});
