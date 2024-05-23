import { useEffect, useState, useRef } from 'react';

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import { useLocalStorage } from "@uidotdev/usehooks";

import Router from "./../router/index.jsx";

function App() {

  let [ className, setClassName ] = useState("app");


  return (
      <div className={className}>

        <Header>
        </Header>

        <Router/>

        <Footer/>


      </div>
  )
}

export default App;
