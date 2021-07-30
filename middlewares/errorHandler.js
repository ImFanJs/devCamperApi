// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const error = { ...err };
  error.message = err.message;

  if (err.name === 'CastError') {
    error.statusCode = 404;
    error.message = `Resource with id ${error.value} not found.`;
  }

  if (err.code === 11000) {
    error.statusCode = 400;
    error.message = 'Duplicate key, please send a unique value.';
  }

  if (err.name === 'ValidationError') {
    error.statusCode = 400;
    error.message = Object.values(err.errors)
      .map(e => e.message)
      .join(',');
  }

  res.status(error.statusCode || 500).json({ success: false, error: error.message });
};

module.exports = errorHandler;
