import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your sign-in validation/login logic here if needed
    navigate('/home'); // Redirect to home page after sign in
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffe4e6', // soft pink background
        color: '#d6336c', // dark pink text
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '2px solid #d6336c',
          marginBottom: '1.5rem',
          width: '300px',
        }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '2px solid #d6336c',
          marginBottom: '2rem',
          width: '300px',
        }}
      />

      <button
        onClick={handleSignIn}
        style={{
          backgroundColor: '#d6336c',
          color: 'white',
          border: '2px solid #d6336c',
          padding: '0.75rem 2rem',
          fontSize: '1.2rem',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#a0284e')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#d6336c')}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
