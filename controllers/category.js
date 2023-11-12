const Category = require('../models/category');

// Create a new category
const createCategory = async (req, res) => {
    try {
        const { name, color } = req.body;
        const newCategory = new Category({ name, color });
        await newCategory.save();
        res.status(201).json({ message: 'Category created successfully', category: newCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating category' });
    }
};

// Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching categories' });
    }
};

// Get a specific category by ID
const getCategoryById = async (req, res) => {
    try {
        const id = req.params.id.trim();
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching category' });
    }
};

// Update a specific category by ID
const updateCategory = async (req, res) => {
    try {
        const id = req.params.id.trim();
        const { name, color } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(id, { name, color }, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json({ message: 'Category updated successfully', category: updatedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating category' });
    }
};

// Delete a specific category by ID
const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id.trim();
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully', category: deletedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting category' });
    }
};


module.exports = {

    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory, 

}
