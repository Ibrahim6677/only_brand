import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // تأكد من استخدام "swiper/modules" بدلًا من "swiper"

const BrandSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10} // المسافة بين العناصر
      slidesPerView={4} // عدد العناصر المرئية
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      <h2>FEEL CONFIDENT AND BEAUTIFUL IN EVERY OUTFIT</h2>
      <SwiperSlide><img src="/images/image 13.png" alt="Brand 1" /></SwiperSlide>
      <SwiperSlide><img src="/images/image 14.png" alt="Brand 2" /></SwiperSlide>
      <SwiperSlide><img src="/images/image 15.png" alt="Brand 3" /></SwiperSlide>
      <SwiperSlide><img src="/images/image 16.png" alt="Brand 4" /></SwiperSlide>
      <SwiperSlide><img src="/images/image 17.png" alt="Brand 5" /></SwiperSlide>
      <SwiperSlide><img src="/images/image 18.png" alt="Brand 6" /></SwiperSlide>
      <SwiperSlide><img src="/images/image 19.png" alt="Brand 7" /></SwiperSlide>
    </Swiper>
  );
};

export default BrandSwiper;
