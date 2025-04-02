const { AsyncLocalStorage } = require('node:async_hooks');
const { v4: uuidv4 } = require('uuid');

const asyncLocalStorage = new AsyncLocalStorage();

function setCorrelationId(req, res, next) {
  const correlationId = req?.headers['x-correlation-id'] || uuidv4();
  res.header('x-correlation-id', correlationId);

  asyncLocalStorage.run(new Map(), () => {
    asyncLocalStorage.getStore().set('correlationId', correlationId);
    next();
  });
}

function getCorrelationId() {
  return asyncLocalStorage.getStore()?.get('correlationId') || 'N/A';
}

module.exports = { setCorrelationId, getCorrelationId };
