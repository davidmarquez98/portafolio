

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

import { Trans } from 'react-i18next';

function About(){

    const mode = useSelector((state) => state.mode.value);

    const experiences = [{
        title: "BYMA, Caja de Valores",
        position: <Trans i18nKey="experience.developer_software"/>,
        time: <Trans i18nKey="experience.byma.time"/>,
        description: <Trans i18nKey="experience.byma.description" components={{ b: <b /> }} /> ,
        logo: byma_logo,
        logo_class: "w-[100px]"
    },
    {
        title: "Flex Tech Srl",
        position: <Trans i18nKey="experience.developer_software"/>,
        time: <Trans i18nKey="experience.flexTech.time"/>,
        description: <Trans i18nKey="experience.flexTech.description" components={{ b: <b /> }} /> ,
        logo: flex_tech_logo,
        logo_class: "w-[100px]"
    },
    {
        title: "Banco Hipotecario",
        position: <Trans i18nKey="experience.developer_software"/>,
        time: <Trans i18nKey="experience.bh.time"/>,
        description: <Trans i18nKey="experience.bh.description" components={{ b: <b /> }} /> ,
        logo: bh_logo,
        logo_class: "w-[130px]"
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
        <div className="w-full mt-[100px]">
            <div>

                <AnimatePresence>
                    {/* INTRODUCCION */}
                    <motion.div className="w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}
                                >
                        <div className="flex flex-col mt-[100px]">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center w-[90%] max-[800px]:w-full">
                                    <div className="w-full max-[800px]:w-full text-[var(--secondary-color)]">
                                        <div className="mb-[50px] ml-[30px] max-[800px]:m-0 max-[800px]:w-full">
                                            <h3 className="text-[35px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                                                <Trans i18nKey="about_me.title" />
                                            </h3>
                                        </div>
                                        <div className="bg-[var(--primary-color)] dark:bg-[var(--tertiary-color-dark-mode)] rounded-[5px] flex flex-col gap-[25px] p-[25px] text-[20px] leading-[1.3]">
                                            <p className="leading-[1.3] text-[var(--secondary-color)] dark:text-[var(--primary-color-dark-mode)]">
                                                <Trans i18nKey="about_me.description_first" components={{ b: <b /> }} />
                                            </p>
                                            <span className="leading-[1.3] text-[var(--secondary-color)] dark:text-[var(--primary-color-dark-mode)]">
                                                <b>
                                                    <Trans i18nKey="about_me.description_second" />
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-[20px] w-[30%] max-[800px]:hidden">
                                        <div className="relative w-[350px] h-[466px] rounded-[20px] pt-[30px]">
                                            <img className="absolute w-full rounded-[10%_10%_0_0]" src={perfil} alt="Perfil" />
                                            <div className="absolute w-full h-full"></div>
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
                    <div className="mt-[600px] w-full bg-[var(--secondary-color)] dark:bg-[var(--secondary-color-dark-mode)]">
                        <div className="flex flex-col w-full gap-[20px]">

                            {/* EXPERIENCIA */}
                            <div className="w-full">
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-center w-full text-[35px] m-[50px_0]">
                                        <h4 className="text-[35px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                                            <Trans i18nKey="experience.title" />
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-[20px]">
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
                            <div className="w-full">
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-center w-full text-[35px] m-[50px_0]">
                                        <h4 className="text-[25px] text-[var(--primary-color)] dark:text-[var(--primary-color-dark-mode)]">
                                            <Trans i18nKey="technology.title" />
                                        </h4>
                                    </div>
                                    <div className="flex items-center justify-center mb-[50px] w-full">
                                        <div className="flex flex-wrap justify-center gap-[20px] max-w-[80%] p-[20px] bg-[var(--primary-color)] dark:bg-[var(--primary-color-dark-mode)]">
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[80px]" src={react_logo} alt="React" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[80px]" src={vue_logo} alt="Vue" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[80px]" src={tailwind_logo} alt="Tailwind" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[80px]" src={bootstrap_logo} alt="Bootstrap" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[80px]" src={quarkus_logo} alt="Quarkus" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[80px]" src={spring_logo} alt="Spring" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[80px]" src={kubernetes_logo} alt="Kubernetes" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[160px]" src={docker_logo} alt="Docker" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[160px]" src={oracle_logo} alt="Oracle" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[130px]" src={mysql_logo} alt="MySQL" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[130px]" src={junit_logo} alt="JUnit" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[160px]" src={mockito_logo} alt="Mockito" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[160px]" src={openshift_logo} alt="OpenShift" />
                                            </div>
                                            <div className="flex items-center m-[10px_50px]">
                                                <img className="w-[160px]" src={jenkins_logo} alt="Jenkins" />
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