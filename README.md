# 🧠 DiabetesRiskChecker – AI-Powered Diabetes Prediction Web App

**DiabetesRiskChecker** is a full-stack, production-ready AI web application that predicts an individual's risk of diabetes based on eight key health metrics. Built with a RandomForest ML model, Flask API, and a modern ReactJS frontend, the app delivers real-time risk assessment, educational insights, and a seamless user experience.

> 📍 [Live Site](https://diabetesriskchecker.netlify.app) &nbsp;&nbsp;&nbsp;&nbsp;🔗 [Backend API](https://diabetes-risk-calculator.onrender.com) &nbsp;&nbsp;&nbsp;&nbsp;📂 [GitHub Repo](https://github.com/AyushRanaDev/Diabetes-Risk-Calculator)

---

## 🔍 Overview

This project was developed in 5 intensive days, focusing on:

- 🧠 Building an ML model for accurate diabetes prediction
- ⚙️ Developing a RESTful Flask backend with validation and security
- 🎨 Designing a modern, scroll-based, dark-themed React UI
- 🌐 Deploying on **Netlify** (frontend) and **Render** (backend)
- 📝 Integrating real-world features like PDF generation, testimonial sliders, and doctor search

---

## ✅ Features

- **AI-Powered Prediction** using trained `RandomForestClassifier`
- **Live Result with Risk Level**: Positive/Negative with warning messages
- **Downloadable PDF Report** summarizing user input & risk
- **Google Search for Doctors** (via one-click query)
- **Dark Mode Toggle** with persistent user preference
- **Scroll-based Navigation** with onboarding flow
- **Responsive Design**: Mobile, tablet, and desktop support
- **Animated Testimonials**: Carousel of 69 rotating slides
- **Educational Sections**: Symptoms, prevention, effects if untreated, and more

---

## 🧰 Tech Stack

| Layer        | Technologies Used                                           |
|--------------|-------------------------------------------------------------|
| **Frontend** | ReactJS, HTML5, CSS3, JavaScript, Google Fonts              |
| **Backend**  | Python, Flask, scikit-learn, pandas, joblib, CORS, Gunicorn |
| **ML Model** | RandomForestClassifier (accuracy ~74%)                      |
| **Deployment** | Netlify (React frontend) + Render (Flask backend)         |

---

## 📁 Project Structure
Diabetes-Risk-Calculator/
│
├── diabetes-api/        # Flask backend
│   ├── app.py
│   ├── diabetes_model.pkl
│   ├── requirements.txt
│   └── Procfile
│
├── diabetes-ui/         # React frontend
│   ├── public/
│   ├── src/
│   └── .env
│
├── README.md



---

## 🎯 Input Features

The model predicts diabetes risk based on these 8 numerical features:

1. Pregnancies
2. Glucose
3. Blood Pressure
4. Skin Thickness
5. Insulin Level
6. BMI
7. Diabetes Pedigree Function
8. Age

---

## 📈 Model Details

- **Algorithm:** RandomForestClassifier
- **Accuracy:** 74%
- **Validation:** 5-fold cross-validation
- **Trained using:** `scikit-learn`, `pandas`
- **Saved as:** `.pkl` file with `joblib`

---

## 🧪 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AyushRanaDev/Diabetes-Risk-Calculator.git
cd Diabetes-Risk-Calculator

