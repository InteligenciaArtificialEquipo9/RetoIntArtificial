import numpy as np
import pickle
from flask import Flask, request

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))


@app.route('/')
def home():
    return 'HOME'

@app.route('/predict',methods=['POST'])
def predict():
    resp = request.get_json()
    val1 = resp['Pclass']
    val2 = resp['Sex']
    val3 = resp['Fare']
    val4 = resp['Embarked']
    features = [val1, val2, val3, val4]
    final_features = np.array(features).reshape(1,-1)
    prediction = model.predict(final_features)
    print(prediction)
    return str(prediction)

if __name__ == "__main__":
    app.run('192.168.1.65')
    