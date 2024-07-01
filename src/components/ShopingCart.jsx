import React, { useContext } from "react";
import { ShopContext } from "../context/StoreContext";

const ShopingCart = () => {
  const { products, cartItems, addToCart, removeFromCart,clearCart } = useContext(ShopContext);

  // Function to calculate total price for a product
  const calculateTotalPrice = (productId) => {
    const product = products.find((item) => item.id === productId);
    return product ? product.price * cartItems[productId] : 0;
  };

  return (
    <div className="w-[80%] m-auto py-14">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <>
          {Object.keys(cartItems).map((productId) => {
            const product = products.find((item) => item.id === parseInt(productId));
            return (
              <div key={productId} className="flex items-center justify-between mb-6 border-b pb-4">
                <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-grow ml-4">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-500" onClick={() => removeFromCart(parseInt(productId))}>-</button>
                    <p className="mx-2">{cartItems[productId]}</p>
                    <button className="text-gray-500" onClick={() => addToCart(parseInt(productId))}>+</button>
                    <button className="text-red-500 ml-4" onClick={() => removeFromCart(parseInt(productId))}>Remove</button>
                  </div>
                </div>
                <p className="text-red-400">Total: ${calculateTotalPrice(parseInt(productId)).toFixed(2)}</p>
              </div>
            );
          })}
          <div className="mt-8 flex justify-between">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={clearCart}>
              Clear Cart
            </button>
            <div>
              <p className="text-xl font-semibold">Total:</p>
              <p className="text-red-500 text-2xl font-bold">
                ${Object.keys(cartItems).reduce((acc, productId) => acc + calculateTotalPrice(parseInt(productId)), 0).toFixed(2)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopingCart;
