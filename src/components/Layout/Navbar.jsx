import React, { useState } from 'react';
import '../../CSS/navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Operation/AddCart';

export const Navbar = () => {


    // This value is come from a (../Operation/addcart) this file
    const { cartItems, search, value, setValue } = useCart();
    // Take a total numbers of items is add to a cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [menuOpen, setMenuOpen] = useState(false);

    //  Serach a items
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setValue(query);
        search(query);
    };


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
               
                <h2 className="logo">
                    {/* After click on Clothify it goes to home page  */}
                    <Link to="/Home">CLOTHIFY</Link>
                </h2>

                {/* Show  in a mobile device */}
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? '✖' : '☰'}
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/Home" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link to="/Collection" onClick={() => setMenuOpen(false)}>COLLECTION</Link></li>
                    <li><Link to="/About" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                    <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
                </ul>

                <div className="nav-actions">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search items..."
                        className="search"
                        value={value}
                        onChange={handleSearchChange}
                    />
                    <button className="search-btn">Search</button>


                    {/* Profile */}
                    <div className="profile">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
                            width="40"
                            height="30"
                            alt="Profile"
                        />
                        <div className="profile-dropdown">
                            <p><Link to="/My_Profile">My Profile</Link></p>
                            <p><Link to="/Login">Log In</Link></p>
                        </div>
                    </div>

                    <Link to="/Product_List" className="cart-icon">
                        <img
                            src="https://images.pexels.com/photos/5926226/pexels-photo-5926226.jpeg?auto=compress&cs=tinysrgb&w=600"
                            width="40"
                            height="30"
                            alt="Cart"
                        />
                        <span className="cart-count">{totalItems}</span>
                    </Link>

                </div>
            </div>
        </nav>
    );
};
