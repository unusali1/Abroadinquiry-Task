import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/home/Home"
import CountryDetail from './pages/country-detail/CountryDetail';



const App = () => {
  return (
    
    <Router >
      
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/countryDetail/:cid" element={<CountryDetail />} />
        
      </Routes>
    </Router>
  )
}

export default App