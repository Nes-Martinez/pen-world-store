require("dotenv").config();
const express = require("express");
const connectDB = require("./server/config/db");

const app = express();
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
