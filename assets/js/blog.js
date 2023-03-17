//Title Slide Blog
const t = document.querySelector('title'),
   w = 'Blog Chăm Sóc Mắt',
   e = 'Blog Chăm Sóc Mắt';
let c = 0;
setInterval(() => {
   c = c < w.length ? c + 1 : 0;
   t.textContent = w.slice(0, c);
   if (c === w.length) setTimeout(() => (t.textContent += `${e}`), 100);
}, 100);
