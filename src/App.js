import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import Products from './components/Products/Products';

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
      <Header cart={cart} />
      <Hero />
      <Products addToCart={addToCart} />
    </div>
  );
}
