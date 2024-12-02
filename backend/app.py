from flask import Flask
from flask_cors import CORS
import numpy as np
from mail_config import mail
from dotenv import load_dotenv
import os

load_dotenv()

from database import table_creation

import tensorflow as tf
import logging
logging.getLogger('tensorflow').setLevel(logging.ERROR)



table_creation.create_table()

app = Flask(__name__)
CORS(app)

email=os.getenv('email')
password=os.getenv('password')


app.config['MAIL_SERVER'] = 'smtp.gmail.com' 
app.config['MAIL_PORT'] = 587 
app.config['MAIL_USE_TLS'] = True  
app.config['MAIL_USERNAME'] = email 
app.config['MAIL_PASSWORD'] = password  
app.config['MAIL_DEFAULT_SENDER'] = email 

mail.init_app(app)

from routes.sign_up import sign_up
from routes.login import login
from routes.password_recovery import recovery
app.register_blueprint(sign_up)

app.register_blueprint(login)

app.register_blueprint(recovery)


if __name__ == '__main__':
    app.run(debug=True)
