import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import './menuBurguer.css';
import Mode from './../mode/Mode.jsx';
import Languages from './../languages/languages.jsx';
import IconoMenuBurguer from './../../../../../icons/IconoMenuBurguer.jsx'
// import { useDarkMode } from '../../../../../helper/helper.js';

export default function MenuBurguer() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className='burguer-container header__item'>
        <div className='burguer-content'>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
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
            
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button'
                }}
 
                PaperProps={{ 
                    style: {
                        boxShadow: '0px 5px 5px rgba(0, 0, 0, .2)',
                        backgroundColor: '#FCF3CF'
                    }
            }}
            >
                <div className='menu-content'>
                    <Languages/>
                    {/* <Mode setMode={setDarkMode} getMode={isDarkMode}/> */}
                    <Mode />
                </div>
            </Menu>
        </div>
    </div>
  );
}