const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

// middleware to parse json body data
app.use(bodyParser.json());

// db connection or path of file to store data
const dataFilePath = './data.json';

// Read data from JSON File
const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath);
        return JSON.parse(data);
    } catch (err){
        return [];
    }
}

// Write data to JSON file
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data));
}

// API for Get data from JSON file
app.get('/items', (req, res) => {
    const items = readData();
    res.json(items);
})

// API for adding data to JSON file.
app.post('/items', (req, res) => {
    const newItem = req.body;
    const items = readData();

    // validate if necessary fields are provided
    if(!newItem.name || !newItem.company ||!newItem.mobile) {
        return res.status(400).json({message: 'Please add all field'})
    }

    // check for duplicate item 
    const duplicateItem = items.find(item => 
        item.name === newItem.name || item.mobile === newItem.mobile
    );

    if(duplicateItem) {
        return res.status(400).send("Item with same name and mobile is already avaialbe, try with different value")
    }

    newItem.id = items.length ? items[items.length - 1].id + 1 : 1;

    items.push(newItem);
    writeData(items);

    res.status(201).json({
        message: "Item created Successfully",
        item: newItem
    })
})

// API for Updating an item by ID

// API for Deleting an item by ID

















app.listen(5000, () => {
    console.log('Server is running on port 5000');
})




