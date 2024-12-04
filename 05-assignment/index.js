window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY >= 86) {
    nav.classList.add('navBg');
  } else {
    nav.classList.remove('navBg');
  }
});
