const express = require('express');
const helmet = require('helmet');
const requestLogger = require('./utils/request-logger');
const logger = require('./utils/logger');
const globalErrorHandler = require('./utils/global-error-handler');
const { setCorrelationId } = require('./utils/async-local-storage');

const app = express();
const port = 3000;

app.use(setCorrelationId);
app.use(requestLogger());

app.use((res, req, next) => {
  logger.info('========BEFORE');
  next();
});

app.use((res, req, next) => {
  setTimeout(() => logger.info('=========AFTER'), 5000);
  next();
});

// Security best practices
app.use(helmet());
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/error', (req, res, next) => {
  try {
    throw new Error('Something broke!');
  } catch (err) {
    next(err);
  }
});

app.use((req, res) => {
  logger.error('404 Not Found');
  res.status(404).send("Sorry can't find that!");
});

app.use(globalErrorHandler);

// Create an HTTPS server
app.listen(port, () => logger.info(`Server started: http://localhost:${port}`));
