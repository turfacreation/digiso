(function ($) {
	("use strict");

	//permanent solution
	$(".vidplay").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
				"</div>",
			patterns: {
				youtube: {
					index: "youtube.com/",
					// এই RegEx টি v= এর পরের পুরো অংশটি (আইডি) সঠিকভাবে নিবে, মাঝে = থাকলেও সমস্যা হবে না
					id: function (url) {
						var m = url.match(/[\\?&]v=([^&#]*)/);
						if (m && m[1]) {
							return m[1];
						}
						return null;
					},
					src: "https://www.youtube-nocookie.com/embed/%id%?autoplay=1",
				},
			},
			srcAction: "iframe_src",
		},
	});
	// video magnific popup js

	//brands logo slider
	var swiper = new Swiper(".mySwiper", {
		//slidesPerView: 7,
		loop: true,
		// loopAdditionalSlides: 10,
		spaceBetween: 40,
		freeMode: true,
		speed: 4000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		// Default config (Mobile First - 576px এর কম স্ক্রিনের জন্য)
		slidesPerView: 2,
		spaceBetween: 15,

		// Responsive Breakpoints
		breakpoints: {
			// Extra Small Devices (Smartphones: 480px and up)
			480: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			// Small / Medium Devices (Tablets: 768px and up)
			768: {
				slidesPerView: 4,
				spaceBetween: 25,
			},
			// Large Devices (Laptops: 992px and up)
			992: {
				slidesPerView: 5,
				spaceBetween: 30,
			},
			// Extra Large Devices (Desktops: 1200px and up)
			1200: {
				slidesPerView: 7,
				spaceBetween: 40,
			},
		},
	});

	//About Brands logo slider for home 2 page

	const logoSwiper = new Swiper(".logo-swiper", {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 20,
		speed: 4000,
		allowTouchMove: true,
		autoplay: {
			delay: 1,
			disableOnInteraction: false,
			pauseOnMouseEnter: false,
		},

		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1280: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	});

	//testimonial slider
	var swiper = new Swiper(".testimonialSwiper", {
		slidesPerView: 1,
		loop: true,
		// loopAdditionalSlides: 10,
		spaceBetween: 40,
		//freeMode: true,
		speed: 800,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination", // el means: - elements
			clickable: true,
		},
	});

	//testimonial slider Home 2 page
	var swiper = new Swiper(".testimonialSwiperHome2", {
		slidesPerView: 1,
		loop: true,
		// loopAdditionalSlides: 10,
		spaceBetween: 40,
		//freeMode: true,
		speed: 800,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination", // el means: - elements
			clickable: true,
		},
	});
	// text slider part.............................................................
	var textMarquee = new Swiper(".textMarqueeSwiper", {
		slidesPerView: "auto",
		loop: true,
		spaceBetween: 40,
		freeMode: true,
		speed: 4000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	// /* Odometer Active js................................................................ */
	$(".odometer").appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
})(jQuery);
