import time
from flask import Flask
import numpy as np
from perceptron import train
import json

app = Flask(__name__)

@app.route('/sigmoid/<x>')
def sigmoid(x):
    nr = int(x)
    sigmoid = 1 / (1 * np.exp(-nr))
    return { 'sigmoid': sigmoid }

@app.route('/perceptron_test/<i>')
def perceptroniterations(i):
    result = train(int(i))
    lists = result.tolist()
    json_str = json.dumps(lists)
    return { 'output': json_str }
