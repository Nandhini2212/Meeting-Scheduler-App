import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {useSelector } from 'react-redux';
const Url = () => {
  const [url, setUrl] = useState('');
  const location = useLocation();
  const user=useSelector(state => state.user.value)
  useEffect(() => {
    // This is a simple example of generating the URL based on the username.
    // Replace this with your actual URL generation logic.
    const baseUrl = 'http://localhost:3000/userinfo/';
    const generatedUrl = baseUrl + user.name;
    setUrl(generatedUrl);
  }, [location.state?.username]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  return (
    <div className="url-container">
      {url && (
        <div className="url-content">
          <p>Your URL:</p>
          <div className="url-display">
            <p>{url}</p>
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Url;
