import "./about.css";

import { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSelector } from 'react-redux';

import ExperienceCard from "./components/ExperienceCard.jsx";

// TECHNOLOGIES
import perfil from "./../../../assets/images/about-me/perfil.jpeg";
import react_logo from "./../../../assets/images/about-me/tech-logos/react-logo.png";
import vue_logo from "./../../../assets/images/about-me/tech-logos/vue-logo.png";
import quarkus_logo from "./../../../assets/images/about-me/tech-logos/quarkus-logo.png";
import spring_logo from "./../../../assets/images/about-me/tech-logos/spring-logo.png";
import oracle_logo from "./../../../assets/images/about-me/tech-logos/oracle-logo.png";
import docker_logo from "./../../../assets/images/about-me/tech-logos/docker-logo.png";
import kubernetes_logo from "./../../../assets/images/about-me/tech-logos/kubernetes-logo.png";
import tailwind_logo from "./../../../assets/images/about-me/tech-logos/tailwind-logo.png";
import bootstrap_logo from "./../../../assets/images/about-me/tech-logos/bootstrap-logo.png";
import mysql_logo from "./../../../assets/images/about-me/tech-logos/mysql-logo.png";
import openshift_logo from "./../../../assets/images/about-me/tech-logos/openshift-logo.png";
import junit_logo from "./../../../assets/images/about-me/tech-logos/junit-logo.png";
import mockito_logo from "./../../../assets/images/about-me/tech-logos/mockito-logo.png";
import jenkins_logo from "./../../../assets/images/about-me/tech-logos/jenkins-logo.png";

// EXPERIENCES
import byma_logo from "./../../../assets/images/about-me/byma-logo.png";
import bh_logo from "./../../../assets/images/about-me/bh-logo.png";
import flex_tech_logo from "./../../../assets/images/about-me/flex-tech-logo.png";

import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

function About(){

    const mode = useSelector((state) => state.mode.value);

    const { t } = useTranslation();

    const experiences = [{
        title: "BYMA, Caja de Valores",
        position: "Desarrollador de Software",
        time: "2022 Octubre - 2024 Octubre",
        description: <Trans i18nKey="experience.byma" components={{ b: <b /> }} /> ,
        logo: byma_logo,
        logo_class: "byma-logo"
    },
    {
        title: "Flex Tech Srl",
        position: "Desarrollador de Software",
        time: "2024 Octubre - 2025 Enero",
        // description: [<span dangerouslySetInnerHTML={{ __html: t("experience.flexTech") }} />],
        description: <Trans i18nKey="experience.flexTech" components={{ b: <b /> }} /> ,
        logo: flex_tech_logo,
        logo_class: "flex-tech-logo"
    },
    {
        title: "Banco Hipotecario",
        position: "Desarrollador de Software",
        time: "2025 Enero - Actualidad",
        description: <Trans i18nKey="experience.bh" components={{ b: <b /> }} /> ,
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
                                            <h4 className={`titulo ${mode}`}>TECNOLOGIAS</h4>
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
                                                <img className="logo-big" src={docker_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-big" src={oracle_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-mid" src={mysql_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-mid" src={junit_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-big" src={mockito_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-big" src={openshift_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-big" src={jenkins_logo}></img>
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