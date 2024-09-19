const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");


const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");

// Mostrar modal al hacer clic en la imagen
img1.onclick = () => {
    modal1.style.display = "block";
}

img2.onclick = function () {
    modal2.style.display = "block";
}

img3.onclick = function () {
    modal3.style.display = "block";
}

img4.onclick = function () {
    modal4.style.display = "block";
}

img5.onclick = function () {
    modal5.style.display = "block";
}

// Cerrar modal al hacer clic en la "x"
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar modal si se hace clic fuera del contenido
// window.onclick = function (event) {
//     if (event.target.classList.contains('modal')) {
//         event.target.style.display = "none";
//     }
// }
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// function closeModal(modalId) {
//     var modal = document.getElementById(modalId);
//     modal.style.display = "none";
// }

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}