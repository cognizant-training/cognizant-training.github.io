import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
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
          <Route path='/' element={ <ProductList />} />
          <Route path='/product/:id' element={ <ProductDetail />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/checkout' element={ <Checkout />} />
        </Routes>
    </Router>
  )
}

export default App
