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
