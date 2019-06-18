$(document).ready(function () {
  $(".dx-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: !0,
    dots: false,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true

        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});