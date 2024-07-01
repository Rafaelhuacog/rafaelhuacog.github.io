// Función para cambiar automáticamente los testimonios cada 5 segundos
let slideIndex = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide');

function showSlides() {
    slideIndex++;
    if (slideIndex >= carouselSlides.length) {
        slideIndex = 0;
    }
    updateSlideVisibility();
    setTimeout(showSlides, 5000); // Cambiar cada 5 segundos
}

function updateSlideVisibility() {
    carouselSlides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Funciones para navegar manualmente por los testimonios
function nextSlide() {
    slideIndex++;
    if (slideIndex >= carouselSlides.length) {
        slideIndex = 0;
    }
    updateSlideVisibility();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = carouselSlides.length - 1;
    }
    updateSlideVisibility();
}

// Iniciar el carrusel
showSlides();
