import './header.css'

import Logo from './components/logo/Logo.jsx';
import Nav from './components/nav/Nav.jsx';
import Mode from './components/mode/Mode.jsx';

function Header(){

    const setMode = (isDark) => {
        console.log("dentro de la funcion setMode de Header");
        console.log(isDark);
        console.log(typeof isDark);

        if(isDark != null){
            console.log("Dentro del if de setMode");
            localStorage.setItem("darkMode", true);
        }else{
            console.log("Dentro del else de setMode");
        }
    }

    function getMode(){
        const isDark = JSON.parse(localStorage.getItem("darkMode"));
        console.log("isDark dentro de getMode de Header");
        console.log(isDark);
        console.log(typeof isDark);
        // return null;
        return isDark;
    }
    
    return (
        <header>
            <div className='header-content'>

                <Logo/>

                <Nav/>

                <Mode setMode={setMode} isDark={getMode()}/>

            </div>
        </header>
    );
}

export default Header;