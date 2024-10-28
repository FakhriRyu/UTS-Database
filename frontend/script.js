const apiUrl = 'http://localhost:4000/karyawan';

// Function to get all karyawan and display in the table
const fetchKaryawan = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const karyawanList = document.getElementById('karyawan-list');
    karyawanList.innerHTML = ''; // Clear the table

    data.data.forEach(karyawan => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${karyawan.nama_karyawan}</td>
            <td>${karyawan.jabatan}</td>
            <td>${karyawan.gaji}</td>
            <td>${new Date(karyawan.tanggal_masuk).toLocaleDateString()}</td>
            <td>
                <a href="edit.html?id=${karyawan.id_karyawan}" class="btn btn-sm btn-primary">Edit</a>
                <button class="btn btn-sm btn-danger" onclick="deleteKaryawan(${karyawan.id_karyawan})">Delete</button>
            </td>
        `;
        karyawanList.appendChild(row);
    });
};

// Function to delete karyawan
const deleteKaryawan = async (id_karyawan) => {
    await fetch(`${apiUrl}/${id_karyawan}`, {
        method: 'DELETE',
    });
    fetchKaryawan();
};

// Fetch all karyawan data on page load
fetchKaryawan();
