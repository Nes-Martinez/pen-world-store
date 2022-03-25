require("dotenv").config();
const express = require("express");
const connectDB = require("./server/config/db");
const path = require("path");
const errorHandler = require("./server/middleware/error");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/auth", require("./server/routes/auth"));
app.use("/api/private", require("./server/routes/private"));
app.use("/api/users", require("./server/routes/users"));
app.use("/api/products", require("./server/routes/products"));
app.use("/api/carts", require("./server/routes/carts"));
app.use("/api/orders", require("./server/routes/orders"));

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
