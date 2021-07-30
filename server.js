const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;

// Load routes
const bootcamps = require('./routes/bootcamps');

// Connect to database
connectDB();

// Create Express app
const app = express();

// Add middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Add routes
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);

// Start server
const server = app.listen(
  PORT,
  // eslint-disable-next-line no-console
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold),
);

// Handle unhandled promise rejections
process.on('unhandledRejection', error => {
  // eslint-disable-next-line no-console
  console.log(`Unhandled Rejection reason: ${error.message}`.red);
  // close server && exit process
  server.close(() => process.exit(1));
});
