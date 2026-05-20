

import { FaReact } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import Card from "./components/Card.jsx"

import { Trans } from 'react-i18next';

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
                    <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}>
                        <div className="mx-auto w-[90%] max-w-[1080px] py-[46px]">
                            <div className="flex justify-center">
                                <h3 className="text-[clamp(30px,4vw,42px)] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]"><Trans i18nKey="project.title"/></h3>
                            </div>
                            <div className="w-full">
                                <div className="my-[38px] grid grid-cols-1 gap-[24px] min-[900px]:grid-cols-2">
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
