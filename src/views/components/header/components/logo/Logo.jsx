import './logo.css';

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import imagen from './../../../../../assets/images/computadora.png'
import imagen_darkmode from './../../../../../assets/images/computadora-darkmode.png'

function Logo(){

    const mode = useSelector((state) => state.mode.value);

    return (
        <div className='logo-computer-container header__item'>
            <div className='logo-content'>
                <Link to="/">
                    {mode === "light" ? (
                        <img src={imagen} className="imagen-computadora" alt="Light Mode" />
                    ) : (
                        <img src={imagen_darkmode} className="imagen-computadora" alt="Dark Mode" />
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Logo;