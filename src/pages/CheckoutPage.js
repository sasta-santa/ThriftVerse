import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CheckoutPage() {

    const mockItem = {
        _id: 'mock123',
        name: 'Mock Vintage T-Shirt',
        price: 1599,
        imageUrl: 'https://i.imgur.com/mI2229E.jpeg' 
    };

    const handleProceedToPayment = async () => {
        console.log("--- EXPERIMENT 8: INITIATING MOCK PAYMENT ---");
        

        try {
            const response = await axios.post('http://localhost:5000/api/payment/create-checkout-session', { 
                item: mockItem 
            });

            console.log("Received mock response from backend:", response.data);

            alert(`This simulates proceeding to payment for "${mockItem.name}". Check the console for details!`);

        } catch (error) {
            console.error("Could not initiate mock payment:", error);
            alert("Could not connect to the mock payment endpoint. Ensure the backend is running.");
        }
    };
    
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h1>Experiment 8: Payment Gateway Demo</h1>
            <p>This page demonstrates the code required for payment integration.</p>
            <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: '300px', margin: '2rem auto' }}>
                <img src={mockItem.imageUrl} alt="mock item" style={{ width: '100%' }} />
                <h3>{mockItem.name}</h3>
                <p>₹{mockItem.price.toFixed(2)}</p>
            </div>
            
            <button 
                onClick={handleProceedToPayment}
                style={{ padding: '1rem 2rem', fontSize: '1.2rem', cursor: 'pointer' }}
            >
                Simulate "Proceed to Payment"
            </button>
            <br />
            <br />
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
}

export default CheckoutPage;