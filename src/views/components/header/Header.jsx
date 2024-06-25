import './header.css'

import Logo from './components/logo/Logo.jsx';
import Nav from './components/nav/Nav.jsx';
import MenuBurger from './components/menuBurguer/MenuBurguer.jsx'

function Header(){
    
    return (
        <header>
            <div className='header-content'>

                <Logo/>

                <Nav/>

                <MenuBurger/>

            </div>
        </header>
    );
}

export default Header;