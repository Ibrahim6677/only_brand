import React, { useEffect } from "react";
import { FaTrash, FaHeart, FaTag, FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateCart, removeFromCart } from "../Redux/OnlyBrandSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // استرجاع المنتجات من Redux أو من localStorage
  const products = useSelector((state) => state.OnlyBrand.products) || [];
  
  useEffect(() => {
    // تحميل البيانات من localStorage إذا كانت الحالة فارغة
    if (products.length === 0) {
      const savedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
      if (savedProducts.length > 0) {
        dispatch(updateCart(savedProducts));
      }
    }
  }, [dispatch, products.length]);

  // حفظ البيانات في localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }, [products]);

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[30rem] text-center px-4">
        <div className="flex flex-col items-center mb-4">
          <div className="rounded-full p-4 mb-3">
            {/* SVG Icon */}
          </div>
          <h1 className="text-lg font-semibold text-gray-800 mb-1">
            Oops! We couldn't find what you were looking for!
          </h1>
          <p className="text-gray-600 text-sm mb-3">
            Oops! We couldn't find what you were looking for!
          </p>
        </div>
        <Link
          to="/"
          className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Back To Home
        </Link>
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
                <button
                  className="remove-button"
                  onClick={() => handleRemove(product.id)}
                >
                  <FaTrash />
                  <span onClick={() => removeFromCart(product.id)}>Remove</span>
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
                {products.reduce((total, product) => total + product.price, 0)}{" "}
                EGY
              </span>
            </p>
            <p>
              Delivery Shipping <span>50 EGY</span>
            </p>
            <p>
              Total (VAT){" "}
              <span>
                {products.reduce((total, product) => total + product.price, 0) +
                  50}{" "}
                EGY
              </span>
            </p>
          </div>
          <Link to="/checkout">
            <button className="checkout-button">
              <FaShoppingCart />
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  function handleRemove(productId) {
    const updatedProducts = products.filter((product) => product.id !== productId);
    dispatch(updateCart(updatedProducts));
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  }
};

export default Cart;
