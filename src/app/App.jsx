import { AnimatePresence, motion } from "framer-motion";

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import { useEffect } from "react";
import { useSelector } from "react-redux";

import Router from "./../router/index.jsx";
import './../traduction/i18n.js';

function App() {

  const mode = useSelector((state) => state.mode.value);
  const showApp = useSelector((state) => state.showApp.value);

  useEffect(() => {
    const elements = document.querySelectorAll(".light, .dark");

    elements.forEach((el) => {

      if(el.classList.contains("light")){
        el.classList.replace("light", mode);
      }else{
        el.classList.replace("dark", mode);
      }

    });
  }, [mode]);

  return (
      <div className={`app ${mode}`}>
          <AnimatePresence>
            { showApp && (
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
          )}

          </AnimatePresence>


      </div>
  )
}

export default App;
