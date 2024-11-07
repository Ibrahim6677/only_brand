import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Category = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0', backgroundColor: 'var(--Black-100, #E6E6E6)' }}>
      <h2 style={{ padding: '20px 0' }}>Shop By Categories</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // المسافة بين العناصر
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2, // عدد العناصر المرئية للشاشات الصغيرة جداً
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3, // عدد العناصر المرئية للشاشات المتوسطة
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3, // عدد العناصر المرئية للأجهزة اللوحية
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5, // عدد العناصر المرئية للشاشات الكبيرة
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 36.png" width={150} alt="Brand 1" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 33.png" width={150} alt="Brand 2" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 34.png" width={150} alt="Brand 3" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 43.png" width={150} alt="Brand 4" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 42.png" width={150} alt="Brand 5" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 20.png" width={150} alt="Brand 6" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 27.png" width={150} alt="Brand 7" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 75(2).png" width={150} alt="Brand 8" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 45.png" width={150} alt="Brand 9" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 46.png" width={150} alt="Brand 10" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 41.png" width={150} alt="Brand 11" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 37.png" width={150} alt="Brand 12" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '15px' }}>
          <img style={{backgroundColor: '#FFFAFA', borderRadius: '15px', padding: '20px 40px'}} src="/images/image 50.png" width={150} alt="Brand 13" />
          <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '500', fontFamily: 'Geist', textTransform: 'capitalize'}}>T-Shirts</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
