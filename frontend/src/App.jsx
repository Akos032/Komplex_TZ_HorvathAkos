import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import { Home } from './components/pages/Home'
import { Head } from './components/header'
import { Uj } from './components/pages'

function App() {

  return (
    <>
      <div className='App'>
        <Head/>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/uj' element={<Uj/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
