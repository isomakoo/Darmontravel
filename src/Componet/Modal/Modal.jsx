import React, { useEffect, useState } from 'react';
import './modal.css';

const Modal = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const sendMessage = () => {
    const botToken = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU';
    const chatId = '6914657739';
    const text = `Ism: ${name}\nAloqa raqami: ${tel}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        setSuccessMessage('Xabar yuborildi');
        setName('');
        setTel('');
        setTimeout(() => {
          setSuccessMessage('');
          handleClose();
        }, 1000);
      } else {
        setSuccessMessage('Xabar yuborishda xatolik yuz berdi');
      }
    })
    .catch(error => {
      console.error('Xatolik:', error);
      setSuccessMessage('Xabar yuborishda xatolik yuz berdi');
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose} className="close-button">X</button>
        <h3>Iltimos, operatorlarimiz siz bilan bog'lanishi uchun aloqa ma'lumotlaringizni qoldiring.</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Sizning ismingiz" 
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="tel" 
            placeholder="Sizning aloqa raqamingiz" 
            id='tel'
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Buyurtma berish</button>
        </form>
        <p>Ma'lumotlarni to'ldirib "Buyurtma berish" tugmasini bosish orqali ma'lumotlar yuboriladi va operator siz bilan tez orqada bog'lanadi.</p>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </section>
    </div>
  );
};

export default Modal;
