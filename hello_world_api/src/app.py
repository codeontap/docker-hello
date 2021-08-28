import os

from flask import Flask
from flask import make_response
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app=app, methods=['GET'])

app.config.update(
    {
        'JSONIFY_PRETTYPRINT_REGULAR' : True,
    }
)

@app.route('/')
def greet():
    location = os.environ.get('LOCATION', 'nowhere')
    greeting = os.environ.get('GREETING', 'Hello!')

    response = {
        'Greeting' : greeting,
        'Location' : location,
    }
    return make_response(jsonify(response), 200)
