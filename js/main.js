
$(document).ready(function(){
    $('.gallery-slide').slick({
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              dots: false
            }
          },
        ]
      });
      });