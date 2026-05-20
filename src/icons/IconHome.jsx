import HomeIcon from '@mui/icons-material/Home';

function IconoHome({ className }){
    return (<HomeIcon className={`text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)] ${className}`} />);
};

export default IconoHome;