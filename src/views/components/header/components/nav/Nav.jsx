import { Link } from "react-router-dom";

import './nav.css';

function Nav(){
    return (
        <div className='nav-container'>
            <div className='nav-content'>
                <ul className='nav-lista'>
                    <li>
                        <Link to="/"><h3>Home</h3></Link>
                    </li>
                    <li>
                        <Link to="/about"><h3>Sobre Mi</h3></Link>
                    </li>
                    <li>
                        <Link to="/projects"><h3>Projectos</h3></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;