import { Link } from "react-router-dom";
import { useState } from "react";

import LocationWatcher from './../../../../../router/LocationWatcher.jsx';

import { Trans } from 'react-i18next';

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
        <div className='fixed z-[100] left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[60px] w-[600px] mt-[80px] rounded-[50px] bg-[rgb(252_243_207_/_0.7)] backdrop-blur-[10px] max-[800px]:hidden'>
            <LocationWatcher setLocation={setPath}/>
            <div className='relative flex justify-center items-center w-full'>
                <div className="absolute rounded-[50px] w-[120px] h-[42px] transition-all ease-[ease] duration-500 bg-[#D5CAC7]" style={styleSelected()}/>
                
                <ul className='relative z-[1] flex flex-row gap-[80px] list-none m-0 p-0'>
                    
                    <li className="px-[12px] py-0 text-center flex items-center justify-center">
                        <Link to="/" className="cursor-pointer !no-underline text-[16px] font-bold !text-[#795548] visited:!text-[#795548] active:!text-[#795548] focus:!text-[#795548]">
                            Home
                        </Link>
                    </li>
                    
                    <li className="px-[12px] py-0 text-center flex items-center justify-center">
                        <Link to="/about" className="cursor-pointer !no-underline text-[16px] font-bold !text-[#795548] visited:!text-[#795548] active:!text-[#795548] focus:!text-[#795548]">
                            <Trans i18nKey="nav.about_me"/>
                        </Link>
                    </li>
                    
                    <li className="px-[12px] py-0 text-center flex items-center justify-center">
                        <Link to="/projects" className="cursor-pointer !no-underline text-[16px] font-bold !text-[#795548] visited:!text-[#795548] active:!text-[#795548] focus:!text-[#795548]">
                            <Trans i18nKey="nav.projects"/>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Nav;
