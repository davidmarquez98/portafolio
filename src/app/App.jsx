import { AnimatePresence, motion } from "framer-motion";

import './App.css'

import Header from './../views/components/header/Header.jsx';
import Footer from './../views/components/footer/Footer.jsx';

import Router from "./../router/index.jsx";

function App() {


  return (
      <div className="app">
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
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
