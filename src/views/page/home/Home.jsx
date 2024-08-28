import './home.css';

import { AnimatePresence, motion } from "framer-motion";

import IconoEmail from '../../../icons/IconEmail';
import IconoLinkedin from '../../../icons/IconoLinkedin';
import IconoGithub from '../../../icons/IconoGithub';

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
            <motion.div className="sobre-mi-container"         
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }} // Especifica la duración de la animación en segundos
                        >
                <div className="home-container">
                    <div className="home-content">
                        <div className="texto-container">
                            <div className="texto-content">
                                <h1 className='texto__titulo'>Hola, Soy David.<span>&#160;</span></h1>
                                <h3 className='texto__subtitulo'>Desarrollador Full Stack.<span>&#160;</span></h3>
                                <p className='texto__descripcion'>
                                    Me apasiona la programación y conocer el mundo!<span>&#160;</span>
                                </p>
                            </div>
                        </div>
                        <div className='home-second-container'>
                            <div className='home-second-content'>
                                <div className='icono-container'>
                                    <div className='icono-content'>
                                        <div className='home-logo-container'>
                                            <button onClick={() => openWindowToSendEmail()}>
                                                <IconoEmail className="home-icono"/>
                                            </button>
                                        </div>

                                        <div className='home-logo-container'>
                                            <a href="https://www.linkedin.com/in/david-ariel-marquez/" target="_blank">
                                                <IconoLinkedin className="home-icono" />
                                            </a>
                                        </div>
                                        
                                        <div className='home-logo-container'>
                                            <a href="https://github.com/davidmarquez98" target="_blank">
                                                <IconoGithub className="home-icono" />
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