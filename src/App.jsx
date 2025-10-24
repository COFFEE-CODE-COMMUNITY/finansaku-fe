import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
// Public Pages
import LandingPage from './pages/landingPage/landingPage.jsx';
import Login from './pages/form/login.jsx';
import Article from './pages/landingPage/article.jsx';
// User Pages
import MainLayout from './pages/user/layout/mainLayout.jsx';
import DefaultPage from './pages/user/components/defPage.jsx';
import Survey from './pages/user/survey.jsx';
import Calendar from './pages/user/calendar.jsx';
import Dashboard from './pages/user/dashboard.jsx'
// import ForgotPass from './pages/form/forgotPass/forgotPassPage.jsx' // deleter sementara
import SignUp from '../src/pages/form/signUp.jsx'
import ReadArticle from './pages/landingPage/readArticle.jsx';
import { UserProvider } from './pages/context/userProvider.jsx';

const isLoggedIn = () => {
  console.log( localStorage.getItem("token"))
  return localStorage.getItem("token") !== null; // misal token disimpan di localStorage
};

function App() {
  return (
    <UserProvider>
      <Routes>

        {/* atur atur*/}
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article" element={<Article />} />
        {/* <Route path='/ForgotPassword' element={<ForgotPass/>}/> */}
        <Route path='/SignUp' element={<SignUp/>}/>  
        <Route path="/readArticle" element={<ReadArticle />} />


        {/* Protected Pages */}
        <Route element={isLoggedIn() ? <MainLayout /> : <Navigate to="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>

        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </UserProvider>
  )
}

export default App;
