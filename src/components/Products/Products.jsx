import '../../styles/products.css';
import { useState, useEffect } from 'react';
import { baseUrl } from '../../api/products';
import ProductRating from '../ProductRating/ProductRating';

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setProducts(data);
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
    <div className="products">
      <h2 className="products__title">Mais Vendidos</h2>

      <ul className="products__container">
        {products.map((p) => (
          <li key={p.productId} className="product">
            <div className="product__info">
              <img src={p.imageUrl} alt={p.productName} />
              <p className="product__name">{p.productName}</p>
              <ProductRating rating={p.stars} />
              {p.listPrice ? (
                <p className="product__listPrice">de {priceToString(p.listPrice)}</p>
              ) : (
                <p className="placeholder"></p>
              )}
              <p className="product__price">por {priceToString(p.price)}</p>

              {p.installments.length > 0 ? (
                <p className="product__installments">
                  ou em {p.installments[0].quantity}x de{' '}
                  {priceToString(p.installments[0].value)}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              className="product__buyBtn"
              onClick={() => addToCart(p)}
            >
              COMPRAR
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
