import { useState, useEffect } from 'react';

import Products from './components/Products';

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) setCart(JSON.parse(localCart));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const duplicate = prevCart.findIndex(
        (item) => item.productId === product.productId,
      );

      if (duplicate > -1) {
        const newCart = [...prevCart];
        newCart[duplicate].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(newCart));
        return newCart;
      }

      const newCart = prevCart.concat({ ...product, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <div className="App">
      {JSON.stringify(cart)}
      <Products addToCart={addToCart} />
    </div>
  );
}
