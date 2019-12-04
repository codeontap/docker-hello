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
    environment = os.environ.get('ENVIRONMENT', 'nowhere')

    response = {
        'Greeting' : 'Hi!',
        'Location' : environment,
    }
    return make_response(jsonify(response), 200)
