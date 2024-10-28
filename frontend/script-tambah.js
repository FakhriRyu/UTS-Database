const apiUrl = 'http://localhost:4000/karyawan';

// Function to create karyawan
document.getElementById('karyawan-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nama_karyawan = document.getElementById('nama_karyawan').value;
    const jabatan = document.getElementById('jabatan').value;
    const gaji = document.getElementById('gaji').value;
    const tanggal_masuk = document.getElementById('tanggal_masuk').value;

    const payload = {
        nama_karyawan,
        jabatan,
        gaji: parseInt(gaji),
        tanggal_masuk: new Date(tanggal_masuk).toISOString(),
    };

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    window.location.href = 'index.html'; // Redirect to index page after submission
});
