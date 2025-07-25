  import { useParams } from "react-router-dom";
  import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  console.log('id: ', id)

  useEffect(() => {
      fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then(setProduct)
    }, [id])

    const addToCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(product);

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Added to cart');
    }
    
    if(!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} style={{width:"500px"}}/>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail
