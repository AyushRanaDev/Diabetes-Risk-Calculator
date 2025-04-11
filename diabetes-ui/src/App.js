import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Switch from 'react-switch';
import { FaMoon, FaSun, FaHospitalUser, FaSearchLocation } from 'react-icons/fa';
import ClipLoader from "react-spinners/ClipLoader";


const testimonials = [
  { name: 'Ananya Sharma', quote: '“This tool changed the way I think about my health!”' },
  { name: 'Rahul Verma', quote: '“Accurate and super easy to use – highly recommended!”' },
  { name: 'Sneha Kapoor', quote: '“I had no idea I was at risk. This saved me!”' },
  { name: 'Arjun Mehta', quote: '“Very helpful and informative. Loved the UI too!”' },
  { name: 'Tanya Bhatt', quote: '“Feels like a real health assistant.”' },
  { name: 'Daniel Lee', quote: '“Sleek, fast, and shockingly accurate.”' },
  { name: 'Maya Iyer', quote: '“As a medical student, I found this tool incredibly useful.”' },
  { name: 'Kabir Das', quote: '“Great design, smooth animations, and helpful results.”' },
  { name: 'Ishita Jain', quote: '“Now I actually check my health regularly!”' },
  { name: 'Ravi Choudhary', quote: '“Got my dad to use it too — he loved it.”' },
  { name: 'Meera Desai', quote: '“Simple, effective, and beautiful app.”' },
  { name: 'Jay Khanna', quote: '“I shared this with my whole family.”' },
  { name: 'Nikita Roy', quote: '“Game-changer in daily health tracking.”' },
  { name: 'Pranav Ghosh', quote: '“Clear results, actionable advice. Perfect.”' },
  { name: 'Aisha Khan', quote: '“Even my grandmother could use it!”' },
  { name: 'Yash Patil', quote: '“10/10 design and insights.”' },
  { name: 'Kritika Nair', quote: '“User-friendly and informative.”' },
  { name: 'Mohit Rathi', quote: '“Quick check with huge value.”' },
  { name: 'Tanvi Sengupta', quote: '“Helped me adopt healthier habits.”' },
  { name: 'Aarav Joshi', quote: '“Top-notch work!”' },
  { name: 'Zoya Malik', quote: '“Loved the animations and the message.”' },
  { name: 'Dev Kapoor', quote: '“Clean UX and reliable predictions.”' },
  { name: 'Nandini Rao', quote: '“I use this monthly now!”' },
  { name: 'Samar Paul', quote: '“Well done! Impressive tech.”' },
  { name: 'Aman Singh', quote: '“Helps me plan my diet better.”' },
  { name: 'Harshita Jain', quote: '“Simple form, powerful backend.”' },
  { name: 'Neha Bhagat', quote: '“The result pop-up is genius!”' },
  { name: 'Ritika Shah', quote: '“Shared with my gym group.”' },
  { name: 'Imran Syed', quote: '“Definitely bookmarking this.”' },
  { name: 'Varsha Menon', quote: '“Just what I needed.”' },
  { name: 'Shubham Thakur', quote: '“Thank you for this tool.”' },
  { name: 'Divya Bansal', quote: '“My health routine just got smarter.”' },
  { name: 'Ajay Dubey', quote: '“Every college student should try it.”' },
  { name: 'Simran Arora', quote: '“Love the light/dark mode toggle!”' },
  { name: 'Lakshya Rawat', quote: '“Got instant clarity on my risk.”' },
  { name: 'Pooja Dey', quote: '“Doctor-recommended design.”' },
  { name: 'Manav Sethi', quote: '“Was worried — this helped a lot.”' },
  { name: 'Krishna Das', quote: '“Clean, intuitive, and powerful.”' },
  { name: 'Sana Sheikh', quote: '“I check my parents regularly with it.”' },
  { name: 'Rohan Mehra', quote: '“Best app I found on LinkedIn.”' },
  { name: 'Jaya Lamba', quote: '“Interactive and meaningful.”' },
  { name: 'Arvind Yadav', quote: '“Saved me a trip to the doctor.”' },
  { name: 'Kavya Pillai', quote: '“Elegant and functional UI.”' },
  { name: 'Sameer Khan', quote: '“Healthtech done right.”' },
  { name: 'Deepti Saxena', quote: '“Will recommend to friends.”' },
  { name: 'Viraj Malhotra', quote: '“Didn’t expect this to work so well.”' },
  { name: 'Lavanya Reddy', quote: '“Must-try if you’re curious about diabetes.”' },
  { name: 'Ankit Mishra', quote: '“Professional quality and accuracy.”' },
  { name: 'Charu Vora', quote: '“My dietician loved this too.”' },
  { name: 'Nikhil Jaiswal', quote: '“Great mobile experience.”' },
  { name: 'Srishti Dutta', quote: '“This is next-level AI.”' },
  { name: 'Ayan Mallick', quote: '“Great work! Keep building.”' },
  { name: 'Tushar Pandey', quote: '“Replaced my spreadsheet tool.”' },
  { name: 'Pallavi Sinha', quote: '“Cleanest design I’ve seen in health apps.”' },
  { name: 'Bhavya Chauhan', quote: '“Fun to use with serious insights.”' },
  { name: 'Omkar Shetty', quote: '“Open-source magic right here.”' },
  { name: 'Ruchi Meena', quote: '“Love the consult button for high risk!”' },
  { name: 'Satyam Negi', quote: '“Perfect for busy professionals.”' },
  { name: 'Ayesha Siddiqui', quote: '“This should go viral!”' },
  { name: 'Gaurav Bhati', quote: '“Accurate. Aesthetically pleasing. Awesome.”' },
  { name: 'Ila Srivastava', quote: '“One of my favorite AI projects.”' },
  { name: 'Jatin Kothari', quote: '“Looks great and works even better.”' },
  { name: 'Naina Chawla', quote: '“Motivated me to start walking daily.”' },
  { name: 'Ashwin Rao', quote: '“Made me rethink my health routine.”' },
  { name: 'Muskaan Jain', quote: '“Fantastic layout and flow.”' },
  { name: 'Parth Agarwal', quote: '“AI + healthcare = Future is here.”' },
  { name: 'Ritika Rawal', quote: '“Even shared it on my Instagram.”' },
  { name: 'Tarun Goel', quote: '“Great for awareness campaigns.”' }
];

function App() {
  const [formData, setFormData] = useState({
    pregnancies: '', glucose: '', bloodpressure: '',
    skinthickness: '', insulin: '', bmi: '', dpf: '', age: ''
  });

  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    fadeIns.forEach(el => observer.observe(el));
    return () => fadeIns.forEach(el => observer.unobserve(el));
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSubmit = async e => {
    e.preventDefault();

    // Input validation
    const { glucose, age, bmi, insulin } = formData;
    if (glucose < 70 || glucose > 300) {
      alert("Please enter a valid glucose level between 70-300.");
      return;
    }
    if (age < 1 || age > 120) {
      alert("Please enter a valid age between 1-120.");
      return;
    }
    if (bmi < 10 || bmi > 60) {
      alert("Please enter a valid BMI between 10-60.");
      return;
    }
    if (insulin < 0 || insulin > 900) {
      alert("Please enter a valid insulin level between 0-900.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data.result);
      setShowPopup(true);
    } catch (error) {
      console.error("API Error:", error);
      alert("Error connecting to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={isDarkMode ? 'App dark' : 'App'}>
      <div className="navbar">
        <h1><FaHospitalUser /> Diabetes Risk Checker</h1>
        <p>AI Powered | MCA @ UPES</p>
        <div className="toggle-container">
          <FaSun />
          <Switch onChange={toggleDarkMode} checked={isDarkMode} />
          <FaMoon />
        </div>
      </div>

      <section className="hero fade-in">
        <h2>🏥 Welcome to Diabetes Risk Checker</h2>
        <p>Let’s begin your health journey 🚀</p>
        <button className="scroll-btn" onClick={scrollToForm}>Slide to Continue 👇</button>
      </section>

      <section ref={formRef} className="fade-in form-block">
        <h2>🧠 Start Your Diabetes Risk Check</h2>
        <p>Slide down and fill the form 📝</p>
        {loading ? (
          <ClipLoader color="#36d7b7" />
        ) : (
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map(key => (
              <input
                key={key}
                name={key}
                value={formData[key]}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                onChange={handleChange}
                required
              />
            ))}
            <button type="submit">Check Risk</button>
          </form>
        )}
      </section>

      {showPopup && (
        <div className="popup">
          <h2>Risk Level: {result}</h2>
          {result.toLowerCase().includes('high risk') ? (
            <>
              <p className="high-risk-msg">
                ⚠️ You are at high risk for diabetes. Please consult a specialist immediately.
              </p>
              <button
                className="consult-btn"
                onClick={() => window.open('https://www.google.com/search?q=diabetes+doctor+near+me', '_blank')}
              >
                Search Nearby Doctors
              </button>
            </>
          ) : result.toLowerCase().includes('low risk') ? (
            <p style={{ color: 'green', fontWeight: '500' }}>
              ✅ You are at low risk. Keep up your healthy habits!
            </p>
          ) : (
            <p style={{ color: '#f9a825', fontWeight: '500' }}>
              ⚠️ You may be at medium risk. Maintain a healthy lifestyle and monitor regularly.
            </p>
          )}
          <button onClick={() => window.print()}>📄 Download Report</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      <section className="testimonial-slide fade-in">
        <h2>What People Are Saying 💬</h2>
        <blockquote>
          {testimonials[currentTestimonial].quote} – <strong>{testimonials[currentTestimonial].name}</strong>
        </blockquote>
      </section>

      <section className="info-section fade-in">
        <h2>📖 What is Diabetes?</h2>
        <p>Diabetes is a chronic condition where the body struggles to regulate blood sugar levels. Early detection is key.</p>
        <h3>🚫 What to Avoid</h3>
        <ul>
          <li>Excess sugar intake</li>
          <li>Processed foods</li>
          <li>Sedentary lifestyle</li>
          <li>Late-night binge eating</li>
        </ul>
        <h3>⚠️ Common Symptoms</h3>
        <ul>
          <li>Frequent urination</li>
          <li>Increased thirst</li>
          <li>Fatigue</li>
          <li>Blurred vision</li>
        </ul>
        <h3>🧠 Effects if Untreated</h3>
        <ul>
          <li>Vision loss</li>
          <li>Kidney damage</li>
          <li>Heart disease</li>
          <li>Nerve damage</li>
          <li>Amputation in severe cases</li>
        </ul>
      </section>

      <footer>
        <p>© 2025 Diabetes Risk Checker. Built with ❤️ by MCA @ UPES</p>
      </footer>
    </div>
  );
}

export default App;
