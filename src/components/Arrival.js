import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; // أيقونة القلب الملون
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useLoaderData } from 'react-router-dom';

const items = [
  { id: 1, brand: 'Adidas', type: 'Grey Shoes', price: '780 EGY', image: 'images/products/image 12.png' },
  { id: 2, brand: 'Bershka', type: 'Oversize Jacket', price: '780 EGY', image: 'images/products/image 20.png' },
  { id: 3, brand: 'Tommy Hilfiger', type: 'Hoodie', price: '780 EGY', image: 'images/products/image 21.png' },
  { id: 4, brand: 'Zara', type: 'Oversize Coat', price: '780 EGY', image: 'images/products/image 22.png' },
  { id: 5, brand: 'Timberland', type: 'Premium Boot', price: '780 EGY', image: 'images/products/image 23.png' },
  { id: 6, brand: 'Nike', type: 'Running Shoes', price: '780 EGY', image: 'images/products/image 27.png' },
  { id: 7, brand: 'Puma', type: 'Sneakers', price: '780 EGY', image: 'images/products/image 32.png' },
];

const Arrival = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = useLoaderData()
  const ProductsData = data.data

  // إدارة حالة الأيقونات المحبوبة لكل بطاقة
  const [likedItems, setLikedItems] = useState({}); // مفتاح `id` يحمل حالة كل عنصر

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });
  const itemsToShow = isMobile ? 2 : isTablet ? 3 : 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % ProductsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - itemsToShow + ProductsData.length) % ProductsData.length
    );
  };

  const visibleItems = ProductsData
    .slice(currentIndex, currentIndex + itemsToShow)
    .concat(
      items.slice(0, Math.max(0, currentIndex + itemsToShow - ProductsData.length))
    );

  // تغيير حالة الإعجاب عند النقر
  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 w-full p-4">
      {/* البطاقات */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className={`grid gap-4 ${
            isMobile
              ? 'grid-cols-2'
              : isTablet
              ? 'grid-cols-3'
              : 'grid-cols-5'
          } w-full`}
        >
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.id + index}
              className="p-4 rounded-md flex flex-col items-center relative"
              style={{backgroundColor: '#E6E6E6'}}
            >
              {/* شارة "New Arrival" */}
              <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                New Arrival
              </div>
              {/* أيقونة القلب */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => toggleLike(item.id)}
              >
                {likedItems[item.id] ? (
                  <FavoriteIcon className="text-red-500" />
                ) : (
                  <FavoriteBorderIcon className="text-gray-500" />
                )}
              </div>
              {/* محتوى البطاقة */}
              <img
                src={item.imageCover}
                alt={item.type}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="font-semibold text-lg mt-2">{item.brand}</h3>
              <p className="text-gray-500">{item.type}</p>
              <p className="text-gray-900 font-bold">{item.price}</p>
              <p className="text-green-500 text-sm">Free Delivery</p>
              <p className="font-bold mt-1">GET IT <span className='bg-red-500 italic'>TOMORROW</span></p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* الأزرار */}
      <div className="flex justify-between items-center mt-6 w-full">
        <button
          onClick={handlePrevious}
          className="text-white bg-gray-800 py-2 px-4 rounded-full transition duration-300"
        >
          <ArrowCircleLeftIcon />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-gray-800 py-2 px-4 rounded-full transition duration-300"
        >
          <ArrowCircleRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Arrival;
