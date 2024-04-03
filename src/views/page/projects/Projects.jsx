import "./projects.css";

function Projects(){

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
                        <div className="card-project-container">
                            <div className="card-project-content">
                                <div className="card-project-info">
                                    <h5 className="card-titulo">TODO</h5>
                                    <p>
                                        <b>"Todo"</b> es una aplicación diseñada para ayudar a los usuarios a organizar y gestionar sus tareas diarias de manera eficiente. Proporciona una interfaz intuitiva que permite a los usuarios crear, editar,
                                         y eliminar tareas, así como establecer prioridades y plazos. Con "Taskify", los usuarios pueden mejorar su productividad y gestionar su tiempo de manera más efectiva.
                                    </p>
                                    <div className="lista-tools">
                                        <div>JAVA</div>
                                        <div>REACT</div>
                                    </div>
                                </div>
                                <div className="card-project-logo"> 
                                    LOGO 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects;