const express = require('express');
const  mongoose = require('mongoose');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({msg : "This is the backend of the e-commerce application"});
});



//Routes
app.use('/user', require('./routes/useRoutes'));

//connect MongoDB

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log("MongoDB error:", err.message));

console.log("ENV CHECK:", process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});