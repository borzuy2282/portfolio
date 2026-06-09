(function () {
  const el = document.getElementById('typed-prompt');
  const msg = ' // ready';
  let i = 0;
  const type = () => {
    if (i <= msg.length) {
      el.textContent = msg.slice(0, i++);
      setTimeout(type, i === 1 ? 600 : 60);
    }
  };
  setTimeout(type, 400);
})();

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
