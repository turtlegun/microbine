from flask import Flask
from database_init import db
from routes.signup import signup_blue
app=Flask(__name__)
import os
from routes.login.login import login_blueprint
from flask_cors import CORS
basedir=os.path.abspath(os.path.dirname(__file__))
print(basedir)


app.config['SQLALCHEMY_DATABASE_URI']=f"sqlite:///{os.path.join(basedir,'database','data.db')}"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db.init_app(app)

CORS(app,origins=["http://localhost:5173"])

print(app.config['SQLALCHEMY_DATABASE_URI'])

app.register_blueprint(signup_blue)
app.register_blueprint(login_blueprint)
@app.route('/')

def home():
    return "welcome to home"

if __name__=='__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True,port=5000)