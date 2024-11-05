import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const BrandSwiper = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{margin: '20px 0', padding: '20px 0'}}>FEEL CONFIDENT AND BEAUTIFUL IN EVERY OUTFIT</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // المسافة بين العناصر
        slidesPerView={5} // عدد العناصر المرئية
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)'}}><img src="/images/image 13.png" width={150} alt="Brand 1" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)'}}><img src="/images/image 14.png" width={150} alt="Brand 2" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)'}}><img src="/images/image 15.png" width={150} alt="Brand 3" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)'}}><img src="/images/image 16.png" width={150} alt="Brand 4" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)'}}><img src="/images/image 17.png" width={150} alt="Brand 5" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)'}}><img src="/images/image 18.png" width={150} alt="Brand 6" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: 'var(--Black-100, #E6E6E6)'}}><img src="/images/image 19.png" width={150} alt="Brand 7" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
