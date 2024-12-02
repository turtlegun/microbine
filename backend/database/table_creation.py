import sqlite3

DATABASE = './storage/microme.db'  

def create_table():


    conn=sqlite3.connect(DATABASE)

    cursor=conn.cursor()

    cursor.execute('''

    CREATE TABLE IF NOT EXISTS user(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName varchar(50),
                lastName varchar(50),
                dob Date,
                email varchar(50),
                username varchar(50),
                password varchar(50)

                );
                    ''')

    conn.commit()
    conn.close()

