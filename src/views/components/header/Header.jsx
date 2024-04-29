import './header.css'

import Logo from './components/logo/Logo.jsx';
import Nav from './components/nav/Nav.jsx';
import Mode from './components/mode/Mode.jsx';
import Languages from './components/languages/languages.jsx';

function Header(){

    const setMode = (isDark) => {
        console.log("dentro de la funcion setMode");
        console.log(isDark);
        console.log(typeof isDark);

        if(isDark != null){
            console.log("Dentro del if de setMode");
            localStorage.setItem("darkMode", isDark);
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
        <header>
            <div className='header-content'>

                <Logo/>

                <Nav/>

                <Languages/>

                <Mode setMode={setMode} getMode={getMode}/>

            </div>
        </header>
    );
}

export default Header;