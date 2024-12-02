from flask import request, jsonify, Blueprint
from database import database_initiziation
from flask_mail import Message
from mail_config import mail
import random

recovery = Blueprint('password_recovery', __name__)


verification_data = {}


@recovery.route('/recovery', methods=['POST'])
def password_recovery():
    try:
        data = request.get_json()
        email = data.get('email')
        username = data.get('username')

        con = database_initiziation.get_db_connection()
        cursor = con.cursor()
        cursor.execute('''
            SELECT * FROM user WHERE email=? AND username=?
        ''', (email, username))

        user = cursor.fetchone()
        con.close()

        if user:
           
            code = ''.join([str(random.randint(0, 9)) for _ in range(6)])
            verification_data[email] = code 

          
            subject = "Password Recovery"
            message = f"Dear {username},\n\nTo reset your password, please use this verification code: {code}"

            msg = Message(subject=subject, recipients=[email], body=message)
            mail.send(msg)

            return jsonify({"message": "Password recovery email sent!"}), 200
        else:
            return jsonify({"message": "User not found"}), 404

    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500


@recovery.route('/verify-code', methods=['POST'])
def verify_code():
    try:
        data = request.get_json()
        email = data.get('email')
        user_code = data.get('code')


        stored_code = verification_data.get(email)
        print(stored_code)
        print(user_code)

        if stored_code and stored_code == user_code:
            return jsonify({"message": "Verification successful!"}), 200
        else:
            return jsonify({"message": "Invalid or expired code"}), 400

    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500

@recovery.route('/update-password', methods=['POST'])
def update_password():
    try:
        data = request.get_json()
        email = data.get('email')
        new_password = data.get('new_password')



        con = database_initiziation.get_db_connection()
        cursor = con.cursor()
        cursor.execute('''
            UPDATE user SET password=? WHERE email=?
        ''', (new_password, email))
        con.commit()
        con.close()

      
        return jsonify({"message": "Password updated successfully!"}), 200

    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500