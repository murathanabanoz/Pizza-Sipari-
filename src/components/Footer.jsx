import "./Footer.css";
import React from "react";
import insta1 from "../../Assets/mile2-aseets/footer/insta/li-0.png";
import insta2 from "../../Assets/mile2-aseets/footer/insta/li-1.png";
import insta3 from "../../Assets/mile2-aseets/footer/insta/li-2.png";
import insta4 from "../../Assets/mile2-aseets/footer/insta/li-3.png";
import insta5 from "../../Assets/mile2-aseets/footer/insta/li-4.png";
import insta6 from "../../Assets/mile2-aseets/footer/insta/li-5.png";

const Footer = () => {
  const instas = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <div className="footer-container">
      <div className="group-1">
        <img
          src="../../Assets/mile2-aseets/footer/icons/logo-footer.svg"
          alt="logofooter"
          className="footer-yemekteyiz-logo"
        />
        <div className="icons">
          <img
            src="../../Assets/mile2-aseets/footer/icons/icon-1.png"
            alt="icon-1"
            className="img-icon"
          />
          <p>341 Londonderry Road, Istanbul Türkiye</p>
        </div>

        <div className="icons">
          <img
            src="../../Assets/mile2-aseets/footer/icons/icon-2.png"
            alt="icon-2"
            className="img-icon"
          />
          <br />
          <p>aciktim@teknolojikyemekler.com</p>
        </div>

        <div className="icons">
          <img
            src="../../Assets/mile2-aseets/footer/icons/icon-3.png"
            alt="icon-3"
            className="img-icon"
          />
          <p>+90 216 123 45 67</p>
        </div>
      </div>
      <div className="group-2">
        <h2>Sıccacık Menuler</h2>
        <p>Terminal Pizza</p>
        <p>5 Kişilik Hackathlon Pizza</p>
        <p>useEffect Tavuklu Pizza</p>
        <p>Beyaz Console Frosty</p>
        <p>Testlet Geçti Mutlu Burger </p>
        <p>Position Absolute Acı Burger</p>
      </div>
      <div className="group-3">
        <h2>Instagram</h2>
        {instas.map((insta) => (
          <img src={insta} className="insta-img" />
        ))}
      </div>
    </div>
  );
};
export default Footer;
