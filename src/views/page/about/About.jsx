import "./about.css";
import perfil from "./../../../perfil.jpeg"
function About(){
    return (
        <div className="about-container">
            <div className="about-content">

                {/* INTRODUCCION */}
                <div className="introduccion-container">
                    <div className="introduccion-content">
                        <div className="informacion-container">
                            <div className="informacion-content">
                                <p className="informacion__texto">Tengo 26 años y resido en <b>Buenos Aires, Argentina.</b> Mi mayor anhelo es explorar Europa y diversos países extranjeros para sumergirme en su cultura, historia y tradiciones. 
                                En mis momentos libres, disfruto de una amplia gama de actividades, desde ver películas, escuchar música y leer novelas y mangas hasta programar y jugar videojuegos.
                                También comparto momentos especiales con amigos jugando a la pelota y saliendo a tomar algo con mi novia. 
                                Encuentro paz y tranquilidad en los días lluviosos, y me encanta experimentar en la cocina de vez en cuando.</p>
                                <span><b>Mi filosofía de vida se centra en aprender, crecer y mejorar constantemente, valorando las pequeñas alegrías que la vida tiene para ofrecer y manteniéndome en 
                                constante movimiento.</b></span>
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

                
                {/* EXPERIENCIA */}
                <div className="experiencia-container">
                    <div>
                        <h4 className="experiencia-titulo">EXPERIENCIA</h4>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;