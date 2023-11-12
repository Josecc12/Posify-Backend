const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Garantiza que el correo electrónico sea único en la base de datos
    lowercase: true, // Convierte el correo electrónico a minúsculas antes de guardarlo
    trim: true, // Elimina espacios en blanco al principio y al final del correo electrónico
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true, // Garantiza que el número de teléfono sea único en la base de datos
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role', // Hace referencia al modelo 'Role'
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
