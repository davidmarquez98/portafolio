

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import imagen from './../../../../../assets/images/computadora.png'
import imagen_darkmode from './../../../../../assets/images/computadora-darkmode.png'

function Logo(){

    const mode = useSelector((state) => state.mode.value);

    return (
        <div className="flex justify-start items-center">
            <div className="cursor-pointer mt-[50px] mr-[60px] mb-[50px] ml-[60px] max-[800px]:m-[30px]">
                <Link to="/">
                    {mode === "light" ? (
                        <img src={imagen} className="w-[80px] max-[800px]:w-[30px]" alt="Light Mode" />
                    ) : (
                        <img src={imagen_darkmode} className="w-[80px] max-[800px]:w-[30px]" alt="Dark Mode" />
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Logo;