new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 3,
	watchOverflow: false,
	loop: true,
	simulateTouch: true,
	grabCursor: true,
	breakpoints: {
		310: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 3,
		},
	},
});