"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonWebTokenErrorException = exports.DatabaseException = exports.RabbitMqExceptions = exports.BadRequestException = exports.NotFoundException = exports.UnAuthorizedException = exports.HttpException = void 0;
const http_codes_constant_1 = require("../constant/http_codes.constant");
class HttpException extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'HttpExceptions';
        Object.setPrototypeOf(this, new.target.prototype);
    }
    getStatusCode() {
        return this.statusCode;
    }
    getMessage() {
        return this.message;
    }
}
exports.HttpException = HttpException;
class UnAuthorizedException extends HttpException {
    constructor(statusCode, message) {
        super(statusCode || http_codes_constant_1.HTTP_STATUS.UNAUTHORIZED.CODE, message || http_codes_constant_1.HTTP_STATUS.UNAUTHORIZED.MESSAGE);
        this.name = 'UnAuthorizedException';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.UnAuthorizedException = UnAuthorizedException;
class NotFoundException extends HttpException {
    constructor(statusCode, message) {
        super(statusCode || http_codes_constant_1.HTTP_STATUS.NOT_FOUND.CODE, message || http_codes_constant_1.HTTP_STATUS.NOT_FOUND.MESSAGE);
        this.name = 'NotFoundException';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends HttpException {
    constructor(statusCode, message) {
        super(statusCode || http_codes_constant_1.HTTP_STATUS.BAD_REQUEST.CODE, message || http_codes_constant_1.HTTP_STATUS.BAD_REQUEST.MESSAGE);
        this.name = 'BadRequestException';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.BadRequestException = BadRequestException;
class RabbitMqExceptions extends HttpException {
    constructor(statusCode, message) {
        super(statusCode || http_codes_constant_1.HTTP_STATUS.BAD_REQUEST.CODE, message || http_codes_constant_1.HTTP_STATUS.BAD_REQUEST.MESSAGE);
        this.name = 'BadRequestException';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.RabbitMqExceptions = RabbitMqExceptions;
class DatabaseException extends HttpException {
    constructor(statusCode, message) {
        super(statusCode || http_codes_constant_1.HTTP_STATUS.DATABASE_ERROR.CODE, message || http_codes_constant_1.HTTP_STATUS.DATABASE_ERROR.MESSAGE);
        this.name = 'DatabaseException';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.DatabaseException = DatabaseException;
class JsonWebTokenErrorException extends HttpException {
    constructor(statusCode, message) {
        super(statusCode || http_codes_constant_1.HTTP_STATUS.DATABASE_ERROR.CODE, message || http_codes_constant_1.HTTP_STATUS.DATABASE_ERROR.MESSAGE);
        this.name = 'DatabaseException';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.JsonWebTokenErrorException = JsonWebTokenErrorException;
//# sourceMappingURL=index.js.map