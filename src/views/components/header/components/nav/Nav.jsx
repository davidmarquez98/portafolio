import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Trans } from 'react-i18next';
import './nav.css';

function Nav(){

    const { pathname } = useLocation();
    const mode = useSelector((state) => state.mode.value);

    const styleNameSelected = {
        home: { left: '53px' },
        aboutMe: { left: '215px' },
        projects: { left: '400px' }
    };

    const styleSelected = () => {
        return pathname === "/" || pathname === "" ? styleNameSelected.home :
            pathname === "/about" ? styleNameSelected.aboutMe :
            pathname === "/projects" ? styleNameSelected.projects : {};
    };

return (
        <nav className={`nav-container ${mode}`}>
            <div className='nav-content'>
                <div className={`circle-name-selected ${mode}`} style={styleSelected()}/>
                <ul className='nav-lista'>
                    
                    <li>
                        <Link to="/">
                            <h3 className={`nav-link-text ${mode}`}>Home</h3>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/about">
                            <h3 className={`nav-link-text ${mode}`}><Trans i18nKey="nav.about_me"/></h3>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/projects">
                            <h3 className={`nav-link-text ${mode}`}><Trans i18nKey="nav.projects"/></h3>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;
