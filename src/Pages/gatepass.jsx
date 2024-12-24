import React, { useState } from 'react';

function GatePass() {
    const visitorData = JSON.parse(localStorage.getItem('visitorData'));
  
    const handlePrint = () => {
      window.print();
    };
  
    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      window.location.href = '/login';
    };
  
    return (
      <div>
        <h2>Gate Pass</h2>
        {visitorData ? (
          <div>
            <p>Name: {visitorData.name}</p>
            <p>Email: {visitorData.email}</p>
            <p>Phone: {visitorData.phone}</p>
            <button onClick={handlePrint}>Print Gate Pass</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>No visitor data found!</p>
        )}
      </div>
    );
  }

  export default GatePass;
  
