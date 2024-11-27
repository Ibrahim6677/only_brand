import React from "react";
import { FaTrash, FaHeart, FaTag, FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.OnlyBrand.products);

  // تحقق من وجود المنتجات
  if (!products || products.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty!</h2>
        <p>Add some products to your cart to get started.</p>
      </div>
    );
  }

  return (
    <div className="details-cart-container">
      <h2>Cart Details</h2>
      <div className="cart-details">
        {products.map((product) => (
          <div className="cart-item" key={product.id}>
            <img
              src={product.imageCover}
              alt="Product"
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.title}</p>
              <p>Size: 2XL</p>
              <div className="price-and-delivery">
                <span className="price">{product.price} EGY</span>
                <span className="delivery-info">
                  Free Delivery{" "}
                  <span className="delivery-day tomorrow">
                    GET IT <span>TOMORROW</span>
                  </span>
                </span>
              </div>
              <div className="actions">
                <button className="remove-button">
                  <FaTrash />
                  <span>Remove</span>
                </button>
                <button className="wishlist-button">
                  <FaHeart />
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
        ))}

        {/* Checkout Summary and Coupon */}
        <div className="checkout-summary">
          <div className="coupon-container">
            <input
              type="text"
              placeholder="Enter Coupon Code Here"
              className="coupon-input"
            />
            <button className="apply-button">
              <FaTag />
              Apply
            </button>
          </div>
          <div className="summary-info">
            <p>
              {products.length} Items{" "}
              <span>
                {products.reduce(
                  (total, product) => total + product.price,
                  0
                )}{" "}
                EGY
              </span>
            </p>
            <p>
              Delivery Shipping <span>50 EGY</span>
            </p>
            <p>
              Total (VAT){" "}
              <span>
                {products.reduce(
                  (total, product) => total + product.price,
                  0
                ) + 50}{" "}
                EGY
              </span>
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
};

export default Cart;
