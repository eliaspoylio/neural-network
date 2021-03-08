import time
from flask import Flask
import numpy as np

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/sigmoid/<x>')
def sigmoid(x):
    nr = int(x)
    sigmoid = 1 / (1 * np.exp(-nr))
    return { 'sigmoid': sigmoid }