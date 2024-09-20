import * as React from 'react';
import { Link } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import './menuBurguerResponsive.css'

import Languages from './../languages/languages.jsx';
import Mode from './../mode/Mode.jsx';

import IconoHome from './../../../../../icons/IconHome.jsx'; 
import IconoAbout from './../../../../../icons/IconAboutMe.jsx' 
import IconoProjects from './../../../../../icons/IconProjects.jsx' 
import IconoMenuBurguer from './../../../../../icons/IconoMenuBurguer.jsx';


export default function MenuBurguerResponsive() {

    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className='drawerList'>
        <ul className={'menuBurguerResponsive__opcion_lista'}>
            <li className='menuBurguerResponsive_opcion'>
                <Link to="/" onClick={toggleDrawer(false)}>
                    <div className='menuBurguerResponsive_opcion__container'>
                        <div>
                            <IconoHome className={'menuBurguerResponsive__opcion_icono'}/>
                        </div>
                        <div className='menuBurguerResponsive_opcion__text'>
                            <h3>Home</h3>
                        </div>
                    </div>
                </Link>
            </li>
            <li className='menuBurguerResponsive_opcion'>
                <Link to="/about" onClick={toggleDrawer(false)}>
                    <div className='menuBurguerResponsive_opcion__container'>
                        <div>
                            <IconoAbout className={'menuBurguerResponsive__opcion_icono'}/>
                        </div>
                        <div className='menuBurguerResponsive_opcion__text'>
                            <h3>Sobre Mi</h3>
                        </div>
                    </div>
                </Link>
            </li>
            <li className='menuBurguerResponsive_opcion'>
                <Link to="/projects" onClick={toggleDrawer(false)}>
                    <div className='menuBurguerResponsive_opcion__container'>
                        <div>
                            <IconoProjects className={'menuBurguerResponsive__opcion_icono'}/>
                        </div>
                        <div className='menuBurguerResponsive_opcion__text'>
                            <h3>Proyectos</h3>
                        </div>
                    </div>
                </Link>
            </li>
        </ul>
        {/* <Divider/>
        <ul className={'menuBurguerResponsive__opcion_lista'}>
            <li>
                <div className='menuBurguerResponsive_opcion__container'>
                    <div className='menuBurguerResponsive_opcion_second__content'>
                        <div>
                            <Languages className={'menuBurguerResponsive_languages'}/>
                        </div>
                        <div>
                            <Mode className='menuBurguerResponsive_mode'/>
                        </div>
                    </div>
                </div>
            </li>
        </ul> */}
    </div>

  );

  return (
    <div className='menuBurguerResponsive-container header__item'>
        <div className='burguer-content'>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={toggleDrawer(true)}
            sx={{
                '&:hover': {
                    backgroundColor: 'inherit', // Quitar el cambio de color de fondo
                    boxShadow: 'none' // Quitar el efecto de sombra
                },
                '&:active': {
                    backgroundColor: 'inherit', // Quitar el cambio de color de fondo al hacer clic
                    boxShadow: 'none' // Quitar el efecto de sombra al hacer clic
                },
                '&:focus': {
                    backgroundColor: 'inherit', // Quitar el cambio de color de fondo al enfocar
                    boxShadow: 'none' // Quitar el efecto de sombra al enfocar
                },
                '& .MuiTouchRipple-root': {
                    display: 'none', // Deshabilitar el efecto ripple
                },
            }}
            >
                <IconoMenuBurguer className="burguer-icono"/>
            </Button>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={toggleDrawer( false)}
                sx={{
                    '& .MuiPaper-root' : {
                        backgroundColor : "#FCF3CF",
                        width: "50%"
                    }
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    </div>
  );
}