import React from "react"
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Footer />
     </div>
   </Router>
  );
};

export default App;
