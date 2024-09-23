import express from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { BadRequestException, JsonWebTokenErrorException } from '../exceptions';
import { userPayload } from '../interface/auth.interface';
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const createAccessToken = async (data: Required<any>) => {
  return new Promise((resolve, reject) => {
    const payload = {
      username: data.username,
      email: data.email,
      userId: data.userId,
      payload_created_at: new Date(),
    };

    const options = {
      issuer: 'hyvemind',
      expiresIn: '365d',
    };

    jwt.sign(payload, 'hyvemind', options, (err, token) => {
      if (err) {
        console.log(err);
        if (err instanceof JsonWebTokenError) {
          throw new JsonWebTokenErrorException(null, err.message);
        }
        throw new BadRequestException(null, 'Bad Gateway Exception');
      } else {
        resolve(token);
      }
    });
  });
};

export const verifyAccessToken = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY as string, (err, payload) => {
      if (err) {
        if (err instanceof JsonWebTokenError) {
          throw new JsonWebTokenErrorException(null, err.message);
        }
        throw new BadRequestException(null, 'Bad Gateway Exception');
      } else {
        resolve(payload);
      }
    });
  });
};
