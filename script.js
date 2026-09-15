// Confirmación de carga del script
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación Web de Tarjetas de Perfil cargada correctamente.');

  // Interacción en los botones de redes sociales
  const socialButtons = document.querySelectorAll('.social-btn');
  
  socialButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cardTitle = btn.closest('.card-body').querySelector('.card-title').textContent;
      alert(`Haz hecho clic en una red social de: ${cardTitle}`);
    });
  });
});