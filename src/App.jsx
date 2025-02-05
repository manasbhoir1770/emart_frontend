import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './Components/Home/Home';
import NavigationBar from './Components/Home/nav';
import Login from './Components/Login/login';
// import Cart from './Components/Cart/Cart'; // Import Cart component

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;