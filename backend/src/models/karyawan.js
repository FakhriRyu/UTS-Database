    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    const getAllKaryawan = async () => {
        const karyawanList = await prisma.karyawan.findMany();
        
        // Format tanggal menjadi hanya tanggal
        return karyawanList.map(karyawan => ({
            ...karyawan,
            tanggal_masuk: karyawan.tanggal_masuk.toISOString().split('T')[0] // Ambil hanya bagian tanggal
        }));
    };

    const createNewKaryawan = async (body) => {
        return await prisma.karyawan.create({
            data: {
                nama_karyawan: body.nama_karyawan,
                jabatan: body.jabatan,
                gaji: body.gaji,
                tanggal_masuk: new Date(body.tanggal_masuk).toISOString() // Mengubah format ke ISO
            }
        });
    };
    

    const updateKaryawan = async (id, body) => {
        return await prisma.karyawan.update({
            where: { id_karyawan: parseInt(id) },
            data: {
                ...(body.nama_karyawan && { nama_karyawan: body.nama_karyawan }),
                ...(body.jabatan && { jabatan: body.jabatan }),
                ...(body.gaji && { gaji: body.gaji }),
                ...(body.tanggal_masuk && { tanggal_masuk: new Date(body.tanggal_masuk).toISOString() }), // Pastikan menggunakan format ISO-8601
            }
        });
    };
    
    
const deleteKaryawan = async (id) => {
    return await prisma.karyawan.delete({
        where: { id_karyawan: parseInt(id) },
    });
};

const getKaryawanById = async (id) => {
    return await prisma.karyawan.findUnique({
        where: { id_karyawan: parseInt(id) },
    });
};



    module.exports = {
        getAllKaryawan,
        createNewKaryawan,
        updateKaryawan,
        deleteKaryawan,
        getKaryawanById
    }