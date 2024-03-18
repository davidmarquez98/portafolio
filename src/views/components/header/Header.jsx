import './header.css'

import Logo from './components/logo/Logo.jsx';
import Nav from './components/nav/Nav.jsx';
import Mode from './components/mode/Mode.jsx';

function Header(){
    return (
        <header>
            <div className='header-content'>

                <Logo/>

                <Nav/>

                <Mode/>

            </div>
        </header>
    );
}

export default Header;