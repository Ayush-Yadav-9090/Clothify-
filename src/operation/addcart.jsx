import React, { createContext, useState, useContext } from 'react';

// Create a Context for Cart
const CartContext = createContext();

// Custom Hook to use CartContext
export const useCart = () => useContext(CartContext);

// CartProvider component to wrap around your app (provides cart state)
export const CartProvider = ({ children }) => {
    // State to store cart items
    const [cartItems, setCartItems] = useState([]);

    // State to store search input value (for product searching)
    const [value, setValue] = useState("");

    // State to store search query (you could simplify by using only one of 'value' or 'searchQuery')
    const [searchQuery, setSearchQuery] = useState("");

    // State to store selected product size
    const [size, setsize] = useState("");

    // Function to add item to cart
    const addToCart = (product, quantity, size) => {
        if (quantity <= 0) return; // Prevent adding zero or negative quantity

        // Check if the product already exists in cart
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // If product exists, update its quantity and size
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += quantity;
            updatedCartItems[existingProductIndex].size = size;
            setCartItems(updatedCartItems);
        } else {
            // If product doesn't exist, add new product to cart
            setCartItems([...cartItems, { ...product, quantity, size }]);
        }
    };

    // Function to remove item from cart based on its id
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    // Function to update the search query
    const search = (query) => {
        setSearchQuery(query);
    };

    // Function to update selected size (currently not heavily used)
    const product_size = (size) => {
        setsize(size);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, search, value, setValue, product_size }}>
            {children}
        </CartContext.Provider>
    );
};


