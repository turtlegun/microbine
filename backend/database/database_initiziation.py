import sqlite3

DATABASE = './storage/microme.db'  

def get_db_connection():
    """Function to establish and return a database connection."""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  
    return conn