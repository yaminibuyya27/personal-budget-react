import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);



function App() {
  return (
    <Router >
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
