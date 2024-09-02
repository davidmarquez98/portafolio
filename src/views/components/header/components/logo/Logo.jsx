import './logo.css';

import { Link } from "react-router-dom";

import imagen from './../../../../../assets/images/computadora.png'

function Logo(){
    return (
        <div className='logo-computer-container header__item'>
            <div className='logo-content'>
                <Link to="/portafolio">
                    <img src={imagen} className='imagen-computadora'></img>
                </Link>
            </div>
        </div>
    );
};

export default Logo;