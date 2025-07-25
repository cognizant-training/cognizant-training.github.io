
function Checkout() {
  const handlecheckout = () => {
    alert('You are getting redirected to the Payment Gateway page...');
    localStorage.removeItem('cart');
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>Complete your order below:</p>
      <button onClick={handlecheckout}>Make Payment</button>
    </div>
  )
}

export default Checkout
