import winston from 'winston';
const { combine, printf } = winston.format;

const myFormat = printf(({ level, message, service, batchId }) => {
  let jsonString = `{ "message": "${level === 'error' ? message : message}"`;
  if (batchId) {
    jsonString += `, "batchId": "${batchId}"`;
  }
  jsonString += `, "level": "${level}", "service": "${service}" }`;
  return jsonString;
});


export function createLogger(service: string): winston.Logger {
  return winston.createLogger({
    defaultMeta: {
      service,
    },
    format: combine(myFormat),
    transports: [new winston.transports.Console()],
  });
}

