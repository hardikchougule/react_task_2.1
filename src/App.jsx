import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Registration from './pages/registration.jsx';
import Login from './pages/login.jsx';
import GatePass from './pages/gatepass.jsx';
import VisitorID from './pages/visiterid.jsx';
import MultiGateAccess from './pages/multigate.jsx';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <nav>
        {!isLoggedIn ? (
          <>
            <Link to="/">Registration</Link> | <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/gatepass">Gate Pass</Link> | <Link to="/visitorid">Visitor ID</Link> | <Link to="/multigate">Multi-Gate Access</Link>
          </>
        )}
      </nav>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/gatepass" element={<GatePass />} />
            <Route path="/visitorid" element={<VisitorID />} />
            <Route path="/multigate" element={<MultiGateAccess />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

