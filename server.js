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

app.use(express.static(path.join(__dirname, "build")));

// app.use("/api", require("./routes"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
