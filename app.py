from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model
model = joblib.load('diabetes_model.pkl')

@app.route('/')
def home():
    return "✅ Diabetes Risk Predictor API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Get features from request
        features = np.array([[ 
            float(data['pregnancies']),
            float(data['glucose']),
            float(data['bloodpressure']),
            float(data['skinthickness']),
            float(data['insulin']),
            float(data['bmi']),
            float(data['dpf']),
            float(data['age'])
        ]])

        prediction = model.predict(features)[0]

        result_text = "Positive (High Risk)" if prediction == 1 else "Negative (Low Risk)"

        return jsonify({
            'prediction': int(prediction),
            'result': result_text
        })
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=False)
