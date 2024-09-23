import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { createLogger } from './libs/logger';
import serverRouter from './routes/router';
import { NotFoundException } from './exceptions';
import { errorHandler } from './handler/errorhandler';
import DatabaseDataSource from './database/connect';
import { DataSource } from 'typeorm';
import limiter from './config/rate.limit.config';

export const expressLogger = createLogger('express-app');

export const expressAppIntializer = async (app: Express) => {
  app.use(helmet());

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    })
  );

  await DatabaseDataSource.initialize()
    .then((db: DataSource) => {
      expressLogger.info(
        `Initialized ${db.options.database} database Successfully`
      );
    })
    .catch((err: Error) => {
      expressLogger.error(`Error While Initalizing Database . Error` + err);
      process.exit(0);
    });

  serverRouter(app);

  app.use((req: Request, _: Response, next: NextFunction) =>
    next(
      new NotFoundException(null, `404 Not Found : ${req.url} does not exists`)
    )
  );

  app.use(errorHandler);

  expressLogger.info(`Express App Initialized`);
};
