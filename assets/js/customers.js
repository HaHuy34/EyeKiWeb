//Title Slide Customers
const t = document.querySelector('title'),
   w = 'Đánh Giá Khách Hàng',
   e = 'Đánh Giá Khách Hàng';
let c = 0;
setInterval(() => {
   c = c < w.length ? c + 1 : 0;
   t.textContent = w.slice(0, c);
   if (c === w.length) setTimeout(() => (t.textContent += `${e}`), 100);
}, 100);
