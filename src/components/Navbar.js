import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';  // استيراد أيقونة Close
import { Link } from 'react-router-dom';
import SignIn from '../pages/SignIn'; // ../ يعني الانتقال إلى المجلد العلوي ثم إلى مجلد pages
import "../pages/Singin.css";

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

      {/* أيقونات أخرى على الشاشات الكبيرة */}
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

      {/* نافذة تسجيل الدخول */}
      {isSignInOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleSignInClose} // يغلق النافذة عند الضغط على الخلفية
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 relative signInModal"
            onClick={(e) => e.stopPropagation()} // يمنع غلق النافذة عند الضغط داخلها
          >
            {/* زر الإغلاق باستخدام أيقونة Close */}
            <button
  onClick={handleSignInClose}
  className="absolute top-0 right-3 text-gray-600 cursor-pointer"
  style={{
    padding: '0 10px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: 'none',
    zIndex: 1000,  // تأكيد ظهور الأيقونة فوق العناصر الأخرى
    top: '-12rem',  // رفع الأيقونة للأعلى
    transition: 'top 0.3s ease', // تأثير الحركة
  }}
>
  <CloseIcon className="text-gray-600" />
</button>

            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
