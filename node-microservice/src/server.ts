import dotenv from 'dotenv';
import express from 'express';
import { expressLogger } from '.';

import { expressAppIntializer } from '.';
dotenv.config();
const app = express();

const PORT = process.env.SERVER_PORT || 3000;

app.disable('x-powered-by');


expressAppIntializer(app);


process.on('uncaughtException', function (err) {
  console.log(
    '****** Unhandled exception in etl-pim-consumer code ******',
    err
  );
  expressLogger.error(
    `****** Unhandled exception in etl-pim-consumer code ****** ${err}`
  );
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('****** Unhandled rejection at ', promise, `reason: ${reason}`);
  expressLogger.error(
    `****** Unhandled rejection at ${promise} reason: ${reason}`
  );
  process.exit(1);
});

app.listen(PORT, () => {
  expressLogger.info('Server running at port ' + PORT);
});
