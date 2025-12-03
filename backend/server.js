const express = require('express');
const connectDB = require('./config/db');
const projectRoutes = require('./api/routes/ProjectRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();


app.use(cors({
  origin: ['https://archhakamesa.netlify.app', 'http://localhost:5173'], // add your local dev URL here
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  credentials: true
}));


// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/projects', projectRoutes); // Mount the project routes

// Test route
app.get('/', (req, res) => {
    res.send('MongoDB is connected and server is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
