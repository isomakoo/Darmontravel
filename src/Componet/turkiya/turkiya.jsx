import "./turkiya.css";
import groupImage from "../../assets/Group 2.png";
import turkiya1 from "../../assets/Turkiya1.png";
import turkiya3 from "../../assets/turkiya3.png";
import Misr2 from "../../assets/misr2.png";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Turkiya() {
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
          <img src={turkiya1} alt="Misr" className="misr-img" />
          <div className="misr-list">
            <nav>
              <h1 className="misr-title">
                Turkiya Istanbul: Asrlar Kesisgan Abadiy Shahar
              </h1>
              <p className="misr-text">
                Istanbulga xush kelibsiz – Sharq va G'arb kesisadigan, sehr va
                tarixiy atmosfera yaratgan shahar.Siz Sultonahmetning jozibali
                dunyosiga sho'ng'ishingiz, u yerda tor ko'chalar sizni buyuk
                Ko'k masjid va Aya Sofiyaga olib boradi.
              </p>
              <p className="misr-text">
                Sultonahmet bo'ylab sayohat sizni Vizantiya va Usmoniy
                imperiyasining uzoq davrlariga olib boradi. Shahar ramzi bo'lgan
                Topqapi saroyi, Usmoniy sultonlarining rezidensiyasi, sizni
                boylik va haremning intrigalariga cho'mdiradi.
              </p>
              <p className="misr-text">
                Mashhur Katta Bozor bo'ylab yuring, bu yerda siz noyob
                suvenirlar, ziravorlar va antikvar buyumlarni topasiz. Bosfor
                bo'yidagi ajoyib manzaralardan bahramand bo'ling va Istanbulning
                ruhini his eting. Turni Dolmabahche saroyi, Usmoniy davrining
                boylik va nafislik ramzi, bilan yakunlang.
              </p>
            </nav>
            <img src={Misr2} alt="rasm" className="misr-icon" />
          </div>
          <ul className="turkiy-listes">
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">TOSHKENT – ISTANBUL</h1>
              <hr />
              <p className="misr-item-text">Istanbul aeroportiga kelish.</p>
              <p className="misr-item-text">
                Transfer va mehmonxonaga joylashish.
              </p>
              <p className="misr-item-text">Gid bilan uchrashuv.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
              <p className="misr-item-text">Istanbulda tunash.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title"> ISTANBUL EKSKURSIYASI </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">
                Ko'k Masjid va Aya Sofiyani ziyorat qilish
              </p>
              <p className="misr-item-text">Topqapi saroyini ko'rish.</p>
              <p className="misr-item-text">Tushlik.</p>
              <p className="misr-item-text">
                Dolmabahche saroyini ziyorat qilish.
              </p>
              <p className="misr-item-text">Mehmonxonada kechki ovqat.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
            </li>
          </ul>
          <div className="turkiya-list">
            <img src={turkiya3} alt="Turkiya" className="turkiya-img" />
            <nav>
              <h1 className="turkiya-title">Antaliya: Yerdagi Jannat</h1>
              <p className="turkiya-text">
                Tavr tog'lari bilan o'ralgan, yam-yashil go'zal Antaliya shahri
                – Turkiya Rivyerasining eng chiroyli shahri! Siz eski shahar
                Kaleichini ko'rasiz, bu yerda yam-yashil tepaliklarda qizil
                tomli kichik g'ishtli uylar tarqalgan. Shaharning ramzlari
                bo'lgan Riflenaya minora yoki "gofra" minora, shahar mudofaa
                devorlarining bir qismi bo'lgan soat minorasi. Shahar tarix va
                madaniyatga boy, shuningdek, zargarlik buyumlari, charm buyumlar
                va qo'l to'qilgan gilamlar katta savdo qiymatiga ega. Bundan
                tashqari, biz Antaliya sohilining durdonasi – Karpuzkaldiran
                sharsharasini ziyorat qilamiz, u 39 metr balandlikdan dengizga
                tushadi.
              </p>
            </nav>
          </div>
          <ul className="turkiy-listt">
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">TOSHKENT – ANTALIYA</h1>
              <hr />
              <p className="misr-item-text">Antaliya aeroportiga kelish</p>
              <p className="misr-item-text">
                Transfer va mehmonxonaga joylashish.
              </p>
              <p className="misr-item-text">Gid bilan uchrashuv.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
              <p className="misr-item-text">Istanbulda tunash.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title"> ISTANBUL EKSKURSIYASI </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">
                Respublika maydonini ziyorat qilish.
              </p>
              <p className="misr-item-text">
                Eski shahar Kaleichi / Yivli minora / Soat minorasi.
              </p>
              <p className="misr-item-text">Tushlik.</p>
              <p className="misr-item-text">
                Karpuzkaldiran sharsharasini ziyorat qilish.
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

export default Turkiya;
