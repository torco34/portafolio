const links = document.querySelectorAll(".nav-link");
links[0].classList.add("active-link", "text-color-active");
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("active-link", "text-color-active"));
        link.classList.add("active-link", "text-color-active");
    });
});
// section scroll

const sections = document.querySelectorAll("section");

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
        rootMargin: "-50% 0px -50% 0px",
    }
);


// Observamos cada sección
sections.forEach((section) => observer.observe(section));
