const Employee = require('../models/employee');

const bcrypt = require('bcrypt');
const saltRounds = 10; // Número de rondas de sal (puedes ajustar esto según tus preferencias)

const createEmployee = async (req, res) => {
    try {
        const { name, email, phoneNumber, role, password } = req.body;
        
        // Hasheamos la contraseña utilizando bcrypt
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newEmployee = new Employee({ name, email, phoneNumber, role, password: hashedPassword });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating employee' });
    }
};



const getEmployes = async (req, res) => {
    try {
        const employees = await Employee.find().populate('role'); // Para obtener información del rol.
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching employees' });
    }
};

const getEmployee = async (req, res) => {

    try {
        const id = req.params.id.trim();
        const employee = await Employee.findById(id).populate('role'); // Para obtener información del rol.
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching employee' });
    }
};


const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id.trim();
        const { email, phoneNumber, role, password } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, { email, phoneNumber, role, password }, { new: true }).populate('role'); // Para obtener información del rol.
        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating employee' });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id.trim();
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully', employee: deletedEmployee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employee' });
    }
};




module.exports = {
    getEmployes,
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee

}