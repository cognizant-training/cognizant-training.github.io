const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFilePath = path.join(__dirname, '../../data', 'employees.json');

// Helper functions
const readData = () => {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
};

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// POST /v1/employees
router.post('/', (req, res) => {
    try {
        const data = readData();
        const newEmployee = req.body;
        newEmployee.id = new Date().getTime().toString();  // Simple ID generation
        data.push(newEmployee);
        writeData(data);
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: 'Internal Server Error' } });
    }
});

// DELETE /v1/employees/:id
router.delete('/:id', (req, res) => {
    try {
        const data = readData();
        const { id } = req.params;
        const index = data.findIndex(employee => employee.id === id);

        if (index !== -1) {
            const deletedEmployee = data.splice(index, 1);
            writeData(data);
            res.status(200).json(deletedEmployee);
        } else {
            res.status(404).json({ error: { code: 404, message: 'Employee not found' } });
        }
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: 'Internal Server Error' } });
    }
});

module.exports = router;
