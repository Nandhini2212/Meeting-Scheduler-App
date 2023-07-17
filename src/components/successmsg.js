import React from 'react';

const AppointmentDetails = ({ date, time }) => {
    console.log('date prop:', date);
console.log('time prop:', time);
  return (
    <div className="appointment-details">
      <h2>Appointment Details</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default AppointmentDetails;