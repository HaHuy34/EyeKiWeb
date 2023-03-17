//Title Slide Home
const t = document.querySelector('title'),
   w = 'Mắt Kính EyeKi',
   e = 'Mắt Kính EyeKi';
let c = 0;
setInterval(() => {
   c = c < w.length ? c + 1 : 0;
   t.textContent = w.slice(0, c);
   if (c === w.length) setTimeout(() => (t.textContent += `${e}`), 100);
}, 100);

var swiper = new Swiper('.mySwiper', {
   slidesPerView: 1,
   spaceBetween: 30,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   autoplay: {
      delay: 1000, // Thời gian chạy slide là 3 giây
      disableOnInteraction: false, // Tự động chuyển slide ngay cả khi người dùng thao tác với Swiper
   },
});

var swiper = new Swiper('.meSwiper', {
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },
   autoplay: {
      delay: 1000, // Thời gian chạy slide là 3 giây
      disableOnInteraction: false, // Tự động chuyển slide ngay cả khi người dùng thao tác với Swiper
   },
});
