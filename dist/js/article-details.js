$('.articles__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    mobileFirst: true,
    responsive: [
      
      {
        breakpoint: 300,
        settings: {
          arrows: false,
          dots: true,
        }
      },
       {
          breakpoint: 767,
          settings: "unslick",
       }
    ]
 });



mobileOnlySlider(".articles__slider", true, false, 767);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
		mobileFirst: true,
		dots: $dots,
		arrows: $arrows,
		responsive: [
			{
				breakpoint: $breakpoint,
				settings: "unslick"
			}
		]
	};

	slider.slick(settings);

	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
			return;
		}
		if (!slider.hasClass("slick-initialized")) {
			return slider.slick(settings);
		}
	});
} // Mobile Only Slider
