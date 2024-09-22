import express, { Express, NextFunction, Request, Response } from 'express';
import { createLogger } from './libs/logger';
import helmet from 'helmet';
import cors from 'cors';
import { NotFoundException } from './exceptions';
import { errorHandler } from './handlers/errorHandler';
import { initalizeMongoConnection } from './database/mongoConnection';
import serverRouter from './router/server.route';

export const expressLogger = createLogger('express-app');

export const expressAppIntializer = async (app: Express) => {
  app.use(helmet());

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST'],
    })
  );

  app.set('trust proxy', true);

  initalizeMongoConnection();

  app.use(serverRouter);

  app.use((req: Request, _res: Response, next: NextFunction) => {
    next(
      new NotFoundException(null, `404 Not Found : ${req.url} does not exists`)
    );
  });

  app.use(errorHandler);

  expressLogger.info(`Express App Initalized`);
};
