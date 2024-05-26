import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import formBanner from "../../Assets/mile2-aseets/pictures/form-banner.png";
import "./Order.css";

const Order = ({ setOrder }) => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    size: "",
    dough: "",
    toppings: [],
    note: "",
  });
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const toppingsOptions = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
  ];

  const doughs = ["İnce Hamur", "Normal Hamur", "Kalın Hamur"];
  const pizzaSizes = ["S", "M", "L"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToppingChange = (e) => {
    const value = e.target.value;
    setFormData((prevFormData) => {
      const newToppings = prevFormData.toppings.includes(value)
        ? prevFormData.toppings.filter((topping) => topping !== value)
        : [...prevFormData.toppings, value];
      return { ...prevFormData, toppings: newToppings };
    });
  };
  const totalToppingPrice = formData.toppings.length * 5;
  useEffect(() => {
    const newTotalPrice = (totalToppingPrice + 85.5) * count;
    setTotal(newTotalPrice.toFixed(2));
  }, [formData.toppings, count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finallyOrder = {
      ...formData,
      count,
      total,
      totalToppingPrice,
    };

    axios
      .post("https://reqres.in/api/pizza", finallyOrder)
      .then((response) => {
        setOrder(finallyOrder);
        console.log("Sipariş Özeti:", response.data);
        history.push(`/done/${response.data.id}`);
      })
      .catch((error) => {
        console.error("Sipariş Gönderim Hatası:", error);
      });
  };

  return (
    <div className="food-card">
      <div className="colored-div"></div>
      <div className="box">
        <img src={formBanner} className="form-banner" />
        <div className="pizza-bilgi">
          <h2 className="pizza-name">Position Absolute Acı Pizza</h2>
          <div className="pizza-bilgi-ps">
            <h1 className="pizza-price">85.50₺ </h1>
            <p className="degerlendirme">(4.5)</p>
            <p className="degerlendirme">(200)</p>
          </div>
          <p className="pizza-description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <form className="form-component" onSubmit={handleSubmit}>
          <div className="boyut-hamur">
            <div className="radio-container">
              <h3>Boyut Seç*</h3>
              <div className="radio-group">
                {pizzaSizes.map((size) => (
                  <label
                    key={size}
                    className={`radio-label ${
                      formData.size === size ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      onChange={handleChange}
                      checked={formData.size === size}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
            <div className="dough-group">
              <h3>Hamur Seç*</h3>
              <label>
                <select
                  className="dropbox"
                  id="dough"
                  name="dough"
                  onChange={handleChange}
                  value={formData.dough}
                >
                  <option value="">-Hamur Kalınlığı Seç-</option>
                  {doughs.map((dough, index) => (
                    <option key={index} value={dough}>
                      {dough}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <h3>Ek Malzemeler:</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="checkbox-container">
            {toppingsOptions.map((topping) => (
              <label key={topping} className="checkbox-item">
                <input
                  type="checkbox"
                  value={topping}
                  checked={formData.toppings.includes(topping)}
                  onChange={handleToppingChange}
                />
                {topping}
                <div className="checkmark"></div>
              </label>
            ))}
          </div>
          <div>
            <p>Sipariş Notu</p>
            <label>
              <textarea
                className="textarea"
                name="note"
                placeholder="Siparişe Eklemek istediğiniz bir not var mı?"
                value={formData.note}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div className="bottom-container">
            <div className="buttons">
              <button type="button" className="art-eksil" onClick={decrease}>
                -
              </button>
              <span className="count">{count}</span>
              <button type="button" className="art-eksil" onClick={increase}>
                +
              </button>
            </div>
            <div className="siparis-toplami">
              <p>Sipariş Toplamı</p>
              <p>
                Seçimler: {formData.toppings.join(", ")},{totalToppingPrice}
              </p>
              <p>Toplam: {total} TL</p>
              <button type="submit" className="siparis-button">
                Sipariş Ver
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;

/*import React, { useState } from "react";
import "./Order.css";
import formBanner from "../../Assets/mile2-aseets/pictures/form-banner.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Order = ({ setSiparis }) => {
  const initialOrderData = {
    name: "",
    size: "",
    kalinlik: "",
    ekMalzemeler: [],
    text: "",
    ekMalzemePrice: 0,
    count: "",
  };

  const [orderData, setOrderData] = useState(initialOrderData);
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });

    if (type === "checkbox") {
      const newEkMalzemeler = checked
        ? [...orderData.ekMalzemeler, value]
        : orderData.ekMalzemeler.filter((item) => item !== value);
      setOrderData({ ...orderData, ekMalzemeler: newEkMalzemeler });
    } else {
      setOrderData({ ...orderData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    const finalOrder = { ...orderData, count };
    event.preventDefault();
    console.log(orderData);

    axios
      .post(`https://reqres.in/api/pizza`, finalOrder)
      .then((response) => {
        console.log(response.data);
        setSiparis(finalOrder);
        history.push("/done");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const history = useHistory();
  const handleClick = () => {
    history.push("/done");
  };

  const arttir = () => {
    setCount(count + 1);
  };

  const eksilt = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const pizzaSizes = ["S", "M", "L"];
  const kalinliklar = ["İnce", "Normal", "Kalın"];
  const ekMalzemeler = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  const calculateTotal = () => {
    const basePrice = 85.5;
    const ekMalzemePrice = orderData.ekMalzemeler.length * 5;
    const toplam = (basePrice + ekMalzemePrice) * count;
    return ekMalzemePrice, toplam;
  };

  return (
    <div className="food-card">
      <img src={formBanner} className="form-banner" />
      <div className="pizza-bilgi">
        <h2 className="pizza-name">Position Absolute Acı Pizza</h2>
        <h1 className="pizza-price">
          85.50₺ <span className="degerlendirme">(4.5) (200)</span>
        </h1>
        <p className="pizza-description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="boyut-hamur">
          <div className="radio-group">
            <h3>Boyut Seç</h3>
            {pizzaSizes.map((size) => (
              <label key={size} className="radio-label">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={handleChange}
                  checked={orderData.size === size}
                />
                {size}
              </label>
            ))}
          </div>
          <div>
            <h3>Hamur Seç</h3>
            <label>
              <select
                id="kalinlik"
                name="kalinlik"
                onChange={handleChange}
                value={orderData.kalinlik}
              >
                <option value="">Seçiniz</option>
                {kalinliklar.map((kalinlik, index) => (
                  <option key={index} value={kalinlik}>
                    {kalinlik}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <h3>Ek Malzemeler:</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="checkbox-container">
          {ekMalzemeler.map((ekMalzeme, index) => (
            <label key={index} className="checkbox-item">
              <input
                type="checkbox"
                onChange={handleChange}
                value={ekMalzeme}
                name="ekMalzemeler"
                checked={orderData.ekMalzemeler.includes(ekMalzeme)}
                disabled={
                  !orderData.ekMalzemeler.includes(ekMalzeme) &&
                  orderData.ekMalzemeler.length >= 10
                }
              />
              {ekMalzeme}
            </label>
          ))}
        </div>

        <div>
          <h3>Sipariş Notu</h3>
          <textarea
            name="text"
            value={orderData.text}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </div>

        <div>
          <button className="art-eksil" type="button" onClick={eksilt}>
            -
          </button>
          <span className="count">{count}</span>
          <button className="art-eksil" type="button" onClick={arttir}>
            +
          </button>
        </div>

        <div className="siparis-toplami">
          <h2>Sipariş Toplamı</h2>
          <h3>Seçimler</h3>
          <ul>
            {orderData.ekMalzemeler.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 id="toplam">Toplam: {calculateTotal()}₺</h3>
          <button type="submit" onClick={handleClick}>
            Sipariş Ver
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
*/
