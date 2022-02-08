import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';


const App = () => {
  return (

    <>
     <Routes>
    <Navbar />
        <Route path="/" element={ <Home/> } />
        <Route path ="about" element={<About/>}/>
        <Route path ="contact" element ={<Contact/>} />

      </Routes>
   
    </>
  )

   
}

export default App
