import banner from '../../assets/banner.png';

import * as S from './styled';

export default function Hero() {
  return (
    <S.Container>
      <S.Base>
        <div>
          <p>Olá, o que você está buscando?</p>
          <h1>Criar ou migrar seu e-commerce?</h1>
        </div>
      </S.Base>
      <img src="" alt="" />

      <S.Banner src={banner} alt="" />
    </S.Container>
  );
}
