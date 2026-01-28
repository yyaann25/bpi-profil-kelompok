// 1. Data Anggota
const anggota = [
    "Gayan Anahata Achmad", "Muhammad Rayhan Arrasyid Sinardo", "Ghaisan Aulia Hakim",
    "Banu Mibras Naufal", "Muhammad Tsani Akbar", "Muhammad Hisyam Annafi",
    "Muhammad Noval Dwiyanto", "Muhammad Azmi Alqorni", "Ridza Kholdun",
    "Hazel Althaf Ahsari", "Suheyl Fatkhurrahman", "Rizki Aditya Suganda"
];

const peran = [
    { tugas: "MC / Moderator", icon: "🎤" },
    { tugas: "Doa", icon: "🙏" },
    { tugas: "Kultum", icon: "📖" },
    { tugas: "Piket Konsumsi", icon: "🍽️" }
];

// 2. Fungsi Utama
function inisialisasiWeb() {
    renderAnggota();
    renderJadwal();
    aktifkanAnimasiScroll();
}

function renderAnggota() {
    const container = document.getElementById('daftar-anggota-list');
    anggota.forEach(nama => {
        container.innerHTML += `<div class="member-card"><h4>${nama}</h4></div>`;
    });
}

function renderJadwal() {
    // Tanggal mulai rotasi (Senin pekan ini misalnya)
    const tglMulai = new Date("2026-01-26"); 
    const hariIni = new Date();
    const selisihMinggu = Math.floor((hariIni - tglMulai) / (1000 * 60 * 60 * 24 * 7));

    const container = document.getElementById('tampilan-jadwal');
    
    peran.forEach((p, index) => {
        // Rumus rotasi otomatis
        const indexAnggota = (index + selisihMinggu) % anggota.length;
        container.innerHTML += `
            <div class="card-petugas">
                <span>${p.icon} ${p.tugas}</span>
                <h4>${anggota[indexAnggota]}</h4>
            </div>
        `;
    });
}

// 3. Fungsi Navbar & Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
});

function aktifkanAnimasiScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(s => observer.observe(s));
}

document.addEventListener('DOMContentLoaded', inisialisasiWeb);
