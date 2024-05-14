import requests

data = {
    "img": "imgForYou",
    "name": "Nurly Data",
    "cost": "25.000.000tg",
    "address": "Rozibakiyeva",
    "rating": 4.5,
    "description": "The best living complex in Almaty, since it's very comfortable for live."
}

response = requests.post("http://127.0.0.1:5000/houses", json=data)

print(response.json())

