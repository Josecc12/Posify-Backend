//Route /api/products

const express = require('express');
const router = express.Router();
const { 
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
 } = require('../controllers/product');

// Create a new product
router.post('/new', createProduct);

// Get all products
router.get('/', getProducts);

// Get a specific product by ID
router.get('/:id', getProductById);

// Update a specific product by ID
router.put('/:id', updateProduct);

// Delete a specific product by ID
router.delete('/:id', deleteProduct);

module.exports = router;