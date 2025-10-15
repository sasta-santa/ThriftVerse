import React from 'react';
import { Link } from 'react-router-dom';

import dress1Image from '../assets/dress1.jpg';
import dress2Image from '../assets/dress2.jpg';
import dress4Image from '../assets/dress4.jpg';

import men1Image from '../assets/men1.jpg';
import men2Image from '../assets/men2.jpg';
import men3Image from '../assets/men3.jpg';

function ProductCard(props) {
    return (
        <div className="product-card">
            

            <Link to="/shop">
                <img src={props.imgSrc} alt={props.title} />
            </Link>
            
            <h4>{props.title}</h4>
            <p className="price">{props.price}</p>
        </div>
    );
}


function FeaturedProducts() {
    return (
        <>
            
            <section className="featured-products">
                <div className="container">
                    <h3 className="section-title">Shop Women's</h3>
                    <div className="product-grid">
                         <ProductCard 
                            imgSrc={dress1Image}
                            title="Used Floral Top"
                            price="Starting from ₹1499"
                        />
                        <ProductCard 
                            imgSrc={dress2Image}
                            title="Halter-neck Dress"
                            price="Starting from ₹799"
                        />
                         <ProductCard 
                            imgSrc={dress4Image}
                            title="Sequin Lace Halter Top"
                            price="Starting from ₹1499"
                        />
                    </div>
                </div>
            </section>

            
            <section className="featured-products">
                <div className="container">
                    <h3 className="section-title">Shop Men's</h3>
                    <div className="product-grid">
                         <ProductCard 
                            imgSrc={men1Image}
                            title="Casual Floral Shirt"
                            price="Starting from ₹2499"
                        />
                        <ProductCard 
                            imgSrc={men2Image}
                            title="Used Vintage Jacket"
                            price="Starting from ₹1199"
                        />
                         <ProductCard 
                            imgSrc={men3Image}
                            title="Draped Pants"
                            price="Starting from ₹1999"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturedProducts;