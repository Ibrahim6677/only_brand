import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Second = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', margin: '20px 0' }}>
      <h2>FEEL CONFIDENT AND BEAUTIFUL IN EVERY OUTFIT</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // المسافة بين العناصر
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2, // عدد العناصر المرئية للشاشات الصغيرة جدا
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3, // عدد العناصر المرئية للشاشات المتوسطة
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4, // عدد العناصر المرئية للأجهزة اللوحية
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5, // عدد العناصر المرئية للشاشات الكبيرة
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 13.png" width={150} alt="Brand 1" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 14.png" width={150} alt="Brand 2" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 15.png" width={150} alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 16.png" width={150} alt="Brand 4" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 17.png" width={150} alt="Brand 5" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 18.png" width={150} alt="Brand 6" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 19.png" width={150} alt="Brand 7" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 66.png" width={150} alt="Brand 8" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 67.png" width={150} alt="Brand 7" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 57.png" width={150} alt="Brand 7" />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
          <img src="/images/image 47.png" width={150} alt="Brand 7" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Second;
