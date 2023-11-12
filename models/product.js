const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Hace referencia al modelo 'Category'
    required: true,
  },
  description: String,
  soldBy: {
    type: String,
    enum: ['weight', 'unit'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  reference: String,
  barcode: String,
  trackInventory: {
    type: Boolean,
    default: true, // Por defecto, se rastrea el inventario.
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
  store: {
    type: String,
    required: true,
  }, // Un arreglo de tiendas en las que está disponible.
  imageUrl: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
