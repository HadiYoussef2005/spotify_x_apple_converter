import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Login</h1>
                <form className="form" onSubmit={handleClick}>
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        type="password" 
                        className="form-input" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="button-container">
                        <button type="submit" className="button">Log In</button>
                        <button type="button" className="button" onClick={handleBackHome}>Back Home</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
