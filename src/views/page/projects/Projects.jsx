import "./projects.css";

import { FaReact } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import Card from "./components/Card.jsx"

function Projects(){

    let todoProject = {
        iconos: [ <FaReact/> ],
        isDisabled: true
    };
    
    let projects = [ todoProject ];


    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }}>
                <div className="proyecto-container">
                    <div>
                        <div className="titulo-main-container">
                            <div className="titulo-main-content">
                                <h3 className="titulo-main">Proyectos</h3>
                            </div>
                        </div>
                        <div className="lista-proyectos-container">
                            <div className="lista-proyectos-content">
                                {
                                    projects.map(project => <Card iconos={ project.iconos } isDisabled={project.isDisabled}/>)
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )

}

export default Projects;