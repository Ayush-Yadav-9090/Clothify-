import '../../CSS/latestcollection.css'
import React, { useState } from 'react';
import { product } from '../../Image_Details/Image_Details';  // Import the product data
import { useCart } from '../../Operation/AddCart'; // Custom hook to handle cart operations
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Latestcollection = () => {
    const [visibleImages, setVisibleImages] = useState(5); // Number of products initially visible

    const [quantity, setQuantity] = useState(1); // Quantity for cart addition

    const { addToCart, search, value } = useCart(); // Cart context with search value

   

    // Function to handle adding a product to cart
    const handleAddToCart = (product) => {
        addToCart(product, quantity); // Add product with selected quantity to cart

        // Show success message when item is added
        toast.success('Item is added to Cart', {
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

    // Filter products based on search value
    const filteredProducts = product.filter(p =>
        p.title.toLowerCase().includes(value.toLowerCase()) ||
        p.description.toLowerCase().includes(value.toLowerCase())
    );

    // Function to show more products (increments visible images)
    const more_image = () => {
        setVisibleImages((old_visible) => old_visible + 5);
    };

    // JSX to render the latest collection
    return (
        <div className="collection">
            {/* Header section */}
            <div className="latest">
                <h2><u>LATEST COLLECTION</u></h2>
                <p>Discover our latest collection, where fresh styles meet timeless elegance – shop now and stay ahead of the trends!</p>
            </div>

            {/* Product Grid */}
            <div className="image2">
                {filteredProducts.slice(0, visibleImages).map((product, id) => (
                    <section className="s1" key={id}>
                        {/* Link to product description page */}
                        <NavLink to={`/product/${product.id}`}>
                            <img
                                src={product.image || 'placeholder-image-url'} // Fallback if no image
                                width="220px"
                                height="140px"
                                alt={product.title}
                            />
                        </NavLink>

                        {/* Product details */}
                        <h4>{product.title}</h4>
                        <p className='price'>${product.price}</p>
                        <p className='description'>{product.description}</p>

                        {/* Add to Cart button */}
                        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    </section>
                ))}
            </div>

            {/* Show MORE button if more products exist */}
            {visibleImages < 10 && (
                <button onClick={more_image} className="button">MORE</button>
            )}
        </div>
    );
};

