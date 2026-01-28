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

// 1. Daftar Anggota Kelompok KOPI
const semuaAnggota = [
    "Gayan Anahata Achmad", "Muhammad Rayhan Arrasyid Sinardo", "Ghaisan Aulia Hakim",
    "Banu Mibras Naufal", "Muhammad Tsani Akbar", "Muhammad Hisyam Annafi",
    "Muhammad Noval Dwiyanto", "Muhammad Azmi Alqorni", "Ridza Kholdun",
    "Hazel Althaf Ahsari", "Suheyl Fatkhurrahman", "Rizki Aditya Suganda"
];

// 2. Daftar Tugas
const daftarTugas = ["🎤 MC / Moderator", "📖 Kultum / Materi", "🙏 Pembaca Doa"];

function generateJadwal() {
    const gridJadwal = document.getElementById('grid-jadwal');
    if (!gridJadwal) return;

    // Tentukan Tanggal Mulai (Misal: Senin pekan ini)
    const tanggalMulai = new Date("2026-01-26"); 
    const hariIni = new Date();
    
    // Hitung selisih minggu
    const selisihHari = Math.floor((hariIni - tanggalMulai) / (1000 * 60 * 60 * 24));
    const mingguKe = Math.floor(selisihHari / 7);

    gridJadwal.innerHTML = ""; // Bersihkan kontainer

    daftarTugas.forEach((tugas, index) => {
        // Rumus Rotasi: (Indeks Tugas + Minggu Ke) % Jumlah Anggota
        const indexAnggota = (index + mingguKe) % semuaAnggota.length;
        const namaPetugas = semuaAnggota[indexAnggota];

        // Buat elemen HTML
        const card = `
            <div class="card-piket">
                <span class="label-tugas">${tugas}</span>
                <div class="nama-petugas">${namaPetugas}</div>
            </div>
        `;
        gridJadwal.innerHTML += card;
    });
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    generateJadwal();
    // Panggil juga fungsi render anggota lainnya di sini...
});
