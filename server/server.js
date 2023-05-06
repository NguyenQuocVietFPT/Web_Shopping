const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const app = express();

//Set up server
dotenv.config();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
app.use(express.json());
app.use(cors());
app.use(morgan("short"));

//Set up routes
app.use("/api/auth", authRoutes);

//Set up connection to MongoDB and server's port
mongoose.set("strictQuery", false);
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running at port : http/localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
    process.exit(1);
  });
