import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import ResumeBuilder from './Pages/ResumeBuilder'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import EmailVerification from './Pages/EmailVerification'
import Preview from './Pages/Preview'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>} />

        <Route path='/layout' element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path='builder/:resumeid' element={<ResumeBuilder/>} />  
        </Route>  

        <Route path='/verifyemail' element={<EmailVerification/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='preview' element={<Preview/>} />
      </Routes>


    </>
  )
}

export default App