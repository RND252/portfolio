document.addEventListener('DOMContentLoaded', () => {

  // ===== ACCORDÉON COMPÉTENCES =====
  const skillButtons = document.querySelectorAll('.skill-btn');
  const skillDetails = document.querySelectorAll('.skill-detail');
  const closeButtons = document.querySelectorAll('.close-btn');

  skillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const skill = btn.getAttribute('data-skill');
      skillDetails.forEach(detail => detail.style.display = 'none');
      document.getElementById(skill).style.display = 'block';
      skillButtons.forEach(b => b.classList.remove('active-skill'));
      btn.classList.add('active-skill');
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.style.display = 'none';
      skillButtons.forEach(b => b.classList.remove('active-skill'));
    });
  });

  // ===== NAVBAR SCROLL ACTIVE =====
  const navLinks = document.querySelectorAll('.nav-menu a');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + current){
        link.classList.add('active');
      }
    });
  });

});
