import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

function SuccessPage() {
    return (
        <>
                
                <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                    
                    <FaCheckCircle style={{ fontSize: '5rem', color: 'var(--primary-color)', marginBottom: '1rem' }} />

                    <h1>Payment Successful!</h1>
                    <p style={{ fontSize: '1.2rem', margin: '1rem 0 2rem' }}>
                        Thank you for your purchase. You are making a difference! 
                        A confirmation has been sent to your email.
                    </p>
                    <Link to="/" className="cta-button" style={{ maxWidth: '200px', margin: '0 auto' }}>
                        Continue Shopping
                    </Link>
                </div>
        </>
    );
}

export default SuccessPage;