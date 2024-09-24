document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('#menu-icon');
  const nav = document.querySelector('header');
  const navLinks = document.querySelectorAll('.navbar ul li a');
  

  menuIcon.addEventListener('click', function() {
      nav.classList.toggle('active');
  });

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          nav.classList.remove('active');
      });
  });
});
