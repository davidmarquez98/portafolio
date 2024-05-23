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

//   const [ isDarkMode, setDarkMode ] = useDarkMode();


//   const setMode = (isDark) => {
//     if(isDark != null){
//         console.log("Dentro del if de setMode");
//         localStorage.setItem("isDarkMode", JSON.stringify(isDark));
//     }
// }

// const getMode = () => {
//     const isDark = JSON.parse(localStorage.getItem("isDarkMode"));
//     console.log("isDark dentro de getMode de Header");
//     console.log(isDark);
//     console.log(typeof isDark);
//     console.log(localStorage);
//     return isDark;
// }

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
                    {/* <Mode setMode={setDarkMode} getMode={isDarkMode}/> */}
                    <Mode />
                </div>
            </Menu>
        </div>
    </div>
  );
}