import React from "react";
import {
  FaRegHeart, // أيقونة القلب الفارغة
  FaRegUser, // أيقونة المستخدم الفارغة
} from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // أيقونات فارغة للبحث وعربة التسوق
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Navbar Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="/images/logo yet.png"
              alt="Toggle navigation"
              className="navbar-toggler-image"
            />
          </button>

          {/* Logo - وضع الشعار في المنتصف */}

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Links Menu */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#new-arrival">
                  New Arrival
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#men">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#women">
                  Women
                </a>
              </li>
            </ul>
            <li
              style={{
                listStyle: "none",
                width: "100px",
              }}
            >
              <img
                className="img-home-nav"
                src="images/logo yet.png"
                alt="Logo"
              />
            </li>

            {/* Icons Links */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#search">
                  <FiSearch /> {/* أيقونة البحث الفارغة */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#wishlist">
                  <FaRegHeart /> {/* أيقونة القلب الفارغة */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cart">
                  <FiShoppingCart /> {/* أيقونة عربة التسوق الفارغة */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">
                  <FaRegUser /> {/* أيقونة المستخدم الفارغة */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
