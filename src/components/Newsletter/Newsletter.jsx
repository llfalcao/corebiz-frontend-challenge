import '../../styles/newsletter.css';
import { useState } from 'react';
import { subscribe } from '../../api/newsletter';
import SuccessMessage from '../SuccessMessage/SuccessMessage';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrors(({ name, ...errors }) => errors);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors(({ email, ...errors }) => errors);
  };

  const handleErrors = () => {
    setErrors((current) => {
      const errors = { ...current };
      if (!name) errors.name = 'Preencha com seu nome completo';
      if (!email) errors.email = 'Preencha com um e-mail válido';
      return errors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleErrors();
    if ((!name && !email) || !name || !email) return;

    const response = await subscribe(name, email);
    if (response.message === 'Created successfully') {
      setSubscribed(true);
      setName('');
      setEmail('');
    }
  };

  const handleNewSubscription = () => setSubscribed(false);

  if (subscribed) {
    return (
      <div className="newsletter">
        <SuccessMessage handleNewSubscription={handleNewSubscription} />
      </div>
    );
  }

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
            errors.name || errors.email ? 'newsletter__submit--disabled' : null
          }`}
        >
          Eu quero!
        </button>
      </form>
    </div>
  );
}
