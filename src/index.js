const express = require('express');
const requestLogger = require('./utils/request-logger');
const logger = require('./utils/logger');
const globalErrorHandler = require('./utils/global-error-handler');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(requestLogger());

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

const sslOptions = {
  key: fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.cert'),
};

// Create an HTTPS server
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`🚀 HTTPS Server running on https://localhost:${port}`);
});
