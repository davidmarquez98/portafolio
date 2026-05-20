import { AnimatePresence, motion } from "framer-motion";

import IconoEmail from '../../../icons/IconEmail';
import IconoLinkedin from '../../../icons/IconoLinkedin';
import IconoGithub from '../../../icons/IconoGithub';

import { Trans } from 'react-i18next';
import './home.css';

function Home(){

    const openWindowToSendEmail = () => {
        const email = 'davidmarquez98@gmail.com';
        const subject = 'Contacto desde portfolio';
        const body = 'Hola David, queria contactarte por...';
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoUrl);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="home-container"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .5 }}
            >
                <div className="home-content">
                    <div className="home__item texto-container">
                        <div className="texto-content">
                            <h1 className="texto__titulo text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                                <Trans i18nKey="home.title"/><span>&#160;</span>
                            </h1>

                            <h3 className="texto__subtitulo text-[#8D6E63] dark:text-[var(--secondary-color-dark-mode)]">
                                <Trans i18nKey="home.position"/><span>&#160;</span>
                            </h3>

                            <p className="texto__descripcion text-[#8D6E63] dark:text-[var(--secondary-color-dark-mode)]">
                                <Trans i18nKey="home.description"/><span>&#160;</span>
                            </p>
                        </div>
                    </div>

                    <div className="home-second-container">
                        <div className="home-second-content">
                            <div className="icono-container">
                                <div className="icono-content">
                                    <div className="home-logo-container">
                                        <button onClick={() => openWindowToSendEmail()} aria-label="Enviar email">
                                            <IconoEmail className="home-icono"/>
                                        </button>
                                    </div>

                                    <div className="home-logo-container">
                                        <a href="https://www.linkedin.com/in/david-ariel-marquez/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                            <IconoLinkedin className="home-icono" />
                                        </a>
                                    </div>

                                    <div className="home-logo-container">
                                        <a href="https://github.com/davidmarquez98" target="_blank" rel="noreferrer" aria-label="GitHub">
                                            <IconoGithub className="home-icono" />
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
