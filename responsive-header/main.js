const toggleBtn = document.querySelector('.navbar-toggle');
const menuList = document.querySelector('.navbar-menu');
const contactList = document.querySelector('.navbar-contact');

toggleBtn.addEventListener('click', () => {
  menuList.classList.toggle('active');
  contactList.classList.toggle('active');
});
