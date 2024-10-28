const karyawanModel = require('../models/karyawan');

const getAllKaryawan = async (req, res) => {
    try {
        const data = await karyawanModel.getAllKaryawan();
        res.json({
            message: 'get all karyawan success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error.message,
        });
    }
};

const createNewKaryawan = async (req, res) => {
    const { body } = req;
    try {
        const newKaryawan = await karyawanModel.createNewKaryawan(body);
        res.status(201).json({
            message: 'create new karyawan success',
            data: newKaryawan
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error.message,
        });
    }
};

const updateKaryawan = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedKaryawan = await karyawanModel.updateKaryawan(id, body);
        res.json({
            message: 'patch karyawan success',
            data: updatedKaryawan
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error.message,
        });
    }
};



const deleteKaryawan = async (req, res) => {
    const { id } = req.params;
    try {
        await karyawanModel.deleteKaryawan(id);
        res.json({
            message: 'delete karyawan success'
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error.message,
        });
    }
};

const getKaryawanById = async (req, res) => {
    const { id } = req.params;
    try {
        const karyawan = await karyawanModel.getKaryawanById(id);
        if (!karyawan) {
            return res.status(404).json({
                message: 'karyawan not found'
            });
        }
        res.json({
            message: 'get karyawan by id success',
            data: karyawan
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error.message,
        });
    }
};

module.exports = {
    getAllKaryawan,
    createNewKaryawan,
    updateKaryawan,
    deleteKaryawan,
    getKaryawanById
};
