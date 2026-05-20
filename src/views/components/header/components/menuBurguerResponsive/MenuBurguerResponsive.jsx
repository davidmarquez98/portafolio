import * as React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import Languages from './../languages/languages.jsx';
import Mode from './../mode/Mode.jsx';

import IconoHome from './../../../../../icons/IconHome.jsx'; 
import IconoAbout from './../../../../../icons/IconAboutMe.jsx' 
import IconoProjects from './../../../../../icons/IconProjects.jsx' 
import IconoMenuBurguer from './../../../../../icons/IconoMenuBurguer.jsx';


export default function MenuBurguerResponsive() {

    const [open, setOpen] = React.useState(false);
    const mode = useSelector((state) => state.mode.value);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="z-[10000] flex h-full flex-col justify-between p-[24px]">
        <ul className="flex w-full flex-col gap-[24px]">
            <li>
                <Link to="/" onClick={toggleDrawer(false)}>
                    <div className="flex flex-row gap-[20px]">
                        <div>
                            <IconoHome className={'text-[30px]'}/>
                        </div>
                        <div className="flex items-center justify-center text-[var(--secondary-color)] dark:text-[var(--secondary-color-dark-mode)]">
                            <h3>Home</h3>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/about" onClick={toggleDrawer(false)}>
                    <div className="flex flex-row gap-[20px]">
                        <div>
                            <IconoAbout className={'text-[30px]'}/>
                        </div>
                        <div className="flex items-center justify-center text-[var(--secondary-color)] dark:text-[var(--secondary-color-dark-mode)]">
                            <h3>Sobre mi</h3>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/projects" onClick={toggleDrawer(false)}>
                    <div className="flex flex-row gap-[20px]">
                        <div>
                            <IconoProjects className={'text-[30px]'}/>
                        </div>
                        <div className="flex items-center justify-center text-[var(--secondary-color)] dark:text-[var(--secondary-color-dark-mode)]">
                            <h3>Proyectos</h3>
                        </div>
                    </div>
                </Link>
            </li>
        </ul>
        <div className="flex items-center justify-center gap-[34px] border-t border-[rgb(121_85_72_/_0.18)] pt-[22px] dark:border-[rgb(174_199_178_/_0.18)]">
            <Languages />
            <Mode />
        </div>
    </div>

  );

  return (
    <div className="relative z-[140] flex min-[800px]:hidden justify-end">
        <div>
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
                minWidth: '52px',
                padding: '8px',
            }}
            >
                <IconoMenuBurguer className="text-[38px]"/>
            </Button>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={toggleDrawer( false)}
                sx={{
                    '& .MuiPaper-root' : {
                        backgroundColor : mode === 'light' ? 'var(--primary-color)' : 'var(--primary-color-dark-mode)',
                        width: "min(320px, 85vw)"
                    }
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    </div>
  );
}
