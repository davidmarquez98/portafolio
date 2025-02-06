import { IoIosRadioButtonOn } from "react-icons/io";

import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { changeMode } from "../../../../../redux/darkmodeSlide";
import "./mode.css";

function Mode(){

    const dispatch = useDispatch();
    const handleClick = () => dispatch(changeMode());


    return (
        <div className='mode-container'>
            <div className='mode-content'>
                <button onClick={handleClick}>
                    <IoIosRadioButtonOn className="button-dark-mode light"/>
                </button>
            </div>
        </div>
    );
}

export default Mode;