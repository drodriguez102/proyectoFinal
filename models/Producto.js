const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    equipo: {
        type: String,
        required: true
    },
    procesador: {
        type: String,
        required: true
    },
    memoriaRam: {
        type: String,
        required: true
    },
    tamanoDisco: {
        type: String,
        required: true
    },
    tipoPantalla: {
        type: String,
        required: true
    },
    garantia: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Producto', productoSchema);