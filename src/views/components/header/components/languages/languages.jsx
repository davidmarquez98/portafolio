import "./languages.css";

import { useState } from 'react';

import englishFlag from "./../../../../../assets/images/english.png"
import spanishFlag from "./../../../../../assets/images/spanish.png"

import { useTranslation } from 'react-i18next';

// HAY QUE AGREGAR UN MENU BURGUER PARA LENGUAJES Y DARK MODE BUTTON
const Languages = ({ className }) => {

    
    const { i18n } = useTranslation();

    const español = 'es'; 
    const ingles = 'en'; 
    let [nowLanguage, setNowLanguage] = useState(español);

    const toggleLanguage = () => {
        const newLang = i18n.language === español ? ingles : español;
        i18n.changeLanguage(newLang);
        setNowLanguage(newLang);
    };

    return(
        <div className="languages-container">
            <div className="languages-content">
                <div className="item-container">
                    {
                        nowLanguage == español ? 
                        (
                            <button onClick={() => toggleLanguage()}>
                                <img src={englishFlag} className={`english-flag ${className}`}></img>
                            </button>
                        ) : (
                            <button onClick={() => toggleLanguage()}>
                                <img src={spanishFlag} className={`spanish-flag ${className}`}></img>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Languages;