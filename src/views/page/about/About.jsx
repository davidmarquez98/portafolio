import "./about.css";
import perfil from "./../../../perfil.jpeg"
function About(){
    return (
        <div>
            <div className="introduccion-container">
                <div className="introduccion-content">
                    <div className="informacion-container">
                        <div className="informacion-content">
                            <p className="informacion__texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, beatae suscipit temporibus error quibusdam amet animi architecto nisi rerum officia, eveniet distinctio, obcaecati porro provident quisquam tempore blanditiis impedit voluptatem.</p>
                        </div>me gusta viajar, aprender, mi sueño es conocer europa y varios paises mas del exterior, aprender de sus culturas, tradiciones e historia, tambien una de mis metas es saber hablar ingles nativo, actualmente mi ingles es b2+
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
    );

}

export default About;