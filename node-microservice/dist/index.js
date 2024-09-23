"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAppIntializer = exports.expressLogger = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = require("./libs/logger");
const router_1 = __importDefault(require("./routes/router"));
const exceptions_1 = require("./exceptions");
const errorhandler_1 = require("./handler/errorhandler");
exports.expressLogger = (0, logger_1.createLogger)('express-app');
const expressAppIntializer = async (app) => {
    app.use((0, helmet_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    }));
    (0, router_1.default)(app);
    app.use((req, _, next) => next(new exceptions_1.NotFoundException(null, `404 Not Found : ${req.url} does not exists`)));
    app.use(errorhandler_1.errorHandler);
    exports.expressLogger.info(`Express App Initialized`);
};
exports.expressAppIntializer = expressAppIntializer;
//# sourceMappingURL=index.js.map