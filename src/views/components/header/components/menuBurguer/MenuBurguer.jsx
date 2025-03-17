import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import { useSelector } from 'react-redux';

import './menuBurguer.css';
import Mode from './../mode/Mode.jsx';
import Languages from './../languages/languages.jsx';
import IconoMenuBurguer from './../../../../../icons/IconoMenuBurguer.jsx'

export default function MenuBurguer() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const mode = useSelector((state) => state.mode.value);

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
                className={`menu-container ${mode}`}
            >
                <div className='menu-content'>
                    <Languages/>
                    <Mode />
                </div>
            </Menu>
        </div>
    </div>
  );
}