const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Load routes
const bootcamps = require('./routes/bootcamps');

const PORT = process.env.PORT || 5000;
const app = express();

// Add middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(
  PORT,
  // eslint-disable-next-line no-console
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);

// Handle unhandled promise rejections
process.on('unhandledRejection', error => {
  // eslint-disable-next-line no-console
  console.log('Unhandled Rejection reason:', error.message);
  // close server && exit process
  server.close(() => process.exit(1));
});
