from flask import jsonify,Blueprint,request
from database_init import db
from models.signup_model import User


signup_blue=Blueprint('signup',__name__)

print(__name__)

@signup_blue.route('/signup',methods=['POST'])

def signup_route():
    data=request.get_json()
    print(data)
    username=data['username']
    email=data['email']
    password=data['password']
    new_user=User(username=username,email=email,password=password)
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({"message":"user created successfully"}),200
    except Exception as e:
        if 'UNIQUE constraint failed' in str(e):
            if "user.email" in str(e):
                return jsonify({"message":"This Email is Already in Use"}),409
            if "user.username" in str(e):
                return jsonify({"message":"This Username is Already in Use"}),409
        db.session.rollback()
        print(str(e))
        return jsonify({"message":"something went wrong"}),404



    
