import logging
import os
from logging.handlers import RotatingFileHandler


LOG_DIR = "logs"
LOG_FILE = "app.log"


if not os.path.exists(LOG_DIR):
    os.makedirs(LOG_DIR)


def setup_logger():
    logger = logging.getLogger("my_logger")
    logger.setLevel(logging.DEBUG)


    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')



    # Console handler
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(formatter)


    file_handler = RotatingFileHandler(os.path.join(LOG_DIR, LOG_FILE), maxBytes=5 * 1024 * 1024, backupCount=3)
    file_handler.setLevel(logging.DEBUG)  # Log DEBUG and above to file
    file_handler.setFormatter(formatter)


    logger.addHandler(console_handler)
    logger.addHandler(file_handler)

    return logger



logger = setup_logger()