// RateUsModal.js
import React, { useState } from 'react';
import '../pages/css/RateUsModal.css';

const RateUsModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleRatingSubmit = () => {
    if (rating > 0) {
      setShowFeedbackForm(true);
    }
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedbackSubmit = () => {
    // Handle the feedback submission logic here
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // Optionally, you can clear the feedback form or close the modal after submission
    setShowFeedbackForm(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Rate Us</h2>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fas fa-star ${index < rating ? 'active' : ''}`}
              onClick={() => handleStarClick(index)}
            ></i>
          ))}
        </div>
        {!showFeedbackForm ? (
          <button onClick={handleRatingSubmit} className="btn btn-primary">
            Submit Rating
          </button>
        ) : (
          <div className="feedback-form">
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Please leave your feedback here..."
            ></textarea>
            <button onClick={handleFeedbackSubmit} className="btn btn-primary mb-5">
              Submit Feedback
            </button>
          </div>
        )}
        <button onClick={onClose} className="btn btn-secondary mt-3">
          Close
        </button>
      </div>
    </div>
  );
};

export default RateUsModal;
