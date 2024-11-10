import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Category = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        margin: "20px 0",
        backgroundColor: "var(--Black-100, #E6E6E6)",
      }}
    >
      <h2 style={{ padding: "20px 0" }}>Shop By Categories</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {/* محتويات الـ SwiperSlide هنا */}
      </Swiper>
    </div>
  );
};

export default Category;
