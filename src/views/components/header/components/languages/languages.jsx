import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";

import englishFlag from "./../../../../../assets/images/english.png";
import spanishFlag from "./../../../../../assets/images/spanish.png";
import { changeShowApp } from "./../../../../../redux/appSlide";

const Languages = ({ className }) => {

    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    const spanish = 'es'; 
    const english = 'en'; 
    const [nowLanguage, setNowLanguage] = useState(i18n.resolvedLanguage || i18n.language || spanish);
    const normalizedLanguage = nowLanguage.split('-')[0];

    const toggleLanguage = () => {
        const currentLanguage = i18n.language.split('-')[0];
        const newLang = currentLanguage === spanish ? english : spanish;
        i18n.changeLanguage(newLang);

        dispatch(changeShowApp());
        setTimeout(() => {
            dispatch(changeShowApp());
            setNowLanguage(newLang);
        }, 700);
    };

    const showEnglishFlag = normalizedLanguage === spanish;

    return(
        <div className="m-auto">
            <button onClick={toggleLanguage} aria-label="Cambiar idioma">
                <img
                    src={showEnglishFlag ? englishFlag : spanishFlag}
                    className={`w-[40px] cursor-pointer ${className ?? ''}`}
                    alt={showEnglishFlag ? "English" : "Español"}
                />
            </button>
        </div>
    );
};

export default Languages;
