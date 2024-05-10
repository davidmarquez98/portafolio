import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './menuBurguer.css';
import Mode from './../mode/Mode.jsx';
import Languages from './../languages/languages.jsx';
import IconoMenuBurguer from './../../../../../icons/IconoMenuBurguer.jsx'

export default function MenuBurguer({ isDarkMode, setIsDarkMode }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  console.log(isDarkMode);


  const setMode = (isDark) => {
    if(isDark != null){
        console.log("Dentro del if de setMode");
        localStorage.setItem("darkMode", JSON.stringify(isDark));
    }
}

const getMode = () => {
    const isDark = JSON.parse(localStorage.getItem("darkMode"));
    console.log("isDark dentro de getMode de Header");
    console.log(isDark);
    console.log(typeof isDark);
    console.log(localStorage);
    return isDark;
}

  return (
    <div className='burguer-container header__item'>
        <div className='burguer-content'>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
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
                sx={{   
                        left: '-80px' 
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
                    <Mode setMode={setMode} getMode={getMode}/>
                </div>
            </Menu>
        </div>
    </div>
  );
}