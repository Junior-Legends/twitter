const express = require("express");
const app = express();

// Middleware
const cors = require("cors");
const helmet = require("helmet");
app.use(cors());
app.use(helmet());
app.use(express.json());
require("dotenv").config();

//Connect to DataBase
const connectDB = require("./db").connectDB;
connectDB();

//Routers
const User_Route = require("./Routes/User.Router.js");
app.use("/api", User_Route);

// Running Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Running On ${PORT}`));
