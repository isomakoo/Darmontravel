import "./Misr.css";
import groupImage from "../../assets/Group 2.png";
import Misr1 from "../../assets/Misr1.png";
import Misr2 from "../../assets/misr2.png";
import Image12 from "../../assets/Image (12).png";
import Modal from "../Modal/Modal";
import { useState } from "react";
function Misr() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <div className="misr">
        <div className="container">
          <div className="hero-list">
            <a href="/">
              <img src={groupImage} alt="DarmonTravel" />
            </a>
            <ul className="hero-navbar">
              <li className="hero-navber-item">
                <a href="/" className="hero-navbar-item-link">
                  Turlar
                </a>
              </li>
              <li className="hero-navber-item">
                <a href="/" className="hero-navbar-item-link">
                  Biz Haqimizda
                </a>
              </li>
              <li className="hero-navber-item">
                <a href="/" className="hero-navbar-item-link">
                  Bizning Afzalliklarimiz
                </a>
              </li>
              <li className="hero-navber-item">
                <a href="/" className="hero-navbar-item-link">
                  Aloqa
                </a>
              </li>
            </ul>
            <select className="hero-list-select">
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </div>
          <img src={Misr1} alt="Misr" className="misr-img" />
          <div className="misr-list">
            <nav>
              <h1 className="misr-title">
                Misr: Fir'avnlarning Vahshiyligi va Qadimiy Sirlar
              </h1>
              <p className="misr-text">
                Misrga xush kelibsiz – tarix har qadamda jonlanadigan mamlakat.
                Sayohatingiz Giza piramidalari ziyorati bilan boshlanadi, bu
                yerda siz Buyuk Sfenksni ko'rasiz va qadimiy fir'avnlarning
                sirlarini bilib olasiz. Heopsa, Xafre va Mikerina piramidalari
                sizning xotirangizda abadiy qoladi.
              </p>
              <p className="misr-text">
                Misrning ramzi bo'lgan Qohira – qadimiy ibodatxonalar va
                masjidla zamonaviy binolar bilan uyg'unlashgan shahar. Siz
                Qohira ko'chalari bo'ylab yurasiz, Tutanxamon xazinalari
                saqlanadigan Misr muzeyini ziyorat qilasiz va Nil daryosidan
                bahramand bo'lasiz.
              </p>
              <p className="misr-text">
                Turni davom ettirib, Misrning qadimiy poytaxti Luksorga yo'l
                olamiz, bu yerda siz Karnak ibodatxonasi va Qirollar vodiysini
                ziyorat qilasiz. Siz qadimiy boyliklar atmosferasiga sho'ng'ib,
                ulug'vor ibodatxonalar va maqbaralarni o'rganasiz.
              </p>
            </nav>
            <img src={Misr2} alt="rasm" className="misr-icon" />
          </div>
          <ul className="misr-listes">
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">TOSHKENT – QOHIRA</h1>
              <hr />
              <p className="misr-item-text">Qohira aeroportiga kelish.</p>
              <p className="misr-item-text">Transfer va mehmonxonaga joylashish.</p>
              <p className="misr-item-text">Gid bilan uchrashuv.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
              <p className="misr-item-text">Qohirada tunash.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title"> QOHIRA EKSKURSIYASI </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">Giza piramidalari va Buyuk Sfenksni ziyorat qilish.</p>
              <p className="misr-item-text">Qohira bo'ylab sayohat.</p>
              <p className="misr-item-text">Tushlik.</p>
              <p className="misr-item-text">Misr muzeyini ziyorat qilish.</p>
              <p className="misr-item-text">Mehmonxonada kechki ovqat.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">QOHIRA – LUKSOR </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">Luksorga transfer.</p>
              <p className="misr-item-text">Mehmonxonaga joylashish.</p>
              <p className="misr-item-text">Karnak ibodatxonasi va Qirollar vodiysini ziyorat qilish.</p>
              <p className="misr-item-text">Mehmonxonada kechki ovqat.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
            </li>
          </ul>
          <button className="misr-btn"onClick={showModal}>Buyurtma berish</button>
          <Modal show={show} handleClose={hideModal} />
        </div>
      </div>
    </>
  );
}

export default Misr;
