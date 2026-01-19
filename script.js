const skillButtons = document.querySelectorAll('.skill-btn');
const skillDetails = document.querySelectorAll('.skill-detail');

skillButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const skill = btn.getAttribute('data-skill');

    // Masquer tous les détails
    skillDetails.forEach(detail => detail.style.display = 'none');

    // Afficher le détail correspondant
    document.getElementById(skill).style.display = 'block';

    // Mettre le bouton actif
    skillButtons.forEach(b => b.classList.remove('active-skill'));
    btn.classList.add('active-skill');
  });
});
