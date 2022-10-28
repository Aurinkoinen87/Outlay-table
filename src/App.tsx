import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Table from './components/Table';
import Navbar from './components/Navbar'
import InitialScreen from './components/InitialScreen'


function App() {


  return (
    <div>
      <Header/>
      <div className="main">
      <Navbar />
      <Routes>
        <Route path='/' element={<InitialScreen/>} />
        <Route path='/project/:id' element={<Table />} />
        <Route path="*" element={<div className="not-found">...Nothing was found</div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
