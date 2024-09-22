import amqp from 'amqplib';
import { createLogger } from '../../libs/logger';
import { BadRequestException, RabbitMqExceptions } from '../../exceptions';

const consumeNodeLogger = createLogger('node-conumser-logger');
export const consumeNode = async () => {
  try {
    const connection: amqp.Connection = await amqp.connect(
      'amqp://localhost:5672'
    );

    const channel = await connection.createChannel();

    await channel.assertExchange('map-exchange', 'direct', { durable: true });

    await channel.assertQueue('map-queue', { durable: true });

    consumeNodeLogger.info(`Waiting For the Node Map Queue`);

    await channel.bindQueue('map-queue', 'map-exchange', 'map-rk');

    channel.consume('map-exchange', (message: amqp.ConsumeMessage | null) => {
      try {
        if (message?.content) {
          const content = message.content.toString();
          console.log(content);
          channel.ack(message);
        }
      } catch (err) {
        consumeNodeLogger.error(`Error in the consume node`, err);
        throw new RabbitMqExceptions(null, 'Error in the Rabbit Mq  Exception');
      }
    });
  } catch (err) {
    throw new BadRequestException(null, 'Bad Request Exception');
  }
};
