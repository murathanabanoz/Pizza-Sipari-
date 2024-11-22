import React from "react";
import "./Home.css";
import homeBanner from "../../Assets/mile1-assets/home-banner.png";
import food1 from "../../Assets/mile2-aseets/pictures/food-1.png";
import food2 from "../../Assets/mile2-aseets/pictures/food-2.png";
import food3 from "../../Assets/mile2-aseets/pictures/food-3.png";
import svg1 from "../../Assets/mile2-aseets/icons/1.svg";
import svg2 from "../../Assets/mile2-aseets/icons/2.svg";
import svg3 from "../../Assets/mile2-aseets/icons/3.svg";
import svg4 from "../../Assets/mile2-aseets/icons/4.svg";
import svg5 from "../../Assets/mile2-aseets/icons/5.svg";
import svg6 from "../../Assets/mile2-aseets/icons/6.svg";
import kart1 from "../../Assets/mile2-aseets/cta/kart-1.png";
import kart2 from "../../Assets/mile2-aseets/cta/kart-2.png";
import kart3 from "../../Assets/mile2-aseets/cta/kart-3.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/order");
  };
  return (
    <div className="banner-container">
      <div className="text-container">
        <h3 className="firsat">fırsatı kaçırma</h3>
        <h1 className="banner-text">KOD ACIKTIRIR</h1>
        <h1 className="banner-text">PİZZA,DOYURUR</h1>
        <button className="custom-button" onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
      <ul className="categories-list">
        <li>
          <img src={svg1} />
          YENİ!Kore
        </li>
        <li>
          <img src={svg2} />
          Pizza
        </li>
        <li>
          <img src={svg3} />
          Burger
        </li>
        <li>
          <img src={svg4} />
          Kızartmalar
        </li>
        <li>
          <img src={svg5} />
          Fast Food
        </li>
        <li>
          <img src={svg6} />
          <span> Gazlı İçecek</span>
        </li>
      </ul>
      <div className="reklamlar">
        <div className="grup1">
          <div className="ozel-lezzetus">
            <div className="content">
              <h1 className="child-ozel-lezzetus">Özel Lezzetus</h1>
              <h6 className="child-ozel-lezzetus">
                Position:Absolute Acı Burger
              </h6>
              <button className="child-ozel-lezzetus">Sipariş Ver</button>
            </div>
          </div>
        </div>
        <div className="grup2">
          <div className="hackatlon-burger">
            <div className="content">
              <h2>Hackatlon Burger Menü</h2>
              <button>Sipariş Ver</button>
            </div>
          </div>

          <div className="kurye">
            <div className="content">
              <p>
                <span style={{ color: "red" }}>Çooooook</span> hızlı npm kurye
              </p>
              <button className="kurye-btn">Sipariş Ver</button>
            </div>
          </div>
        </div>
      </div>
      <div className="orta-yazi">
        <h4>en çok paketlenen menüler</h4>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
      </div>
      <ul className="bestfood-list">
        <li>
          <img src={svg1} />
          Ramen
        </li>
        <li>
          <img src={svg2} />
          Pizza
        </li>
        <li>
          <img src={svg3} />
          Burger
        </li>
        <li>
          <img src={svg4} />
          French Fries
        </li>
        <li>
          <img src={svg5} />
          Fast Food
        </li>
        <li>
          <img src={svg6} />
          Soft Drinks
        </li>
      </ul>
      <div className="pizza-turleri">
        <div className="foods">
          <img src={food1} className="food-img" />
          <h3>Terminal Pizza</h3>
          <div className="card-p-container">
            <p className="card-ps">4.9</p>
            <p className="card-ps">(200)</p>
            <p className="card-price">60tl</p>
          </div>
        </div>
        <div className="foods">
          <img src={food2} className="food-img" />
          <h3>Position Absolute Acı Pizza</h3>
          <div className="card-p-container">
            <p className="card-ps">4.9</p>
            <p className="card-ps">(928)</p>
            <p className="card-price">85tl</p>
          </div>
        </div>
        <div className="foods">
          <img src={food3} className="food-img" />
          <h3>useEffect Tavuklu Burger</h3>
          <div className="card-p-container">
            <p className="card-ps">4.9</p>
            <p className="card-ps">(462)</p>
            <p className="card-price">75tl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
