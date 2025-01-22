from flask import jsonify,Blueprint,request
from database_init import db
from models.signup_model import User


login_blueprint=Blueprint('login',__name__)

@login_blueprint.route('/login',methods=['POST'])
    
def login_route():
    data=request.get_json()
    username=data['username']
    password=data['password']
    try:
        result=User.query.filter(User.username==username).first()
        if result is None:
            return jsonify({"message":"Incorrect username or password"}),404
        
        elif(result.password==password):
                return jsonify({"message":"user founded"}),200
            
        else:
                return jsonify({"message":"Incorrect username or password"}),404
            
            
     
    except Exception as e:
        return jsonify({"message":f"{str(e)}" , "sever_error":"something went wrong"}),500