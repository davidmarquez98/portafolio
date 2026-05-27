

import Logo from './components/logo/Logo.jsx';
import Nav from './components/nav/Nav.jsx';
import MenuBurger from './components/menuBurguer/MenuBurguer.jsx'
import MenuBurguerResponsive from './components/menuBurguerResponsive/MenuBurguerResponsive.jsx';
import './header.css';

function Header(){
    
    return (
        <header>
            <div className="header-content">
                <div className="header__item header__brand">
                    <Logo/>
                </div>

                <Nav/>
                
                <div className="header__item header__actions">
                    <MenuBurger/> 
                    <MenuBurguerResponsive/>
                </div>
            </div>
        </header>
    );
}

export default Header;
