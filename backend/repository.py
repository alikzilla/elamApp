from models import House

class HouseRepository:
    @staticmethod
    def get_all():
        # Возвращает все объекты домов
        return House.query.all()

    @staticmethod
    def get_by_id(house_id):
        # Возвращает дом по его ID
        return House.query.get(house_id)