import React from "react"
import './App.css';

import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"
import Employees from "./pages/Employees"


function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Wrapper>
         <Route exact path="/" component={Employees} />
       </Wrapper>
       <Footer />
     </div>
   </Router>
  );
};

export default App;
