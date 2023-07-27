import React from 'react';
import { useParams } from 'react-router-dom';

const AppointmentDetails = () => {
  const { date, time } = useParams();

  return (
    <div className="appointment-details-container">
      <div className="center-content">
        <div className="success-message">
          <p className="big-text">Your meeting has been successfully booked!</p>
          <p className="big-text">Date: {date}</p>
          <p className="big-text">Time: {time}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
