document.addEventListener('DOMContentLoaded', () => {

    // Efeito suave de scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação 'fade in' para os cartões de curso ao rolar a página
    const courseCards = document.querySelectorAll('.course-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.5s ease-out ${index * 0.2}s forwards`;
                observer.unobserve(entry.target); // Para a animação não repetir
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do cartão estiver visível
    });

    courseCards.forEach(card => {
        observer.observe(card);
    });

    // Efeito de sombra no cabeçalho ao rolar a página
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

});