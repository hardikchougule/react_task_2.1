
import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', purpose: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(formData.email);
    const passwordValid = validatePassword(formData.password);

    if (!emailValid || !passwordValid) {
      setErrors({
        email: emailValid ? '' : 'Invalid email format.',
        password: passwordValid ? '' : 'Password must be at least 6 characters.',
      });
      return;
    }

    localStorage.setItem('visitorData', JSON.stringify(formData));
    alert('Registration Successful!');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Visitor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <textarea
          placeholder="Purpose of Visit"
          value={formData.purpose}
          onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
        ></textarea>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;