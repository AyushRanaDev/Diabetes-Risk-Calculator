import requests

url = 'http://127.0.0.1:5000/predict'

data = {
    "Pregnancies": 2,
    "Glucose": 120,
    "BloodPressure": 70,
    "SkinThickness": 20,
    "Insulin": 79,
    "BMI": 25.5,
    "DiabetesPedigreeFunction": 0.3,
    "Age": 30
}

response = requests.post(url, json=data)
print(response.json())
