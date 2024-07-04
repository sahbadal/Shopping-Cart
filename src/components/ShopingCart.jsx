import React, { useContext } from "react";
import { Button } from "flowbite-react";
import { ShopContext } from "../context/StoreContext";
import { assets } from "../assets/assets";

const ShoppingCart = () => {
  const { products, cartItems, addToCart, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => {
                    if (item&&cartItems[item.id] > 0) {
                      return (
                        <tr key={item.id}>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img className="h-16 w-16 mr-4 shadow rounded" src={item.thumbnail} alt="Product image" />
                              <span className="font-semibold">{item.title}</span>
                            </div>
                          </td>
                          <td className="py-4">${item.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button className="text-md font-medium border border-solid border-gray-300 py-1 px-2 rounded" onClick={()=>removeFromCart(item.id)}>-</button>
                              <span className="text-center w-8 ">{cartItems[item.id]}</span>
                              <button className="text-md font-medium border border-solid border-gray-300 py-1 px-2 rounded" onClick={()=>addToCart(item.id)}>+</button>
                            </div>
                          </td>
                          <td className="py-4">${item.price * cartItems[item.id]}</td>
                          <td><img onClick={()=>removeFromCart(item.id)} src={assets.remove_icon} className="w-5 cursor-pointer ml-4"/></td>
                        </tr>
                      );
                    }
        
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getTotalCartAmount()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>Free</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${getTotalCartAmount()}</span>
              </div>
              <Button className="w-full bg-blue-600" onClick={()=>alert("Order Placed")}>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ShoppingCart;
