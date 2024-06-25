import './logo.css';

import imagen from './../../../../../assets/images/computadora.png'

function Logo(){
    return (
        <div className='logo-container header__item'>
            <div className='logo-content'>
                <img src={imagen} className='imagen-computadora'></img>
            </div>
        </div>
    );
};

export default Logo;