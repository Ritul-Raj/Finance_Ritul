
const ham = document.querySelector('.ham');
const ul = document.querySelector('.nav2 ul');

ham.addEventListener('click', () => {
  ul.classList.toggle('ham_active');
  let ham_child = ham.firstElementChild;
  if (ul.classList.contains('ham_active')) {
    ham_child.classList.replace('ri-menu-line', 'ri-close-line');
  }
  else {
    ham_child.classList.replace('ri-close-line', 'ri-menu-line');
  }
});


const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('.selected').forEach(link => {
  if (link.href.includes(`${ActivePage}`)) {
    link.classList.add('active');
  }
});