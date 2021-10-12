const i = setInterval(() => {
	const bsNotify = document.querySelector('#__bs_notify__');

	if (bsNotify) {
		bsNotify.remove();
		clearInterval(i);
	}
}, 0);

console.log('none-sync');
