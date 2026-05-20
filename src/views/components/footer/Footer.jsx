import { useSelector } from 'react-redux';
import './footer.css';

function Footer () {

    const mode = useSelector((state) => state.mode.value);

    return (
        <footer className={mode}>
            <div className="flex items-center justify-center h-full">
               <h3 className={`footer-titulo ${mode}`}>
                   &copy; 2024 David Marquez
               </h3>
            </div>
        </footer>
    );
}

export default Footer;
