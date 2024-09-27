
// SESIÓN DE MODAL 


// Función para abrir modal
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    console.log(modal)
    modal.style.display = "block";
}

// Función para cerrar modal
const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    console.log(modal.style.display)
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
        console.log(modalId)
        openModal(modalId);
    });
});



// SESION DE LINK ESTILOS


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active-link' class from all links
            navLinks.forEach(nav => nav.classList.remove('active-link'));

            // Add 'active-link' class to the clicked link
            this.classList.add('active-link');
        });
    });
});

