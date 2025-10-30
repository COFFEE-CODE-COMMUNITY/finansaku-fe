import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import './index.css'
import { UserProvider } from './context/userProvider.jsx'
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
import WaitPage from './components/waitPage.jsx'
import ProtectedRoute from './middleware/protectedRoute.jsx'
import ForgotPassword from './pages/auth/forgotPassPage.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter> 
        <Routes>

          <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signUp' element={<SignUP/>}/> 
            <Route path="/readArticle" element={<ReadArticle />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/waitPage" element={<WaitPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
  
            <Route element={<ProtectedRoute/>}>
              <Route element={<MainLayout/>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="/calendar" element={<Calendar />} />
              </Route>
            </Route>
        </Routes>

    </BrowserRouter>
  </UserProvider>,
)