import React, { useState } from 'react';
import './Registration.css'

function RegistrationPage({ handleBackToHero }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
    // Mark registration as completed
    setRegistrationCompleted(true);
  };

  return (
    <section id="registration">
      <div className="registration-page">
      {registrationCompleted ? (
        <div className="success-message">
          <h2>Registration completed successfully! contact you soon..</h2>
          <button onClick={handleBackToHero}>back</button> 
        </div>
      ) : (
        <div>
          <h1>Register for our Gym</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
    </section>
  );
}

export default RegistrationPage;
