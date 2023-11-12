//api/role

const express = require('express');
const router = express.Router();

// Import the controller methods
const {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole
} = require('../controllers/role');

// Route to get all roles
router.get('/', getAllRoles);

// Route to create a new role
router.post('/new', createRole);

// Route to get a specific role by ID  
router.get('/:id', getRoleById);

// Route to update a specific role by ID
router.put('/:id', updateRole);

// Route to delete a specific role by ID
router.delete('/:id', deleteRole);



module.exports = router;