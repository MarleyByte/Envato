    $('.owl-carousel').owlCarousel({
          autoplay:true,
          autoplayHoverPause: true,
          lazyLoad: true,
          margin:10,
          dots:false,
          nav: true,
          loop: true,
          smartSpeed:200,
            navText: ['<i class="fa fa-arrow-left>"</i>','<i class="fa fa-arrow-right"></i>'],
          stagePadding: 5,
          responsive: {
            0: {
              items: 1,
              nav: true,
            },
            485: {
              items: 2,
              nav: true,
            }, 
            728: {
              items: 3,
              nav: true,
            },
          }
        });
        $('.owl-carousel').on('mousewheel','.owl-stage', function(e){
            if(e.deltaY>0){
              $('.owl-carousel').trigger('next.owl');
            }else{
              $('.owl-carousel').rigger('prev.owl');
            }
            e.preventDefault();
        });