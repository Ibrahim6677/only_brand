import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';  // استيراد أيقونة Close
import { Link } from 'react-router-dom';
import Regester from "./Regester"
const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false); // حالة للتحكم في النافذة

  // دالة لإظهار نافذة تسجيل الدخول
  const handleSignInOpen = () => {
    setIsSignInOpen(true);
    document.body.style.overflow = "hidden"; // تعطيل التمرير في الصفحة الرئيسية
  };

  // دالة لإغلاق نافذة تسجيل الدخول
  const handleSignInClose = () => {
    setIsSignInOpen(false);
    document.body.style.overflow = "auto"; // إعادة التمرير
  };

  return (
    <div className="flex justify-between items-center lg:p-4 md:p-4">
      {/* روابط التنقل على الشاشات الكبيرة */}
      <div className="flex justify-between md:px-6 lg:px-8 md:hidden lg:flex sm:hidden xs:hidden">
        <Link to="/"><li className="mr-10 list-none cursor-pointer text-gray-600">New Arrival</li></Link>
        <Link to="/men"><li className="mr-10 list-none cursor-pointer text-gray-600">Men</li></Link>
        <Link to="/women"><li className="mr-10 list-none cursor-pointer text-gray-600">Women</li></Link>
      </div>

      {/* قائمة منسدلة للتنقل على الشاشات الصغيرة */}
      <select className="md-text-sm lg:hidden md:flex xs:hidden pr-5 xs-text-xs w-30">
        <option><Link to="/">New Arrival</Link></option>
        <option><Link to="/men">Men</Link></option>
        <option><Link to="/women">Women</Link></option>
      </select>

      {/* الشعار */}
      <div className="md:flex lg:flex xs:hidden sm:hidden">
        <Link to="/"><img src="/images/logo/logo yet.png" width={130} alt="logo" className="cursor-pointer"/></Link>
      </div>

      {/* icon */}
      <div className="flex justify-between sm:hidden xs:hidden lg:flex md:flex space-x-6">
        <li className="lg:px-8 list-none cursor-pointer">
          <Link to="/search"><SearchIcon className="text-gray-600"/></Link>
        </li>
        <li className="lg:px-8 list-none cursor-pointer">
          <FavoriteBorderIcon className="text-gray-600"/>
        </li>
        <li className="lg:px-8 list-none cursor-pointer">
          <Link to="/cart"><ShoppingCartIcon className="text-gray-600"/></Link>
        </li>
        <li className="lg:px-5 list-none cursor-pointer">
          <PersonOutlineIcon className="text-gray-600" onClick={handleSignInOpen} />
        </li>
      </div>

      <div className="flex flex-col items-center p-4 space-y-4 w-full mx-auto sm:flex xs:flex md:hidden lg:hidden">
      {/* الشريط العلوي */}
        <div className="flex items-center justify-between w-full max-w-md">
          {/* القائمة المنسدلة */}
          <select className="xs-text-xs sm:w-25">
            <option><Link to="/">New Arrival</Link></option>
            <option><Link to="/men">Men</Link></option>
            <option><Link to='/women'>Women</Link></option>
          </select>

          {/* الشعار */}
          <img className='cursor-pointer sm-w-60 xs-w-20 xs:px-4' src="/images/logo/logo yet.png" width={130} alt="logo" />

          {/* أيقونة المفضلة */}
            <FavoriteBorderIcon />
          <shoppingCartIcon />
        </div>

      {/* مربع البحث */}
        <div className="flex items-center w-full max-w-md p-2 border border-gray-300 rounded-full bg-white">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search For Only Brand"
            className="flex-grow px-2 text-gray-700 bg-transparent focus:outline-none"
          />
          {/* <FaSync className="text-gray-500 mr-2 cursor-pointer" /> */}
        </div>
      </div>
      {/* sign in */}
      {isSignInOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleSignInClose} // يغلق النافذة عند الضغط على الخلفية
        >
          <div
            className="secform bg-white p-6 rounded-lg shadow-lg w-96 relative signInModal"
            onClick={(e) => e.stopPropagation()} // يمنع غلق النافذة عند الضغط داخلها
          >
            {/* button Close */}
            <button
            onClick={handleSignInClose}
            className="absolute top-0 right-3 text-gray-600 cursor-pointer"
            style={{
              padding: '0 10px',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: 'none',
              zIndex: 1000, 
              top: '-12rem',
              transition: 'top 0.3s ease',
            }}
            >
              <CloseIcon className="text-gray-600" />
            </button>
            <Regester/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
