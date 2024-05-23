import "./card.css";

import { FaCodeBranch } from "react-icons/fa";

function Card(props){
    return (
        <div className={ props.isDisabled ? 'card-project-container disabled' : 'card-project-container'}>
            <div className="card-project-content">
                <div className="card-project-info">
                    <h5 className="card-titulo">TODO</h5>
                    <p>
                        <b>"Todo"</b> es una aplicación diseñada para ayudar a los usuarios a organizar y gestionar sus tareas diarias de manera eficiente. 
                        Proporciona una interfaz intuitiva que permite a los usuarios crear, editar, y eliminar tareas, así como establecer prioridades y plazos. 
                        Con "Todo", los usuarios pueden mejorar su productividad y gestionar su tiempo de manera más efectiva.
                    </p>
                    <div className="lista-tools">
                        {props.iconos.map(Icono => {
                            return ( 
                                <div className="card-icono-default">
                                    { Icono }    
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="card-project-logo"> 
                    LOGO 
                </div>

                {
                    props.isDisabled ?  <div className="card-icono-development">
                                            <FaCodeBranch className="icono-development"/>
                                            <span className="icono-development-text"><b>En desarrollo..</b></span>
                                        </div>  : <></>
                }
            </div>
            <div className="card-project-container-disabled"></div>
        </div>
    )
} 

export default Card;