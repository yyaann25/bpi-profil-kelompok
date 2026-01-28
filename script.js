// 1. Navbar Scroll Effect: Mengubah warna nav saat di-scroll
const handleNavbar = () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

// 2. Scroll Reveal: Menampilkan konten saat masuk ke layar
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
};

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', handleNavbar);
    revealOnScroll();
});
