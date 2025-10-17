import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/form/login.jsx'
import LandingPage  from './pages/landingPage/landingPage.jsx';
import Article from './pages/landingPage/components/article.jsx';
import Dashboard from './pages/user/dashboard.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/Article" element={<Article />} /> 
      </Routes>
    </>
  )
}

export default App