# React + Vite

Implementation of an online gift store that connects with your json-server for product data.


Features Implemented
Product Listing from json-server data

Search and Filter

Product Detail page

Cart Management using localStorage

Checkout functionality with cart reset

Routing via react-router-dom

json-server --watch db.json --port 3000
npm install
npm run dev





























// File: src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// File: src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

// File: src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

// File: src/components/ProductList.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-list">
        {filtered.map(p => (
          <div key={p.id} className="product">
            <img src={p.imageUrl} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <Link to={`/product/${p.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// File: src/components/ProductDetail.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

// File: src/components/Cart.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ${item.price}
                <button onClick={() => removeItem(idx)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout"><button>Checkout</button></Link>
        </>
      )}
    </div>
  );
}

// File: src/components/Checkout.tsx
export default function Checkout() {
  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    localStorage.removeItem('cart');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Complete your order below:</p>
      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
}

// File: vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
