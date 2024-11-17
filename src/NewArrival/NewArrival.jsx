import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./NewArrival.css";

const ProductSwiper = () => {
  const products = [
    {
      id: 1,
      name: "H&M",
      description: "Relaxed Fit T-Shirt",
      price: "780 EGY",
      delivery: "Free Delivery",
      img: "/images/image 8.png",
    },
    {
      id: 2,
      name: "Calvin Klein",
      description: "Hoodie",
      price: "780 EGY",
      delivery: "Free Delivery",
      img: "/images/image 8.png",
    },
    {
      id: 3,
      name: "Shein",
      description: "Printed Notched Neck Longline",
      price: "780 EGY",
      delivery: "Free Delivery",
      img: "/images/image 8.png",
    },
    {
      id: 4,
      name: "Pull&Bear",
      description: "Jacket With Faux Shearling",
      price: "780 EGY",
      delivery: "Free Delivery",
      img: "/images/image 8.png",
    },
    {
      id: 5,
      name: "Guess",
      description: "Castalia Multi Clutch",
      price: "780 EGY",
      delivery: "Free Delivery",
      img: "/images/image 8.png",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={600}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      className="product-swiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="product-slide">
          <div className="product-card">
            <div className="product-label">New Arrival</div>
            <div className="product-icons">
              <FaHeart className="icon heart-icon" />
              <FaShoppingCart className="icon cart-icon" />
            </div>
            <img src={product.img} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-delivery">{product.delivery}</p>
            <button className="product-button">
              GET IT <span>TOMORROW</span>
            </button>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev">
        <FaChevronLeft size={30} color="black" />
      </div>
      <div className="swiper-button-next">
        <FaChevronRight size={30} color="black" />
      </div>
    </Swiper>
  );
};

export default ProductSwiper;
