from flask import Flask
from flask_cors import CORS

from mail_config import mail
from dotenv import load_dotenv
import os

load_dotenv()

from database import table_creation




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
from routes.predictionRoute import prediction

app.register_blueprint(sign_up)

app.register_blueprint(login)

app.register_blueprint(recovery)

app.register_blueprint(prediction)

@app.route('/')
def home():
    print("hello")
    return "hello"

app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
