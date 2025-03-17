import "./card.css";

import { FaCodeBranch } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Card(props){

    const mode = useSelector((state) => state.mode.value);

    return (
        <div className={`card-project-container ${mode}`}>
            <div className="card-project-content">
                <div className="card-header">
                    <h5 className={`card-titulo ${mode}`}>TODO</h5>
                    <div className="card-icono-development-responsive">
                        <FaCodeBranch className="icono-development"/>
                        <div className="icono-development-text-container">
                        <span className="icono-development-text"><b>En desarrollo..</b></span>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className={`card-project-info ${mode}`}>
                        <p>
                            <b>"Todo"</b> es una aplicación diseñada para ayudar a los usuarios a organizar y gestionar sus tareas diarias de manera eficiente. 
                            Proporciona una interfaz intuitiva que permite a los usuarios crear, editar, y eliminar tareas, así como establecer prioridades y plazos. 
                            Con "Todo", los usuarios pueden mejorar su productividad y gestionar su tiempo de manera más efectiva.
                        </p>
                        <div className="lista-tools">
                            {
                                props.iconos.map((Icono, index) => {
                                    return ( 
                                        <div className={`card-icono-default ${mode}`} key={index}>
                                            { Icono }    
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="card-project-logo"> 
                        LOGO 
                    </div>
                </div>
                {
                    props.isDisabled ?  <div className="card-icono-development">
                                            <FaCodeBranch className={`icono-development ${mode}`}/>
                                            <span className={`icono-development-text ${mode}`}><b>En desarrollo..</b></span>
                                        </div>  : <></>
                }
            </div>
            <div className="card-project-container-disabled"></div>
        </div>
    )
} 

export default Card;