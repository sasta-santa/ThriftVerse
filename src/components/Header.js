import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingBag } from 'react-icons/fa';

function Header({ cartCount, user, onLogout }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout(); 
        setIsDropdownOpen(false); 
        navigate('/'); 
    };

    return (
        <header className="main-header">
            <div className="container">
                <Link to="/" className="logo">ThriftVerse</Link>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/shop">Shop All</Link></li>
                        <li><Link to="/shop/used">Used</Link></li>
                        <li><Link to="/shop/new">New</Link></li>
                    </ul>
                </nav>

                <div className="header-icons">



                    {user ? (
                        
                        <div 
                            className="user-menu-container"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <div className="icon-link">
                                <FaUser />
                            </div>
                            {isDropdownOpen && (
                                <div className="user-dropdown">
                                    <div className="dropdown-greeting">Hello, {user.fullName}!</div>
                                    <button onClick={handleLogoutClick} className="logout-button">Logout</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="icon-link"><FaUser /></Link>
                    )}
                    
                    <Link to="/cart" className="icon-link">
                        <FaShoppingBag />
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
export default Header;