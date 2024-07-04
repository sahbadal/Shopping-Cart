import React, { useContext } from "react";
import { ShopContext } from "../context/StoreContext";
import { Button } from "flowbite-react";

const CartItems = () => {
  const { products,addToCart } = useContext(ShopContext);

  return (
    <div className="w-[80%] m-auto grid grid-cols-4 gap-10 py-14">
      {products.map((item, index) => (
        <div key={index} className="shadow rounded-md p-6 min-h-[550px] flex flex-col justify-between">
          <div className="flex flex-col h-full">
            <img src={item.thumbnail} alt={item.title} />
            <h2 className="text-center text-xl font-semibold my-3">{item.title}</h2>
            <p className="text-pretty mb-4">{item.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="shadow p-2 rounded">
              <p className="text-red-400">${item.price}</p>
              <p>{item.rating}⭐</p>
            </div>
            <Button color="blue" onClick={()=>addToCart(item.id)+alert("Added To Cart")}>ADD TO CART</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
