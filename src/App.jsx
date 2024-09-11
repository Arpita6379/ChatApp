import React from 'react'
import { Routes } from 'react-router-dom'
//import Login from './pages/login/Login'
//import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Login from './pages/login/Login'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Routes>
     
     <Route path='/' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes> 
    </div>
  )
}

export default App