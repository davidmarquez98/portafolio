import MenuIcon from '@mui/icons-material/Menu';

function IconoMenuBurguer({ className }){
    return (<MenuIcon className={`text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)] ${className}`} />);
};

export default IconoMenuBurguer;