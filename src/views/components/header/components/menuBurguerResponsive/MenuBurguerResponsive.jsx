import * as React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';



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
    <div className="z-[10000]">
        <ul className={'flex flex-col mt-[50px] w-full'}>
            <li className="mb-[30px] pl-[20px]">
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
            <li className="mb-[30px] pl-[20px]">
                <Link to="/about" onClick={toggleDrawer(false)}>
                    <div className="flex flex-row gap-[20px]">
                        <div>
                            <IconoAbout className={'text-[30px]'}/>
                        </div>
                        <div className="flex items-center justify-center text-[var(--secondary-color)] dark:text-[var(--secondary-color-dark-mode)]">
                            <h3>Sobre Mi</h3>
                        </div>
                    </div>
                </Link>
            </li>
            <li className="mb-[30px] pl-[20px]">
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
        {/* <Divider/>
        <ul className={'flex flex-col gap-[20px]'}>
            <li>
                <div className="flex flex-row gap-[20px]">
                    <div className="flex items-center justify-center m-[auto] gap-[40px]">
                        <div>
                            <Languages className={'menuBurguerResponsive_languages'}/>
                        </div>
                        <div>
                            <Mode className="text-[50px]"/>
                        </div>
                    </div>
                </div>
            </li>
        </ul> */}
    </div>

  );

  return (
    <div className="flex min-[800px]:hidden justify-end">
        <div className='mt-[50px] mr-[110px] mb-[50px] ml-[110px] max-[800px]:m-[20px]'>
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
                <IconoMenuBurguer className="text-[30px]"/>
            </Button>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={toggleDrawer( false)}
                sx={{
                    '& .MuiPaper-root' : {
                        backgroundColor : mode === 'light' ? 'var(--primary-color)' : 'var(--primary-color-dark-mode)',
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