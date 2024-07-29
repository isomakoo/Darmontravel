import "./foother.css";
import rec from "../../assets/Rectangle 26.png";
import image from "../../assets/Mask Group (11).png";
import telegtram from "../../assets/telegram.png";
import phone from "../../assets/phone.png";
import phonecall from "../../assets/phonecall.png";
import facebook from "../../assets/facebook.png";
import address from "../../assets/address.png";
import instagram from "../../assets/instagram.png";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
function Foother() {
  const divStyle = {
    backgroundImage: `url(${rec})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    width: "800px",
    height: "200px",
    zIndex: 1,
  };
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU';
    const chatId = '6914657739';
    const text = `Yangi telefon raqami: ${phoneNumber}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      const data = await response.json();
      if (data.ok) {
        toast.success('Xabar yuborildi!');
        setPhoneNumber(''); // Input qiymatini tozalash
      } else {
        toast.error('Xabar yuborishda xatolik yuz berdi.');
      }
    } catch (error) {
      console.error('Xatolik:', error);
      toast.error('Xabar yuborishda xatolik yuz berdi.');
    } finally {
      setIsSending(false);
    }
  };


  return (
    <>
      <div className="foother">
        <div className="container">
          <div className="foother-list" style={divStyle}>
            <nav className="foother-nav">
              <p className="foother-text">
                Biz har doim sizning savollaringiz va takliflaringizga ochiqmiz.
                Biz bilan qulay usulda bog'laning, va bizning jamoamiz sizga
                imkon qadar tezroq javob beradi.
              </p>
              <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="foother-input"
          placeholder="+998"
          required
        />
        <button type="submit" className="foother-btn" disabled={isSending}>
          {isSending ? 'Yuborilmoqda...' : 'Menga qo\'ngiroq qiling'}
        </button>
      </form>
      <ToastContainer />
            </nav>
            <img src={image} alt="rasm" className="foother-image" />
          </div>
          <ul className="foother-item">
            <li className="foother-ietn-nav">
              <nav className="texte">
                <img src={phonecall} alt="rasm" id="hero-icons" />{" "}
                <a href="tel:+998 77 273 00 17" className="foother-link">
                  +998 77 273 00 17
                </a>{" "}
                <br />
              </nav>
              <a href="#">
                {" "}
                <img
                  className="foother-icon"
                  src={facebook}
                  alt="facebook"
                />{" "}
              </a>
              <a href="#">
                {" "}
                <img className="foother-icon" src={instagram} alt="instagram" />
              </a>
              <a href="#">
                {" "}
                <img className="foother-icon" src={telegtram} alt="telegram" />
              </a>
              <a href="#">
                {" "}
                <img className="foother-icon" src={phone} alt="whatsapp" />
              </a>
            </li>
            <li className="foother-item-nav">
              <img src={address} alt="addres" />
              <a href="#" className="foother-link">
                Toshkent, O'zbekiston Chilonzor 18/19 uy
              </a>
            </li>
          </ul>
          <hr />
          <h4 className="foother-titles">DarmonTravel 2024</h4>
        </div>
      </div>
    </>
  );
}

export default Foother;
