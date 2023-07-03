import './App.css';
import Header from './componant/Header.js'
import {Routes, Route} from 'react-router-dom'
import React from 'react';
import Login from './componant/Login.js'

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>page Not Foundcd </h1>} />
      </Routes>
    </div>
  );
}

export default App;
