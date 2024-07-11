import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Email is required');
            setError(true);
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Invalid email format');
            setError(true);
            return;
        }

        if (!password) {
            setErrorMessage('Password is required');
            setError(true);
            return;
        }

        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long');
            setError(true);
            return;
        }

        if (!confirm) {
            setErrorMessage('Confirm Password is required');
            setError(true);
            return;
        }

        if (password !== confirm) {
            setErrorMessage('Passwords do not match');
            setError(true);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data.message);
            navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.message === 'This email already exists') {
                setErrorMessage('A user with this email already exists, please login');
            } else {
                setErrorMessage('There was an error during registration');
            }
            setError(true);
            console.error('There was an error!', error);
        }
    };

    const validateEmail = (email) => {
        // Basic email validation regex
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Register</h1>
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
                    <input 
                        type="password" 
                        className="form-input" 
                        placeholder="Confirm Password" 
                        onChange={(e) => setConfirm(e.target.value)}
                        value={confirm}
                    />
                    <div className="button-container">
                        <button type="submit" className="button">Register</button>
                        <button
                            type="button"
                            className="button"
                            onClick={handleBackHome}
                        >
                            Back Home
                        </button>
                    </div>
                    {error && <p className="error">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
}
