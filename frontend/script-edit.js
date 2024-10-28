const apiUrl = 'http://localhost:4000/karyawan';

// Get ID from URL
const params = new URLSearchParams(window.location.search);
const id_karyawan = params.get('id');

// Fetch karyawan data and populate form
const fetchKaryawan = async () => {
    const response = await fetch(`${apiUrl}/${id_karyawan}`);
    const karyawan = await response.json();
    
    document.getElementById('karyawan_id').value = karyawan.data.id_karyawan;
    document.getElementById('nama_karyawan').value = karyawan.data.nama_karyawan;
    document.getElementById('jabatan').value = karyawan.data.jabatan;
    document.getElementById('gaji').value = karyawan.data.gaji;
    document.getElementById('tanggal_masuk').value = new Date(karyawan.data.tanggal_masuk).toISOString().split('T')[0];
};

// Function to update karyawan
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

    await fetch(`${apiUrl}/${id_karyawan}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    window.location.href = 'index.html'; // Redirect to index page after update
});

// Fetch karyawan data on page load
fetchKaryawan();
