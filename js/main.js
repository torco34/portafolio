const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const navbarCollapse = document.getElementById("navbarNav");

// Activo inicial
if (links.length > 0) {
    links[0].classList.add("active-link", "text-color-active");
}

// CLICK EN LINKS
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item =>
            item.classList.remove("active-link", "text-color-active")
        );
        link.classList.add("active-link", "text-color-active");

        // CERRAR MENÚ EN MÓVIL
        if (window.innerWidth < 992) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false,
            });
            bsCollapse.hide();
        }
    });
});


// SCROLL ACTIVO CON INTERSECTION OBSERVER
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                links.forEach((link) => {
                    link.classList.remove("active-link", "text-color-active");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active-link", "text-color-active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.4,   // más estable que rootMargin
    }
);

// Observar cada sección
sections.forEach((section) => observer.observe(section));
