import "./card.css";

import { FaCodeBranch } from "react-icons/fa";
import { useSelector } from 'react-redux';

import { Trans } from 'react-i18next';

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
                            <Trans i18nKey="project.todo.description" components={{ b: <b /> }}/>
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
                    <div className={`card-project-logo ${mode}`}> 
                        <b>?</b>
                        <b>LOGO</b> 
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