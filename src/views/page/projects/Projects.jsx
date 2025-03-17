import "./projects.css";

import { FaReact } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import { useSelector } from 'react-redux';

import Card from "./components/Card.jsx"

function Projects(){

    const mode = useSelector((state) => state.mode.value);

    let todoProject = {
        id: 1,
        iconos: [ <FaReact/> ],
        isDisabled: true
    };
    
    let projects = [ todoProject ];


    return (
        <AnimatePresence>
                    {/* INTRODUCCION */}
                    <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}>
                        <div className="proyecto-container">
                            <div>
                                <div className="titulo-main-container">
                                    <div className="titulo-main-content">
                                        <h3 className={`titulo-main ${mode}`}>Proyectos</h3>
                                    </div>
                                </div>
                                <div className="lista-proyectos-container">
                                    <div className="lista-proyectos-content">
                                        {
                                            projects.map(project => 
                                                <Card 
                                                    key={project.id}
                                                    iconos={ project.iconos } 
                                                    isDisabled={project.isDisabled}
                                                />
                                            )
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