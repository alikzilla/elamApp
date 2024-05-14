from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

class ContactFacade:
    def send_message(self, name, email, message):
        print(f"Name: {name}, Email: {email}, Message: {message}")
        return {"status": "success", "message": "Message sent successfully"}

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({"status": "error", "message": "All fields are required"}), 400

    facade = ContactFacade()
    result = facade.send_message(name, email, message)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
