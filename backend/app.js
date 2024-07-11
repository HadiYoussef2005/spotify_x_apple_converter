const express = require('express');
const app = express();
const connectDB = require('./database');
const cors = require('cors');
const registerUser = require('./registerUser'); 
const User = require('./models/user');
const login = require('./login')
const port = 5000;

connectDB();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        await login(res, email, password); 
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    await registerUser(res, email, password);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
