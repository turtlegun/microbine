from flask import Blueprint, request, jsonify
from database import database_initiziation

login = Blueprint('login', __name__)

@login.route('/login', methods=['POST'])
def login_route():
    try:
        data = request.get_json()
        email=data.get('email')
        password=data.get('password')
        
        username=data.get('username')
        
        
        con=database_initiziation.get_db_connection()

        
        cursor=con.cursor()
        cursor.execute('''
            select * from user where email=? AND password=? AND username=?
        ''', (email, password,  username))
        
        user=cursor.fetchone()
        
        if user:
           

            con.close()
            return jsonify({"message":"user founded"}),200
        else:
           

            con.close()
            return jsonify({"message":"user not founded"}),403
        
       
        

       
    except Exception as e:

        print(str(e))
        return jsonify("something went wrong", str(e)), 404
