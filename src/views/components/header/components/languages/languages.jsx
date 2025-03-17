import "./languages.css";

import { useState } from 'react';

import englishFlag from "./../../../../../assets/images/english.png"
import spanishFlag from "./../../../../../assets/images/spanish.png"


// HAY QUE AGREGAR UN MENU BURGUER PARA LENGUAJES Y DARK MODE BUTTON
const Languages = ({ className }) => {

    const español = 'es'; 
    const ingles = 'en'; 

    let [nowLanguage, setNowLanguage] = useState(español);

    function cambiarLenguaje(nuevoLenguaje){
        console.log("ll");
        setNowLanguage(nuevoLenguaje);
    }

    return(
        <div className="languages-container">
            <div className="languages-content">
                <div className="item-container">
                    {/* {
                        nowLanguage == español ? 
                        (
                            <button onClick={() => cambiarLenguaje(ingles)}>
                                <img src={englishFlag} className={`english-flag ${className}`}></img>
                            </button>
                        ) : (
                            <button onClick={() => cambiarLenguaje(español)}>
                                <img src={spanishFlag} className={`spanish-flag ${className}`}></img>
                            </button>
                        )
                    } */}
                </div>
            </div>
        </div>
    );
}

export default Languages;