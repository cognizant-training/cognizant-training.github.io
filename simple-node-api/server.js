const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const mongoURI = 'mongodb+srv://gaurabcap:ysKeILEvLAiUJwR0@cluster0.jkr1md3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();

// middleware to parse json body data
app.use(bodyParser.json());

// Cros - allowing all origin (*)
// app.use(cors());
// app.use(cors({
//     origin: '*'
// }));
app.use(cors({
    origin: 'http://localhost:3000',  // restrict origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(helmet());

// user Rate Limitter
const limitter = rateLimit({
    windowMs: 15*60*100,    // 15 minutes
    max: 100,               // limit each IP to 100 requests per windowMs
    message: 'Too many requests from ot this IT, please try again later'
});

app.use(limitter);

// db connection to store data
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Connection Error'));

// Define Mongoose Schema and Model
const itemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    company: String,
    mobileNumber: String
})

const Item = mongoose.model('Item', itemSchema);

// funstion to capitalize the first letter
const capitalizeFirstLetter = (str) => {
    return str 
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
}

// Create data - API for adding data to mongoDB
app.post('/items', async (req, res) => {
    const newItem = req.body;

    // validate if necessary fields are provided
    if(!newItem.name || !newItem.company ||!newItem.mobileNumber) {
        return res.status(400).json({message: 'Please add all fields.'})
    }

    newItem.name = capitalizeFirstLetter(newItem.name);
    newItem.company = capitalizeFirstLetter(newItem.company);

    try {
        // check for duplicate item 
        const duplicateItem = await Item.findOne({ name: newItem.name, mobileNumber: newItem.mobileNumber });

        if(duplicateItem) {
            return res.status(400).send("Item with same name and mobile is already avaialbe, try with different value")
        }

        const lastItem = await Item.findOne().sort( {id: -1} );
        newItem.id = lastItem ? lastItem.id + 1 : 1;

        const createdItem = new Item(newItem);
        await createdItem.save();

        res.status(201).json({
            message: "Item created Successfully",
            item: createdItem
        })
    } catch(err) {
        res.status(500).json({message: "Server Error while creating the item"})
    }
})


// Read Data - API for Get data from mongoDB
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({message: "Server Error while fetching the item"});
    }
})

// Get item by ID
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findOne({ id: parseInt(req.params.id)});

        if(!item) {
            res.status(404).json({message: "Item not found"})
        }

        res.json(item);
    } catch (err) {
        res.status(500).json({message: "Server Error while fetching the item"});
    }
})

// API for Updating an item by ID
app.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findOneAndUpdate(
            { id: parseInt(req.params.id) },
            req.body,
            { new: true }
        );

        if(!updatedItem) {
            res.status(404).json({message: "Item not found"})
        }

        res.json({ message: 'Item updated successfully', item: updatedItem });

    } catch (err) {
        res.status(500).json({message: "Server Error while updating the item"});
    }
})


// API for Deleting an item by ID
app.delete('/items/:id', async (req, res) => {
    try {
            const deletedItem = await Item.findOneAndDelete({ id: parseInt(req.params.id) });
            if(!deletedItem) {
                    res.status(404).json({message: "Item not found"})
                }

            res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({message: "Server Error while deleting the item"});
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})




