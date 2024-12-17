import React from 'react';
import { ShoppingCart, Delete } from '@mui/icons-material';

const products = [
  { id: 1, name: 'H&M Relaxed Fit T-Shirt', price: '780 EGY', isSale: true, isNewArrival: false },
  { id: 2, name: 'H&M Relaxed Fit T-Shirt', price: '780 EGY', isSale: false, isNewArrival: true },
  { id: 3, name: 'H&M Relaxed Fit T-Shirt', price: '780 EGY', isSale: true, isNewArrival: false },
  { id: 4, name: 'H&M Relaxed Fit T-Shirt', price: '780 EGY', isSale: false, isNewArrival: true },
  
];

const Wishlist = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img src="images/homeslide/image.jpg" alt={product.name} className="w-full h-auto" />
              {product.isSale && <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm font-bold rounded-full">Sale</span>}
              {product.isNewArrival && <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-sm font-bold rounded-full">New Arrival</span>}
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{product.price}</p>
              <button className="mt-4  ml-24 bg-black text-white py-2 px-6 rounded-full hover:bg-gray-700 flex items-center justify-center">
                <ShoppingCart className="mr-2 " /> Add to Cart
              </button>
              <button className="mt-2  ml-2  text-red-500 flex items-center justify-center">
                <Delete className="mr-2" /> Remove
              </button> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
