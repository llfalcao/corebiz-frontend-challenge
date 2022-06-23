import { useState, useEffect } from 'react';
import { baseUrl } from '../../api/products';

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

  const priceToString = (price) =>
    price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

  return (
    <ul>
      {products.map((product) => (
        <li key={product.productId}>
          <img src={product.imageUrl} alt={product.productName} />
          <p>{product.productName}</p>
          {/* todo: star rating component */}
          {product.listPrice ? <p>de {priceToString(product.listPrice)}</p> : null}
          <p>por {priceToString(product.price)}</p>

          {product.installments.length > 0 ? (
            <p>
              ou em {product.installments[0].quantity}x de{' '}
              {priceToString(product.installments[0].value)}
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
