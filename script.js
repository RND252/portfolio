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

    // Bouton actif
    skillButtons.forEach(b => b.classList.remove('active-skill'));
    btn.classList.add('active-skill');
  });
});

// Fermer au clic sur X
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.style.display = 'none';
    skillButtons.forEach(b => b.classList.remove('active-skill'));
  });
});
