"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = createLogger;
const winston_1 = __importDefault(require("winston"));
const { combine, printf } = winston_1.default.format;
const myFormat = printf(({ level, message, service, batchId }) => {
    let jsonString = `{ "message": "${level === 'error' ? message : message}"`;
    if (batchId) {
        jsonString += `, "batchId": "${batchId}"`;
    }
    jsonString += `, "level": "${level}", "service": "${service}" }`;
    return jsonString;
});
function createLogger(service) {
    return winston_1.default.createLogger({
        defaultMeta: {
            service,
        },
        format: combine(myFormat),
        transports: [new winston_1.default.transports.Console()],
    });
}
//# sourceMappingURL=logger.js.map