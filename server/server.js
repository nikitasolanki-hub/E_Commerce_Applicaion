
// Import the Express framework (used to build HTTP servers/APIs)
const express = require('express');

// Import Mongoose (ODM to interact with MongoDB)
const  mongoose = require('mongoose')

// Load environment variables from .env into process.env
require('dotenv').config();

// Middleware to parse cookies from incoming requests
const cookieParser = require('cookie-parser');


// Create an Express application instance
const app = express();

// Built-in middleware to parse JSON body from requests (req.body)
app.use(express.json());

// Middleware to parse cookies and make them available in req.cookies
app.use(cookieParser())


// Define server port (from .env or fallback to 5000)
const PORT = process.env.PORT || 5000;

//HTTP GET route 
app.get('/', (req, res) => {
  res.json({msg : "This is the backend of the e-commerce application"});
});

// Mount user routes under "/user"
//This is route mounting. It connects your main server to a group of routes.
app.use('/user', require('./routes/useRoutes'));

//connect MongoDB using connection string from .env
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log("MongoDB error:", err.message));

//  Debug print env variable to verify it's loaded
console.log("ENV CHECK:", process.env.MONGODB_URI);

//Start server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});