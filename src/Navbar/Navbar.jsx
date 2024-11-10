import React from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
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
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo - وضع الشعار في المنتصف */}
          <a className="navbar-brand mx-lg-auto" href="##">
            <img
              src="/public/images/logo yet.png"
              alt=""
              style={{ height: "30px"}}
            />
          </a>

          {/* Navbar Content - يتم طيها في الشاشات الصغيرة */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Links Menu - نصوص القائمة */}
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
            <ul>
              <li style={{listStyle: "none"}}>
                <img
                  className="img-home-nav"
                  src="/images/logo yet.png"
                  alt=""
                />
              </li>
            </ul>
            {/* Icons Links - أيقونات القائمة */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#search">
                  <FaSearch />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#wishlist">
                  <FaHeart />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cart">
                  <FaShoppingCart />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">
                  <FaUser />
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
