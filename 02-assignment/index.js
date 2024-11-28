const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('showSidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('showSidebar');
});
