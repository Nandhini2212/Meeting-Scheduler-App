import React, { useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';

export default function Muicalender() {
  const location=useLocation();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleFinishClick = () => {
    if (selectedDate) {
        // Use the navigate function to redirect to the desired page with selected date as a route parameter
        navigate(`/appointment-details/${selectedDate.format('YYYY-MM-DD')}/${selectedDate.format('HH:mm:ss')}`);
      }
      const userInformation = {
        email: location.state.email,
        username: location.state.name,
        gender: location.state.gender,
        mobileno: location.state.mobileno,
        schedulerusername: location.state.schedulername, // Replace this with the actual scheduler's username
        time: selectedDate.format('HH:mm:ss'),
        bookingdate: selectedDate.format('YYYY-MM-DD'),
      };
    axios.post('http://localhost:8181/postclientinfo', userInformation)
        .then((response) => {
          console.log(response.data);
          console.log(response.data.time);
        })
        .catch((error) => {
          console.error(error);
        });
  };
  const stateFromPreviousComponent = location.state;
  console.log(stateFromPreviousComponent); 

  return (
    <div className='muicalenderdiv'> 
      <div className='choosedate'>
        <h1>Choose a Date:</h1>
        <br />
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
            {/* Pass the selectedDate as the value prop to display the selected date */}
            <DateTimePicker label="Choose your preferred Time" value={selectedDate} onChange={handleDateChange} />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='user-next-btn' onClick={handleFinishClick}>Finish</div>
    </div>
  );
}
