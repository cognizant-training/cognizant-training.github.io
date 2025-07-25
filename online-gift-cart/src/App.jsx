import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <ProductList /> }/>
        <Route path='/products/:id' element={ <ProductDetail /> }/>
        <Route path='/cart' element={ <Cart /> }/>
        <Route path='/checkout' element={ <Checkout /> }/>

      </Routes>
    </Router>
  )
}

export default App
