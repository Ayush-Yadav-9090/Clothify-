import React, { useEffect, useState } from 'react';
import './product.css';
import { product } from './Image_Details'; // Importing product details
import { useCart } from '../../operation/addcart'; // Custom hook for cart operations
import { NavLink } from 'react-router-dom'; // For navigation
import { toast } from 'react-toastify'; // For notifications

export const Products = () => {
    // State variables
    const [visibleImages, setVisibleImages] = useState(20); // Controls how many products to show
    const [quantity, setQuantity] = useState(1); // Default quantity for cart addition
    const [category, setCategory] = useState([]); // Selected categories
    const [subcategory, setSubCategory] = useState([]); // Selected subcategories
    const [filter, setFilter] = useState(product); // Filtered products list

    const { addToCart, value } = useCart(); // Using custom cart hook


    // Function to handle adding a product to cart
    const handleAddToCart = (product) => {
        addToCart(product, quantity);

        // Show success message using toast
        toast.success('Item is added to Cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    // Function to show more images (products)
    const more_image = () => {
        setVisibleImages(prev => prev + 4);
    };

    // Filter products whenever category, subcategory, or search value changes
    useEffect(() => {
        const filteredProducts = product.filter(p => {
            const matchesCategory = category.length === 0 || category.some(c => p.category.toLowerCase().includes(c.toLowerCase()));
            const matchesSearch = p.title.toLowerCase().includes(value.toLowerCase()) || p.description.toLowerCase().includes(value.toLowerCase());
            const matchesSubCategory = subcategory.length === 0 || subcategory.some(sc => p.subcategory.toLowerCase().includes(sc.toLowerCase()));

            return matchesCategory && matchesSubCategory && matchesSearch;
        });

        setFilter(filteredProducts);
    }, [category, subcategory, value]);

    // Toggle selected category
    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev =>
            prev.includes(value)
                ? prev.filter(c => c !== value)
                : [...prev, value]
        );
    };

    // Toggle selected subcategory
    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev =>
            prev.includes(value)
                ? prev.filter(sc => sc !== value)
                : [...prev, value]
        );
    };

    // Handle sorting products based on selected criteria
    const handleSort = (e) => {
        const sortValue = e.target.value;
        let sortedProducts = [...filter];

        if (sortValue === "low to high") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === "high to low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === "under") {
            sortedProducts = sortedProducts.filter(p => p.price <= 1000);
        } else if (sortValue === "above") {
            sortedProducts = sortedProducts.filter(p => p.price > 1000);
        }

        setFilter(sortedProducts);
    };

    return (
        <div className="products-container">
            {/* Sidebar for filters */}
            <div className="filter-sidebar">
                <h1><u><i>FILTERS</i></u></h1>

                {/* Category filters */}
                <div className="checkbox-container">
                    <h1><u>Categories</u></h1>
                    <div>
                        <input
                            type="checkbox"
                            value="Male's"
                            onChange={toggleCategory}
                            checked={category.includes("Male's")}
                        />
                        <label>Men's</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="Women's"
                            onChange={toggleCategory}
                            checked={category.includes("Women's")}
                        />
                        <label>Women's</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="Children's"
                            onChange={toggleCategory}
                            checked={category.includes("Children's")}
                        />
                        <label>Children's</label>
                    </div>
                </div>

                {/* Subcategory filters */}
                <div className="checkbox-container">
                    <h1><u>Type</u></h1>
                    <div>
                        <input
                            type="checkbox"
                            value="topwear"
                            onChange={toggleSubCategory}
                            checked={subcategory.includes("topwear")}
                        />
                        <label>Top wear</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="bottomwear"
                            onChange={toggleSubCategory}
                            checked={subcategory.includes("bottomwear")}
                        />
                        <label>Bottom wear</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="winterwear"
                            onChange={toggleSubCategory}
                            checked={subcategory.includes("winterwear")}
                        />
                        <label>Winter wear</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="summerwear"
                            onChange={toggleSubCategory}
                            checked={subcategory.includes("summerwear")}
                        />
                        <label>Summer wear</label>
                    </div>
                </div>

                {/* Sorting option */}
                <div>
                    <div className='sort'>
                        <select onChange={handleSort}>
                            <option value="">--Sort By Price--</option>
                            <option value="low to high">Low To High</option>
                            <option value="high to low">High To Low</option>
                            <option value="under">Under 1000</option>
                            <option value="above">Above 1000</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Products display section */}
            <div className="product-display">
                <h1>ALL COLLECTIONS -</h1>

                <div className="product-grid">
                    {filter.slice(0, visibleImages).map((product, id) => (
                        <section className="product-card" key={id}>
                            {/* Clicking the product navigates to its detail page */}
                            <NavLink to={`/product/${product.id}`}>
                                <img
                                    src={product.image || 'placeholder-image-url'}
                                    width="220px"
                                    height="140px"
                                    alt={product.title} />
                            </NavLink>
                            <h4>{product.title}</h4>
                            <p className="price">${product.price}</p>
                            <p className="description">{product.description}</p>

                            {/* Add to cart button */}
                            <div>
                                <button className="cart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Show more products button */}
                {visibleImages < filter.length && (
                    <button onClick={more_image} className="show-more">SHOW MORE</button>
                )}
            </div>
        </div>
    );
};




