import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function ProductList() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  const filtered = products.filter( p => p.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-list">
        {
          filtered.map( p => (
            <div key={p.id} className="product">
              <img src={p.imageUrl} alt={p.name} style={{width:'250px'}}/>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <Link to={`/products/${p.id}`} >Details</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList
