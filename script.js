// ============================================
// NAVEGACIÓN Y MENÚ MÓVIL
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

// Toggle del menú móvil
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar con scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SCROLL SUAVE PARA ENLACES DE ANCLA
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Altura del navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMACIONES AL SCROLL (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos a animar
const animateElements = document.querySelectorAll(`
    .service-card,
    .project-card,
    .why-card,
    .feature-item,
    .safety-item,
    .client-badge
`);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// CONTADOR ANIMADO PARA ESTADÍSTICAS
// ============================================
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (target >= 100 ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target >= 100 ? '+' : '');
        }
    };
    
    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const text = statNumber.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    statNumber.textContent = '0';
                    animateCounter(statNumber, number, 2000);
                }
            }
        }
    });
}, { threshold: 0.5 });

const statItems = document.querySelectorAll('.stat-item');
statItems.forEach(item => {
    statsObserver.observe(item);
});

// ============================================
// EFECTO PARALLAX SUAVE EN HERO
// ============================================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ============================================
// VALIDACIÓN Y ENVÍO DE FORMULARIO (si se agrega en el futuro)
// ============================================
// Preparado para futuras expansiones

// ============================================
// LAZY LOADING DE IMÁGENES
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que no soportan lazy loading nativo
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PREVENIR FLASH DE CONTENIDO SIN ESTILOS (FOUT)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// ============================================
// MEJORA DE ACCESIBILIDAD
// ============================================
// Manejo de teclado para el menú móvil
if (menuToggle) {
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuToggle.click();
        }
    });
}

// Focus trap para el menú móvil
navLinks.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !e.shiftKey && index === navLinks.length - 1) {
            e.preventDefault();
            navLinks[0].focus();
        } else if (e.key === 'Tab' && e.shiftKey && index === 0) {
            e.preventDefault();
            menuToggle.focus();
        }
    });
});

// ============================================
// CARRUSEL DE IMÁGENES - QUIÉNES SOMOS
// ============================================
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselDots = document.querySelectorAll('.carousel-dots .dot');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
let currentSlide = 0;
let carouselInterval;

function showSlide(index) {
    // Remover clase active de todas las slides y dots
    carouselSlides.forEach(slide => slide.classList.remove('active'));
    carouselDots.forEach(dot => dot.classList.remove('active'));
    
    // Asegurar que el índice esté dentro del rango
    if (index >= carouselSlides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = carouselSlides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Agregar clase active a la slide y dot actuales
    carouselSlides[currentSlide].classList.add('active');
    carouselDots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

// Botones de navegación removidos - solo navegación por dots y automática

// Event listeners para los dots
carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopCarousel();
        showSlide(index);
        startCarousel();
    });
});

// Pausar carrusel al hacer hover
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
}

// Iniciar carrusel automático
if (carouselSlides.length > 0) {
    startCarousel();
}

// ============================================
// CARRUSELES DE PROYECTOS
// ============================================
const projectCarouselContainers = document.querySelectorAll('.project-carousel-container');

projectCarouselContainers.forEach(container => {
    const slides = container.querySelectorAll('.project-carousel-slide');
    const dots = container.querySelectorAll('.project-dot');
    let currentProjectSlide = 0;
    let projectCarouselInterval;

    function showProjectSlide(index) {
        // Remover clase active de todas las slides y dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Asegurar que el índice esté dentro del rango
        if (index >= slides.length) {
            currentProjectSlide = 0;
        } else if (index < 0) {
            currentProjectSlide = slides.length - 1;
        } else {
            currentProjectSlide = index;
        }
        
        // Agregar clase active a la slide y dot actuales
        if (slides[currentProjectSlide]) {
            slides[currentProjectSlide].classList.add('active');
        }
        if (dots[currentProjectSlide]) {
            dots[currentProjectSlide].classList.add('active');
        }
    }

    function nextProjectSlide() {
        showProjectSlide(currentProjectSlide + 1);
    }

    function startProjectCarousel() {
        projectCarouselInterval = setInterval(nextProjectSlide, 5000); // Cambia cada 5 segundos
    }

    function stopProjectCarousel() {
        clearInterval(projectCarouselInterval);
    }

    // Event listeners para los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopProjectCarousel();
            showProjectSlide(index);
            startProjectCarousel();
        });
    });

    // Pausar carrusel al hacer hover
    container.addEventListener('mouseenter', stopProjectCarousel);
    container.addEventListener('mouseleave', startProjectCarousel);

    // Iniciar carrusel automático
    if (slides.length > 0) {
        showProjectSlide(0);
        startProjectCarousel();
    }
});

// ============================================
// CARRUSEL DE SEGURIDAD Y CALIDAD
// ============================================
const safetyCarouselContainer = document.querySelector('.safety-carousel-container');

if (safetyCarouselContainer) {
    const safetySlides = safetyCarouselContainer.querySelectorAll('.safety-carousel-slide');
    const safetyDots = safetyCarouselContainer.querySelectorAll('.safety-dot');
    let currentSafetySlide = 0;
    let safetyCarouselInterval;

    function showSafetySlide(index) {
        // Remover clase active de todas las slides y dots
        safetySlides.forEach(slide => slide.classList.remove('active'));
        safetyDots.forEach(dot => dot.classList.remove('active'));
        
        // Asegurar que el índice esté dentro del rango
        if (index >= safetySlides.length) {
            currentSafetySlide = 0;
        } else if (index < 0) {
            currentSafetySlide = safetySlides.length - 1;
        } else {
            currentSafetySlide = index;
        }
        
        // Agregar clase active a la slide y dot actuales
        if (safetySlides[currentSafetySlide]) {
            safetySlides[currentSafetySlide].classList.add('active');
        }
        if (safetyDots[currentSafetySlide]) {
            safetyDots[currentSafetySlide].classList.add('active');
        }
    }

    function nextSafetySlide() {
        showSafetySlide(currentSafetySlide + 1);
    }

    function startSafetyCarousel() {
        safetyCarouselInterval = setInterval(nextSafetySlide, 5000); // Cambia cada 5 segundos
    }

    function stopSafetyCarousel() {
        clearInterval(safetyCarouselInterval);
    }

    // Event listeners para los dots
    safetyDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSafetyCarousel();
            showSafetySlide(index);
            startSafetyCarousel();
        });
    });

    // Pausar carrusel al hacer hover
    safetyCarouselContainer.addEventListener('mouseenter', stopSafetyCarousel);
    safetyCarouselContainer.addEventListener('mouseleave', startSafetyCarousel);

    // Iniciar carrusel automático
    if (safetySlides.length > 0) {
        showSafetySlide(0);
        startSafetyCarousel();
    }
}

// ============================================
// CONSOLE LOG PARA DEBUG (remover en producción)
// ============================================
console.log('JMBQ Construcciones S.A.S. - Sitio web cargado correctamente');

