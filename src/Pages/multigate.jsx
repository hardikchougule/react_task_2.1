import React, { useState } from 'react';

function MultiGateAccess() {
    const [selectedGate, setSelectedGate] = useState('');
    const [accessMessage, setAccessMessage] = useState('');
  
    const handleAccess = () => {
      const message = `Access granted for gate: ${selectedGate}`;
      setAccessMessage(message);
      alert(message);
    };
  
    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      window.location.href = '/login';
    };
  
    return (
      <div>
        <h2>Multi-Gate Access</h2>
        <select value={selectedGate} onChange={(e) => setSelectedGate(e.target.value)}>
          <option value="">Select Gate</option>
          <option value="Gate 1">Gate 1</option>
          <option value="Gate 2">Gate 2</option>
          <option value="Gate 3">Gate 3</option>
        </select>
        <button onClick={handleAccess}>Grant Access</button>
        {accessMessage && <p>{accessMessage}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  export default MultiGateAccess;
  