import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
                setError('');
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Could not load the community list. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); 

    return (
        <>
                <h1>Thriftverse Community</h1>
                <p>Meet the amazing people making sustainable fashion a reality.</p>

                {loading && <p>Loading members...</p>}
                {error && <p className="error-message">{error}</p>}
                
                {!loading && !error && (
                    <div className="user-list">
                        {users.map(user => (
                            <div key={user._id} className="user-card">
                                <h3>{user.fullName}</h3>
                                <p>Joined on: {new Date(user.createdAt).toLocaleDateDateString()}</p>
                            </div>
                        ))}
                    </div>
                )}
        </>
    );
}

export default UsersPage;