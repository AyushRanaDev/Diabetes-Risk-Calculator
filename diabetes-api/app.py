from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

# Optional: Rate limiter for API protection
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

# Enable dynamic CORS based on environment
if os.environ.get('ENV') == 'production':
    CORS(app, resources={r"/predict": {"origins": "https://your-frontend-url.vercel.app"}})
else:
    CORS(app)

# Rate limiting: 10 requests per minute per IP
limiter = Limiter(get_remote_address, app=app, default_limits=["10 per minute"])

# Load ML model
model = joblib.load('diabetes_model.pkl')


@app.route('/')
def home():
    return "✅ Diabetes Risk Predictor API is running!"


@app.route('/predict', methods=['POST'])
@limiter.limit("10 per minute")  # Apply rate limit
def predict():
    # Validate JSON request
    if not request.is_json:
        return jsonify({'error': 'Invalid input: JSON required'}), 400

    try:
        data = request.get_json()

        # Extract and validate features
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
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
