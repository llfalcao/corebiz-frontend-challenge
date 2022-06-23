import '../../styles/header.css';
import logo from '../../assets/logo-corebiz-preto-cinza.png';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import cartIcon from '../../assets/cart.svg';

export default function Header({ cart }) {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="corebiz logo" className="logo" />
      </div>
      <div className="searchBar">
        <input type="search" placeholder="O que está procurando?" />
        <button type="submit">
          <img src={search} alt="search_icon" className="icon" />
        </button>
      </div>
      <div>
        <img src={user} alt="Minha conta" className="icon" />
        <span>Minha Conta</span>
      </div>
      <div>
        <img src={cartIcon} alt="Carrinho" className="icon" />
        <span className="cartItemCounter">{cart.length}</span>
      </div>
    </header>
  );
}
