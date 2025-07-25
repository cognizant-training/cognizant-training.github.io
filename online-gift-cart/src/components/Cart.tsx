import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, []);

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  }

  return (
    <>
      <h2>Your Cart</h2>
      {
        cart.length === 0 ? <p>Cart is Empty</p> : (
          <>
            <ul>
              {
                cart.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - {item.price}
                    <button onClick={() => removeItem(idx)}>Remove</button>
                  </li>
                ))
              }
            </ul>

            <button onClick={clearCart}>Clear Cart</button>
            <Link to='/checkout'><button>Checkout</button></Link>
          </>
        )
      }
    </>
  )
}

export default Cart
