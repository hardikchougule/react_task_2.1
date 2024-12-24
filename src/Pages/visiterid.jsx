import React, { useState } from 'react';

function VisitorID() {
    const visitorData = JSON.parse(localStorage.getItem('visitorData'));
    const [visitorID, setVisitorID] = useState('');
  
    const handleGenerateID = () => {
      const id = `ID-${Date.now()}`;
      setVisitorID(id);
      alert(`Visitor ID for ${visitorData.name}: ${id}`);
    };
  
    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      window.location.href = '/login';
    };
  
    return (
      <div>
        <h2>Visitor ID Generation</h2>
        {visitorData ? (
          <div>
            <p>Name: {visitorData.name}</p>
            <button onClick={handleGenerateID}>Generate Visitor ID</button>
            {visitorID && <p>Generated Visitor ID: {visitorID}</p>}
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>No visitor data found!</p>
        )}
      </div>
    );
  }

  export default VisitorID;