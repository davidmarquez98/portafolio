import "./about.css";
import perfil from "./../../../perfil.jpeg";
import byma_logo from "./../../../assets/images/byma-logo.png";

import react_logo from "./../../../assets/images/react-logo.png";
import vue_logo from "./../../../assets/images/vue-logo.png";
import quarkus_logo from "./../../../assets/images/quarkus-logo.png";
import spring_logo from "./../../../assets/images/spring-logo.png";
import oracle_logo from "./../../../assets/images/oracle-logo.png";
import docker_logo from "./../../../assets/images/docker-logo.png";
import kubernetes_logo from "./../../../assets/images/kubernetes-logo.png";

function About(){
    return (
        <div className="about-container">
            <div className="about-content">

                {/* INTRODUCCION */}
                <div className="sobre-mi-container">
                    <div className="sobre-mi-content">
                        <div className="introduccion-container">
                            <div className="introduccion-content">
                                <div className="informacion-container">
                                    <div className="informacion-content">
                                        <div className="sobre-mi-titulo-container">
                                            <div className="sobre-mi-titulo-content">
                                                <h3 className="sobre-mi-titulo">Un poco sobre mi..</h3>
                                            </div>
                                        </div>
                                        <div className="informacion__card">
                                            <p className="informacion__texto">Tengo 26 años y resido en <b>Buenos Aires, Argentina.</b> Tengo más de 2 años desarrollando como <b>programador Full Stack</b>, lo que me ha permitido explorar mi pasión por la tecnología y ampliar mis habilidades en el ámbito informático.
                                            <br/>
                                            Mi mayor anhelo es explorar Europa y diversos países extranjeros para sumergirme en su cultura, historia y tradiciones. 
                                            En mis momentos libres, disfruto de una amplia gama de actividades, desde ver películas, escuchar música y leer novelas y mangas hasta programar y jugar videojuegos.
                                            También comparto momentos especiales con amigos jugando a la pelota y saliendo a tomar algo con mi novia. 
                                            Encuentro paz y tranquilidad en los días lluviosos, y me encanta experimentar en la cocina de vez en cuando.</p>
                                            <span><b>Mi filosofía de vida se centra en aprender, crecer y mejorar constantemente, valorando las pequeñas alegrías que la vida tiene para ofrecer y manteniéndome en 
                                            constante movimiento.</b></span>
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
                </div>

                
                    <div className="habilidades-experiencia-container">  
                        <div className="habilidades-experiencia-content">
                                            {/* HABILIDADES */}
                            <div className="habilidades-container">
                                <div className="habilidades-content">
                                    <div className="habilidades-titulo-container">
                                        <div className="habilidades-titulo-content">
                                            <h4>HABILIDADES</h4>
                                        </div>
                                    </div>
                                    <div className="habilidades-logo-container">
                                        <div className="habilidades-logo-content">
                                            <div className="logo-container">
                                                <img className="logo-default" src={react_logo}></img>
                                            </div>
                                            <div className="logo-container">
                                                <img className="logo-default" src={vue_logo}></img>
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

                                            {/* EXPERIENCIA */}
                            <div className="experiencia-container">
                                <div className="experiencia-content">
                                    <div className="experiencia-titulo-container">
                                        <div className="experiencia-titulo-content">
                                            <h4 className="experiencia-titulo">EXPERIENCIA</h4>
                                        </div>
                                    </div>
                                    <div className="experiencia-informacion-container">
                                        <div className="experiencia-informacion-content">

                                            <div className="trabajo-container">
                                                <div className="trabajo-content">
                                                    <div className="trabajo-header">
                                                        <h3 className="trabajo-nombre">BYMA, Caja de Valores</h3><h3 className="trabajo-tiempo">2022 OCTUBRE - ACTUALIDAD </h3>
                                                    </div>
                                                    <p className="trabajo-parrafo">I specialize in tools like <b>Quarkus</b>, <b>Apache Kafka</b>, <b>JWT</b>, <b>Hibernate</b>, and <b>Panache</b> for efficient backend implementation. 
                                                    We practice reactive programming to ensure that APIs are as efficient as possible for the system. In the realm of databases, we use Oracle, ensuring comprehensive data management. 
                                                    For frontend development, we employ <b>VueJS</b> to create sophisticated and highly functional user interfaces.</p>
                                                </div>
                                            </div>

                                            <div className="empresa-imagen-container">
                                                <div className="empresa-imagen-content">
                                                    <img className="byma-imagen" src={byma_logo}></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                    </div>


        
            </div>
        </div>
    );

}

export default About;