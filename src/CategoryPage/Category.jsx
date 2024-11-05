import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Category = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px', margin: '20px', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
      <h2 style={{margin: '20px 0', padding: '20px 0'}}>Shop By Categories</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // المسافة بين العناصر
        slidesPerView={5} // عدد العناصر المرئية
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 36.png" width={150} alt="Brand 1" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 33.png" width={150} alt="Brand 2" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 34.png" width={150} alt="Brand 3" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 43.png" width={150} alt="Brand 4" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 42.png" width={150} alt="Brand 5" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 18.png" width={150} alt="Brand 6" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 27.png" width={150} alt="Brand 7" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 75(2).png" width={150} alt="Brand 7" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 45.png" width={150} alt="Brand 7" /></SwiperSlide>
        <SwiperSlide style={{borderRadius: '15px', backgroundColor: '#FFFAFA'}}><img src="/images/image 46.png" width={150} alt="Brand 7" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;