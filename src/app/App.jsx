import { useEffect, useState } from 'react';

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import Router from "./../router/index.jsx";

function App() {
  // const [count, setCount] = useState(0)

  let [ className, setClassName ] = useState("app");
  localStorage.setItem("darkMode", false);

  useEffect(() => {

    let isDarkModeActivatedString = localStorage.getItem("darkMode");
    let isDarkModeActivated = JSON.parse(isDarkModeActivatedString);

    console.log("isDark: ");
    console.log(isDarkModeActivated);

    if(isDarkModeActivated){
      console.log("DARK MODE");
      setClassName("dark-mode");
    }else{
      console.log("LIGHT MODE");
      setClassName("app");
    }
  }, [ setClassName ])


  return (
      <div className={className}>

        <Header/>

        <Router/>

        <Footer/>


      </div>
  )
}

export default App;
