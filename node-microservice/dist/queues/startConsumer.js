"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startAllConsumer = void 0;
const logger_1 = require("../libs/logger");
const nodeConsumer_1 = require("./consumer/nodeConsumer");
const consumerLogger = (0, logger_1.createLogger)(`Consumer-Logger`);
const startAllConsumer = async () => {
    try {
        consumerLogger.info(`Starting Node Map Consumer`);
        (0, nodeConsumer_1.consumeNode)();
    }
    catch (err) {
        consumerLogger.error(`Error in the Consumer Error`, err);
        return true;
    }
};
exports.startAllConsumer = startAllConsumer;
(0, exports.startAllConsumer)();
//# sourceMappingURL=startConsumer.js.map