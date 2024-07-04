import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);





const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  const getDefaultCart = () =>{
    let cart = {};
    for(let i=1;i<products.length+1;i++){
      cart[i] =0;
    }
    return cart;
  
  }

  
 // Fetch products from API
const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response is not ok");
    }
    const data = await response.json();
    setProducts(data.products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
};

useEffect(() => {
  fetchProducts();
}, []);


//initialization of cart;
useEffect(()=>{
  if(products.length>0){
    setCartItems(getDefaultCart());
  }
},[products])

  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]: prev[itemId] +1}));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
}

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
      if (cartItems[item] > 0) {
          let itemInfo = products.find(product => product.id === Number(item));
          if (itemInfo) {
              totalAmount += itemInfo.price * cartItems[item];
          }
      }
  }
  return totalAmount;
}

const getTotalCartItems = () => {
  let totalItem = 0;
  for (const item in cartItems) {
      if (cartItems[item] > 0) {
          totalItem += cartItems[item];
      }
  }
  return totalItem;
}

  const contextValues = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
