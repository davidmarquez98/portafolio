

import { FaReact } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import Card from "./components/Card.jsx"

import { Trans } from 'react-i18next';
import "./projects.css";

function Projects(){

    let todoProject = {
        id: 1,
        title: "Todo App",
        iconos: [ <FaReact key="react" /> ],
        isDisabled: true
    };
    
    let projects = [ todoProject ];


    return (
        <AnimatePresence>
                    {/* INTRODUCCION */}
                    <motion.div className="projects-section flex min-h-[calc(100vh-150px)] justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}>
                        <div className="projects-page-content mx-auto flex w-[90%] max-w-[1080px] flex-col items-center pb-[46px]">
                            <div className="projects-title-content flex justify-center text-center">
                                <h3 className="text-[clamp(30px,4vw,42px)] font-bold text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]"><Trans i18nKey="project.title"/></h3>
                            </div>
                            <div className="flex w-full justify-center">
                                <div className="projects-list-content grid grid-cols-1 justify-items-center gap-[24px]">
                                    {
                                        projects.map(project => 
                                            <Card 
                                                key={project.id}
                                                title={project.title}
                                                iconos={ project.iconos } 
                                                isDisabled={project.isDisabled}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </motion.div>
        </AnimatePresence>
    )

}

export default Projects;
