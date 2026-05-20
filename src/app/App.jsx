import { AnimatePresence, motion } from "framer-motion";



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
    document.body.classList.remove("light", "dark");
    document.body.classList.add(mode);
  }, [mode]);

  return (
      <div className={`app ${mode}`}>
          <AnimatePresence>
            { showApp && (
            <motion.div className="min-h-screen w-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >

            <Header/>

            <main className="flex-1 w-full">
              <Router/>
            </main>

            <Footer/>
            
          </motion.div>
          )}

          </AnimatePresence>


      </div>
  )
}

export default App;
