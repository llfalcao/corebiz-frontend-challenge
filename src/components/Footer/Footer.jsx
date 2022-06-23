import '../../styles/footer.css';
import mail from '../../assets/mail.svg';
import contact from '../../assets/contact.svg';
import corebizLogo from '../../assets/site-logo-corebiz-preto-cinza.png';
import vtexLogo from '../../assets/vtex.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <h3 className="contact__title">Localização</h3>
        <div className="contact__info">
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphaville SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>
      <div className="cta">
        <button type="button" className="cta__btn">
          <img src={mail} alt="" />
          <p className="cta__text">ENTRE EM CONTATO</p>
        </button>
        <button type="button" className="cta__btn">
          <img src={contact} alt="" />
          <p className="cta__text">FALE COM O NOSSO CONSULTOR ONLINE</p>
        </button>
      </div>
      <div className="companies">
        <div className="company">
          <p className="company__topText">Created by</p>
          <img src={corebizLogo} alt="Corebiz" className="company__logo" />
        </div>
        <div className="company">
          <p className="company__topText">Powered by</p>
          <img src={vtexLogo} alt="VTEX" className="company__logo" />
        </div>
      </div>
    </footer>
  );
}
