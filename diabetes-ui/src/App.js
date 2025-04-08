import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodpressure: '',
    skinthickness: '',
    insulin: '',
    bmi: '',
    dpf: '',
    age: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pregnancies: Number(formData.pregnancies),
          glucose: Number(formData.glucose),
          bloodpressure: Number(formData.bloodpressure),
          skinthickness: Number(formData.skinthickness),
          insulin: Number(formData.insulin),
          bmi: Number(formData.bmi),
          dpf: Number(formData.dpf),
          age: Number(formData.age)
        }),
      });

      const data = await response.json();
      setResult(data.result); 
    } catch (error) {
      setResult('⚠️ Error connecting to the server.');
    }
  };

  return (
    <div className="app">
      <h1>🧮 Diabetes Risk Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>👶 Pregnancies:</label>
        <input type="number" name="pregnancies" onChange={handleChange} required />

        <label>🩸 Glucose:</label>
        <input type="number" name="glucose" onChange={handleChange} required />

        <label>💓 Blood Pressure:</label>
        <input type="number" name="bloodpressure" onChange={handleChange} required />

        <label>🧬 Skin Thickness:</label>
        <input type="number" name="skinthickness" onChange={handleChange} required />

        <label>💉 Insulin:</label>
        <input type="number" name="insulin" onChange={handleChange} required />

        <label>⚖️ BMI:</label>
        <input type="number" name="bmi" onChange={handleChange} required />

        <label>🧪 Diabetes Pedigree Function:</label>
        <input type="number" name="dpf" step="0.01" onChange={handleChange} required />

        <label>🎂 Age:</label>
        <input type="number" name="age" onChange={handleChange} required />

        <button type="submit">Check Risk</button>
      </form>

      {result && (
        <div className="result">
          <strong>🧾 Result:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default App;
