import os

from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    environment = os.environ.get('ENVIRONMENT', 'nowhere')
    return render_template('hello.html', environment=environment)
