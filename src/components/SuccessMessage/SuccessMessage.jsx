import '../../styles/newsletter.css';

export default function SuccessMessage({ handleNewSubscription }) {
  return (
    <div className="successMessage">
      <h2>Seu e-mail foi cadastrado com sucesso!</h2>
      <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>
      <button
        type="button"
        className="successMessage__btn"
        onClick={handleNewSubscription}
      >
        Cadastrar novo e-mail
      </button>
    </div>
  );
}
