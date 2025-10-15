import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p className="price">₹{product.price.toFixed(2)}</p>
            <button 
                className="cta-button" 
                onClick={() => onAddToCart(product)}
                style={{width: 'auto', padding: '0.6rem 1.2rem'}}
            >
                Add to Cart
            </button>
        </div>
    );
}

function ShopPage({ products, onAddToCart }) {

    const { type } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const pageTitle = type ? `${type.charAt(0).toUpperCase() + type.slice(1)} Collection` : 'Our Full Collection';
    const pageDescription = `Discover every unique piece in our ${type ? type.toLowerCase() : 'full'} collection.`;

    useEffect(() => {
        let itemsToShow;

        if (type) {
            itemsToShow = products.filter(p => p.condition.toLowerCase() === type.toLowerCase());
        } else {
            itemsToShow = products;
        }

        setFilteredProducts(itemsToShow);

    }, [type, products]); 

    return (
        <div className="container page-content">
            <h1>{pageTitle}</h1>
            <p>{pageDescription}</p>
            
            {filteredProducts.length > 0 ? (
                <div className="product-grid" style={{ marginTop: '2rem' }}>
                    {filteredProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <h3>No Items Found in this Collection!</h3>
                    <p>Check back soon, or explore our full collection.</p>
                    <Link to="/shop" className="cta-button" style={{ maxWidth: '250px', marginTop: '1rem' }}>Shop All</Link>
                </div>
            )}
        </div>
    );
}

export default ShopPage;