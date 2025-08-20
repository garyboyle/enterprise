import pino from 'pino';
import { getCorrelationId } from './async-local-storage.js';

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

export default logger;
