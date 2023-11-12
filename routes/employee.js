//api/employee

const express = require('express');
const router = express.Router();

// Import the controller methods
const {
  getEmployes,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employee');

// Route to get all employees
router.get('/', getEmployes);

// Route to create a new employee
router.post('/new', createEmployee);

// Route to get a specific employee by ID
router.get('/:id', getEmployee);

// Route to update a specific employee by ID
router.put('/:id', updateEmployee);

// Route to delete a specific employee by ID
router.delete('/:id', deleteEmployee);

module.exports = router;