import logo from '../images/logo.png';
import search from '../images/search.png';
import user from '../images/user.png';
import cartIcon from '../images/cart.png';

export default function Header({ cart }) {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="corebiz logo" />
      </div>
      <div>
        <input type="search" placeholder="O que está procurando?" />
        <button type="submit">
          <img src={search} alt="search_icon" />
        </button>
      </div>
      <div>
        <img src={user} alt="Minha conta" />
        <span>Minha Conta</span>
      </div>
      <div>
        <img src={cartIcon} alt="Carrinho" />
        <span>99</span>
      </div>
    </header>
  );
}
