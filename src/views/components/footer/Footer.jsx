

import { useSelector } from 'react-redux';

function Footer () {

    const mode = useSelector((state) => state.mode.value);

    return (
        <footer className="bg-[#E3DCC1] text-[var(--secondary-color)]">
            <div className='footer-content'>
               <h3 className="dark:text-[15px] dark:text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)] dark:text-[10px] bg-[#E3DCC1] text-[var(--secondary-color)]">© 2024 David Marquez</h3>
            </div>
        </footer>
    );
}

export default Footer;