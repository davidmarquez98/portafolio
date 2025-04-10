import { useSelector } from 'react-redux';

import "./experience-card.css";

function ExperienceCard({ title, position, time, description, logo, logo_class }){

    const mode = useSelector((state) => state.mode.value);

    return(
        <div className={`experiencia-informacion-content ${mode}`}>

            <div className="trabajo-header">
                <div className='trabajo-nombre-container'>
                    <h3 className={`trabajo-nombre ${mode}`}>{title}</h3>
                    <h3 className={`trabajo-puesto trabajo-secondary-titulo ${mode}`}>{position}</h3>
                    <h3 className={`trabajo-tiempo trabajo-secondary-titulo ${mode}`}>{time}</h3>
                </div>
                <div className="empresa-imagen-container">
                    <div className="empresa-imagen-content">
                        <img className={logo_class} src={logo}></img>
                    </div>
                </div>
            </div>
            <div className="trabajo-info">
                <div className="trabajo-container">
                    <div className="trabajo-content">
                        <p className={`trabajo-parrafo ${mode}`}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;