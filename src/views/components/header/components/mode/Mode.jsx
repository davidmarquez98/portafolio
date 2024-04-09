import { IoIosRadioButtonOn } from "react-icons/io";
import "./mode.css";

function Mode(props){

    console.log("isDark dentro de Mode")
    console.log(props.isDark);

    const handleClick = () => {
        console.log("Aa")
        console.log(props.isDark)
        // Cambiar el modo oscuro
        const currentMode = !props.isDark;
        console.log(currentMode)
        props.setMode(currentMode); // Invertir el modo actual
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