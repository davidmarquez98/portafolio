import './footer.css';

import { useSelector } from 'react-redux';

function Footer () {

    const mode = useSelector((state) => state.mode.value);

    return (
        <footer className='light'>
            <div className='footer-content'>
               <h3 className='footer-titulo light'>© 2024 David Marquez</h3>
            </div>
        </footer>
    );
}

export default Footer;