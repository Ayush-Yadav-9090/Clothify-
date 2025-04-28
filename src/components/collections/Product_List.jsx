import React from 'react';
import { useCart } from '../../operation/addcart';
import './product_list.css'; 
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Product_List = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (id) => {
    removeFromCart(id);  // this remove the product on the base of id in cart item

    toast.success('Item deleted', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

   //  Display the size
  const renderSize = (size) => {
    return size ? <p>Size: {size}</p> : null;
  };




  return (
    <div className="cart-container">
      <h1>Your Cart Items</h1>

      {cartItems.length === 0 ? (
        
        // if cart is empty then display message this 
        
        <h3>Your cart is empty!</h3>
      ) : (

        // Otherwise run this div
        
        <div className="cart-list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              {/* This navlink help to go to the product and update a quantity and size */}
              <NavLink to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
              </NavLink>

              <div className="cart-item-details">
                <h2>{item.title}</h2>
                {/* This renderSize is run for dispaly a size */}
                {renderSize(item.size)}
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-item">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Display  a total price */}
      <h2 className='totalprice'>Total Price: ${totalPrice}</h2>
    </div>
  );
};

