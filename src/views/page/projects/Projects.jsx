

import { FaReact } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import Card from "./components/Card.jsx"

import { Trans } from 'react-i18next';

function Projects(){

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
                        <div className="w-full">
                            <div className="flex h-[100px]">
                                <div className="m-auto">
                                    <h3 className="text-[35px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]"><Trans i18nKey="project.title"/></h3>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="m-[50px_0] flex flex-col items-center gap-[20px]">
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
                    </motion.div>
        </AnimatePresence>
    )

}

export default Projects;