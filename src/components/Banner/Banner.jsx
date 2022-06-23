import '../../styles/banner.css';
import banner from '../../assets/banner.png';

export default function Hero() {
  return (
    <div className="banner">
      <div className="banner__text">
        <div>
          <p>Olá, o que você está buscando?</p>
          <h1>Criar ou migrar seu e-commerce?</h1>
        </div>
      </div>
      <img src="" alt="" />

      <img src={banner} alt="" className="banner__image" />
    </div>
  );
}
