import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import { useSelector } from 'react-redux';


import Mode from './../mode/Mode.jsx';
import Languages from './../languages/languages.jsx';
import IconoMenuBurguer from './../../../../../icons/IconoMenuBurguer.jsx'
import './menuBurguer.css';

export default function MenuBurguer() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const mode = useSelector((state) => state.mode.value);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="burguer-container">
        <div className="burguer-content">
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
                minWidth: '46px',
                padding: '0',
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
                disablePortal
                disableScrollLock={true}
                PaperProps={{ sx: { boxShadow: '0px 5px 5px rgba(0,0,0,0.2)', backgroundColor: mode === 'light' ? 'var(--primary-color)' : 'var(--primary-color-dark-mode)' } }}
            >
                <div className="flex gap-[20px] m-[20px]">
                    <Languages/>
                    <Mode />
                </div>
            </Menu>
        </div>
    </div>
  );
}
