import "./banner2.css"
import React from 'react'
// import{bin_icon} from "./Image/p_img1.png"



export const Banner2 = () => {
    return (
        <div className="heading">
            <div className="heading1">
                <p>NEW ARRIVAL</p>
                <h1>JUST FOR YOU</h1>
                <button>Shop Now</button>
            </div>

            <div className="image">
                <img src="https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion Model" />
            </div>

            <div className="heading2">
                <h2>FOR ONLINE ORDER</h2>
                <hr />
                <h3>30% OFF</h3>
                <hr />
            </div>
        </div>



    );
};
