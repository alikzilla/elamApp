from flask import Flask, jsonify, request
from flask_cors import CORS
from database import db
from repository import HouseRepository
from models import House 

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)  

    with app.app_context():
        db.create_all() 

    @app.route('/houses', methods=['GET'])
    def get_houses():
        houses = HouseRepository.get_all()
        return jsonify([house.to_dict() for house in houses])

    @app.route('/houses/<int:id>', methods=['GET'])
    def get_house(id):
        house = HouseRepository.get_by_id(id)
        if house:
            return jsonify(house.to_dict())
        else:
            return jsonify({"error": "House not found"}), 404

    @app.route('/houses', methods=['POST'])
    def add_house():
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400

        new_house = House(
            name=data.get('name'),
            cost=data.get('cost'),
            description=data.get('description'),
            address=data.get('address'),
            rating=data.get('rating'),
            img=data.get('img')
        )

        db.session.add(new_house)
        db.session.commit()

        return jsonify({"message": "House added successfully", "house": new_house.to_dict()}), 201

    @app.route('/houses/<int:id>', methods=['DELETE'])
    def remove_house(id):
        house = HouseRepository.get_by_id(id)
        if house:
            db.session.delete(house)
            db.session.commit()
            return jsonify({"message": "House removed successfully"})
        else:
            return jsonify({"error": "House not found"}), 404


    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
