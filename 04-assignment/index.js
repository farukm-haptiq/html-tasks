const toggleBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('sidebarCloseBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('showSidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('showSidebar');
});
