import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Table from './components/Table';
import Navbar from './components/Navbar';

function App() {




  return (
    <div>
      <Header/>
      <div className="main">
      <Navbar />
      <Routes>
        <Route path='/project/:id' element={<Table />} />
        <Route path="*" element={<div className="not-found">Nothing was found</div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
