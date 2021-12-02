const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    max: 60,
  },
  apellido_1: {
    type: String,
    required: true,
    max: 40,
  },
  apellido_2: {
    type: String,
    required: true,
    max: 40,
  },
  telefono: {
    type: String,
    required: true,
    max: 15,
  },
  mail: {
    type: String,
    required: false,
    max: 80,
  },
  direccion: {
    type: String,
    required: false,
    max: 80,
  },
});

module.exports = mongoose.model('Empleados', EmpleadosSchema);
