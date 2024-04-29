import "./languages.css";

import englishFlag from "./../../../../../assets/images/english.png"
import spanishFlag from "./../../../../../assets/images/spanish.png"


// HAY QUE AGREGAR UN MENU BURGUER PARA LENGUAJES Y DARK MODE BUTTON
const Languages = () => {
    return(
        <div className="languages-container">
            <div className="languages-content">
                <div className="item-container">
                    <img src={englishFlag} className="english-flag"></img>
                </div>
                <div>
                    <img src={spanishFlag} className="spanish-flag"></img>
                </div>
            </div>
        </div>
    );
}

export default Languages;