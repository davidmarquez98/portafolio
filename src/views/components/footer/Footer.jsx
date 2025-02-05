import './footer.css';

import { useSelector } from 'react-redux';

function Footer () {

    const isDarkmodeActivated = useSelector((state) => state.darkMode.isActivated)

    return (
        <footer>
            <div className='footer-content'>
               <h3 className={ isDarkmodeActivated ? "footer-titulo dark-mode-color-sec" : 'footer-titulo' }>© 2024 David Marquez</h3>
            </div>
        </footer>
    );
}

export default Footer;