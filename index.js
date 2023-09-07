const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/DB');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();


//middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/v1/user', require('./routes/userRoute'));
app.use('/api/v1/address', require('./routes/addressRoute'));


// Set the port
const PORT = process.env.PORT || 8080;

// Start the server 
app.listen(PORT, () => {
  console.log(`Node server is running in ${process.env.DEV_MODE} Mode on Port ${PORT}`.bgMagenta.yellow);
});
