const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['POST'], 
    allowedHeaders: ['Content-Type'], 
};

app.use(cors(corsOptions));

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password){
        res.status(400).send({ message: "Invalid Credentials" })
    } else if(!email.includes('@')){
        res.status(400).send({ message:'Invalid Email' })
    } else {
        res.status(200).send({ message: 'Login successful' })
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})