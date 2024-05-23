import { IoIosRadioButtonOn } from "react-icons/io";
import "./mode.css";

function Mode({ setMode, getMode }){

    const handleClick = () => {
        const currentMode = !getMode;
        setMode(currentMode);
    }
    
    return (
        <div className='mode-container'>
            <div className='mode-content'>
                <button onClick={handleClick}>
                    <IoIosRadioButtonOn className="button-dark-mode"/>
                </button>
            </div>
        </div>
    );
}

export default Mode;