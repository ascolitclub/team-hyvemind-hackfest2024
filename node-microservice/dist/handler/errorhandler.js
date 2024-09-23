"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const exceptions_1 = require("../exceptions");
const __1 = require("..");
const errorHandler = (error, _req, res, _next) => {
    if (error instanceof exceptions_1.HttpException) {
        return res.status(error.getStatusCode()).json({
            message: error.getMessage(),
        });
    }
    __1.expressLogger.error(`UnHandled Error Found, Error`, +error);
    return res.status(500).json({
        message: 'Un Handled Error Found',
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorhandler.js.map