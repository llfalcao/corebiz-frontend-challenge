import '../../styles/newsletter.css';
import { useState } from 'react';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div className="newsletter">
      <h2>Participe de nossas news com promoções e novidades!</h2>
      <form className="newsletter__fields" onSubmit={handleSubmit}>
        <input
          id="name"
          type="name"
          placeholder="Digite seu nome"
          className="newsletter__input"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          className="newsletter__input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="newsletter__input newsletter__submit">
          Eu quero!
        </button>
      </form>
    </div>
  );
}
