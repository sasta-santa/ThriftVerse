import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ cartCount, user, onLogout, children }) {
    return (
        <>
        <Header cartCount={cartCount} user={user} onLogout={onLogout} />
        <main>
            {children}
        </main>
        <Footer />
        </>
    );
}
export default Layout;