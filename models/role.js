const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: false, // Por defecto, el permiso está desabilitado.
  },
});

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [permissionSchema], // Usamos el esquema de permiso como parte del rol.
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
