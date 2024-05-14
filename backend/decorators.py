from flask import jsonify
from functools import wraps

def handle_errors(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except Exception as e:
            print(f"An error occurred: {str(e)}")
            return jsonify({'error': 'An internal server error occurred'}), 500
    return decorated_function
