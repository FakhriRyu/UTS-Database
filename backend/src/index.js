const express = require('express');

const karyawanRoutes = require('./routes/karyawan');

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());


app.use('/karyawan', karyawanRoutes);

app.listen(4000, ()=>{
    console.log('server berhasil berjalan');
})