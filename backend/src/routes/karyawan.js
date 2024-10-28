const express = require('express');
const karyawanController = require('../controller/karyawan');
const router = express.Router();

router.get('/', karyawanController.getAllKaryawan);
router.get('/:id', karyawanController.getKaryawanById);
router.post('/', karyawanController.createNewKaryawan);
router.patch('/:id', karyawanController.updateKaryawan); 
router.delete('/:id', karyawanController.deleteKaryawan);

module.exports = router;
