import { useEffect, useState, useRef } from 'react';

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import { useLocalStorage } from '../helper/helper.js';

import Router from "./../router/index.jsx";

function App() {

  let [ className, setClassName ] = useState("app");
  let { item: darkMode, sincronizeItem } = useLocalStorage("isDarkMode", false);

  // sincronizeItem();

  // const [darkModeChanged, setDarkModeChanged] = useState(false); // Estado para rastrear cambios
  useEffect(() => {

    console.log(darkMode);

    const currentDarkMode = darkMode;

    if (currentDarkMode) {
      setClassName("app-dark-mode");
    } else {
      setClassName("app");
    }

  });


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
