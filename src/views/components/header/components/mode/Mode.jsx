import { IoIosRadioButtonOn } from "react-icons/io";

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

import { changeMode } from "./../../../../../redux/darkmodeSlide";
import { changeShowApp } from "./../../../../../redux/appSlide";
import "./mode.css";

function Mode(){

    const mode = useSelector((state) => state.mode.value);
    const dispatch = useDispatch();
    const handleClick = () => {
        setTimeout(() => {
          dispatch(changeMode());
        }, 700);

        dispatch(changeShowApp());
        const showTimer = setTimeout(() => dispatch(changeShowApp()), 700);
        return () => clearTimeout(showTimer);

      };

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