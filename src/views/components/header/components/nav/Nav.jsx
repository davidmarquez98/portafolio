import { Link } from "react-router-dom";
import { useState } from "react";

import './nav.css';

import LocationWatcher from './../../../../../router/LocationWatcher.jsx'

function Nav(){

    const stringPortfolio = "/";
    const stringAboutMe = "/about";
    const stringProjects = "/projects";

    const styleNameSelected = {
        home: { left: '53px' },
        aboutMe: { left: '215px' },
        projects: { left: '400px' }
    };

    let [ path, setPath ] = useState("");


    const styleSelected = () => {
        return path == stringPortfolio ||  path == (stringPortfolio + '/') ? styleNameSelected.home : 
                                path == stringAboutMe ?  styleNameSelected.aboutMe :
                                path == stringProjects ?  styleNameSelected.projects : {};
    }


    return (
        <div className='nav__container'>
            <LocationWatcher setLocation={setPath}/>
            <div className='nav__content'>

                <div className="nav__circle--selected" style={styleSelected()}/>

                <ul className='nav__lista'>
                    <li className="nav__item">
                        <Link to="/"><h3>Home</h3></Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about"><h3>Sobre Mi</h3></Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/projects"><h3>Proyectos</h3></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;