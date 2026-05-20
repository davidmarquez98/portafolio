

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import imagen from './../../../../../assets/images/computadora.png'
import imagen_darkmode from './../../../../../assets/images/computadora-darkmode.png'
import './logo.css';

function Logo(){

    const mode = useSelector((state) => state.mode.value);

    return (
        <div className="logo-computer-container">
            <div className="logo-content">
                <Link to="/" aria-label="Home">
                    {mode === "light" ? (
                        <img src={imagen} className="imagen-computadora" alt="Inicio" />
                    ) : (
                        <img src={imagen_darkmode} className="imagen-computadora" alt="Inicio" />
                    )}
                </Link>
            </div>
        </div>
    );
}

export default Logo;
