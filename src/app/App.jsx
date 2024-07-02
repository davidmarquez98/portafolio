import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from "framer-motion";

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import { useLocalStorage } from "@uidotdev/usehooks";

import Router from "./../router/index.jsx";

function App() {

  let [ className, setClassName ] = useState("app");


  return (
      <div className={className}>
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
