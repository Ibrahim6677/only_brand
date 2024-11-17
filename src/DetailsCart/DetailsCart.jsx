import React from "react";
import { FaTrash, FaHeart, FaTag, FaShoppingCart } from "react-icons/fa"; // استيراد الأيقونات المطلوبة
import "./Cart.css";

function DetailsCart() {
  return (
    <div className="details-cart-container">
      <h2>Cart Details</h2>
      <div className="cart-details">
        {/* Product and Details */}
        <div className="cart-item">
          <img
            src="/images/image 27.png"
            alt="Product"
            className="product-image"
          />
          <div className="product-info">
            <h3>Pull&Bear</h3>
            <p>Jacket With Faux Shearling</p>
            <p>Size: 2XL</p>
            <div className="price-and-delivery">
              <span className="price">780 EGY</span>
              <span className="delivery-info">
                Free Delivery{" "}
                <span className="delivery-day tomorrow">
                  GET IT <span>TOMORROW</span>
                </span>
              </span>
            </div>
            <div className="actions">
              <button className="remove-button">
                <FaTrash /> {/* استخدام الأيقونة هنا */}
                <span>Remove</span>
              </button>
              <button className="wishlist-button">
                <FaHeart /> {/* استخدام الأيقونة هنا */}
                <span>Add To Wishlist</span>
              </button>
              <select className="pieces-select">
                <option>1 Piece</option>
                <option>2 Pieces</option>
                <option>3 Pieces</option>
              </select>
            </div>
          </div>
        </div>

        {/* Checkout Summary and Coupon */}
        <div className="checkout-summary">
          <div className="coupon-container">
            <input
              type="text"
              placeholder="Enter Coupon Code Here"
              className="coupon-input"
            />
            <button className="apply-button">
              <FaTag /> {/* استخدام الأيقونة هنا */}
              Apply
            </button>
          </div>
          <div className="summary-info">
            <p>
              1 Item <span>750EGY</span>
            </p>
            <p>
              Delivery Shipping <span>50EGY</span>
            </p>
            <p>
              Total (VAT) <span>800EGY</span>
            </p>
          </div>
          <button className="checkout-button">
            <FaShoppingCart />
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsCart;
