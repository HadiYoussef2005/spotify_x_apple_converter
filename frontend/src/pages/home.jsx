import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <h1 className="title">Welcome to the Spotify/Apple Playlist Converter</h1>
            <h4 className="header">Please login below</h4>
            <button className="button" onClick={handleClick}>Login</button>
        </div>
    );
}
