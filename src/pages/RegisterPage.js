import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const checkPasswordStrength = (password) => {
    let score = 0;
    let color = 'var(--error-color)';
    let text = '';

    if (!password || password.length === 0) {
        return { score: 0, color, text: '' };
    }

    if (password.length >= 8) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[^A-Za-z0-9]/)) score++;

    switch(score) {
        case 1:
            text = 'Weak';
            break;
        case 2:
            text = 'Medium';
            color = '#ffc107'; 
            break;
        case 3:
        case 4:
            text = 'Strong';
            color = 'var(--primary-color)'; 
            break;
        default:
            text = 'Very Weak';
            score = 0; 
            break;
    }

    return { score, color, text };
};


function RegisterPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [strength, setStrength] = useState({ score: 0, color: '', text: '' });
    
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword); 
        
        const strengthResult = checkPasswordStrength(newPassword);
        setStrength(strengthResult);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        
        if (strength.score < 2) {
            setError('Password is too weak. Please choose a stronger one.');
            return; 
        }

        try {
            await axios.post('http://localhost:5000/api/auth/register', { fullName, email, password });
            alert('Registration successful! Please log in.');
            navigate('/login');
        } catch (err) {
            setError('Registration failed. The email may already be in use.');
        }
    };

    const strengthBarWidth = password.length > 0 ? `${(strength.score / 4) * 100}%` : '0%';

    return (
        <>
            <main className="form-container-page">
                <div className="form-container" >
                    <h2>Create Your Account</h2>
                    <p>Join a community dedicated to sustainable style. It's free!</p>
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 

                                onChange={handlePasswordChange} 
                                required 
                            />
                            
                            {password.length > 0 && (
                                <div id="password-strength">
                                    <div 
                                        id="password-strength-bar"
                                        style={{ width: strengthBarWidth, backgroundColor: strength.color }}
                                    ></div>
                                </div>
                            )}
                            <p id="password-strength-text" style={{ color: strength.color }}>{strength.text}</p>
                        </div>

                        <button type="submit" className="cta-button">Join Now</button>
                    </form>
                    <p className="login-prompt">Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </main>
        </>
    );
}

export default RegisterPage;