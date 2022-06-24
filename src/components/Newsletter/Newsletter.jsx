import '../../styles/newsletter.css';
import { useState } from 'react';
import { subscribe } from '../../api/newsletter';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    if (!e.target.value) {
      setErrors({ ...errors, name: 'Preencha com seu nome completo' });
    } else {
      setErrors(({ name, ...errors }) => errors);
    }
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    if (!e.target.value) {
      setErrors({ ...errors, email: 'Preencha com um e-mail válido' });
    } else {
      setErrors(({ email, ...errors }) => errors);
    }
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.name || errors.email) return;

    const response = await subscribe(name, email);
    if (response.message === 'Created successfully') {
      setSubscribed(true);
    }
  };

  return (
    <div className="newsletter">
      <h2 className="newsletter__title">
        Participe de nossas news com promoções e novidades!
      </h2>
      <form className="newsletter__fields" onSubmit={handleSubmit}>
        <div>
          <input
            id="name"
            type="name"
            placeholder="Digite seu nome"
            className={`newsletter__input ${
              errors.name ? 'newsletter__input--error' : null
            }`}
            onChange={handleNameChange}
          />
          {errors.name ? (
            <p className="newsletter__errorMsg">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            className={`newsletter__input ${
              errors.email ? 'newsletter__input--error' : null
            }`}
            onChange={handleEmailChange}
          />
          {errors.email ? (
            <p className="newsletter__errorMsg">{errors.email}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className={`newsletter__input newsletter__submit ${
            errors ? 'newsletter__submit--disabled' : null
          }`}
        >
          Eu quero!
        </button>
      </form>
      {subscribed ? (
        <p className="newsletter__success">Obrigado por se cadastrar!</p>
      ) : null}
    </div>
  );
}
