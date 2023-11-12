const Product = require('../models/product');

// Create a new product
const  createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      soldBy,
      price,
      cost,
      reference,
      barcode,
      trackInventory,
      stock,
      store,
      imageUrl,
    } = req.body;
    const newProduct = new Product({
      name,
      category,
      description,
      soldBy,
      price,
      cost,
      reference,
      barcode,
      trackInventory,
      stock,
      store,
      imageUrl,
    });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating product' });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category'); // Para obtener información de la categoría.
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

// Get a specific product by ID
const getProductById = async (req, res) => {
  try {
    const _id = req.params.id.trim();
    const product = await Product.findById(_id).populate('category'); // Para obtener información de la categoría.
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching product' });
  }
};

// Update a specific product by ID
const updateProduct = async (req, res) => {
  try {
    const _id = req.params.id.trim();
    const {
      name,
      category,
      description,
      soldBy,
      price,
      cost,
      reference,
      barcode,
      trackInventory,
      stores,
      imageUrl,
    } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(_id, {
      name,
      category,
      description,
      soldBy,
      price,
      cost,
      reference,
      barcode,
      trackInventory,
      stores,
      imageUrl,
    }, { new: true }).populate('category'); // Para obtener información de la categoría.
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating product' });
  }
};

// Delete a specific product by ID
const deleteProduct = async (req, res) => {
  try {
    const _id = req.params.id.trim();
    const deletedProduct = await Product.findByIdAndDelete(_id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting product' });
  }
};


module.exports = {

    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,

}
