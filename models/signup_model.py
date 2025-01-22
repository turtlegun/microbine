from database_init import db


class User(db.Model):
    username=db.Column(db.String(100),primary_key=True)
    email=db.Column(db.String(120),unique=True,nullable=False)
    password=db.Column(db.String(128),nullable=False)

    def __repr__(self):
        return "user created successfully"