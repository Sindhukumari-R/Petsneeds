import React, { useState } from 'react';
import googleLogo from '../assets/googleLogo.png';
import leftImage from '../assets/loginImg.png';
import axios from 'axios';

const LoginModal = ({ onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');

  const triggerToast = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormValues({ username: '', email: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:5000/login', {
          email: formValues.email,
          password: formValues.password,
        });

        triggerToast(res.data.message, res.data.success ? 'success' : 'error');

        if (res.data.success) {
          const userName = res.data.name || 'User'; 
          onSuccess(userName); 
        }
      } else {
        const res = await axios.post('http://localhost:5000/register', {
          name: formValues.username,
          email: formValues.email,
          password: formValues.password,
        });

        triggerToast(res.data.message, res.data.success ? 'success' : 'error');

        if (res.data.success) {
          onSuccess(formValues.username); 
          setIsLogin(true); 
          setFormValues({ username: '', email: '', password: '' }); 
        }
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something went wrong';
      triggerToast(errorMsg, 'error');
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-content">
        <div className="login-left">
          <img src={leftImage} alt="Welcome" />
        </div>

        <div className="login-right">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>HELLO HOOMAN, GOOD TO SEE YOU!</h2>
          <p>{isLogin ? "Login to continue shopping" : "Create an account for hassle-free shopping"}</p>

          <form className="login-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Enter Name"
                className="form-input"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
                required
              />
            )}
            <input
              type="email"
              placeholder="Enter Email"
              className="form-input"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              required
            />

            {isLogin && (
              <div className="form-footer">
                <a href="#" className="forgot-link" onClick={e => e.preventDefault()}>
                  Forgot Password?
                </a>
              </div>
            )}

            <button type="submit" className="signin-btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="or-text">Or</p>

          <button
            className="google-btn"
            onClick={() => alert('Google login not implemented yet')}
          >
            <img src={googleLogo} alt="Google" />
            Continue with Google
          </button>

          <p className="or-text">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              style={{
                color: "#ef4444",
                cursor: "pointer",
                background: 'none',
                border: 'none',
                padding: 0,
                fontSize: 'inherit'
              }}
              onClick={toggleForm}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>

      {showToast && (
        <div className={`toast ${toastType}`}>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default LoginModal;
