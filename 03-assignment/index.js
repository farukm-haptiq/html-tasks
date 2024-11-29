const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('showSidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('showSidebar');
});
