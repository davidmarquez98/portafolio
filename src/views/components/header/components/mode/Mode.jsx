import { IoIosRadioButtonOn } from "react-icons/io";

import { useDispatch } from "react-redux";

import { changeMode } from "./../../../../../redux/darkmodeSlide";
import { changeShowApp } from "./../../../../../redux/appSlide";


function Mode(){

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
        <div className="m-auto">
            <div className="cursor-pointer">
                <button onClick={handleClick}>
                    <IoIosRadioButtonOn className={`text-[40px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]`} />
                </button>
            </div>
        </div>
    );
}

export default Mode;
