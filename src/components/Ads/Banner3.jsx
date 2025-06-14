import '../../CSS/banner3.css'
import React from 'react';

export const Banner3 = () => {
    return (
        <>
            <div className="banner-container">
                <div className="banner-details">
                    <p className="offer-text"><u>UNLIMITED SALE</u></p>
                    <h1 className="discount">50% OFF!</h1>
                    <p className="description">Enjoy a massive 50% off on all fashion items. Limited time offer!</p>
                    <button className="explore-btn">Shop Now</button>
                </div>
                <div className="banner-image">
                    <img
                        src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Fashion Sale"
                    />
                </div>
            </div>
        </>
    );
};
