import { IoIosRadioButtonOn } from "react-icons/io";
import { useDispatch } from "react-redux";
import { changeMode } from "../../../../../redux/darkmodeSlide";
import "./mode.css";

function Mode({ setMode, getMode, className }){

    const dispatch = useDispatch();
    const handleClick = () => dispatch(changeMode());

    return (
        <div className='mode-container'>
            <div className='mode-content'>
                <button onClick={handleClick}>
                    <IoIosRadioButtonOn className={`button-dark-mode ${className}`}/>
                </button>
            </div>
        </div>
    );
}

export default Mode;