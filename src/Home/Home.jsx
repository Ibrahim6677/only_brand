// ملف MySwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css"; // ملف CSS للتنسيقات
const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }} // تفعيل التابات (pagination)
      autoplay={{ delay: 3000 }} // تغيير التأخير إلى 3 ثواني
      loop
      modules={[Pagination, Autoplay]} // حذف الـ Navigation لأنه مش هتحتاجه
    >
      <SwiperSlide>
        <div className="slide-content">
          <img
            src="/images/image.jpg"
            alt="Calvin Klein"
            className="slide-image"
          />
          <div className="slide-overlay">
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img
            src="/images/image 11.jpg"
            alt="Calvin Klein"
            className="slide-image"
          />
          <div className="slide-overlay">
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img
            src="/images/image 4.png"
            alt="Calvin Klein"
            className="slide-image"
          />
          <div className="slide-overlay">
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img
            src="/images/image 7.png"
            alt="Calvin Klein"
            className="slide-image"
          />
          <div className="slide-overlay">
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img
            src="/images/image 8.png"
            alt="Calvin Klein"
            className="slide-image"
          />
          <div className="slide-overlay">
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
