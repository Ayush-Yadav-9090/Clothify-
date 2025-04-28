import React from 'react';
import { useParams } from 'react-router-dom'; // To get the product ID from URL
import { product } from './Image_Details'; // Importing product data
import { useState, useEffect } from 'react';
import { useCart } from '../../operation/addcart'; // Custom hook to manage cart
import "./discribe.css"; 
import { toast } from 'react-toastify'; 

export const Discribe = () => {
    const { id } = useParams(); // Getting product ID from route parameters

    // State variables
    const [productDetails, setProductDetails] = useState(null); // Store details of selected product
    const [quantity, setQuantity] = useState(1); // Quantity to be added to cart
    const { addToCart } = useCart(); // Cart operation hook
    const [size, setSize] = useState(''); // Selected size

    // Function to handle adding product to cart
    const handleAddToCart = () => {
        if (size) {
            // Add to cart only if a size is selected
            addToCart(productDetails, quantity, size);

            // Show success notification
            toast.success('Successfully Item Added', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            // Warn user to select a size
            toast.success("Please select a size", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    // Fetch product details whenever the id changes
    useEffect(() => {
        const selectedProduct = product.find(p => p.id === parseInt(id)); // Find product matching the ID
        if (selectedProduct) {
            setProductDetails(selectedProduct);
        } else {
            setProductDetails(null);
        }
    }, [id]);

    // If product details are not yet loaded
    if (!productDetails) {
        return <div>Loading...</div>;
    }

    // Main JSX returned
    return (
        <div className="small">
            {/* Left side - product image */}
            <div>
                <img className="img5" src={productDetails.image} alt={productDetails.title} />
            </div>

            {/* Right side - product info and add to cart */}
            <div>
                <h1>{productDetails.title}</h1>
                <h2 className="price">${productDetails.price}</h2>
                <p>{productDetails.description}</p>

                {/* Size selection */}
                <div className="select">
                    <h3>Select Size:</h3>
                    {productDetails.size.map((sizeOption, index) => (
                        <button
                            key={index}
                            onClick={() => setSize(sizeOption)}
                            className={`size ${sizeOption === size ? 'selected' : ''}`} // Highlight selected size
                        >
                            {sizeOption}
                        </button>
                    ))}
                </div>

                {/* Quantity selection */}
                <div>
                    <h3>Quantity:</h3>
                    <input
                        className='quantity'
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                    />
                </div>

                {/* Add to Cart button */}
                <button className="add1" onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    );
};
