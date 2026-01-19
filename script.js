// ================= ACCORDÉON COMPÉTENCES =================
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDetails = document.querySelectorAll('.skill-detail');
const closeButtons = document.querySelectorAll('.close-btn');

skillButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const skill = btn.getAttribute('data-skill');

    // Masquer tous les détails
    skillDetails.forEach(detail => detail.style.display = 'none');

    // Afficher le bloc correspondant
    document.getElementById(skill).style.display = 'block';

    // Mettre le bouton actif
    skillButtons.forEach(b => b.classList.remove('active-skill'));
    btn.classList.add('active-skill');
  });
});

// Fermer le bloc au clic sur X
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.style.display = 'none';
    skillButtons.forEach(b => b.classList.remove('active-skill'));
  });
});

// ================= NAVBAR SCROLL ACTIVE =================
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.pageYOffset;

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // marge pour navbar
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
