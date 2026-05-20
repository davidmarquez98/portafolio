

import { AnimatePresence, motion } from "framer-motion";

import IconoEmail from '../../../icons/IconEmail';
import IconoLinkedin from '../../../icons/IconoLinkedin';
import IconoGithub from '../../../icons/IconoGithub';

import { Trans } from 'react-i18next';

function Home(){

    const openWindowToSendEmail = () => {

        // Definir los detalles del correo electrónico
        const email = 'destinatario@example.com';
        const subject = 'Asunto del correo electrónico';
        const body = 'Contenido del correo electrónico';

        // Crear la URL con el esquema mailto:
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Abrir el cliente de correo electrónico predeterminado del usuario
        window.open(mailtoUrl);
    };

    return (
        <AnimatePresence>
            {/* INTRODUCCION */}
            <motion.div className="flex w-full h-[70vh]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }}
                        >
                <div className="flex m-auto w-[90%] max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-center max-[800px]:gap-[20px]">
                    <div className="w-full max-[800px]:w-full">
                        <div className="flex items-center flex-col m-auto text-center gap-[10px]">
                            <h1 className="text-[100px] max-[800px]:text-[30px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                                <Trans i18nKey="home.title"/><span>&#160;</span>
                            </h1>
                            <h3 className="text-[50px] max-[800px]:text-[20px] text-[var(--secondary-color)] dark:text-[var(--secondary-color-dark-mode)]">
                                <Trans i18nKey="home.position"/><span>&#160;</span>
                            </h3>
                            <p className="text-[20px] max-[800px]:text-[10px] text-[var(--secondary-color)] dark:text-[var(--secondary-color-dark-mode)]">
                                <Trans i18nKey="home.description"/><span>&#160;</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[30%] max-[800px]:w-full">
                        <div className="flex justify-center">
                            <div className="flex justify-center w-[60%] mt-[30px]">
                                <div className="flex items-center justify-center gap-[70px] w-full max-[800px]:gap-[40px]">
                                    <div className="flex items-center justify-center cursor-pointer w-[20%] h-full">
                                        <button onClick={() => openWindowToSendEmail()}>
                                            <IconoEmail className="text-[40px] transition-all duration-300 hover:text-[50px]"/>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-center cursor-pointer w-[20%] h-full">
                                        <a href="https://www.linkedin.com/in/david-ariel-marquez/" target="_blank" rel="noreferrer">
                                            <IconoLinkedin className="text-[40px] transition-all duration-300 hover:text-[50px]" />
                                        </a>
                                    </div>
                                        
                                    <div className="flex items-center justify-center cursor-pointer w-[20%] h-full">
                                        <a href="https://github.com/davidmarquez98" target="_blank" rel="noreferrer">
                                            <IconoGithub className="text-[40px] transition-all duration-300 hover:text-[50px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Home;