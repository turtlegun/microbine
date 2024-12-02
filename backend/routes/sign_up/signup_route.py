from flask import Blueprint, request, jsonify
from database import database_initiziation

sign_up = Blueprint('signup', __name__)

@sign_up.route('/signup', methods=['POST'])
def sign_up_route():
    try:
        data = request.get_json()
        email=data.get('email')
        password=data.get('password')
        firstname=data.get('firstname')
        lastname=data.get('lastname')
        username=data.get('username')
        dob=data.get('dob')
        print("date",dob)
        
        con=database_initiziation.get_db_connection()

        
        cursor=con.cursor()
        cursor.execute('''
            INSERT INTO user (email, password, firstname, lastname, username, dob)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (email, password, firstname, lastname, username, dob))
        con.commit()
        con.close()
        return jsonify({"message":"succesfully inserted"}),200

       
    except Exception as e:

        print(str(e))
        return jsonify("something went wrong", str(e)), 404
