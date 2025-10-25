import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import './index.css'
import { UserProvider } from './context/userProvider.jsx'
// import Route from "./routePages.jsx"
import Article from './pages/landing/articlePage.jsx'
import Login from './pages/auth/loginPage'
import SignUP from './pages/auth/signUpPage'
import ReadArticle from './pages/landing/readArticlePage.jsx'
import Dashboard from './pages/app/dashboard'
import Survey from './pages/app/survey.jsx'
import Calendar from './pages/app/calendar.jsx'
import LandingPage from './pages/landing/landingPage.jsx'
import MainLayout from './layout/mainLayout.jsx'
import ArticlePage from './pages/landing/articlePage.jsx'

const isLoggedIn = () => {
  console.log( localStorage.getItem("token"))
  return localStorage.getItem("token") !== null; // misal token disimpan di localStorage
};


createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter> 
        <Routes>

          <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path='/SignUp' element={<SignUP/>}/> 
            <Route path="/ReadArticle" element={<ReadArticle />} />
            <Route path="/Article" element={<ArticlePage />} />
            {/* <Route path='/ForgotPassword' element={<ForgotPass/>}/> BELOM DIAKTIFKAN LAGI*/}

            <Route element={isLoggedIn() ? <MainLayout /> : <Navigate to="/login" />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/calendar" element={<Calendar />} />
            </Route>

            {/* def navigate */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
    </BrowserRouter>
  </UserProvider>,
)