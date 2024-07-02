import { Link } from "react-router-dom";
import { useState } from "react";

import './nav.css';

function Nav(){

    const stringPortfolio = "portafolio";
    const stringAboutMe = "aboutMe";
    const stringProjects = "projects";

    let [ nowPage, setNowPage ] = useState("portafolio"); 

    const validateNavItem = (namePageToValidate) => nowPage == namePageToValidate ? 'nav-item_selected' : '';



    return (
        <div className='nav-container'>
            <div className='nav-content'>
                <ul className='nav-lista'>
                    <li className={ validateNavItem(stringPortfolio)}>
                        <button onClick={ () => setNowPage(stringPortfolio)}>
                            <Link to="/portafolio"><h3>Home</h3></Link>
                        </button>
                    </li>
                    <li className={ validateNavItem(stringAboutMe) }>
                        <button onClick={ () => setNowPage(stringAboutMe)}>
                            <Link to="/portafolio/about"><h3>Sobre Mi</h3></Link>
                        </button>
                    </li>
                    <li className={ validateNavItem(stringProjects) }>
                        <button onClick={ () => setNowPage(stringProjects)}>
                            <Link to="/portafolio/projects"><h3>Projectos</h3></Link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;