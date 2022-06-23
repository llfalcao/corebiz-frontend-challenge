import '../../styles/footer.css';
import mail from '../../assets/mail.svg';
import contact from '../../assets/contact.svg';
import corebizLogo from '../../assets/site-logo-corebiz-preto-cinza.png';
import vtexLogo from '../../assets/vtex.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Localização</h3>
        <div>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphaville SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>
      <div className="footer__contact">
        <button type="button">
          <img src={mail} alt="" />
          <p>ENTRE EM CONTATO</p>
        </button>
        <button type="button">
          <img src={contact} alt="" />
          <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
        </button>
      </div>
      <div>
        <div>
          <span>Created by</span>
          <img src={corebizLogo} alt="Corebiz" />
        </div>
        <div>
          <span>Powered by</span>
          <img src={vtexLogo} alt="VTEX" />
        </div>
      </div>
    </footer>
  );
}
