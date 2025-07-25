require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// mongodb things
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log('Connection Error: ', err))

// product scema
const productScema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String
})

const Product = mongoose.model('Product', productScema);

// API END POINT
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products)
});

app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', ()=> {
    console.log(`Backend Server Running on PORT: ${PORT}`)
})
