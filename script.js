
 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 'auto',
   spaceBetween: -70,
   loop: true,
   centeredSlides: true,
   initialSlide: 1,
   /*pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },*/
  /* breakpoints: {
       320: {
           slidesPerView: 1,
       },
       768: {
           slidesPerView: 1,
           },
       1024: {
           slidesPerView: 1
       }
   },*/
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
 