from pika.exchange_type import ExchangeType
import pika

def consume_mapContent():
    try:

        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        channel = connection.channel()




    except Exception as e:
        print(f'{e}')

