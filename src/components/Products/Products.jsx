import { useState, useEffect } from 'react';
import { baseUrl } from '../../api/productAPI';

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    getProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.productId}>
          <img src={product.imageUrl} alt={product.productName} />
          <p>{product.productName}</p>
          {/* todo: star rating component */}
          {product.listPrice ? <p>de R$ {product.listPrice}</p> : null}
          <p>por R$ {product.price}</p>
          {product.installments.length > 0 ? (
            <p>
              ou em {product.installments[0].quantity}x de R${' '}
              {product.installments[0].value}
            </p>
          ) : null}
          <button type="button" onClick={() => addToCart(product)}>
            COMPRAR
          </button>
        </li>
      ))}
    </ul>
  );
}
