import telebot
from telebot import types
import websocket
import threading
import json
import logging
import requests

TOKEN = '7042424926:AAEVsyV_rj6f-01Gff8svlyR6aBXA-dc6-4'
bot = telebot.TeleBot(TOKEN)

logging.basicConfig(level=logging.INFO)

def fetch_recent_earthquakes():
    url = "https://www.seismicportal.eu/fdsnws/event/1/query"
    params = {
        "format": "json",
        "lat": 43.2389,
        "lon": 76.8897,
        "maxradiuskm": 1000,
        "limit": 5,
        "minmag": 1
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  # Проверка на HTTP ошибки
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Ошибка при получении данных: {str(e)}")
        return None

class EarthquakeTracker:
    def __init__(self):
        self.subscribers = set()

    def subscribe(self, chat_id):
        self.subscribers.add(chat_id)

    def unsubscribe(self, chat_id):
        self.subscribers.discard(chat_id)

    def notify_all(self, message):
        for subscriber in self.subscribers:
            bot.send_message(subscriber, message)

tracker = EarthquakeTracker()

def on_message(ws, message):
    data = json.loads(message)
    info = data['data']['properties']
    notification_text = f"🚨 New Earthquake Alert 🚨\nMagnitude: {info['mag']}\nRegion: {info['flynn_region']}\nTime: {info['time']}"
    tracker.notify_all(notification_text)

def on_error(ws, error):
    logging.error(f"WebSocket error: {error}")

def on_close(ws):
    logging.info("### WebSocket closed ###")

def on_open(ws):
    def run(*args):
        logging.info("WebSocket thread is running...")
    threading.Thread(target=run).start()

def start_websocket():
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("wss://www.seismicportal.eu/standing_order/websocket",
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()

threading.Thread(target=start_websocket).start()

@bot.message_handler(commands=['start'])
def send_welcome(message):
    tracker.subscribe(message.chat.id)
    bot.reply_to(message, "You are now subscribed to earthquake notifications!")

@bot.message_handler(commands=['stop'])
def stop_notifications(message):
    tracker.unsubscribe(message.chat.id)
    bot.reply_to(message, "You have unsubscribed from earthquake notifications.")

@bot.message_handler(commands=['latest_earthquakes'])
def latest_earthquakes(message):
    data = fetch_recent_earthquakes()
    if data and 'features' in data:
        response_text = "Последние землетрясения в Алматы:\n"
        for feature in data['features']:
            props = feature['properties']
            response_text += f"- Магнитуда: {props['mag']}, Место: {props['place']}, Время: {props['time']}\n"
        bot.send_message(message.chat.id, response_text)
    else:
        bot.send_message(message.chat.id, "Нет данных о последних землетрясениях.")

if __name__ == '__main__':
    bot.polling(non_stop=True)
