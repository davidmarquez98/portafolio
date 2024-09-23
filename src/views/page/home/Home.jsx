import './home.css';

import { AnimatePresence, motion } from "framer-motion";

import IconoEmail from '../../../icons/IconEmail';
import IconoLinkedin from '../../../icons/IconoLinkedin';
import IconoGithub from '../../../icons/IconoGithub';

function Home(){

    const openWindowToSendEmail = () => {

        const email = 'davidarielmarquez@outlook.com';
        const mailtoUrl = `mailto:${email}`;

        window.open(mailtoUrl);
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }}
                        >
                <div className="home__container">
                    <div className="home__content">
                        <div className="home__texto__container">
                            <div className="home__texto__content">
                                <h1 className='home__texto__titulo'>Hola, Soy David.<span>&#160;</span></h1>
                                <h3 className='home__texto__subtitulo'>Desarrollador Full Stack.<span>&#160;</span></h3>
                                <p className='home__texto__descripcion'>
                                    Me apasiona la programación y conocer el mundo!<span>&#160;</span>
                                </p>
                            </div>
                        </div>
                        <div className='home__iconos__container'>
                            <div className='home__iconos__content'>
                                <div className='iconos__container'>
                                    <div className='iconos__content'>
                                        <div className='iconos__item'>
                                            <button onClick={() => openWindowToSendEmail()}>
                                                <IconoEmail className="home__icono"/>
                                            </button>
                                        </div>

                                        <div className='iconos__item'>
                                            <a href="https://www.linkedin.com/in/david-ariel-marquez/" target="_blank">
                                                <IconoLinkedin className="home__icono" />
                                            </a>
                                        </div>
                                        
                                        <div className='iconos__item'>
                                            <a href="https://github.com/davidmarquez98" target="_blank">
                                                <IconoGithub className="home__icono" />
                                            </a>
                                        </div>
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