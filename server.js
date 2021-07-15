const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Load routes
const bootcamps = require("./routes/bootcamps");

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/v1/bootcamps", bootcamps);

app.listen(
  PORT,
  // eslint-disable-next-line no-console
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
