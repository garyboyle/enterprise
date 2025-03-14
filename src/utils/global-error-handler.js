const logger = require('./logger');

module.exports = (err, req, res, next) => {
  // So when you add a custom error handler, you must delegate to the default Express error handler,
  // when the headers have already been sent to the client
  // https://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) {
    return next(err);
  }

  logger.error(err.stack);
  res.status(500).send('Something broke!');
};
