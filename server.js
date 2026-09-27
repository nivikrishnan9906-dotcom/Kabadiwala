const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const pickupRoutes = require("./routes/pickupRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Kabadiwala Connect Backend is running",
  });
});

// Pickup API
app.use("/api/pickups", pickupRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on http://localhost:${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });