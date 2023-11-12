//api/caregory

const express = require('express');
const router = express.Router();

// Import the controller methods
const {

    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory

} = require('../controllers/category');



// Route to create a new category
router.post('/new', createCategory);

// Route to get all categories
router.get('/', getCategories);

// Route to get a specific category by ID
router.get('/:id', getCategoryById);

// Route to update a specific category by ID
router.put('/:id', updateCategory);

// Route to delete a specific category by ID
router.delete('/:id', deleteCategory);


module.exports = router;