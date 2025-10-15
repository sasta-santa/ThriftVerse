import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cartItems, onRemoveItem }) {

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleProceedToPayment = () => {
        alert(`Proceeding to payment with a total of ₹${totalPrice.toFixed(2)}.`);
    };

    return (
        <div className="container page-content">
            <h1>Your Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <h3>Your cart is currently empty.</h3>
                    <p>Explore our collection and find something you love!</p>
                    <Link to="/shop" className="cta-button" style={{ maxWidth: '250px', marginTop: '1rem' }}>
                        Go Shopping
                    </Link>
                </div>
            ) : (
                <div className="cart-layout">
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item.cartId} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p>₹{item.price.toFixed(2)}</p>
                                </div>
                                <button 
                                    className="cart-item-remove-button"
                                    onClick={() => onRemoveItem(item.cartId)}
                                >
                                    &times; 
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-line">
                            <span>Subtotal</span>
                            <span>₹{totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-line total-line">
                            <span>Total</span>
                            <span>₹{totalPrice.toFixed(2)}</span>
                        </div>
                        <button 
                            className="cta-button" 
                            style={{ width: '100%', marginTop: '1rem' }}
                            onClick={handleProceedToPayment}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;