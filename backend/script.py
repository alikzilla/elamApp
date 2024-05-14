import requests

data = {
    "img": "imgForYou",
    "name": "RC 4YOU",
    "cost": "30.000.000tg",
    "address": "Rozibakiyeva",
    "rating": 4.9,
    "description": "Разработкой концепта 4YOU занималась известная американская компания Ayenk – и им удалось собрать воедино изящный дизайн зданий и ландшафта, соединив его с удобными решениями для комфортной жизни внутри комплекса. Цена жилого комплекса завышена, но при этом ЖК является удобным, новым и комфортным для жильцов. В плане сейсмоустойчивости угрозы жилой комплекс в порядке, хотя ЖК находится ближе к горам, этот факт был взять и построили надежную основу ЖК. Рядом находятся госучреждения в которые можно будет пойти при случае землетрясения."
}

response = requests.post("http://127.0.0.1:5000/houses", json=data)

print(response.json())

