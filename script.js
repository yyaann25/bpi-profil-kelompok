const anggota = [
    { nama: "Ahmad", peran: "Ketua", kataMutiara: "Sabar adalah kunci." },
    { nama: "Zaid", peran: "Wakil", kataMutiara: "Tetap rendah hati." },
    { nama: "Fatimah", peran: "Sekretaris", kataMutiara: "Ilmu adalah cahaya." },
    { nama: "Ali", peran: "Bendahara", kataMutiara: "Kejujuran nomor satu." },
    { nama: "Hasan", peran: "Anggota", kataMutiara: "Berbuat baik setiap hari." },
    { nama: "Husain", peran: "Anggota", kataMutiara: "Jaga lisan." },
    { nama: "Aisyah", peran: "Anggota", kataMutiara: "Tetap semangat belajar." },
    { nama: "Umar", peran: "Anggota", kataMutiara: "Disiplin adalah kunci sukses." },
    { nama: "Bilal", peran: "Anggota", kataMutiara: "Suara kebenaran." },
    { nama: "Hamzah", peran: "Anggota", kataMutiara: "Berani karena benar." }
];

const container = document.getElementById('container');

anggota.forEach(person => {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="https://ui-avatars.com/api/?name=${person.nama}&background=random" alt="Foto">
        <h3>${person.nama}</h3>
        <p><strong>${person.peran}</strong></p>
        <p><em>"${person.kataMutiara}"</em></p>
    `;
    
    container.appendChild(card);
});
