import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h2>Style That Doesn't Cost the Earth</h2>
                <p>Discover unique, pre-loved, and new sustainable clothing. Your new favorite outfit awaits.</p>
                <Link to="/shop" className="cta-button">Shop Collection</Link>
            </div>
        </section>
    );
}

export default Hero;


