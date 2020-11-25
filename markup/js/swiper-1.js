let slider = null;
let mediaQuerySize = 575;


function sliderInit () {
  if (!slider) {
    slider = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,

      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: '66px',
        hide: true,
      },
    });
  }
}

function sliderDestroy () {
  if (slider) {
    slider.destroy(true, true);
    slider = null;
  }
}

$(window).on('load resize', function () {
  let windowWidth = $(this).innerWidth();
  

  if (windowWidth <= mediaQuerySize) {
    sliderInit();

  } else {
    sliderDestroy();
  }
});
