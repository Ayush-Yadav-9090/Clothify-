
import '../../CSS/bestseller.css'
import React, { useState } from 'react'; 
import { toast } from 'react-toastify'; 
import { useCart } from '../../Operation/AddCart'; 
import { NavLink } from 'react-router-dom'; 
import { product } from '../../Image_Details/Image_Details'; // Import product data

export const Bestseller = () => {

    // State to control how many images/products are initially shown
    const [visibleImages, setVisibleImages] = useState(5);

    // Get addToCart function, search and value from cart context
    const { addToCart, search, value } = useCart();

    // State for product quantity to add to cart
    const [quantity, setQuantity] = useState(1);

    // Function to handle adding a product to the cart
    const handleAddToCart = (product) => {
        addToCart(product, quantity); // Add selected product and quantity to cart

        // Show success toast notification
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

    // Filter products based on the search value (from cart context)
    const filteredProducts = product.filter(p =>
        p.title.toLowerCase().includes(value.toLowerCase()) ||
        p.description.toLowerCase().includes(value.toLowerCase())
    );

    return (
        <div className="collection">
            {/* Header section for Best Sellers */}
            <div className="latest">
                <h2><u>BEST SELLERS</u></h2>
                <p>Explore our Best Sellers Collection – featuring customer favorites that never go out of style!</p>
            </div>

            {/* Product listing */}
            <div className="image2">
                {/* Display a slice of products starting from visibleImages index */}
                {filteredProducts.slice(visibleImages, visibleImages + 5).map((product, id) => (
                    <section className="s2" key={id}>
                        {/* Link to individual product details */}
                        <NavLink to={`/product/${product.id}`}>
                            <img
                                src={product.image || 'placeholder-image-url'} // If image is missing, show placeholder
                                width="220px"
                                height="140px"
                                alt={product.title}
                            />
                        </NavLink>

                        {/* Product info */}
                        <h4>{product.title}</h4>
                        <p className='price'>${product.price}</p>
                        <p className='description'>{product.description}</p>

                        {/* Add to Cart button */}
                        <button onClick={() => handleAddToCart(product)}> Add To Cart</button>
                    </section>
                ))}
            </div>
        </div>
    );
};
