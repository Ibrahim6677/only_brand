import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Second.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Second() {
  
  return (
    <div className='swiper-container'>
      <h2>Feel Confident and Beautiful in Every Outfit</h2>
      <div className='swiper-wrapper'>
        <div className='swiper-slide'><img src="/images/image 13.png" alt="" /></div>
        <div className='swiper-slide'><img src="/images/image 14.png" alt="" /></div>
        <div className='swiper-slide'><img src="/images/image 15.png" alt="" /></div>
        <div className='swiper-slide'><img src="/images/image 16.png" alt="" /></div>
        <div className='swiper-slide'><img src="/images/image 17.png" alt="" /></div>
        <div className='swiper-slide'><img src="/images/image 18.png" alt="" /></div>
        <div className='swiper-slide'><img src="/images/image 19.png" alt="" /></div>
      </div>
    </div>
  );
}
