import { IoIosRadioButtonOn } from "react-icons/io";
import "./mode.css";

function Mode({getMode , setMode }){

    console.log("isDark dentro de Mode")
    console.log(getMode());

    const handleClick = () => {
        console.log("--------------");
        console.log("DENTRO DE HANDLECLICK")
        console.log(getMode())
        // Cambiar el modo oscuro
        const currentMode = !getMode();
        console.log(currentMode)
        console.log("--------------");
        setMode(currentMode); // Invertir el modo actual

    }
    
    return (
        <div className='mode-container header__item'>
            <div className='mode-content' onClick={handleClick}>
                <div>
                    <IoIosRadioButtonOn className="button-dark-mode"/>
                </div>
            </div>
        </div>
    );
}

export default Mode;