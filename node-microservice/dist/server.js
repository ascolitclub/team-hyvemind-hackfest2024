"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const _2 = require(".");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.SERVER_PORT || 3000;
app.disable('x-powered-by');
(0, _2.expressAppIntializer)(app);
process.on('uncaughtException', function (err) {
    console.log('****** Unhandled exception in etl-pim-consumer code ******', err);
    _1.expressLogger.error(`****** Unhandled exception in etl-pim-consumer code ****** ${err}`);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.log('****** Unhandled rejection at ', promise, `reason: ${reason}`);
    _1.expressLogger.error(`****** Unhandled rejection at ${promise} reason: ${reason}`);
    process.exit(1);
});
app.listen(PORT, () => {
    _1.expressLogger.info('Server running at port ' + PORT);
});
//# sourceMappingURL=server.js.map