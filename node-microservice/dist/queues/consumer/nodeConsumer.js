"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumeNode = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const logger_1 = require("../../libs/logger");
const exceptions_1 = require("../../exceptions");
const consumeNodeLogger = (0, logger_1.createLogger)('node-conumser-logger');
const consumeNode = async () => {
    try {
        const connection = await amqplib_1.default.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        await channel.assertExchange('map-exchange', 'direct', { durable: true });
        await channel.assertQueue('map-queue', { durable: true });
        consumeNodeLogger.info(`Waiting For the Node Map Queue`);
        await channel.bindQueue('map-queue', 'map-exchange', 'map-rk');
        channel.consume('map-exchange', (message) => {
            try {
                if (message?.content) {
                    const content = message.content.toString();
                    console.log(content);
                    channel.ack(message);
                }
            }
            catch (err) {
                consumeNodeLogger.error(`Error in the consume node`, err);
                throw new exceptions_1.RabbitMqExceptions(null, 'Error in the Rabbit Mq  Exception');
            }
        });
    }
    catch (err) {
        throw new exceptions_1.BadRequestException(null, 'Bad Request Exception');
    }
};
exports.consumeNode = consumeNode;
//# sourceMappingURL=nodeConsumer.js.map