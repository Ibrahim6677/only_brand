import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginSignupModal = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-200">
      {/* قسم إنشاء حساب جديد */}
      <div className="bg-white shadow-lg rounded-lg px-4 sm:px-8 py-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          إنشاء حساب جديد
        </h2>

        <form className="space-y-6">
          {/* اسم الدخول */}
          <TextField
            fullWidth
            label="اسم الدخول"
            variant="outlined"
            placeholder="اسم الدخول"
            className="mb-4"
          />

          {/* البريد الإلكتروني */}
          <TextField
            fullWidth
            label="البريد الإلكتروني"
            type="email"
            variant="outlined"
            placeholder="البريد الإلكتروني"
            className="mb-4"
          />

          {/* كلمة السر */}
          <TextField
            fullWidth
            label="كلمة السر"
            type="password"
            variant="outlined"
            placeholder="كلمة السر"
            className="mb-4"
          />

          {/* تذكرني */}
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
              />
            }
            label="تذكرني"
          />

          {/* أزرار */}
              <Link to="Regester">
              
              
               <Button
            fullWidth
            type="submit"
            variant="contained"
            color="success"
            className="text-lg font-medium"
          >

            تسجيل الدخول
          </Button>
          
          </Link>


          <Button
            fullWidth
            type="button"
            variant="contained"
            color="primary"
            className="text-lg font-medium flex items-center justify-center gap-2"
            startIcon={<span className="font-bold">G</span>}
          >
            سجل الدخول عن طريق جوجل
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupModal;
