import os

from flask import Flask
from flask import make_response
from flask import jsonify

app = Flask(__name__)

app.config.update(
    {
        'JSONIFY_PRETTYPRINT_REGULAR' : True,
    }
)

@app.route('/')
def hello_world():
    location = os.environ.get('LOCATION', 'nowhere')

    response = {
        'Greeting' : 'Hello!',
        'Location' : location,
    }
    return make_response(jsonify(response), 200)
