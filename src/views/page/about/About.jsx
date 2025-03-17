import "./about.css";

import { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSelector } from 'react-redux';

import ExperienceCard from "./components/ExperienceCard.jsx";

import perfil from "./../../../perfil.jpeg";
import react_logo from "./../../../assets/images/react-logo.png";
import vue_logo from "./../../../assets/images/vue-logo.png";
import quarkus_logo from "./../../../assets/images/quarkus-logo.png";
import spring_logo from "./../../../assets/images/spring-logo.png";
import oracle_logo from "./../../../assets/images/oracle-logo.png";
import docker_logo from "./../../../assets/images/docker-logo.png";
import kubernetes_logo from "./../../../assets/images/kubernetes-logo.png";
import tailwind_logo from "./../../../assets/images/tailwind-logo.png";
import bootstrap_logo from "./../../../assets/images/bootstrap-logo.png";

import byma_logo from "./../../../assets/images/byma-logo.png";
import bh_logo from "./../../../assets/images/bh-logo.png";
import flex_tech_logo from "./../../../assets/images/flex-tech-logo.png";
function About(){

    const mode = useSelector((state) => state.mode.value);

    const experiences = [{
        title: "BYMA, Caja de Valores",
        position: "Desarrollador de Software",
        time: "2022 Octubre - 2024 Octubre",
        description:[
            "Me especialize en herramientas como ", <b>Quarkus</b>, ", " ,<b>Spring</b>, ", " ,<b>Apache Kafka</b>, ", " ,<b>JWT</b>, ", "
             ,<b>Hibernate</b> ," y " ,<b>Panache</b>, " para una implementación backend eficiente. Practicamos la " ,<b>programación reactiva</b>,
            " para garantizar que las API sean lo más eficientes posible para el sistema. En el ámbito de las bases de datos utilizamos "
            ,<b>Oracle</b>, " asegurando una gestión integral de los datos. Para el desarrollo frontend, empleamos " ,<b>VueJS</b>, " y " 
            ,<b>ReactJS</b>, "para crear interfaces de usuario sofisticadas y altamente funcionales."
        ],
        logo: byma_logo,
        logo_class: "byma-logo"
    },
    {
        title: "Flex Tech Srl",
        position: "Desarrollador de Software",
        time: "2024 Octubre - 2025 Enero",
        description:[
            "Formé parte de un proyecto enfocado en la creación de una biblioteca en Java para gestionar solicitudes de autenticación a un proveedor externo, proporcionando una funcionalidad de inicio de sesión seguro en una aplicación bancaria. El proyecto fue desarrollado para el Banco Hipotecario e incluyó la implementación de pruebas unitarias con JUnit y Mockito para garantizar la confiabilidad y mantenibilidad del código."
        ],
        logo: flex_tech_logo,
        logo_class: "flex-tech-logo"
    },
    {
        title: "Banco Hipotecario",
        position: "Desarrollador de Software",
        time: "2025 Enero - Actualidad",
        description:[
            "Trabajo como desarrollador Java en el sector de Middleware, especializándome en frameworks como Spring y Quarkus. Mi rol se centra en el desarrollo y mantenimiento de soluciones de integración y aplicaciones escalables. Actualmente, formo parte de un proyecto clave de migración de múltiples APIs de Spring a Quarkus, optimizando los tiempos de ejecución y modernizando la infraestructura existente para garantizar un rendimiento óptimo en entornos críticos."
        ],
        logo: bh_logo,
        logo_class: "bh-logo"
    }];

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: .06 });

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <div className="about-container">
            <div className="about-content">

                <AnimatePresence>
                    {/* INTRODUCCION */}
                    <motion.div className="sobre-mi-container"         
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }} // Especifica la duración de la animación en segundos
                                >
                        <div className="sobre-mi-content">
                            <div className="introduccion-container">
                                <div className="introduccion-content">
                                    <div className="informacion-container">
                                        <div className="informacion-content">
                                            <div className="sobre-mi-titulo-container">
                                                <div className={`sobre-mi-titulo-content ${mode}`}>
                                                    <h3 className="sobre-mi-titulo">Un poco sobre mí...</h3>
                                                </div>
                                            </div>
                                            <div className={`informacion__card ${mode}`}>
                                                <p className={`informacion__texto ${mode}`}>
                                                    Tengo 27 años y vivo en <b>Buenos Aires, Argentina.</b> Soy desarrollador <b>Full Stack</b> con más
                                                    de dos años de experiencia, lo que me ha permitido profundizar en mi pasión por la tecnología y expandir mis habilidades en el 
                                                    mundo de la informática.
                                                    <br/>
                                                    Uno de mis mayores sueños es explorar Europa y otros países para conocer su cultura, historia y tradiciones de manera más
                                                    directa. En mi tiempo libre disfruto de actividades como ver películas, escuchar música, leer mangas y jugar videojuegos.
                                                    También valoro los momentos compartidos con amigos jugando a la pelota o saliendo a disfrutar de un buen trago con mi 
                                                    novia. Encuentro paz en los días lluviosos.
                                                </p>
                                                <span className={`informacion__texto ${mode}`}>
                                                    <b>
                                                        Mi filosofía de vida se basa en el aprendizaje continuo, el crecimiento personal y 
                                                        la búsqueda constante de la mejora. Creo que la clave está en disfrutar de las pequeñas 
                                                        alegrías que la vida ofrece mientras me mantengo en movimiento.
                                                    </b>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="perfil-container">
                                        <div className="perfil-content">
                                            <img className="imagen-perfil" src={perfil}></img>
                                            <div className="perfil-fade"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <motion.div ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { duration: .5 } },
                                hidden: { opacity: 0, y: 0},
                            }}>
                    <div className={`habilidades-experiencia-container ${mode}`}>  
                        <div className="habilidades-experiencia-content">

                            
                                            {/* EXPERIENCIA */}
                            <div className="experiencia-container">
                                <div className="experiencia-content">
                                    <div className="experiencia-titulo-container">
                                        <div className="experiencia-titulo-content">
                                            <h4 className={`titulo ${mode}`}>EXPERIENCIA</h4>
                                        </div>
                                    </div>
                                    <div className="experiencia-informacion-container">
                                        {
                                            experiences.map(experience => <ExperienceCard 
                                                                            title={experience.title}
                                                                            position={experience.position}
                                                                            time={experience.time}
                                                                            description={experience.description}
                                                                            logo={experience.logo}
                                                                            logo_class={experience.logo_class}
                                                                            />)
                                        }
                                    </div>
                                </div>
                            </div>
                            
                                            {/* HABILIDADES */}
                            <div className="habilidades-container">
                                <div className="habilidades-content">
                                    <div className="habilidades-titulo-container">
                                        <div className="habilidades-titulo-content">
                                            <h4 className={`titulo ${mode}`}>HABILIDADES</h4>
                                        </div>
                                    </div>
                                    <div className="habilidades-logo-container">
                                        <div className={`habilidades-logo-content ${mode}`}>
                                            <div className="logo-container">
                                                <img className="logo-default" src={react_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-default" src={vue_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-default" src={tailwind_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-default" src={bootstrap_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-default" src={quarkus_logo}></img>
                                            </div>
                                            <div className="logo-container"> 
                                                <img className="logo-default" src={spring_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-default" src={kubernetes_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-bigger" src={docker_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-bigger" src={oracle_logo}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </motion.div>
        
            </div>
        </div>
    );

}

export default About;