import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', 
      justifyContent: 'center', alignItems: 'center', 
      height: '100vh', background: '#ffe4e6', color: '#d6336c',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 'bold' }}>
        Welcome to DS Recipes
      </h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => navigate('/signin')}
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
          onMouseEnter={e => (e.target.style.backgroundColor = '#a0284e')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#d6336c')}
        >
          Sign In
        </button>

        <button
          onClick={() => navigate('/signup')}
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
          onMouseEnter={e => (e.target.style.backgroundColor = '#a0284e')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#d6336c')}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
