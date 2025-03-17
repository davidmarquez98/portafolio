import { IoIosRadioButtonOn } from "react-icons/io";

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

import { changeMode } from "../../../../../redux/darkmodeSlide";
import "./mode.css";

function Mode(){

    const mode = useSelector((state) => state.mode.value);

    const dispatch = useDispatch();
    const handleClick = () => dispatch(changeMode());

    return (
        <div className='mode-container'>
            <div className='mode-content'>
                <button onClick={handleClick}>
                    <IoIosRadioButtonOn className={`button-dark-mode ${mode}`}/>
                </button>
            </div>
        </div> 
    );
}

export default Mode;