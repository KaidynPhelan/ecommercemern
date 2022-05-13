import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import data from '../data';

function HomeScreen() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('/api/products/');
  //     setProducts(result.data);
  //   };
  //   fetchData();
  // }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    FetchData();
  });
  async function FetchData() {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {' '}
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
