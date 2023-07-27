import React, { useState } from 'react';
import axios from 'axios';
const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the email and feedback, such as sending them to a backend server for processing.
    const dataToSend = {
        "email":email,
        "feedback": feedback
      }
      axios.post('http://localhost:8082/addUserFeedback', dataToSend)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        // window.location.reload();
        alert("Your Feedback is submited");
    console.log(dataToSend);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    // You can perform additional actions here, like validation or API calls.
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="feedback-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="feedback-form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows="5"
            required
          />
        </div>
        <button type="submit" className='continue-btn'>Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
