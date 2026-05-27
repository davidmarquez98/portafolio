

import { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from 'react-redux';

import ExperienceCard from "./components/ExperienceCard.jsx";
import "./about.css";

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

import { Trans } from 'react-i18next';

function About(){

    const mode = useSelector((state) => state.mode.value);

    const experiences = [{
        title: "BYMA, Caja de Valores",
        position: <Trans i18nKey="experience.developer_software"/>,
        time: <Trans i18nKey="experience.byma.time"/>,
        description: <Trans i18nKey="experience.byma.description" components={{ b: <b /> }} /> ,
        logo: byma_logo,
        logo_class: "experience-logo"
    },
    {
        title: "Flex Tech Srl",
        position: <Trans i18nKey="experience.developer_software"/>,
        time: <Trans i18nKey="experience.flexTech.time"/>,
        description: <Trans i18nKey="experience.flexTech.description" components={{ b: <b /> }} /> ,
        logo: flex_tech_logo,
        logo_class: "experience-logo"
    },
    {
        title: "Banco Hipotecario",
        position: <Trans i18nKey="experience.developer_software"/>,
        time: <Trans i18nKey="experience.bh.time"/>,
        description: <Trans i18nKey="experience.bh.description" components={{ b: <b /> }} /> ,
        logo: bh_logo,
        logo_class: "experience-logo"
    },
    {
        title: "Banco Macro",
        position: <Trans i18nKey="experience.developer_software"/>,
        time: <Trans i18nKey="experience.macro.time"/>,
        description: <Trans i18nKey="experience.macro.description" components={{ b: <b /> }} />,
        logo_class: "experience-logo"
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
            <div>

                <AnimatePresence>
                    {/* INTRODUCCION */}
                    <motion.div className="introduccion-container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}
                                >
                        <div className="sobre-mi-container">
                            <div className="sobre-mi-content">
                                <div className={`sobre-mi-titulo-content ${mode}`}>
                                    <h3>
                                        <Trans i18nKey="about_me.title" />
                                    </h3>
                                </div>

                                <div className="introduccion-content">
                                    <div className="informacion-container">
                                        <div className={`informacion__card ${mode}`}>
                                            <p className={`informacion__texto ${mode}`}>
                                                <Trans i18nKey="about_me.description_first" components={{ b: <b /> }} />
                                            </p>
                                            <p className={`informacion__texto ${mode}`}>
                                                <Trans i18nKey="about_me.description_second" />
                                            </p>
                                            <p className={`informacion__texto ${mode}`}>
                                                <Trans i18nKey="about_me.description_third" />
                                            </p>
                                        </div>
                                    </div>

                                    <div className="perfil-container">
                                        <div className="perfil-content">
                                            <img className="imagen-perfil" src={perfil} alt="Perfil" />
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
                                        <h4 className={`experiencia-titulo ${mode}`}>
                                            <Trans i18nKey="experience.title" />
                                        </h4>
                                    </div>
                                    <div className="experiencia-lista">
                                        {
                                            experiences.map(experience => <ExperienceCard 
                                                                            key={experience.title}
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
                                        <h4 className={`habilidades-titulo ${mode}`}>
                                            <Trans i18nKey="technology.title" />
                                        </h4>
                                    </div>
                                    <div className="habilidades-logo-container">
                                        <div className={`habilidades-logo-content ${mode}`}>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={react_logo} alt="React" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={vue_logo} alt="Vue" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={tailwind_logo} alt="Tailwind" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={bootstrap_logo} alt="Bootstrap" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={quarkus_logo} alt="Quarkus" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={spring_logo} alt="Spring" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={kubernetes_logo} alt="Kubernetes" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={docker_logo} alt="Docker" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={oracle_logo} alt="Oracle" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={mysql_logo} alt="MySQL" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={junit_logo} alt="JUnit" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={mockito_logo} alt="Mockito" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={openshift_logo} alt="OpenShift" />
                                            </div>
                                            <div className="tech-logo-wrapper">
                                                <img className="tech-logo" src={jenkins_logo} alt="Jenkins" />
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
