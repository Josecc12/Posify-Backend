const Role = require('../models/role');

// Create a new role
const createRole = async (req, res) => {
  try {
    const { name, description, permissions } = req.body;
    const newRole = new Role({ name, description, permissions });
    await newRole.save();
    res.status(201).json({ message: 'Role created successfully', role: newRole });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating role' });
  }
};

// Get all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching roles' });
  }
};

// Get a specific role by ID
const getRoleById = async (req, res) => {
  try {
    const _id = req.params.id.trim();
    const role = await Role.findById(_id);
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching role' });
  }
};

// Update a specific role by ID
const updateRole = async (req, res) => {
  try {
    const _id = req.params.id.trim();
    const { name, permissions } = req.body;
    const updatedRole = await Role.findByIdAndUpdate(_id, { name, permissions }, { new: true });
    if (!updatedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json({ message: 'Role updated successfully', role: updatedRole });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating role' });
  }
};

// Delete a specific role by ID
const deleteRole = async (req, res) => {
  try {
    const _id = req.params.id.trim();
    const deletedRole = await Role.findByIdAndDelete(_id);
    if (!deletedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json({ message: 'Role deleted successfully', role: deletedRole });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting role' });
  }
};


module.exports = {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole,
}