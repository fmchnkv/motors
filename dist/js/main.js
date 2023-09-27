document.addEventListener('DOMContentLoaded', () => {

});

jQuery(document).ready(function($) {
  let prev = '<div class="slider__arrow slider__arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.729958 6.58542C0.636279 6.64434 0.55051 6.72244 0.477499 6.8193C0.329248 7.01597 0.258629 7.25675 0.261703 7.49659C0.257167 7.73872 0.327711 7.98225 0.477389 8.18081C0.550575 8.27789 0.636577 8.35613 0.730518 8.41511L7.18909 14.4378C7.593 14.8145 8.18994 14.7623 8.52239 14.3213C8.85484 13.8803 8.7969 13.2174 8.39299 12.8407L2.66574 7.5L8.39288 2.15936C8.79679 1.7827 8.85473 1.11984 8.52228 0.678823C8.18983 0.237805 7.59289 0.18563 7.18898 0.562288L0.729958 6.58542Z" fill="#F81E36" /></svg></div>';

  let next = '<div class="slider__arrow slider__arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.27004 6.58542C8.36372 6.64434 8.44949 6.72244 8.5225 6.8193C8.67075 7.01597 8.74137 7.25675 8.7383 7.49659C8.74283 7.73872 8.67229 7.98225 8.52261 8.18081C8.44943 8.27789 8.36342 8.35613 8.26948 8.41511L1.81091 14.4378C1.407 14.8145 0.810059 14.7623 0.477611 14.3213C0.145163 13.8803 0.203099 13.2174 0.607014 12.8407L6.33426 7.5L0.607124 2.15936C0.203208 1.7827 0.145272 1.11984 0.47772 0.678823C0.810168 0.237805 1.40711 0.18563 1.81102 0.562288L8.27004 6.58542Z" fill="#F81E36" /></svg></div>';

  $( ".field__range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 0, 500 ],
    slide: function( event, ui ) {
      $(this).closest('.range').find('.min-range').val(ui.values[0]);
      $(this).closest('.range').find('.max-range').val(ui.values[1]);
    }
  });

  

  $('.slider').each(function(index, el) {
    let params = {
      slidesToShow: 1,
      arrows: true,
      prevArrow: prev,
      nextArrow: next,
      appendArrows: $(el).find('.slider__arrows'),
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            variableWidth: false,
            dots: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            variableWidth: false,
            dots: true,
            slidesToShow: 1
          }
        }
      ]
    };
  
    let params2 = {
      slidesToShow: 3,
      arrows: true,
      prevArrow: prev,
      nextArrow: next,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        }
      ]
    };

    if ($(el).hasClass('type_2')) {

      if ($(el).hasClass('review__slider')) {
        params.variableWidth = true;
        params.responsive = [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
            }
          }
        ]
      }

      if ($(el).hasClass('analogs__slider')) {
        params.variableWidth = true;
        params.responsive = [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
            }
          }
        ]
      }

      $(el).find('.slider__container').slick(params);
    } else if ($(el).hasClass('main-slider')) {
      params = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: prev,
        nextArrow: next,
        asNavFor: '.thumb-slider .slider__container',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              dots: true,
            }
          }
        ]
      }

      $(el).find('.slider__container').slick(params);
    } else if ($(el).hasClass('thumb-slider')) {

      params = {
        slidesToShow: 6,
        arrows: false,
        dots: false,
        asNavFor: '.main-slider .slider__container',
      }

      $(el).find('.slider__container').slick(params);
    } else {

      if ($(el).hasClass('banner__slider')) {
        params2 = {
          slidesToShow: 1,
          arrows: true,
          dots: true,
          prevArrow: prev,
          nextArrow: next,
          responsive: [
            {
              breakpoint: 1024,
              arrows: false,
            }
          ]
        }
      }

      if ($(el).hasClass('products__slider')) {
        params2 = {
          slidesToShow: 4,
          arrows: true,
          prevArrow: prev,
          nextArrow: next,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
              }
            }
          ]
        }
      }

      $(el).find('.slider__container').slick(params2);
    }
  });

  $('.review .slide__text').each(function(index, item) {
    if ($(item).height() > 35) {
      $(item).addClass('inactive');
    }
  });

  $('.slide__more-btn').on('click', function(e) {
    e.preventDefault();
    $(this).prev().removeClass('inactive');
  });

  $('.catalog__filter-view').on('click', function() {
    $('.filter').addClass('active');
  });

  $('.filter__close').on('click', function() {
    $('.filter').removeClass('active');
  });

  $('select').select2({

  });

  let timer = null;

  $('.tabs__m-btn').on('click', function() {
    clearTimeout(timer);
    let target = $(this);

    if (!target.closest('.tabs__content').hasClass('active')) {
      target.next().slideDown();
    } else {
      target.next().slideUp();
    }

    timer = setTimeout(function() {
      target.closest('.tabs__content').toggleClass('active');
      target.toggleClass('active');
    }, 300);

  });

  $('.tabs__btn').on('click', function(e) {
    e.preventDefault();
    let id = $(this).attr('href');
    console.log($(this).attr('href'));

    $('.tabs__btn').not($(this)).removeClass('active');
    $('.tabs__content').removeClass('active');
    $('.tabs__m-btn').removeClass('active');
    $(this).addClass('active');
    $(id).addClass('active');
    

  });

});


  