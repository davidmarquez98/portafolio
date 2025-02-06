import { AnimatePresence, motion } from "framer-motion";

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useLocalStorage } from "@uidotdev/usehooks";

import Router from "./../router/index.jsx";

function App() {

  const mode = useSelector((state) => state.mode.value);

  useEffect(() => {
    const elements = document.querySelectorAll(".light, .dark");

    elements.forEach((el) => {
        el.classList.replace("light", mode);
        el.classList.replace("dark", mode);
        console.log("a")
    });
  }, [mode]);

  return (
      <div className="app light">
          <AnimatePresence>
            <motion.div className="sobre-mi-container"         
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} // Especifica la duración de la animación en segundos
                        >

              <Header/>

              <Router/>

              <Footer/>
              
            </motion.div>
          </AnimatePresence>


      </div>
  )
}

export default App;
