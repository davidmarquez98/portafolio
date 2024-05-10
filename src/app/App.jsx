import { useEffect, useState, useRef } from 'react';

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import { useLocalStorage } from '../helper/helper.js';

import Router from "./../router/index.jsx";

function App() {

  let [ className, setClassName ] = useState("app");
  let [ isDarkMode, setIsDarkMode ] = useLocalStorage("isDarkMode", false);

  // const [darkModeChanged, setDarkModeChanged] = useState(false); // Estado para rastrear cambios
  useEffect(() => {

    const currentDarkMode = isDarkMode;

    if (currentDarkMode) {
      setClassName("app-dark-mode");
    } else {
      setClassName("app");
    }

  }, [isDarkMode]);


  return (
      <div className={className}>

        <Header>
          {{
            isDarkMode,
            setIsDarkMode
          }}
        </Header>

        <Router/>

        <Footer/>


      </div>
  )
}

export default App;
