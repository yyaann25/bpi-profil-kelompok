// Fungsi ini dipanggil ketika tombol di bagian <nav> diklik
function tampilkanPesan(bagian) {
    // Mendapatkan elemen tempat pesan akan ditampilkan
    const notifElement = document.getElementById('pesan-notifikasi');
    let pesan = '';

    // Menentukan pesan berdasarkan tombol yang diklik
    if (bagian === 'Pengertian') {
        pesan = 'Anda sedang melihat bagian Pengertian Ekspedisi.';
    } else if (bagian === 'Dokumentasi') {
        pesan = 'Geser ke bawah untuk melihat dokumentasi foto kami!';
        // Contoh scroll ke bagian Dokumentasi
        document.getElementById('dokumentasi').scrollIntoView({ behavior: 'smooth' });
    } else if (bagian === 'Anggota') {
        pesan = 'Maaf, bagian Anggota Kelompok belum tersedia. Segera hadir!';
    } else {
        pesan = 'Tombol tidak dikenal.';
    }

    // Menampilkan pesan pada elemen footer
    notifElement.textContent = pesan;

    // Menghilangkan pesan setelah 5 detik (5000 milidetik)
    setTimeout(() => {
        notifElement.textContent = '';
    }, 5000);
}