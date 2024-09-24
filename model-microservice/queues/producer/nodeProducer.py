import pika
from pika.exchange_type import ExchangeType



def send_to_node_microservice(data):
    try:
        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        channel = connection.channel()

        channel.exchange_declare(exchange='map-exchange',exchange_type=ExchangeType.direct,durable=True)

        channel.queue_declare(queue='map-queue',durable=True)
        
        channel.queue_bind(queue='map-queue',exchange='map-exchange',routing_key='map-rk')

        channel.basic_publish(exchange='map-exchange',routing_key='map-rk',body=data,properties=pika.BasicProperties(delivery_mode=2))

        print(F'Message is send to map-queue')


    except Exception as e:
        print(f'{e}')

    finally:
        if 'connection' in locals():
            connection.close()