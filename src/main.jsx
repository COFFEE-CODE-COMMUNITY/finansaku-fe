  import React from 'react'
  import { createRoot } from 'react-dom/client'
  import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
  import './index.css'
  import {UserProvider} from './context/userProvider.jsx'
  import Login from './pages/auth/loginPage'
  import SignUP from './pages/auth/signUpPage'
  import ReadArticle from './pages/landing/readArticlePage.jsx'
  // import Dashboard from './pages/app/dashboard'
  import Survey from './pages/app/survey.jsx'
  import Calendar from './pages/app/calendar.jsx'
  import LandingPage from './pages/landing/landingPage.jsx'
  import MainLayout from './layout/mainLayout.jsx'
  import ArticlePage from './pages/landing/articlePage.jsx'
  import WaitPage from './components/waitPage.jsx'
  import ProtectedRoute from './middleware/protectedRoute.jsx'
  import ForgotPassword from './pages/auth/forgotPassPage.jsx'
  import DashboardSet from './pages/app/dasboardSet.jsx'
  import OauthSuccess from './pages/auth/oAuth.jsx'
  import PassChangePage from './pages/auth/passChangesPage.jsx'
  import { ReminderProvider } from './context/reminderProvider.jsx'
  import { Toaster } from 'react-hot-toast'
  import PrivacyPolicy from './components/privacyPolice.jsx'
  import History from './pages/app/history.jsx'
  import Notification from './pages/app/notification.jsx'
  import Setting from './pages/app/setting.jsx'
  import SettingLayout from './layout/settingLayout.jsx'
  import AccountInfo from './components/accountInfo.jsx'
  import ChangePassSetting from './components/changePasswordSetting.jsx'
  // import CalendarSet from './pages/app/calendarSet.jsx'
  import ChangeEmail from './components/changeEmail.jsx'
  import DefDashboard from './components/defDashboard.jsx'


  createRoot(document.getElementById('root')).render(
    <UserProvider>
    <ReminderProvider>
      <BrowserRouter> 
          <Toaster position="top-center" reverseOrder={false} /> 

          <Routes>
            <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path='/signUp' element={<SignUP/>}/> 
              <Route path="/readArticle" element={<ReadArticle />} />
              <Route path="/article" element={<ArticlePage />} />
              <Route path="/waitPage" element={<WaitPage />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<PassChangePage />} />
              <Route path="/privacy-police" element={<PrivacyPolicy />} />           
                       

              <Route path="/oauth-success" element={<OauthSuccess/>} />
              <Route element={<ProtectedRoute><MainLayout/></ProtectedRoute>}>
                <Route path="/dashboard" element={<DashboardSet />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/history" element={<History />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/default-dashbaord" element={<DefDashboard />} />  
              </Route>

               <Route element={<SettingLayout />}>
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/account-information" element={<AccountInfo />} />
                  <Route path="/change-password" element={<ChangePassSetting />} />
                  <Route path="/change-email" element={<ChangeEmail />} />
                </Route>

          </Routes>

      </BrowserRouter>
    </ReminderProvider>
    </UserProvider>
  )