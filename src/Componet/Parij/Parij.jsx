import "./parij.css";
import groupImage from "../../assets/Group 2.png";
import parij from "../../assets/Yevropa.png";
import Misr2 from "../../assets/misr2.png";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Parij() {
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
            <a href="#">
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
          <img src={parij} alt="Misr" className="misr-img" />
          <div className="misr-list">
            <nav>
              <h1 className="misr-title">
                Yevropa: Ilhom va Sehrli Qadimiy Dunyo
              </h1>
              <p className="misr-text">
                Yevropaga xush kelibsiz – har bir mamlakat o'ziga xos
                sarguzashtlar va bebaho madaniy boyliklarni taklif qiladigan
                qit'a. Sayohatingiz Parijdan boshlanadi, sevgi va san'at
                shahridan. Siz Eyfel minorasini ko'rasiz, Yelisey maydonlari
                bo'ylab sayr qilasiz va qulay kafelarda nozik fransuz
                taomlaridan bahramand bo'lasiz.
              </p>
              <p className="misr-text">
                Sayohatingizni Rimda davom eting, abadiy shahar, bu yerda har
                bir ko'cha tarix bilan nafas oladi. Siz Kolizey, Rim forumi va
                Vatikanni ziyorat qilib, qadimiy imperiyaning ulug'vorligi va
                ma'naviyatiga sho'ng'ishingiz mumkin.
              </p>
              <p className="misr-text">
                Sizning yo'lingiz Amsterdamdan ham o'tadi, kanallar va
                velosipedlar shahri. Bu yerda sizni jozibali kanallar, Van Gogh
                muzeyi va erkinlik va ijodiy atmosfera kutmoqda.
              </p>
            </nav>
            <img src={Misr2} alt="rasm" className="misr-icon" />
          </div>
          <ul className="parij-listt">
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">TOSHKENT – PARIJ</h1>
              <hr />
              <p className="misr-item-text">Parij aeroportiga kelish.</p>
              <p className="misr-item-text">
                Transfer va mehmonxonaga joylashish.
              </p>
              <p className="misr-item-text">Gid bilan uchrashuv.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
              <p className="misr-item-text">Parijda tunash.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title"> PARIJ EKSKURSIYASI </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">
                Giza piramidalari va Buyuk Sfenksni ziyorat qilish.
              </p>
              <p className="misr-item-text">Qohira bo'ylab sayohat.</p>
              <p className="misr-item-text">Tushlik.</p>
              <p className="misr-item-text">Misr muzeyini ziyorat qilish.</p>
              <p className="misr-item-text">Mehmonxonada kechki ovqat.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
            </li>
          </ul>
          <ul className="turkiy-listt">
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">TOSHKENT – RIM</h1>
              <hr />
              <p className="misr-item-text">
                Aeroportga transfer va Rimga parvoz.
              </p>
              <p className="misr-item-text">
                Transfer va mehmonxonaga joylashish.
              </p>
              <p className="misr-item-text">
                Van Gogh muzeyini ziyorat qilish.
              </p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
              <p className="misr-item-text">Istanbulda tunash.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title"> PARIJ - RIM </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">
                Aeroportga transfer va Rimga parvoz.
              </p>
              <p className="misr-item-text">
              Mehmonxonaga joylashish.
              </p>
              <p className="misr-item-text">Tushlik.</p>
              <p className="misr-item-text">
              Kolizey va Rim forumini ziyorat qilish.
              </p>
              <p className="misr-item-text">Mehmonxonada kechki ovqat.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
            </li>
          </ul>
          <button className="misr-btn" onClick={showModal}>Buyurtma berish</button>
          <Modal show={show} handleClose={hideModal} />
        </div>
      </div>
    </>
  );
}

export default Parij;
