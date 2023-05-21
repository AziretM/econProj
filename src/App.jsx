import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes, Router } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'
import Service from './Pages/Service/Service'
import HomePage from './components/HomePage/HomePage'
import './App.css';



const App = () => {
  return (
    <div className="App">
      <>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/ about-us' element={<AboutUs/>} />
        <Route path='/ contact' element={<Contact />} />
      </Routes>
      </>
      
    </div>
  );
}

export default App;
