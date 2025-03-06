import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import { Home } from './components/pages/Home'
import { Head } from './components/header'

function App() {

  return (
    <>
      <div className='App'>
        <Head/>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
