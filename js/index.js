

// SESIÓN DE MODAL 


// Función para abrir modal
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Función para cerrar modal
const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);

    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Convertir la galería en un array y asignar eventos de clic
const imgProjectArray = Array.from(document.querySelectorAll('.gallery-item'));

imgProjectArray.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalId = item.getAttribute('data-modal'); // Obtener el ID del modal desde 'data-modal'

        openModal(modalId);
    });
});



// SECCIÓN DE LINK ESTILOS


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section'); // Asegúrate de que cada sección tenga un `id` único.

    // Restaurar el enlace activo desde LocalStorage
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        const activeElement = document.querySelector(`[href="${activeLink}"]`);
        if (activeElement) {
            navLinks.forEach(nav => nav.classList.remove('active-link')); // Limpia los estados previos
            activeElement.classList.add('active-link'); // Restaura el estado activo
        }
    }

    // Función para actualizar el enlace activo según el scroll
    const updateActiveLinkOnScroll = () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajusta el umbral según sea necesario.
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });

        // Actualiza los enlaces de navegación
        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-link');
                localStorage.setItem('activeLink', link.getAttribute('href')); // Guarda el enlace activo
            }
        });
    };

    // Escuchar el evento scroll
    window.addEventListener('scroll', updateActiveLinkOnScroll);

    // Escuchar el clic en los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active-link')); // Limpia los estados previos
            this.classList.add('active-link'); // Marca el actual como activo
            localStorage.setItem('activeLink', this.getAttribute('href')); // Guarda el enlace activo
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

      navLinks.forEach(function (link) {
          link.addEventListener('click', function () {
              // Solo colapsa si está visible (abierto)
              const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
              if (bsCollapse) {
                  bsCollapse.hide();
              }
          });
      });
  });