import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import './nav.css';

import LocationWatcher from './../../../../../router/LocationWatcher.jsx'

function Nav(){

    const stringPortfolio = "/portafolio";
    const stringAboutMe = "/portafolio/about";
    const stringProjects = "/portafolio/projects";

    // let [ nowPage, setNowPage ] = useState("portafolio"); 
    let [ path, setPath ] = useState("");

    const validateNavItem = (namePageToValidate) => path == namePageToValidate ? 'nav-item_selected' : '';


    // useEffect( () => { 

    // }, nowPage);

    return (
        <div className='nav-container'>
            <LocationWatcher setLocation={setPath}/>
            <div className='nav-content'>
                <ul className='nav-lista'>
                    <li className={ validateNavItem(stringPortfolio)}>
                        <Link to="/portafolio"><h3>Home</h3></Link>
                    </li>
                    <li className={ validateNavItem(stringAboutMe) }>
                        <Link to="/portafolio/about"><h3>Sobre Mi</h3></Link>
                    </li>
                    <li className={ validateNavItem(stringProjects) }>
                        <Link to="/portafolio/projects"><h3>Projectos</h3></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;