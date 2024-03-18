import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Body from '../views/page/body/Body.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import Router from "./../router/index.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='app'>

        <Header/>

        <Router/>

        <Footer/>


      </div>
  )
}

export default App;
