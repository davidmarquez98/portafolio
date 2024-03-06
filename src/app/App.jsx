import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Header from './../views/header/Header.jsx';
import Body from '../views/page/body/Body.jsx';

import Router from "./../router/index.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='app'>

        <Header/>

        <Body/>

        {/* <Footer/> */}

        <Router/>

      </div>
  )
}

export default App;
