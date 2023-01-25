import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';

// import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
