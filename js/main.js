// Obtén todos los elementos de enlace con la clase "nav-link-item"
// Obtén todos los enlaces
const navLinks = document.querySelectorAll(".nav-link-item");

// Función para manejar el clic en un enlace
function handleLinkClick(event) {
  // Elimina la clase "active" de todos los enlaces
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Agrega la clase "active" al enlace que se hizo clic
  this.classList.add("active");

  // Almacena el índice del enlace seleccionado en localStorage
  const selectedIndex = Array.from(navLinks).indexOf(this);
  localStorage.setItem("selectedNavIndex", selectedIndex.toString());
}

// Agrega un evento de clic a cada enlace
navLinks.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});

// Recupera y aplica la clase "active" desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const selectedIndex = localStorage.getItem("selectedNavIndex");
  if (selectedIndex !== null) {
    // Si se encontró un índice en localStorage, aplica la clase "active" al enlace correspondiente
    navLinks[parseInt(selectedIndex)].classList.add("active");
  }
});

// Detectar el desplazamiento de la página
// Detectar el desplazamiento de la página
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY;

  // Determinar si se debe ocultar el navbar
  if (scrollY > 100) {
    navbar.classList.remove("navbar-top");
  } else {
    navbar.classList.add("navbar-top");
  }
});
