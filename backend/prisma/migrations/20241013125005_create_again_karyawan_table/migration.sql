-- CreateTable
CREATE TABLE `karyawan` (
    `id_karyawan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_karyawan` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `gaji` INTEGER NOT NULL,
    `tanggal_masuk` DATE NOT NULL,

    PRIMARY KEY (`id_karyawan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
