import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const TrendingNow = () => {
  const products = [
    {
      id: 1,
      name: "Adidas",
      description: "Grey Shoes",
      price: "780 EGP",
      delivery: "Free Delivery",
      img: "/images/image 42.png",
    },
    {
      id: 2,
      name: "Bershka",
      description: "Oversize Jacket",
      price: "780 EGP",
      delivery: "Free Delivery",
      img: "/images/image 42.png",
    },
    {
      id: 3,
      name: "Tommy Hilfiger",
      description: "Hoodie",
      price: "780 EGP",
      delivery: "Free Delivery",
      img: "/images/image 42.png",
    },
    {
      id: 4,
      name: "Zara",
      description: "Oversize Coat",
      price: "780 EGP",
      delivery: "Free Delivery",
      img: "/images/image 42.png",
    },
    {
      id: 5,
      name: "Timberland",
      description: "Premium Boot",
      price: "780 EGP",
      delivery: "Free Delivery",
      img: "/images/image 42.png",
    },
  ];

  return (
    <div className="trending-now-container">
      <h2>Trending Now</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: true }} // التأخير 2000 مللي ثانية (2 ثانية)
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product-slide">
            <div className="product-card">
              <div className="product-label">New Arrival</div>
              <div className="product-icons">
                <FaHeart className="icon heart-icon" />
                <FaShoppingCart className="icon cart-icon" />
              </div>
              <img
                src={product.img}
                alt={product.name}
                className="product-img"
              />
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
      </Swiper>
    </div>
  );
};

export default TrendingNow;
