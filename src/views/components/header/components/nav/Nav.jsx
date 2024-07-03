import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import './nav.css';

import LocationWatcher from './../../../../../router/LocationWatcher.jsx'

function Nav(){

    const stringPortfolio = "/portafolio";
    const stringAboutMe = "/portafolio/about";
    const stringProjects = "/portafolio/projects";

    const styleNameSelected = {
        home: "left: 20px",
        aboutMe: "left: 0px",
        projects: "rigth: 20px"
    };

    // let [ nowPage, setNowPage ] = useState("portafolio"); 
    let [ path, setPath ] = useState("");

    const validateNavItem = (namePageToValidate) => path == namePageToValidate ? 'nav-item_selected' : '';

    const styleSelected = () => path == stringPortfolio ? styleNameSelected.home : 
                                path == stringAboutMe ?  styleNameSelected.aboutMe :
                                path == stringProjects ?  styleNameSelected.projects : '';


    return (
        <div className='nav-container'>
            <LocationWatcher setLocation={setPath}/>
            <div className='nav-content'>
                <div className="circle-name-selected" style={styleSelected}/>
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