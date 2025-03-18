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
                    {/* <div className="trabajo-secondary-titulo-container"> */}
                        {/* <span className={`trabajo_separation__header light ${mode}`}>•</span> */}
                        {/* <h3 className={`trabajo-puesto trabajo-secondary-titulo ${mode}`}>{position}</h3>
                    </div>
                    <div className="trabajo-secondary-titulo-container"> */}
                        {/* <span className={`trabajo_separation__header light ${mode}`}>•</span> */}
                        {/* <h3 className={`trabajo-tiempo trabajo-secondary-titulo ${mode}`}>{time}</h3>
                    </div> */}
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
                        <p className={`trabajo-parrafo ${mode}`}>{description}
                        {/* I specialize in tools like <b>Quarkus</b>, <b>Apache Kafka</b>, <b>JWT</b>, <b>Hibernate</b>, and <b>Panache</b> for efficient backend implementation. 
                        We practice reactive programming to ensure that APIs are as efficient as possible for the system. In the realm of databases, we use Oracle, ensuring comprehensive data management. 
                        For frontend development, we employ <b>VueJS</b> to create sophisticated and highly functional user interfaces. */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;