// Script para funcionalidades interativas do site
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Esconde todos os slides
        testimonialSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove a classe active de todos os dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Mostra o slide atual e ativa o dot correspondente
        testimonialSlides[index].style.display = 'block';
        dots[index].classList.add('active');
    }
    
    // Inicializa o slider
    if (testimonialSlides.length > 0) {
        showSlide(currentSlide);
        
        // Adiciona evento de clique aos dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                currentSlide = index;
            });
        });
        
        // Avança o slide automaticamente a cada 5 segundos
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Fecha o menu mobile se estiver aberto
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Animação de fade-in para elementos ao rolar a página
    const fadeElements = document.querySelectorAll('.feature-card, .differentials-content, .team-member');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    }
    
    // Adiciona a classe fade-in aos elementos visíveis no carregamento inicial
    window.addEventListener('load', checkFade);
    
    // Verifica elementos ao rolar a página
    window.addEventListener('scroll', checkFade);
});
