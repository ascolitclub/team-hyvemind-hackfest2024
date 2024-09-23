import { HTTP_STATUS } from '../constant/http_codes.constant';

export class HttpException extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
    this.name = 'HttpExceptions';

    Object.setPrototypeOf(this, new.target.prototype);
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  getMessage(): string {
    return this.message;
  }
}

export class UnAuthorizedException extends HttpException {
  constructor(statusCode: number | null, message: string) {
    super(
      statusCode || HTTP_STATUS.UNAUTHORIZED.CODE,
      message || HTTP_STATUS.UNAUTHORIZED.MESSAGE
    );
    this.name = 'UnAuthorizedException';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundException extends HttpException {
  constructor(statusCode: number | null, message: string) {
    super(
      statusCode || HTTP_STATUS.NOT_FOUND.CODE,
      message || HTTP_STATUS.NOT_FOUND.MESSAGE
    );
    this.name = 'NotFoundException';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class BadRequestException extends HttpException {
  constructor(statusCode: number | null, message: string) {
    super(
      statusCode || HTTP_STATUS.BAD_REQUEST.CODE,
      message || HTTP_STATUS.BAD_REQUEST.MESSAGE
    );
    this.name = 'BadRequestException';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class RabbitMqExceptions extends HttpException {
  constructor(statusCode: number | null, message: string) {
    super(
      statusCode || HTTP_STATUS.BAD_REQUEST.CODE,
      message || HTTP_STATUS.BAD_REQUEST.MESSAGE
    );
    this.name = 'BadRequestException';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class DatabaseException extends HttpException {
  constructor(statusCode: number | null, message: string) {
    super(
      statusCode || HTTP_STATUS.DATABASE_ERROR.CODE,
      message || HTTP_STATUS.DATABASE_ERROR.MESSAGE
    );
    this.name = 'DatabaseException';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class JsonWebTokenErrorException extends HttpException {
  constructor(statusCode: number | null, message: string) {
    super(
      statusCode || HTTP_STATUS.DATABASE_ERROR.CODE,
      message || HTTP_STATUS.DATABASE_ERROR.MESSAGE
    );
    this.name = 'DatabaseException';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
