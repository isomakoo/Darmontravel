import './Hero.css'
import groupImage from '../../assets/Group 2.png';
import Image12 from '../../assets/Image (12).png';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';
function Hero() {
    const [show, setShow] = useState(false);

    const showModal = () => {
      setShow(true);
    };
  
    const hideModal = () => {
      setShow(false);
    };
    useEffect(() => {
      const links = document.querySelectorAll('.hero-navbar-item-link');
  
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });
    }, []);
  
  return (
    <>
     <div className="hero">
        <div className="container">
            <div className="hero-list">
                <a href="#"><img src={groupImage} alt="DarmonTravel" /></a>
                <ul className="hero-navbar">
                    <li className="hero-navber-item"><a href="#Main" className="hero-navbar-item-link">Turlar</a></li>
                    <li className="hero-navber-item"><a href="#sidebar-list" className="hero-navbar-item-link">Biz Haqimizda</a></li>
                    <li className="hero-navber-item"><a href="#sidebar-navbar" className="hero-navbar-item-link">Bizning Afzalliklarimiz</a></li>
                    <li className="hero-navber-item"><a href="#foother-item" className="hero-navbar-item-link">Aloqa</a></li>
                </ul>
                <select className='hero-list-select'>
                    <option value="uz">Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                </select>
            </div>
            <div className="hero-item">
                <nav className='hero-item-nav'>
                    <h1 className='hero-item-title'>DUNYO SZNI KUTMOQDA</h1>
                    <button className="hero-item-btn" onClick={showModal}>Buyurtma berish</button>
                    <Modal show={show} handleClose={hideModal} />
                </nav>
               <img src={Image12} alt="image" className='hero-item-img'/>
            </div>
        </div>
     </div>
    </>
  )
}

export default Hero
