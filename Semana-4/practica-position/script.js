const toggleModeBtn = document.getElementById('toggleMode');
const body = document.body;
const sections = document.querySelectorAll('section');
const toggleTextButtons = document.querySelectorAll('.toggleText');
const footer = document.querySelector('footer');

// Alternar 
toggleModeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  document.querySelector('header').classList.toggle('light-mode');
  document.querySelector('nav').classList.toggle('light-mode');
  document.querySelector('footer').classList.toggle('light-mode');
  sections.forEach(section => section.classList.toggle('light-mode'));
});

// Detectar el scroll para animar las secciones
function handleScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });

  // Mostrar el footer al final del scroll
  const footerTop = footer.getBoundingClientRect().top;
  if (footerTop < window.innerHeight) {
    footer.classList.add('visible');
  }
}

window.addEventListener('scroll', handleScroll);

// Ocultar y expandir texto con el botón "Leer más"
toggleTextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const sectionText = sections[index].querySelector('p');
    
    // Alternar la clase para expandir o truncar el texto
    sectionText.classList.toggle('expanded');
    
    // Cambiar el texto del botón según el estado del párrafo
    if (sectionText.classList.contains('expanded')) {
      button.textContent = 'Leer menos';
    } else {
      button.textContent = 'Leer más';
    }
  });
});

document.addEventListener('DOMContentLoaded', handleScroll);
