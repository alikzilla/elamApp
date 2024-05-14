from database import db

class House(db.Model):
    __tablename__ = 'houses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    cost = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(250), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    img = db.Column(db.String(250), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'cost': self.cost,
            'description': self.description,
            'address': self.address,
            'rating': self.rating,
            'img': self.img
        }
