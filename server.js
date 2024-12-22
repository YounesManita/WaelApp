const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors=require("cors")
const connectDB = require("./config/db");  
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())
connectDB();

const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require('./routes/UserRoutes');
app.use("/contact", contactRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
