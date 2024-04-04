import "./projects.css";

import { FaReact } from "react-icons/fa";

import Card from "./components/Card.jsx"

function Projects(){

    let todoProject = {
        iconos: [ <FaReact/> ],
        isDisabled: true
    };
    
    let projects = [ todoProject ];


    return (
        <div className="proyecto-container">
            <div>
                <div className="titulo-main-container">
                    <div className="titulo-main-content">
                        <h3 className="titulo-main">Projectos</h3>
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
    )

}

export default Projects;