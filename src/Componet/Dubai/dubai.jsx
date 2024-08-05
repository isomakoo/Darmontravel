import "./dubai.css";
import groupImage from "../../assets/Group 2.png";
import dubai1 from "../../assets/Baa.png";
import Misr2 from "../../assets/misr2.png";
import Modal from "../Modal/Modal";
import { useState } from "react";
function Dubai() {
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
          <img src={dubai1} alt="Misr" className="misr-img" />
          <div className="misr-list">
            <nav>
              <h1 className="misr-title">
                BAA: Zamonaviy Hashamat va Abadiy An'analar
              </h1>
              <p className="misr-text">
                Birlashgan Arab Amirliklariga xush kelibsiz – zamonaviy
                osmono'par binolar qadimiy an'analar bilan yonma-yon bo'lgan
                mamlakat. Sayohatingiz Dubayda boshlanadi – kelajak shahrida, bu
                yerda sizni hashamatli mehmonxonalar, savdo markazlari va
                ulug'vor binolar kutmoqda. Siz dunyodagi eng baland osmono'par
                bino – Burj Xalifani ziyorat qilasiz va uning kuzatuv
                maydonchasidan hayratlanarli manzaralardan bahramand bo'lasiz.
              </p>
              <p className="misr-text">
                Shahar ramzi bo'lgan Palma Jumeira – sun'iy orol, bu yerda siz
                plyajlarda dam olishingiz va hashamatli kurortlardan bahramand
                bo'lasiz. Dubay Marinada sayr qilib, zamonaviy arxitekturadan
                zavqlaning va mashhur akvarium joylashgan Dubay Mall savdo
                markazini ziyorat qiling.
              </p>
              <p className="misr-text">
                Turni davom ettirib, BAA poytaxti Abu Dabiga yo'l olamiz. Siz
                Shayx Zayd masjidini, dunyodagi eng katta masjidlardan birini,
                ko'rasiz va qadimiy va zamonaviy san'atni uyg'unlashtirgan Luvr
                Abu Dabi muzeyini ziyorat qilasiz.
              </p>
            </nav>
            <img src={Misr2} alt="rasm" className="misr-icon" />
          </div>
          <ul className="misr-listes">
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">TOSHKENT – DUBAI</h1>
              <hr />
              <p className="misr-item-text">Dubay aeroportiga kelish.</p>
              <p className="misr-item-text">
                Transfer va mehmonxonaga joylashish.
              </p>
              <p className="misr-item-text">Gid bilan uchrashuv.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
              <p className="misr-item-text">Dubayda tunash.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title"> DUBAY EKSKURSIYASI </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">
                Giza piramidalari va Buyuk Sfenksni ziyorat qilish.
              </p>
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">Burj Xalifa va kuzatuv
maydonchasini ziyorat qilish.</p>
              <p className="misr-item-text">Palma Jumeira bo'ylab sayohat.</p>
              <p className="misr-item-text">Dubay Marina bo'ylab sayohat.</p>
              <p className="misr-item-text">Mehmonxonada kechki ovqat.</p>
              <p className="misr-item-text">Bo'sh vaqt.</p>
            </li>
            <li className="misr-item">
              <p className="misr-item-texs">Tur Istanbul: Dastur </p>
              <h1 className="misr-item-title">DUBAY-ABU DABI </h1>
              <hr />
              <p className="misr-item-text">Mehmonxonada nonushta.</p>
              <p className="misr-item-text">Abu Dabiga transfer.</p>
              <p className="misr-item-text">Mehmonxonaga joylashish.</p>
              <p className="misr-item-text">
              Luvr Abu Dabi muzeyini ziyorat qilish
              </p>
              <p className="misr-item-text">Shayx Zayd masjidini ziyorat qilish.</p>
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

export default Dubai;
