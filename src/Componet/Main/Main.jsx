import "./Main.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import turkiy from "../../assets/Turkiya.png";
import dubai from "../../assets/Dubai.png";
import paric from "../../assets/Paric.png";
import misr from "../../assets/Misr.png";
import tailand from "../../assets/tailand.png";
// import Image12 from '../../assets/Image (12).png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div id="Main">
        <div className="container">
          <h1 className="main-title">Turlar</h1>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/turkiya" className="main-link">
                <img src={turkiy} alt="Turkiya" className="main-swiper-img" />{" "}
                <br />
                <h2 className="main-swiper-title">Turkiya</h2>
                <hr className="main-hr" />
                <p className="main-swiper-text">Toshkent-Istanbul</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/misr" className="main-link">
                <img src={misr} alt="Turkiya" className="main-swiper-img" />{" "}
                <br />
                <h2 className="main-swiper-title">Misr</h2>
                <hr className="main-hr" />
                <p className="main-swiper-text">Toshkent-Qohira</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/dubai" className="main-link">
                <img src={dubai} alt="Turkiya" className="main-swiper-img" />{" "}
                <br />
                <h2 className="main-swiper-title">BAA</h2>
                <hr className="main-hr" />
                <p className="main-swiper-text">Toshkent-Dubai</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/parij" className="main-link">
                <img src={paric} alt="Turkiya" className="main-swiper-img" />{" "}
                <br />
                <h2 className="main-swiper-title">Yevropa</h2>
                <hr className="main-hr" />
                <p className="main-swiper-text">Toshkent-Parij</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
          <div className="main-list">
            <nav>
              <h3 className="main-list-title">
                {" "}
                <span className="text-main">15-Noyabrgacha</span> Yevropa uchun
                tur bron qilsangich
              </h3>
              <p className="main-list-text">
                {" "}
                <span className="title-main">10%</span> chegirmaga ega bo’ling
              </p>
            </nav>
            <nav>
              <img src={paric} alt="paric" className="main-list-img" />
              <img src={tailand} alt="Tailand" className="main-list-images" />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
