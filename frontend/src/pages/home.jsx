import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };
    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div>
            <h1 className="title">Welcome to the Spotify/Apple Playlist Converter</h1>
            <h4 className="header">Please login below</h4>
            <button className="button" onClick={handleRegister}>Register</button>
            <button className="button" onClick={handleLogin}>Login</button>
        </div>
    );
}
