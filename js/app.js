$(function () {
	let nav = $('#nav');

	//  Burger menu
	$('.burger').click(function (event) {
		$('.burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__logo,.header__link').click(function (event) {
		$('.burger,.menu').removeClass('active');
		$('body').removeClass('lock');
	});

	// Smooth Scroll
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass('show');

		$('html, body').animate(
			{
				scrollTop: elementOffset - 70,
			},
			700
		);
	});

	// Tabs visible
	const tabsBtn = document.querySelectorAll('.features__tab');
	const tabsItem = document.querySelectorAll('.features__item');

	tabsBtn.forEach(onTabClick);

	function onTabClick(item) {
		item.addEventListener('click', function () {
			let currentTab = item;
			let tabId = currentTab.getAttribute('data-tab');
			let currentBtn = document.querySelector(tabId);

			if (!currentTab.classList.contains('active')) {
				tabsBtn.forEach(function (item) {
					item.classList.remove('active');
				});

				tabsItem.forEach(function (item) {
					item.classList.remove('active');
				});

				currentTab.classList.add('active');
				currentBtn.classList.add('active');
			}
		});
	}

	document.querySelector('.features__tab').click();
});
