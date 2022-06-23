import logo from '../../assets/logo-corebiz-preto-cinza.png';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import cartIcon from '../../assets/cart.svg';

import * as S from './styled';

export default function Header({ cart }) {
  return (
    <S.Header className="header">
      <div>
        <S.Logo src={logo} alt="corebiz logo" />
      </div>
      <S.SearchInput>
        <input type="search" placeholder="O que está procurando?" />
        <button type="submit">
          <S.Icon src={search} alt="search_icon" />
        </button>
      </S.SearchInput>
      <div>
        <S.Icon src={user} alt="Minha conta" />
        <span>Minha Conta</span>
      </div>
      <div>
        <S.Icon src={cartIcon} alt="Carrinho" />
        <S.CartItemCount>{cart.length}</S.CartItemCount>
      </div>
    </S.Header>
  );
}
