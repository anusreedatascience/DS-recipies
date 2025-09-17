import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Recipie from './pages/Recipie';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/recipie/:id" element={<Recipie />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
