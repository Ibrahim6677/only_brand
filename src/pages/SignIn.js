import React from "react";

const LoginSignupModal = () => {

    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-2000 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[800px] p-6 flex">
        {/* قسم تسجيل الدخول */}
        <div className="w-1/2 border-r pr-6">
          <h2 className="text-xl font-bold mb-4 text-center">تسجيل الدخول</h2>
          <form>
            <label className="block mb-2 text-sm">اسم الدخول أو الإيميل</label>
            <input
              type="text"
              placeholder="اسم الدخول أو الإيميل"
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2 text-sm">كلمة السر</label>
            <input
              type="password"
              placeholder="كلمة السر"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm">تذكرني</label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full p-2 rounded mb-4"
            >
              تسجيل الدخول
            </button>
            <p className="text-sm text-center text-blue-500 cursor-pointer">
              نسيت كلمة السر؟
            </p>
          </form>
        </div>

        {/* قسم إنشاء حساب جديد */}
        <div className="w-1/2 pl-6">
          <h2 className="text-xl font-bold mb-4 text-center">إنشاء حساب جديد</h2> 
          
          <form>
            <label className="block mb-2 text-sm">اسم الدخول</label>
            <input
              type="text"
              placeholder="اسم الدخول"
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2 text-sm">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2 text-sm">كلمة السر</label>
            <input
              type="password"
              placeholder="كلمة السر"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="rememberMeNew" className="mr-2" />
              <label htmlFor="rememberMeNew" className="text-sm">تذكرني</label>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white w-full p-2 rounded mb-4"
            >
              إنشاء حساب جديد   
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white w-full p-2 rounded flex items-center justify-center"
            >
              <span className="mr-2">G</span>
              سجل الدخول عن طريق جوجل
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
