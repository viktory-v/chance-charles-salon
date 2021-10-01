/* global jQuery */
jQuery( $ => {
  const $testimonials_slider = $(".section-testimonials .slider");
  const $testimonials_images = $(".section-testimonials .images");
  const $diplomas_slider = $(".section-diplomas .diplomas");

  if ( $testimonials_slider.length || $testimonials_images.length || $diplomas_slider.length ) {
    require.ensure( [], ( require ) => {
      require( 'slick-carousel' );
      require( 'slick-carousel/slick/slick.css' );

      $testimonials_slider.slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $testimonials_images.slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //   {
        //     breakpoint: 990,
        //     settings: {
        //       autoplay: true,
        //       autoplaySpeed: 5000,
        //     }
        //   },
        // ]
      });

      $diplomas_slider.slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //   {
        //     // breakpoint: 990,
        //     settings: {
        //       autoplay: true,
        //       autoplaySpeed: 3000,
        //     }
        //   },
        // ]
      });
    }, 'slick' );
  }
} );
