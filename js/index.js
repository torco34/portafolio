
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

const ctx = document.getElementById('skillsChart').getContext('2d');

const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React.js', 'Vue.js', 'Quasar', 'Bootstrap'],
        datasets: [{
            label: 'Nivel de Habilidad',
            data: [4, 4, 4, 4, 4, 4, 3, 4], // Escala del 1 al 5
            backgroundColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(34, 143, 216, 0.9)',
                'rgba(139, 208, 248, 0.6)',
                'rgba(7, 194, 138, 0.938)',
                'rgba(154, 197, 226, 0.938)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(139, 208, 248, 1)',
                'rgba(7, 194, 138, 0.938)',
                'rgba(201, 203, 207, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 5 // Nivel máximo
            }
        }
    }
});

console.log(skillsChart)