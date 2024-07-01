import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({}); // State to hold cart items

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

  // Function to add item to cart
  const addToCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId]) {
        updatedCartItems[productId] += 1; // Increment quantity if already in cart
      } else {
        updatedCartItems[productId] = 1; // Add new item to cart
      }
      return updatedCartItems;
    });
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId] > 1) {
        updatedCartItems[productId] -= 1; // Decrease quantity if more than 1
      } else {
        delete updatedCartItems[productId]; // Remove item if only 1 left
      }
      return updatedCartItems;
    });
  };

  // Function to get total count of items in cart
  const getCartCount = () => {
    let totalCount = 0;
    Object.values(cartItems).forEach((quantity) => {
      totalCount += quantity;
    });
    return totalCount;
  };

  const clearCart = () => {
    setCartItems({});
  };

  const contextValues = {
    products,
    addToCart,
    removeFromCart,
    cartItems,
    getCartCount,
    clearCart
  };

  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
