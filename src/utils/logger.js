const pino = require('pino');
const { getCorrelationId } = require('./async-local-storage');

const logger = pino({
  // transport: {
  //   target: 'pino-pretty', // Pretty print logs in development
  // },
  // base: null, // Remove default pid/hostname fields
  formatters: {
    log: (log) => {
      return { correlationId: getCorrelationId(), ...log };
    },
  },
});

module.exports = logger;
