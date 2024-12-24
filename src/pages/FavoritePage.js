import React from "react";
import { ShoppingCart, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "../Redux/OnlyBrandSlice";
import { Link } from "react-router-dom";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const Favoriteproducts = useSelector(
    (state) => state.OnlyBrand.favoriteproducts
  );

  // Render empty state if no items in wishlist
  if (!Favoriteproducts || Favoriteproducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[30rem] text-center px-4">
        <div className="flex flex-col items-center mb-4">
          <div className="rounded-full p-4 mb-3">
            <svg
              width="126"
              height="127"
              viewBox="0 0 126 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M8.14783 114.624C6.2689 115.334 4.52453 115.124 2.91472 113.994C1.30491 112.864 0.5 111.271 0.5 109.216V17.4912C0.5 16.1512 0.818049 14.9287 1.45415 13.8237C2.09024 12.7187 3.01503 11.9512 4.2285 11.5212L37.1979 0.0387421L81.2353 15.7887L110.285 4.31374C112.164 3.59874 113.909 3.73374 115.518 4.71874C117.128 5.70374 117.933 7.17374 117.933 9.12874V59.4762C116.852 58.2362 115.717 57.0787 114.528 56.0037C113.339 54.9287 112.027 53.9462 110.594 53.0562V12.2112L84.9051 21.9987V46.1937C83.5595 46.2887 82.2971 46.4112 81.1179 46.5612C79.9435 46.7112 78.7594 46.9837 77.5655 47.3787V21.9912L40.8676 8.89624V101.761L8.14783 114.624ZM7.83957 106.711L33.5281 96.6463V8.89624L7.83957 17.8362V106.711ZM87.7308 106.044C92.5456 106.044 96.5652 104.434 99.7897 101.214C103.014 97.9937 104.639 93.8362 104.663 88.7412C104.693 83.8162 103.083 79.7012 99.8338 76.3962C96.5799 73.0862 92.5431 71.4312 87.7235 71.4312C82.9038 71.4312 78.8793 73.0862 75.6499 76.3962C72.4205 79.7062 70.8009 83.8212 70.7911 88.7412C70.7813 93.6612 72.4009 97.7762 75.6499 101.086C78.8989 104.396 82.9234 106.051 87.7235 106.051M87.7235 113.551C81.064 113.551 75.3539 111.119 70.5929 106.254C65.832 101.389 63.4515 95.5512 63.4515 88.7412C63.4515 81.9312 65.832 76.0938 70.5929 71.2288C75.3539 66.3638 81.0665 63.9312 87.7308 63.9312C94.3951 63.9312 100.105 66.3638 104.861 71.2288C109.617 76.0938 111.998 81.9312 112.003 88.7412C112.003 91.5212 111.597 94.1437 110.784 96.6087C109.972 99.0737 108.798 101.336 107.261 103.396L125.273 121.651L120.223 126.961L102.212 108.556C100.196 110.221 97.9817 111.471 95.5695 112.306C93.1572 113.131 90.5443 113.544 87.7308 113.544"
                fill="#1E1E1E"
              />
            </svg>
          </div>
          <h1 className="text-lg font-semibold text-gray-800 mb-1">
            Oops! We couldn't find what you were looking for!
          </h1>
          <p className="text-gray-600 text-sm mb-3">Your wishlist is empty.</p>
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
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
      <p className="text-gray-500 text-sm mb-6">
        Showing {Favoriteproducts.length} Results
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Favoriteproducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="relative">
              <img
                src={product.imageCover}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              {product.isSale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Sale
                </span>
              )}
              {product.isNewArrival && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New Arrival
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-md font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{product.title}</p>
              <h3 className="text-md font-medium text-gray-800">
                {product.price} EGP
              </h3>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 flex items-center gap-2"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.imageCover,
                        description: product.description,
                        quantity: 1,
                      })
                    )
                  }
                >
                  <ShoppingCart fontSize="small" />
                  Add to Cart
                </button>
                <button
                  className="text-red-500 hover:text-red-700 transition text-sm"
                  onClick={() => {
                    dispatch(removeFromWishlist(product.id));
                  }}
                >
                  <Delete fontSize="small" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;